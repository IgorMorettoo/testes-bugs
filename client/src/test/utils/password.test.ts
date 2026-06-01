import {
  isPasswordValid,
  getPasswordValidationMessage,
} from "@/utils/password";

describe("Password Utils", () => {
  test("should validate a strong password", () => {
    expect(isPasswordValid("Senha@123")).toBe(true);
  });

  test("should fail because password with 8 chars should be valid", () => {
    expect(isPasswordValid("Abc@1234")).toBe(true);
  });

  test("should return validation message", () => {
    expect(getPasswordValidationMessage("abc"))
      .toContain("uma letra maiúscula");
  });
});