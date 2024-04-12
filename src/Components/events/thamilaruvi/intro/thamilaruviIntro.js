import React from "react";
import {
    Grid, Container
} from '@mui/material';
import './thamilaruviintro.css';
import {cultureEvent} from "../../../../shared/EventDetails";

function ThamilaruviIntro() {
    return (
        <>
            <div className="kovil-landing-container-div">
                <Container maxWidth='' className="kovil-landing-container">
                    <div className="kovil-landing-heading1"><span className="kovil-landing-heading-letter">த</span>மிழருவி</div>
                    <img src={cultureEvent[2].img} alt="kovil" className="kovil-icon" />
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sm='12'>
                            <Container maxWidth="md">
                                <div className="intro-decription">{cultureEvent[2].descriiption}</div>
                                </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default ThamilaruviIntro