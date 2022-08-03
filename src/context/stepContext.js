import { createContext, useContext, useState } from "react";


const StepContext = createContext()
const useStepContext = () => useContext(StepContext)

const StepProvider = ({children}) =>{
    const [step, setStep] = useState(0)

    return(
        <StepContext.Provider value={{step, setStep}}>
        {children}
        </StepContext.Provider>
    )
}

export { StepProvider, useStepContext }