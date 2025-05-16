/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
 let myObj = {
  username: "Ayush",
  Age: 22
 };

 let myArr = [1,2, 4,5, 6, 7, 8, 9, 10]




  return (
    <>
      <h1 className='mb-4 text-gray-900 bg-green-400 p-4 rounded-2xl'>Ayush</h1>
     <Card channel = "chaiaurcode" someObj={myObj}/>
     <Card channel="chaiaurcode" someObj={myObj} />


        

    </>
  )
}

export default App
