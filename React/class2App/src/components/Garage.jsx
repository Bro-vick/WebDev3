import React from 'react'
function Car({carName}){
    return <li>The name of the car is {carName}</li>
}

const Garage = () => {
    const cars = ["BMW", "Lexus", "Toyota", "Benz"]
  return (
    <div className='bg-lime-500 p-8 text-2xl text-amber-950'>
        <h1>Using Lists In React</h1>
        <>
            <h1>My Car Garage</h1>
            <ul>
                {cars.map((car, index) => <Car key={index} carName={car}/>)}
            </ul>
        </>
    </div>
  )
}

export default Garage