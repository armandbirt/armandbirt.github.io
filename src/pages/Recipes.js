import PreviousSearches from "../components/PreviousSearches";
import Protein from "../components/Protein";
import RecipeCard from "../components/RecipeCard";
import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function Recipes(){
    const recipes = [
        {
            title: "黄焖鸡米饭",
            image: "https://i.postimg.cc/kg4brxNm/img-21.jpg",
            breakfast_recipe: "早餐：一个 English Muffin + 煎蛋 + 咖啡",
            lunch_protein: "chicken",
            lunch_recipe: "午餐：黄焖鸡 + 蒜蓉 A 菜 + white rice", 
            dinner_protein: "beef",
            dinner_recipe: "晚餐: beef & broccolli + white rice", 
            snack: "ice cream",
            snack_recipe: "加餐：ice cream",
        }, 
        {
            title: "意大利肉酱面",
            image: "https://i.postimg.cc/XYzynpxy/img-22.jpg",
            breakfast_recipe: "早餐：croissant",
            lunch_protein: "beef",
            lunch_recipe: "午餐：牛肉糜意面 + 菠菜", 
            dinner_protein: "white fish",
            dinner_recipe: "晚餐: 蒸鳕鱼 + 蔬菜 + white rice",  
            snack: "croissant",
        },

    ].sort(() => Math.random() - 0.5)

    const searches = ['ice cream', 'fried chicken', 'fries', 'chocolate', 'croissant'] 
    const proteins = ['chicken', 'shrimp', 'white fish', 'beef', 'salmon', 'egg white'] 

    const [filteredRecipes, setFilteredRecipes] = useState(recipes); 

    const junk = (e) => setFilteredRecipes((filteredRecipes === null && recipes.filter((item) => item.snack.includes(e.target.value))) || (filteredRecipes !== null && filteredRecipes.filter((item) => item.snack.includes(e.target.value))));    
    const ingredients = (e) => setFilteredRecipes((filteredRecipes === null && recipes.filter((item) => item.lunch_protein.includes(e.target.value))) || (filteredRecipes !== null && filteredRecipes.filter((item) => item.lunch_protein.includes(e.target.value))));
    const meat = (e) => setFilteredRecipes((filteredRecipes === null && recipes.filter((item) => item.dinner_protein.includes(e.target.value))) || (filteredRecipes !== null && filteredRecipes.filter((item) => item.dinner_protein.includes(e.target.value))));
    
    return (
        <div>
            <div className="previous-searches section">
                <h2>What are you craving for today?</h2>
                <div className="previous-searches-container">
                    { searches.map((search, index) => (<button key={index} value = {search} style={{animationDelay: index * .1 + "s"}} onClick = {junk} className="search-item">
                        {search}
                    </button>)) }
                </div>
            </div>
            <div className="previous-searches section">
                <h2>What's your choice of protein today?</h2>
                <div className="previous-searches-container">
                    { proteins.map((protein, index) => (<button key={index} value = {protein} style={{animationDelay: index * .1 + "s"}} onClick = {ingredients} className="search-item">
                        {protein}
                    </button>)) }
                </div>
            </div>
            <div className="previous-searches section">
                <h2>What's your choice of protein today?</h2>
                <div className="previous-searches-container">
                    { proteins.map((protein, index) => (<button key={index} value = {protein} style={{animationDelay: index * .1 + "s"}} onClick = {meat} className="search-item">
                        {protein}
                    </button>)) }
                </div>
                <div className="search-box">
                    <input type="text" placeholder="Search ..." />
                    <button className="btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {filteredRecipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}