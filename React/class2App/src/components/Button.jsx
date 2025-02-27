import React from 'react'

const isLoggedIn = true;

const Button = (props) => {
  const submit = (a) => {
    alert(`The ${a} Buton  has been clicked on!`)
  }
  return (
    <div style={{
        color: props.btnColor, 
        backgroundColor: "grey",
        cursor: 'pointer',
        width: "200px",
        padding: "5px"
    }} onClick={props.eventHandler}>
      {props.name} Button
    </div>
  )
}

export default Button

// We use { } To input Javascript expressions in JSX

// Props
/*
    Props are arguments passed into React components.
    Props are passed to components via HTML attributes.
    Props stands for properties.
    
    Example : Button Component
*/

// Proptypes
// PropTypes in react help us to enforce the types of props that a component should recieve. It provides warnings in the console if an unexpected prop type is recieved.
// Example: Profile Card Component