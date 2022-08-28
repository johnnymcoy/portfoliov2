import { createSlice } from "@reduxjs/toolkit"

let initialTodo;
let localTodo;
// let localTodo = JSON.parse(localStorage.getItem('todo'));;
//  if(localStorage.getItem('todo'))
//  {
//     localTodo = JSON.parse(localStorage.getItem('todo'));
//  }

if(localTodo === null)
{
    initialTodo =  
        [{
            id: 1,
            title: "Go to the shops",
            text: "Milk, Bread, Ice-cream"
        }]
}
else
{
    initialTodo = localTodo;
}

const initialTodoState = {
    todos: initialTodo, 
}

const todoSlice = createSlice({
    name: "todo",
    initialState: initialTodoState,
    reducers: {
        deleteTodo(state, action){
            const id = action.payload.id;
            state.todos = state.todos.filter(item => item.id !== id);
            localStorage.setItem("todo", JSON.stringify(state.todo));
        },
        addTodo(state,action){
            const item = action.payload;
            state.todos.push({
                id: item.id,
                title: item.title,
                text: item.text,
            });
            localStorage.setItem("todo", JSON.stringify(state.todos));
        }
    }
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;