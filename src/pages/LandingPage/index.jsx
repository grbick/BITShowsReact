import React from 'react'
import './landingPage.scss'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Loading from '../../components/Loading'
import Footer from '../../components/Footer'


const LandingPage = (props) => {
  return (
     <div className='landingPage'>
        <Header/>
        <Main shows={props.shows}/>
        <Loading/>
        <Footer/>
      </div> 
  )
}

export default LandingPage
