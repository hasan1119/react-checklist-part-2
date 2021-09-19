import './App.css';
import {useState,useEffect} from 'react'
function App() { 

  return (
  <div style={{ display:'flex',flexWrap:'wrap', justifyContent:"space-between"}}>
      <GetTodo></GetTodo>
  </div>
  );
}



function GetTodo(){
  const [Todo,setTodo] = useState([])
  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())
    .then(data=>setTodo(data))

  },[])
return(
 

 Todo.map(w => <ShowData  title={w.title} status={w.completed}></ShowData>)


)

}


function ShowData (props){
  let progress;
  if(props.status){
  progress = 'Completed'
  }else{
    progress = 'Incomplete'
  }
  console.log(props);
  return(
   <div  style={{width:'25%', height:"300px", margin: '15px', border:'2px solid green'}}>
      <h2>Title: {props.title}</h2>
      <p>isCompleted: <span className='status'> {progress}</span></p>
   </div>
  )
}










export default App;


