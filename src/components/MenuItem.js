import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';

const foods = [
	{
		title: 'Chicken & Waffles',
		description: 'Our Signature Dish',
		price: '$19.20',
		image:
			'https://images.prismic.io/spicygreenbook/5ed4d883-a7fd-4ec4-94f0-f167550d1414_NatashaLee-SGB-JerkMuva-5338.jpg?auto=compress,format&w=2600',
	},
	{
		title: 'Sangria Pitcher',
		description: 'Our Sangrias Made Us Famous',
		price: '$23.50',
		image:
			'https://images.prismic.io/spicygreenbook/85232b87-1fd1-4553-9d74-0695ef94c6c5_DSC01761.jpg?auto=compress,format&w=2600',
	},
	{
		title: 'Cupcake Platter',
		description: 'Imagine skipping out on this 🤔',
		price: '$30.00',
		image:
			'https://images.prismic.io/spicygreenbook/81e7cf15-208d-47a4-aba8-b4a1da67ed40_DSC03488.jpg?auto=compress,format&w=2600',
	},
];

const MenuItem = () => {
	return (
		<ScrollView howsVerticalScrollIndicator={false}>
			{foods.map((food, index) => (
				<View key={index}>
					<View style={styles.menuItemStyle}>
						<FoodInfo food={food} />
						<FoodImage food={food} />
					</View>
					<Divider
						width={0.5}
						orientation='vertical'
						style={{ marginHorizontal: 20 }}
					/>
				</View>
			))}
		</ScrollView>
	);
};

const FoodInfo = (props) => (
	<View style={{ width: 240, justifyContent: 'space-evenly' }}>
		<Text style={styles.titleStyle}>{props.food.title}</Text>
		<Text>{props.food.description}</Text>
		<Text>{props.food.price}</Text>
	</View>
);

const FoodImage = ({ marginLeft, ...props }) => (
	<View>
		<Image
			source={{ uri: props.food.image }}
			style={{
				width: 100,
				height: 100,
				borderRadius: 8,
				marginLeft: marginLeft,
			}}
		/>
	</View>
);

export default MenuItem;

const styles = StyleSheet.create({
	menuItemStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 20,
	},

	titleStyle: {
		fontSize: 19,
		fontWeight: '600',
	},
});
