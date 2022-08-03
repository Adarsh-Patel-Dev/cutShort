import React from 'react'
import  Stepper  from "react-stepper-horizontal";
import "./horizontalstepper.css"
import { useStepContext } from '../../context/stepContext';
function HorizontalStepper() {

  const { step } = useStepContext()
  return (
    <div className='stepper-container'>
     <Stepper 
     steps={ [{title: ''}, {title: ''}, {title: ''}, {title: ''}] } 
     activeStep={ step } 
     activeColor = "#664DE5"
     defaultColor = "#E0E0E0"
      completeColor = "#664DE5"
      defaultBarColor = "#E0E0E0"
      completeBarColor = "#664DE5"
      defaultBorderColor = "#E0E0E0"
      completeBorderColor = "#664DE5"
      defaultFontColor = "#E0E0E0"
      completeFontColor = "#664DE5"
      defaultOpacity = "1"
     />
    </div>
  )
}

export {HorizontalStepper}