import "./styles/reset.css";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { RouterNavigator } from "./components/RouterNavigator";
import { GlobalStyles } from "./styles/GlobalStyles";
if (import.meta.hot) {
  import.meta.hot.accept();
}

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <RouterNavigator />
    </BrowserRouter>
  );
}
