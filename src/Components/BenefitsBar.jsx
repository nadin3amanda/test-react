import styled from "styled-components";


const BenefitsBar = () => {
    return (
    <BenefitsContainer>
        <ul>
            <li>
            <a href="/"><img src='../Icons/Vector1.png' className='icon' alt='1' />&nbsp; Exclusive Deals for VIP 2 and up!</a></li>
            <li>
            <a href="/"><img src='../Icons/Vector1.png' className='icon' alt='1' />&nbsp; Weekly New Arrivals</a></li>
            <li>
            <a href="/"><img src='../Icons/Vector1.png' className='icon' alt='1' />&nbsp; Free Shipping On Orders Over $100</a></li>
            <li>
            <a href="/">Track Your Order</a></li>
            <li>
            <a href="/">10% Off On Your First Order!</a></li>
        </ul>
    </BenefitsContainer>
    );
};

export default BenefitsBar;

const BenefitsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100vw;
    height: 50px;
    left: 0px;
    top: 70px;
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    color: #000;
    background-color: #E5E5E5;
    align-items: stretch;

    ul {
        padding: 0;
        list-style: none;
        color: #000;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 15px;
        left: 39px;
        top: 80px;
    }

    li {
        padding: 10px 80px 10px 39px;
        width: 252px;
        height: 45px;
    }

    a {
        cursor: pointer;
        color: #000;
        text-decoration: none;
    }

    .icon {
        width: 22.5px;
        height: 22.5px;
    }

`;
