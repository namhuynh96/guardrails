const mockResponse = {
  data: {
    securityResults: [
      {
        _id: "123",
        status: "Queued",
        repositoryName: "testing",
        findings: ["636068a0b8758ba9c59b88f9"],
        queuedAt: "2022-11-12T04:11:00.000Z",
        scanningAt: "2022-11-12T04:11:00.000Z",
        finishedAt: "2022-11-12T04:11:00.000Z",
        __v: 0,
      },
      {
        _id: "456",
        status: "Queued",
        repositoryName: "testing2",
        findings: ["63606a7ab8758ba9c59b88fd", "63606a7bb8758ba9c59b88fe"],
        queuedAt: "2022-11-12T04:11:00.000Z",
        scanningAt: "2022-11-12T04:11:00.000Z",
        finishedAt: "2022-11-12T04:11:00.000Z",
        __v: 0,
      },
      {
        _id: "789",
        status: "Success",
        repositoryName: "testing3",
        findings: ["6360a76bb8758ba9c59b8933"],
        queuedAt: "2012-04-19T21:11:00.000Z",
        scanningAt: "2013-04-19T21:11:00.000Z",
        finishedAt: "2014-04-19T21:11:00.000Z",
        __v: 0,
      },
    ],
    findings: [
      {
        type: "sast",
        ruleId: "G402",
        location: {
          path: "connectors/apigateway.go",
          positions: {
            begin: {
              line: 60,
            },
          },
        },
        metadata: {
          description: "TLS InsecureSkipVerify set true.",
          severity: "HIGH",
        },
      },
      {
        type: "sast",
        ruleId: "G404",
        location: {
          path: "util/util.go",
          positions: {
            begin: {
              line: 32,
            },
          },
        },
        metadata: {
          description:
            "Use of weak random number generator (math/rand instead of crypto/rand)",
          severity: "HIGH",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
