import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";  // 👈 import this
import Hero from "../landing_page/home/Hero";

// Test Suite
describe("Hero Component", () => {
  test("renders hero image", () => {
    render(
      <MemoryRouter>          {/* 👈 wrap component */}
        <Hero />
      </MemoryRouter>
    );

    const heroImage = screen.getByAltText("HomeHero Image"); // alt defined in Hero
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute(
      "src",
      "/media/images/homeHero.png"
    ); // src defined in Hero
  });
});
