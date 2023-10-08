export function RecipesShow(props) {
  return (
    <div className="recipes-show">
      <h2>{props.recipe.name}</h2>
      <p>Chef: {props.recipe.chef}</p>

      <button className="btn">Close</button>
    </div>
  );
}
