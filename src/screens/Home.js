import {
	StyleSheet,
	Text,
	SafeAreaView,
	View,
	ScollView,
	ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import {
	HeaderTabs,
	SearchBar,
	Categories,
	RestaurantItem,
} from '../components';

import { localRestaurants } from '../data/';

const YELP_API_KEY =
	'3hmawgfsAI-a4bmGS_7Krd9v-5pWZo2lazdGkjtlzU_OdmeqSblfgBskUQwI8oH0m0i_rivkQ6Fo91hJQcHCzYqfjGVQvywYuu3l3VxxaoltUcUrKN4norls-61TYXYx';

const Home = () => {
	const [restaurantData, setRestaurantData] = useState([]);
	const [city, setCity] = useState('New York');
	const [activeTab, setActiveTab] = useState('Delivery');

	const getRestaurantsFromYelp = () => {
		const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

		const apiOptions = {
			headers: {
				Authorization: `Bearer ${YELP_API_KEY}`,
			},
		};

		return fetch(yelpUrl, apiOptions)
			.then((res) => res.json())
			.then((json) =>
				setRestaurantData(
					json.businesses.filter((business) =>
						business.transactions.includes(activeTab.toLowerCase())
					)
				)
			);
	};

	useEffect(() => {
		getRestaurantsFromYelp();
	}, [city, activeTab]);

	if (!restaurantData) {
		return null;
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.subContainer}>
				<HeaderTabs />
				<SearchBar />
			</View>
			<ScrollView>
				<Categories />
				<RestaurantItem restaurantData={restaurantData} />
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
