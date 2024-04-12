import React from 'react';
import './BrammamRules.css';
import { Grid, Container, Button } from '@mui/material';
import { useState } from 'react';
import Heading from '../../../../shared/Heading';
const BrammamRules = ({ eventData }) => {
    const [showRules, setShowRules] = useState(false);

    const handleButtonClick = () => {
        setShowRules(!showRules);
    };
    return (<React.Fragment>
        <div>
            <Heading>
                {eventData["name"]} - போட்டி விதிமுறைகள்
            </Heading>


            <Grid item sm='12'>
                <Container maxWidth="md" >
                    <div className="rules-decription">
                        <ol type='1'>
                            {
                                eventData["rules"].map((rule, index) => {
                                    return <li key={index}>{rule}</li>
                                })
                            }
                        </ol>
                    </div>

                </Container>
            </Grid>


        </div>
    </React.Fragment>);
}

export default BrammamRules;