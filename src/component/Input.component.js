import React, { useState } from "react";
import axios from "axios";

export default function Input() {
  const baseUrl = "http://supachok-website.000webhostapp.com/API/";
  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [User_infoSeleccionado, setUser_infoSeleccionado] = useState({
    ID_student: "",
    Email: "",
    Name: "",
    Gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser_infoSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(User_infoSeleccionado);
  };

  // Insert user info
  const abrirCerrarModalInsertar = () => {
    setModalInsertar(!modalInsertar);
  };

  const peticionPost = async () => {
    var f = new FormData();
    f.append("ID_student", User_infoSeleccionado.ID_student);
    f.append("Email", User_infoSeleccionado.Email);
    f.append("Name", User_infoSeleccionado.Name);
    f.append("Gender", User_infoSeleccionado.Gender);
    f.append("METHOD", "POST");
    await axios
      .post(baseUrl, f)
      .then((response) => {
        setData(data.concat(response.data));
        abrirCerrarModalInsertar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Register</h3>
        <div className="card-tools">
          <button
            type="button"
            className="btn btn-tool"
            data-card-widget="collapse"
          >
            <img src="https://img.icons8.com/flat-round/20/000000/minus.png" />
          </button>
        </div>
      </div>
      {/* form start */}
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputID">ID</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputID"
              placeholder="Gen ID auto"
              name="ID_student"
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputName">Name - LastName</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              placeholder="Enter Name - Lastname"
              name="Name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail">E-mail</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPEmail"
              placeholder="Enter E-mail"
              name="Email"
              onChange={handleChange}
            />
          </div>
          <div classname="form-check">
            <input
              classname="form-check-input"
              value="ชาย"
              type="radio"
              name="Gender"
              id="male"
              onChange={handleChange}
            />
            &emsp;
            <label classname="form-check-label" for="male">
              Male
            </label>
            &emsp;
            <input
              classname="form-check-input"
              value="หญิง"
              type="radio"
              name="Gender"
              id="female"
              onChange={handleChange}
            />
            &emsp;
            <label classname="form-check-label" for="female">
              Female
            </label>
          </div>

          {/* /.card-body */}
          <div className="card-footer text-center">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => peticionPost()}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
