import UsersComponent from "./UsersComponent";
import '../../../App.css'
import { useState, useEffect } from "react";

const PropertyDrillApp = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json();
      setUsers(data);
    } catch {}
  };

  return (
    <div className="App">
      <UsersComponent users={users} />
    </div>
  );
};

export default PropertyDrillApp;
