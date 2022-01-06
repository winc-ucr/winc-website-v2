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
  { title: "What is the Internet of Things (IoT)?", date: "2022-01-19" },
  { title: "Speed Friending Social", date: "2022-01-26" },
  { title: "How to Apply to Graduate School", date: "2022-02-02" },
  { title: "Virtual Reality and the Metaverse", date: "2022-02-09" },
  { title: "Fireside Chat with Dr. Salloum", date: "2022-02-16" },
  { title: "Life in the Industry: PM", date: "2022-02-23" },
  { title: "From  College Students to Software Engineers", date: "2022-03-02" },
];
const renderEventContent = (eventInfo) => {
  console.log(eventInfo);

  return (
    <div
      target="_blank"
      rel="noreferrer"
      style={{
        width: "100%",
        maxWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FA6C5E",
        border: "0px",
        textDecoration: "none",
        padding: "0.5rem",
        color: "#F6EEE3",
        cursor: eventExpand[eventInfo.event.title].link
          ? "pointer"
          : "not-allowed",
      }}
      href={eventExpand[eventInfo.event.title].link}
    >
      <b style={{ whiteSpace: "initial" }}>
        {eventExpand[eventInfo.event.title].time}
      </b>
      <p style={{ width: "100%", whiteSpace: "initial", marginBottom: 0 }}>
        {eventInfo.event.title}
      </p>
      <p
        style={{
          backgroundColor: "#FCDCA8",
          color: "#6c757d",
          maxWidth: "fit-content",
          borderRadius: "2em",
          padding: "0px 0.75rem",
          whiteSpace: "initial",
          marginTop: "0.5rem",
          marginBottom: 0,
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        {eventExpand[eventInfo.event.title].type}
      </p>
    </div>
  );
};

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
