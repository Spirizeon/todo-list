import React from 'react';
import { View, Text, StyleSheet } from "react-native"; //import components

const Task = (props) => { //props is argument set

	return ( 
		<View style= {styles.item}>
			<View style={styles.itemLeft}>
				<View style={styles.square}></View> // just a box
				<Text style={styles.itemText}>{props.text}</Text> 
			</View>
			<View style={styles.circular}></View> //circular box
		</View>
	);
}

const styles = StyleSheet.create({
	item: { //TASK Background
		backgroundColor: '#FFF',
		padding: 15,
		borderRadius: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	itemLeft: { //TASK PANE STYLE
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	itemText: {

	},
	square: { //square thingy 
		width: 24,
		height: 24,
		backgroundColor: '#55BCf6',
		opacity: 0.4,
		padding: 13,
	},
	circular: { //circular thingy
		width: 12,
		height: 12,
		borderColor: "#55BCF6",
		borderWidth: 2,
		borderRadius: 5,
	},
})

export default Task;
