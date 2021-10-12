import React, { useEffect, useState } from "react";
import { eventExpand } from "../../../utils/events";
import "./event.css";

const EventCards = () => {
  const [past, setPast] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    let currPast = [];
    let currUpcoming = [];
    const currTime = new Date();
    Array.from(Object.keys(eventExpand)).forEach((event) => {
      if (currTime > eventExpand[event].endDate) {
        currPast.push(event);
      } else {
        currUpcoming.push(event);
      }
    });

    setPast(currPast.reverse());
    setUpcoming(currUpcoming);
  }, []);

  return (
    <section
      id="eventcards"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 0",
      }}
    >
      <h1>Events</h1>
      {past.length === 0 && upcoming.length === 0 ? (
        <p>events loading ... </p>
      ) : (
        <div
          className="eventGrid"
          style={{
            display: "grid",
            gap: "2rem 1rem",
            width: "100%",
            alignItems: "start",
            justifyItems: "center",
            gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "25rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Upcoming Events</h1>
            {upcoming.length === 0 ? <p>No upcoming events</p> : null}
            {upcoming.map((event, i) => {
              if (i > 2) {
                return null;
              }
              return (
                <a
                  target="_blank"
                  rel="norefferrer"
                  href={eventExpand[event].link}
                  key={event}
                  className="eventcard"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    minWidth: "19rem",
                    minHeight: "12rem",
                    backgroundColor: "#F6EEE3",
                    display: "flex",
                    borderRadius: "0.5rem",
                    filter: "drop-shadow(0.125rem 0.125rem 0.125rem)",
                    marginBottom: "2rem",
                    cursor: eventExpand[event].link ? "pointer" : "not-allowed",
                  }}
                >
                  <div
                    style={{
                      width: "8rem",
                      borderRadius: "0.5rem 0 0 0.5rem",
                      backgroundColor: "#203E4D",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <h1 style={{ color: "white", margin: 0 }}>
                      {eventExpand[event].day}
                    </h1>
                    <h1 style={{ color: "white", margin: 0 }}>
                      {eventExpand[event].month}
                    </h1>
                  </div>
                  <div
                    style={{
                      padding: "1rem",
                      width: "100%",
                    }}
                  >
                    <b>{eventExpand[event].time}</b>
                    <p style={{ marginBottom: "0.5rem", fontSize: "1.125rem" }}>
                      {event}
                    </p>
                    <p style={{ margin: 0 }}>{eventExpand[event].desc}</p>
                  </div>
                </a>
              );
            })}
          </div>
          <div
            style={{
              maxWidth: "25rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Past Events</h1>
            {past.length === 0 ? <p>No past events</p> : null}
            {past.map((event) => (
              <a
                target="_blank"
                rel="norefferrer"
                href={eventExpand[event].link}
                key={event}
                className="eventcard"
                style={{
                  textDecoration: "none",
                  color: "black",
                  width: "100%",
                  minWidth: "19rem",
                  minHeight: "12rem",
                  backgroundColor: "#F6EEE3",
                  display: "flex",
                  borderRadius: "0.5rem",
                  filter: "drop-shadow(0.125rem 0.125rem 0.125rem)",
                  marginBottom: "2rem",
                  cursor: eventExpand[event].link ? "pointer" : "not-allowed",
                }}
              >
                <div
                  style={{
                    width: "8rem",
                    borderRadius: "0.5rem 0 0 0.5rem",
                    backgroundColor: "#203E4D",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h1 style={{ color: "white", margin: 0 }}>
                    {eventExpand[event].day}
                  </h1>
                  <h1 style={{ color: "white", margin: 0 }}>
                    {eventExpand[event].month}
                  </h1>
                </div>
                <div
                  style={{
                    padding: "1rem",
                    width: "100%",
                  }}
                >
                  <b>{eventExpand[event].time}</b>
                  <p style={{ marginBottom: "0.5rem", fontSize: "1.125rem" }}>
                    {event}
                  </p>
                  <p style={{ margin: 0 }}>{eventExpand[event].desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default EventCards;
