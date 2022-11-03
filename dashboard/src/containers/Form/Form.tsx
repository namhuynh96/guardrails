import { useState, useCallback } from "react";
import axios from "axios";

import FindingFormContainer from "./FindingFormContainer";
import { IFinding } from "../../types/securityResult";
import classes from "./Form.module.css";

const Form = () => {
  const [status, setStatus] = useState("Queued");
  const [repositoryName, setRepositoryName] = useState("");
  const [queuedAt, setQueuedAt] = useState("");
  const [scanningAt, setScanningAt] = useState("");
  const [finishedAt, setFinishedAt] = useState("");
  const [findings, setFindings] = useState<IFinding[]>([]);
  const [message, setMessage] = useState("");

  const handleUpdateFindings = useCallback((data: IFinding[]) => {
    setFindings(data);
  }, []);

  const handleSubmit = async () => {
    const data = {
      status,
      repositoryName,
      queuedAt,
      scanningAt,
      finishedAt,
      findings,
    };

    try {
      await axios.post("http://localhost:4000/securityResult", data);
      setMessage("Added successfully");
    } catch (error) {
      setMessage("Error happened");
    }

    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div>
      <div className={classes.inputWrapper}>
        <div>Status:</div>
        <select onChange={(e) => setStatus(e.target.value)} value={status}>
          <option value="Queued">Queued</option>
          <option value="In Progress">In Progress</option>
          <option value="Success">Success</option>
          <option value="Failure">Failure</option>
        </select>
      </div>

      <div className={classes.inputWrapper}>
        <div>Repository Name:</div>
        <input
          type="text"
          placeholder="Repository Name"
          onChange={(e) => setRepositoryName(e.target.value)}
          value={repositoryName}
        />
      </div>

      <div className={classes.inputWrapper}>
        <FindingFormContainer onChange={handleUpdateFindings} />
      </div>

      <div className={classes.inputWrapper}>
        <div>Queued At:</div>
        <input
          type="text"
          placeholder="mm/dd/yyyy hh:mm"
          onChange={(e) => setQueuedAt(e.target.value)}
          value={queuedAt}
        />
      </div>

      <div className={classes.inputWrapper}>
        <div>Scanning At:</div>
        <input
          type="text"
          placeholder="mm/dd/yyyy hh:mm"
          onChange={(e) => setScanningAt(e.target.value)}
          value={scanningAt}
        />
      </div>

      <div className={classes.inputWrapper}>
        <div>Finished At:</div>
        <input
          type="text"
          placeholder="mm/dd/yyyy hh:mm"
          onChange={(e) => setFinishedAt(e.target.value)}
          value={finishedAt}
        />
      </div>

      <button onClick={handleSubmit}>Submit</button>
      <div>{message}</div>
    </div>
  );
};

export default Form;
