import React from "react";

import { PostImage } from "../components/PostImage";
import "./PostCreate.css";

import { FaRegWindowClose } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function PostCreate() {
  const handleImageSuccess = (imageUrl) => {
    setUrl(imageUrl);
  };
  return (
    <>
      <div className="single-recipe">
        {"< "}Recipes
        <div className="flex-row newpost-container">
          <h2 className="n-label">Post new recipe</h2>
          <div className="new-detail flex-row">
            <div className="add-portion">
              <h2>Add New Recipe</h2>
              <form>
                <FormGroup className="form-format">
                  <div className="separator-box separator-box-column">
                    <h3>Fill-up the information here</h3>
                    <TextField
                      label="Title"
                      name="title"
                      required
                      margin="dense"
                    />
                    <TextField
                      label="Author"
                      name="author"
                      required
                      margin="dense"
                    />

                    <TextField
                      label="Text"
                      multiline
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
                        required
                        margin="normal"
                      />
                      <TextField
                        label="Yield"
                        name="Yield"
                        required
                        margin="normal"
                      />
                    </div>
                  </div>

                  <div className="separator-box ingredient-dishimage">
                    <div className="add-ingredient">
                      <h3>Fill-up the ingredients🍅 here</h3>

                      <div className="form-inline">
                        <TextField
                          label={`Ingredient--quantity`}
                          name="quantity"
                          required
                          margin="normal"
                        />
                        <TextField
                          className="ingredient-name"
                          label={`Ingredient--name`}
                          name="name"
                          required
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

                    <div className="form-inline ">
                      <TextField
                        label={`Direction-`}
                        name="direction"
                        required
                        margin="dense"
                        multiline
                        className="form-inline-oneline"
                      />

                      <FaRegWindowClose size={30} className="item-cross" />
                    </div>

                    <Button variant="contained"> Add new direction</Button>
                  </div>

                  <div className="button-section"></div>
                  <Button variant="contained" type="submit">
                    Create
                  </Button>
                  <br />
                </FormGroup>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
