import React, {useState} from "react";

// Define how hook props will look
type CallbackFn = () => void;
type InitState = {}

// Define a Hook type
type FormHook = (callback:CallbackFn, initialState:InitState ) => any;

// Export custom useForm hook
export const useForm:FormHook = (callback, initialState = {}) =>{
    const [values, setValues] = useState(initialState);

    // handleChange function that handles input value changes
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void =>{
        setValues((prevVal)=> ({...prevVal, [e.target.name]:e.target.value}))
    }
    // Hnadles submission of a form with callback that was passed to it
    const onSubmit = (e:React.FormEvent<HTMLButtonElement>):void =>{
        e.preventDefault();
        callback();
    }
    
    return {
        values,
        handleChange,
        onSubmit
    }
}
