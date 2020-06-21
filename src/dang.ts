export const a = {
  extends: [
    "eslint:recommended", // TURN ON ESLint recommended rules.
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended", // TURN ON TypeScript rules by using `typescript-eslint/typescript-eslint`.
    "plugin:jest/recommended", // TURN ON Jest rules by using "jest-community/eslint-plugin-jest".
    "airbnb-base", // TURN ON airbnb-base rules.
    "plugin:prettier/recommended", // RUN Prettier as ESLint rule by using `prettier/eslint-plugin-prettier` and TURN OFF ESLint rules which conflict with Prettier by using `prettier/eslint-config-prettier`.
    "prettier/@typescript-eslint", // TURN OFF ESLint TypesSript rules which conflict with Prettier by using `prettier/eslint-config-prettier`.
  ],
}
