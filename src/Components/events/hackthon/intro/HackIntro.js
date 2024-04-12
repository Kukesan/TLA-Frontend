import React from "react";
import {
    Grid, Container
} from '@mui/material';
import './HackIntro.css';
import { competition } from "../../../../shared/EventDetails";

function HackIntro() {
    return (
        <>
            <div className="pongal-landing-container-div">
                <Container maxWidth='' className="firstFrame">
                    <div className="pongal-landing-heading1">{competition[1].title}</div>
                    <img src={competition[1].img} alt="pongal" className="thaipongal-icon" />
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item >
                            <Container maxWidth="md">
                                <div className="intro-decription">{competition[1].descriiption}</div>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default HackIntro