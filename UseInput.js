// 예시

import { useState } from "react";
import "./styles.css";

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
        const {
            target: { value },
        } = e;
        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
};

const App = () => {
    const maxLen = (value) => value.length <= 10;
    const name = useInput("Mr.", maxLen);
    const email = useInput("@");
    return (
        <div>
            <div>hello world</div>
            <input placeholder="what's your name?" {...name} />
            <input placeholder="email" {...email} />
        </div>
    );
};

export default App;
