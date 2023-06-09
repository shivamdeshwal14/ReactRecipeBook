import Styles from './Recipe.module.css'
const Recipe=(props)=>{
    
return<div className={Styles.recipe}>
   
    
    <img src={props.recipelist.recipe.image} className={Styles.image}/>
    <h1>{props.recipelist.recipe.label}</h1>
    <h3>{props.recipelist.recipe.calories}</h3>
</div>
}
export default Recipe