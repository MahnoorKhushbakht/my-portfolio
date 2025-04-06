const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./", 
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], 
  testEnvironment: "jest-fixed-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },  
};

module.exports = createJestConfig(customJestConfig);


// module.exports = {
//   testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
// };
