import React from "react";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Form } from "react-bootstrap";
import "./Support.css";

function Support() {
  return (
    <main className="main_support">
      <NavigationTop />
      <div className="cennt m-auto">
        <Container fluid>
          <Row>
            <Col md={12}>
              <Form className="education_form">
                <div className="tab_form policy">
                  <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                    <Form.Label className="m-0 pb-1">Support Request Form</Form.Label>


                    <div className="div_support d-flex" >
                      <div className="div_support_ w-50">
                        <div className="inner_ d-flex">
                          <div className="right w-50">
                            <Form.Label>Name:</Form.Label>
                          </div>
                          <div className="py-1 px-2 left ">
                            <div className="w-100">
                              <Form.Control type="text" />
                            </div>
                          </div>
                        </div>

                        <div className="inner_ d-flex">
                          <div className="right w-50">
                            <Form.Label>Company:</Form.Label>
                          </div>
                          <div className="py-1 px-2 left ">
                            <div className="w-100">
                              <Form.Control type="text" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="div_support_ w-50">
                        <div className="inner_ d-flex">
                          <div className="right w-25">
                            <Form.Label>Email:</Form.Label>
                          </div>
                          <div className="py-1 px-2 left ">
                            <div className="w-100">
                              <Form.Control type="text" />
                            </div>
                          </div>
                        </div>

                        <div className="inner_ d-flex">
                          <div className="right w-25">
                            <Form.Label>Phone:</Form.Label>
                          </div>
                          <div className="py-1 px-2 left ">
                            <div className="w-100">
                              <Form.Control type="text" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="inner_ d-flex">
                      <div className="right w-25">
                        <Form.Label>Subject:</Form.Label>
                      </div>
                      <div className="py-1 px-2 left ">
                        <Form.Control type="text" />
                        <div className="div_last_support">
                        </div>
                      </div>
                    </div>

                    <div className="inner_ d-flex">
                      <div className="right w-25">
                        <Form.Label>Message:</Form.Label>
                      </div>
                      <div className="py-1 px-2 left ">
                        <div >
                          <Form.Control type="text" style={{ height: "160px" }} />
                        </div>
                      </div>
                    </div>

                    <div className="inner_ d-flex">
                      <div className="right w-25">
                      </div>
                      <div className="py-1 px-2 left ">
                        <div>
                          <button type = "submit">Submit Request</button>
                        </div>
                      </div>
                    </div>
                  </Form.Group>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}

export default Support;