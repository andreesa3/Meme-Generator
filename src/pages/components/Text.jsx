import { useState } from "react";
import Draggable from "react-draggable";

export default function Text(props) {
  const [val, setVal] = useState(`Clicca ≡`);
  const [size, setSize] = useState(22);

  const editMode = props.editMode;

  const handleText = (e) => {
    setVal(e.target.value);
  };
  const handleChange = (e) => {
    if (e.target.value > 64) {
      alert('Inserire un numero da 12 a 64')
    } else {
      setSize(e.target.value);
    }
  };

  return (
    /* Cosí possiamo spostare il testo */
    <div>
      {editMode ? (
        <div>
          <p className="advice">*Ctrl + A per selezionare tutto il testo</p>
          <input type="text" value={val} onChange={handleText} />
          <input
            className="font-input"
            type="number"
            value={size}
            onChange={handleChange}
          />
        </div>
      ) : (
        <Draggable>
          <h3 className="meme-text" style={{ fontSize: `${size}px` }}>
            {val}
          </h3>
        </Draggable>
      )}
    </div>
  );
}
