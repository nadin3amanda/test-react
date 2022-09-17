import styled from "styled-components";

const NavBar = () => {
    return (
    <Nav>
        <LeftNav>
        <ul>
            <li>
                <a href="/"><strong>women</strong></a>
            </li>
            <li>
                <a href="/">plus</a>
            </li>
            <li>
                <a href="/">men</a>
            </li>
            <li>
                <a href="/">accessories</a>
            </li>
        </ul>
        </LeftNav>
        <h1><a href="/" className="Title"> THREADED </a></h1>
        <RightNav>
        <ul>
            <li>
                <a href="/"><img src={require('../src/Images/Icons/bx_bx-user.png')} alt="user" /></a>
            </li>
            <li>
                <a href="/"><img src={require('../src/Images/Icons/bx_bx-shopping-bag.png')} alt="bag" /></a>
            </li>
            <li>
                <a href="/"><img src={require('../src/Images/Icons/bx_bx-heart.png')} alt="heart" /></a>
            </li>
            <li>
                <a href="/"><img src={require('../src/Images/Icons/bx_bx-support.png')} alt="support" /></a>
            </li>
            <li>
                <a href="/"><img src={require('../src/Images/Icons/bx_bx-search.png')} alt="search" /></a>
            </li>
        
        <CurrencyIcon>
            <Flag>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/2048px-United-states_flag_icon_round.svg.png" width="25" height="25" alt="us-flag" />
                <p>USD $</p>
                <img src={require("../src/Images/Icons/chevron-down.png")}  className="chevron-down" alt="chevron-down" />
            </Flag>
        </CurrencyIcon>
        </ul>
        </RightNav>
    </Nav>
    );
};

export default NavBar;

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 1440px;
    height: 70px;
    left: 0px;
    top: 0px;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    line-height: 17px;
    text-transform: uppercase;
    color: #000;
    align-items: stretch;

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        color: #000;
        display: flex;
        gap: 1rem;
    }

    a {
        cursor: pointer;
        color: #000;
        text-decoration: none;
    }

    h1 {
        font-size: 26px;
        font-weight: 400;
        letter-spacing: 7px;
        padding: 10px 0px 27px 259px;
    }
`;

const LeftNav = styled.div`
    margin: 27px 10px  20px 39px;

    li {
        padding: 0;
        margin: 0;
        list-style: none;
        color: #000;
        display: flex;
        gap: 1rem;
        padding-right: 30px;
    }

`;

const RightNav = styled.div`
    width: 310px;
    height: 35px;
    display: flex;
    flex-direction: row;
    margin: 30px -10px 0px 50px;

    ul {
        margin-left: 350px;
    }
`;

const CurrencyIcon = styled.div`
    width: 115px;
    height: 35px;
    border-radius: 35px;
    border: 1px solid #E5E5E5;
    margin: -10px 0px 0px 30px;
`;

const Flag = styled.div`
    margin: 5px 0px 0px 5px;
    width: 115px;
    p {
        text-align: center;
        margin: -25px 0px 0px 10px;
    }
    .chevron-down {
        width: 7px;
        height: 5px;
        float: right;
        margin-right: 15px;
        margin-top: -10px !important;
    }
`;