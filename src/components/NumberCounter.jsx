import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/slices/counterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="header-container">
            <div className="content">
                <h1>Мій додаток</h1>
                <h2>Redux counter</h2>
                <p>{count}</p>
                <div>
                    <button onClick={() => dispatch(increment())}>+</button>
                    <button onClick={() => dispatch(decrement())}>-</button>
                </div>
            </div>
        </div>

    )

}

export default Counter;

