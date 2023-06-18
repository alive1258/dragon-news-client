import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categoris, setCategoris] = useState([]);

  useEffect(() => {
    fetch("https://daragon-server-alive1258.vercel.app/catagory")
      .then((res) => res.json())
      .then((data) => setCategoris(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h4>All Category</h4>
      <div className="ps-4 ">
        {categoris.map((category) => (
          <p key={category.id}>
            <Link to={`/catagory/${category.id}`} className="text-decoration-none text-black">{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
