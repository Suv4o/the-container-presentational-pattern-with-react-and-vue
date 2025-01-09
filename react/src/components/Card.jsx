import "./index.css";

function Card({ data }) {
    return (
        <div className="card">
            <h2>{data?.name}</h2>
            <p>Age: {data?.age}</p>
        </div>
    );
}

export default Card;
