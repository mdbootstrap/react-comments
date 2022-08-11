import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/basic">
        <MDBBtn className="m-3">
          Basic
        </MDBBtn>
      </Link>
      <Link to="/nested">
        <MDBBtn className="m-3">
          Nested comments
        </MDBBtn>
      </Link>
      <Link to="/comment-card">
        <MDBBtn className="m-3">
          Comment Card
        </MDBBtn>
      </Link>
      <Link to="/recent-comments">
        <MDBBtn className="m-3">
          Recent Comments
        </MDBBtn>
      </Link>
      <Link to="/unread">
        <MDBBtn className="m-3">
          Unread
        </MDBBtn>
      </Link>
      <Link to="/column">
        <MDBBtn className="m-3">
          Column
        </MDBBtn>
      </Link>
      <Link to="/add">
        <MDBBtn className="m-3">
          Add Comment
        </MDBBtn>
      </Link>
    </MDBContainer>
  );
}