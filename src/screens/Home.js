import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import React from 'react';
import { HeaderTabs, SearchBar } from '../components';
import { Feather } from '@expo/vector-icons';

const Home = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.subContainer}>
				<HeaderTabs />
				<SearchBar />
			</View>
			<Text>Why is Courtnie this way?</Text>
			<Feather name='search' size={32} />
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
