import React from "react";
import { Grid, Container } from '@mui/material';
import './pplintro.css';
import pplLogo from '../../../../images/Events/ppl/pplLogo.png';
import {carnival} from "../../../../shared/EventDetails";

function PplIntro() {
    return (
        <>
            <div className="ppl-landing-container-div">
                <Container maxWidth='' className='ppl-landing-container' >
                    <div className='ppl-landing-heading1'>
                        பொங்கல் Premier Leaque
                    </div>
                    <img src={carnival[0].img} alt='ppl' className='ppl-icon' />
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sm='12'>
                            <Container maxWidth="md">
                                <div className="ppl-intro-description">{carnival[0].descriiption}</div>
                                </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default PplIntro;
