import React, { useEffect, useState } from 'react'
import axios from 'axios'

const APIUrl = 'https://ih-beers-api2.herokuapp.com/beers'

const BeersPage = () => {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios
            .get(APIUrl)
            .then((response) => {
                console.log(response)
                setBeers(response.data)
            }).catch(error => console.log(error))
    }, []);

  return (
    <div>
        
        { beers.map((beer) => (
            <div key={beer._id} className="card">
                <img src={beer.image_url} alt="apartment" width={50}/>
                <h3>{beer.name}</h3>
                <p>Tagline: {beer.tagline}</p>
                <p>Created by: {beer.contributed_by}</p>
          </div>
        
    ))}

    </div>
  )
}

export default BeersPage