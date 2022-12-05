import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import type {
	DetailScreenProps,
	HomeScreenProps,
} from '../../App';

interface DetailNavigationProp {
  navigation: DetailScreenProps['navigation'];
  navigate: any;
}

type HomeScreenNavigationProp = HomeScreenProps['navigation'];

interface RestaurantItemProps {
  restaurantData: {
    name: string;
    image_url: string;
    categories: { title: string }[];
    rating: number;
    review_count: number;
  }[];
  navigation: DetailNavigationProp | HomeScreenNavigationProp;
}
const RestaurantItem: React.FC<RestaurantItemProps> = ({
  restaurantData,
  navigation,
}) => {
  return (
    <>
      {restaurantData.map((place, index) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail', {
                place,
              })
            }
            key={index}
            activeOpacity={1}
            style={{ marginBottom: 30 }}
          >
            <View style={styles.container}>
              <RestaurantImage uri={place.image_url} />
              <RestaurantInfo name={place.name} rating={place.rating} />
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
};
interface RestaurantImageProps {
	uri: string;
}
const RestaurantImage: React.FC<RestaurantImageProps> = ({ uri }) => {
  return (
    <>
      <Image
        style={styles.image}
        source={{
          uri,
        }}
      />
      <TouchableOpacity
        style={styles.heart}
        onPress={() => console.log('Change heart')}
      >
        <MaterialCommunityIcons name='heart-outline' size={25} color='#ffff' />
      </TouchableOpacity>
    </>
  );
};
interface RestaurantInfoProps {
	name: string;
	rating: number;
}
const RestaurantInfo : React.FC<RestaurantInfoProps> = ({ name, rating }) => {
  return (
    <View style={styles.details}>
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.time}>45 - 60 • min</Text>
      </View>
      <View style={styles.ratingView}>
        <Text>{rating}</Text>
      </View>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 180,
  },
  heart: {
    right: 20,
    position: 'absolute',
    top: 20,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 13,
    color: 'gray',
  },
  ratingView: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#eee',
    height: 30,
    width: 30,
  },
  container: {
    marginTop: 10,
    padding: 15,
    backgroundColor: 'white',
  },
});
