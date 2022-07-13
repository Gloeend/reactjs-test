import React, {useEffect, useState} from 'react';
import './ItemComponent.css';

const ItemComponent = (props) => {
    function openModal() {
        props.openModal(props.id)
    }

    return (
        <div className="case">
            <div className="case__header">
                <div className="case__title">{props.item.name}</div>
            </div>
            <div className="case__content">
                <div className="case__description">
                    {props.item.description}
                </div>
                <div className="button button--edit" onClick={openModal}>Перейти</div>
            </div>
        </div>
    );
};

export default ItemComponent;