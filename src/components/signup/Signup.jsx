import React from 'react'
import { useStepContext } from '../../context/stepContext'
import { useNavigate } from "react-router-dom"
import "./signup.css"

function Signup() {
  const { step, setStep } = useStepContext()
  const navigate = useNavigate()
  return (
    <section className='main-container center'>
    <div>
     <h3 className='main-heading'>Welcome! First thing first...</h3>
     <p className='sub-heading'>You can always change them later.</p>
    </div>

    <div>
        <form 
        onSubmit={(e) => {
          e.preventDefault()
          setStep(prev=>prev+1)
          navigate('/workspace')
        }}
        className='flex flex-col gap-md pad-xl'>

            <div className='input-container flex-start flex-col gap-xs'>
            <label className='input-label' htmlFor="full-name">Full Name</label>
            <input 
            required
            className='input' type="text" id="full-name" placeholder='Steve Jobs' />
            </div>

            <div className='input-container flex-start flex-col gap-xs'>
            <label className='input-label' htmlFor="display-name">Display Name</label>
            <input 
            required
            className='input' type="text" id="display-name" placeholder='Steve' />
            </div>

            <input className='submit-btn' type="submit" value="Create Workspace" />
        </form>
    </div>
    </section>
  )
}

export  { Signup }