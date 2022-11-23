import React from 'react'
import Form from '../components/form/Form'
import Table from '../components/table/Table'
import { HomeContainer } from './HomeStyles'
import { useState } from "react";
import { AddUser, UpdateUser } from '../utils/firebase';
import { ToastContainer } from "react-toastify";





const initialValues = {
  username: "",
  phoneNumber: "",
  gender: "",
};


const Home = () => {

  const [info, setInfo] = useState(initialValues);
  const [isAdd, setIsAdd] = useState("ADD");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (info.id) {
      UpdateUser(info);
    } else {
      AddUser(info);
    }
    setIsAdd("ADD");
    setInfo(initialValues);

    console.log(info);
  };

  const showInForm = (id, username, phoneNumber, gender) => {
    setIsAdd("UPDATE");
    setInfo({ id, username, phoneNumber, gender });
  };
  return (
    <HomeContainer>
      <ToastContainer />
      <Form
        info={info}
        setInfo={setInfo}
        handleSubmit={handleSubmit}
        isAdd={isAdd}
      />
      <Table showInForm={showInForm} />
    </HomeContainer>
  );
};

export default Home