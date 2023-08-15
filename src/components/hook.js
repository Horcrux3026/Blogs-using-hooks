import { useState } from "react";
// here we have created our custom hook which is usable by every hooks for title,subtitle and content
export function useFormInput(initialValue){
    const [value,setValue]=useState(initialValue);
    function handleChange(e){
        setValue(e.target.value);
    }

    return {
        value,
        onChange:handleChange,
    }
}