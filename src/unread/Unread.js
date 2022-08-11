import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBSwitch,
  MDBTypography,
} from "mdb-react-ui-kit";
import "./unread.css";

export default function Unread() {
  return (
    <section style={{ backgroundColor: "#f7f6f6" }}>
      <MDBContainer className="py-5 text-dark" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="10" xl="8">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <MDBTypography tag="h4" className="text-dark mb-0">
                Unread comments (4)
              </MDBTypography>
              <MDBCard>
                <MDBCardBody className="p-2 d-flex align-items-center">
                  <MDBTypography
                    tag="h6"
                    className="text-primary fw-bold small mb-0 me-1"
                  >
                    Comments "ON"
                  </MDBTypography>
                  <MDBSwitch defaultChecked id="flexSwitchCheckChecked" />
                </MDBCardBody>
              </MDBCard>
            </div>

            <MDBCard className="mb-3">
              <MDBCardBody>
                <div className="d-flex flex-start">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp"
                    alt="avatar"
                    width="40"
                    height="40"
                  />

                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <MDBTypography
                        tag="h6"
                        className="text-primary fw-bold mb-0"
                      >
                        lara_stewart
                        <span className="text-dark ms-2">
                          Hmm, This poster looks cool
                        </span>
                      </MDBTypography>
                      <p className="mb-0">2 days ago</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="small mb-0" style={{ color: "#aaa" }}>
                        <a href="#!" className="link-grey">
                          Remove
                        </a>{" "}
                        •
                        <a href="#!" className="link-grey">
                          Reply
                        </a>{" "}
                        •
                        <a href="#!" className="link-grey">
                          Translate
                        </a>
                      </p>
                      <div className="d-flex flex-row">
                        <MDBIcon fas icon="star text-warning me-2" />
                        <MDBIcon
                          far
                          icon="check-circle"
                          style={{ color: "#aaa" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-3">
              <MDBCardBody>
                <div className="d-flex flex-start">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
                    alt="avatar"
                    width="40"
                    height="40"
                  />

                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <MDBTypography
                        tag="h6"
                        className="text-primary fw-bold mb-0"
                      >
                        the_sylvester_cat
                        <span className="text-dark ms-2">
                          Loving your work and profile!
                        </span>
                      </MDBTypography>
                      <p className="mb-0">3 days ago</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="small mb-0" style={{ color: "#aaa" }}>
                        <a href="#!" className="link-grey">
                          Remove
                        </a>{" "}
                        •
                        <a href="#!" className="link-grey">
                          Reply
                        </a>{" "}
                        •
                        <a href="#!" className="link-grey">
                          Translate
                        </a>
                      </p>
                      <div className="d-flex flex-row">
                        <MDBIcon
                          far
                          icon="check-circle text-primary"
                          style={{ color: "#aaa" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-3">
              <MDBCardBody>
                <div className="d-flex flex-start">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
                    alt="avatar"
                    width="40"
                    height="40"
                  />

                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <MDBTypography
                        tag="h6"
                        className="text-primary fw-bold mb-0"
                      >
                        mindyy_def
                        <span className="text-dark ms-2">
                          Really cool Which filter are you using?
                        </span>
                      </MDBTypography>
                      <p className="mb-0">3 days ago</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="small mb-0" style={{ color: "#aaa" }}>
                        <a href="#!" className="link-grey">
                          Remove
                        </a>{" "}
                        •
                        <a href="#!" className="link-grey">
                          Reply
                        </a>{" "}
                        •
                        <a href="#!" className="link-grey">
                          Translate
                        </a>
                      </p>
                      <div className="d-flex flex-row">
                        <MDBIcon
                          fas
                          icon="user-plus"
                          style={{ color: "#aaa" }}
                        />
                        <MDBIcon
                          fas
                          icon="star mx-2"
                          style={{ color: "#aaa" }}
                        />
                        <MDBIcon
                          far
                          icon="check-circle text-primary"
                          style={{ color: "#aaa" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-3">
              <MDBCardBody>
                <div className="d-flex flex-start">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
                    alt="avatar"
                    width="40"
                    height="40"
                  />

                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <MDBTypography
                        tag="h6"
                        className="text-primary fw-bold mb-0"
                      >
                        t_anya
                        <span className="text-dark ms-2">
                          <span className="text-primary">@macky_lones</span>
                          <span className="text-primary">
                            @rashida_jones
                          </span>{" "}
                          Thanks
                        </span>
                      </MDBTypography>
                      <p className="mb-0">4 days ago</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="small mb-0" style={{ color: "#aaa" }}>
                        <a href="#!" className="link-grey">
                          Remove
                        </a>{" "}
                        •
                        <a href="#!" className="link-grey">
                          Reply
                        </a>{" "}
                        •
                        <a href="#!" className="link-grey">
                          Translate
                        </a>
                      </p>
                      <div className="d-flex flex-row">
                        <MDBIcon
                          far
                          icon="check-circle text-primary"
                          style={{ color: "#aaa" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
