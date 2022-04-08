import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const update = useCallback(() => {
    console.log("count is : " + count);
    setCount((count) => count + 1);
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={update}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
