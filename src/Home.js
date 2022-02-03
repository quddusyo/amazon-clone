import React from 'react';
import './Home.css'
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
        <img
            className='home__image'
            src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
            alt=''
        />
        <div className='home__row'>
            <Product 
                id='1'
                title='Ace The Coding Interview'
                price={9.99}
                rating={5}
                image='https://m.media-amazon.com/images/I/41ZiloGn+RL._SY346_.jpg'
            />
            <Product 
                id='2'
                title='SmartThermostat with Voice Control'
                price={290.18}
                rating={4}
                image='https://m.media-amazon.com/images/I/511k68zeC9L._AC_SX425_.jpg'
            />
        </div>
        <div className='home__row'>
            <Product 
                id='3'
                title='Snow Joe SJ-SHLV01 18-Inch Shovelution Strain-Reducing Snow Shovel'
                price={23.97}
                rating={5}
                image='https://m.media-amazon.com/images/I/71v7vCwlAEL._AC_SY450_.jpg'
            />
            <Product 
                id='4'
                title='Apple iPhone 11 64GB - Unlocked'
                price={548.00}
                rating={4}
                image='https://m.media-amazon.com/images/I/51Bl6-In6fL._AC_SY606_.jpg'
            />
            <Product 
                id='5'
                title='10-Piece Non-Stick Cookware Set Pots and Pans Set'
                price={99.99}
                rating={4}
                image='https://m.media-amazon.com/images/I/81XLVxUHUOL._AC_SX425_.jpg'
            />
        </div>
        <div className='home__row'>
            <Product 
                id='6'
                title='TCL 32" Class 3-Series HD LED Smart Android TV'
                price={199.99}
                rating={5}
                image='https://m.media-amazon.com/images/I/71mTUwgs9hL._AC_SX425_.jpg'
            />
        </div>
        {/* Product */}

    </div>
  )
};

export default Home;
