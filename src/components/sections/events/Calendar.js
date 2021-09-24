import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { FaExternalLinkAlt } from "react-icons/fa";

import { eventExpand } from "../../../utils/events";

const events = [
  { title: "Welcome to WINC [WINC panel]", date: "2021-09-21" },
  { title: "Dealing with Hybrid Classes", date: "2021-09-27" },
  { title: "Land That SWE Internship & Intern AMA", date: "2021-10-05" },
  { title: "How to Make the Best of your Summer", date: "2021-10-12" },
  { title: "Virtual Social/GameNight", date: "2021-10-12" },
  { title: "Industry Professional Panel", date: "2021-10-19" },
  { title: "Cutie Hack", date: "2021-11-06" },
  { title: "Scientific Communication in Computing", date: "2021-11-09" },
  { title: "World of Computing", date: "2021-11-16" },
  { title: "Intro to Git/Github", date: "2021-11-23" },
];
const renderEventContent = (eventInfo) => {
  console.log(eventInfo);
  return (
    <a
      target="_blank"
      style={{
        width: "100%",
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
    </a>
  );
};

const Calendar = () => {
  return (
    <section
      style={{
        padding: "4rem",
        marginTop: "5.25rem",
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
      <a
        href="#eventcards"
        style={{
          textDecoration: "none",
          backgroundColor: "#F7D1B8",
          padding: "0.5rem",
          width: "10rem",
          marginBottom: "1rem",
          textAlign: "center",
          borderRadius: "1rem",
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        See Table View
        <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} />
      </a>
      <div
        style={{
          backgroundColor: "white",
          padding: "1rem",
          border: "0.15rem solid #F4C2A1",
        }}
      >
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          eventContent={renderEventContent}
          events={events}
        />
      </div>
    </section>
  );
};

export default Calendar;
