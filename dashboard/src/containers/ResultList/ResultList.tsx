import { useState, useEffect } from "react";
import { Label } from "semantic-ui-react";
import axios from "axios";

import { ISecurityResult } from "../../types/securityResult";
import classes from "./ResultList.module.css";
import FindingList from "./FindingList";

const ResultList = () => {
  const [list, setList] = useState<ISecurityResult[]>([]);
  const [resultSelectedId, setResultSelectedId] = useState<string | null>();

  useEffect(() => {
    const fetchResults = async () => {
      const { data } = await axios.get("http://localhost:4000/securityResults");
      setList(data.securityResults);
    };

    fetchResults();
  }, []);

  return (
    <div>
      {!!resultSelectedId ? (
        <FindingList
          resultId={resultSelectedId}
          onBack={() => setResultSelectedId(null)}
        />
      ) : (
        list.map(
          ({
            _id,
            repositoryName,
            status,
            findings,
            queuedAt,
            scanningAt,
            finishedAt,
          }) => (
            <div
              key={_id}
              className={classes.result}
              onClick={() => setResultSelectedId(_id)}
            >
              <div>Repository name: {repositoryName}</div>
              <div>Scan status: {status}</div>
              <div>
                <Label>{findings.length}</Label>
              </div>
              {status === "Queued" && <div>{queuedAt}</div>}
              {status === "In Progress" && <div>{scanningAt}</div>}
              {status === "Success" && <div>{finishedAt}</div>}
            </div>
          )
        )
      )}
    </div>
  );
};

export default ResultList;
