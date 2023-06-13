import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>  
            <br />
            Merhabalar ! <br /><br /><span className="purple">Ali Osman UÇAR </span> <br />
            <br />  
             +90 505 135 95 71 <span className="purple">
            <br />
            <br /> 
               Tokat, Türkiye.</span><br /><br />
            <br /> Malatya Turgut Özal Üniversitesi 
            <br /><br />
            <br /> 
            aliosmanucar987@gmail.com
            <br />
            <br />  
          </p>
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
