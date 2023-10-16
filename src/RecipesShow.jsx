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
        <h5>Total time:</h5>
        <p>{props.recipe.total_time}</p>
      </div>
      <div className="edit-container">
        <h4>Edit Recipe</h4>
        <form>
          <div className="form-floating flex-fill mb-3">
            <input type="text" className="form-control" name={props.recipe.name} value={props.recipe.name} />
            <label className="form-label" htmlFor={props.recipe.name}></label>
          </div>
          <div className="form-floating flex-fill mb-3">
            <input
              type="text"
              className="form-control"
              name={props.recipe.ingredients_list}
              value={props.recipe.ingredients_list}
            />
            <label className="form-label" htmlFor={props.recipe.ingredients_list}></label>
          </div>
          <div className="form-floating flex-fill mb-3">
            <input type="text" className="form-control" name={props.recipe.prep_time} value={props.recipe.prep_time} />
            <label className="form-label" htmlFor={props.recipe.prep_time}></label>
          </div>
          <div className="form-floating flex-fill mb-0">
            <input type="text" className="form-control" name={props.recipe.cook_time} value={props.recipe.cook_time} />
            <label className="form-label" htmlFor={props.recipe.cook_time}></label>
          </div>
        </form>
      </div>
    </div>
  );
}

{
  /* <h2>{props.recipe.name}</h2>
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
      </div> */
}
