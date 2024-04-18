import{useState,useEffect} from "react"
import './App.css';
import Recipe from "./components/Recipe";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const App=()=>{
  const APP_ID='e8a6f00f'
  const APP_KEY='9f6ec7fa6e2c14a728a2bfd5de4d3964	'
  const[search,setSearch]=useState('')
  const[dishes,setDishes]=useState([])
  const[query,setQuery]=useState('panner')

useEffect(()=>{
  async function getData(){   
    const res=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const response=await res.json()
   setDishes(response.hits); 
  }   
  getData()
},[query])
const submitHandler=e=>{
  e.preventDefault()
  setQuery(search)
  setSearch('')
}
return<div className="App">
  <form  className="search-form" onSubmit={submitHandler}  >
    <input type="text"onChange={e=>setSearch(e.target.value )}
     size="lg" className="mb-10"    />  
    <Button type="submit"variant="success" size="sm">Search</Button>{' '}
   </form>
  <div className="recipes">
  {dishes.map((item,idx)=><Recipe recipelist={item} key={idx}/>)}
  </div>

</div>
}
export default App;