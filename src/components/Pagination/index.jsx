import React, {useContext} from 'react'
import './pagination.scss'
import { applicationContext } from "../../context";

const Pagination = () => {
  const {counter, maxCounter, changePage} = useContext(applicationContext)
  if(maxCounter<5)
  return (
    <div className='pagination'>Pagination</div>
  )
}

export default Pagination