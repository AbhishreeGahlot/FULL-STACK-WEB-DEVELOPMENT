import { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        fullName: "",
        userName: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData, [name]: value
        }));
    };

    return (
        <form>
            <label htmlFor="userName">User Name &nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input
                placeholder="enter user name"
                type="text"
                name="userName"
                value={formData.userName}
                id="userName"
                onChange={handleInputChange}
            />
            
        <br /><br />
            <label htmlFor="fullName">Full Name &nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input
                placeholder="enter full name"
                type="text"
                name="fullName"
                value={formData.fullName}
                id="fullName"
                onChange={handleInputChange}
            />
    <br /><br />
            <button type="submit">Submit</button>
        </form>
    );
}
