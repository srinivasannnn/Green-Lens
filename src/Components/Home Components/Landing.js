import { Button } from '@mui/material'
import React from 'react'

export default function Landing() {
    
  return (
    <div className="landing">
            <div className="landing-content">
                <span className='span'>
                    PASSION TO GROW
                </span><br />
                <Button variant='contained' sx={{backgroundColor: "rgb(3, 166, 39)", borderRadius:"20px"}}>Learn More</Button>
            </div>
        </div>
  )
}
