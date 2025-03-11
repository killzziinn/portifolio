// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen'; 
import Pagina1 from './pages/Gow'; 
import Pagina2 from './pages/Tlou';
import Pagina3 from './pages/Cyberpunk'; 
import Pagina4 from './pages/Tomb';
import Pagina5 from './pages/Overwatch';
import Pagina6 from './pages/Uncharted';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ 
          headerStyle: { backgroundColor: '#4682B4' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold', fontSize:30 },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Gamer Geek ' }}
        />
        <Stack.Screen
          name="Gow"
          component={Pagina1}
          options={{ title: 'God Of War' }}
        />
        <Stack.Screen
          name="Tlou"
          component={Pagina2}
          options={{ title: 'The Last Of us' }} 
        />
        <Stack.Screen
          name="Cyberpunk"
          component={Pagina3}
          options={{ title: 'Cyberpunk' }}
        />

        <Stack.Screen
          name="Tomb"
          component={Pagina4}
          options={{ title: 'Tomb Raider' }}
        />

         <Stack.Screen
          name="Overwatch"
          component={Pagina5}
          options={{ title: 'Overwatch2' }}
        />

         <Stack.Screen
          name="Uncharted"
          component={Pagina6}
          options={{ title: 'Uncharted' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
