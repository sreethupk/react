import React, { useEffect, useState } from "react";
import "./profilecard.css";

const Profilecard = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    age: "",
  });
  const [users, setUsers] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("users");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setUsers(parsed);
      } catch (err) {
        console.error("Error parsing data", err);
        localStorage.removeItem("users");
      }
    }
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (isLoading) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users, isLoading]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const { name, email, age } = formData;

    if (!name.trim()) newErrors.name = "Name is required!";
    if (!email.trim()) newErrors.email = "Email is required!";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email!";
    if (!age.toString().trim()) newErrors.age = "Age is required!";
    else if (isNaN(age) || age < 1 || age > 120)
      newErrors.age = "Age must be between 1 and 120!";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    if (editMode) {
      setUsers(prev =>
        prev.map(u => (u.id === formData.id ? { ...formData } : u))
      );
      setEditMode(false);
    } else {
      const newUser = { ...formData, id: Date.now().toString() };
      setUsers(prev => [...prev, newUser]);
    }

    setFormData({ id: "", name: "", email: "", age: "" });
    setError({});
  };

  const handleEdit = (user) => {
    setFormData(user);
    setEditMode(true);
  };

  const handleDelete = (id) => {
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  return (
    <div className="crud-background">
      <div className="crud-card">
        <h2>{editMode ? "Edit User" : "Add New User"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
          {error.name && <p className="error">{error.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />
          {error.email && <p className="error">{error.email}</p>}

          <input
            type="number"
            name="age"
            placeholder="Your age"
            value={formData.age}
            onChange={handleChange}
          />
          {error.age && <p className="error">{error.age}</p>}

          <button type="submit">
            {editMode ? "Update User" : "Add User"}
          </button>
        </form>

        <div className="crud-list">
          <h3>Users List</h3>
          {users.length === 0 ? (
            <p>No users added yet</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <button className="edit" onClick={() => handleEdit(user)}>Edit</button>
                      <button className="delete" onClick={() => handleDelete(user.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profilecard;
