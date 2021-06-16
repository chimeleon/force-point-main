import { ToastContainer } from "react-toastify";
import Condition from "./components/condition/Condition";
import Contents from "./components/contents/Contents";
import LookupCounter from "./components/counter/LookupCounter";
import PageTemplate from "./components/PageTemplate";
import useAuth from "./hooks/useAuth";
import useMain from "./hooks/useMain";
import GlobalStyle from "./styles";

function App() {
  useAuth();
  const { onSubmit, onKeyPress } = useMain();

  return (
    <>
      <GlobalStyle />

      <PageTemplate>
        <Condition onSubmit={onSubmit} onKeyPress={onKeyPress} />
        <LookupCounter />
        <Contents />
      </PageTemplate>

      <ToastContainer position="bottom-center" draggable={false} />
    </>
  );
}

export default App;