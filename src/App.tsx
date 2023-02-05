import { ThemeProvider } from '@mui/material/styles';
import MainRoute from 'routes/MainRoute';
import { Provider } from 'react-redux';
import { theme } from 'configs/theme';
import store from 'features/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainRoute />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
