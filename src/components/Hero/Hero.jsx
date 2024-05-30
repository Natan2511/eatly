import React from 'react';
import styled from 'styled-components';

import Images from '..//..//assets/images/hero/Hero-img.png';
import ImagesMob from '..//..//assets/images/hero/HeroMob.png';
import ImagesTrust from '..//..//assets/images/hero/Trust.png';

export const Hero = () => {
  return (
    <HeroWrapper>
      <TextBlock>
        <p>OVER 1000 USERS</p>
        <h1>Enjoy Foods <span>All</span> Over <span>The</span> <span>World</span></h1>
        <p>EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span>$20 bonus</span>.</p>
        <Button href="#">Get Started</Button>
        <Button href="#" style={{ backgroundColor: 'transparent', color: 'rgb(108, 95, 188)', border: '1.5px solid rgb(108, 95, 188)' }}>Go Pro</Button>

        <img src={ImagesTrust} alt="rating" />
      </TextBlock>

      <>
        <HeroImage />
      </>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  margin: 80px 100px 120px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 37px;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    gap: 50px;
    margin: 57.25px 21px 75px 21px;
  }
`;

const TextBlock = styled.div`
  width: 568px;

  @media screen and (max-width: 720px) {
    width: 333px;
    text-align: center;
    margin: 0 auto;
  }

  @media screen and (min-width: 721px) and (max-width: 1024px){
    width: 403.91px;
  }

  p:nth-of-type(1) {
    display: flex;
    align-items: center;
    gap: 20px;
    color: rgba(32, 31, 31, 0.2);
    font-family: Poppins;
    font-size: 15px;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 2px;
    text-align: left;
    margin-bottom: 18px;

    @media screen and (max-width: 720px) {
      font-size: 9.25px;
      font-weight: 600;
      line-height: 120%;
      letter-spacing: 1.23px;
      color: rgb(32, 31, 31);
      justify-content: center;
    }

    @media screen and (min-width: 721px) and (max-width: 1024px){
      font-size: 10.67px;
      letter-spacing: 1.42px;
    }
  

    &::before {
      content: "";
      display: block;
      width: 54px;
      height: 1px;
      background-color: rgba(32, 31, 31, 0.2); 
      @media screen and (max-width: 720px) {
        width: 34px;
        background-color: rgb(32, 31, 31);
      }

      @media screen and (min-width: 721px) and (max-width: 1024px){
      }
    
    }
  }

  p:nth-of-type(2) {
    font-family: Inter;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    text-align: justify;
    color: #676767;
    margin-bottom: 50px;
    opacity: 0.7;

    span {
      color: #5C4EAE;
    }

    @media screen and (max-width: 720px) {
      font-size: 11.1px;
      line-height: 17.26px;
      text-align: center;
      margin-bottom: 41px;
    }

    @media screen and (min-width: 721px) and (max-width: 1024px){
      font-size: 12.8px;
      line-height: 19.91px;
    }
  
  }

  h1 {
    font-family: Poppins;
    font-size: 75px;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: -3px;
    text-align: left;
    margin-bottom: 16px;

    span:nth-of-type(3) {
      color: #5C4EAE;
    }

    span:nth-of-type(1) {
      color: #5C4EAE;
      @media screen and (max-width: 1024px) {
        display: none;
      }
    }

    span:nth-of-type(2) {
      color: #5C4EAE;
      @media screen and (max-width: 1024px) {
        display: none;
      }
    }

    @media screen and (max-width: 720px) {
      font-size: 46.24px;
      letter-spacing: -1.85px;
      text-align: center;
    }
    @media screen and (min-width: 721px) and (max-width: 1024px){
      font-size: 53.33px;
      font-weight: 600;
      line-height: 120%;
      letter-spacing: -2.13px;
      text-align: left;
    }
  }
`;

const Button = styled.a`
  padding: 18px 30px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  background: rgb(108, 95, 188);
  border: 0;
  border-radius: 12.41px;
  margin: 5px;
  display: inline-block;
  text-align: center;
  transition: all 500ms ease;
  margin-bottom: 33px;

  font-family: Poppins;
  font-size: 13.03px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 1%;
  text-align: left;

  &:hover {
    transform: scale(1.1);
  }
`;

const HeroImage = styled.img.attrs({
  src: Images,
})`
  width: 681px;
  height: 607px;

  @media screen and (max-width: 720px) {
    content: url(${ImagesMob});
    width: 323.02px;
    height: 288.14px;
  }
  @media screen and (min-width: 721px) and (max-width: 1024px){
    width: 323.02px;
    height: 288.14px;
  }
`;

export default Hero;
