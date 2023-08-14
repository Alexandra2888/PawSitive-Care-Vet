import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Button from "../../components/button/Button";

const Appointments = () => {
  const [formData, setFormData] = useState({
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

  function onEmailChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  }

  function onNameChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  }

  function onPhoneChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      phone: e.target.value,
    }));
  }

  function onPetTypeChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      petType: e.target.value,
    }));
  }

  function onPetNameChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      petName: e.target.value,
    }));
  }

  function onPetGenderChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      petGender: e.target.value,
    }));
  }

  function onPetAgeChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      petAge: e.target.value,
    }));
  }

  function onDoctor(e) {
    setFormData((prevState) => ({
      ...prevState,
      doctor: e.target.value,
    }));
  }

  function onDate(e) {
    setFormData((prevState) => ({
      ...prevState,
      date: e.target.value,
    }));
  }

  function onTime(e) {
    setFormData((prevState) => ({
      ...prevState,
      time: e.target.value, 
    }));
  }
  function onReason(e) {
    setFormData((prevState) => ({
      ...prevState,
      reason: e.target.value,
    }));
  }

  const addAppointment = async (e) => {
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
        time: time,
        reason: reason,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

//   const fetchAppointment = async () => {
       
//     await getDocs(collection(db, "appointments"))
//         .then((querySnapshot)=>{              
//             const newData = querySnapshot.docs
//                 .map((doc) => ({...doc.data(), id:doc.id }));
//             setTodos(newData);                
//         })
   
// }

// useEffect(()=>{
//     fetchAppointment();
// }, [])

  return (
    <main className="container">
      <div className="card">
        <form className="card-form" onSubmit={addAppointment}>
          <h2 className="card-form-title">Appointments:</h2>
          <div className="input">
            <input
              type="text"
              id="name"
              value={name}
              onChange={onNameChange}
              className="input-field"
            />
            <label className="input-label">Full Name:</label>
          </div>

          <div className="input">
            <input
              type="email"
              value={email}
              className="input-field"
              onChange={onEmailChange}
            />
            <label className="input-label">Email:</label>
          </div>

          <div className="input">
            <input
              type="number"
              value={phone}
              className="input-field"
              onChange={onPhoneChange}
            />
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
            <input
              type="text"
              id="petName"
              value={petName}
              onChange={onPetNameChange}
              className="input-field"
            />
            <label className="input-label">Pet Name:</label>
          </div>


          <div className="input">
            <input
              type="number"
              value={petAge}
              className="input-field"
              onChange={onPetAgeChange}
            />
            <label className="input-label">Add age:</label>
          </div>

          <div className="input">
            <input
              type="time"
              value={time}
              className="input-field"
              onChange={onTime}
            />
            <label className="input-label">Select a time:</label>
          </div>

          <div className="input">
            <input
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
              <option value="doe">John Doe (Surgery Specialist)</option>
              <option value="makafui">
                Carmen Makafui (Anaestethic Specialist)
              </option>
              <option value="apeledo">
                Liza Apeledo (Orthopedic Specialist)
              </option>
              <option value="brownie">
                Abigail Brownie (Cardiology Specialist)
              </option>
            </select>
          </div>

        
          <div className="input">
            <input
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
        {/* <section >
                    {
                        appointments?.map((appointment,i)=>(
                            <p key={i}>
                                {appointment.appointment}
                            </p>
                        ))
                    }
                </section> */}
      </div>
    </main>
  );
};

export default Appointments;
