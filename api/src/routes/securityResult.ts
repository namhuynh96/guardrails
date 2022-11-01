import { Router } from "express";

import SecurityResult from "../models/securityResults";
import Finding from "../models/findings";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const securityResults = await SecurityResult.find();
    res.json({ securityResults });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get("/findings/:resultId", async (req, res) => {
  try {
    const resultId = req.params.resultId;
    const result = await SecurityResult.findById(resultId)
      .lean()
      .populate({ path: "findings", select: "ruleId metadata location" });

    res.json({ findings: result?.findings });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const findings = await Finding.insertMany(req.body.findings);

    const newResult = new SecurityResult({
      ...req.body,
      findings: findings.map((value) => value._id),
    });
    await newResult.save();

    res.status(201).json({ newResult });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
