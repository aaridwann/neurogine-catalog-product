// import eslint from "@eslint/js";
// import tseslint from "typescript-eslint";
// import reactPlugin from "eslint-plugin-react";
// import reactHooksPlugin from "eslint-plugin-react-hooks";
// // @ts-expect-error - eslint-plugin-react-native does not have type definitions
// import reactNativePlugin from "eslint-plugin-react-native";
// import importPlugin from "eslint-plugin-import";
// import globals from "globals";
// import { fixupPluginRules } from "@eslint/compat";

// export default tseslint.config(
//   {
//     ignores: [
//       "node_modules/**",
//       "android/**",
//       "ios/**",
//       "build/**",
//       "dist/**",
//       "coverage/**",
//       ".next/**",
//       "out/**",
//       "eslint.config.mts",
//       "eslint.config.mjs",
//       "eslint.config.js",
//       "metro.config.js",
//       "babel.config.js",
//       "jest.config.js"
//     ]
//   },

//   eslint.configs.recommended,
//   ...tseslint.configs.strict,
//   ...tseslint.configs.stylistic,

//   {
//     files: ["src/**/*.{ts,tsx,js,jsx}"],
//     languageOptions: {
//       parser: tseslint.parser,
//       parserOptions: {
//         project: "./tsconfig.json",
//         tsconfigRootDir: import.meta.dirname,
//         ecmaFeatures: {
//           jsx: true
//         }
//       },
//       globals: {
//         ...globals.browser,
//         ...globals.es2021,
//         ...globals.node,
//         __DEV__: "readonly"
//       }
//     },
//     plugins: {
//       "react": fixupPluginRules(reactPlugin),
//       "react-hooks": fixupPluginRules(reactHooksPlugin as any),
//       "react-native": fixupPluginRules(reactNativePlugin),
//       "import": fixupPluginRules(importPlugin)
//     },
//     settings: {
//       react: {
//         version: "detect"
//       },
//       "import/resolver": {
//         typescript: {
//           alwaysTryTypes: true,
//           project: "./tsconfig.json"
//         }
//       }
//     },
//     rules: {
//       "indent": ["error", 2, { "SwitchCase": 1 }],
//       "semi": ["error", "always"],
//       "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
//       "jsx-quotes": ["error", "prefer-double"],
//       "no-trailing-spaces": "error",
//       "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
//       "object-shorthand": ["error", "always"],
//       "quote-props": ["error", "as-needed"],

//       "padding-line-between-statements": [
//         "error",
//         { "blankLine": "always", "prev": "*", "next": "return" },
//         { "blankLine": "always", "prev": "block-like", "next": "*" },
//         { "blankLine": "always", "prev": "*", "next": "function" },
//         { "blankLine": "always", "prev": "function", "next": "*" },
//         { "blankLine": "never", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] },
//         { "blankLine": "always", "prev": "multiline-const", "next": "*" },
//         { "blankLine": "always", "prev": "*", "next": "multiline-const" }
//       ],

//       "import/order": ["error", {
//         "groups": [
//           "builtin",
//           "external",
//           "internal",
//           ["parent", "sibling", "index"],
//           "type"
//         ],
//         "pathGroups": [
//           {
//             "pattern": "react",
//             "group": "builtin",
//             "position": "before"
//           },
//           {
//             "pattern": "react-native",
//             "group": "builtin",
//             "position": "before"
//           },
//           {
//             "pattern": "@Neurogine/**",
//             "group": "internal",
//             "position": "before"
//           }
//         ],
//         "pathGroupsExcludedImportTypes": ["react", "react-native"],
//         "newlines-between": "always",
//         "alphabetize": { "order": "asc", "caseInsensitive": true }
//       }],
//       "@typescript-eslint/consistent-type-imports": ["error", {
//         "prefer": "type-imports",
//         "fixStyle": "separate-type-imports"
//       }],

//       "func-style": ["error", "expression"],
//       "prefer-arrow-callback": "error",
//       "prefer-destructuring": ["error", {
//         "VariableDeclarator": { "array": true, "object": true },
//         "AssignmentExpression": { "array": false, "object": false }
//       }],
//       "no-nested-ternary": "error",
//       "no-unneeded-ternary": "error",

//       "max-len": ["error", { 
//         "code": 100, 
//         "tabWidth": 2, 
//         "ignoreUrls": true, 
//         "ignoreStrings": true, 
//         "ignoreTemplateLiterals": true 
//       }],
//       "max-lines": ["error", { "max": 300, "skipBlankLines": true, "skipComments": true }],
//       "max-lines-per-function": ["error", { "max": 40, "skipBlankLines": true, "skipComments": true }],
//       "max-depth": ["error", 3],
//       "max-params": ["error", 3],
//       "object-curly-spacing": ["error", "always"],
//       "comma-spacing": ["error", { "before": false, "after": true }],
//       "comma-dangle": ["error", "always-multiline"],
//       "arrow-spacing": ["error", { "before": true, "after": true }],
//       "space-in-parens": ["error", "never"],
//       "keyword-spacing": ["error", { "before": true, "after": true }],

//       "no-unused-vars": "off",
//       "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
//       "@typescript-eslint/no-explicit-any": "error",
//       "@typescript-eslint/explicit-module-boundary-types": "off",
//       "@typescript-eslint/no-non-null-assertion": "error",
//       "no-undef": "off",
//       "no-unreachable": "error",
//       "no-const-assign": "error",
//       "no-duplicate-imports": "error",
//       "valid-typeof": "error",
//       "no-self-compare": "error",
//       "eqeqeq": ["error", "always"],
//       "no-console": "off",
//       "no-alert": "error",
//       "no-eval": "error",
//       "no-var": "error",
//       "prefer-const": "error",
//       "no-lonely-if": "error",
//       "no-else-return": ["error", { "allowElseIf": false }],

//       "react-hooks/rules-of-hooks": "error",
//       "react-hooks/exhaustive-deps": "warn",
//       "react/self-closing-comp": "error",
//       "react/no-array-index-key": "warn",
//       "react/jsx-no-useless-fragment": "error",
//       "react-native/no-inline-styles": "warn",
//       "react-native/no-unused-styles": "error",
//       "react-native/split-platform-components": "error"
//     }
//   }
// );

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
// @ts-expect-error - eslint-plugin-react-native does not have type definitions
import reactNativePlugin from "eslint-plugin-react-native";
import importPlugin from "eslint-plugin-import";
import jestPlugin from "eslint-plugin-jest";
import globals from "globals";
import { fixupPluginRules } from "@eslint/compat";

export default tseslint.config(
  {
    ignores: [
      "node_modules/**",
      "android/**",
      "ios/**",
      "build/**",
      "dist/**",
      "coverage/**",
      ".next/**",
      "out/**",
      "eslint.config.mts",
      "eslint.config.mjs",
      "eslint.config.js",
      "metro.config.js",
      "babel.config.js",
      "jest.config.js"
    ]
  },

  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,

  // 1. MAIN APP CONFIGURATION
  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
        __DEV__: "readonly"
      }
    },
    plugins: {
      "react": fixupPluginRules(reactPlugin),
      "react-hooks": fixupPluginRules(reactHooksPlugin as any),
      "react-native": fixupPluginRules(reactNativePlugin),
      "import": fixupPluginRules(importPlugin)
    },
    settings: {
      react: {
        version: "detect"
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json"
        }
      }
    },
    rules: {
      "indent": ["error", 2, { "SwitchCase": 1 }],
      "semi": ["error", "always"],
      "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
      "jsx-quotes": ["error", "prefer-double"],
      "no-trailing-spaces": "error",
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
      "object-shorthand": ["error", "always"],
      "quote-props": ["error", "as-needed"],

      "padding-line-between-statements": [
        "error",
        { "blankLine": "always", "prev": "*", "next": "return" },
        { "blankLine": "always", "prev": "block-like", "next": "*" },
        { "blankLine": "always", "prev": "*", "next": "function" },
        { "blankLine": "always", "prev": "function", "next": "*" },
        { "blankLine": "never", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] },
        { "blankLine": "always", "prev": "multiline-const", "next": "*" },
        { "blankLine": "always", "prev": "*", "next": "multiline-const" }
      ],

      "import/order": ["error", {
        "groups": [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
          "type"
        ],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "builtin",
            "position": "before"
          },
          {
            "pattern": "react-native",
            "group": "builtin",
            "position": "before"
          },
          {
            "pattern": "@Neurogine/**",
            "group": "internal",
            "position": "before"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react", "react-native"],
        "newlines-between": "always",
        "alphabetize": { "order": "asc", "caseInsensitive": true }
      }],
      "@typescript-eslint/consistent-type-imports": ["error", {
        "prefer": "type-imports",
        "fixStyle": "separate-type-imports"
      }],

      "func-style": ["error", "expression"],
      "prefer-arrow-callback": "error",
      "prefer-destructuring": ["error", {
        "VariableDeclarator": { "array": true, "object": true },
        "AssignmentExpression": { "array": false, "object": false }
      }],
      "no-nested-ternary": "error",
      "no-unneeded-ternary": "error",

      "max-len": ["error", { 
        "code": 100, 
        "tabWidth": 2, 
        "ignoreUrls": true, 
        "ignoreStrings": true, 
        "ignoreTemplateLiterals": true 
      }],
      "max-lines": ["error", { "max": 300, "skipBlankLines": true, "skipComments": true }],
      "max-lines-per-function": ["error", { "max": 40, "skipBlankLines": true, "skipComments": true }],
      "max-depth": ["error", 3],
      "max-params": ["error", 3],
      "object-curly-spacing": ["error", "always"],
      "comma-spacing": ["error", { "before": false, "after": true }],
      "comma-dangle": ["error", "always-multiline"],
      "arrow-spacing": ["error", { "before": true, "after": true }],
      "space-in-parens": ["error", "never"],
      "keyword-spacing": ["error", { "before": true, "after": true }],

      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-non-null-assertion": "error",
      "no-undef": "off",
      "no-unreachable": "error",
      "no-const-assign": "error",
      "no-duplicate-imports": "error",
      "valid-typeof": "error",
      "no-self-compare": "error",
      "eqeqeq": ["error", "always"],
      "no-console": "off",
      "no-alert": "error",
      "no-eval": "error",
      "no-var": "error",
      "prefer-const": "error",
      "no-lonely-if": "error",
      "no-else-return": ["error", { "allowElseIf": false }],

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/self-closing-comp": "error",
      "react/no-array-index-key": "warn",
      "react/jsx-no-useless-fragment": "error",
      "react-native/no-inline-styles": "warn",
      "react-native/no-unused-styles": "error",
      "react-native/split-platform-components": "error"
    }
  },

  // 2. JEST BEST PRACTICES & TESTING OVERRIDES
  {
    files: [
      "src/**/__tests__/**/*.{ts,tsx,js,jsx}",
      "src/**/*.{spec,test}.{ts,tsx,js,jsx}",
      "jest.setup.js",
      "**/__mocks__/**/*.{ts,tsx,js,jsx}"
    ],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    },
    plugins: {
      "jest": jestPlugin
    },
    rules: {
      // Rule Jest yang valid untuk ESLint v9/v10
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
      "jest/no-conditional-expect": "error",
      "jest/no-mocks-import": "off",

      // Pelonggaran Khusus Testing (Hanya membebaskan fleksibilitas mock & ukuran file test)
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "max-lines-per-function": "off",
      "max-lines": "off"

      // CATATAN: Semua aturan kode dasar seperti 'indent', 'semi', 'quotes', 'comma-dangle', 
      // 'import/order', 'max-len', dll. TETAP WARISAN & DIPAKSAKAN dari blok 1.
    }
  }
);