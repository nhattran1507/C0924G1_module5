import { useState } from "react";

const useCounter = (addAmount) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount((prevCount) => prevCount + addAmount);
    };
    return [count, increment];
};

export { useCounter };