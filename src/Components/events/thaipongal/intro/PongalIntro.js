import React from "react";
import {
    Grid, Container
} from '@mui/material';
import './pongalintro.css';
import {cultureEvent} from "../../../../shared/EventDetails";

function PongalIntro() {
    return (
        <>
            <div className="pongal-landing-container-div">
                <Container maxWidth='' className="pongal-landing-container">
                    <div className="pongal-landing-heading1"><span className="pongal-landing-heading-letter">தை</span>ப்பொங்கல்</div>
                    <img src={cultureEvent[0].img} alt="pongal" className="thaipongal-icon" />
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sm='12'>
                            <Container maxWidth="md">
                                <div className="intro-decription">{cultureEvent[0].descriiption}</div>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default PongalIntro