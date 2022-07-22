import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = () => {
	return (
		<View style={styles.searchContainer}>
			<GooglePlacesAutocomplete
				renderLeftButton={() => (
					<View>
						<Ionicons name='location-sharp' size={24} color='black' />
					</View>
				)}
				renderRightButton={() => (
					<View style={styles.rightBtnContainer}>
						<AntDesign name='clockcircle' size={11} color='black' />
						<Text> Search</Text>
					</View>
				)}
				placeholder='Search'
				styles={{
					textInput: {
						backgroundColor: '#eee',
						borderRadius: 20,
						fontWeight: 700,
						marginTop: 7,
					},
					textInputContainer: {
						backgroundColor: '#eee',
						borderRadius: 50,
						flexDirection: 'row',
						alignItems: 'center',
						marginRight: 10,
					},
				}}
			/>
		</View>
	);
};

export default SearchBar;

const styles = StyleSheet.create({
	searchContainer: {
		marginTop: 15,
		flexDirection: 'row',
	},
	rightBtnContainer: {
		flexDirection: 'row',
		marginRight: 8,
		backgroundColor: 'white',
		padding: 9,
		borderRadius: 30,
		alignItems: 'center',
	},
});
