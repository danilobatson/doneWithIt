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
    <ScrollView showsVerticalScrollIndicator={false}>
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

interface FoodInfoProps {
  food: {
    title: string;
    description: string;
    price: string;
  };
}
const FoodInfo: React.FC<FoodInfoProps> = ({ food }) => {
  return (
    <View style={{ width: 240, justifyContent: 'space-evenly' }}>
      <Text style={styles.titleStyle}>{food.title}</Text>
      <Text>{food.description}</Text>
      <Text>{food.price}</Text>
    </View>
  );
};
interface FoodImageProps {
  food: {
    image: string;
  };
}
const FoodImage: React.FC<FoodImageProps> = ({ food }) => {
  return (
    <View>
      <Image
        source={{ uri: food.image }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 8,
        }}
      />
    </View>
  );
};

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
