import React, {useState} from 'react';
import cl from "./ModalComponent.module.css";
import "../../styles/button.css";
import "../../styles/input.css";
import "../../styles/create-form.css";

const ModalComponent = (props) => {
    const rootClasses = [cl.modal];
    if (props.visible) rootClasses.push(cl.active)
    const [form, setForm] = useState({
        name: '',
        description: '',
    })


    function save() {
        props.create(form)
        modalClose()
    }

    function modalClose() {
        props.setVisible(false)
    }


    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.modal__content}>
                <div className={cl.modal__header}>
                    <div className={cl.modal__title}>Создать запись</div>
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