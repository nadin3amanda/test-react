import React from 'react';
import styled from "styled-components";

const Footer = () => {
    return (
        <React.Fragment>
        <FooterContainer>
            <CompanyContainer>
            <div className="company-info">
                <h4>company info</h4>
                <ul>
                    <li><a href="/">about THREADED</a></li>
                    <li><a href="/">affiliate</a></li>
                    <li><a href="/">blog</a></li>
                    <li><a href="/">careers</a></li>
                </ul>
            </div>
            <div className="help-and-support">
                <h4>help & support</h4>
                <ul>
                    <li><a href="/">FAQ</a></li>
                    <li><a href="/">shipping</a></li>
                    <li><a href="/">returns</a></li>
                    <li><a href="/">how to order</a></li>
                    <li><a href="/">how to track</a></li>
                </ul>
            </div>
            <div className="customer-care">
                <h4>customer care</h4>
                <ul>
                    <li><a href="/">contact us</a></li>
                    <li><a href="/">payment methods</a></li>
                </ul>
            </div>
            </CompanyContainer>

            <SocialMedia>
                <h4>follow us</h4>
                <ul>
                    <li><a href="/">
                        <img src={require('../Images/SocialMedia/facebook.png')} alt="facebook" /></a></li>
                    <li><a href="/">
                        <img src={require('../Images/SocialMedia/instagram.png')} alt="instagram" /></a></li>
                    <li><a href="/">
                        <img src={require('../Images/SocialMedia/twitter.png')} alt="twitter" /></a></li>
                    <li><a href="/">
                        <img src={require('../Images/SocialMedia/youtube.png')} alt="youtube" /></a></li>
                    <li><a href="/">
                        <img src={require('../Images/SocialMedia/pinterest-alt.png')} alt="pinterest-alt" /></a></li>
                    <li><a href="/">
                        <img src={require('../Images/SocialMedia/tiktok.png')} alt="tiktok" /></a></li>
                </ul>
            </SocialMedia>
            <Payments>
                <h4>WE ACCEPT</h4>
                <ul>
                    <li><a href="/">
                        <img src={require('../Images/Payments/visa.png')} alt="visa" width="37.5" height="25" /></a></li>
                    <li><a href="/">
                        <img src={require('../Images/Payments/mastercard.png')} alt="mastercard" width="37.5" height="25" /></a></li>
                    <li><a href="/">
                        <img src={require('../Images/Payments/maestro.png')} alt="maestro" width="37.5" height="25" /></a></li>
                    <li><a href="/">
                        <img src={require('../Images/Payments/amex.png')} alt="amex" width="37.5" height="25" /></a></li>
                    <li><a href="/">
                        <img src={require('../Images/Payments/paypal.png')} alt="paypal" width="37.5" height="25" /></a></li>
                </ul>
            </Payments>
        </FooterContainer>
         <Copyright>©2021 THREADED All Rights Reserved.</Copyright>
         <Logo><h1>THREADED</h1></Logo>
         </React.Fragment>
    );
};

export default Footer;

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #fff;
    height: 360px;
    width: 100vw;
`;

const CompanyContainer = styled.div`
    font-family: 'Montserrat';
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: 80px;
    gap: 20px;
    justify-content: center;
    text-transform: capitalize;
    font-family: 'Montserrat';
    color: #000;
    width: 462px;
    height: 210px;
    margin: 50px 0px 0px -1300px;
    position: absolute;

    h4 {
        text-transform: uppercase;
        font-size: 12px ;
        font-weight: 600;
    }

    .company-info {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 30px;
        width: 150px;
    }

    .help-and-support {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 30px;
        width: 151px;
        margin-left:-70px;
    }

    .customer-care {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 30px;
        width: 151px;
        margin: -100px 0px 0px 330px;

    }

    a {
        text-decoration: none;
        color: #000;
    }
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        color: #000;
        gap: 1rem;
    }

`;


const SocialMedia = styled.div`
    display: block;
    width: 180px;
    margin: 55px 0px 0px -70px;
    position: absolute;

    h4 {
        text-transform: uppercase;
        font-size: 12px ;
        font-weight: 600;
        width: 180px;
    }

    ul {
        margin: 0;
        list-style: none;
        color: #000;
        display: flex;
        gap: 1rem;
        flex-direction: row;
        margin-left: -40px;
    }

    li {
        padding: 0;
        margin: 0;
        list-style: none;
        color: #000;
        display: flex;
        gap: 1rem;
    }
`;


const Payments = styled.div`
    display: block;
    margin: 150px 0px 0px 0px;
    h4 {
        text-transform: uppercase;
        font-size: 12px ;
        font-weight: 600;
        width: 180px;
    }
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        color: #000;
        display: flex;
        gap: 1rem;
    }

    li {
        padding: 0;
        margin: 0;
        list-style: none;
        color: #000;
        display: flex;
        gap: 1rem;
    }
`;

const Copyright = styled.div`
    float: left;
    height: 15px;
    margin: -50px 0px 0px 50px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
`;


const Logo = styled.div`
    display: flex;
    float: right;
    margin: -100px 0px -1000px 0px;
    height: 30px;

    h1 {
        font-size: 26px;
        font-weight: 400;
        letter-spacing: 7px;
        padding: 10px 50px 27px 0px;
    }
`;




