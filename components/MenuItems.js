import React from "react";

import {View, Text, FlatList, StyleSheet} from 'react-native';

const menuItemsToDisplay = [
    { name: 'Hummus', price: '$5.00', id: '1A' },
    { name: 'Moutabal', price: '$5.00', id: '2B' },
    { name: 'Falafel', price: '$7.50', id: '3C' },
    { name: 'Marinated Olives', price: '$5.00', id: '4D' },
    { name: 'Kofta', price: '$6.00', id: '5E' },
    { name: 'Eggplant Salad', price: '$9.50', id: '6F' },
    { name: 'Lentil Burger', price: '$12.50', id: '7G' },
    { name: 'Smoked Salmon', price: '$18.00', id: '8H' },
    { name: 'Kofta Burger', price: '$12.50', id: '9I' },
    { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
    { name: 'Fries', price: '$8.00', id: '11K' },
    { name: 'Buttered Rice', price: '$4.50', id: '12L' },
    { name: 'Bread Sticks', price: '$5.50', id: '13M' },
    { name: 'Pita Pocket', price: '$3.00', id: '14N' },
    { name: 'Lentil Soup', price: '$6.75', id: '15O' },
    { name: 'Greek Salad', price: '$8.50', id: '16Q' },
    { name: 'Rice Pilaf', price: '$7.00', id: '17R' },
    { name: 'Baklava', price: '$5.00', id: '18S' },
    { name: 'Tartufo', price: '$5.00', id: '19T' },
    { name: 'Tiramisu', price: '$6.00', id: '20U' },
    { name: 'Panna Cotta', price: '$5.00', id: '21V' },
  ];

export default function MenuItems() {
    return (
        <View style={styles.menuContainer}>
        <View style={styles.menuHeader}>
            <Text style={styles.menuText}>Menu Items</Text>
        </View>
        <FlatList
          data={menuItemsToDisplay}
          renderItem={({item}) => <Text style={styles.menuItem}>{item.name}:  {item.price} </Text>}
        />
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
    menuItem: {
      padding: 10,
      fontSize: 18,
      height: 44,
      color: '#EDEFEE',
      paddingLeft: 40,
      paddingHorizontal: 15,
      display: 'flex'
    },
  });
  