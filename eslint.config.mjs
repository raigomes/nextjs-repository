import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    settings: {
      react: {
        // Define explicitamente a versão do React para evitar
        // que o eslint-plugin-react tente autodetectar e quebre
        // com o novo formato de contexto do ESLint 10.
        version: "19.0.0",
      },
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
