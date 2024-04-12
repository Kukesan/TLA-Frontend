import React from "react";
import { Grid, Container } from "@mui/material";
import "./aramiyamIntro.css";
import {guidance} from "../../../../shared/EventDetails";

function AramiyamIntro() {
  return (
    <>
      <div className="aramiyam-landing-container-div">
        <Container maxWidth="" className="aramiyam-landing-container">
          <div className="aramiyam-landing-heading1">
            <span className="aramiyam-landing-heading-letter">அ</span>ரமியம்
          </div>
          <img src={guidance[0].img} alt="aramiyam" className="aramiyam-icon" />
          <Grid sx={{ marginTop: "30px" }}>
            <Container maxWidth="md">
              <div className="intro-decription">{guidance[0].descriiption}</div>
            </Container>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default AramiyamIntro;
