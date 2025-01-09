import "./index.css";

function Card({ data }) {
    return (
        <div className="card">
            <p>Email: {data?.email}</p>
            <p>Address: {data?.address}</p>
            <p>City: {data?.city}</p>
            <p>State: {data?.state}</p>
            <p>Zip: {data?.zip}</p>
            <p>Phone: {data?.phone}</p>
            <p>Occupation: {data?.occupation}</p>
            <p>Company: {data?.company}</p>
            <p>Hobbies: {data?.hobbies?.join(", ")}</p>
            <p>Website: {data?.website}</p>
        </div>
    );
}

export default Card;
