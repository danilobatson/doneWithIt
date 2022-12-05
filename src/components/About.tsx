import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

interface AboutProps {
  name: string;
  image: string;
  price: string;
  rating: number;
  reviews: number;
  categories: { title: string; alias: string }[];
}
const About: React.FC<AboutProps> = ({
  name,
  image,
  price,
  rating,
  reviews,
  categories,
}) => {
  console.log(categories);
  const formattedCategories = categories.map((cat) => cat.title).join(' • ');
  const description = `${formattedCategories} ${
    price ? ' • ' + price : ''
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage uri={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

const RestaurantImage: React.FC<{ uri: string }> = ({ uri }) => (
  <Image source={{ uri }} style={{ width: '100%', height: 180 }} />
);

const RestaurantName: React.FC<{ name: string }> = ({ name }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {name}
  </Text>
);

const RestaurantDescription: React.FC<{ description: string }> = ({
  description,
}) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: '400',
      fontSize: 15.5,
    }}
  >
    Hello
    {description}
  </Text>
);

export default About;

const styles = StyleSheet.create({});
