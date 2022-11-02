import { useState } from "react";

import Form from "./containers/Form/Form";
import ResultList from "./containers/ResultList/ResultList";
import classes from "./App.module.css";

function App() {
  const [containerShow, setContainerShow] = useState("form");

  return (
    <div className={classes.app}>
      <nav className={classes.nav}>
        <span onClick={() => setContainerShow("form")}>Add result</span>
        <span onClick={() => setContainerShow("list")}>Result list</span>
      </nav>

      <div className={classes.container}>
        {containerShow === "form" && <Form />}
        {containerShow === "list" && <ResultList />}
      </div>
    </div>
  );
}

export default App;
