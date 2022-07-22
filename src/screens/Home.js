import {
	StyleSheet,
	Text,
	SafeAreaView,
	View,
	ScollView,
	ScrollView,
} from 'react-native';
import React from 'react';
import {
	HeaderTabs,
	SearchBar,
	Categories,
	RestaurantItem,
} from '../components';

const Home = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.subContainer}>
				<HeaderTabs />
				<SearchBar />
			</View>
			<ScrollView showsHorizontalScrollIndicator={false}>
				<Categories />
				<RestaurantItem />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#eee',
		flex: 1,
	},
	subContainer: {
		backgroundColor: 'white',
		padding: 15,
	},
});
