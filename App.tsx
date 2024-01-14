import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";

export default function App(){
	return (
		<View style={styles.container}>
			<Text style={styles.sectionTitle}>Today's tasks</Text> 
			<View style={styles.items}>
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
    container: {
    	flex: 1,
	backgroundColor: '#EBEAED', 
    },
    taskpanes: {
    	paddingTop: 80, 
	paddingHorizontal: 20,
    },
    sectionTitle: {
    	fontSize: 24,
	fontWeight: 'bold'	
    },
    items: {},
});