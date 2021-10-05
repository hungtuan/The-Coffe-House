import React, { useState } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	StyleSheet,
	SafeAreaView,
	FlatList,
	Dimensions,
	ScrollView
} from 'react-native'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from "react-redux";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const w = Dimensions.get('screen').width

export default function CartShopping() {
	const productList = useSelector((store) => store.ProductReducer.products)
	console.log(productList)
	const renderItem = ({ item }) => {
		return (
			<View style={{flexDirection: 'row', alignItems: 'center'}}>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Image source={{ uri: item.image }} style={{ width: 90, height: 90, borderRadius: 10 }} />
				</View>
				<View style={{flexDirection: 'row', justifyContent:'space-between'}}>
					<View>
						<Text>{item?.product_name}</Text>
					</View>
					<View>
						<View style={{flexDirection: 'row'}}>
							<TouchableOpacity
								// onPress={onChangeQuantity('reduce', productList}
								style={styles.changeQuantityButton}>
								<Material name='minus' size={18} style={{ fontWeight: 'bold' }} />
							</TouchableOpacity>
							<Text>{item?.quantity}</Text>
							<TouchableOpacity
								// onPress={onChangeQuantity('increase', productList}
								style={styles.changeQuantityButton}>
								<Material name='plus' size={18} style={{ fontWeight: 'bold' }} />
							</TouchableOpacity>
						</View>
						<Text>{item.price}đ</Text>
					</View>
					<TouchableOpacity>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
	return (
		<SafeAreaView style={{ height: windowHeight - 55, backgroundColor: '#FEF7E5' }}>
			{/* Header */}
			<View style={styles.header}>
				<Text style={styles.header_Heading}>Giỏ hàng</Text>
			</View>
			<FlatList
				data={productList}
				renderItem={renderItem}
				keyExtractor={item => item._id}
				showsVerticalScrollIndicator={false}
			></FlatList>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	header: {
		margin: 15,
		marginTop: 10,
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center'
	},
	header_Heading: {
		fontSize: 16,
		fontWeight: 'bold'
	},
})
