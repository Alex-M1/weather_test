import './App.css'
import { Provider } from 'react-redux'
import { store } from './store'
import ApppRouter from './router'
function App() {
  return (
    <Provider store={store} >
      <ApppRouter />
    </Provider>
  );
}

export default App;
