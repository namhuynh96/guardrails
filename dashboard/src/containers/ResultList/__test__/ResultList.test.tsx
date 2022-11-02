import { render, screen } from "@testing-library/react";

import ResultList from "../ResultList";

describe("ResultList", () => {
  beforeEach(() => {
    jest.mock("../../../__mocks__/axios");
  });

  test("renders first result item", async () => {
    render(<ResultList />);
    const resultElement = await screen.findByText("Repository name: testing");
    expect(resultElement).toBeInTheDocument();
  });

  test("renders 3 enough result items", async () => {
    render(<ResultList />);
    const resultListElement = await screen.findAllByText(/Repository name/i);
    expect(resultListElement.length).toBe(3);
  });
});
