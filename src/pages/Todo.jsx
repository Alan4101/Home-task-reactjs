import React from 'react';
import ListItem from '../components/ListItems/ListItems';
import TodoForm from './../components/TodoForm/TodoForm';
import { useState } from 'react';
import { useEffect } from 'react';
import config from '../config';
import { useHttp } from './../hooks/useHttp';
const Todo = () => {
    const {request} = useHttp();
    const [items, setItems] = useState([])
    useEffect(()=>{
        getItems()
    },[])

    const createItem = () =>{
        
    }
    const getItems = async () =>{
        const url = `${config.url}/items`;
        const data = await request(url, 'get');
        setItems(data)
    }
    console.log(items)
    return (
        <div>
            <ListItem data={items}></ListItem>
            <TodoForm/>
        </div>
    );
};

export default Todo;