// task_0/dashboard/src/App/App.js
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="App">
        <Login />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
