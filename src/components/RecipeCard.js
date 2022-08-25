import CustomImage from "./CustomImage"

export default function RecipeCard({recipe}){
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">{recipe.breakfast_recipe}</p>
                <p className="recipe-desc">{recipe.lunch_recipe}</p>
                <p className="recipe-desc">{recipe.dinner_recipe}</p>
                <p className="recipe-desc">{recipe.snack_recipe}</p>
                <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>
        </div>
    )
}