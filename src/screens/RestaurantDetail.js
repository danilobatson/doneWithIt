import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { About, MenuItem } from '../components';
import { Divider } from 'react-native-elements';

const RestaurantDetail = ({ route, navigation }) => {
  const { place } = route.params;
	const {
		name,
		categories,
		id,
		display_phone,
		image_url,
		price,
		rating,
		review_count,
	} = place;
	return (
		<View>
			<About
				name={name}
				image={image_url}
				price={price}
				rating={rating}
				reviews={review_count}
				categories={categories}
			/>
			<Divider width={1.8} style={{ marginVertical: 20 }} />
			<MenuItem />
		</View>
	);
};

export default RestaurantDetail;

const styles = StyleSheet.create({});
