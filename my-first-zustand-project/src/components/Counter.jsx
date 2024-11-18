import { useEffect } from "react";
import useCounterStore from "../stores/useCounterStore.js";
import useAsyncAPI from "../stores/AsyncAPI.js";

// Accessing and modifying stores directly
const logCount = () => {
    const count = useCounterStore.getState().count;
    console.log("count",count);
}
const setCount = () => {
    useCounterStore.setState({count: 1});
}
const incrementCount = () => {
    useCounterStore.setState((state) => ({ count: state.count + 1 }));
  };



function Counter() {

  const todos = useAsyncAPI((state) => state.data);

  console.log(todos);
     
  const { count, increment, decrement, resetCount } = useCounterStore();

  //Selector Function
  //With a selector argument: You get only the selected piece of state or function, 
  //which optimizes performance by limiting re-renders to only relevant changes.
  const incrementAsync = useCounterStore((state) => state.incrementAsync);

  useEffect(() => {
    logCount();
}, [count]);

  return (
    <div className="flex items-center justify-center">
      <span className="text-4xl font-bold mr-4">{count}</span>

      <div className="flex flex-col">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
          onClick={increment}
        >
          Increment
        </button>

        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
          onClick={resetCount}
        >
          Reset
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
          onClick={incrementAsync}
        >
          increment Async
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
          onClick={setCount}
        >
          setCount
        </button>
      </div>
    </div>
  );
}

export default Counter;
