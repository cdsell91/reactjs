import React, { useState } from 'react';
import { useUser } from './UserContext';
import DynamicTable from './DynamicTable';
import Toolbar from './Toolbar';
import FileUpload from './FileUpload';

function Dashboard() {
  const { user, logout } = useUser();
  const [data, setData] = useState([
    { "" : "", "" : "", " " : "" },
  ]);

  const updateData = (newData) => {
    setData(newData);
  };

  const handleLogout = () => {
    logout();
  };


  return (
    <div>
      <Toolbar/>
      <FileUpload updateDataAfterUpload={updateData}/>
      <DynamicTable data={data} />
    </div>
  );
}

export default Dashboard;