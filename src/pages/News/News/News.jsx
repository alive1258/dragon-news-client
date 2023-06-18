import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInSights from "../EditorsInsights/EditorsInSights";
import UseTitle from "../../../Hooks/UseTitle";
import MyLocation from "../../../Component/MyLocation";

const News = () => {
  const news = useLoaderData();
  UseTitle('News')
  const { _id, title, details, image_url, category_id } = news;
  return (
<div>
  <h3>sdlkf</h3>
  <MyLocation></MyLocation>
<Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/catagory/${category_id}`}>
          <Button variant="primary"><FaArrowLeft/> All news category</Button>
        </Link>
      </Card.Body>
    </Card>
    <EditorsInSights ></EditorsInSights>
</div>
  );
};

export default News;
