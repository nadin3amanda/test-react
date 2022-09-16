import React from "react";
import styled from "styled-components";

const SiteWideDeals = () => {
    return (
        <React.Fragment>
        <DiscountContainer>
            <PromoContainer>
                <div className="price"><strong>$5</strong> <span>off</span>
                <p>on orders above $50</p>
                </div>
                <div className="price"><strong>$15</strong><span>off</span>
                <p>on orders above $75</p>
                </div>
                <div className="price"><strong>$20</strong><span>off</span>
                <p>on orders above $150</p>
                </div>
                <div className="price"><strong>$30</strong><span>off</span>
                <p>on orders above $200</p>
                </div>
                <div>
                    <StyledButton>check out all site-wide deals</StyledButton>
                </div>
            </PromoContainer>
        </DiscountContainer>
        <BlackFridayBanner>
            <div className="Black-bokeh" >
                <img src={require("../Images/Rectangle_black.png")} alt="Black-bokeh" /></div>
            <div className="Black-gradient">
                <img src={require("../Images/Rectangle6.png")} alt="Black-gradient" />
                <div className="free-shipping">free shipping on all orders for VIP 2 and up!</div></div>
                <div>
                    <ShopButton>shop now</ShopButton>
                </div>
        </BlackFridayBanner>
        <Banner>
            <h2>black friday exclusive</h2>
        </Banner>
        </React.Fragment>
    );
};

export default SiteWideDeals;

const DiscountContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 150px;
    justify-content: center;
    font-family: 'Montserrat';

    .price {
        font-size: 32px;
        padding: 45px 0px 45px 0px;
        width: 160px;
        height: 60px;
        margin-left: 68px;
    }
`;

const PromoContainer = styled.div`
        width: 100vw;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-rows: 200px;
        gap: 20px;
        text-transform: uppercase;
        font-family: 'Montserrat';

        p {
            font-style: normal;
            font-weight: 400;
            font-size: 10px;
            line-height: 12px;
        }

        span {
        font-size: 18px;
        font-weight: 800;
        vertical-align: super;
        margin-left: 10px;
    }
`;

const StyledButton = styled.button`
    background-color: #000;
    color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    flex-direction: row;
    position: absolute;
    width: 363px;
    height: 42px;
    margin: 50px 0px 0px -50px;
    font-family: 'Montserrat';
    text-transform: uppercase;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;

    :hover {
        background-color: #fff;
        color: #000;
        cursor: pointer;
        transition: 700ms;
    }
`;

const BlackFridayBanner = styled.div`
        overflow: hidden;
        height: 75px;
        background: url(../Images/Rectangle6.png) !important;
        display: flex;
        flex-direction: row;
        .Black-bokeh {
            background-color: #000;
        }
        .Black-gradient {
            background-image: linear-gradient(to left, transparent 0%, black 80%);
        }

        .free-shipping {
            width: 354px;
            height: 75px;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            color: #fff;
            text-transform: uppercase;
            margin: -60px 0px 0px 100px;

        }
`;

const Banner = styled.div`
        width: 500px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-rows: 200px;
        gap: 20px;
        z-index: 1000;
        margin: -80px 0px 0px 118px;
        text-transform: uppercase;
        color: #fff;
        h2 {
            font-style: normal;
            font-weight: 800;
            font-size: 32px;
            letter-spacing: 0.1rem;
        }

`;

const ShopButton = styled.button`
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
    position: absolute;
    margin: 20px 0px 0px -450px;

    :hover {
        background-color: #000;
        color: #fff;
        cursor: pointer;
        transition: 700ms;
    }
`;