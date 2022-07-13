import React, {useState} from 'react';
import './HomePage.css';
import ItemComponent from "../../components/ItemComponent/ItemComponent";
import ModalComponent from "../../components/ModalComponent/ModalComponent";

const HomePage = (props) => {
    const [visible, setVisible] = useState(false)
    const [modalItem, setModalItem] = useState({
        key: '',
        name: '',
        description: '',
    })

    function openModal(key) {
        setModalItem({...props.storage[key], key: key})
        setVisible(true)
    }

    const listItems = props.storage.map((item, key) =>
        <ItemComponent
            item={item}
            key={key.toString()}
            id={key.toString()}
            openModal={openModal}

        />
    );


    return (
        <div className="home">
            <ModalComponent visible={visible} setVisible={setVisible} modalItem={modalItem} update={props.update} />
            <div className="home__content">
                <div className="home__items">
                    {listItems}
                </div>
            </div>
        </div>
    );
};

export default HomePage;