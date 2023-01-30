import React from "react";

import {View, Text, StyleSheet, SectionList} from 'react-native';

const Appetizers = [
  {id: '1', name: 'Hummus', price: '$5.00' },
  {id: '2', name: 'Moutabal', price: '$5.00' },
  {id: '3', name: 'Falafel', price: '$7.50' },
  {id: '4', name: 'Marinated Olives', price: '$5.00'},
  {id: '5', name: 'Kofta', price: '$5.00' },
  {id: '6', name: 'Eggplant Salad', price: '$8.50' },
];
const Main = [
  {id: '7', name: 'Lentil Burger', price: '$10.00' },
  {id: '8', name: 'Smoked Salmon', price: '$14.00' },
  {id: '9', name: 'Kofta Burger', price: '$11.00' },
  {id: '10', name: 'Turkish Kebab', price: '$15.50' },
];
const Sides = [
  {id: '11', name: 'Buttered Rice', price: '$3.00' },
  {id: '12', name: 'Bread Sticks', price: '$3.00' },
  {id: '13', name: 'Pita Pocket', price: '$3.00' },
  {id: '14', name: 'Lentil Soup', price: '$3.75' },
  {id: '15', name: 'Greek Salad', price: '$6.00' },
  {id: '16', name: 'Rice Pilaf', price: '$4.00' },
  {id: '17', name: 'Fries', price: '$3.00' },
];
const Desserts = [
  {id: '18', name: 'Baklava', price: '$3.00' },
  {id: '19', name: 'Tartufo', price: '$3.00' },
  {id: '20', name: 'Tiramisu', price: '$5.00' },
  { id: '21', name: 'Panna Cotta', price: '$5.00'},
];
const Item = ({ name, price }) => (
  <View style={styles.innerContainer}>
    <Text style={styles.menuItem}>{name}</Text>
    <Text style={styles.menuItem}>{price}</Text>
  </View>
);
const Separator = () => <View style={styles.separator} />;

export default function MenuItems() {
  const renderItem = ({ item }) => <Item name={item.name} price={item.price}/>;
  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );
    return (
        <View style={styles.menuContainer}>
        <View style={styles.menuHeader}>
            <Text style={styles.menuText}>Menu Items</Text>
        </View>
        <SectionList
        keyExtractor={(item, index) => item + index}
        sections={
          [
            {title: 'Appetizers', data: Appetizers},
            {title: 'Main Dishes', data: Main},
            {title: 'Sides', data: Sides},
            {title: 'Desserts', data: Desserts},
          ]
        }
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
        ></SectionList>
      </View>
    );
}

const styles = StyleSheet.create({
    menuContainer: {
      flex: 1,
      paddingTop: 22,
    },
    menuHeader: {
        paddingBottom: 30,
    },
    menuText: {
     textAlign: 'center',
     fontSize: 25,
     paddingHorizontal: 20, 
     color: '#EDEFEE',
     textDecorationLine: 'underline',
    },
    innerContainer: {
      paddingHorizontal: 40,
      paddingVertical: 20,
      backgroundColor: '#333333',
      display: 'flex',
      flexDirection: 'row',
    },
    sectionHeader: {
      backgroundColor: '#fbdabb',
      color: '#333333',
      fontSize: 34,
      flexWrap: 'wrap',
      textAlign: 'center',
    },
    menuItem: {
      padding: 10,
      fontSize: 25,
      height: 44,
      color: '#EDEFEE',
    },
    separator: {
      borderBottomWidth: 1,
      borderColor: '#EDEFEE',
    },
  });
  