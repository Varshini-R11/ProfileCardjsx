import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './Components/ProfileCard'

function App() {

  const data= [

    { name:"varshini",
      place:"Chennai" ,
      role:"Fresher" ,
      img:"https://tse1.mm.bing.net/th?id=OIP.PKlD9uuBX0m4S8cViqXZHAHaHa&pid=Api&P=0&h=180" ,
      status : true ,
      skills:['UI/UX','HTML','CSS','ReactJS',
              'Java','JavaScript','Mongodb']},

    { name:"varsha",
      place:"Chennai" ,
      role:"Fresher" ,
      img:"https://tse1.mm.bing.net/th?id=OIP.PKlD9uuBX0m4S8cViqXZHAHaHa&pid=Api&P=0&h=180" ,
      status : true ,
      skills:['UI/UX','HTML','CSS','ReactJS',
              'Java','JavaScript','Mongodb']},

    { name:"Abi",
      place:"Chennai" ,
      role:"Fresher" ,
      img:"https://tse1.mm.bing.net/th?id=OIP.PKlD9uuBX0m4S8cViqXZHAHaHa&pid=Api&P=0&h=180" ,          status : true ,
      skills:['UI/UX','HTML','CSS','ReactJS',
          'Java','JavaScript','Mongodb']},
          
    { name:"Ranjana",
      place:"Chennai" ,
      role:"Fresher" ,
      img:"https://tse1.mm.bing.net/th?id=OIP.PKlD9uuBX0m4S8cViqXZHAHaHa&pid=Api&P=0&h=180" ,
      status : true ,
      skills:['UI/UX','HTML','CSS','ReactJS',
              'Java','JavaScript','Mongodb']},

      
    
  ]

  return (
    <>
      <h1>Profile Cards</h1>
      <div className="cards">
      {data.map((userdata,index)=>(
        <ProfileCard key={index}
        name={userdata.name}
        place={userdata.place}
        role={userdata.role}
        img={userdata.img}
        status={userdata.status}
        skills={userdata.skills}
        /> ))} 
      </div>   
    </>
  )
}

export default App
