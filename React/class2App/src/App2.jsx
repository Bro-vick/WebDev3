import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ProfileCard from './components/ProfileCard'
import Card from './components/Card'
import Image1 from './assets/paul.png'

import './App.css'
import FavoriteColor from './components/ColorChanger'

const App2 = () => {
  return (
    <>
      <Header />
      <div className="flex gap-4">
        <ProfileCard name="Goodness" age={38} sex="Female" occupation="Driver"/>
        <br />
        <ProfileCard name="PraiseGod" age={21} sex="male" occupation={"Software Developer"} />
      </div>
        

      <section className='grid grid-cols-3 gap-1'>
            <Card name="George" salary={4000} role="Developer" img={Image1} isMarried={true} exp={10}/>
            <Card name="Emma" salary={4500} role="Cleaner" isMarried={false} exp={2}/>
            <Card name="Unique" salary={8000} role="Teacher" isMarried={true} exp={5}/>
            <Card name="Israel" salary={6000} role="Doctor" isMarried={true} exp={1}/>
            <Card name="Victor" salary={40000} isMarried={false} exp={6}/>
        </section>
        <FavoriteColor />
      <Footer />
      <div>
          <h1 className='bg-blue-700 p-10 text-3xl font-bold text-white'>Welcome To React</h1>
      </div>
    </>
  )
}
export default App2