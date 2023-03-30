import React, {useContext} from 'react'
import Button from '../Button'
import './header.scss'
import { applicationContext } from "../../context";


const Header = () => {
  const {pageStateSetter} = useContext(applicationContext)
  return (
    <div className='header'>
      <Button buttonContent={<h1>BIT Shows</h1>} buttonClick={()=>pageStateSetter(null)}/>
      <Button buttonContent={<h3>About</h3>} buttonClick={()=>pageStateSetter('about')}/>
    </div>
  )
}

export default Header