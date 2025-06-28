import { useContext, useState } from "react";
import { SpaceData } from "../components/contexts";

export default function Destinations() {
  const { destinations } = useContext(SpaceData);
  const [destination, setDestination] = useState(destinations[0].name);

  const data = destinations?.find((dest) => dest.name === destination);
  return (
    <section>
      <h1>
        <span>01</span>Pick your destination
      </h1>
      <div>
        <img src={data.images.webp} alt={data.name} />
        <div>
          <div className="flex gap-2">
            <button onClick={() => setDestination(destinations[0].name)}>
              Moon
            </button>
            <button onClick={() => setDestination(destinations[1].name)}>
              Mars
            </button>
            <button onClick={() => setDestination(destinations[2].name)}>
              Europa
            </button>
            <button onClick={() => setDestination(destinations[3].name)}>
              Titan
            </button>
          </div>
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <div>
            <div>
              <p>Avg. Distance</p>
              <p>{data.distance}</p>
            </div>
            <div>
              <p>Est.travel time</p>
              <p>{data.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
