import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar() {
  return (
    <div>
      <nav className="modern-navbar">
        <div className="navbar-container">
          <Link className="navbar-brand" to="/">
            <span className="brand-icon">👥</span>
            <span className="brand-text">Employee Management Application</span>
          </Link>
          
          <Link className="add-employee-btn" to="/adduser">
            <span className="btn-icon">➕</span>
            <span className="btn-text">Add Employee</span>
          </Link>
        </div>
      </nav>

      <style jsx>{`
        .modern-navbar {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 1rem 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: white;
          font-weight: 700;
          font-size: 1.5rem;
          transition: all 0.3s ease;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .navbar-brand:hover {
          color: white;
          text-decoration: none;
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .brand-icon {
          font-size: 1.75rem;
        }

        .brand-text {
          letter-spacing: 0.5px;
        }

        .add-employee-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.15);
          color: white;
          text-decoration: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
        }

        .add-employee-btn:hover {
          color: white;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .btn-icon {
          font-size: 1.1rem;
        }

        .btn-text {
          letter-spacing: 0.3px;
        }

        @media (max-width: 768px) {
          .navbar-container {
            padding: 0 1rem;
            flex-direction: column;
            gap: 1rem;
          }

          .navbar-brand {
            font-size: 1.25rem;
          }

          .add-employee-btn {
            padding: 0.6rem 1.25rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  )
}