import statesData from "../dataset/data";
import TempleCard from "./TempleCard";

export default function Home() {
  return (
    <div className="container">
      <h1>Indian Temples Details</h1>

      <div className="state-cards">
        {statesData.map((state) => (
          <TempleCard
            key={state.id}
            id={state.id}
            state={state.state}
          />
        ))}
      </div>
    </div>
  );
}
