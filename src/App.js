import { useDispatch, useSelector } from "react-redux";
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="App">
      <NavigationHeader />

      <div>Count: {count}</div>

      <button onClick={() => dispatch(increaseCounter())}>
        Increase Count
      </button>

      <button onClick={() => dispatch(decreaseCounter())}>
        Decrease Count
      </button>
    </div>
  );
};

export default App;
