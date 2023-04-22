import { StyleSheet, Text, View } from "react-native"
const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
        <Text>
            HellO WelcomeScreen
        </Text>
    </View>
  )
}

export default WelcomeScreen
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});