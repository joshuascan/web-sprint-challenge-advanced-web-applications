import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../helpers/axiosWithAuth";

// import { editColorService, deleteColorService } from '../services/colorServices';
import fetchColorService from "../services/fetchColorService";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);
  const { push } = useHistory();

  useEffect(() => {
    fetchColorService(setColors);
  }, []);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    axiosWithAuth()
      .put(`http://localhost:5000/api/colors/${editColor.id}`, editColor)
      .then((res) => {
        colors[editColor.id - 1] = res.data;
        setColors(colors);
        setEditing(false);
        push("/bubbles");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteColor = (colorToDelete) => {};

  return (
    <div className="container">
      <ColorList
        colors={colors}
        editing={editing}
        toggleEdit={toggleEdit}
        saveEdit={saveEdit}
        deleteColor={deleteColor}
      />
      <Bubbles colors={colors} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete saveEdit, deleteColor functions
