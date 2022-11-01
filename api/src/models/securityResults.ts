import { Schema, Document, model, Types } from "mongoose";

import { IFinding } from "./findings";

interface ISecurityResult extends Document {
  status: "Queued" | "In Progress" | "Success" | "Failure";
  repositoryName: string;
  findings: Types.Array<IFinding>;
  queuedAt: Date;
  scanningAt: Date;
  finishedAt: Date;
}

const securityResultSchema = new Schema<ISecurityResult>({
  status: String,
  repositoryName: String,
  findings: [
    {
      type: Types.ObjectId,
      ref: "Finding",
    },
  ],
  queuedAt: Date,
  scanningAt: Date,
  finishedAt: Date,
});

const SecurityResult = model("SecurityResult", securityResultSchema);

export default SecurityResult;
