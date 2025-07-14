import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="view-container">
      <div className="book">
        <div className="cover">
          <div className="cover-content">
            <span className="cover-icon">👤</span>
            <h3>EMPLOYEE DETAILS</h3>
            <p>ID: {id}</p>
            <div className="hover-hint">Hover to view details</div>
          </div>
        </div>
        <div className="user-content">
          <div className="content-header">
            <span className="header-icon">📋</span>
            <h4>Employee Information</h4>
          </div>
          <div className="details-list">
            <div className="detail-item">
              <span className="detail-icon">🆔</span>
              <span className="detail-label">Employee ID:</span>
              <span className="detail-value">{id}</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">👤</span>
              <span className="detail-label">Name:</span>
              <span className="detail-value">{user.name}</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">🏷️</span>
              <span className="detail-label">Username:</span>
              <span className="detail-value">{user.username}</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📧</span>
              <span className="detail-label">Email:</span>
              <span className="detail-value">{user.email}</span>
            </div>
          </div>
          <Link className="back-btn" to={"/"}>
            <span className="btn-icon">🔙</span>
            Back to Home
          </Link>
        </div>
      </div>

      <style jsx>{`
        .view-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .book {
          position: relative;
          border-radius: 20px;
          width: 400px;
          height: 500px;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          transform-style: preserve-3d;
          perspective: 2000px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2d3748;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .cover {
          position: absolute;
          top: 0;
          background: linear-gradient(135deg, #667eea, #764ba2);
          width: 100%;
          height: 100%;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.5s ease;
          transform-origin: 0;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
        }

        .book:hover .cover {
          transform: rotateY(-90deg);
        }

        .cover-content {
          text-align: center;
          color: white;
          padding: 2rem;
        }

        .cover-icon {
          font-size: 4rem;
          display: block;
          margin-bottom: 1rem;
        }

        .cover-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          letter-spacing: 1px;
        }

        .cover-content p {
          font-size: 1.1rem;
          margin: 0 0 2rem 0;
          opacity: 0.9;
        }

        .hover-hint {
          font-size: 0.9rem;
          opacity: 0.8;
          background: rgba(255, 255, 255, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .user-content {
          padding: 2rem;
          text-align: left;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .content-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #f0f0f0;
        }

        .header-icon {
          font-size: 1.5rem;
        }

        .content-header h4 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2d3748;
          margin: 0;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .details-list {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(102, 126, 234, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(102, 126, 234, 0.1);
          transition: all 0.3s ease;
        }

        .detail-item:hover {
          background: rgba(102, 126, 234, 0.1);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
        }

        .detail-icon {
          font-size: 1.2rem;
          min-width: 24px;
        }

        .detail-label {
          font-weight: 600;
          color: #4a5568;
          min-width: 100px;
        }

        .detail-value {
          color: #2d3748;
          font-weight: 500;
          flex: 1;
          word-break: break-all;
          overflow-wrap: break-word;
          hyphens: auto;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem 1.5rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          text-decoration: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          margin-top: 1rem;
          letter-spacing: 0.3px;
        }

        .back-btn:hover {
          background: linear-gradient(135deg, #5a67d8, #6b46c1);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
          color: white;
          text-decoration: none;
        }

        .btn-icon {
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .view-container {
            padding: 1rem;
          }

          .book {
            width: 350px;
            height: 450px;
          }

          .user-content {
            padding: 1.5rem;
          }

          .cover-content h3 {
            font-size: 1.25rem;
          }

          .detail-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .detail-label {
            min-width: auto;
          }

          .detail-value {
            font-size: 0.875rem;
            line-height: 1.4;
          }
        }

        @media (max-width: 480px) {
          .book {
            width: 300px;
            height: 400px;
          }

          .user-content {
            padding: 1rem;
          }

          .cover-icon {
            font-size: 3rem;
          }

          .cover-content h3 {
            font-size: 1.1rem;
          }

          .detail-value {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}