import { useState } from "react";

export const useFormHook = (initialValues,onSubmitHandler) => {
    const[values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitHandler(values)
        setValues(initialValues)
    }

    const changeEdit = (newValues) => {
        setValues(newValues)
    }

    return {
        values,
        changeHandler,
        onSubmit,
        changeEdit,
    }
}