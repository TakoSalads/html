// src/App.jsx
import React from "react";
import "./app.css";
import Header from "./components/Header";
import Card from "./components/Card";
import DataTable from './components/DataTable';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Header />
          <Card 
            title="Hello World" 
            text="This is a reusable Bootstrap card component." 
            btnText="Click Me" 
            btnType="primary" 
          />
      <DataTable />
    </>
  );
};

export default App;
