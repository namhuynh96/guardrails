import { render, screen } from "@testing-library/react";

import FindingList from "../FindingList";

describe("ResultList", () => {
  beforeEach(() => {
    jest.mock("../../../__mocks__/axios");
  });

  test("renders first finding item", async () => {
    render(<FindingList resultId="" onBack={() => {}} />);
    const resultElement = await screen.findByText("Rule Id: G402");
    expect(resultElement).toBeInTheDocument();
  });

  test("renders 2 enough finding items", async () => {
    render(<FindingList resultId="" onBack={() => {}} />);
    const findingListElement = await screen.findAllByText(/Rule Id/i);
    expect(findingListElement.length).toBe(2);
  });
});
