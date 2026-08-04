import { useState } from "react";

const StringState =()=>{
    const [name,setName] = useState<string>("");
    return(
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <h2>Hello, {name||"Guest"} 👋</h2>

        </div>
    );

};
export default StringState;