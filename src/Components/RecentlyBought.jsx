import React from "react";
import styled from "styled-components";

const RecentlyBought = () => {
    return (
        <React.Fragment>
        <Title><h2>Recently Bought</h2> </Title>
        <ProductContainer>
            <Gallery>
                <div className="product-image">
                    <a href="/">
                    <img src={require('../Images/Recently-Bought-1.png')} alt="Recently-Bought-1" width="225" /></a>
                    <p>Festive Looks Rust Red Ribbed Velvet Long Sleeve Bodysuit</p>
                    <p><strong>$38</strong></p>
                </div>
                <div className="product-image">
                    <a href="/">
                    <img src={require('../Images/Recently-Bought-2.png')} alt="Recently-Bought-2" /></a>
                    <p><br />Chevron Flap Crossbody Bag</p>
                    <span><strong >$5.77</strong>
                    <discounted>$7.34</discounted>
                    </span>
                </div>
                <div className="product-image">
                    <a href="/">
                    <img src={require('../Images/Recently-Bought-3.png')} alt="Recently-Bought-3" /></a>
                    <p>Manilla Tan Multi Plaid Oversized Fringe Scarf</p>
                    <span><strong>$29</strong><discounted>$39</discounted></span>
                </div>
                <div className="product-image">
                    <a href="/">
                    <img src={require('../Images/Recently-Bought-4.png')} alt="Recently-Bought-4" /></a>
                    <p>Diamante Puff Sleeve Dress - <br />Black</p>
                    <p><strong>$45.99</strong></p>
                </div>
                <div className="product-image">
                    <a href="/">
                    <img src={require('../Images/Recently-Bought-5.png')} alt="Recently-Bought-5" /></a>
                    <p>Banneth Open Front Formal <br />Dress in Black</p>
                    <span><strong>$69</strong> <discounted>$99.95</discounted></span>
                </div>
            </Gallery>
        </ProductContainer>
        </React.Fragment>
    );
};

export default RecentlyBought;

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

            p {
            font-size: 14px;
            width: 250px;
            float: left;
            margin-top: 5px;
            }
            span {
                color: #C1272D;
                font-size: 12px;
            }

            discounted {
                font-size: 12px;
                float: right;
                color: #000;
                text-decoration: line-through;
                margin-top: -5px;
            }
        }
`;