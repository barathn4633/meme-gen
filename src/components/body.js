import React, { useState } from "react";
import memes from "./memesData";

export default function Body() {
  const [meme, setmeme] = useState({
    finput: "",
    sinput: "",
    ranimg: "http://i.imgflip.com/1bij.jpg",
  });
  function getMemeImage() {
    const memesArray = memes.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setmeme((oldmeme) => ({
      finput:"",
      sinput:"",    
      ranimg: url,
    }));
  }
  console.log(meme);
  

  function handleChange(event) {
    const { name, value } = event.target;
    setmeme((oldData) => ({
      ...oldData,
      [name]: value,
    }));
}

  return (
    <div>
      <main>
        <div action="" className="form">
          <input
            onChange={handleChange}
            className="finput"
            type="text"
            name="finput"
            id=""
            placeholder="enter the line"
            value={meme.finput}
          />
          <input
            onChange={handleChange}
            className="finput"
            type="text"
            name="sinput"
            placeholder="enter the second line"
            id=""
            value={meme.sinput}
          />
          <button onClick={getMemeImage} className="button" type="button">
            Click Me!
          </button>
        </div>
      </main>
      <div className="memediv">
        <img src={meme.ranimg} className="memeimg" alt="" />
        <h2 className="meme--text top" >{meme.finput}</h2>
        <h2 className="meme--text bottom"  >{meme.sinput}</h2>
      </div>
    </div>
  );
}
