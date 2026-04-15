import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";

export default function ProductDetailScreen({ route, cart, setCart }) {
  const { name, price, image, description, id } = route.params;

  const handleAddToCart = () => {
    // MEJORA: Validar si ya existe
    const exists = cart.find(item => item.id === id);
    if (exists) {
      Alert.alert("Aviso", "Este disco ya está en tu colección del carrito.");
      return;
    }
    setCart([...cart, route.params]);
    Alert.alert("¡Agregado!", `${name} se sumó a tu lista.`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price} USD</Text>
        <View style={styles.line} />
        <Text style={styles.sectionTitle}>Reseña del Álbum</Text>
        <Text style={styles.desc}>{description}</Text>
        
        <TouchableOpacity style={styles.cartBtn} onPress={handleAddToCart}>
          <Text style={styles.cartBtnText}>AÑADIR A LA COLECCIÓN</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  imgContainer: { backgroundColor: '#000', padding: 20, alignItems: 'center' },
  image: { width: 300, height: 300, resizeMode: 'contain' },
  content: { padding: 25 },
  name: { fontSize: 28, fontWeight: 'bold', color: '#1a1a1a' },
  price: { fontSize: 24, color: '#d35400', fontWeight: 'bold', marginVertical: 10 },
  line: { height: 1, backgroundColor: '#eee', marginVertical: 20 },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: 10 },
  desc: { fontSize: 16, color: '#666', lineHeight: 24 },
  cartBtn: { backgroundColor: '#1a1a1a', padding: 20, borderRadius: 10, marginTop: 40, alignItems: 'center' },
  cartBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16, letterSpacing: 1 }
});