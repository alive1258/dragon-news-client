import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import UseTitle from "../../../Hooks/UseTitle";

const Category = () => {
  const { id } = useParams();
  UseTitle('category')
  const categoryNews = useLoaderData();
  return (
    <div>
      {id && <h2>Category:{categoryNews.length}</h2>}
      <div>
        {categoryNews.map((news) => (
          <NewsCard key={news._id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
