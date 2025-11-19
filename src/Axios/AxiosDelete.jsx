import React, { useState } from "react";
import axios from "axios";

const AxiosDelete = () => {
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(() => {
        setMessage(`User ${userId} Deleted Successfully`);
      })
      .catch(() => {
        setMessage("Error deleting user");
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Axios DELETE Example</h2>

      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <button onClick={handleDelete}>Delete</button>

      <p>{message}</p>
    </div>
  );
};

export default AxiosDelete;
