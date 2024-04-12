import React from "react";
import {
    Grid, Container
} from '@mui/material';
import './movieintro.css';
import kovilimg from '../../../../images/Events/Card Illustration/kovil.png';
import {carnival} from "../../../../shared/EventDetails";

function MovieIntro() {
    return (
        <>
            <div className="kovil-landing-container-div">
                <Container maxWidth='' className="kovil-landing-container">
                    <div className="kovil-landing-heading1"><span className="kovil-landing-heading-letter">தி</span>ரைப்பட இரவு</div>
                    <img src={carnival[1].img} alt="kovil" className="kovil-icon" />
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sm='12'>
                            <Container maxWidth="md">
                                <div className="intro-decription">{carnival[1].descriiption}</div>
                                </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default MovieIntro