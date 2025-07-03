import React, { useEffect, useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import { PartList } from "./components/PartList";
const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  hat: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

const partConfig = [
  { label: "Body", key: "body", path: "body" },
  { label: "Eyes", key: "eyes", path: "eyes", zoom: 2.5, top: "35px" },
  { label: "Hair", key: "hair", path: "hair" },
  { label: "Mouth", key: "mouth", path: "mouths", zoom: 2 },
  { label: "Eyebrows", key: "eyebrows", path: "eyebrows" },
  { label: "Glasses", key: "glasses", path: "accessories/glasses" },
  { label: "Clothing (L1)", key: "clothing1", path: "clothes/layer_1" },
  { label: "Clothing (L2)", key: "clothing2", path: "clothes/layer_2" },
  {
    label: "Clothing (L3)",
    key: "clothing3",
    path: "clothes/layer_3",
    zoom: 2,
    top: "-15px",
  },
];

function App() {
  const [parts, setParts] = useState({
    body: 0,
    eyes: 0,
    hair: 0,
    mouth: 0,
    eyebrows: 0,
    hat: 0,
    glasses: 0,
    clothing1: 0,
    clothing2: 0,
    clothing3: 0,
  });
  const randomize = () => {
    const newParts = {};
    Object.keys(total).forEach((key) => {
      newParts[key] = Math.floor(Math.random() * total[key]);
    });
    setParts(newParts);
  };

  useEffect(() => {
    randomize();
  }, []);

  return (
    <div className="App">
      <div className="title">CHARACTER</div>
      <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
      <div className="divider"></div>
      <div className="avatar-group gap-30">
        <div>
          <div className="avatar-wrapper">
            <Avatar {...parts} eyebrow={parts.eyebrows} />
            <div className="text-center">
              <button className="button" onClick={randomize}>
                Randomize!
              </button>
            </div>
          </div>
        </div>
        <div>
          {partConfig.map((config) => (
            <div className="list-section" key={config.key}>
              <h2>{config.label}</h2>
              <PartList
                total={total[config.key]}
                path={config.path}
                set={(value) =>
                  setParts((prevParts) => ({
                    ...prevParts,
                    [config.key]: value,
                  }))
                }
                selected={parts[config.key]}
                zoom={config.zoom}
                top={config.top}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
