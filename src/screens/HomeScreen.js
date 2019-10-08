import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Dimensions, StatusBar } from 'react-native';
import Carousel from "react-native-carousel-control";
import {createAppContainer} from 'react-navigation';
//import PreparationScreen from './PreparationScreen';
import PreparationMenu from '../components/PreparationMenu';
import PreparationHeader from '../components/PreparationHeader';
import InfoTemplate from './InfoTemplate';

const preparationData = [
	{ 
		key: 1, 
		source: require('../assets/handwash.png'), 
		text: "If you have time, wash your hands", 
		modalText: "Use clean water and soap to disinfect your hands" }, 
	{ key: 2, source: require('../assets/pillow.png'), text: "Get a comfortable place to lie on, most preferably the floor" },
	{ key: 3, source: require('../assets/pillow.png'), text: "Spread a cloth on the floor, ensuring comfort" },
]

export default class HomeScreen extends Component {
	render() {
		return(
			<InfoTemplate 
				icon={require('../assets/prepare.png')}
				title={"Preparation"}
				data={preparationData}
				style={styles.home}
			/>
		);
	}
}

const styles = StyleSheet.create({
	home: {
		backgroundColor: '#CCCCCC'
	}
});