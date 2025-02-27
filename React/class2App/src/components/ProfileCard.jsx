import React from 'react'

const ProfileCard = ({name, age, sex, occupation}) => {
  return (
    <div style={{
        width: "300px",
        backgroundColor: "lavender", 
        height: "300px", 
        color: "darkgreen", 
        fontWeight: "bold", 
        padding: "20px"
    }}>
        <h1>Hi, My Name is {name}!</h1>
        <br />
        <p>
            I am a {age} year old {sex}, and I am an/a {occupation}.
        </p>
        <button>Kindly Like My Profile.</button>
    </div>
  )
}

export default ProfileCard