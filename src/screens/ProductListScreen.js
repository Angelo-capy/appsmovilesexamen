import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import ProductCard from "../components/ProductCard";

const products = [
  { id: "1", name: "Abbey Road - Beatles", price: "45.00", image: "https://m.media-amazon.com/images/I/81S6Z8p7S6L._SL1500_.jpg", description: "El último álbum grabado por los Beatles. Un vinilo esencial de 180g." },
  { id: "2", name: "Kind of Blue - Miles Davis", price: "38.00", image: "https://m.media-amazon.com/images/I/719S92FvS8L._SL1200_.jpg", description: "La obra cumbre del Jazz modal. Sonido cálido y profundo." },
  { id: "3", name: "Dark Side - Pink Floyd", price: "50.00", image: "https://m.media-amazon.com/images/I/417Y8Z9O-XL.jpg", description: "Edición remasterizada. El viaje psicodélico definitivo." },
  { id: "4", name: "Back to Black - Amy Winehouse", price: "32.00", image: "https://m.media-amazon.com/images/I/71R7-LidXGL._SL1200_.jpg", description: "El disco que trajo el Soul al siglo XXI. Vinilo impecable." },
  { id: "5", name: "Random Access - Daft Punk", price: "42.00", image: "https://m.media-amazon.com/images/I/61Uxgub8yvL._SL1500_.jpg", description: "Ingeniería sonora perfecta en doble LP. Una joya moderna." },
];

export default function ProductListScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Esto asegura que la barra de arriba del cel también sea negra */}
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Colección</Text>
        <Text style={styles.subtitle}>VINILOS SELECCIONADOS</Text>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard 
            name={item.name} 
            price={item.price} 
            image={item.image} 
            onPress={() => navigation.navigate("ProductDetail", item)} 
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#121212" // NEGRO TOTAL PARA LA PANTALLA
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#121212",
  },
  title: { 
    fontSize: 28, 
    fontWeight: "bold", 
    color: "#fff" 
  },
  subtitle: {
    fontSize: 12,
    color: "#d35400",
    fontWeight: "bold",
    letterSpacing: 2,
    marginTop: 5
  },
  listContent: { 
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#121212" // FONDO NEGRO PARA LA LISTA
  },
});