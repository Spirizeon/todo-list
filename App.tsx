import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";

export default function App(){
	return (
		<View style={styles.container}>
			<Text style={styles.sectionTitle}>Today's tasks</Text> 
			<View style={styles.items}>
				<Task text = {'Task 1'}/>
				<Task text = {'Task 2'}/>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
    container: {
    	flex: 1,
	backgroundColor: '#FF0F00', 
    },
    taskpanes: {
    	paddingTop: 80, 
	paddingHorizontal: 40,
    },
    sectionTitle: {
    	fontSize: 28,
	alignSelf: 'center',
	paddingTop: 20,
    },
    items: {
    marginTop: 30,
    
    },
});
