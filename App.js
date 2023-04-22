import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import UserScreen from "./components/UserScreen";
import WelcomeScreen from "./components/WelcomeScreen";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="User">
        <Drawer.Screen name={"User"} component={UserScreen} />
        <Drawer.Screen name={"Welcome"} component={WelcomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
  // const [visiableModal, setVisiableModal] = useState(false);
  // const [Tasks, setTasks] = useState([]);
  // function startAddTaskHandler() {
  //   setVisiableModal(true);
  // }
  // function endTaskHandler() {
  //   setVisiableModal(false);
  // }
  // const taskEventHandler = (enteredText) => {
  //   setEnterText(enteredText);
  // };
  // const addTaskHandler = (enterText) => {
  //   setTasks((prevTask) => [
  //     ...prevTask,
  //     { text: enterText, id: Math.random(1).toString() },

  //   ]);
  //   endTaskHandler();
  // };
  // const deleteTaskHandler = (id) => {
  //   // console.log(id);
  //   setTasks((prevTask) => {
  //     return prevTask.filter((task) => task.id !== id);
  //   });
  // };
  // return (
  //   <>
  //   <StatusBar style="auto"/>
  //     <View style={styles.appContiner}>
  //       <Button
  //         title="add New Task"
  //         color={"black"}
  //         onPress={startAddTaskHandler}
  //       />
  //       {visiableModal && (
  //         <TaskInput
  //           visiable={visiableModal}
  //           closeTask={endTaskHandler}
  //           onAddTask={addTaskHandler}
  //         />
  //       )}
  //       <View style={styles.taskConatiner}>
  //         <FlatList
  //           data={Tasks}
  //           renderItem={(itemData) => {
  //             return (
  //               <TaskItem
  //                 text={itemData.item.text}
  //                 id={itemData.item.id}
  //                 onDeleteItem={deleteTaskHandler}
  //               />
  //             );
  //           }}
  //           keyExtractor={(item, index) => {
  //             return item.id;
  //           }}
  //           // endFillColor={"black"}
  //         />
  //       </View>
  //     </View>
  //   </>
  // );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

// const styles = StyleSheet.create({
//   appContiner: {
//     flex: 1,
//     paddingTop: 50,
//     paddingHorizontal: 10,
//   },
//   taskConatiner: {
//     flex: 5,
//   },
// });

// export default function App() {
//   return (
//     <View
//       style={{
//         padding: 50,
//         flexDirection: "row",
//         width: "80%",
//         height: 300,
//         justifyContent: "space-around",
//         alignItems:"stretch"
//       }}>
//       <View
//         style={{
//           backgroundColor: "blue",
//           flex: 1,
//           justifyContent: "center",
//           alignItems: "center",
//         }}>
//         <Text>1</Text>
//       </View>
//       <View
//         style={{
//           backgroundColor: "green",
//           flex:1,
//           justifyContent: "center",
//           alignItems: "center",
//         }}>
//         <Text>2</Text>
//       </View>
//       <View
//         style={{
//           backgroundColor: "red",
//           flex:2,
//           justifyContent: "center",
//           alignItems: "center",
//         }}>
//         <Text>3</Text>
//       </View>
//     </View>
//   );
// }
