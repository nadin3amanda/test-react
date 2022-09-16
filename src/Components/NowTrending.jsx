import React from "react";
import styled from "styled-components";

const NowTrending = () => {
    return (
        <NowTrendingContainer>
            
            <TrendingContainer><h2>Now Trending</h2>
            <p>See what everyone’s wearing right now</p>
            <Gallery>
                <div className="photo">
                <img src={require("../Images/Now-Trending-1.png")} alt="Now-Trending-1" />
                <h3>winter fashion</h3>
                </div>
                <div className="photo">
                <img src={require("../Images/Now-Trending-2.png")} alt="Now-Trending-2" />
                <h3>boots</h3>
                </div>
                <div className="photo">
                <img src={require("../Images/Now-Trending-3.png")} alt="Now-Trending-3" />
                <h3>night out</h3>
                </div>
                <div className="photo">
                <img src={require("../Images/Now-Trending-4.png")} alt="Now-Trending-4" />
                <h3>holidays</h3>
                </div>
                <div className="photo">
                <img src={require("../Images/Now-Trending-5.png")} alt="Now-Trending-5" />
                <h3>outerwear</h3>
                </div>
                <div className="photo">
                <img src={require("../Images/Now-Trending-6.png")} alt="Now-Trending-6" />
                <h3>white dresses</h3>
                </div>
                <div className="photo">
                <img src={require("../Images/Now-Trending-7.png")} alt="Now-Trending-7" />
                <h3>sweaters</h3>
                </div>
                <div className="photo">
                <img src={require("../Images/Now-Trending-8.png")} alt="Now-Trending-8" />
                <h3>party</h3>
                </div>
                </Gallery>
                <Hashtags>
                    <div className="tags">#Thanksgiving</div>
                    <div className="tags">#NewYears</div>
                    <div className="tags">#Knitted</div>
                    <div className="tags">#Pajamas</div>
                    <div className="tags">#WFH</div>
                    <div className="tags">#FallFashion</div>
                </Hashtags>
                </TrendingContainer>
            </NowTrendingContainer>
    );
};

export default NowTrending;
const NowTrendingContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
`;

const TrendingContainer = styled.div`
     font-family: 'Montserrat';
     text-align: center;
     align-items: center;
     width: 1000px;
     height: 1040px;

     h2 {
        font-size: 36px;
        font-weight: 800;
     }

     p {
        font-size: 14px;
     }
`;
const Gallery = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-rows: 350px;
        gap: 20px;
        justify-content: center;
        font-family: 'Montserrat';
        text-transform: uppercase;
        h3 {
            font-size: 24px;
            font-weight: 600;
            width: 240px;
            margin-top: 10px;
            text-align: center;
            }

`;

const Hashtags = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 860px;
    height: 37px;
    margin: 30px 0px 0px 50px;

    .tags {
        border: 1px solid #000000;
        border-radius: 50px;
        padding: 10px 20px 10px 20px;
        margin: 10px auto;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        text-align: center;
    }
`;