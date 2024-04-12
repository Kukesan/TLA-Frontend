import ContactCard from "../Components/events/hackthon/ContactCard/ContactCard";
import RulesButton from "../Components/events/hackthon/RulesButton/RulesButton";
import Agenda from "../Components/events/hackthon/agenda/Agenda";
import HackIntro from "../Components/events/hackthon/intro/HackIntro";
import { Helmet } from "react-helmet";

const Ideathon = () => {
    return (
        <>
            <Helmet>
                <title>Ideathon</title>
                <meta name="description" content="வளர்ந்து வரும் தகவல் தொழில்நுட்ப உலகில் சாதனையாளர்களை தேடும் தமிழ் இலக்கிய மன்றத்தின் புதியதோர் முயற்ச்சி." />
                <meta name="keywords" content="TLA, Tamil Literary Association, Hackthon." />
            </Helmet>
            <HackIntro />
            <RulesButton />
            <Agenda />
            <ContactCard />
        </>
    );
}

export default Ideathon;