import { useState, useEffect } from "react";
import axios from "axios";

import { IFinding } from "../../types/securityResult";
import classes from "./FindingList.module.css";

interface IFindingResponse extends IFinding {
  _id: string;
}

interface IProps {
  resultId: string;
  onBack: () => void;
}

const FindingList: React.FC<IProps> = ({ resultId, onBack }) => {
  const [list, setList] = useState<IFindingResponse[]>([]);

  useEffect(() => {
    const fetchFindings = async () => {
      const { data } = await axios.get(
        `http://localhost:4000/securityResults/findings/${resultId}`
      );
      setList(data.findings);
    };

    fetchFindings();
  }, [resultId]);

  return (
    <div>
      <button onClick={onBack}>Back</button>
      <div>
        {list.map(({ _id, ruleId, location, metadata }) => (
          <div key={_id} className={classes.finding}>
            <div>Rule Id: {ruleId}</div>
            <div>Description: {metadata.description}</div>
            <div>Severity: {metadata.severity}</div>
            <div>
              Path {location.path} at line: {location.positions.begin.line}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindingList;
