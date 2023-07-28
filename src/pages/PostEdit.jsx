import "./PostCreate.css";

import { FaRegWindowClose } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { PostImage } from "../components/PostImage";

export default function PostEdit() {
  const handleImageSuccess = (imageUrl) => {
    setUrl(imageUrl);
  };

  return (
    <>
      <div className="single-recipe">
        {"< "}Recipes
        <div className="flex-row newpost-container">
          <h2 className="n-label">Modify information this recipe</h2>
          <div className="new-detail flex-row">
            <div className="add-portion">
              <form>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
                minus quas consequatur eligendi asperiores magnam, quasi rerum,
                repudiandae aspernatur eum voluptatibus ab vero dolore.
                Explicabo ex et odio culpa nesciunt.
                <FormGroup className="form-format">
                  <div className="separator-box separator-box-column">
                    <h3>Fill-up the information here</h3>
                    <TextField
                      label="Title"
                      name="title"
                      value="title"
                      required
                      margin="dense"
                    />
                    <TextField
                      label="Author"
                      name="author"
                      value="author"
                      required
                      margin="dense"
                    />

                    <TextField
                      label="Text"
                      // multiline
                      minRows={3}
                      value="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor minus quas consequatur eligendi asperiores magnam, quasi rerum,
                repudiandae aspernatur eum voluptatibus ab vero dolore. Explicabo ex et odio culpa nesciunt."
                      // minRows={2}
                      name="text"
                      required
                      margin="normal"
                    />
                    <div className="description-section-1">
                      <FormControl
                        sx={{ m: 1, minWidth: 80 }}
                        className="select-format"
                      >
                        <InputLabel id="demo-simple-select-autowidth-label">
                          Level - Category
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-autowidth-label"
                          id="demo-simple-select-autowidth"
                          autoWidth
                          label="Level-Category"
                          style={{
                            fontSize: "1.5rem",
                          }}
                        >
                          <MenuItem>Easy</MenuItem>
                          <MenuItem>Medium</MenuItem>
                          <MenuItem>Hard</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField
                        label="Preparation time"
                        name="Preparation time"
                        value="1 hour"
                        required
                        margin="normal"
                      />
                      <TextField
                        label="Yield"
                        name="Yield"
                        value="5 serving"
                        required
                        margin="normal"
                      />
                    </div>
                  </div>

                  <div className="separator-box ingredient-dishimage">
                    <div className="add-ingredient">
                      <h3>Fill-up the ingredients🍅 here</h3>
                      <br />
                      <div className="form-inline">
                        <TextField
                          label={`Ingredient--quantity`}
                          name="quantity"
                          required
                          value="quantity"
                          margin="normal"
                        />
                        <TextField
                          className="ingredient-name"
                          label={`Ingredient--name`}
                          name="name"
                          required
                          value="name"
                          margin="normal"
                        />

                        <FaRegWindowClose size={30} className="item-cross" />
                      </div>

                      <Button variant="contained">Add new ingredient</Button>
                    </div>
                    <div className="recipe-image">
                      <figure className="add-image-background">
                        <PostImage addImageSuccessful={handleImageSuccess} />
                      </figure>
                      <FaRegWindowClose size={30} className="item-cross" />
                    </div>
                  </div>
                  <div className="separator-box">
                    <h3>Fill-up the directions🧑‍🍳 here</h3>
                    <div className="form-inline">
                      <h3></h3>
                      <textarea
                        wrap="hard"
                        rows="3"
                        label={`Direction--1}`}
                        name="direction"
                        required
                        value="direction1"
                        margin="dense" // multiline minRows={3}
                        className="form-inline-oneline ing-label"
                      ></textarea>
                      <FaRegWindowClose size={30} className="item-cross" />
                    </div>

                    <Button variant="contained"> Add new direction</Button>
                  </div>

                  <div className="button-section button-format"></div>
                  <Button variant="contained" type="submit">
                    Edit
                  </Button>
                </FormGroup>
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const recipeID = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:3000/recipes/" + id);
  return res.json();
};
