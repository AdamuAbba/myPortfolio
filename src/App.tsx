import { Provider } from 'react-redux';
import store from 'Redux/store';
import { ThemeProvider } from '@mui/material/styles';
// @ts-ignore
import AnimatedCursor from 'react-animated-cursor';
import Main from 'routes/Main';
import { theme } from 'configs/theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AnimatedCursor
          trailingSpeed={2}
          innerSize={20}
          outerSize={35}
          outerScale={3}
          innerScale={1}
        />
        <Main />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
