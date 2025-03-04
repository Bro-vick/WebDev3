import React, { useState } from 'react'

const Forms = () => {
  const [text, setText] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("")


  const handleChange = (e) => setText(e.target.value);
  const quantityChange = (e) => setQuantity(e.target.value);
  const handleShipping = (e) => setShipping(e.target.value);
  return (
    <div>
      <div className="bg-gray-600 p-10">
        <input type="text" value={text} onChange={handleChange} className='bg-blue-200 p-5'/>
        <p className='italic text-blue-100 text-2xl font-bold'>Value: {text}</p>

        <br />
        <input type="number" value={quantity} onChange={quantityChange} />
        <p className='italic text-blue-100 text-2xl font-bold'>Quantity: {quantity}</p>
    
         <br />
        <p className='text-2xl'>Choose Payment Type</p>
          <select value={payment} onChange={(e) => setPayment(e.target.value)}  className='text-2xl'>
              <option value=""></option>     
              <option value="Debit card">Debit Card</option>
              <option value="visa card">Visa Card</option>
              <option value="Master card">Master Card</option>
          </select>
          <p className='text-2xl'>Your payment type is {payment}</p>

            <label htmlFor="">
              <input type="radio" value="Express" checked={shipping === "Express"} onChange={handleShipping}/>
              Express
          </label>
          <label htmlFor="">
              <input type="radio" value="Standard" checked={shipping === "Standard"} onChange={handleShipping}/>
              Standard
          </label>
          <p>Shipping Method: {shipping}</p>
        </div>
    </div>
  )
}
export default Forms