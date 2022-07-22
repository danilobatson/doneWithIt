import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RestaurantItem = () => {
	return (
		<TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
			<View style={styles.container}>
				<RestaurantImage />
				<RestaurantInfo />
			</View>
		</TouchableOpacity>
	);
};

const RestaurantImage = () => {
	return (
		<>
			<Image
				style={styles.image}
				source={{
					uri: 'https://images.prismic.io/spicygreenbook/5ed4d883-a7fd-4ec4-94f0-f167550d1414_NatashaLee-SGB-JerkMuva-5338.jpg?auto=compress,format&w=2600',
				}}
			/>
			<TouchableOpacity
				style={styles.heart}
				onPress={() => console.log('Change heart')}>
				<MaterialCommunityIcons name='heart-outline' size={25} color='#ffff' />
			</TouchableOpacity>
		</>
	);
};

const RestaurantInfo = () => {
	return (
		<View style={styles.details}>
			<View>
				<Text style={styles.title}>Courntie's Citchen</Text>
				<Text style={styles.time}>45 - 60 • min</Text>
			</View>
			<View style={styles.ratingView}>
				<Text>4.8</Text>
			</View>
		</View>
	);
};

export default RestaurantItem;

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 180,
	},
	heart: {
		right: 20,
		position: 'absolute',
		top: 20,
	},
	details: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 10,
	},
	title: {
		fontSize: 15,
		fontWeight: 'bold',
	},
	time: {
		fontSize: 13,
		color: 'gray',
	},
	ratingView: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 15,
		backgroundColor: '#eee',
		height: 30,
		width: 30,
	},
	container: {
		marginTop: 10,
		padding: 15,
		backgroundColor: 'white',
	},
});
