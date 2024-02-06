import React from "react";
// import Image from "react-bootstrap/Image";
// import mainimage from "../images.png";
import '../Home.css';
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container>
        <div class="homerow">
          <div class="homecolumn">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h4>Financial Services</h4>
                </div>
                <div class="flip-card-back">
                  <h3>Card 1</h3>
                  <p>Some text</p>
                  <p>Some text</p>
                </div>
              </div>
            </div>
          </div>
          <div class="homecolumn">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h4>Financial Services</h4>
                </div>
                <div class="flip-card-back">
                  <h3>Card 2</h3>
                  <p>Some text</p>
                  <p>Some text</p>
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
                  <h4>Financial Services</h4>
                </div>
                <div class="flip-card-back">
                  <h3>Card 3</h3>
                  <p>Some text</p>
                  <p>Some text</p>
                </div>
              </div>
            </div>
          </div>
          <div class="homecolumn">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h4>Financial Services</h4>
                </div>
                <div class="flip-card-back">
                  <h3>Card 4</h3>
                  <p>Some text</p>
                  <p>Some text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
