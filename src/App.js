import "./styles.css";
import {useEffect, useState} from 'react'
export default function App() {
  const input = [1,4,7,8,8,0,1]
  const result = input.filter((item,i)=>input.indexOf(item)===i).sort((a,b)=>a-b)
  console.log(result)
  const array = [{
    id:1,
    name:"akash"
  },
  {
    id:2,
    name:"amit",
  },
{
id:3,
name:"akash"
},
{
  id:4,
  name:"alam"
}
];
const newArray = array.filter((item,index)=>array.findIndex((i)=>i.name===item.name && i.id===item.id))
console.log(newArray)
const [data,setData]=useState('')
useEffect(()=>{
async function fetchData(){
const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
const json = await res.json()
setData(json)
}
fetchData();
},[])
  return (
    <div className="App">
      <div key="data.id">
      <h1> {data.userId} </h1>
      <h1> {data.title} </h1>
<h1> {data.completed} </h1>
      </div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
