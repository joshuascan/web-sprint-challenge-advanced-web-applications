import axiosWithAuth from "../helpers/axiosWithAuth";

const editColorService = (color) => {
  axiosWithAuth()
    .put(`http://localhost:5000/api/colors/${color.id}`, color)
    .then((res) => {});
};

const deleteColorService = () => {};
