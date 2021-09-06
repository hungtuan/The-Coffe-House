import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import ModalVerifyPhone from './ModalVerifyPhone';
import { toComputedKey } from '@babel/types';

const h = Dimensions.get('screen').height
const w = Dimensions.get('screen').width

export default function ModalLogin(props) {
	const [isVisible, setIsVisible] = useState()
	const [code, setCode] = useState()
	const closeModal = () => {
		setIsVisible(false)
		props.close(isVisible)
	}

	return (
		<Modal
			testID={'modal'}
			isVisible={props.showModalVerifyPhone}
			animationIn="slideInRight"
			animationOut="slideOutRight"
			style={styles.modal}>
			<View style={styles.content}>
				<TouchableOpacity
					onPress={closeModal}
					style={styles.closeModalForm}>
					<Ionicons name='close-outline' style={styles.iconClose} />
				</TouchableOpacity>
				<View style={styles.bodyModal}>
					<Text style={styles.modalHeading}>Xác nhận mã OTP</Text>
					<Text>Một mã xác thực gồm 6 số</Text>
					<Text>đã được gửi đến số điện thoại </Text>
				</View>
				<Text style={{ textAlign: 'center', marginTop: 30 }}>Nhập mã để tiếp tục</Text>
				<View style={{ margin: 15 }}>
					<TextInput
						onChangeText={(val) => setCode(val)}
						keyboardType={'number-pad'}
						style={styles.modalCode}
					></TextInput>
				</View>
				<View style={{alignItems:'center'}}>
					<TouchableOpacity style={styles.modalLogin}>
						<Text style={{ color: '#ffffff', textAlign: 'center' }}>Đăng Nhập</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal >
	)
}

const styles = StyleSheet.create({
	modal: {
		marginTop: 10,
		borderRadius: 15,
		width: w,
		height: h,
		marginLeft: 0
	},
	content: {
		backgroundColor: 'white',
		width: w,
		height: '100%',
		borderRadius: 15,
		borderColor: 'rgba(0, 0, 0, 0)',
	},
	closeModalForm: {
		flexDirection: 'row-reverse'
	},
	iconClose: {
		fontSize: 20,
		margin: 15
	},
	bodyModal: {
		alignItems: 'center'
	},
	modalHeading: {
		fontSize: 20,
		fontWeight: 'bold',
		margin: 15
	},
	modalCode: {
		padding: 15,
		borderRadius: 10,
		borderWidth: 1
	},
	modalLogin: {
		width: 300,
		backgroundColor: '#BBBBBB',
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 10,
		marginBottom: 10,
		borderRadius: 10
	}
});
