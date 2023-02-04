import { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "./components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";

export default function Edit() {
  /* Prendiamo i parametri dalla barra di ricerca */
  const [params] = useSearchParams();
  /* Url del meme */
  const memeUrl = params.get("url");
  const [count, setCount] = useState(0);
  const [editMode, setEditMode] = useState(false);

  const handleToggle = (e) => {
    setEditMode(!editMode);
  };

  /* Quando aumenta count aggiungiamo il testo ** */
  const addText = () => {
    setCount(count + 1);
  };

  /* Quando diminuisce lo rimuoviamo */
  const deleteText = () => {
    setCount(count - 1);
  };

  /* Per salvare l'immagine */
  const memeRef = createRef();

  return (
    <div className="container">
      <div ref={memeRef}>
        <img src={memeUrl} alt="meme" />
        <div className="meme-text-div">
          {/* ** */}
          {Array(count)
            .fill(0)
            .map(() => (
              <Text editMode={editMode} />
            ))}
        </div>
      </div>
      <div className="editButtons">
        <button className="add" onClick={addText}>
          Aggiungi
        </button>
        {count > 0 && (
          <button className="delete" onClick={deleteText}>
            Elimina
          </button>
        )}
        <button className="save" onClick={() => exportComponentAsJPEG(memeRef)}>
          Salva
        </button>
        <button onClick={handleToggle}>&#8801;</button>
      </div>
    </div>
  );
}
