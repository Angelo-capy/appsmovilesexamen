import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function CartScreen({ cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.img} />
            <View style={{ flex: 1 }}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => setCart(cart.filter(i => i.id !== item.id))}>
              <Ionicons name="close-circle" size={24} color="#666" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Tu colección está vacía...</Text>}
      />
      
      {cart.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
          <TouchableOpacity style={styles.buyBtn}>
            <Text style={styles.buyBtnText}>FINALIZAR COMPRA</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCart([])}>
            <Text style={styles.clearText}>Vaciar Carrito</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212", padding: 20 },
  item: { flexDirection: "row", padding: 12, backgroundColor: "#1e1e1e", marginBottom: 12, borderRadius: 12, alignItems: 'center' },
  img: { width: 50, height: 50, borderRadius: 5, marginRight: 15 },
  itemName: { fontSize: 16, fontWeight: "600", color: "#fff" },
  itemPrice: { color: "#d35400", fontWeight: 'bold' },
  empty: { textAlign: "center", color: "#666", marginTop: 50, fontSize: 16 },
  footer: { borderTopWidth: 1, borderColor: "#333", paddingTop: 20 },
  totalText: { fontSize: 24, fontWeight: "bold", color: "#fff", textAlign: 'right', marginBottom: 15 },
  buyBtn: { backgroundColor: "#d35400", padding: 18, borderRadius: 12, alignItems: 'center' },
  buyBtnText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  clearText: { color: "#666", textAlign: "center", marginTop: 15 }
});