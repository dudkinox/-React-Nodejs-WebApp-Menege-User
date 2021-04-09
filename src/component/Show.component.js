import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Show() {
  const baseUrl = "http://supachok-website.000webhostapp.com/API/";
  const [data, setData] = useState([]);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
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

  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  };

  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const abrirCerrarModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  // Edit
  const peticionPut = async () => {
    var f = new FormData();
    f.append("ID_student", User_infoSeleccionado.ID_student);
    f.append("Email", User_infoSeleccionado.Email);
    f.append("Name", User_infoSeleccionado.Name);
    f.append("Gender", User_infoSeleccionado.Gender);
    f.append("METHOD", "PUT");
    await axios
      .post(baseUrl, f, {
        params: { ID_student: User_infoSeleccionado.ID_student },
      })
      .then((response) => {
        var dataNueva = data;
        dataNueva.map((User_info) => {
          if (User_info.ID_student === User_infoSeleccionado.ID_student) {
            User_info.ID_student = User_infoSeleccionado.ID_student;
            User_info.Email = User_infoSeleccionado.Email;
            User_info.Name = User_infoSeleccionado.Name;
            User_info.Gender = User_infoSeleccionado.Gender;
          }
        });
        setData(dataNueva);
        abrirCerrarModalEditar();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Delete
  const peticionDelete = async () => {
    var f = new FormData();
    f.append("METHOD", "DELETE");
    await axios
      .post(baseUrl, f, {
        params: { ID_student: User_infoSeleccionado.ID_student },
      })
      .then((response) => {
        setData(
          data.filter(
            (User_info) =>
              User_info.ID_student !== User_infoSeleccionado.ID_student
          )
        );
        abrirCerrarModalEliminar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const seleccionarUser_info = (User_info, caso) => {
    setUser_infoSeleccionado(User_info);

    caso === "Editar" ? abrirCerrarModalEditar() : abrirCerrarModalEliminar();
  };

  useEffect(() => {
    peticionGet();
  });
  return (
    <div className="card text-center">
      <div className="card-header">
        <h3 className="card-title">User Information</h3>
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
      {/* /.card-header */}
      <div className="card-body">
        <table id="example1" className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name - LastName</th>
              <th>E-mail</th>
              <th>Gender</th>
              <th>จัดการ</th>
            </tr>
          </thead>
          <tbody>
            {data.map((User_info) => (
              <tr key={User_info.ID_student}>
                <td>{User_info.ID_student}</td>
                <td>{User_info.Email}</td>
                <td>{User_info.Name}</td>
                <td>{User_info.Gender}</td>
                <td>
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => seleccionarUser_info(User_info, "Editar")}
                  >
                    <img src="https://img.icons8.com/dusk/30/000000/edit--v1.png" />
                  </a>
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => seleccionarUser_info(User_info, "Eliminar")}
                  >
                    <img src="https://img.icons8.com/plasticine/30/000000/delete-forever.png" />
                  </a>
                </td>
              </tr>
            ))}
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* /.card-body */}
      {/* Edit */}
      <Modal isOpen={modalEditar}>
        <ModalHeader>Editar Framework</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="ID_student"
              value={User_infoSeleccionado && User_infoSeleccionado.ID_student}
              readOnly
            />
            <br />
            <label>Email: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="Email"
              onChange={handleChange}
              value={User_infoSeleccionado && User_infoSeleccionado.Email}
            />
            <br />
            <label>Name - LastName: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="Name"
              onChange={handleChange}
              value={User_infoSeleccionado && User_infoSeleccionado.Name}
            />
            <br />
            <label>Gender: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="Gender"
              onChange={handleChange}
              value={User_infoSeleccionado && User_infoSeleccionado.Gender}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => peticionPut()}>
            แก้ไข
          </button>
          {"   "}
          <button
            className="btn btn-danger"
            onClick={() => abrirCerrarModalEditar()}
          >
            ยกเลิก
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEliminar}>
        <ModalBody>
          ต้องการที่จะลบหรือไม่{" "}
          {User_infoSeleccionado && User_infoSeleccionado.ID_student}?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => peticionDelete()}>
            ตกลง
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => abrirCerrarModalEliminar()}
          >
            ยกเลิก
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
