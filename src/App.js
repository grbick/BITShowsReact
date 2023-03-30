import React, { useEffect, useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import SingleShow from './pages/SingleShow'
import AboutPage from './pages/AboutPage'
import { ApplicationProvider } from "./context";


const App = () => {
  let results = 30;
  let totalResults;
  let maxCounter = Math.ceil(totalResults / results)
  let [counter, setCounter] = useState(1)
  const [pageState, setPageState] = useState(null)
  const [shows, setShows] = useState([])
  let [first, setFirst] = useState(1)
  let [last, setLast] = useState(results)


  const pageStateSetter = (value) => {
    setPageState(value)
  }
  const fetchData = () => {
    fetch('http://api.tvmaze.com/shows')
      .then((res) => res.json())
      .then((data) => {
        
        setShows(data.sort((a, b) => b.rating.average - a.rating.average).filter((e, i) => i >= first && i <= last));
         totalResults = data.length
      })
    }
    useEffect(() => {
    fetchData();
  }, []);

  const changePage = (step) =>{
    counter+= step
    if (counter < 1) counter = 1;
    if (counter > maxCounter) counter = maxCounter;
    first = (counter - 1) * results + 1
    if (first < 1) first = 1
    last = counter * results
    setCounter(counter)
    setFirst(first)
    setLast(last)
  }

  return (
    <ApplicationProvider value = {{shows, pageStateSetter, counter, changePage, maxCounter}}>
    <div>
      {pageState === null ?
        <LandingPage/> : pageState === 'about' ? <AboutPage /> : <SingleShow />}
    </div>
    </ApplicationProvider>
  )
}

export default App

