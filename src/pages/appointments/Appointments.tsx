import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { BsFillClockFill, BsPersonFill } from "react-icons/bs";
import { GiCalendar } from "react-icons/gi";
import { MdPets } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { useUserAuth } from "../../contexts/UserAuthContext";

import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "../../../firebase";


import "./Appointments.scss";
import { Appointment } from "../../interfaces/components/Appointments";

const Appointments: React.FC = () => {
  const { user } = useUserAuth();

  const [appointments, setAppointments] = useState<Appointment[]>([]);


  const fetchAppointment = async () => {
    if (user) { 
      const appointmentsRef = collection(db, "appointments");
      const q = query(appointmentsRef, where("userId", "==", user.uid));
      const querySnapshot = await getDocs(q);

      const newData: Appointment[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Appointment),
      }));

      setAppointments(newData);
    } else {
      console.log("No user logged in");
    }
  };
  useEffect(() => {
    fetchAppointment();
  }, []);

  return (
    <section className="appointment__container">
      <table>
        <thead>
          <tr>
            <th>
              <MdPets className="appointment__container--icons" />
            </th>
            <th>
              <GiCalendar className="appointment__container--icons" />
            </th>
            <th>
              <BsFillClockFill className="appointment__container--icons" />
            </th>
            <th>
              <BsPersonFill className="appointment__container--icons" />
            </th>
            <th>
              <SlNote className="appointment__container--icons" />
            </th>
          </tr>
        </thead>
        <tbody>
          {appointments?.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.petName}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add-appointments" className="btn btn-primary">
        Add new appointment
      </Link>
    </section>
  );
};

export default Appointments;
