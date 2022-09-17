import React from "react";
import styled from "styled-components";

const SignUp = () => {
    return (
        <SignUpBanner>
            <h2>sign up for exclusive deals and updates</h2>
            <input type={Text} value="Your Email Address" className="email" />
                <div className="arrow">
                   <p>></p>
                </div>
        </SignUpBanner>
    );
};

export default SignUp;

const SignUpBanner = styled.div`
        display: flex;
        flex-direction: row;
        height: 75px;
        background-color: #000;
        color: #F2F2F2;

        h2 {
            font-style: normal;
            font-weight: 800;
            font-size: 32px;
            text-transform: uppercase;
            position: absolute;
            margin-left: 118px;
        }

        .email {
            position: absolute;
            width: 354px;
            height: 35px;
            left: 968px;
            background: #F2F2F2;
            color: #4D4D4D;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            margin: 20px 0px 20px;
            padding-left: 20px;
        }

        .arrow {
            background-color: #fff;
            z-index: 1000;
            width: 40px;
            height: 35px;
            margin: 22px 0px 0px 1308px;
            align-items: center;
            justify-content: center;
            font-size: 32px;

            p {
                margin-top: -20px;
                z-index: 1001;
                padding: 20px 0px 10px 10px;
                color: #444242;
            }
        }
`;