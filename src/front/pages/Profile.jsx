import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Profile = () => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <>
            {store.user ? <h1>Welcome {store.user}</h1> : <h1>You must be logged in to view this page</h1>}
        </>
    )
}