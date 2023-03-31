import React, {useContext} from 'react'
import './pagination.scss'
import { applicationContext } from "../../context";
import Button from '../Button';

const Pagination = () => {
  const {counter, maxCounter, changePage} = useContext(applicationContext)
  // if(maxCounter<5)
  return (
    <div className='pagination'>
      <Button buttonContent="previous" buttonClick={()=>changePage(-1)}/>
      <Button buttonContent="next" buttonClick={()=>changePage(1)}/>
    </div>
  )
}

export default Pagination