import { Link } from "gatsby";
import React from "react";
import "./about.css";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineHome,
  AiOutlineMail,
} from "react-icons/ai";
import AnchitaImg from "../../../images/board/anchita.png";
import MeganImg from "../../../images/board/megan.png";
import KrystalImg from "../../../images/board/krystal.png";
import CristinaImg from "../../../images/board/cristina.png";
import ArleneImg from "../../../images/board/arlene.png";
import HariniImg from "../../../images/board/harini.png";
import NishithaImg from "../../../images/board/nishitha.png";
import ValerieImg from "../../../images/board/valerie.png";
import AndreiImg from "../../../images/board/andrei.png";
import AnmolImg from "../../../images/board/anmol.png";
import EllieImg from "../../../images/board/ellie.png";

const srcPrefix = "../../../images/board";

const membersProfiles = {
  anchita: {
    name: "Anchita Bora",
    role: "President",
    src: AnchitaImg,
    year: "3rd year",
    pronouns: "She/Her/Hers",
    major: "Comp Sci",
    sign: "Taurus",
    emoji: "🍒",
    fun: "i grew up in sydney, australia!",
    linkedin: "",
    github: "",
    portfolio: "",
    email: "",
  },
  megan: {
    name: "Megan McDaniel",
    role: "Vice President",
    src: MeganImg,
    year: "3rd year",
    pronouns: "She/Her/Hers",
    major: "Psych & Comp Sci",
    sign: "Libra",
    emoji: "🌱",
    fun: "I love cold weather!",
    linkedin: "",
    github: "",
    portfolio: "",
    email: "",
  },
  krystal: {
    name: "Krystal Pothilat",
    role: "Secretary",
    src: KrystalImg,
    year: "2nd year",
    pronouns: "She/Her/Hers",
    major: "Comp Sci",
    sign: "Capricorn",
    emoji: "🦦",
    fun: "im scared of birds",
    linkedin: "",
    github: "",
    portfolio: "",
    email: "",
  },
  cristina: {
    name: "Cristina Lawson",
    role: "Professional Development",
    src: CristinaImg,
    year: " 1st year MS",
    pronouns: "She/Her/Hers",
    major: "Comp Sci",
    sign: "Virgo",
    emoji: "🤠",
    fun: "I can do that flower thing with my tongue!",
    linkedin: "",
    github: "",
    portfolio: "",
    email: "",
  },
  arlene: {
    name: "Arlene Phimmasone",
    role: "Marketing",
    src: ArleneImg,
    year: "3rd year",
    pronouns: "She/Her/Hers",
    major: "Comp Sci",
    sign: "Taurus",
    emoji: "🍒",
    fun: "I cannot do a cartwheel.",
    linkedin: "",
    github: "",
    portfolio: "",
    email: "",
  },
  harini: {
    name: "Harini Venkatesan",
    role: "Graduate Outreach",
    src: HariniImg,
    year: "2nd year PhD",
    pronouns: "She/Her/Hers",
    major: "Comp Sci",
    sign: "Libra",
    emoji: "🤺",
    fun: "I have pierced my nose three times.",
    linkedin: "",
    github: "",
    portfolio: "",
    email: "",
  },
  nishitha: {
    name: "Nishitha Gouravelli",
    role: "Treasurer",
    src: NishithaImg,
    year: "3rd year",
    pronouns: "She/Her/Hers",
    major: "Comp Sci",
    sign: "Aries",
    emoji: "💫",
    fun: "i can't whistle",
    linkedin: "",
    github: "",
    portfolio: "",
    email: "",
  },
  valerie: {
    name: "Valerie Wong",
    role: "Membership",
    src: ValerieImg,
    year: "2rd year",
    pronouns: "She/Her/Hers",
    major: "Comp Sci",
    sign: "Taurus",
    emoji: "🤠",
    fun: "i have a birthmark that goes up my arm",
    linkedin: "https://www.linkedin.com/in/val-wong",
    github: "https://github.com/vwong031",
    portfolio: null,
    email: "vkwong825@gmail.com",
  },
  andrei: {
    name: "Andrei Dimaano",
    role: "Web Development",
    src: AndreiImg,
    year: "3rd year",
    pronouns: "He/Him/His",
    major: "Comp Sci",
    sign: "Libra",
    emoji: "🥶",
    fun: "i luv oreos :0",
    linkedin: "https://www.linkedin.com/in/andrei-dimaano/",
    github: "https://github.com/andreidimaano",
    portfolio: "https://andreidimaano.com/",
    email: "andreiidimaano@gmail.com",
  },
  anmol: {
    name: "Anmol Sharma",
    role: "External Operations",
    src: AnmolImg,
    year: "2nd year",
    pronouns: "She/Her/Hers",
    major: "Comp Sci",
    sign: "Aries",
    emoji: "🌵",
    fun: "I make henna art",
    linkedin: "",
    github: "",
    portfolio: "",
    email: "",
  },
  ellie: {
    name: "Ellie Cheng",
    role: "Internal Operations",
    src: EllieImg,
    year: "3rd year",
    pronouns: "She/Her/Hers",
    major: "Comp Sci",
    sign: "Cancer",
    emoji: "🥑",
    fun: "I am so scared of bugs including butterflies and ladybugs.",
    linkedin: "",
    github: "",
    portfolio: "",
    email: "",
  },
};

const Team = () => {
  return (
    <section style={{ backgroundColor: "#F6ECE2" }}>
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
        <h1>✨Meet the Team✨</h1>
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
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                padding: "0.5rem",
                width: "12rem",
                backgroundColor: "white",
                border: "0.1rem solid black",
                textAlign: "start",
                boxShadow:
                  "-0.5rem -0.5rem white, -0.55rem -0.55rem black, -0.425rem -0.55rem black,-0.55rem -0.425rem black",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignSelf: "center",
                  alignItems: "end",
                  justifyContent: "center",
                  width: "10.25rem",
                  backgroundColor: "#FA6C5E",
                  border: "0.125rem solid black",
                }}
              >
                <img
                  src={membersProfiles[member].src}
                  style={{
                    width: "10rem",
                    maxWidth: "10rem",
                    objectFit: "fit",
                    margin: 0,
                  }}
                />
              </div>
              <h3
                style={{
                  fontSize: "1rem",
                  margin: 0,
                  marginTop: "0.25rem",
                }}
              >
                {membersProfiles[member].name}
              </h3>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                }}
              >
                {membersProfiles[member].role}
              </p>
              <div
                className="cardLinks"
                style={{
                  display: "flex",
                  marginTop: "0.25rem",
                  marginBottom: "0.5rem",
                }}
              >
                {membersProfiles[member].linkedin ? (
                  <a href={membersProfiles[member].linkedin} target="_blank">
                    <AiFillLinkedin size="1.25em" />
                  </a>
                ) : null}
                {membersProfiles[member].github ? (
                  <a href={membersProfiles[member].github} target="_blank">
                    <AiFillGithub size="1.25em" />
                  </a>
                ) : null}
                {membersProfiles[member].portfolio ? (
                  <a href={membersProfiles[member].portfolio} target="_blank">
                    <AiOutlineHome size="1.25em" />
                  </a>
                ) : null}
                {membersProfiles[member].email ? (
                  <a
                    href={`mailto: ${membersProfiles[member].email}`}
                    target="_blank"
                  >
                    <AiOutlineMail size="1.25em" />
                  </a>
                ) : null}
              </div>
              <div
                style={{
                  borderLeft: "0.125rem solid #F4D8C2",
                  padding: "0.25rem",
                  backgroundColor: "#F6EEE3",
                  marginBottom: "0.5rem",
                }}
              >
                <p>"{membersProfiles[member].fun}"</p>
              </div>
              <p>
                {membersProfiles[member].year} · {membersProfiles[member].major}
              </p>
              <p>Pronouns: {membersProfiles[member].pronouns}</p>
              <p>Star Sign: {membersProfiles[member].sign}</p>
              <div
                style={{ width: "100%", marginTop: "auto", textAlign: "right" }}
              >
                {membersProfiles[member].emoji}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
