import React, { useContext, useEffect } from 'react';
import AddDeal from './Add-deal-form';
import AddClaimed from './Add-claimed-form';
import { DealContext } from '../context/DealContext';
import { authContext } from '../context/AuthContext';
import cookies from 'react-cookies';

export default function Deal(props) {
    const {
        deals,
        getAllDeal,
        deleteOneClaimed,
        deleteOneDeal,
        showDealComponent,
        addDeal,
    } = useContext(DealContext);

    const { role, isAuth, capabilities, userALC } = useContext(authContext);

    console.log(deals)
    useEffect(() => {
        // setRole(cookies.load('role'));
        getAllDeal();
    }, []);
    return (
        <>
            <AddDeal />
            {showDealComponent &&
                deals.map((deal, idx) => {
                    return (
                        <div key={idx}>
                            {deal.Name}
                            {userALC(
                                cookies.load('capabilities'),
                                deal.UserID
                            ) ? (
                                <button
                                    colorScheme='red'
                                    isRound='true'
                                    onClick={() => deleteOneDeal(deal)}
                                >
                                    delete
                                </button>
                            ) : (
                                <></>
                            )}
                            <AddClaimed commentID={deal.id} />
                            {deal.Description.map((claimed, idx) => {
                                return (

                                    <div key={idx}>
                                        {claimed.Amount}
                                        {userALC(
                                            cookies.load('capabilities'),
                                            deal.UserID
                                        ) ? (
                                            <button
                                                colorScheme='red'
                                                isRound='true'
                                                onClick={() => deleteOneDeal(deal)}
                                            >
                                                delete
                                            </button>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
        </>
    );
}
