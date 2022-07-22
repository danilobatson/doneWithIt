import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const RestaurantItem = () => {
	return (
		<View>
			<Text>RestaurantItem</Text>
			<RestaurantImage />
			<Text>Food Image</Text>
			<Text>Food Info</Text>
			<Text>Why Is Courtnie Like This</Text>
		</View>
	);
};

const RestaurantImage = () => {
	return (
		<>
			<TouchableOpacity onPress={() => console.log('This is working')}>
				<Image
					style={styles.image}
					source={{
						uri: 'https://images.prismic.io/spicygreenbook/7adec678-3822-4ee4-a120-e7af877fd3ca_KSP_3762.jpg?auto=compress,format&w=400',
					}}
				/>
			</TouchableOpacity>
		</>
	);
};

export default RestaurantItem;

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 180,
	},
});
