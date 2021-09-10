import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image, StyleSheet,
    SafeAreaView,
    Dimensions,
    ScrollView
} from 'react-native'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

const windowHeight = Dimensions.get('window').height;

export default function TicketScreen() {
    return (
        <SafeAreaView style={{ height: windowHeight - 55, backgroundColor: '#F5F5F5' }}>
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
                    <Text style={styles.header_Heading}>Tích điểm</Text>
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
                <View style={{ marginLeft: 15, marginBottom: 15, flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Text style={styles.headerText}>Tích điểm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.headerText}>Đổi ưu đãi</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Card ticket */}
            <ScrollView
                style={{ margin: 15 }}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.bodyCard}>
                    <View style={styles.cardTicketForm}>
                        <View style={{ margin: 10 }}>
                            <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: 'bold' }}>HƯỞNG NGUYỄN</Text>
                            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>0 BEAN - Mới</Text>
                        </View>
                        <View style={styles.btnTicket}>
                            <View style={{}}>
                                <Material name='chevron-double-down' style={styles.downIcon} />
                            </View>
                            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Tích điểm</Text>
                        </View>
                        <View style={styles.QRcode}>
                        </View>
                    </View>
                    <View style={{ margin: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>MỚI</Text>
                            <Text>ĐỒNG</Text>
                        </View>
                        <View style={{
                            width: '100%',
                            height: 6,
                            backgroundColor: '#DD570E',
                            borderRadius: 10,
                            marginBottom: 10,
                            marginTop: 10
                        }}></View>
                        <View style={{ alignItems: 'center' }}>
                            <Text>Còn 100 BEAN nữa sẽ thăng hạng</Text>
                            <Text>Đổi quà không ảnh hưởng đến việc thăng hạng của bạn</Text>
                            <Text>Chưa tích điểm</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.itembtn}>
                        <View style={{ margin: 10 }}>
                            <Material name='gift-outline' style={styles.iconBTN} />
                            <Text style={{ fontSize: 18, marginTop: 5 }}>Đổi ưu đãi</Text>
                        </View>
                    </View>
                    <View style={styles.itembtn}>
                        <View style={{ margin: 10 }}>
                            <Material name='ticket-confirmation-outline' style={styles.iconBTN} />
                            <Text
                                style={{ fontSize: 18, marginTop: 5 }}
                                ellipsizeMode='tail' numberOfLines={1}
                            >Phiếu ưu đãi của bạn</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.itembtn}>
                        <View style={{ margin: 10 }}>
                            <Image source={require('../assets/Images/bean.png')} style={{ width: 18, height: 18 }} />
                            <Text style={{ fontSize: 18, marginTop: 5 }}>Lịch sử giao dịch</Text>
                        </View>
                    </View>
                    <View style={styles.itembtn}>
                        <View style={{ margin: 10 }}>
                            <Material name='shield-outline' style={{ ...styles.iconBTN, color: '#2488EC' }} />
                            <Text style={{ fontSize: 18, marginTop: 5 }}>Quyền lợi của bạn</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, alignItems:'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Phiếu ưu đãi của bạn</Text>
                    <TouchableOpacity style={styles.seeAll}>
                        <Text style={{fontWeight: 'bold', color: 'orange'}}>Xem tất cả</Text>
                    </TouchableOpacity>
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
        height: 50
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
    headerText: {
        padding: 10,
        marginRight: 10
    },
    bodyCard: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
    },
    cardTicketForm: {
        backgroundColor: '#F98A1F',
        borderRadius: 15
    },
    btnTicket: {
        position: 'absolute',
        right: 10,
        top: 0,
        backgroundColor: '#DD570E',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: '#ffffff',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 8,
        paddingRight: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    downIcon: {
        color: '#ffffff',
        marginLeft: 3,
        marginRight: 3,
        fontSize: 16
    },
    QRcode: {
        height: 100,
        backgroundColor: '#ffffff',
        margin: 10,
        borderRadius: 10
    },
    itembtn: {
        backgroundColor: '#ffffff',
        width: '49%',
        marginTop: 15,
        borderRadius: 10
    },
    iconBTN: {
        color: '#E06A4B',
        fontSize: 18,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    seeAll:{
        backgroundColor: '#FEF8E4',
        padding: 10,
        borderRadius: 15
    }
})