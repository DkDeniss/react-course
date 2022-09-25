import {useState} from "react";
import Todo from "../todo/Todo";


export default function Todos() {
    let [todos, setTodos] = useState([]); // [[],set()]

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(value => value.json())
        .then(value => {
            setTodos(value);
        });

    return (<div>
            {todos.map((post, index) => (<Todo item={post} key={index}/>))}
        </div>


    );
}