export function RecipesShow(props) {
  const handleClick = () => {
    props.closeModal();
  };

  return (
    <div className="recipes-show">
      <h2>{props.recipe.name}</h2>
      <p>Chef: {props.recipe.chef}</p>

      <button onClick={handleClick} className="btn">
        Close
      </button>
    </div>
  );
}
