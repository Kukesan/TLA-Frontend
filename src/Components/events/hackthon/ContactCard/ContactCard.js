import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import "./ContctCard.css";
import { Container } from "@mui/material";

function ContactCard() {
  return (
    <Container>
      <div className="endCard">
        <h4>மேலதிக விபரங்கள்</h4>
        <div>
          <MailIcon className="contact" />
          testinghackthon@gmail.com
        </div>
        <br></br>
        <div>
          <PhoneIcon className="contact" />
          077 123 4567
        </div>
      </div>
    </Container>
  );
}

export default ContactCard;
