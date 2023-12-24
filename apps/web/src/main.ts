import { Header } from "@jbrunton/turborepo-test-ui/header";
import "./style.css";
import typescriptLogo from "./typescript.svg";
import { Counter } from "@jbrunton/turborepo-test-ui/counter";
import { setupCounter } from "@jbrunton/turborepo-test-ui/setup-counter";
import { greet } from "@jbrunton/turborepo-test-greet/greet";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    ${Header({ title: "Web" })}
    <div class="card">
      ${Counter()}
    </div>
    <div class="card">
      ${greet('Worrrld')}
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
