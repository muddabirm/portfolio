// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import heroImg from './assets/arrows.png'
import profile from './assets/profile.png'
import codingHero from './assets/codinghero.png'

const App = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <section className='flex flex-col items-center justify-center h-screen'>
          <h2 className='text-5xl font-thinbold font-Montserrat'>
          Hi, im Moody Masood a passionate self-taught fullstack web developer.
        </h2>
        <button className=' w-12 h-12 animate-bounce'><img src={heroImg} alt="" /></button>
      </section>
      <h1 className='text-5xl font-semibold text-center mb-12'>SKILLS</h1>
      <section className='flex justify-center'>
        <div className='frontEnd border-2 rounded-xl shadow-2xl hover:scale-110 ease-in-out duration-200 hover:shadow-teal-800 w-[500px] h-[500px] mr-10'>
          <h1 className='text-6xl text-center mb-8'>Frontend</h1>
          <ul className='text-5xl text-center'>
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
            <li>react</li>
            <li>next.js</li>
          </ul>
        </div>
        <div className='backEnd border-2 rounded-xl shadow-2xl hover:scale-110 ease-in-out duration-200 hover:shadow-teal-800 w-[500px] h-[500px]'>
          <h1 className='text-6xl text-center mb-8'>Backend</h1>
          <ul className='text-5xl text-center'>
            <li>express</li>
            <li>node</li>
            <li>sql</li>
            <li>mongoDB</li>
            <li>RESTful-API</li>
          </ul>
        </div>
        
        
      </section>
      <div className='divider w-full h-40'></div>
      <section id='aboutMeSection' className='aboutMe'>
        <p className='flex justify-center text-5xl font-semibold'>
          About Me
        </p>
        <div className='flex justify-center'>
          <img className='w-96 h-96 rounded-2xl mr-5' src={profile} alt="a picture of me" />
          <p className='w-96 h-96 text-4xl'>Entry-level web developer who has experience creating responsive websites and collaborating with other developers in a team setting. Recently completed a fullstack bootcamp from the university of SMU.  </p>
        </div>
      </section>
      <section>
        <p>Projects</p>
      </section>
    </>
  )
}

export default App