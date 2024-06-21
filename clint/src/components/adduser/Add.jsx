import React, { useState } from "react";
import "../adduser/add.css";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Add = () => {
  const users = {
    fName: "",
    lName: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const submitForm = async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8000/api/create",user).then((res)=>{
      console.log(res);
      toast.success(res.data.msg,{position:"top-right"});
      navigate("/");
    }).catch ((error)=>{
        console.log(error);
    }); 
  }

  return (
    <div className="addUser">
      <Link to={"/"}>
        <button>Back</button>
      </Link>
      <div className="addnewuser">
        <h3>Add new User</h3>
      </div>
      <form className="addUserInputForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label>First Name: </label>
          <input
            onChange={inputHandler}
            type="text"
            id="fName"
            name="fName"
            autoCapitalize="off"
            placeholder="First Name"
            required={true}
          />
        </div>
        <div className="inputGroup">
          <label>Last Name: </label>
          <input
            onChange={inputHandler}
            type="text"
            id="lName"
            name="lName"
            autoCapitalize="off"
            placeholder="Last Name"
          />
        </div>
        <div className="inputGroup">
          <label>Email id: </label>
          <input
            onChange={inputHandler}
            type="email"
            id="email"
            name="email"
            autoCapitalize="off"
            placeholder="Email"
            required={true}
          />
        </div>
        <div className="inputGroup">
          <label>Password: </label>
          <input
            onChange={inputHandler}
            type="password"
            id="password"
            name="password"
            autoCapitalize="off"
            placeholder="Password"
            required={true}
          />
        </div>
        <div className="inputGroup">
          <button className="add">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
