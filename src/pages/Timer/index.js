import React, { useState, useRef } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import { styles } from "./styles";

function formatSeconds(seconds) {
  if (seconds < 60) {
    return seconds < 10 ? `0${seconds}` : `${seconds}`;
  }

  return seconds < 600
    ? `0${Math.floor(seconds / 60)}`
    : `${Math.floor(seconds / 60)}`;
}

export default function Timer() {
  const timerRef = useRef();

  const [timerEnabled, setTimerEnabled] = useState(false);
  const [secondsEllapsed, setSecondsEllapsed] = useState(0);

  function toggleTimer() {
    if (timerEnabled) {
      clearInterval(timerRef.current);

      setTimerEnabled(false);
    } else {
      timerRef.current = setInterval(() => {
        setSecondsEllapsed((state) => state + 1);
      }, 1000);

      setTimerEnabled(true);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pomodoro</Text>

      <AnimatedCircularProgress
        size={280}
        width={12}
        fill={(secondsEllapsed * 100) / 1500}
        tintColor="#f95959"
        rotation={0}
        backgroundColor="#fedede"
      >
        {() => (
          <View style={styles.progress}>
            <Text style={styles.timer}>{formatSeconds(secondsEllapsed)}</Text>
            <Text style={styles.text}>
              {secondsEllapsed < 60 ? "seconds" : "minutes"}
            </Text>
          </View>
        )}
      </AnimatedCircularProgress>

      <TouchableOpacity style={styles.button} onPress={toggleTimer}>
        <Feather
          name={timerEnabled ? "pause-circle" : "play-circle"}
          size={42}
          color="#f95959"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
