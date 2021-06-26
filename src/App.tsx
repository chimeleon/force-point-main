import { ToastContainer } from 'react-toastify';
import Condition from './components/condition/Condition';
import Contents from './components/contents/Contents';
import CounterTemplate from './components/CounterTemplate';
import ExcelExport from './components/ExcelExport';
import Logout from './components/Logout';
import PageTemplate from './components/PageTemplate';
import Progressive from './components/Progressive';
import useAuth from './hooks/useAuth';
import useMain from './hooks/useMain';
import GlobalStyle from './styles';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const { onLogout } = useAuth();
  const { onSubmit, onKeyPress, total, onExcel } = useMain();

  return (
    <>
      <GlobalStyle />
      <Progressive />

      <PageTemplate>
        <Logout onLogout={onLogout} />
        <Condition onSubmit={onSubmit} onKeyPress={onKeyPress} />
        <ExcelExport onExcel={onExcel} />
        <CounterTemplate total={total} />
        <Contents />
      </PageTemplate>

      <ToastContainer position="bottom-center" draggable={false} />
    </>
  );
}

export default App;
