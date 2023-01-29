import React from "react";

import {View, Text, FlatList, StyleSheet} from 'react-native';

export default function MenuItems() {
    return (
        <View style={styles.menuContainer}>
        <View style={styles.menuHeader}>
            <Text style={styles.menuText}>Menu Items</Text>
        </View>
        <FlatList
          data={[
            {key: 'Hummus'},
            {key: 'Moutabal'},
            {key: 'Falafel'},
            {key: 'Marinated Olives'},
            {key: 'Kofta'},
            {key: 'Eggplant Salad'},
            {key: 'Lentil Burger'},
            {key: 'Smoked Salmon'},
            {key: 'Kofta Burger'},
            {key: 'Turkish Kebab'},
            {key: 'Buttered Rice'},
            {key: 'Breadsticks'},
            {key: 'Gyro'},
            {key: 'Lentil Soup'},
            {key: 'Greek Salad'},
            {key: 'Baklava'},
            {key: 'Rice Pilaf'},
            {key: 'Tiramisu'},
            {key: 'Panna Cotta'},
          ]}
          renderItem={({item}) => <Text style={styles.menuItem}>{item.key}</Text>}
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
    },
    menuText: {
     textAlign: 'center',
     fontSize: 25,
     paddingHorizontal: 20, 
     color: '#EDEFEE',

    },
    menuItem: {
      padding: 10,
      fontSize: 18,
      height: 44,
      color: '#EDEFEE',
      paddingLeft: 40,
      paddingHorizontal: 15,
    },
  });
  