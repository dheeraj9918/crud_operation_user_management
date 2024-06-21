import React, { useEffect, useState } from "react";
import "../getuser/User.css";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast'

const GetUser = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resData = await axios.get("http://localhost:8000/api/getAll");
      setUser(resData.data);
    };

    fetchData();
  }, []);
  const deleteUser = async(userId)=>{
    await axios.delete(`http://localhost:8000/api/delete/${userId}`).then((res)=>{
      setUser((prevUser)=>prevUser.filter((user)=>user._id!==userId));
      toast.success(res.data.msg,{position:"top-right"});
    }).catch((error)=>{
      console.log(error)
    });
  }

  return (
    <div className="userTable">
      <Link to={"/add"}>
        <button className="addButton">Add User</button>
      </Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>User Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  {user.fName} {user.lName}
                </td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="deleteButton"
                    onClick={() => deleteUser(user._id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <Link to={`/edit/${user._id}`}>
                    <button className="editButton">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GetUser;
