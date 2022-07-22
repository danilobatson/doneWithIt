import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import React from 'react';
import { HeaderTabs, SearchBar, Categories } from '../components';

const Home = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.subContainer}>
				<HeaderTabs />
				<SearchBar />
      </View>
      <Categories />
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
