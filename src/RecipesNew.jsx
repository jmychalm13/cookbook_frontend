export function RecipesNew() {
  return (
    <div className="recipe-new">
      <h1 className="text-center">New Recipe</h1>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="chefName" placeholder="Chef Name" />
        <label htmlFor="chefName">Chef Name</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Password</label>
      </div>
    </div>
  );
}
