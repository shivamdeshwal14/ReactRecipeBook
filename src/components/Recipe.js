import Styles from "./Recipe.module.css"
const Recipe=(props)=>{
    
return <div className={Styles.recipe}>  
<h1>{props.recipelist.recipe.label}</h1>
    <img src={props.recipelist.recipe.image} className={Styles.image}/>
    <h3>Ingredients</h3>
    <ol>
        {props.recipelist.recipe.ingredients.map(ingredient => (
        <li key={Math.random()}>{ingredient.text}</li>
    ))}
    
    </ol>
    <h3>Additional Details </h3>
    <ul>
    <li> Dish Type-{props.recipelist.recipe.dishType}</li>
    <li>Calories-{props.recipelist.recipe.calories}</li>
    </ul>
  
</div>
}
export default Recipe