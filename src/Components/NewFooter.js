import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  // MDBIcon,
} from "mdb-react-ui-kit";

const NewFooter = () => {
  return (
    <div>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="google" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section> */}

        <section className="">
          <br></br>
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="4" className="mx-auto mb-4">
                <p>
                  Ness Digital Engineering, which funds managed by global investment firm KKR acquired in 2022 is a full life-cycle digital engineering firm offering digital advisory through scaled engineering services. The talent resource pool comprises 5000+ engineers across 11 innovation hubs in the US, Eastern Europe, and India. Combining our core competence in engineering with the latest in digital strategy and technology, we seamlessly manage Digital Transformation journeys from strategy through execution to help businesses thrive in the digital economy. For more information, visit www.ness.com
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Practices</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Cloud Engineering
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Data,Analytics & AI/ML
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Experience Design
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Intelligent Engineering
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Salesforce
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Industries</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Financial Services
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Manufacturing & Transportation
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Media, Entertainment & Education
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Technology & ISVs
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Partners</h6>
                <p>
                  <a href="#!" className="text-reset">
                    AWS
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Microsoft Azure
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Confluent
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Salesforce
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Snowflake
                  </a>
                </p>
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Company</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Leadership
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Microsoft Azure
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    News
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Insights
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Events
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contact
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Consent To <br></br>
                    Personal Data <br></br>
                    Processing
                  </a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright : 
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            Ness. All Rights Reserved
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default NewFooter;
