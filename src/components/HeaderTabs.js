import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const HeaderTabs = () => {
	const [activeTab, setActiveTab] = useState('Delivery');

	return (
		<View style={styles.container}>
			<HeaderButton
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				text='Delivery'
			/>
			<HeaderButton
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				text='Pickup'
			/>
		</View>
	);
};

export default HeaderTabs;

const HeaderButton = ({ text, activeTab, setActiveTab }) => {
	return (
		<TouchableOpacity
			style={{
				backgroundColor: activeTab == text ? 'black' : 'white',
				paddingVertical: 6,
				paddingHorizontal: 16,
				borderRadius: 30,
			}}
			onPress={() => setActiveTab(text)}>
			<Text
				style={{
					color: activeTab === text ? 'white' : 'black',
					fontSize: 16,
					fontWeight: 'bold',
				}}>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignSelf: 'center',
	},
});
