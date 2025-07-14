import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function Home() {
    const[users,setUsers]=useState([]);
    const {id}=useParams();

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    };

    const deleteUser=async(id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    }

  return (
    <div className='modern-container'>
        <div className='table-wrapper'>
            <div className="header-section">
                <h1 className="page-title">Employee Management</h1>
                <p className="page-subtitle">Manage and view all registered employee</p>
            </div>
            
            <div className="table-container">
                <table className="modern-table">
                    <thead>
                        <tr>
                            <th scope="col">SI.No</th>
                            <th scope="col">Employee Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index)=>(
                                <tr key={index} className="table-row">
                                    <td className="serial-number">{index+1}</td>
                                    <td className="user-name">{user.name}</td>
                                    <td className="username">{user.username}</td>
                                    <td className="email">{user.email}</td>
                                    <td className="actions">
                                        <Link className="btn btn-view" to={`/viewuser/${user.id}`}>
                                            <span className="btn-icon">👁</span>
                                            View
                                        </Link>

                                        <Link className="btn btn-edit" to={`/edituser/${user.id}`}>
                                            <span className="btn-icon">✏️</span>
                                            Update
                                        </Link>
                                        
                                        <button className="btn btn-delete" onClick={()=>deleteUser(user.id)}>
                                            <span className="btn-icon">🗑️</span>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>

        <style jsx>{`
            .modern-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 2rem;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                min-height: 100vh;
            }

            body {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                margin: 0;
                padding: 0;
                min-height: 100vh;
            }

            html {
                margin: 0;
                padding: 0;
            }

            .table-wrapper {
                background: rgba(255, 255, 255, 0.95);
                border-radius: 20px;
                padding: 2rem;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(10px);
            }

            .header-section {
                text-align: center;
                margin-bottom: 2rem;
                padding-bottom: 1.5rem;
                border-bottom: 2px solid #f0f0f0;
            }

            .page-title {
                font-size: 2.5rem;
                font-weight: 700;
                color: #2d3748;
                margin: 0 0 0.5rem 0;
                background: linear-gradient(135deg, #667eea, #764ba2);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }

            .page-subtitle {
                font-size: 1.1rem;
                color: #718096;
                margin: 0;
            }

            .table-container {
                overflow-x: auto;
                border-radius: 15px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
            }

            .modern-table {
                width: 100%;
                border-collapse: collapse;
                background: white;
                border-radius: 15px;
                overflow: hidden;
            }

            .modern-table thead {
                background: linear-gradient(135deg, #667eea, #764ba2);
            }

            .modern-table th {
                padding: 1.5rem 1rem;
                text-align: center;
                font-weight: 600;
                color: white;
                font-size: 0.95rem;
                letter-spacing: 0.5px;
                text-transform: uppercase;
            }

            .table-row {
                transition: all 0.3s ease;
                border-bottom: 1px solid #e2e8f0;
            }

            .table-row:hover {
                background: linear-gradient(135deg, #f7fafc, #edf2f7);
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }

            .table-row:last-child {
                border-bottom: none;
            }

            .modern-table td {
                padding: 1.25rem 1rem;
                font-size: 0.95rem;
                color: #4a5568;
                text-align: center;
                font-weight: 600;
            }

            .serial-number {
                font-weight: 700;
                color: #667eea;
            }

            .user-name {
                font-weight: 700;
                color: #2d3748;
            }

            .username {
                color: #718096;
                font-weight: 600;
                font-family: 'Courier New', monospace;
                background: #f7fafc;
                padding: 0.25rem 0.5rem;
                border-radius: 6px;
                display: inline-block;
            }

            .email {
                color: #4a5568;
                font-weight: 600;
            }

            .actions {
                display: flex;
                gap: 0.5rem;
                flex-wrap: wrap;
            }

            .btn {
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.75rem 1rem;
                border-radius: 8px;
                text-decoration: none;
                font-weight: 500;
                font-size: 0.875rem;
                transition: all 0.3s ease;
                border: none;
                cursor: pointer;
                min-width: 90px;
                justify-content: center;
            }

            .btn-icon {
                font-size: 1rem;
            }

            .btn-view {
                background: linear-gradient(135deg, #48bb78, #38a169);
                color: white;
            }

            .btn-view:hover {
                background: linear-gradient(135deg, #38a169, #2f855a);
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(72, 187, 120, 0.4);
                color: white;
                text-decoration: none;
            }

            .btn-edit {
                background: linear-gradient(135deg, #ed8936, #dd6b20);
                color: white;
            }

            .btn-edit:hover {
                background: linear-gradient(135deg, #dd6b20, #c05621);
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(237, 137, 54, 0.4);
                color: white;
                text-decoration: none;
            }

            .btn-delete {
                background: linear-gradient(135deg, #f56565, #e53e3e);
                color: white;
            }

            .btn-delete:hover {
                background: linear-gradient(135deg, #e53e3e, #c53030);
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(245, 101, 101, 0.4);
            }

            @media (max-width: 768px) {
                .modern-container {
                    padding: 1rem;
                }

                .table-wrapper {
                    padding: 1rem;
                }

                .page-title {
                    font-size: 2rem;
                }

                .modern-table th,
                .modern-table td {
                    padding: 0.75rem 0.5rem;
                    font-size: 0.875rem;
                }

                .actions {
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .btn {
                    min-width: auto;
                    padding: 0.5rem 0.75rem;
                    font-size: 0.8rem;
                }
            }

            @media (max-width: 480px) {
                .username {
                    font-size: 0.8rem;
                }

                .email {
                    word-break: break-all;
                }
            }
        `}</style>
    </div>
  )
}