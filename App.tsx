import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ActivityIndicator } from 'react-native';
import Pay from './components/Pay';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Loading Your Cart...</Text>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  const cartItems = [
    { id: '1', name: 'Wireless Bluetooth Earbuds', price: 5999, image: 'https://images-na.ssl-images-amazon.com/images/I/61GJMjW0d9L._SL1500_.jpg' },
    { id: '2', name: 'Smartphone Case', price: 1299, image: 'https://www.bhphotovideo.com/images/images2000x2000/encased_ps928bk_phantom_wallet_case_for_1599176.jpg' },
    { id: '3', name: 'Fitness Smartwatch', price: 79999, image: 'https://www.bhphotovideo.com/images/images2500x2500/polar_90071063_ignite_fitness_watch_medium_large_1488617.jpg' },
    { id: '4', name: 'Gaming Mouse', price: 3999, image: 'https://i5.walmartimages.com/asr/fe47a4ab-5ecc-414f-ae49-6c7a2669e11b_1.42489ef0e331c97f5252d7fc211303a1.jpeg' },
    { id: '5', name: 'LED Desk Lamp', price: 3499, image: 'https://i5.walmartimages.com/asr/f1d627cc-2535-4930-9754-cf3c97908124_1.e8ef67775856aece0221b4db1de96648.jpeg' },
    { id: '6', name: 'Wireless Keyboard', price: 4599, image: 'https://www.bhphotovideo.com/images/images2500x2500/hp_h6r56aa_aba_k3500_wireless_keyboard_1085780.jpg' },
    { id: '7', name: 'Ergonomic Office Chair', price: 89999, image: 'https://i5.walmartimages.com/asr/11bdf98e-0ea5-46de-94e9-616268f07b93.977b903156a5a6fa8db74b02da62b668.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff' },
  ];
  

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>R{item.price / 100}</Text>
            </View>
          </View>
        )}
      />
      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: R {totalAmount / 100}</Text>
        <TouchableOpacity>
          <Text style={{
            width: '100%'
          }}>
            <Pay amount={totalAmount } />
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#4caf50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#555',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});


