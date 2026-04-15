import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />
        <Text style={styles.name}>Melómano VIP</Text>
        <Text style={styles.email}>coleccionista@melomans.com</Text>
      </View>

      <View style={styles.menu}>
        {['Mis Pedidos', 'Configuración', 'Ayuda'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Text style={styles.menuText}>{item}</Text>
            <Ionicons name="chevron-forward" size={20} color="#d35400" />
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={[styles.menuItem, { borderBottomWidth: 0 }]}>
          <Text style={[styles.menuText, { color: '#ff4444' }]}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212", padding: 20 },
  profileCard: { alignItems: "center", marginVertical: 40 },
  image: { width: 130, height: 130, borderRadius: 65, borderWidth: 3, borderColor: "#d35400" },
  name: { fontSize: 24, fontWeight: "bold", color: "#fff", marginTop: 15 },
  email: { fontSize: 14, color: "#999", marginTop: 5 },
  menu: { backgroundColor: "#1e1e1e", borderRadius: 15, paddingHorizontal: 15 },
  menuItem: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 18, borderBottomWidth: 1, borderBottomColor: "#333" },
  menuText: { color: "#fff", fontSize: 16, fontWeight: '500' }
});