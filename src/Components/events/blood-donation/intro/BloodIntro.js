import React from "react";
import {
    Grid, Container
} from '@mui/material';
import './bloodintro.css';
import {social} from "../../../../shared/EventDetails";

function BloodIntro() {
    return (
        <>
            <div className="blood-landing-container-div">
                <Container maxWidth='' className="blood-landing-container">
                    <div className="blood-landing-heading1"><span className="blood-landing-heading-letter">இ</span>ரத்ததானம்</div>
                    <img src={social[2].img} alt="blood" className="blood-icon" />
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sm='12'>
                            <Container maxWidth="md">
                                <div className="intro-decription">{social[2].descriiption}</div>
                                </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default BloodIntro