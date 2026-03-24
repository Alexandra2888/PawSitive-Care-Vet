import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { BsFillClockFill, BsPersonFill } from "react-icons/bs";
import { GiCalendar } from "react-icons/gi";
import { MdPets } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { useUserAuth } from "../../contexts/UserAuthContext";

import { supabase } from "../../../supabase";

import { Appointment } from "../../interfaces/components/Appointments";

const Appointments: React.FC = () => {
  const { user } = useUserAuth();
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    if (!user) {
      setAppointments([]);
      return;
    }

    const fetchAppointments = async () => {
      const { data, error } = await supabase
        .from("appointments")
        .select("*")
        .eq("user_id", user.id);

      if (error) {
        console.error("Error fetching appointments:", error);
        setAppointments([]);
        return;
      }

      setAppointments(
        (data ?? []).map((row) => ({
          id: row.id,
          petName: row.pet_name,
          date: row.date,
          time: row.time,
          doctor: row.doctor,
          reason: row.reason,
        })),
      );
    };

    fetchAppointments();
  }, [user]);

  return (
    <section className="text-[1.2em]">
      <table className="mx-auto">
        <thead>
          <tr>
            <th className="p-[0.2em] sm:p-[1.3em] border-b border-primary">
              <MdPets className="text-secondary w-[25px] h-[25px]" />
            </th>
            <th className="p-[0.2em] sm:p-[1.3em] border-b border-primary">
              <GiCalendar className="text-secondary w-[25px] h-[25px]" />
            </th>
            <th className="p-[0.2em] sm:p-[1.3em] border-b border-primary">
              <BsFillClockFill className="text-secondary w-[25px] h-[25px]" />
            </th>
            <th className="p-[0.2em] sm:p-[1.3em] border-b border-primary">
              <BsPersonFill className="text-secondary w-[25px] h-[25px]" />
            </th>
            <th className="p-[0.2em] sm:p-[1.3em] border-b border-primary">
              <SlNote className="text-secondary w-[25px] h-[25px]" />
            </th>
          </tr>
        </thead>
        <tbody>
          {appointments?.map((appointment) => (
            <tr key={appointment.id}>
              <td className="p-[0.2em] sm:p-[1.3em] border-b border-primary">
                {appointment.petName}
              </td>
              <td className="p-[0.2em] sm:p-[1.3em] border-b border-primary">
                {appointment.date}
              </td>
              <td className="p-[0.2em] sm:p-[1.3em] border-b border-primary">
                {appointment.time}
              </td>
              <td className="p-[0.2em] sm:p-[1.3em] border-b border-primary">
                {appointment.doctor}
              </td>
              <td className="p-[0.2em] sm:p-[1.3em] border-b border-primary">
                {appointment.reason}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link
        to="/add-appointments"
        className="btn btn-primary mx-auto! mt-6! block"
      >
        Add new appointment
      </Link>
    </section>
  );
};

export default Appointments;
