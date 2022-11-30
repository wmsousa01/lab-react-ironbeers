import React from 'react'
import { Link } from "react-router-dom"
import beer from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'


const HomePage = () => {
  return (
    <div>
        <div>
            <img src={beer} alt='beers' width={700}/>
            <Link to='/BeersPage'>
              <h1>All Beers</h1>
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div>
            <img src={newBeer} alt='beers' width={700}/>
            <Link to='/beers'>
              <h1>Random Beer</h1>
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div>
            <img src={randomBeer} alt='beers' width={700}/>
            <Link to='/beers'>
              <h1>New Beer</h1>
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        
    </div>
  )
}

export default HomePage