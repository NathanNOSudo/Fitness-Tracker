import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

function Update(props) {
  const [user, setUser] = useState([]);
  let currentId = localStorage.getItem("userid");
  //   useEffect(() => {
  //     fetch("http://localhost:3001/user-info/" + localStorage.getItem("userid"))
  //       .then((response) => response.json())
  //       .then((result) => {
  //         setUserInfo(result);
  //       });
  //   }, []);
  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    fetch("http://localhost:3001/update/" + currentId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        alert(result.message);
      });
  };

  return (
    <>
      <h1>Update Page</h1>
      {props.isAuthenticated == true ? (
        <form>
          <input
            id="username"
            name="username"
            onChange={handleOnChange}
            placeholder="Username"
            type="text"
            minlength="6"
            required
          ></input>

          <input
            id="password"
            name="password"
            onChange={handleOnChange}
            placeholder="Password"
            type="password"
            minlength="6"
            required
          ></input>

          <input
            id="feet"
            name="feet"
            onChange={handleOnChange}
            placeholder="Height(feet)"
            type="text"
          ></input>
          <input
            id="inches"
            name="inches"
            onChange={handleOnChange}
            placeholder="Height(inches)"
            type="text"
          ></input>
          <input
            id="weight"
            name="weight"
            onChange={handleOnChange}
            placeholder="Weight"
            type="text"
          ></input>
          <select onChange={handleOnChange} name="Activity">
            <option>Activity</option>
            <option value="sedentary">Sedentary: Little to no exercise</option>
            <option value="light">Light: Exercise 1-3 times per week</option>
            <option value="moderate">
              Moderate: Exercise 3-4 times per week
            </option>
            <option value="active">Active: Daily Exercise</option>
          </select>
          <input
            id="age"
            name="age"
            onChange={handleOnChange}
            placeholder="Age"
            type="text"
          ></input>
          <select onChange={handleOnChange} name="goal" required>
            <option value="">Goals</option>
            <option value="maintain weight">Maintain Weight</option>
            <option value="gain weight">Gain Weight</option>
            <option value="lose weight">Lose Weight</option>
          </select>

          <button onClick={handleUpdate}>Update Profile</button>
        </form>
      ) : null}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Update);