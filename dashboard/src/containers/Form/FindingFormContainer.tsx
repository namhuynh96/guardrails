import { useState, useEffect, useCallback } from "react";
import { nanoid } from "nanoid";

import FindingForm from "./FindingForm";
import { IFinding } from "../../types/securityResult";
import classes from "./FindingFormContainer.module.css";

interface IProps {
  onChange: (value: IFinding[]) => void;
}

const FindingFormContainer: React.FC<IProps> = ({ onChange }) => {
  const initialFindingValue = {
    type: "",
    ruleId: "",
    location: {
      path: "",
      positions: {
        begin: {
          line: 0,
        },
      },
    },
    metadata: {
      description: "",
      severity: "",
    },
  };

  const [findings, setFindings] = useState<{ id: string; data: IFinding }[]>([
    {
      id: nanoid(),
      data: initialFindingValue,
    },
  ]);

  useEffect(() => {
    const findingsData = findings.map((value) => value.data);
    onChange(findingsData);
  }, [findings, onChange]);

  const handleAddMoreFinding = () => {
    setFindings((currentValue) => {
      const updated = currentValue.concat({
        id: nanoid(),
        data: initialFindingValue,
      });
      return updated;
    });
  };

  const handleUpdateFindings = useCallback(
    (findingId: string, data: IFinding) => {
      setFindings((currentValue) => {
        const updated = [...currentValue];
        const index = updated.findIndex((value) => value.id === findingId);
        if (index !== -1) {
          updated[index].data = data;
        }

        return updated;
      });
    },
    []
  );

  return (
    <div>
      {findings.map((value) => (
        <div key={value.id} className={classes.findingForm}>
          <FindingForm id={value.id} onChange={handleUpdateFindings} />
        </div>
      ))}

      <button onClick={handleAddMoreFinding}>Add more finding</button>
    </div>
  );
};

export default FindingFormContainer;
