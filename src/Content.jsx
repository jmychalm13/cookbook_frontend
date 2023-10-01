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
        <div className="recipes-container row row-cols-1 row-cols-md-3 g-2">
          {recipes.map((recipe, index) => (
            <div key={index} className="col">
              <div className="card">
                <h3 className="text-center fw-bold">{recipe.name}</h3>
                <div className="card-body">
                  <p>
                    <strong>Chef:</strong> {recipe.chef}
                  </p>
                  <p>
                    <strong>Ingredients:</strong>
                  </p>
                  <div className="ingredients-container">
                    {recipe.ingredients_list.length > 0 ? (
                      recipe.ingredients_list.map((ingredient, index2) => {
                        return <p key={index2}>{ingredient}</p>;
                      })
                    ) : (
                      <p>No ingredients listed.</p>
                    )}
                  </div>
                  <div className="time-container">
                    <p>
                      <strong>Total cook time:</strong> {recipe.total_time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
