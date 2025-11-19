import React, { useState } from "react";
import axios from "axios";

const AxiosPut = () => {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = () => {
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        name: name,
        email: email,
      })
      .then((response) => {
        setMessage(`User ${userId} Updated Successfully`);
      })
      .catch(() => {
        setMessage("Error updating user");
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Axios PUT Example</h2>

      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter New Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter New Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleUpdate}>Update User</button>

      <p>{message}</p>
    </div>
  );
};

export default AxiosPut;
