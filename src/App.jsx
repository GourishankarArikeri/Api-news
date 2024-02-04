import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import News from "./news";
import "./App.css";

function App() {
  const [articles, setarticles] = useState([]);
  const [category, setcategory] = useState(" india");

  useEffect(() => {
    Axios.get(
      `https://newsapi.org/v2/everything?q=${category}&from=2024-01-31&sortBy=publishedAt&apiKey=47a1354f07fe496ba75377bb39ec260e`
    )

      .then((response) => {
        setarticles(response.data.articles);
        console.log(response.data.articles);
      })
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <>
      <div>
        <div className="navbar">
          <div className="logo">WorldNews</div>
          <input
            type="text"
            onChange={(e) => {
              if (e.target.value !== "") {
                setcategory(e.target.value);
              } else {
                setcategory("ind");
              }
            }}
            className="search"
            placeholder="search news"
          />
        </div>
      </div>

      <section className="neb">
        {articles.map((article) => {
          return <News key={article.id} article={article} />;
        })}
      </section>
    </>
  );
}

export default App;
