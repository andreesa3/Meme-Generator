import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  /* Memes State */
  const [memes, setMemes] = useState([]);

  const navigate = useNavigate();

  /* Eseguiamo lo shuffle dell'array prima di riportarlo nel body */
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        const memeArray = data.data.memes;
        setMemes(memeArray);
      });
  }, []);

  return memes.length ? (
    <div className="container">
      <div className="allMemes">
        {memes.map((meme) => (
          <div className="meme-box" key={meme.id}>
            <div
              className="meme-img"
              style={{
                background: `url(${meme.url}) no-repeat center center / cover`,
              }}
            ></div>
            <button
              className="edit"
              onClick={(e) => navigate(`/edit?url=${meme.url}`)}
            >
              Modifica
            </button>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
}
