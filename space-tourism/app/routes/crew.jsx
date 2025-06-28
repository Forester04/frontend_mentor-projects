import { useContext, useState } from "react";
import { SpaceData } from "../components/contexts";

export default function Crew() {
  const { crew } = useContext(SpaceData);
  const [crewName, setCrewName] = useState(crew[0].name);
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext(index) {
    if (index < Object.keys(crew).length) {
      index += 1;
    }
    setCurrentIndex(index);
    setCrewName(crew[currentIndex].name);
  }

  function handlePreviours(index) {
    if (index > 0) {
      index -= 1;
    }
    setCurrentIndex(index);
    setCrewName(crew[currentIndex].name);
  }

  const data = crew?.find((crews) => crews.name === crewName);

  return (
    <section>
      <h1>
        <span>02</span>Meet Your Crew
      </h1>
      <div>
        <div>
          <p>{data.role}</p>
          <h1>{data.name}</h1>
          <p>{data.bio}</p>
          <div className="flex gap-2">
            <button onClick={() => handlePreviours(currentIndex)}>0</button>
            <button onClick={() => setCrewName(crew[0].name)}>1</button>
            <button onClick={() => setCrewName(crew[1].name)}>2</button>
            <button onClick={() => setCrewName(crew[2].name)}>3</button>
            <button onClick={() => setCrewName(crew[3].name)}>4</button>
            <button onClick={() => handleNext(currentIndex)}>0</button>
          </div>
        </div>
        <img src={data.images.webp} alt={data.name} />
      </div>
    </section>
  );
}
