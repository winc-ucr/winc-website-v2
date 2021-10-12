import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineHome,
  AiOutlineMail,
} from "react-icons/ai";
import AnchitaImg from "../../../images/board/anchita.png";
import AndreiImg from "../../../images/board/andrei.png";
import AnmolImg from "../../../images/board/anmol.png";
import ArleneImg from "../../../images/board/arlene.png";
import CristinaImg from "../../../images/board/cristina.png";
import EllieImg from "../../../images/board/ellie.png";
import HariniImg from "../../../images/board/harini.png";
import KrystalImg from "../../../images/board/krystal.png";
import MeganImg from "../../../images/board/megan.png";
import NishithaImg from "../../../images/board/nishitha.png";
import ValerieImg from "../../../images/board/valerie.png";
import "./about.css";

const membersProfiles = {
  anchita: {
    name: "Anchita Bora",
    role: "President",
    src: AnchitaImg,
    year: "3rd year",
    pronouns: "She/Her/Hers",
    major: "Comp Sci",
    sign: "Cancer",
    emoji: "⭐️",
    fun: "i grew up in sydney, australia!",
    linkedin: "https://www.linkedin.com/in/anchitabora/",
    github: null,
    portfolio: "https://anchita.xyz/",
    email: "abora003@ucr.edu",
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
    linkedin: "https://www.linkedin.com/in/meganjwmcdaniel/",
    github: null,
    portfolio: null,
    email: "mmcda006@ucr.edu",
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
    linkedin: "linkedin.com/in/krystalpothilat",
    github: null,
    portfolio: null,
    email: "kpoth001@ucr.edu",
  },
  cristina: {
    name: "Cristina Lawson",
    role: "Professional Development",
    src: CristinaImg,
    year: "1st year MS",
    pronouns: "She/Her/Hers",
    major: "Comp Sci",
    sign: "Virgo",
    emoji: "🤠",
    fun: "I rescued a 1-week-old kitten in June and he is now 3-months-old (his name is Shadow)!",
    linkedin: "https://www.linkedin.com/in/cristinalawson/",
    github: "https://github.com/cristina95138",
    portfolio: "https://www.cristinalawson.com/",
    email: "claws004@ucr.edu",
  },
  arlene: {
    name: "Arlene Phimmasone",
    role: "Marketing",
    src: ArleneImg,
    year: "3rd year",
    pronouns: "She/Her/Hers",
    major: "Comp Sci",
    sign: "Taurus",
    emoji: "🐌",
    fun: "I cannot do a cartwheel.",
    linkedin: "www.linkedin.com/in/arlene-phimmasone",
    github: null,
    portfolio: null,
    email: "aphim001@ucr.edu",
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
    linkedin: "https://www.linkedin.com/in/harini-venkatesan-784436169/",
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
    linkedin: "https://www.linkedin.com/in/nishithagou",
    github: null,
    portfolio: null,
    email: "nishitha256@gmail.com",
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
    linkedin: "https://www.linkedin.com/in/ellie-cheng1/",
    github: "",
    portfolio: "",
    email: "",
  },
};

const Team = () => {
  return (
    <section id="team" style={{ backgroundColor: "#F6EEE3" }}>
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
        <h1
          style={{
            color: "#203E4D",
            textShadow: "0.1rem 0.1rem #F7D1B8",
            fontFamily: "'Shrikhand', cursive",
            letterSpacing: "0.075rem",
          }}
        >
          ✨Meet the Team✨
        </h1>
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
                  height: "1.5rem",
                }}
              >
                {membersProfiles[member].linkedin ? (
                  <a
                    href={membersProfiles[member].linkedin}
                    rel="norefferrer"
                    target="_blank"
                  >
                    <AiFillLinkedin size="1.25em" />
                  </a>
                ) : null}
                {membersProfiles[member].github ? (
                  <a
                    href={membersProfiles[member].github}
                    rel="norefferrer"
                    target="_blank"
                  >
                    <AiFillGithub size="1.25em" />
                  </a>
                ) : null}
                {membersProfiles[member].portfolio ? (
                  <a
                    href={membersProfiles[member].portfolio}
                    rel="norefferrer"
                    target="_blank"
                  >
                    <AiOutlineHome size="1.25em" />
                  </a>
                ) : null}
                {membersProfiles[member].email ? (
                  <a
                    href={`mailto: ${membersProfiles[member].email}`}
                    target="_blank"
                    rel="norefferrer"
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
