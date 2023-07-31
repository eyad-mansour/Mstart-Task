import React, { useContext } from "react";
import { authContext } from '../context/AuthContext';

export default function Sign() {
    const { handleSignIn, handleSignUp } = useContext(authContext);

    return (
        <>
            create new account
            <form action='' onSubmit={handleSignUp}>

                <input type='text' placeholder='username...' name='Name' />
                <input type='email' placeholder='email...' name='Email' />
                <input type='text' placeholder='password...' name='Password' />

                <button
                    type='submit'
                    px='3'
                    py='2'
                    bg='blue.200'
                    rounded='md'
                    _hover={{ bg: 'blue.300' }}
                >
                    sign up
                </button>
            </form>
            log in
            <form action='' onSubmit={handleSignIn}>

                <input type='email' placeholder='email...' name='Email' />
                <input
                    type='password'
                    placeholder='password...'
                    name='Password'
                />
                <button
                    type='submit'
                    px='3'
                    py='2'
                    bg='blue.200'
                    rounded='md'
                    _hover={{ bg: 'blue.300' }}
                >
                    login
                </button>
            </form>
        </>
    );
}