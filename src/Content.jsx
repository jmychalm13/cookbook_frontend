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
      <h1>All Recipes</h1>
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <div key={index} className="card w-50">
            <h3 className="fw-bold">{recipe.name}</h3>
            <div className="card-body">
              <p>
                <strong>Chef:</strong> {recipe.chef}
              </p>
              {/* todo: total cooktime */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
