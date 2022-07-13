import React, {useEffect, useState} from 'react';
import cl from "./ModalComponent.module.css";
import "../../styles/button.css";
import "../../styles/input.css";
import "../../pages/CreatePage/CreatePage.css";

const ModalComponent = (props) => {
    const rootClasses = [cl.modal];
    if (props.visible) rootClasses.push(cl.active)
    const [form, setForm] = useState({
        key: props.modalItem.key,
        name: props.modalItem.name,
        description: props.modalItem.description,
    })

    useEffect(() => {
        setForm({
            key: props.modalItem.key,
            name: props.modalItem.name,
            description: props.modalItem.description,
        })
    }, [props.modalItem])


    function save() {
        props.update(form)
    }

    function modalClose() {
        props.setVisible(false)
    }


    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.modal__content}>
                <div className={cl.modal__header}>
                    <div className={cl.modal__title}>Запись {props.modalItem.name}</div>
                    <div className={cl.modal__close} onClick={modalClose}>X</div>
                </div>
                <form className="create-form">
                    <div className="create-form__label">Заголовок</div>
                    <input className="input input--create"
                           type="text"
                           value={form.name}
                           onChange={event => setForm({...form, name: event.target.value})}
                    />

                    <div className="create-form__label">Описание</div>
                    <textarea className="input input--textarea"
                              cols="30" rows="10"
                              value={form.description}
                              onChange={event => setForm({...form, description: event.target.value})}
                    ></textarea>

                    <button type="button" onClick={save} className="button button--edit">Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default ModalComponent;