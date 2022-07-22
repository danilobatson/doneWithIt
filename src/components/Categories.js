import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import { items } from '../assets';

const Categories = () => {
	return (
		<View>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={items}
				keyExtractor={(item) => item.text}
				renderItem={({ item }) => {
					return (
						<View style={styles.iconsList}>
							<Image source={item.image} style={styles.pickup} />
							<Text style={styles.iconsText}>{item.text}</Text>
						</View>
					);
				}}
			/>
		</View>
	);
};

export default Categories;

const styles = StyleSheet.create({
	pickup: {
		width: 50,
		height: 40,
		resizeMode: 'contain',
	},
	iconsList: {
		paddingVertical: 10,
		paddingLeft: 20,
	},
	iconsText: {
		fontSize: 13,
		fontWeight: '900',
	},
});
