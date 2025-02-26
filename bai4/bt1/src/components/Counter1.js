import { useCounter } from "./Counter";

const Counter1 = () => {
    const [count, increment] = useCounter(1);
    return (
        <div>
            <h2>Counter 1: {count}</h2>
            <button onClick={increment}>Add 1</button>
        </div>
    );
};

export default Counter1;