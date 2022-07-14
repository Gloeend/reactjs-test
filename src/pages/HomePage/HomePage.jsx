import React, {useState} from 'react';
import './HomePage.css';
import ItemComponent from "../../components/ItemComponent/ItemComponent";
import ModalComponent from "../../components/ModalComponent/ModalComponent";

const HomePage = (props) => {
    const [visible, setVisible] = useState(false)

    function openModal() {
        setVisible(true)
    }

    const listItems = props.storage.map((item, key) =>
        <ItemComponent
            item={item}
            key={key.toString()}
            id={key.toString()}
        />
    );


    return (
        <div className="home">
            <ModalComponent visible={visible} setVisible={setVisible} create={props.create} />
            <div className="home__content">
                <button className="button button--add" onClick={openModal}>Создать</button>
                <div className="home__items">
                    {listItems}
                </div>
            </div>
        </div>
    );
};

export default HomePage;