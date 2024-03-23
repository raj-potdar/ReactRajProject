import React from "react";
// import Image from "react-bootstrap/Image";
import mainimage from "../homepage1.jpg";
import '../Home.css';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from "../logos-all_2-2.svg";
import img2 from "../Full-Lifecycle-Digital-Transformation-01.svg";

const Home = () => {
  return (
    <>
      <img src={mainimage} className="logo-m"></img>
      <Container>
        <div class="homerow">
          <div class="homecolumn">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h4>Financial Services</h4>
                </div>
                <div class="flip-card-back">
                  <h3>Financial Services</h3>
                  <p>
                    We’ve pioneered cloud and streaming technologies at
                    financial institutions across the globe. Our CoE focuses on
                    legacy modernization, AWS capabilities for Financial
                    Services
                  </p>
                  <p>Learn more</p>
                </div>
              </div>
            </div>
          </div>
          <div class="homecolumn">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h4>Manufacturing & Transportation</h4>
                </div>
                <div class="flip-card-back">
                  <h3>Manufacturing & Transportation</h3>
                  <p>
                    We transform leading manufacturing and transportation
                    companies into next-generation connected enterprises. Our
                    CoE couples deep domain expertise with digital accelerators
                    to fast track the digitization journey
                  </p>
                  <p>Learn more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="homerow1">
          <div class="homecolumn">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h4>Media, Entertainment & Education</h4>
                </div>
                <div class="flip-card-back">
                  <h3>Media, Entertainment & Education</h3>
                  <p>
                    We help providers excel in the digital era while continuing
                    to deliver the content that their customers crave. Our CoE
                    brings in expertise in engineering digital media solutions
                  </p>
                  <p>Learn more</p>
                </div>
              </div>
            </div>
          </div>
          <div class="homecolumn">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h4>Technology ISVs</h4>
                </div>
                <div class="flip-card-back">
                  <h3>Technology ISVs</h3>
                  <p>
                    We help our clients accelerate speed-to-market,
                    time-to-value and get more product done. Our CoE specializes
                    in engineering digital infrastructure products that operate
                    at scale
                  </p>
                  <p>Learn more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <Row>
          <Col>Cloud Engineering</Col>
          <Col>Data & Analytics</Col>
          <Col>Experience Design</Col>
          <Col>Intelligent Engineering</Col>
          <Col>Salesforce</Col>
        </Row>
      </Container>
      <img src={img1} className="logo-l newimg"></img>
      <img src={img2} className="logo-l newimg1"></img>
    </>
  );
};

export default Home;
