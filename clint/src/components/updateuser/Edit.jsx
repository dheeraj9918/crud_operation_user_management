import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Edit = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getOne/${id}`)
      .then((response) => {
        setUser(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update/${id}`,user).then((res)=>{
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
        <h3>Update User</h3>
      </div>
      <form className="addUserInputForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label>First Name: </label>
          <input
            onChange={inputChangeHandler}
            type="text"
            value={user?.fName}
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
            onChange={inputChangeHandler}
            type="text"
            value={user?.lName}
            id="lName"
            name="lName"
            autoCapitalize="off"
            placeholder="Last Name"
          />
        </div>
        <div className="inputGroup">
          <label>Email id: </label>
          <input
            onChange={inputChangeHandler}
            type="email"
            value={user?.email}
            id="email"
            name="email"
            autoCapitalize="off"
            placeholder="Email"
            required={true}
          />
        </div>
        <div className="inputGroup">
          <button className="add">Update User</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
