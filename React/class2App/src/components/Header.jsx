import React from 'react'
import Button from './Button'

const Header = () => {
  const login = () => {
    alert(`Login Successful`)
  }
  return (
    <div className='bg-blue-600 flex justify-between text-2xl font-bold p-10'>
        <h1>Logo</h1>
        <nav>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </nav>
        <Button name="Log In" btnColor="green" eventHandler={login}/>
    </div>
  )
}

export default Header