import { useParams } from "react-router-dom";
import statesData from "../dataset/data";
import { NavLink } from "react-router-dom";


export default function TempleDetails(){
    const {id} = useParams();

    const selectedState = statesData.find((state)=>state.id === id);


    return (<div className="temple-details-page">
        <nav className="nav-bar">
        <h1>{`Top 20 Temples of ${selectedState.state}`}</h1>
        <NavLink className="btn-b" to="/">
            <button className="back-btn">Back</button>
        </NavLink>
        </nav>

        {selectedState.temples.map((data)=>(
            <div className="temple-card">

            <h2>Temple Name :{data.name}</h2>
            <h2>Deity : {data.deity}</h2>
            <h2>Location : {data.location}</h2>
            <h2>Description : {data.description}</h2>

            </div>
        ))}
    </div>)

}