
import "./App.css";
// import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const count=useSelector((state)=>state.counter.count);  
  const dispach=useDispatch()

  return (
    <div className="App">
   
<h1>{count}</h1>
<button onClick={()=>{
  dispach({type:"ADD"})
}}>plus</button>

{/* <input onChange={()=>{
  dispach()
}}></input> */}

<button onClick={()=>{
  dispach({type:"minus"})
}} >minus</button>


    </div>
  );
}

export default App;
