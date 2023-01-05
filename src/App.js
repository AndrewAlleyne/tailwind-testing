import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Fetch } from "./Fetch";

function App() {
  const [fetched, setFetching] = useState(false);
  return (
    <div className='flex  justify-center align-center '>
      <Card
        fetched={fetched}
        setFetching={setFetching}
      >
        <p> I am child component!</p>
      </Card>
      <Fetch isFetching={setFetching} />
    </div>
  );
}

export default App;
