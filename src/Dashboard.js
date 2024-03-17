import React from 'react';
import { useUser } from './UserContext';
import DynamicTable from './DynamicTable';
import Toolbar from './Toolbar';
import FileUpload from './FileUpload';

function Dashboard() {
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
  };

  const jsonData = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Doe", age: 40 }
  ];

  return (
    <div>
      <Toolbar/>
      <FileUpload/>
      <DynamicTable data={jsonData} />
    </div>
  );
}

export default Dashboard;