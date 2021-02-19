import './App.css';
import Layout from './components/Layout';
import ListDisplay from './components/ListDisplay/ListDisplay';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddNewProd from './components/TaskBar/Add/AddNewProd';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" exact component={ListDisplay} />
                    <Route path="/addnewProd" exact component={AddNewProd} />
                    <Route path="/updateProduct/:id" exact component={AddNewProd} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
