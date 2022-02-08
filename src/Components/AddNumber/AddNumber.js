import React, {useState} from "react";

function AddNumber() {
    const[count, setCount] = useState(0);

    // const Add = () => {
    //     setCount(count === 5 ? count : count +1)
    // }

    return(
        <div>
            <p>
                Вы кликнули {count} раз
            </p>
            <button onClick={() => setCount(count + 1)}>
                Плюс
            </button>
            <button onClick={() => setCount(count - 1)}>
                Минус
            </button>
            <button onClick={() => setCount(count * count)}>
                Умножение
            </button>
        </div>
    )
}

export default AddNumber;