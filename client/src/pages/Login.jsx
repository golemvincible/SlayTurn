import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
import { useDispatch, useSelector } from "react-redux";
import { login } from '../redux/apiCalls';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    ${mobile({
        width: "80%"
    })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
    
`

const Button = styled.button`
    margin-top: 15px;
    width: 100%;
    border: none;
    padding: 15px 20px ;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 20px;
    transition: all 0.3s ease;
    &:disabled {
        color: green;
        cursor: not-allowed;
    }
    &:hover{
      background-color: rgb(10, 87, 87);
    }
`

const Link = styled.a`
  margin: 5px 0px;
  font-size: 15px;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }

`
const Error = styled.span`
  color: red;
`;
export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    };
  return (

    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}
