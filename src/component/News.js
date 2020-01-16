import React from "react";

const News = ({ news }) => {
  console.log(news);
  return (
    <div>
      {news.map(({ title, created_at, author }) => {
        return (
          <div>
            {title}
            {created_at}
            {author}
          </div>
        );
      })}
    </div>
  );
};

export default News;
