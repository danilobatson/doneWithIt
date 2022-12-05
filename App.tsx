import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, RestaurantDetail as Detail } from './src/screens';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export type ProfileScreenNavigationProp = HomeScreenProps['navigation'];
export type DetailScreenNavigationProp = DetailScreenProps['navigation'];



const Stack = createNativeStackNavigator<RootStackParamList>();


function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Detail' component={Detail} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
