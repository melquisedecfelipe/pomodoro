import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  title: {
    color: "#f95959",
    fontSize: 28,
    fontFamily: "Rubik-Bold",
    textAlign: "center",
    maxWidth: 300,
    marginBottom: 75,
  },

  button: {
    width: 72,
    height: 72,
    backgroundColor: "#fedede",
    borderRadius: 36,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },

  progress: {
    flexDirection: "column",
  },

  timer: {
    color: "#111111",
    fontSize: 75,
    fontFamily: "Rubik-Bold",
    textAlign: "center",
  },

  text: {
    color: "#657990",
    fontSize: 20,
    fontFamily: "Rubik-Regular",
    textAlign: "center",
    marginTop: -10,
    letterSpacing: -0.75,
  },
});
