import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { GrTextAlignFull } from "react-icons/gr";
import { VscChromeClose } from "react-icons/vsc";
import { eventExpand } from "../../../utils/events";
import { colors } from "./colors";
import { eventColors } from "./eventColor";

const EventModal = ({ eventInfo }) => {
  let title = eventInfo.event["_def"].title;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    boxShadow: 24,
    borderRadius: "0.5rem",
    padding: "0.75rem 1.5rem 1.5rem 1.5rem",
    backgroundColor: "white",
    display: "grid",
    gridTemplateColumns: "32px 1fr",
    overflow: "scroll",
    maxHeight: "80vh",
    maxWidth: "80vw",
  };

  return (
    <div
      style={{
        width: "inherit",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Button
        style={{
          width: "100%",
          color: "black",
          backgroundColor: colors[eventColors[eventExpand[title]["type"]]]
            ? colors[eventColors[eventExpand[title]["type"]]]
            : colors["gray"],
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.25rem",
          borderRadius: "0.15rem",
        }}
        onClick={handleOpen}
        variant="contained"
      >
        <p
          style={{
            width: "100%",
            fontSize: "0.75rem",
            overflow: "hidden",
            margin: 0,
            padding: 0,
            textAlign: "left",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </p>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style}>
          <div
            style={{
              gridColumnStart: "2",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <IconButton onClick={handleClose} aria-label="delete">
              <VscChromeClose size="0.75em" />
            </IconButton>
          </div>
          <h1 style={{ gridColumnStart: "2", marginBottom: "0.25rem" }}>
            {title}
          </h1>
          <p style={{ gridColumnStart: "2", marginBottom: "0.25rem" }}>
            {eventExpand[title]["date"]}
          </p>
          <div
            style={{
              borderRadius: "0.50rem",
              marginBottom: "1rem",
              backgroundColor: colors[eventColors[eventExpand[title]["type"]]]
                ? colors[eventColors[eventExpand[title]["type"]]]
                : colors["gray"],
              padding: "0.25rem",
              maxWidth: "fit-content",
              gridColumnStart: "2",
            }}
          >
            <p style={{ margin: 0 }}>{eventExpand[title]["type"]}</p>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <AiOutlineLink />
          </div>
          <a
            href={eventExpand[title]["link"]}
            style={{
              textDecoration: "underline",
              color: "black",
              cursor: eventExpand[title].link ? "pointer" : "not-allowed",
            }}
          >
            {eventExpand[title].link ? "Zoom link" : "Link TBD"}
          </a>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <GrTextAlignFull />
          </div>
          <p style={{ marginBottom: "0.25rem" }}>
            {eventExpand[title]["desc"]
              ? eventExpand[title]["desc"]
              : "details TBA"}
          </p>
          {eventExpand[title]["src"] ? (
            <img
              style={{ gridColumnStart: "2" }}
              src={eventExpand[title]["src"]}
            />
          ) : null}
        </div>
      </Modal>
    </div>
  );
};

export default EventModal;
