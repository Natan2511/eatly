import React from 'react';

import Background from '..//..//assets/images/features/FeaturesBg.jpg'
import BackgroundMob from '..//..//assets/images/features/FeaturesMob.png'
import styled from 'styled-components';


export const Features = () => {
  return (
    <FeaturesWrapper>
        <FeaturesList>
            <li>
                <h2>10K+</h2>
                <p>Satisfied Costumers</p>
                <p>All Great Over The World</p>
            </li>
            <li>
                <h2>4M</h2>
                <p>Healthy Dishes Sold</p>
                <p>Including Milk Shakes Smooth</p>
            </li>
            <li>
                <h2>99.99%</h2>
                <p>Reliable Customer Support</p>
                <p>We Provide Great Experiences</p>
            </li>
        </FeaturesList>
    </FeaturesWrapper>
  );
};

const FeaturesWrapper = styled.div`
    background-image: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 100px;

    @media screen and (max-width: 720px) {
        background-image: url(${BackgroundMob});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    @media screen and (min-width: 721px) and (max-width: 1024px){
    }

`;
const FeaturesList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 132px;
    padding: 55px 0;
    position: relative;

    @media screen and (max-width: 720px) {
        flex-direction: column;
    }

    @media screen and (min-width: 721px) and (max-width: 1024px){
    }
    
    li {
        position: relative;
        &:not(:last-child)::after {
            content: '';
            position: absolute;
            top: 0;
            right: -66px;
            width: 1px;
            height: 100%;
            background-color: rgb(197, 197, 197);
            opacity: 0.15;

            @media screen and (max-width: 720px) {
                transform: rotate(90deg);
                height: 246px;
                right: 50%;
                top: 50%;
            }

            @media screen and (min-width: 721px) and (max-width: 1024px){
            }
        }
    }

    h2 {
        color: rgb(255, 255, 255);
        font-family: Public Sans;
        font-size: 43.2px;
        font-weight: 700;
        line-height: 54px;
        text-align: center;
        margin-bottom: 11px;

        @media screen and (min-width: 721px) and (max-width: 1024px){
            font-size: 30.72px;
            line-height: 38.4px;
        }
    }

    p {
        color: rgb(197, 191, 237);
        font-family: Inter;
        font-size: 14.4px;
        font-weight: 500;
        line-height: 21.6px;
        text-align: center;
        @media screen and (min-width: 721px) and (max-width: 1024px){
            font-size: 10.24px;
            line-height: 15.36px;
        }
    }
`;
export default Features;
