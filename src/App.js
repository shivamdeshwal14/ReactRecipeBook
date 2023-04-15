import{useState,useEffect} from "react"
import './App.css';
const App=()=>{
  const APP_ID='e8a6f00f'
  const APP_KEY='9f6ec7fa6e2c14a728a2bfd5de4d3964	'
  const[search,setSearch]=useState('momo')
  const[query,setQuery]=useState('')

useEffect(()=>{
  async function getData(){
    const res=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const response=await res.json()
    console.log(response); 
  } 
  console.log("END");
  getData()
},[query])
const submitHandler=e=>{
  e.preventDefault()
  setQuery(search)
  setSearch('')
}
return<>
<form onSubmit={submitHandler}>
  {console.log("UI")}
  <input type="text"onChange={e=>setSearch(e.target.value)}/>
<button type="submit">Search</button>
</form>
</>
}

export default App;