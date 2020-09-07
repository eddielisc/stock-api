"use strict"

module.exports = {
  collectCoverageFrom: ["src/*.{js,ts}"],
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 60,
      lines: 60,
      functions: 50,
    },
  },
  modulePathIgnorePatterns: ["<rootDir>/dist"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  testRegex: "src/(.+/)?__tests__/.+\\.test\\.(js|ts)$",
}
