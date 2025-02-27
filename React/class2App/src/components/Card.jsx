import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Card = ({ name, salary, role, img, isMarried, exp}) => {
    Card.propTypes = {
        name: PropTypes.string.isRequired,
        salary: PropTypes.number,
        img: PropTypes.string,
        role: PropTypes.string,
        isMarried: PropTypes.bool.isRequired
    }
    const greet = (name, salary, role, isMarried) => {
      alert(`Hi there, my name is ${name}, i am a ${role}, I earn $${salary} and I am ${isMarried ? "Married" : "Single" }`)
    } 
  return (
    <div className=' bg-gray-800 rounded-xl p-4 text-white font-bold'>
    <h2>Name: {name}</h2>
    <p>Salary: ${salary}</p>
    <img src={img} alt="" />
    <p>{role}</p>
    <p>{isMarried ? "Married" : "Single"}</p> {/* Conditional rendering */}
    <Button name={"Greet"} eventHandler={() => greet(name, salary, role, isMarried)}/>
    <h1>{exp > 5 && <span>Snr</span>} Developer</h1>
    {/* // We can use the Logical && Operator to conditionally render a React Component */}
</div>
  )
}

export default Card