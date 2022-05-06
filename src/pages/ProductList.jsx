import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Containter = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filler = styled.div`
    margin: 20px;
    ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({  marginRight: "0px" })}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({  margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Containter>
        <Navbar />
        <Announcement/>
        <Title>Hot Items</Title>
        <FilterContainer>
            <Filler>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filler>
            <Filler>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filler>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Containter>
  );
};

export default ProductList;