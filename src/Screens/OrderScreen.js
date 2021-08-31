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
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getMenu } from '../services/Api';


const windowHeight = Dimensions.get('window').height;

const DATA = [
  {
    id: 1,
    titleHeading: 'Thùng 24 Lon cà Phê Sữa Đá',
    title: 'Ưu đãi 10% cho đơn hàng mua Cà phê gói - Cà phê uống liền...',
    img: 'https://product.hstatic.net/1000075078/product/lon-park24_10572efcaba3475d84d6fb0a859a56f0_large.jpg',
    price: '336.000'
  },
  {
    id: 2,
    titleHeading: 'Combo 6 Lon cà Phê Sữa Đá',
    title: 'Ưu đãi 10% cho đơn hàng mua Cà phê gói - Cà phê uống liền...',
    img: 'https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg',
    price: '84.000'

  },
  {
    id: 3,
    titleHeading: 'Cà Phê Sữa Đá Hòa Tan',
    title: 'Ưu đãi 10% cho đơn hàng mua Cà phê gói - Cà phê uống liền...',
    img: 'https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg',
    price: '44.000'
  },
  {
    id: 4,
    titleHeading: 'Cà Phê Peak Flavor - Hương...',
    title: 'Ưu đãi 10% cho đơn hàng mua Cà phê gói - Cà phê uống liền...',
    img: 'https://product.hstatic.net/1000075078/product/peak_196fc2433ab14ef297113696e4d6c179_large.jpg',
    price: '90.000'
  },
  {
    id: 5,
    titleHeading: 'Cà Phê Rich Finish - Gu Đậm...',
    title: 'Ưu đãi 10% cho đơn hàng mua Cà phê gói - Cà phê uống liền...',
    img: 'https://product.hstatic.net/1000075078/product/rich_327845e1f8374e21955320e3ea8e7263_large.jpg',
    price: '90.000'
  },
]



const renderItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity style={{ flexDirection: 'row', margin: 15, justifyContent: 'space-between' }}>
        <View style={styles.itemContent}>
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

export default function OrderScreen() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    // dispatch(getProduct({ page: 1, limit: 10 }));
    // getMenu()
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



  return (
    <SafeAreaView style={{ height: windowHeight - 55 }}>
      {/* Header */}
      <TouchableOpacity style={styles.container}>
        <View style={styles.container_header}>
          {/* <Image
            source={require('../assets/Images/shipper.png')}
            style={styles.imgShipper}
          /> */}
          <View style={styles.container_header_content}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.headingTitle}>Giao đến</Text>
              <Ionicons name="chevron-down-outline" style={styles.headerIcon} />
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
            <Ionicons name="chevron-down-outline" size={14} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.content_searchIcon}>
          <Ionicons name="search-outline" size={14} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.content_heartIcon}>
          <Ionicons name="heart-outline" size={14} />
        </TouchableOpacity>
      </View>

      {/* Body */}

      <Text style={styles.bodyHeading}>Cà Phê Gói - Cà Phê Uống liền</Text>
      <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{}}
        showsVerticalScrollIndicator={false}
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
    paddingTop: 3,
    marginLeft: 5,
    fontWeight: 'bold'
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