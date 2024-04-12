import React from "react";
import Heading from "../../../../shared/Heading";
import { Container, Grid } from "@mui/material";
import SeminarCard from "./seminarCard/SeminarCard";
import profileImg01 from "../../../../images/Events/aramiyam/profile01.png";
import "./seminar.css";

const SeminarData = [
  {
    id: 1,
    title: "CV உருவாக்குதல் பற்றிய அறிவுரை",
    description:
      "இந்த கருத்தரங்கில், நல்ல அபிப்ராயத்தை ஏற்படுத்தவும், வேலை வாய்ப்புகளை அதிகரிக்கவும் நன்கு வடிவமைக்கப்பட்ட ரெஸ்யூமை வடிவமைப்பதன் முக்கியத்துவத்தைப் பற்றி விவாதித்தோம்.",
    time: "காலை 9:00",
    date: "28.05.2023",
    speaker: {
      name: "ஹஸ்தினி சிவயோகநாதன்",
      position: "Manager, Waveguide Operations Program management, Meta",
      profileImg:
        "https://live.staticflickr.com/65535/53570913426_bc6c7ebdf8_w.jpg",
    },
    youtubeLink:
      "https://www.youtube.com/watch?v=pwnnY_qR1EU&t=524s&ab_channel=TLAUOM",
  },
  {
    id: 2,
    title: "தொழில்முனைப்பில் எமக்கிடையேயுள்ள ஐயப்பாடுகள் பற்றிய அறிவுரை",
    description:
      "ஒரு தொழிலதிபராக அவரது அனுபவத்தைப் பற்றி மேலும் தெரிந்து கொள்ள இணைந்திருங்கள் .",
    time: "காலை 9:00",
    date: "19.07.2022",
    speaker: {
      name: "திரு ரூபன் கணபதிப்பிள்ளை",
      position:
        "(Entrepreneur, Angel Investor, and Author Silicon Valley, USA)",
      profileImg: "https://live.staticflickr.com/65535/53586148900_8f8437025e_w.jpg",
    },
    youtubeLink:
      "https://fb.watch/qNH1gHbY4c/",
  },
  {
    id: 3,
    title: "முதுமாணி கல்வி பற்றிய அறிமுகம்",
    description:
      "இளமாணி பட்டத்தின் பின்னரான கல்வி? முதுமாணி கல்வி பற்றிய அறிமுகம் ,முதுமாணி கல்விக்கான அடிப்படைத் தகுதிகள், புலமைப்பரிசில்களை எவ்வாறு பெற்றுக்கொள்வது பற்றிய தகவல்களையும் உங்கள் மத்தியில் காணப்படும் ஐயங்களை தீர்த்திட இணைந்திடுங்கள்.",
    time: "காலை 9:00",
    date: "13.03.2022",
    speaker: {
      name: "திரு.அரவிந்தன், விஸ்வகுமார் அரவிந்தன், உதயசங்கர் தயாசிவம்",
      position:
        "(பேராசிரியர், University of Southern Queensland, Australia), (இணை பேராசிரியர், Wichita State University, USA),      (சிரேஷ்ட விரிவுரையாளர், University of Moratuwa, Sri Lanka)",
      profileImg: profileImg01,
    },
    youtubeLink:
      "https://www.facebook.com/TLAuom/videos/%E0%AE%85%E0%AE%B0%E0%AE%AE%E0%AE%BF%E0%AE%AF%E0%AE%AE%E0%AF%8D/524139205806796/",
  },
  {
    id: 4,
    title: "தொழில்முனைப்பில் ஐயப்பாடுகள்",
    description:
      "தொழில்முனைப்பில் எமக்கிடையேயுள்ள ஐயப்பாடுகளை நீக்க இணைந்திருங்கள்.",
    time: "காலை 9:00",
    date: "05.02.2022",
    speaker: {
      name: "ரொஸி கரின்",
      position:
        "(தொழில் முனைவாளர் ), (Project Engineer, Ministry of Irrigation Water Resources Management)",
      profileImg: "https://live.staticflickr.com/65535/53584839812_77a9604426_w.jpg",
    },
    youtubeLink:
      "https://fb.watch/qNH0oHrah_/",
  },
  {
    id: 5,
    title: "தொழில்துறையில் எமக்கான ஐயப்பாடுகள் பற்றிய அறிவுரை",
    description:
      "தொழில்துறையில் எமக்கான வாய்ப்பை பெற நாம் தாண்டும் முதற்படி நேர்காணல் சிறப்பானதொரு நேர்காணல் மூலம் சிறப்பானதொரு ஆரம்பத்தை பெற்றிடலாம் சிறப்பாக உங்கள் நேர்காணலை எதிர்கொள்ள இணைந்திருங்கள்.",
    time: "காலை 9:00",
    date: "19.12.2021",
    speaker: {
      name: "மதுசன் புவனேஸ்வரன்",
      position:
        "(பொறியியளாளர்)",
      profileImg: profileImg01,
    },
    youtubeLink:
      "https://fb.watch/qNG-xHaIT6/",
  },
  {
    id: 6,
    title: "தொழில் துறையில் தொடர்பாடலின் பங்களிப்பு",
    description:
      "மனித மனங்களின் உணர்ச்சிகளின் உருவங்களே மொழி.... அவ்வுருவம் உயிரோட்டம் கொள்ள தொடர்பாடலின் முக்கியத்துவம் அளப்பரியது.சிறப்பான ஒரு தொடர்பாடல் எம் தொழில்துறையில் சிறப்படையச் செய்யும்.",
    time: "காலை 9:00",
    date: "14.11.2021",
    speaker: {
      name: "நிருபிகா பொண்ணுத்துரை",
      position:
        "(தொகுப்பாளர்)",
      profileImg: profileImg01,
    },
    youtubeLink:
      "https://fb.watch/qNGZnC1pPD/",
  },
];

function Seminar() {
  return (
    <div className="seminar-container">
      <Container sx={{ pb: 4 }}>
        <Heading className="heading">கருத்தரங்குகள்</Heading>
        <Grid
          className="card-container"
          container
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center "}
          flexShrink={1}
          spacing={4}
        >
          {SeminarData.map((seminarData) => {
            return (
              <SeminarCard key={seminarData.id} SeminarData={seminarData} />
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Seminar;
