import { ToastContainer } from "react-toastify";
import Condition from "./components/condition/Condition";
import Contents from "./components/contents/Contents";
import CounterTemplate from "./components/CounterTemplate";
import ExcelExport from "./components/ExcelExport";
import Logout from "./components/Logout";
import PageTemplate from "./components/PageTemplate";
import useAuth from "./hooks/useAuth";
import useMain from "./hooks/useMain";
import GlobalStyle from "./styles";

function App() {
  const { onLogout } = useAuth();
  const { onSubmit, onKeyPress, total } = useMain();

  return (
    <>
      <GlobalStyle />

      <PageTemplate>
        <Logout onLogout={onLogout} />
        <Condition onSubmit={onSubmit} onKeyPress={onKeyPress} />
        <ExcelExport />
        <CounterTemplate total={total} />
        <Contents />
      </PageTemplate>

      <ToastContainer position="bottom-center" draggable={false} />
    </>
  );
}

export default App;