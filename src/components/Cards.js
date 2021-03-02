import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import {BrowserRouter as Router,Route} from 'react-router-dom'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out Some of my Most Recent Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          
            <CardItem  
              src='./images/securepayment.jpg'
              text='MVC Based Web appliucation with User and Admin account login. The Website is designed to accept valid crdit card payments'
              label='Intellij IDEA'
              path='/services'
             
               
            />
            
            <CardItem
              src='./images/restaurantguide.jpg'
              text='Mobile Android App that allows users to star review, comment and share restaurants via email or facebook. The app uses google maps API to show location '
              label='Android Studio'
              path='/products'
            />
          </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src='./images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='./images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='./images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;