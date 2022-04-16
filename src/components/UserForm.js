import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  birth: "",
};

const UserForm = ({ getUsers, deselectUser, userSelected }) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (userSelected) {
      reset(userSelected);
    } else {
      reset(defaultValues);
    }
  }, [userSelected, reset]);

  const send = (user) => {
    if (userSelected) {
      axios
        .put(
          `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
          user
        )
        .then(() => {
          getUsers();
          deselectUser();
        });
    } else {
      axios
        .post("https://users-crud1.herokuapp.com/users/", user)
        .then(() => getUsers());
    }
    reset(defaultValues);
  };

  return (
    <form onSubmit={handleSubmit(send)} className="form-container">
      <div className="form-column">
        <h2>
          <strong>Nuevo Usuario</strong>
        </h2>
        <div className="input-container">
          <label htmlFor="first-name">
            <i className="fa-solid fa-user icon"></i>
          </label>
          <input
            className="input-name"
            type="text"
            id="first-name"
            placeholder="Nombres"
            {...register("first_name")}
          />
        </div>
        <div className="input-container">
          <label htmlFor="first-name">
            <i className="fa-solid fa-user icon"></i>
          </label>
          <input
            className="input-name"
            type="text"
            placeholder="Apellidos  "
            {...register("last_name")}
          />
        </div>

        <div className="input-container">
          <label htmlFor="email">
            <i className="fa-solid fa-envelope icon"></i>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email")}
          />
        </div>

        <div className="input-container">
          <label htmlFor="password">
            <i className="fa-solid fa-lock icon"></i>
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password")}
          />
        </div>

        <div className="input-container">
          <label htmlFor="birth">
            <i className="fa-solid fa-cake-candles icon"></i>
          </label>
          <input type="date" id="birth" {...register("birth")} />
        </div>
        <button className="form-button">Actualizar</button>
        <button className="form-button" type="button" onClick={deselectUser}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default UserForm;
