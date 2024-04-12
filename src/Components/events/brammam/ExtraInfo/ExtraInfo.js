import { useParams } from "react-router-dom";
import "./ExtraInfo.css"
import ComingSoon from "../../../../shared/comingSoon/ComingSoon";
import EventData from "../aboutEvent/BrammamEventData.json"
import BrammamRules from "../rules/BrammamRules";
import { Container } from "@mui/material";
const ExtraInfo = () => {
    const { event } = useParams();
    const validEvents = ["meerigai", "olisuvadu", "solalvalar", "eluthoviyam"]
    if (validEvents.includes(event)) {
        return (
            <div className="pongal-landing-container-div" style={{ "height": "fit-content" }}>
                <Container>
                    <BrammamRules eventData={EventData[event]} />
                </Container>
            </div>
        );
    } else {
        return <ComingSoon />
    }


}

export default ExtraInfo;