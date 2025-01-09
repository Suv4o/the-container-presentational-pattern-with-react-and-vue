import { useState, useEffect, Children, cloneElement } from "react";

function DataContainer({ children }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setData({
                name: "John Doe",
                age: 30,
                email: "john.doe@example.com",
                address: "123 Main St",
                city: "Anytown",
                state: "CA",
                zip: "12345",
                phone: "555-1234",
                occupation: "Software Developer",
                company: "Tech Corp",
                hobbies: ["reading", "gaming", "hiking"],
                website: "https://johndoe.com",
            });
        }, 1000);
    }, []);

    return <>{children && Children.map(children, (child) => cloneElement(child, { data }))}</>;
}

export default DataContainer;
