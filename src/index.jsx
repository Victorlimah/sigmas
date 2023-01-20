import Routes from "./routes";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
