import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image, StyleSheet,
    SafeAreaView,
    FlatList,
    TextInput,
    Dimensions
} from 'react-native'

import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getAllStores } from '../services/Api';

const windowHeight = Dimensions.get('window').height;
const renderItem = ({ item }) => {
    return (
        <View style={styles.itemBody}>
            <TouchableOpacity style={{ flexDirection: 'row', margin: 15, justifyContent: 'space-between' }}>
                <Image source={{ uri: item.image_1 }} style={styles.itemImg} />
                <View style={styles.itemContent}>
                    <Text style={styles.itemHeading}>THE COFFEE HOUSE</Text>
                    <Text style={styles.itemText}>{item.address.full_address}</Text>
                    <Text style={styles.itemText}>cách đây {item.distance} km</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default function ShopScreen() {
    const [stores, getStores] = useState([])

    useEffect(() => {
        const callGetStores = async () => {
            try {
                const response = await getAllStores();
                console.log('rs', response.data); // data tu api tra ve
                getStores(response.data)

            } catch (error) {
                console.error(error);
            }
        }

        callGetStores()
    }, [])

    return (
        <SafeAreaView style={{ height: windowHeight - 55 }}>
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
                <View style={styles.header_map}>
                    <TouchableOpacity style={styles.header_search}>
                        <Ionicons name="search-outline" style={styles.header_searchIcon} />
                        <TextInput placeholder='Nhập tên đường' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.header_mapProperty}>
                        <Material name="map-search" style={styles.header_mapIcon} />
                        <Text style={{ fontWeight: 'bold' }}>Bản đồ</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Body */}

            <View style={styles.body}>
                <Text style={styles.body_heading}>Các cửa hàng khác</Text>
            </View>
            <FlatList
                data={stores}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{ height: 1000 }}
                showsVerticalScrollIndicator={false} />

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
    header_map: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
    },
    header_search: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D5D5D5',
        borderRadius: 10,
        width: '75%',
        height: 60
    },
    header_searchIcon: {
        padding: 15,
        fontSize: 16,
        fontWeight: 'bold'
    },
    header_mapProperty: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    header_mapIcon: {
        padding: 15,
        fontSize: 16,
        fontWeight: 'bold'
    },
    body: {
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15
    },
    body_heading: {
        marginLeft: 10,
        marginBottom: 30,
        fontSize: 20,
        fontWeight: 'bold'
    },
    itemBody: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10
    },
    itemImg: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    itemContent: {
        width: '70%',
        flexDirection: 'column',
        justifyContent: "space-between",
        marginLeft: 10
    },
    itemHeading: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#C8C8C8'
    },
    itemText: {
        fontSize: 16
    }
})
