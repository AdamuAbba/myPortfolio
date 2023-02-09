import { ThemeProvider } from '@mui/material/styles';
import ToastContainerConfig from 'components/ToastContainerConfig';
import { theme } from 'configs/theme';
import store from 'features/store';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import MainRoute from 'routes/MainRoute';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainRoute />
      </ThemeProvider>
      <ToastContainerConfig />
    </Provider>
  );
};

export default App;
