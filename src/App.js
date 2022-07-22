
// import './App.css';
// import axios from "axios"
// import React,{useEffect, useState} from "react"
// // import Todo from './use/Todo';

// function App() {
//   const [page,setPage]=useState(1)
//   const [limit, setlimit] = useState(2)
//   const [totalCount,setTotalCount]=useState(0)
//   const [todos,setTodos]=useState([])
//   useEffect(()=>{
//     axios.get(`http://localhost:3223/todo?_page=${page}&_limit=${limit}`).then((r)=>{
//       setTodos(r.data)
//       setTotalCount(Number(r.headers["x-total-count"]));
//     })
//     // const getTodo=async()=>{
//     //   let r=await axios.get("http://localhost:8080/todo?_page=${page}&_limit=2");
//     //   setTodos(r.data);
//     //   setTotalCount(Number(r.headers["x-total-count"]));
//     // };
//     // getTodo();
//   },[page,limit])
//   return (
//     <div className="App">
//       {todos.map((todo)=>(
//         <div key={todo.id}>{todo.id} {` : `} {todo.value}</div>
//       ))}
//       <button disabled={page<=1} onClick={()=>{if(page>1)
//       {
//         setPage(page-1)
//       }}}>{"<"}</button>

//       <select onChange={(e)=>setlimit(Number(e.target.value))}>
//         <option value={2}>2</option>
//         <option value={4}>4</option>
//         <option value={6}>6</option>
//       </select>

//       <button disabled={totalCount<page*2} onClick={()=>{setPage(page+1)}}>{">"}</button>
//       {/* <Todo /> */}
//     </div>
//   );
// }

// export default App;









// ----------------------------------------------------------------------------------------------------






// import React from 'react'
// // import Count from './use/Count'
// import Stopwatch from './use/Stopwatch'

// const App = () => {
//   return (
//     <div>App
//       {/* <Todo /> */}
//       {/* <Count /> */}
//       <Stopwatch />
//     </div>
//   )
// }

// export default App


// ------------------------------------------------------------------------------------------------------


// USE CONTEST  API


// import React, { useReducer } from "react";
// const reducer=(counter,action)=>{
//   switch(action.type){
//     case "INCREMENT":{
//       return counter+1;
//     }
//     case "DECREMENT":{
//       return counter-1;
//     }
//     default:{
//       return counter;
//     }
//   }
// }

// export default function App(){
//   const [counter,dispatch]=useReducer(reducer,0)

//   return(
//     <div className="App">
//       Counter:{counter}
//       <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
//       <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
//     </div>
//   )
// }



// -----------------------------------------------------

import React from "react";
import Main from "./Pay/Main";
import {Routes,Route} from "react-router-dom"

function App(){
  return(
    <div className="App">
      <Main />
    </div>
  )
}
export default App;
