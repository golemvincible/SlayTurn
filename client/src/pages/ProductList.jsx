import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import  Announcement  from '../components/Announcement'
import  Products  from '../components/Products'

import  Footer  from '../components/Footer'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import Newsletter from '../components/Newsletter'

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;

`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({
        width: "0px 20px",
        display: "flex",
        flexDirection:"column",
    })}
`
const FilterText = styled.span`
    font-weight: 600;
    font-size: 20px;
    margin-right: 20px;
    ${mobile({
        alignItems: "center",
        marginBottom: "5px"
    })}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({
        marginBottom: "15px"
    })}
`
const Option = styled.option`
    
`

export default function ProductList() {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];

    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    function handleFilters(e) {
        const value = e.target.value;
        setFilters({
        ...filters,
        [e.target.name]: value,
        });
    }
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>
            {cat}
        </Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products: </FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Option disabled>
                        Color
                    </Option>
                    <Option>white</Option>
                    <Option>black</Option>
                    <Option>red</Option>
                    <Option>blue</Option>
                    <Option>yellow</Option>
                    <Option>green</Option>
                </Select>
                <Select name="size" onChange={handleFilters}>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>SortProducts: </FilterText>
                <Select onChange={(e) => setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc">Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  ) 
}
