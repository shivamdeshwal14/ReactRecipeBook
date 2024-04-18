import Styles from "./Recipe.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';

const Recipe=(props)=>{
    
return <div className={Styles.recipe} >  
    <h1>{props.recipelist.recipe.label}</h1>
    <Image src={props.recipelist.recipe.image} alt="Image"  className="rounded-circle" fluid  />
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