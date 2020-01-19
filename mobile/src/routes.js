import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar'
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil Github'
            },
        }
    }, {
        defaultNavigationOptions: {
            headerBackTitleVisible: false, //retira o nome da pagina que o botão de voltar te leva
            headerTintColor: '#FFF',
            headerStyle: {
                backgroundColor:'#7D40E7'
            },
        },
    })
);

export default Routes;