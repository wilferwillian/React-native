import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Home from './src/Home';
import Login from './src/Login';
import Produtos from './src/Produtos';


const Navigator = createStackNavigator({
  Home: {screen : Home},
  Login: {screen : Login},
  Produtos: {screen : Produtos},
});

const App = createAppContainer(Navigator);

export default App;