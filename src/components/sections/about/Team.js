import { Link } from "gatsby";
import React from "react";
import "./about.css";
import Sheesh from "../../../images/sheesh.png";
import AnchitaImg from '../../../images/board/anchita.png'
import MeganImg from '../../../images/board/megan.png'
import KrystalImg from '../../../images/board/krystal.png'
import CristinaImg from '../../../images/board/cristina.png'
import ArleneImg from '../../../images/board/arlene.png'
import HariniImg from '../../../images/board/harini.png'
import NishithaImg from '../../../images/board/nishitha.png'
import ValerieImg from '../../../images/board/valerie.png'
import AndreiImg from '../../../images/board/andrei.png'
import AnmolImg from '../../../images/board/anmol.png'
import EllieImg from '../../../images/board/ellie.png'

const srcPrefix = '../../../images/board'

const membersProfiles = {
  anchita: {
    name: "Anchita Bora",
    role: "President",
    src: AnchitaImg,
  },
  megan: {
    name: "Megan McDaniel",
    role: "Vice President",
    src: MeganImg,
  },
  kystal: {
    name: "Krystal Pothilat",
    role: "Secretary",
    src: KrystalImg,
  },
  cristina: {
    name: "Cristina Lawson",
    role: "Professional Development",
    src: CristinaImg,
  },
  arlene: {
    name: "Arlene Phimmasone",
    role: "Marketing",
    src: ArleneImg,
  },
  harini: {
    name: "Harini Venkatesan",
    role: "Graduate Outreach",
    src: HariniImg,
  },
  nishitha: {
    name: "Nishitha Gouravelli",
    role: "Treasurer",
    src: NishithaImg,
  },
  valerie: {
    name: "Valerie Wong",
    role: "Membership",
    src: ValerieImg,
  },
  andrei: {
    name: "Andrei Dimaano",
    role: "Web Devlopment",
    src: AndreiImg,
  },
  anmol: {
    name: "Anmol Sharma",
    role: "External Operations",
    src: AnmolImg,
  },
  ellie: {
    name: "Ellie Cheng",
    role: "internal Operations",
    src: EllieImg
  },
};

const Team = () => {
  return (
    <section>
      <div
        className="team"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: `0 auto`,
          maxWidth: "60rem",
          padding: `2.5rem`,
        }}
      >
        <h1>Meet the Team</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(12rem, 1fr))",
            gap: "2rem 1rem",
            width: "100%",
            justifyItems: "center",
          }}
        >
          {Object.keys(membersProfiles).map((member) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                padding: "0.5rem",
                width: "12rem",
                height: "15rem",
                backgroundColor: "white",
                border: "0.01rem solid black",
                textAlign: "start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "center",
                  width: "100%",
                  height: "11.21rem",
                  backgroundColor: "#FA6C5E",
                  border: "0.125rem solid black",
                }}
              >
                <img
                  src={membersProfiles[member].src}
                  style={{
                    width: '10.7rem',
                    maxWidth: '10.7rem',
                    objectFit: "fit",
                    margin: 0,
                  }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    margin: 0,
                    marginTop: "0.25rem",
                  }}
                >
                  {membersProfiles[member].name}
                </h3>
              </div>
              <div style={{ width: "100%" }}>
                <p
                  style={{
                    lineHeight: "0.8rem",
                    fontSize: "0.8rem",
                    margin: 0,
                    marginTop: "0.125rem",
                  }}
                >
                  {membersProfiles[member].role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
