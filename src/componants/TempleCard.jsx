import { Link } from "react-router-dom";

export default function TempleCard(props) {
  return (
    <Link to={`/state/${props.id}`}>
      <div className="card">
        <h2>{props.state}</h2>
      </div>
    </Link>
  );
}
