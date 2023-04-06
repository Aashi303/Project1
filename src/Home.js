import React from 'react'
import PropTypes from 'prop-types'

const Home = () => {

const fname=localStorage.getItem("username");
  return (
    <div>
        <h1 align="center"> Welcome {fname}</h1>
    </div>
  )
}

export default Home