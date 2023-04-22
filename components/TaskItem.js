import { Text, View, StyleSheet, Pressable } from "react-native";
const TaskItem = (props) => {
  return (
    <View style={styles.taskItems}>
      <Pressable
        android_ripple={{ color: "gray" }}
        style={({ pressed }) => pressed && styles.pressItem}
        onPress={props.onDeleteItem.bind(this, props.id)}>
        <Text style={styles.taskText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  taskItems: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "black",
    color: "#cccccc",
  },
  pressItem: {
    opacity: 0.5,
    color:"red",
  },
  taskText: {
    color: "#cccccc",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
