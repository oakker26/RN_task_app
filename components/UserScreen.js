import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native"

const UserScreen = () => {
  return (
    <>
    <StatusBar/>
      <View style={styles.container}>
        <Text>Hello UserScreen</Text>
      </View>
    </>
  );
}

export default UserScreen

const styles=StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        flex:1
    }
})