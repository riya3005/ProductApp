import React from 'react';
import './SearchBar.css';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const inputRef = useRef(null);
    const inputHandler = (e) => {
        e.preventDefault();
        const searchVal = inputRef.current.value;
        dispatch({ type: 'UPDATE_SEARCH_VALUE', searchVal });
        history.push({
            pathname: "/",
            search: `?q=${searchVal}&_page=1`
        });
    }
    return (
        <form onSubmit={inputHandler} className="Search">
            <input ref={inputRef} className="product_input" type="text" name="product"
                placeholder="Search Product..." />
        </form>
    );
}

export default SearchBar;