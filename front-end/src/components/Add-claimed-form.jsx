import React, { useContext } from 'react';
import axios from 'axios';
import cookies from 'react-cookies';
import { DealContext } from '../context//DealContext';

export default function AddClaimed(props) {
    const { getAllDeal } = useContext(DealContext);

    const addClaimed = async (e) => {
        e.preventDefault();
        const data = {
            claimedName: e.target.claimedName.value,
            claimedID: props.claimedID,
        };
        await axios
            .post(`${process.env.REACT_APP_BACKEND}/claimed`, data, {
                headers: {
                    Authorization: `Bearer ${cookies.load('token')}`,
                },
            })
            .then(() => {
                getAllDeal();
            });
    };
    return (
        <>
            add claimed
            <form onSubmit={addClaimed}>
                <input
                    name='claimedName'
                    id='claimedName'
                    type='text'
                    placeholder='add claimed...'
                />
                <input type='submit' />
            </form>
        </>
    );
}
