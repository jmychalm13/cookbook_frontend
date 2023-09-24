import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export function Content() {
  const [recipes, setRecipes] = useState([]);

  const handleIndexRecipes = () => {
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      setRecipes(response.data);
    });
  };

  useEffect(handleIndexRecipes, []);
  return (
    <div>
      <h1>All Recipes</h1>
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <p key={index}>{recipe.name}</p>
        ))}
      </div>
    </div>
  );
}
