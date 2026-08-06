import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Toast } from "./toast";

describe("Toast", () => {
  it("renders title and description", () => {
    render(<Toast title="Success!" description="Message sent successfully." />);

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("Success!")).toBeInTheDocument();
    expect(screen.getByText("Message sent successfully.")).toBeInTheDocument();
  });

  it("calls onClose when close button clicked", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    render(<Toast title="Success!" onClose={handleClose} />);

    const closeButton = screen.getByRole("button", { name: "Close toast" });
    await user.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
