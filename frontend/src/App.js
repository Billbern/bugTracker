import './App.css';
import  axios  from 'axios';
import { Provider } from 'react-redux';
import Page from './pages/mainpage';
import store from './utils/store';

axios.defaults.withCredentials = true;
axios.defaults.headers = {'Content-Type': 'application/json'};

function App() {
    return (
        <Provider store={store}>
            <Page />
        </Provider>
    );
}

export default App;
