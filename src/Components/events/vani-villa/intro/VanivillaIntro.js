import React from "react";
import {
    Grid, Container
} from '@mui/material';
import './vanivillaintro.css';
import { cultureEvent } from "../../../../shared/EventDetails";

function VaniVillaIntro() {
    return (
        <>
            <div className="kovil-landing-container-div">
                <Container maxWidth='' className="kovil-landing-container">
                    <div className="kovil-landing-heading1"><span className="kovil-landing-heading-letter">வா</span>ணி விழா</div>
                    <img src={cultureEvent[1].img} alt="kovil" className="kovil-icon" />
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sm='12'>
                            <Container maxWidth="md">
                                <div className="intro-decription">{cultureEvent[1].descriiption}</div>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default VaniVillaIntro