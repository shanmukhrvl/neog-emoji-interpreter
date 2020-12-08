import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "👶": "Baby",
  "👼": "Baby Angel",
  "🎅": "Santa Claus",
  "🤶": "Mrs. Claus",
  "🧝‍♂️": "Man Elf",
  "🧝‍♀️": "Woman Elf",
  "👪": "Family",
  "🦌": "Deer",
  "🍪": "Cookie",
  "🥛": "Glass of Milk",
  "🍷": "Wine Glass",
  "🍴": "Fork and Knife",
  "⛪": "Church",
  "🌟": "Glowing Star",
  "❄️": "Snowflake",
  "☃️": "Snowman",
  "🔥": "Fire",
  "🎄": "Christmas Tree",
  "🎁": "Wrapped Gift",
  "🧦": "Socks",
  "🔔": "Bell",
  "🕯️": "Candle"
};

const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("no emoji selected");
  const [emoji, setEmoji] = useState("👀");

  function emojiInputHandler(event) {
    let userInput = event.target.value;

    let meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setEmoji(userInput);
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    let meaning = emojiDictionary[emoji];
    setEmoji(emoji);
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Christmas Emoji Interpreter</h1>

      <input
        onChange={emojiInputHandler}
        placeholder="Enter any Christmas Emoji"
      />

      <h2>
        {emoji}: {meaning}
      </h2>

      <h3> emojis we know </h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.5rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
