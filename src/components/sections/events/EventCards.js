import React, { useState, useEffect } from "react";
import { eventExpand } from "../../../utils/events";
import "./event.css";

const EventCards = () => {
  const [past, setPast] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  const currTime = new Date();

  useEffect(() => {
    let currPast = [];
    let currUpcoming = [];
    Array.from(Object.keys(eventExpand)).forEach((event) => {
      if (currTime > eventExpand[event].endDate) {
        currPast.push(event);
      } else {
        currUpcoming.push(event);
      }
    });

    setPast(currPast);
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
        padding: "4rem",
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
            maxWidth: "75rem",
            alignItems: "start",
            justifyItems: "center",
          }}
        >
          <div
            style={{
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
                <div
                  style={{
                    width: "100%",
                    minWidth: "19rem",
                    minHeight: "12rem",
                    backgroundColor: "#F6EEE3",
                    display: "flex",
                    borderRadius: "0.5rem",
                    filter: "drop-shadow(0.125rem 0.125rem 0.125rem)",
                    marginBottom: "2rem",
                  }}
                >
                  <div
                    style={{
                      width: "8rem",
                      borderRadius: "0.5rem 0 0 0.5rem",
                      backgroundColor: "#203E4D",
                      padding: "0 1rem",
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
                </div>
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
              <div
                style={{
                  width: "100%",
                  minWidth: "19rem",
                  minHeight: "12rem",
                  backgroundColor: "#F6EEE3",
                  display: "flex",
                  borderRadius: "0.5rem",
                  filter: "drop-shadow(0.125rem 0.125rem 0.125rem)",
                  marginBottom: "2rem",
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
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default EventCards;
