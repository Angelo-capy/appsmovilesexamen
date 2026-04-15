import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductCard({ name, price, image, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { 
    backgroundColor: "#1e1e1e", // Gris muy oscuro para contrastar con el fondo negro
    padding: 12, 
    marginBottom: 15, 
    borderRadius: 15, 
    flexDirection: "row", 
    alignItems: "center",
    // Borde sutil para dar relieve y evitar que se pierda en el fondo
    borderWidth: 1,
    borderColor: "#333",
    // Sombra suave para Android
    elevation: 4,
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  image: { 
    width: 75, 
    height: 75, 
    borderRadius: 10,
    backgroundColor: "#000" 
  },
  info: { 
    marginLeft: 15, 
    justifyContent: "center",
    flex: 1 
  },
  name: { 
    fontSize: 17, 
    fontWeight: "bold", 
    color: "#fff", // Texto blanco
    marginBottom: 4
  },
  price: { 
    color: "#d35400", // Naranja Meloman's
    fontSize: 15,
    fontWeight: "700" 
  }
});