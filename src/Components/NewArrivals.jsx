import React from "react";
import styled from "styled-components";

const NewArrivals = () => {
    return (
        <NewArrivalsBanner>
            <img src={require('../Images/model-1.png')} className="model-1" alt="model-1" ></img>
            <img src={require('../Images/model-2.png')} className="model-2"alt="model-2"></img>
            <TextContainer>
            <h2>NEW ARRIVALS</h2>
            <p>Get ready for the holidays with us!</p>
            <Button> Shop now</Button>
            </TextContainer>
        </NewArrivalsBanner>
    );
};

export default NewArrivals;

const NewArrivalsBanner = styled.div`
        display: flex;
        height: 400px;
        margin-bottom: 10px;
        background-image: url('../Images/bg-New-Arrivals-2.png');
        background-size: contain;
        background-repeat: no-repeat;
        .model-1 {
            width: 377px;
            height: 400px;
            margin-left: 450px;
            position: absolute;
        }

        .model-2 {
            width: 341px;
            height: 400px;
            z-index:2;
            position: absolute;
            margin-left: 200px;
        }
`;
const TextContainer = styled.div`
            color: #fff;
            font-family: 'Montserrat';
            font-style: normal;
            margin: -37px 0px 0px 1200px;
        h2 {
            font-weight: 800;
            max-width: 472px;
            max-height: 172px;
            font-size: 86px;
        }


        p {
            font-weight: 600;
            font-size: 28px;
            line-height: 34px;
            display: flex;
            align-items: center;

        }

`;

const Button = styled.button`
    width: 149px;
    height: 42px;
    padding: 10px;
    gap: 15px;
    background-color: #fff;
    color: #000;
    text-align: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: .1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    flex-direction: row;

    :hover {
        background-color: #000;
        color: #fff;
        cursor: pointer;
        transition: 700ms;
    }
`;