import { canDo } from "../../app/actions/generalActions";
import React, { useState } from "react";
import EditDeal from "./EditDeal";
import './dealMenu.css'
import DeleteDeal from './DeleteDeal';
const DealMenu = ({ deal }) => {

    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => setMenuVisible(!menuVisible);
    return (canDo("update", deal.User_ID) ? (
        <div className="deal-menu-wrapper" onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
            <button className="menu-button" aria-label="Options">
                <span className="menu-icon">☰</span>
            </button>
            {menuVisible && (
                <div className="menu-list">
                    <div className="menu-item edit-item">
                        <EditDeal deal={deal} />
                    </div>
                    <div className="menu-item delete-item">
                        <DeleteDeal deal={deal} />
                    </div>

                </div>
            )}
        </div>
    ) : null);
}

export default DealMenu;