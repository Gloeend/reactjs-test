import React from 'react';
import "./HeaderComponent.css";
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="header__title">
                Блог
            </div>
            <Link className="button button--edit" to="/">Главная</Link>
        </div>
    );
};

export default HeaderComponent;