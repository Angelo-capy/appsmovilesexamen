import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

import HomeScreen from '../screens/HomeScreen'; 
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const [cart, setCart] = useState([]);

  function ProductStack() {
    return (
      <Stack.Navigator 
        screenOptions={{ 
          headerStyle: { backgroundColor: '#121212', borderBottomWidth: 0 },
          headerTintColor: '#d35400',
          headerTitleStyle: { fontWeight: 'bold' },
          cardStyle: { backgroundColor: '#121212' }
        }}
      >
        <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Vinilos' }} />
        <Stack.Screen name="ProductDetail" options={{ title: 'Detalle' }}>
          {(props) => <ProductDetailScreen {...props} cart={cart} setCart={setCart} />}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
            else if (route.name === 'Products') iconName = focused ? 'disc' : 'disc-outline';
            else if (route.name === 'Cart') iconName = focused ? 'cart' : 'cart-outline';
            else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';

            return (
              <View>
                <Ionicons name={iconName} size={size} color={color} />
                {route.name === 'Cart' && cart.length > 0 && (
                  <View style={styles.badge}><Text style={styles.badgeText}>{cart.length}</Text></View>
                )}
              </View>
            );
          },
          tabBarActiveTintColor: '#d35400',
          tabBarInactiveTintColor: '#666',
          tabBarStyle: { backgroundColor: '#000', borderTopWidth: 0, height: 65, paddingBottom: 10 },
          headerStyle: { backgroundColor: '#121212', borderBottomWidth: 0 },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Tab.Screen name="Products" component={ProductStack} options={{ title: 'Tienda', headerShown: false }} />
        <Tab.Screen name="Cart" options={{ title: 'Carrito', headerShown: true }}>
          {(props) => <CartScreen {...props} cart={cart} setCart={setCart} />}
        </Tab.Screen>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Mi Perfil', headerShown: true }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  badge: { position: 'absolute', right: -6, top: -3, backgroundColor: '#d35400', borderRadius: 9, width: 18, height: 18, justifyContent: 'center', alignItems: 'center' },
  badgeText: { color: 'white', fontSize: 10, fontWeight: 'bold' }
});