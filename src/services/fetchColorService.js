import axiosWithAuth from "../helpers/axiosWithAuth";

const fetchColorService = (state) => {
  axiosWithAuth()
    .get(`http://localhost:5000/api/colors`)
    .then((res) => {
      state(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default fetchColorService;
