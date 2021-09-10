import React, { useState, useEffect } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	Dimensions,
} from 'react-native'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalLogin from '../Components/OtherScreens/ModalLogin';

const windowHeight = Dimensions.get('window').height;
export default function OtherScreen() {
	const [isVisible, setIsVisible] = useState(false)

	return (
		<SafeAreaView style={{ height: windowHeight - 50 }}>
			{/* Header */}
			<View style={{
				backgroundColor: '#ffffff',
				shadowOffset: { width: 10, height: 10, },
				shadowColor: 'black',
				shadowOpacity: 1.0,
				shadowRadius: 8,
				elevation: 10
			}}>
				<View style={styles.header}>
					<Text style={styles.header_Heading}>Khác</Text>
					<View style={styles.header_icon}>
						<TouchableOpacity style={styles.header_Ticket}>
							<Material name="ticket-confirmation-outline" style={styles.header_iconTicket} />
							<Text style={styles.header_numberTicket}>5</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.header_notification}>
							<Material name="bell-outline" style={styles.header_iconNotification} />
						</TouchableOpacity>
					</View>
				</View>
			</View>

			{/* Body */}

			<ScrollView
				style={{ backgroundColor: '#F5F5F5' }}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.body}>
					{/* Utilities */}
					<Text style={styles.body_titleHeading}>Tiện ích</Text>
					<TouchableOpacity style={{ backgroundColor: '#ffffff', borderRadius: 10, marginBottom: 5 }}>
						<View style={{ margin: 20 }}>
							<Material name="history" style={styles.body_icon} />
							<Text style={styles.body_text}>Lịch sử đơn hàng</Text>
						</View>
					</TouchableOpacity>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<TouchableOpacity style={{ backgroundColor: '#ffffff', borderRadius: 10, marginTop: 5, width: '49%' }}>
							<View style={{ margin: 20 }}>
								<Material name="music-note-outline" style={styles.body_iconMusic} />
								<Text style={styles.body_text}>Nhạc đang phát</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={{ backgroundColor: '#ffffff', borderRadius: 10, marginTop: 5, width: '49%' }}>
							<View style={{ margin: 20 }}>
								<Material name="alert-circle-outline" style={styles.body_iconRules} />
								<Text style={styles.body_text}>Điều khoản</Text>
							</View>
						</TouchableOpacity>
					</View>

					{/* Support */}
					<Text style={{ marginTop: 25, ...styles.body_titleHeading }}>Hỗ trợ</Text>
					<View style={{ backgroundColor: '#ffffff', borderRadius: 10, marginBottom: 5 }}>
						<TouchableOpacity style={styles.body_itemMain}>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<Material name="star-outline" style={styles.body_iconMain} />
								<Text style={styles.body_textMain}>Đánh giá đơn hàng</Text>
							</View>
							<Material name="chevron-right" style={styles.body_iconMain} />
						</TouchableOpacity>
						<TouchableOpacity style={{ ...styles.body_itemMain, borderBottomWidth: 0 }}>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<Ionicons name="chatbox-outline" style={styles.body_iconMain} />
								<Text style={styles.body_textMain}>Liên hệ và góp ý</Text>
							</View>
							<Material name="chevron-right" style={styles.body_iconMain} />
						</TouchableOpacity>
					</View>

					{/* Account */}
					<Text style={{ marginTop: 25, ...styles.body_titleHeading }}>Tài khoản</Text>
					<View style={{ backgroundColor: '#ffffff', borderRadius: 10, marginBottom: 5 }}>
						<TouchableOpacity style={styles.body_itemMain}>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<Material name="account-settings-outline" style={styles.body_iconMain} />
								<Text style={styles.body_textMain}>Thông tin cá nhân</Text>
							</View>
							<Material name="chevron-right" style={styles.body_iconMain} />
						</TouchableOpacity>
						<TouchableOpacity style={styles.body_itemMain}>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<Material name="bookmark-outline" style={styles.body_iconMain} />
								<Text style={styles.body_textMain}>Địa chỉ đã lưu</Text>
							</View>
							<Material name="chevron-right" style={styles.body_iconMain} />
						</TouchableOpacity>
						<TouchableOpacity style={styles.body_itemMain}>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<Ionicons name="settings" style={styles.body_iconMain} />
								<Text style={styles.body_textMain}>Cài đặt</Text>
							</View>
							<Material name="chevron-right" style={styles.body_iconMain} />
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => setIsVisible(true)}
							style={{ ...styles.body_itemMain, borderBottomWidth: 0 }}
						>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<Ionicons name="chatbox-outline" style={styles.body_iconMain} />
								<Text style={styles.body_textMain}>Đăng nhập</Text>
							</View>
							<Material name="chevron-right" style={styles.body_iconMain} />
						</TouchableOpacity>
						<ModalLogin
							showModal={isVisible}
							close={(val) => setIsVisible(val)}
							visible={isVisible}
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: 15,
		marginRight: 15,
		alignItems: 'center',
		height: 55
	},
	header_Heading: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	header_icon: {
		flexDirection: 'row'
	},
	header_Ticket: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 8,
		paddingBottom: 8,
		paddingRight: 10,
		paddingLeft: 10,
		borderRadius: 20,
		backgroundColor: '#ffffff',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
		elevation: 10,
	},
	header_iconTicket: {
		fontSize: 16,
		color: '#8C6337',
		marginRight: 5,
		fontWeight: 'bold'
	},
	header_numberTicket: {
		fontSize: 16,
		color: '#8C6337',
		marginLeft: 5,
		fontWeight: 'bold'
	},
	header_notification: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 7,
		paddingTop: 8,
		paddingBottom: 8,
		paddingRight: 10,
		paddingLeft: 10,
		borderRadius: 20,
		backgroundColor: '#ffffff',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
		elevation: 10,
	},
	header_iconNotification: {
		fontSize: 16,
		color: '#8C6337',
		fontWeight: 'bold'
	},
	body: {
		margin: 15
	},
	body_titleHeading: {
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: 10,
		marginBottom: 15,
	},
	body_icon: {
		fontSize: 25,
		color: '#CE7107',
		marginBottom: 5
	},
	body_text: {
		fontSize: 14,
		marginTop: 5
	},
	body_iconMusic: {
		fontSize: 14,
		color: '#8FCB63',
		marginBottom: 5,
		width: 25,
		height: 25,
		padding: 5,
		borderWidth: 1,
		borderColor: '#8FCB63'
	},
	body_iconRules: {
		fontSize: 25,
		color: '#BDA4E5',
		marginBottom: 5,
	},
	body_itemMain: {
		flexDirection: 'row',
		marginLeft: 15,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 20,
		paddingBottom: 20,
		borderBottomWidth: 1,
		borderColor: '#F4F4F4'
	},
	body_iconMain: {
		fontSize: 16,
		fontWeight: 'bold',
		paddingRight: 10
	},
	body_textMain: {
		fontSize: 14,

	}
})
