// import { useState, useEffect } from "react";
// import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
//date formatter
import moment from "moment";
import { FaRegWindowClose } from "react-icons/fa";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import PaginatedItems from "../components/Pagination";

import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes, deleteRecipe } from "../store/reducers/recipes";

import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";

// import commentIcon from "./comment-icon.svg";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  color: "red",
  boxShadow: 24,
  p: 4,
};

export default function RecipeList() {
  const dispatch = useDispatch();

  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  const newRecipeData = recipes
    .map((item) => {
      return {
        id: item.id,
        title: item.title,
        level: item.level,
        imageUrl: item.imageUrl,
        text: item.text,
        time: item.time,
        author: item.author,
      };
    })
    .sort((x, y) => {
      (x = new Date(x.time)), (y = new Date(y.time));
      return y - x;
    });

  return (
    <>
      <div className="post-layout">
        <p>recipe listsss</p>
        <div className="flex-row post-buttons">
          <div className="flex-row post-filter"></div>

          <Link to="recipes/post-new">
            <Button variant="contained">
              <AddCircleIcon fontSize="large" />
            </Button>
          </Link>
        </div>
        <PaginatedItems itemsPerPage={4} arrayObject={newRecipeData} />
      </div>
    </>
  );
}

export function Items({ currentItems }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [idToDelete, setidToDelete] = useState("");

  const handleClose = useCallback(() => setOpen(false), []);

  const handleOpen = useCallback((id) => {
    setOpen(true);
    setidToDelete(id);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      handleClose();
    },
    [handleClose]
  );

  const onDeleteClick = () => {
    // TODO: Dispacth corresponding action
    dispatch(deleteRecipe(idToDelete));
  };
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div className="post-card" key={index}>
            <Link to={`/recipes/${item.id}`} key={`${index}-${item}`}>
              <figure className="post-card-img">
                <img
                  src={item.imageUrl}
                  alt={`${item.id}-img`}
                  className="post-card-img"
                ></img>
              </figure>
              <div className="card-info">
                <div className="title-description">
                  <h3 className="post-card-title">{item.title} </h3>
                  <p className="post-card-text">{item.text}</p>
                </div>
              </div>
              <div className="date-author">
                <p>{moment(item.time).format("MMMM D Y")}</p>
                <p>&nbsp;</p>
                <p>{item.author}</p>
              </div>
            </Link>

            <FaRegWindowClose
              size={30}
              className="item-cross-allList"
              onClick={(e) => handleOpen(item.id)}
            />
            <Link
              to={`/recipes/post-edit/${item.id}`}
              key={`${item}+${index}`}
              className="edit-icon"
            >
              <EditIcon className="edit-icon" />
            </Link>
          </div>
        ))}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <p
            style={{
              textAlign: "center",
              fontSize: "15px",
              marginBottom: "10px",
            }}
          >
            Confirmed to delete
          </p>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Button
                onClick={onDeleteClick}
                variant="contained"
                type="submit"
                style={{ backgroundColor: "red" }}
              >
                Yes, Please delete
              </Button>
            </FormGroup>
          </form>
        </Box>
      </Modal>
    </>
  );
}
