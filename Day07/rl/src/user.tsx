// src/components/UserDetail.tsx
import React, { useState } from 'react';
import { User } from '../types/User';
import './sidebar.css';

interface UserDetailProps {
    user: User | null;
    onClose: () => void;
    onSave: (updatedUser: User) => void; // Add an onSave prop
}

const user: React.FC<UserDetailProps> = ({ user, onClose, onSave }) => {
    const [editableUser, setEditableUser] = useState<User | null>(user);

    if (!editableUser) {
        return null;
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditableUser({ ...editableUser, [name]: value });
    };

    const handleSave = () => {
        if (editableUser) {
            onSave(editableUser); // Call the onSave prop with the updated user
            onClose(); // Close the sidebar
        }
    };

    return (
        <div className="sidebar open">
            <button className="close-btn" onClick={onClose}>X</button>
            <h2>Edit User</h2>
            <div className="sidebar-content">
                <label>
                    <strong>Name:</strong>
                    <input type="text" name="name" value={editableUser.name} onChange={handleInputChange} />
                </label>
                <label>
                    <strong>Username:</strong>
                    <input type="text" name="username" value={editableUser.username} onChange={handleInputChange} />
                </label>
                <label>
                    <strong>Email:</strong>
                    <input type="email" name="email" value={editableUser.email} onChange={handleInputChange} />
                </label>
                <label>
                    <strong>Phone:</strong>
                    <input type="text" name="phone" value={editableUser.phone} onChange={handleInputChange} />
                </label>
                <label>
                    <strong>Website:</strong>
                    <input type="text" name="website" value={editableUser.website} onChange={handleInputChange} />
                </label>
                <label>
                    <strong>Company:</strong>
                    <input type="text" name="company" value={editableUser.company.name} onChange={(e) => setEditableUser({
                        ...editableUser,
                        company: { ...editableUser.company, name: e.target.value }
                    })} />
                </label>
                <button className="save-btn" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default user;