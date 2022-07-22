import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { About, MenuItem } from '../components';
import { Divider } from 'react-native-elements';

const RestaurantDetail = () => {
	return (
		<View>
      <About />
			<Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem />

		</View>
	);
};

export default RestaurantDetail;

const styles = StyleSheet.create({});
