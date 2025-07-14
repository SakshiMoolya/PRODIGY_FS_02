import axios from 'axios';
import { useHistory } from "react-router-dom";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AddUser() {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });

  const [errors, setErrors] = useState({});

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    return newErrors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    await axios.post("http://localhost:8080/user", user);
    history.push("/");
  };

  return (
    <div className="modern-container">
      <div className="form-wrapper">
        <div className="form-card">
          <div className="header-section">
            <h2 className="form-title">Employee Register</h2>
            <p className="form-subtitle">Add a new employee to the system</p>
          </div>
          
          <form onSubmit={onSubmit} className="modern-form">
            <div className="form-group">
              <label htmlFor="Name" className="form-label">
                <span className="label-icon">👤</span>
                Name
              </label>
              <input
                type="text"
                className={`form-input ${errors.name ? 'error' : ''}`}
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={onInputChange}
              />
              {errors.name && <div className="error-message">{errors.name}</div>}
              
            </div>

            <div className="form-group">
              <label htmlFor="Username" className="form-label">
                <span className="label-icon">🏷️</span>
                Username
              </label>
              <input
                type="text"
                className={`form-input ${errors.username ? 'error' : ''}`}
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={onInputChange}
              />
              {errors.username && <div className="error-message">{errors.username}</div>}
              
            </div>

            <div className="form-group">
              <label htmlFor="Email" className="form-label">
                <span className="label-icon">📧</span>
                Email
              </label>
              <input
                type="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={onInputChange}
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
              
            </div>

            <div className="button-group">
              <button type="submit" className="btn btn-submit">
                <span className="btn-icon">✅</span>
                Add
              </button>
              <Link className="btn btn-cancel" to="/">
                <span className="btn-icon">❌</span>
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .modern-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .form-wrapper {
          width: 100%;
          max-width: 500px;
        }

        .form-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .header-section {
          text-align: center;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 2px solid #f0f0f0;
        }

        .form-title {
          font-size: 2rem;
          font-weight: 700;
          color: #2d3748;
          margin: 0 0 0.5rem 0;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .form-subtitle {
          font-size: 1rem;
          color: #718096;
          margin: 0;
        }

        .modern-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: #2d3748;
          font-size: 0.95rem;
          letter-spacing: 0.3px;
        }

        .label-icon {
          font-size: 1.1rem;
        }

        .form-input {
          padding: 1rem 1.25rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 1rem;
          color: #2d3748;
          background: white;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-input:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
          transform: translateY(-1px);
        }

        .form-input.error {
          border-color: #f56565;
          box-shadow: 0 0 0 3px rgba(245, 101, 101, 0.1);
        }

        .form-input::placeholder {
          color: #a0aec0;
        }

        .error-message {
          color: #f56565;
          font-size: 0.875rem;
          font-weight: 500;
          margin-top: 0.25rem;
          padding-left: 0.5rem;
        }

        .button-group {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          flex: 1;
          letter-spacing: 0.3px;
        }

        .btn-icon {
          font-size: 1.1rem;
        }

        .btn-submit {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .btn-submit:hover {
          background: linear-gradient(135deg, #5a67d8, #6b46c1);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }

        .btn-cancel {
          background: rgba(245, 101, 101, 0.1);
          color: #f56565;
          border: 2px solid rgba(245, 101, 101, 0.3);
        }

        .btn-cancel:hover {
          background: rgba(245, 101, 101, 0.2);
          border-color: rgba(245, 101, 101, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(245, 101, 101, 0.2);
          color: #f56565;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .modern-container {
            padding: 1rem;
          }

          .form-card {
            padding: 2rem;
          }

          .form-title {
            font-size: 1.75rem;
          }

          .button-group {
            flex-direction: column;
          }

          .btn {
            padding: 0.875rem 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .form-card {
            padding: 1.5rem;
          }

          .form-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}