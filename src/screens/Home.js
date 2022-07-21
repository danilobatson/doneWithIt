import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Home = () => {
	return (
		<View style={styles.container}>
			<Text>Why is Courtnie this way?</Text>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
});
