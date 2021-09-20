import React, { useEffect, useState } from 'react'

import {
  View,
  Text,
  TouchableOpacity,
  Image, StyleSheet,
  SafeAreaView,
  FlatList,
  Dimensions
} from 'react-native'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getMenu } from '../services/Api';
import DetailScreen from '../Components/OrderScreen/DetailScreens'
import { useSelector, useDispatch } from "react-redux";
const windowHeight = Dimensions.get('window').height;

export default function OrderScreen() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([])
  const [isVisibleDetail, setIsVisibleDetail] = useState(false)
  useEffect(() => {
    const callGetMenu = async () => {
      try {
        const response = await getMenu();
        console.log('rs', response.data.data); // data tu api tra ve
        setProduct(response.data.data)
      } catch (error) {
        console.error(error);
      }
    }
    callGetMenu()
  }, [])

  const onAddToDetail = (item) => () => {
    dispatch({ type: 'ADD_DETAIL', data: { ...item, quantity: 1 } })
    setIsVisibleDetail(true)
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity
          onPress={onAddToDetail(item)}
          style={{ flexDirection: 'row', margin: 15, justifyContent: 'space-between' }}>
          <View 
          style={styles.itemContent}>
            <Text style={styles.itemHeading}>{item.product_name}</Text>
            <Text
              style={styles.itemText1}
              ellipsizeMode='tail' numberOfLines={2}
            >{item.description}</Text>
            <Text style={styles.itemText2}>{item.price}đ</Text>
          </View>
          <Image
            source={{ uri: item.image }}
            style={styles.itemImg}
          />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ height: windowHeight - 55 }}>
      {/* Header */}
      <TouchableOpacity style={styles.container}>
        <View style={styles.container_header}>
          <Image
            source={require('../assets/Images/shipper.png')}
            style={styles.imgShipper}
          />
          <View style={styles.container_header_content}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.headingTitle}>Giao đến</Text>
              <Material name="chevron-down" style={styles.headerIcon} />
            </View>
            <Text style={{ color: '#7E7E7E' }}>Các sản phẩm sẽ được giao đến địa chỉ của bạn</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.content_main}>
          <TouchableOpacity style={styles.content_picked}>
            <Text>Cà phê gói - Cà phê uống liền</Text>
            <Material name="chevron-down" size={18} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.content_searchIcon}>
          <Ionicons name="search-outline" size={14} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.content_heartIcon}>
          <Material name="heart-outline" size={14} />
        </TouchableOpacity>
      </View>
      {/* Body */}
      <Text style={styles.bodyHeading}>Cà Phê Gói - Cà Phê Uống liền</Text>
      <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
      />
      <DetailScreen showDetail={isVisibleDetail}
        close={(val) => setIsVisibleDetail(val)}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
  container_header: {
    margin: 10,
    flexDirection: 'row'
  },
  imgShipper: {
    width: 40,
    height: 40
  },
  container_header_content: {
    marginLeft: 10
  },
  headingTitle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  headerIcon: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 18
  },
  content: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
  },
  content_main: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#E3E3E3',
    borderRadius: 7,
    width: '74%',
    marginRight: 5
  },
  content_picked: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  content_searchIcon: {
    width: 40,
    backgroundColor: '#E3E3E3',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5
  },
  content_heartIcon: {
    width: 40,
    backgroundColor: '#E3E3E3',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  bodyHeading: {
    marginTop: 15,
    marginLeft: 25,
    marginBottom: 15,
    fontSize: 20,
    fontWeight: 'bold'
  },
  item: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10
  },
  itemContent: {
    width: '62%',
    flexDirection: 'column',
    justifyContent: "space-between"
  },
  itemImg: {
    width: 120,
    height: 120,
    borderRadius: 10
  },
  itemHeading: {
    fontWeight: 'bold',
    fontSize: 16
  },
  itemText1: {
    color: '#9E9E9E',
    fontSize: 16
  },
  itemText2: {
    fontSize: 15
  }
})