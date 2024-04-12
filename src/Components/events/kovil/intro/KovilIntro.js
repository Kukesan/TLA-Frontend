import React from "react";
import {
    Grid, Container
} from '@mui/material';
import './kovilintro.css';
import {social} from "../../../../shared/EventDetails";

function KovilIntro() {
    return (
        <>
            <div className="kovil-landing-container-div">
                <Container maxWidth='' className="kovil-landing-container">
                    <div className="kovil-landing-heading1"><span className="kovil-landing-heading-letter">கோ</span>வில்</div>
                    <img src={social[1].img} alt="kovil" className="kovil-icon" />
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sm='12'>
                            <Container maxWidth="md">
                                <div className="intro-decription">{social[1].descriiption}</div>
                                </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default KovilIntro