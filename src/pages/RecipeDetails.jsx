import "./RecipeDetails.css";
import samplePic from "../pages/louis-hansel-wOISTbCpUCc-unsplash.jpg";

export default function RecipeDetails() {
  return (
    <>
      <div className="single-recipe"></div>
      <div className="top-container">
        <h2 className="title">title</h2>
        <h3 className="author">author</h3>
        <div className="first-level-type-1">
          <div className="second-level-type-1">
            <figure className="img-1">
              <img src={samplePic} alt="title-picture" />
            </figure>
            <div className="second-level group-type-1">
              <p className="second-level text-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis ab qui temporibus. Alias et aut eum voluptas
                necessitatibus, doloribus dolores. Est, quam. Rem, cum veniam
                aut non at esse illum.
              </p>
              <div className="third-level group-type-1">
                <div className="third-level-item">
                  {" "}
                  <span className="labels">DIFFICULTY: </span>
                  <span className="group-item">Easy</span>
                </div>
                <div className="third-level-item">
                  {" "}
                  <span className="labels">PREPTIME: </span>
                  <span className="group-item">50 mins</span>
                </div>
                <div className="third-level-item">
                  {" "}
                  <span className="labels">YIELD: </span>
                  <span className="group-item">5 servings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="first-level box-2">
          <h3>Ingredients</h3>
          <div className="second-level box-1">
            <div className="second-level arrayitem">
              <p>
                <span className="group-item group-item-type-1">2 cups</span>
                <span className="group-item group-item-type-1">water</span>
              </p>
            </div>
            <div className="second-level arrayitem">
              <p>
                <span className="group-item group-item-type-1">2 cups</span>
                <span className="group-item group-item-type-1">water</span>
              </p>
            </div>
            <div className="second-level arrayitem">
              <p>
                <span className="group-item group-item-type-1">2 cups</span>
                <span className="group-item group-item-type-1">water</span>
              </p>
            </div>
          </div>
        </div>
        <div className="first-level box-3">
          <h3>Directions:</h3>
          <div className="second-level arrayitem">
            <p className="array-item-type-1">
              <span className="list-number">1. </span>
              Put the water in the Pot
            </p>
          </div>
          <div className="second-level arrayitem">
            <p className="array-item-type-1">
              <span className="list-number">1. </span>
              Put the water in the Pot
            </p>
          </div>
          <div className="second-level arrayitem">
            <p className="array-item-type-1">
              <span className="list-number">1. </span>
              Put the water in the Pot
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
