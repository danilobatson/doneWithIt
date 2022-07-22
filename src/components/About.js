import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const About = ({ name, image, price, rating, reviews, categories }) => {
	const formattedCategories = categories.map((cat) => cat.title).join(' • ');
	const description = `${formattedCategories} ${
		price ? ' • ' + price : ''
	} • 🎫 • ${rating} ⭐ (${reviews}+)`;
	return (
		<View>
			<RestaurantImage uri={image} />
			<RestaurantName name={name} />
			<RestaurantDescription description={description} />
		</View>
	);
};

const RestaurantImage = ({ uri }) => (
	<Image source={{ uri }} style={{ width: '100%', height: 180 }} />
);

const RestaurantName = ({ name }) => (
	<Text
		style={{
			fontSize: 29,
			fontWeight: '600',
			marginTop: 10,
			marginHorizontal: 15,
		}}>
		{name}
	</Text>
);

const RestaurantDescription = ({ description }) => (
	<Text
		style={{
			marginTop: 10,
			marginHorizontal: 15,
			fontWeight: '400',
			fontSize: 15.5,
		}}>
		{description}
	</Text>
);

export default About;

const styles = StyleSheet.create({});
