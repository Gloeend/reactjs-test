import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import './styles/button.css';
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import {useEffect, useState} from "react";
import ViewPage from "./pages/ViewPage/ViewPage";

function App() {
    const [storage, setStorage] = useState([]);

    function fetchCases() {
        setStorage(JSON.parse(localStorage.getItem('cases')))
    }

    const createItem = (item) => {
        let newStorage = storage;
        newStorage.push(item);
        setStorage(newStorage);
        localStorage.setItem('cases', JSON.stringify(storage))
    }

    const updateItem = (item) => {
        let newStorage = storage;
        newStorage[item.key] = {
            name: item.name,
            description: item.description,
        }
        setStorage(newStorage);
        localStorage.setItem('cases', JSON.stringify(storage));
        fetchCases()
    }

    const deleteItem = (key) => {
        let newStorage = storage;
        newStorage.splice(key, 1);
        setStorage(newStorage);
        localStorage.setItem('cases', JSON.stringify(storage));
        fetchCases();
    }

    useEffect(() => {
        if (!localStorage.getItem('cases')) {
            localStorage.setItem('cases', JSON.stringify([]))
        }
        fetchCases()
    }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<HomePage storage={storage} create={createItem} />}/>
                    <Route path="/view" element={<ViewPage storage={storage} update={updateItem} deleteItem={deleteItem} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
