import React from "react";
import {
    Grid, Container
} from '@mui/material';
import './foodintro.css';
import foodimg from '../../../../images/Events/Card Illustration/foodfestival.png';


function FoodIntro() {
    return (
        <>
            <div className="food-landing-container-div">
                <Container maxWidth='' className="food-landing-container">
                    <div className="food-landing-heading1"><span className="food-landing-heading-letter">உ</span>ணவுத் திருவிழா</div>
                    <img src={foodimg} alt="food" className="food-icon" />
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sm='12'>
                            <Container maxWidth="md">
                                <div className="intro-decription">எமது பாரம்பரிய உணவுகளை சகோதர மொழி மாணவர்களுடன் பகிர்ந்துண்னும் நிகழ்வு</div>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default FoodIntro