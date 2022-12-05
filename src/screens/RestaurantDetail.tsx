import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { About, MenuItem } from '../components';
import { Divider } from 'react-native-elements';

import type { DetailScreenProps } from '../../App';

interface RestaurantDetailProps {
  route: DetailScreenProps['route'];
  navigation: DetailScreenProps['navigation'];
}

interface RestaurantPlaceProp {
  place: {
    name: string;
    image_url: string;
    categories: { title: string }[];
    rating: number;
    review_count: number;
    transactions: string[];
    price: string;
    display_phone: string;
    id: string;
  }
}

const RestaurantDetail = ({ route, navigation }: RestaurantDetailProps) => {
  if (!route.params) {
    return null
  }

  const { place }: RestaurantPlaceProp = route.params;

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
