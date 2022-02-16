import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import React from "react";
import { eventExpand } from "../../../utils/events";
import EventModal from "./EventModal";

const events = [
  { title: "Welcome to WINC [WINC panel]", date: "2021-09-21" },
  { title: "Dealing with Hybrid Classes", date: "2021-09-27" },
  { title: "Land That SWE Internship & Intern AMA", date: "2021-10-05" },
  { title: "How to Make the Best of your Summer", date: "2021-10-12" },
  { title: "Virtual Social/GameNight", date: "2021-10-12" },
  { title: "Fireside Chat with Professor LePendu", date: "2021-11-02" },
  { title: "Intro to LinkedIn @ Cutie Hack", date: "2021-11-06" },
  { title: "Sharpen Soft Skills at a Graduate Level", date: "2021-11-09" },
  { title: "Industry Professional Panel", date: "2021-11-11" },
  { title: "World of Computing", date: "2021-11-16" },
  { title: "Officer Infosession", date: "2022-01-05" },
  { title: "Rose Hack: Resume Workshop", date: "2022-01-12" },
  { title: "Life in the Industry: SWE", date: "2022-01-12" },
  { title: "WINC: Study Abroad Infosession", date: "2022-01-13" },
  { title: "What is the Internet of Things (IoT)?", date: "2022-01-19" },
  { title: "Speed Friending Social", date: "2022-01-26" },
  { title: "How to Apply to Graduate School", date: "2022-02-02" },
  { title: "Virtual Reality and the Metaverse", date: "2022-02-09" },
  { title: "Fireside Chat with Dr. Salloum", date: "2022-02-16" },
  { title: "Life in the Industry: PM", date: "2022-02-23" },
];

const Calendar = () => {
  return (
    <>
      <section
        style={{
          padding: "4rem",
          marginTop: "5rem",
          backgroundColor: "#FA6C5E",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 style={{ color: "white", marginBottom: "0.5rem" }}>Events</h1>
        <p style={{ color: "#ececec" }}>
          See our calendar for all our events. Clicking each event will take you
          to the zoom call. The calendar is best when viewed on desktop.
        </p>
      </section>
      <div style={{ padding: "1rem" }}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          eventContent={(eventInfo) => {
            return <EventModal eventInfo={eventInfo} />;
          }}
          events={events}
        />
      </div>
    </>
  );
};

export default Calendar;
