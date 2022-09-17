import React from "react";
import styled from "styled-components";


const Banner = () => {
    return (
        <React.Fragment>
        <MainContainer  style={{backgroundImage: 'url(' + require('../Images/Rectangle17.png'), backgroundRepeat:'no-repeat', backgroundSize:'contain'}}>
            <SparkleContainer >
                <div></div>
            </SparkleContainer>
            <BlackFridayContainer style={{backgroundImage: 'url(' + require('../Images/Rectangle.png'), opacity:1.5, backgroundSize:'stretch', width:'1000px'}}>
                    <img src={require("../Images/Rectangle18.png")} alt="Black-Friday" width="644" height="446" className="Black_friday-header"/>
                    <StyledButton>shop now</StyledButton>
                </BlackFridayContainer >

        </MainContainer>
        </React.Fragment>
    );
};

export default Banner;


const MainContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 650px;
    margin-top: 120px;
`;

const BlackFridayContainer = styled.div`
        display: flex;
        height: 650px;
        width: 1000px;
        vertical-align: middle;
        margin: 0px 80px 0px 1100px;
        float: right;
        z-index: 1000;
`;

const StyledButton = styled.button`
    width: 278px;
    height: 74px;
    padding: 15px 20px 15px 20px;
    background-color: #fff;
    color: #000;
    text-align: center;
    font-weight: 600;
    font-size: 36px;
    font-style: normal;
    font-family: 'Montserrat';
    text-transform: uppercase;
    letter-spacing: .1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    flex-direction: row;
    gap: 15px;
    position: absolute;
    margin-top: 450px;
    margin-left: 170px;

    :hover {
        background-color: #000;
        color: #fff;
        cursor: pointer;
        transition: 700ms;
    }
`;

const SparkleContainer = styled.div`
   
`;