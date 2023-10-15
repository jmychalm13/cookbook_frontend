export function RecipesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateRecipe(params);
    // event.target.reset();
  };

  return (
    <div className="recipe-new">
      <h1 className="text-center">New Recipe</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="recipe_name" placeholder="Name" name="name" />
          <label htmlFor="name">Name</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="chef_name" placeholder="Chef Name" name="chef" />
          <label htmlFor="chef">Chef Name</label>
        </div>

        <div className="form-floating mb-3">
          <input type="number" className="form-control" id="prep_time" placeholder="Prep Time" name="prep_time" />
          <label htmlFor="prep_time">Prep Time</label>
        </div>

        <div className="form-floating mb-3">
          <input type="number" className="form-control" id="cook_time" placeholder="Cook Time" name="cook_time" />
          <label htmlFor="cook_time">Cook Time</label>
        </div>

        <div className="form-floating mb-3">
          <input type="number" className="form-control" id="temperature" placeholder="Temperature" name="temperature" />
          <label htmlFor="temperature">Temperature</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="ingredients"
            placeholder="Ingredients"
            name="ingredients_list"
          />
          <label htmlFor="ingredients">Ingredients</label>
        </div>

        <button type="submit" className="btn btn-primary btn-lg">
          Submit
        </button>
      </form>
    </div>
  );
}
