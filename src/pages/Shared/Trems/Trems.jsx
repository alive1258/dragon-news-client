import React from "react";
import { Link } from "react-router-dom";

const Trems = () => {
  return (
    <div>
      <h2> trems and condition</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        sapiente vel explicabo sed labore fugiat sequi reprehenderit veniam
        eligendi, assumenda voluptas dolore harum! Quisquam aut harum magni
        enim? Voluptatibus, voluptatum?
      </p>
      <p>
        go back to <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Trems;
