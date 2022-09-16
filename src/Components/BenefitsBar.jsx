import styled from "styled-components";


const BenefitsBar = () => {
    return (
    <BenefitsContainer>
        <ul>
            <li>
            <a href="/"><img src={require('../Images/Icons/Vector1.png')} className='icon' alt='Vector1' />&nbsp; Exclusive Deals for VIP 2 and up!</a></li>
            <li>
            <a href="/"><img src={require('../Images/Icons/Vector2.png')} className='icon' alt='Vector2' />&nbsp; Weekly New Arrivals</a></li>
            <li>
            <a href="/"><img src={require('../Images/Icons/Vector3.png')} className='icon' alt='Vector3' />&nbsp; Free Shipping On Orders Over $100</a></li>
            <li>
            <a href="/"><img src={require('../Images/Icons/Vector4.png')} className='icon' alt='Vector4' />&nbsp; Track Your Order</a></li>
            <li>
            <a href="/"><img src={require('../Images/Icons/Vector5.png')} className='icon' alt='Vector5' />&nbsp; 10% Off On Your First Order!</a></li>
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
        padding: 10px 50px 10px 39px;
        width: 280px;
        height: 45px;
        vertical-align: middle;
        justify-content: space-between;
    }

    a {
        cursor: pointer;
        color: #000;
        text-decoration: none;
    }

    .icon {
        width: 25px;
        height: 25px;
        vertical-align: middle;
        margin-top: -5px;
    }

`;
