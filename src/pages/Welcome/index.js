import React from "react";
import { SafeAreaView, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import bannerImg from "../../assets/banner.png";

import { styles } from "./styles";

export default function Welcome() {
  const navigation = useNavigation();

  function navigateToTimer() {
    navigation.navigate("Timer");
  }

  return (
    <LinearGradient colors={["#fca9a9", "#f95959"]} style={styles.container}>
      <Image source={bannerImg} />

      <Text style={styles.title}>Staying focused at work isn’t easy!</Text>

      <TouchableOpacity style={styles.button} onPress={navigateToTimer}>
        <Feather name="arrow-right" size={32} color="#f95959" />
      </TouchableOpacity>
    </LinearGradient>
  );
}
