import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const image =
	'https://images.prismic.io/spicygreenbook/c2a3d47b-b5fb-49a9-aeba-62e894a2edd7_NatashaLee-SGB-JerkMuva-5551.jpg?auto=compress,format&w=400';

const title = 'Jerk Muva';
const description = 'Southern • Comfort • Food • $$ • 4 Stars (2913+)';

const About = () => {
	return (
		<View>
			<RestaurantImage uri={image} />
			<RestaurantName name={title} />
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
