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
        <ul>
            <li>
                <a href="/"><i className="fa-light fa-user" /></a>
            </li>
            <li>
                <a href="/"><i className="fa-light fa-bag-shopping" /></a>
            </li>
            <li>
                <a href="/"><i className="fa-light fa-heart" /></a>
            </li>
            <li>
                <a href="/"><i className="fa-regular fa-headset" /></a>
            </li>
        </ul>
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