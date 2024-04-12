import React , {useEffect,useState} from "react";
import { Grid, Container } from "@mui/material";
import "./agenda.css";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import isOdd from "greet_name/isOdd";
import eventlist from "./eventList";

function Agenda() {
  const events = eventlist;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width to state
      setWindowWidth(window.innerWidth);
    }
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);
  return (
    <>
      <h1>நேரவரிசை</h1>
      <div className="timelineCOntainer">
        <Timeline align={windowWidth > 490 ? "alternate" : "left"} className="tline">
          {events.map((event, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="inherit">
                  <FiberManualRecord className="dot" htmlColor="#002245" />
                </TimelineDot>
                {index - events.length === -1 ? "" : <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <div
                  className={
                    isOdd(index) == "odd" && windowWidth > 490
                      ? "timelineBoxRight"
                      : "timelineBoxLeft"
                  }
                >
                  <h6>{event.time}</h6>
                  <h5>{event.title}</h5>
                  <h4>{event.content}</h4>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </>
  );
}

export default Agenda;
