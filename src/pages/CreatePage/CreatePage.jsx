import React, {useState} from 'react';
import './CreatePage.css';
import '../../styles/button.css';
import '../../styles/input.css';

const CreatePage = ({createItem}) => {
    const [form, setForm] = useState({
        name: '',
        description: '',
    })

    const save = (e) => {
        e.preventDefault()
        createItem(form)
    }

    return (
        <div className="create-form">
            <div className="create-form__title">
                Добавить запись
            </div>
            <form className="create-form__content">
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
    );
};

export default CreatePage;