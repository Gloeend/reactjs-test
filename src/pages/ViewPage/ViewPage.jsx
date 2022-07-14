import React, {useState} from 'react';

import * as ReactRouterDOM from "react-router-dom";
import './ViewPage.css';
import {validate} from "../../functions/validate";
import {useNavigate} from "react-router-dom";

const ViewPage = (props) => {

    const useSearchParams = ReactRouterDOM.useSearchParams;
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const id = searchParams.get("item");
    const item = {...props.storage[id], key: id}
    const [form, setForm] = useState({ ...item })

    function save() {
        if (!validate(form)) return false;
        props.update(form)
        alert('Запись сохранена')
        navigate('/')
    }

    function deleteItem() {
        let result = window.confirm("Вы хотите удалить эту запись?");
        if (!result) return false;
        props.deleteItem(parseInt(form.key));
        navigate('/')
    }

    return (
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
            <button type="button" onClick={deleteItem} className="button button--delete">Удалить</button>
        </form>
    );
};

export default ViewPage;