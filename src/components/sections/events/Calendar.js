import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

const eventExpand = {
  "Welcome to WINC [WINC panel]": {
    type: 'Recruitment',
    time: '2:30PM',
    link: 'https://ucr.zoom.us/j/99937718388',
  },
  "Dealing with Hybrid Classes": {
    type: 'Recruitment',
    time: '2:30PM',
    link: 'https://ucr.zoom.us/j/92367209083?pwd=eWhNS21UR1l1UGZLczJtSUFsY1FRdz09',
  },
  "Land That SWE Internship & Intern AMA": {
    type: 'General Meeting',
    time: '7:00PM',
    link: 'https://ucr.zoom.us/j/96741730329',
  },
  "How to Make the Best of your Summer": {
    type: 'Technical Workshop',
    time: 'TBD',
    link: 'https://us02web.zoom.us/j/7181383962',
  }, 
  "Industry Professional Panel": {
    type: 'Panel',
    time: 'TBD',
    link: '',
  },
  "Virtual Social/GameNight" : {
    type: 'Social',
    time: '7:00PM',
    link: '',
  },
  "Cutie Hack": {
    type: 'Technical Workshop',
    time: 'TBD',
    link: '',
  },
  "Scientific Communication in Computing": {
    type: 'Graduate Session',
    time: '7:00PM',
    link: 'https://ucr.zoom.us/j/93690075538',
  },
  "World of Computing": {
    type: 'General Meeting',
    time: '7:00PM',
    link: 'https://ucr.zoom.us/j/96714866468',
  }, 
  "Intro to Git/Github": {
    type: 'General Meeting',
    time: 'TBD',
    link: 'https://us02web.zoom.us/j/7181383962',
  }, 
}

const events = [
  { title: "Welcome to WINC [WINC panel]", date: "2021-09-18" },
  { title: "Dealing with Hybrid Classes", date: "2021-09-27" },
  { title: "Land That SWE Internship & Intern AMA", date: "2021-10-05" },
  { title: "How to Make the Best of your Summer", date: "2021-10-12" },
  { title: "Virtual Social/GameNight", date: "2021-10-12" },
  { title: "Industry Professional Panel", date: "2021-10-19" },
  { title: "Cutie Hack", date: "2021-11-06" },
  { title: "Scientific Communication in Computing", date: "2021-11-09" },
  { title: "World of Computing", date: "2021-11-16" },
  { title: "Intro to Git/Github", date: "2021-11-23" },
]
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
        cursor: (eventExpand[eventInfo.event.title].link) ? 'pointer' : 'not-allowed'
      }}
      href={eventExpand[eventInfo.event.title].link}
    >
      <b style={{whiteSpace: "initial"}}>{eventExpand[eventInfo.event.title].time}</b>
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
          marginTop: '0.5rem',
          marginBottom: 0,
          textAlign: 'center',
          lineHeight: 1.2
        }}
      >
        {eventExpand[eventInfo.event.title].type}
      </p>
    </a>
  );
};

const Calendar = () => {
  return (
    <div
      style={{
        padding: "4rem",
        marginTop: "5.25rem",
      }}
    >
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        eventContent={renderEventContent}
        events={events}
      />
    </div>
  );
};

export default Calendar;
