export interface IFinding {
  type: string;
  ruleId: string;
  location: {
    path: string;
    positions: {
      begin: {
        line: number;
      };
    };
  };
  metadata: {
    description: string;
    severity: string;
  };
}

export interface ISecurityResult {
  _id: string;
  status: "Queued" | "In Progress" | "Success" | "Failure";
  repositoryName: string;
  queuedAt: string;
  scanningAt: string;
  finishedAt: string;
  findings: IFinding[];
}
