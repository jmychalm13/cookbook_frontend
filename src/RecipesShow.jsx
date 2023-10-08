import "./Modal.css";

export function RecipesShow(props) {
  return (
    <div className="recipes-show">
      <h2>{props.recipe.name}</h2>
      <h5>Chef:</h5>
      <p>{props.recipe.chef}</p>
      <div className="ingredients-show">
        {props.recipe.ingredients_list.length > 0 ? (
          props.recipe.ingredients_list.map((ingredient, index) => {
            return (
              <div key={index}>
                <h5>Ingredients:</h5>
                <p>{ingredient}</p>
              </div>
            );
          })
        ) : (
          <p className="hidden"></p>
        )}
      </div>
      <div className="cook-times-container">
        <h5>Prep Time:</h5>
        <p>{props.recipe.prep_time}</p>
        <h5>Cook Time:</h5>
        <p>{props.recipe.cook_time}</p>
      </div>
    </div>
  );
}
