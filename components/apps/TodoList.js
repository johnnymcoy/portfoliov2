// Imports
import SmallWindow from "components/ui/SmallWindow";
import React,{ useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import {todoActions} from "@store/apps/TodoStore";
import ProgressBar from "../UI/ProgressBar";

// CSS Styles
import CSS from './TodoList.module.scss';
import Button from "components/windowsUI/Button";
import Checkbox from "components/ui/Checkbox";

function TodoItem(props){
    //props items 
    //Title
    //Priority
    //Due date    
    //Complete?
    //Category/ Folder
    const [ itemOpen, setItemOpen] = useState(false);
    let itemCSS = itemOpen ? `${CSS.todoItem} ${CSS.todoItemOpen}` : `${CSS.todoItem}`

    function openItem(){
        setItemOpen(prevState => !prevState);
    }
    function editItem(){
        props.editItem(props.id);
    }
    function deleteItem(){
        props.deleteItem(props.id);
    }

    return(
        <li className={itemCSS}>
            <h2>{props.title}</h2>
            <Checkbox type="checkbox" />
            <div className={CSS.priority}>{props.priority}</div>
            <div className={CSS.timeRemaining}>Time Left</div>
            <div className={CSS.editButtons}>
                <Button size="small" onClick={openItem}>{itemOpen ? "close" : "open"}</Button>
                {itemOpen && <Button size="small" onClick={editItem}>edit</Button>}
                {itemOpen && <Button size="small" onClick={deleteItem}>delete</Button>}
            </div>
            <ProgressBar 
                progress={20}
                size={60}
                strokeWidth={8}
                circleOneStroke="#ffb24a"
                percent
            />
        </li>
    );
}

function TodoList(){
    const dispatch = useDispatch();
    const fullTodoList = useSelector(state => state.todo.todos);
    // const bDebuggingMode = useSelector(state => state.debug.bDebuggingMode);
    console.log(fullTodoList)
    
    function editTodo(){
        console.log("Edit");
    }
    function deleteTodo(id){
        dispatch(todoActions.deleteTodo({id: id}));
        console.log("Delete");
    }

    function openAddTodoMenu(){
        console.log("Open Add todo Menu")
    }

    const debugTodo = (
    <ul>
        <li>Have Priority(High Med Low)</li>
        <li>Local Storage</li>
        <li>Completed List</li>
        <li>Categories</li>
        <li>Reminders</li>
        <li>Delete with Are you sure pop up</li>

    </ul>
    );
    return(
<SmallWindow title="To do list" className={CSS.todoList}>
    <h1>To do List V1</h1>
    <Button size="small" onClick={openAddTodoMenu}>Add</Button>
    <h2>Sort</h2><Button size="small">High-Priority</Button><Button size="small">Low-Priority</Button>
    <h3>Folders</h3>
    <ProgressBar 
        size={100}
        strokeWidth={10}
        circleOneStroke="#ffb24a"
        percent
        progress={20}
    
    />
    <ul className={CSS.list}>
        <TodoItem title="Go Shops" priority="High" editItem={editTodo} deleteItem={deleteTodo}/>
        <TodoItem title="Finish App" priority="Low" deleteItem={deleteTodo}/>
        <TodoItem title="Work" priority="Low"/>
    </ul>
    {/* {bDebuggingMode && debugTodo} */}
    
</SmallWindow>

);}

export default TodoList;