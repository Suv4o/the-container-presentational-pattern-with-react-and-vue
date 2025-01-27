import { useState, useEffect } from "react";

function useData() {
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

    return { data };
}

export default useData;
