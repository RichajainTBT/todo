import React,{useState} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo , clearTodo} from '../Store/Features/TodoSlice';

function TodoList() {

const [newTodo, setNewTodo]=useState("");
const dispatch = useDispatch();
const todos = useSelector((state)=>state.todo.todos);
 
console.log(todos);

const handleAddTodo=()=>{
  if(newTodo){
    dispatch(addTodo({id:Date.now(), text:newTodo}));
    setNewTodo("");
  }
  
}

//clear todos
const handleClearTodo =()=>{
   dispatch(clearTodo())
}

// console.log(newTodo)


  return (
    <Container>
     <h1>To Do List </h1>
     <Wrapper>
        <input type="text" placeholder='Add a new Todo'
         onChange={(e)=>setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add List</button>
     </Wrapper>
     {
      todos.map((todo)=>(
         <TodoItem key={todo.id}>
          <div className='todoText'>
              {todo.text}
          </div>
          <div className='deleteIcon' onClick={()=>dispatch(deleteTodo(todo.id))}>
            <i className="fas fa-trash"></i>
        </div>
        </TodoItem>
      ))
     }
     {todos.length >0 &&(
       <ClearButton onClick={handleClearTodo}>Clear All</ClearButton>
     )}
   </Container>
  )
}

export default TodoList;

const Container = styled.div`
  display:flex;
  flex-direction:column;
  aign-item:center;
  margin:20px;
`

const Wrapper =styled.div`
display:flex;
align-items:center;
margin:5px 0px 20px;
border-radius:40px;
background:transparent;
margin:auto;

input{
 width:330px;
 height:20px;
 padding:10px;
 font:bold 12px "lucida sans","trebuchet MS", "Tahoma";
 border:0;
 background:#fff;
 border-radius:40px;
 border-top-style:none;
 box-shadow:0px 4px 20px -2px #69c9e9;
 margin-bottom:10px;
}
 input:focus{
 outline:0;
 }

 input::-webkit-placeholder{
  color:#999;
  font-weight:normal;
  font-style:italic;
  padding-left:20px;
 }
  button{
    background: #7bd2ef;
    padding: 8px 15px;
    height: 42px;
    border: 2px solid #7bd2ef;
    border-radius: 40px;
    color: white;
    margin-left: -31px;
    font-weight: 600;
    min-width:100px;
    margin-top:-5px;
  }
`
const TodoItem =styled.div`
 width: 400px;
    margin: 5px auto;
    border-radius: 10px;
    display: flex;
    padding: 10px;
    background: #add8e682;

 .todoText{
    width: 90%;
    text-align: left;
 }

 .deleteIcon{
  float: right;
    width: 20%;
    text-align: right;
    color: #d53434;
 }
`
const ClearButton = styled.button`
    background: lightgreen;
    color: white;
    padding: 10px 20px;
    max-width:412px;
    margin:auto;
    border: 2px solid lightgreen;
    font-weight: 500;
    border-radius: 26px;
    font-size: 14px;
`