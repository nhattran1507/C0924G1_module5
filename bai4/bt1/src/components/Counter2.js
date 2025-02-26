import {useCounter} from "./Counter";

const Counter2 = () => {
    const [count, increment] = useCounter(2);
    return (
        <div>
            <h2>Counter 2: {count}</h2>
            <button onClick={increment}>Add 2</button>
        </div>
    );
};

export default Counter2;