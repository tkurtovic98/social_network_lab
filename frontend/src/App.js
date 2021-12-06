import React, { useState, useEffect } from "react";
import "./App.css";
import { getToken } from "./source/TokenSource";
import { tokenInterceptor } from "./api/interceptor/TokenInterceptor";
import { Card } from "./components/card/Card";
import { cardElements } from "./components/elements/ElementsMapper";

function App() {
  const [token, setToken] = useState(getToken());

  useEffect(() => {
    tokenInterceptor();
  }, []);

  return (
    <div className="d-flex align-items-center App">
      <Card elements={cardElements(token, (newToken) => setToken(newToken))} />
    </div>
  );
}

export default App;
