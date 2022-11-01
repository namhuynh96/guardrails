import { Schema, Document, model } from "mongoose";

export interface IFinding extends Document {
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

const findingSchema = new Schema<IFinding>({
  type: String,
  ruleId: String,
  location: {
    path: String,
    positions: {
      begin: {
        line: Number,
      },
    },
  },
  metadata: {
    description: String,
    severity: String,
  },
});

const Finding = model("Finding", findingSchema);

export default Finding;
