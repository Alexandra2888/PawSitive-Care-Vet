import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { BsFillClockFill, BsPersonFill } from "react-icons/bs";
import { GiCalendar } from "react-icons/gi";
import { MdPets } from "react-icons/md";
import { SlNote } from "react-icons/sl";

import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
import { db } from "../../firebase";

import "./Appointments.scss";
import { Appointment } from "../../interfaces/components/Appointments";

const Appointments: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const fetchAppointment = async () => {
    const querySnapshot: QuerySnapshot = await getDocs(
      collection(db, "appointments")
    );

    const newData: Appointment[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Appointment),
    }));

    setAppointments(newData);
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
