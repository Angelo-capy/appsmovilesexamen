import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.brand}>MELOMAN'S</Text>
        <Text style={styles.tagline}>EL REFUGIO DEL COLECCIONISTA</Text>
      </View>

      <ImageBackground 
        source={{ uri: 'https://images.unsplash.com/photo-1539375665275-f9ad415ef9ac?q=80&w=1000' }} 
        style={styles.hero}
        imageStyle={{ borderRadius: 20 }}
      >
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>Vinilos de 180g</Text>
          <Text style={styles.heroSubtitle}>Calidad de audio premium</Text>
          <TouchableOpacity 
            style={styles.btn} 
            onPress={() => navigation.navigate('Products')}
          >
            <Text style={styles.btnText}>EXPLORAR TIENDA</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.infoBox}>
        <Ionicons name="shield-checkmark" size={24} color="#d35400" />
        <Text style={styles.infoText}>Garantía de estado Mint/Near Mint</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212" }, // Fondo oscuro elegante
  header: { alignItems: "center", paddingVertical: 40 },
  logo: { width: 120, height: 120, borderRadius: 60, borderColor: '#d35400', borderWidth: 2 },
  brand: { fontSize: 35, fontWeight: "900", color: "#fff", letterSpacing: 4, marginTop: 10 },
  tagline: { color: "#d35400", fontSize: 12, letterSpacing: 2, fontWeight: '600' },
  hero: { height: 250, margin: 20, justifyContent: 'flex-end', overflow: 'hidden' },
  heroOverlay: { backgroundColor: 'rgba(0,0,0,0.5)', padding: 20 },
  heroTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  heroSubtitle: { color: '#ddd', marginBottom: 15 },
  btn: { backgroundColor: '#d35400', padding: 12, borderRadius: 5, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: 'bold', letterSpacing: 1 },
  infoBox: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20 }
});