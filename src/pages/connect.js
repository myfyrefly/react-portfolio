import React from "react";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import InputGroup from "react-bootstrap/InputGroup";
// import Button from "react-bootstrap/Button";
import { Container, Typography } from "@material-ui/core";
import Resume from "./pdf/reactPortfolioResume.pdf";

function Connect() {
  return (
    <Container>
      <embed
        src={Resume}
        type="application/pdf"
        width="100%"
        height="500px"
      ></embed>
    </Container>
  );
}

export default Connect;
