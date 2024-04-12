import React from "react";
import {
    Grid, Container
} from '@mui/material';
import './sotkanaiIntro.css';
import sotkanaiImg from '../../../../images/Events/Card Illustration/sotkanai.png';
import {competition} from "../../../../shared/EventDetails";

function SotkanaiIntro() {
    return (
        <>
            <div className="sotkanai-landing-container-div">
                <Container maxWidth='' className="sotkanai-landing-container">
                    <div className="sotkanai-landing-heading1"><span className="sotknai-landing-heading-letter">சொ</span>ற்கணை</div>
                    <img src={competition[0].img} alt="sotknai" className="sotkanai-icon" />
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sm='12'>
                            <Container maxWidth="md">
                                <div className="intro-decription">{competition[0].descriiption}</div>
                                </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default SotkanaiIntro;