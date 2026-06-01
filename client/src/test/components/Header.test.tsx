import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("../../contexts/AuthContext", () => ({
  useAuth: () => ({
    isAuthenticated: false,
    logout: jest.fn(),
  }),
}));

describe("Header Component", () => {
  test("should render application title", () => {
    render(<Header />);

    expect(screen.getByText("SQA Social Media")).toBeInTheDocument();
  });

  test("should render login buttons when user is logged out", () => {
    render(<Header />);

    expect(screen.getByText("Entrar")).toBeInTheDocument();
    expect(screen.getByText("Criar Conta")).toBeInTheDocument();
  });
});