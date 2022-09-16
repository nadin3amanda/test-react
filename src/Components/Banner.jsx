import React from "react";
import styled from "styled-components";


const Banner = () => {
    return (
        <React.Fragment>
        <MainContainer>
            <SparkleContainer>
                <img src={require("../Images/Rectangle17.png")}  className="Banner2" alt="banner2" width="842" height="650" />
                <BlackFridayContainer>
            <img src={require("../Images/Rectangle18.png")} alt="Black-Friday" width="644" height="446" />
            <StyledButton>shop now</StyledButton>
        </BlackFridayContainer>
            </SparkleContainer>

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
        z-index: 1000;
        display: flex;
        height: 650px;
        width: 650px;
        vertical-align: middle;
        margin: -660px 80px 0px 510px;
        float: right;
        background-image: url('/Images/Rectangle17.png');
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