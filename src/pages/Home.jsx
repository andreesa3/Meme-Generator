import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Home() {
  /* Memes State */
  const [memes, setMemes] = useState([]);

  const navigate = useNavigate();

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
            <LazyLoadImage
              src={meme.url}
              alt={meme.alt}
              className="meme-img"
            />
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
