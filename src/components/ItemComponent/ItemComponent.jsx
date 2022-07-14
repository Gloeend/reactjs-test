import React, {useEffect, useState} from 'react';
import './ItemComponent.css';
import {Link} from "react-router-dom";

const ItemComponent = (props) => {

    return (
        <div className="case">
            <div className="case__header">
                <div className="case__title">{props.item.name}</div>
            </div>
            <div className="case__content">
                <div className="case__description">
                    {props.item.description}
                </div>
                <Link className="button button--edit" to={"/view?item="+props.id}>Перейти</Link>
            </div>
        </div>
    );
};

export default ItemComponent;