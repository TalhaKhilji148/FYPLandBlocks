import React from 'react'
import classes from './newsletter.module.css'
import { FiSend } from 'react-icons/fi'

const Newsletter = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Having some issues understanding LandBlocks?</h5>
          <h2>Send us your email and we will do the rest!</h2>
        </div>
        <div className={classes.inputContainer}>
          <input type="email" placeholder='Type email...' />
          <FiSend className={classes.sendIcon} />
        </div>
      </div>
    </div>
  )
}

export default Newsletter