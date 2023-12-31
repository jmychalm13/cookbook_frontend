import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { RecipesNew } from "./RecipesNew";
import { RecipesIndex } from "./RecipesIndex";
import { Routes, Route } from "react-router-dom";
import { Modal } from "./Modal";
import { RecipesShow } from "./RecipesShow";

export function Content() {
  const [recipes, setRecipes] = useState([]);
  const [isRecipeShowVisible, setIsRecipeShowVisible] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState({});

  const handleIndexRecipes = () => {
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      setRecipes(response.data);
      console.log(response.data);
    });
  };

  const handleShowRecipe = (recipe) => {
    setIsRecipeShowVisible(true);
    setCurrentRecipe(recipe);
    console.log(recipe);
  };

  const handleHideRecipe = () => {
    setIsRecipeShowVisible(false);
  };

  const handleCreateRecipe = (params) => {
    axios.post("http://localhost:3000/recipes.json", params).then((response) => {
      console.log(response.data);
    });
  };

  const handleUpdateRecipe = (id, params) => {
    axios.patch(`http://localhost:3000/recipes/${id}.json`, params).then((response) => {
      setRecipes(
        recipes.map((recipe) => {
          if (recipe.id === response.data.id) {
            return response.data;
          } else {
            return recipe;
          }
        })
      );
    });
  };

  useEffect(handleIndexRecipes, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<RecipesIndex myRecipes={recipes} onSelectRecipe={handleShowRecipe} />} />
        <Route path="/new" element={<RecipesNew onCreateRecipe={handleCreateRecipe} />} />
      </Routes>

      <Modal show={isRecipeShowVisible} onClose={handleHideRecipe}>
        <RecipesShow recipe={currentRecipe} closeModal={handleHideRecipe} onUpdateRecipe={handleUpdateRecipe} />
      </Modal>
    </div>
  );
}
