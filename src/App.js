import React, {useState} from 'react';
import SearchIP from './components/SearchIP';
import './App.css';

const App = () => {
    const [currentInputValue, setCurrentInputValue] = useState('69.171.250.35')
    const [inputValue, setInputValue] = useState('69.171.250.35')

    const onFormSubmit = (e) => {
        e.preventDefault()
        setInputValue(currentInputValue)
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1>My IP</h1>
            <SearchIP />
            <h1>Search with IP Adress</h1>
            <form onSubmit={onFormSubmit} className="ui input">
                <input 
                type="text" 
                placeholder="Enter IP Adress" 
                value={currentInputValue}
                onChange={(e) => setCurrentInputValue(e.target.value)} 
                style={{marginRight: "0.7rem"}}
                />
                <button className="ui basic button">Search</button>
            </form>
            <SearchIP inputValue={inputValue} setInputValue={setInputValue} />
        </div>
    );
};

export default App;