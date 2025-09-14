import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Login = () => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <>
            <h1>This is the log in page</h1>
            <button onClick={() => { dispatch({ type: "set_user", payload: "test" }) }}>Log in as test user</button>
        </>
    )
}