import React, { useContext } from 'react';
import { DealContext } from '../context/DealContext';

export default function AddDeal() {
    const { addDeal } = useContext(DealContext);
    return (
        <>
            add deal
            <form onSubmit={addDeal} >
                <input name='Name' type='text' placeholder='add deal..' />
                <input type='submit' />
            </form>
        </>
    );
}
