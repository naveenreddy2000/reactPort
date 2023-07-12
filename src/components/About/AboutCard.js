import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <p style={{ color: "rgb(155 126 172)" }}>
          "Software engineering is the art of turning imagination into reality"{" "}
        </p>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Naveen </span>
            from <span className="purple"> Guntur, Andhra Pradesh, India.</span>
            <br /> I completed my B.Tech in Computer Science and Engineering from
            <span className="purple"> National Institute of Technology Durgapur</span>
            <br />
            Additionally, I am currently employed as a software Engineer at
            Byjus.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
