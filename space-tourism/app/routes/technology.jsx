import { SpaceData } from "../components/contexts";
import { useContext, useState } from "react";

export default function Technology() {
  const { technology } = useContext(SpaceData);
  const [tech, setTech] = useState(technology[0].name);
  const data = technology?.find((techno) => techno.name === tech);
  return (
    <section>
      <h1>
        <span>03</span>Space Launch 101
      </h1>
      <div>
        <div>
          <div className="flex gap-2">
            <button onClick={() => setTech(technology[0].name)}>1</button>
            <button onClick={() => setTech(technology[1].name)}>2</button>
            <button onClick={() => setTech(technology[2].name)}>3</button>
          </div>
          <div>
            <p>The technology...</p>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
          </div>
        </div>
        <img src={data.images.portrait} alt={data.image} />
      </div>
    </section>
  );
}
