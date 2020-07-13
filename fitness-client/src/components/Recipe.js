import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

export default function Recipe({ recipe }) {
  const [showInfo, setShowInfo] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState([]);
  const { image_url, publisher, title, recipe_id } = recipe;
  const { ingredients, social_rank } = recipeDetails;

  const handleShowInfo = async (e) => {
    try {
      const { id } = e.target.dataset;
      const response = await fetch(
        `https://api.edamam.com/search/get?key=7cdab426afc366070dab735500555521&rId=${id}`
      );
      const { recipe } = await response.json();
      setRecipeDetails(recipe);
      setShowInfo(!showInfo);
    } catch (e) {
      console.log(e);
    }
  };
  alert(
    "Real talk, look im tellin ya mane if ya get jammed up dont mention my name.."
  );
  console.log(
    "Im knee deep in the game so when its time to reup Im knee deep in the cane"
  );
  return (
    <>
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card">
          <img
            src={image_url}
            alt="recipe"
            className="img-card-top"
            style={{ height: "14rem" }}
          />
          <div className="card-body text-capitalize">
            <h6>{title}</h6>
            <h6 className="text-warning">Provided by: {publisher}</h6>
          </div>
          <div className="card-footer">
            <button
              type="button"
              style={{ margin: `13px` }}
              className="btn btn-primary text-center"
              data-id={recipe_id}
              onClick={handleShowInfo}
            >
              Ingredients
            </button>
            <RecipeDetails
              key={recipe_id}
              ingredients={ingredients}
              social_rank={social_rank}
              showInfo={showInfo}
            />
          </div>
        </div>
      </div>
    </>
  );
}
