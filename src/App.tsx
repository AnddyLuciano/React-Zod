import { FormEvent, useState } from "react";
import "./App.css";
import { UserSchema } from "./UserSchema";
import { z } from "zod";

function App() {
    const [data, setData] = useState<UserType>({
        username: "",
        email: "",
        isProgrammer: true,
        age: new Date(),
    });
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!UserSchema.safeParse(data)) {
            return console.log("false");
        }
        console.log("true");
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="text-test">text test</label>
                <input
                    type="text"
                    name="text-test"
                    id="text-test"
                    className="border border-black"
                    onChange={(e) => setData({ ...data, username: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="mail-test">mail test</label>
                <input
                    type="email"
                    name="mail-test"
                    id="mail-test"
                    className="border border-black"
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />
            </div>
            <input type="submit" value="Send" className="bg-gray-400" />
        </form>
    );
}

export default App;

type UserType = z.infer<typeof UserSchema>;
