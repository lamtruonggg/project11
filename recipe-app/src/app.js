import React, { useState } from "react";
import Axious from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./components/Recipe";
import "./app.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState([]);

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const APP_ID = "295fa32a";
  const APP_KEY = "04a1adb0a39c8315b4f760675f1733c4";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const getData = async () => {
    const result = await Axious.get(url);
    setRecipe(result.data.hits);
    console.log(result);
    setQuery("");
  };

  const Submit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div>
      <div className="top">
        <div className="toplogo ">
          <h2 className="logo">bro</h2>
        </div>
      </div>

      <div className="container">
        <div className="all">
          <div className="search">
            <h2 className="title" onClick={getData}>
              Find Your Ingredients
            </h2>
          </div>

          <form className="search-box" onSubmit={Submit}>
            <input
              className="input"
              type="text"
              placeholder="Enter any sort of food to see its magic:)"
              autoComplete="off"
              onChange={onChange}
              value={query}
            />
            <button
              name="submit_button"
              className="button"
              type="submit"
              value="Submit"
            >
              Submit
            </button>
          </form>

          <div className="Search-result">
            <h2 className="title">Your Result:</h2>
            <div>
              <div className="food-name">ƒ
                {recipe !== [] &&
                  recipe.map((recipe) => (
                    <Recipe key={uuidv4()} recipe={recipe} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
