import  { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Button } from "../../components/button"
import "./AddAppointments.scss";
import { Link, useNavigate } from 'react-router-dom'; 
import { Input } from "../../components/input";
import { AddAppointment } from "../../interfaces/components/AddAppontments";


const Appointments = () => {
  const [formData, setFormData] = useState<AddAppointment>({
    name: "",
    email: "",
    phone: "",
    petType: "",
    petName: "",
    petGender: "",
    petAge: "",
    doctor: "",
    date: "",
    time: "",
    reason: "",
  });

  const {
    name,
    email,
    phone,
    petType,
    petName,
    petGender,
    petAge,
    doctor,
    date,
    time,
    reason,
  } = formData;


  const navigate = useNavigate();


  function onEmailChange(e:any) {
    setFormData((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  }

  function onNameChange(e: any) {
    setFormData((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  }

  function onPhoneChange(e:any) {
    setFormData((prevState) => ({
      ...prevState,
      phone: e.target.value,
    }));
  }

  function onPetTypeChange(e:any) {
    setFormData((prevState) => ({
      ...prevState,
      petType: e.target.value,
    }));
  }

  function onPetNameChange(e:any) {
    setFormData((prevState) => ({
      ...prevState,
      petName: e.target.value,
    }));
  }

  function onPetGenderChange(e:any) {
    setFormData((prevState) => ({
      ...prevState,
      petGender: e.target.value,
    }));
  }

  function onPetAgeChange(e:any) {
    setFormData((prevState) => ({
      ...prevState,
      petAge: e.target.value,
    }));
  }

  function onDoctor(e:any) {
    setFormData((prevState) => ({
      ...prevState,
      doctor: e.target.value,
    }));
  }

  function onDate(e:any) {
    setFormData((prevState) => ({
      ...prevState,
      date: e.target.value,
    }));
  }

  function onTime(e:any) {
    setFormData((prevState) => ({
      ...prevState,
      time: e.target.value, 
    }));
  }
  function onReason(e:any) {
    setFormData((prevState) => ({
      ...prevState,
      reason: e.target.value,
    }));
  }

  const addAppointment = async (e:any) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "appointments"), {
        name: name,
        email: email,
        phone: phone,
        petType: petType,
        petName: petName,
        petGender: petGender,
        petAge: petAge,
        doctor: doctor,
        date:date,
        time: time,
        reason: reason,
      });
      console.log("Document written with ID: ", docRef.id);
      navigate('/appointments')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };


  return (
    <main className="container">
      <div className="card">
        <form className="card-form" onSubmit={addAppointment}>
          <h2 className="card-form-title">Add new appointment:</h2>
          <div className="input">
            <Input
              type="text"
              id="name"
              value={name}
              onChange={onNameChange}
              className="input-field"
            />
            <label className="input-label">Full Name:</label>
          </div>

          <div className="input">
            <Input
              type="email"
              value={email}
              className="input-field"
              onChange={onEmailChange} id={""}            />
            <label className="input-label">Email:</label>
          </div>

          <div className="input">
            <Input
              type="number"
              value={phone}
              className="input-field"
              onChange={onPhoneChange} id={""}            />
            <label className="input-label">Phone:</label>
          </div>


          
          <div className="input">
            <label className="input-label">Select a pet:</label>
            <select
              value={petType}
              onChange={onPetTypeChange}
              style={{'textAlign':'center'}}
              className="input-field" 
            >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </div>


          <div className="input">
            <label className="input-label">Your pet is:</label>
            <select
              value={petGender}
              onChange={onPetGenderChange}
              style={{'textAlign':'center'}}
              className="input-field" id="select" 
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="input">
            <Input
              type="text"
              id="petName"
              value={petName}
              onChange={onPetNameChange}
              className="input-field"
            />
            <label className="input-label">Pet Name:</label>
          </div>


          <div className="input">
            <Input
              type="number"
              value={petAge}
              className="input-field"
              onChange={onPetAgeChange} id={""}            />
            <label className="input-label">Add age:</label>
          </div>

          <div className="input">
            <Input
              type="time"
              value={time}
              className="input-field"
              onChange={onTime} id={""}            />
            <label className="input-label">Select a time:</label>
          </div>

          <div className="input">
            <Input
              type="date"
              id="date"
              value={date}
              onChange={onDate}
              className="input-field"
            />
            <label className="input-label">Select a date:</label>
          </div>

          <div className="input" >
            <label className="input-label">Select doctor:</label>
            <select value={doctor} 
            onChange={onDoctor} 
            style={{'textAlign':'center'}}
            className="input-field">
              <option value="John Doe">John Doe (Surgery Specialist)</option>
              <option value="Carmen Makafui">
                Carmen Makafui (Anaestethic Specialist)
              </option>
              <option value="Liza Apeledo">
                Liza Apeledo (Orthopedic Specialist)
              </option>
              <option value="Abigail Brownie">
                Abigail Brownie (Cardiology Specialist)
              </option>
            </select>
          </div>

        
          <div className="input">
            <Input
              type="text"
              id="reason"
              value={reason}
              onChange={onReason}
              className="input-field"
            />
            <label className="input-label">Reason:</label>
          </div>

          <div className="action">
            <Button className="btn" type="submit">
              Add new appointment
            </Button>
          </div>
        </form>
        <Link to="/appointments" className=" btn btn-primary">See appointments</Link>
      </div>
    </main>
  );
};

export default Appointments;
