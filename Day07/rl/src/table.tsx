// src/components/Table.tsx
import "./table.css";
import React, { useEffect, useState } from 'react';
import { User } from '../types/User';
import UserDetail from './user';
import './sidebar.css';

const Table: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data: User[] = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchData();
    }, []);

    const handleEditClick = (user: User) => {
        setSelectedUser(user);
        setIsSidebarOpen(true);
    };

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    };

    const handleSaveUser = (updatedUser: User) => {
        setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    };

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>{user.company.name}</td>
                            <td><button onClick={() => handleEditClick(user)}>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isSidebarOpen && (
                <UserDetail user={selectedUser} onClose={handleCloseSidebar} onSave={handleSaveUser} />
            )}
        </div>
    );
};

export default Table;