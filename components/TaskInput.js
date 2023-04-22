import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

const TaskInput = (props) => {
  const [enterText, setEnterText] = useState("");
  const taskEventHandler = (enteredText) => {
    setEnterText(enteredText);
  };
  const addTaskHandler = () => {
    props.onAddTask(enterText);
    setEnterText("");
    // props.closeTask();
  };
  const endTaskHandler = () => {
    props.closeTask();
  };
  console.log('Start Task INput');
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/task.png")}
        />
        <TextInput
          onChangeText={taskEventHandler}
          style={styles.textInput}
          placeholder="Your To Do List"
          value={enterText}
          placeholderTextColor={"gray"}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={endTaskHandler} color={"black"} title="Cancle" />
          </View>
          <View style={styles.button}>
            <Button
              onPress={addTaskHandler}
              color={"gold"}
              title="Add to Task"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "row",
    padding: 16,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "black",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    color: "black",
    width: "100%",
    borderRadius: 10,
    padding: 12,
    marginVertical: 16,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "40%",
    marginHorizontal: 10,
  },
  image: {
    margin: 20,
  },
});
