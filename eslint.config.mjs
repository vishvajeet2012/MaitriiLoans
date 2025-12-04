import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals"),
    {
        rules: {
            // Disabling the rule for unescaped entities (e.g., ' or ")
            "react/no-unescaped-entities": "off",
            // Disabling custom font rule if needed
            "@next/next/no-page-custom-font": "off",
        },
    },
];

export default eslintConfig;
