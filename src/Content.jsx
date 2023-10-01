import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export function Content() {
  const [recipes, setRecipes] = useState([]);

  const handleIndexRecipes = () => {
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      setRecipes(response.data);
      console.log(response.data);
    });
  };

  useEffect(handleIndexRecipes, []);
  return (
    <div>
      <h1 className="text-center">All Recipes</h1>
      <div className="container">
        <div className="recipes-container row">
          {recipes.map((recipe, index) => (
            <div key={index} className="card col-4 gx-2 gy-2">
              <h3 className="fw-bold">{recipe.name}</h3>
              <div className="card-body">
                <p>
                  <strong>Chef:</strong> {recipe.chef}
                </p>
                {/* <p>{recipe.ingredients_list}</p> */}
                {recipe.ingredients_list.map((ingredient) => (
                  <p key={ingredient.id}>{ingredient}</p>
                ))}
                {/* todo: total cooktime */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
