import React from "react";
import { Grid, Container } from "@mui/material";
import './jeevanathiintro.css';
import {social} from "../../../../shared/EventDetails";

function JeevanathiIntro() {
  return (
    <>
     <div className="jeevanathi-landing-container-div">
                <Container maxWidth='' className="jeevanathi-landing-container">
                    <div className="jeevanathi-landing-heading1"><span className="jeevanathi-landing-heading-letter">ஜீ</span>வநதி</div>
                    <img src={social[0].img} alt="jeevanathi" className="jeevanathi-icon" />
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sm='12'>
                            <Container maxWidth="md">
                                <div className="intro-decription">{social[0].descriiption}</div>
                                </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
    </>
  );
}

export default JeevanathiIntro;
