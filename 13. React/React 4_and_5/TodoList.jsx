import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList()
{
    let [todos , setTodos] = useState([{task:"sample-task" , id:uuidv4() , idDone:false}]);
    let [newTodo , setNewTodo] = useState("");

    let addNewTask = () => {
       setTodos((prevTodos)=>{
        return [...prevTodos , {task:newTodo , id:uuidv4() , isDone: false }]
       });
       setNewTodo("");
    }

    let updateTodoValue= (event) => 
    {
        setNewTodo(event.target.value);
    }

    let deleteTodo= (id) =>{
        setTodos(todos.filter((todo) => todo.id != id));
    }

    // update all elements in an array
    let upperCaseAll = () => {
       setTodos(todos.map((todo => {
            return {
                ...todo,
                task: todo.task.toUpperCase()
            };
       }))) ;
    }

    // update one element in array
    let markAsDone = ( id ) => {
       setTodos(todos.map((todo) => {
                if(todo.id === id)
                    return {
                        ...todo ,
                        isDone : true,
                    };
                else{
                    return todo;
                }
            })
       );
    }

    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}/>
            <br /><br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br />
            <hr /><br />
            <h4>Todo Todo</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={ todo.isDone ?  {textDecorationLine:"line-through"} : {} }>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={ () => deleteTodo(todo.id)}>delete</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
                         </li>
                    ))
                }
            </ul>

            <button onClick={upperCaseAll}>Uppercase ALL</button>
        </div>  
    );
}