import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container} from "react-bootstrap";
import Marquee from "react-fast-marquee";
import UseTitle from "../../../Hooks/UseTitle";


const Header = () => {
  UseTitle('home')

  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div>
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={80}>
          I can be a React component, multiple React components, or just some
          text..........I can be a React component, multiple React components,
          or just some text
        </Marquee>
      </div>
    
    </Container>
  );
};

export default Header;
