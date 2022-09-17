import React from "react";
import styled from "styled-components";

const YourNextInspo = () => {
    return (
        <NextInspoContainer>
            <Title><h2>Your Next Inspo</h2>
            <p>Checkout who’s wearing what by using #THREADEDInspo on Instagram</p>
            </Title>
            <ProductContainer>
                <Gallery>
                <div className="product-image">
                    <a href="/">
                    <img src={require('../Images/Your-Next-Inspo-1.png')} alt="Your-Next-Inspo-1" /></a>
                </div>
                <div className="product-image">
                    <a href="/">
                    <img src={require('../Images/Your-Next-Inspo-2.png')} alt="Your-Next-Inspo-2" /></a>
                </div>
                <div className="product-image">
                    <a href="/">
                    <img src={require('../Images/Your-Next-Inspo-3.png')} alt="Your-Next-Inspo-1" /></a>
                </div>
                <div className="product-image">
                    <a href="/">
                    <img src={require('../Images/Your-Next-Inspo-4.png')} alt="Your-Next-Inspo-4" /></a>
                </div>
                <div className="product-image">
                    <a href="/">
                    <img src={require('../Images/Your-Next-Inspo-5.png')} alt="Your-Next-Inspo-5" /></a>
                </div>
                <StyledButton>view all posts</StyledButton>
                </Gallery>
            </ProductContainer>
        </NextInspoContainer>
        
    );
};

export default YourNextInspo;
const NextInspoContainer = styled.div`
    background-color: #E5E5E5;
    max-height: 550px;
    margin-top: -100px;
    padding: 50px;
    justify-content: center;
    align-items: center;
`;
const ProductContainer = styled.div`
        display: flex;
        width: 100vw;
        height: 580px;
        justify-content: center;
        align-items: center;

`;
const Title = styled.div`
        text-align: center;
        font-family: 'Montserrat';
        font-style: normal;

        h2 {
            font-weight: 800;
            font-size: 36px;
            margin-bottom: 10px;
        }

        p {
            font-weight: 400;
            font-size: 14px;
            margin: 20px 0px 100px 0px;
        }
`;

const Gallery = styled.div`
        height: 580px;
        width: 1200px;
        margin: 40px 0px 50px 0px;
        padding: 20px auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-rows: 370px;
        gap: 20px;
        justify-content: center;
        font-family: 'Montserrat';

        :hover {
            cursor: pointer;
        }

        .product-image {
            width: 230px;
            height: 300px;

        }
`;

const StyledButton = styled.button`
    width: 198px;
    height: 42px;
    padding: 10px 10px;
    gap: 15px;
    background-color: #000;
    color: #fff;
    text-align: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: .1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    flex-direction: row;
    position: absolute;
    margin: 250px 0px 0px 500px;
    align-items: center;

    :hover {
        background-color: #fff;
        color: #000;
        cursor: pointer;
        transition: 700ms;
    }
`;