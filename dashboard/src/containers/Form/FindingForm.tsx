import { useState, useEffect } from "react";

import classes from "./FindingForm.module.css";
import { IFinding } from "../../types/securityResult";

interface IProps {
  id: string;
  onChange: (id: string, value: IFinding) => void;
}

const FindingForm: React.FC<IProps> = ({ id, onChange }) => {
  const [type, setType] = useState("");
  const [ruleId, setRuleId] = useState("");
  const [path, setPath] = useState("");
  const [line, setLine] = useState(0);
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("");

  useEffect(() => {
    onChange(id, {
      type,
      ruleId,
      location: { path, positions: { begin: { line } } },
      metadata: { description, severity },
    });
  }, [type, ruleId, path, line, description, severity, onChange, id]);

  return (
    <div>
      <div className={classes.inputWrapper}>
        <div>Type:</div>
        <input
          type="text"
          placeholder="Type"
          onChange={(e) => setType(e.target.value)}
          value={type}
        />
      </div>
      <div className={classes.inputWrapper}>
        <div>Rule Id:</div>
        <input
          type="text"
          placeholder="Rule Id"
          onChange={(e) => setRuleId(e.target.value)}
          value={ruleId}
        />
      </div>
      <div className={classes.inputWrapper}>
        <div>Path:</div>
        <input
          type="text"
          placeholder="Path"
          onChange={(e) => setPath(e.target.value)}
          value={path}
        />
      </div>
      <div className={classes.inputWrapper}>
        <div>Line:</div>
        <input
          type="number"
          placeholder="Line"
          onChange={(e) => setLine(Number(e.target.value))}
          value={line}
          min={0}
        />
      </div>
      <div className={classes.inputWrapper}>
        <div>Description:</div>
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <div className={classes.inputWrapper}>
        <div>Severity:</div>
        <input
          type="text"
          placeholder="Severity"
          onChange={(e) => setSeverity(e.target.value)}
          value={severity}
        />
      </div>
    </div>
  );
};
export default FindingForm;
