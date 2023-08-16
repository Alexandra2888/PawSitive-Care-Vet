import React, { useState } from 'react';
import { useEffect } from 'react';
import { BsFillClockFill, BsPersonFill } from "react-icons/bs";
import { GiCalendar } from "react-icons/gi";
import {MdPets} from "react-icons/md";
import {SlNote} from "react-icons/sl";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import "./Appointments.scss";
import { Link } from 'react-router-dom';

const Appointments = () => {

    const [appointments, setAppointments] = useState([]);

      const fetchAppointment = async () => {
       
    await getDocs(collection(db, "appointments"))
        .then((querySnapshot)=>{              
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setAppointments(newData);                
        })
   
}

useEffect(()=>{
    fetchAppointment();
}, [])

  return (
    <section className='appointment__container'>
  <table>
    <thead>
      <tr>
        <th><MdPets className='appointment__container--icons'/></th>
        <th><GiCalendar className='appointment__container--icons'/></th>
        <th><BsFillClockFill className='appointment__container--icons'/></th>
        <th><BsPersonFill className='appointment__container--icons'/></th>
        <th><SlNote className='appointment__container--icons'/></th>
      </tr>
    </thead>
    <tbody>
      {appointments?.map((appointment, i) => (
        <tr key={i}>
          <td>{appointment.petName}</td>
          <td>{appointment.date}</td>
          <td>{appointment.time}</td>
          <td>{appointment.doctor}</td>
          <td>{appointment.reason}</td>
        </tr>
      ))}
    </tbody>
  </table>
  <Link to="/add-appointments" className="btn btn-primary">Add new appointment</Link>
</section>
  )
}

export default Appointments;