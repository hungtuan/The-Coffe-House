import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  Touchable,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Modal from 'react-native-modal';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
export default function DetailScreens(props) {
  dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState();
  const closeDetail = () => {
    setIsVisible(false);
    props.close(isVisible);
  };

  const detailItem = useSelector(store => store.DetailProduct.product);
  const onChangeQuantity = (type, item) => () => {
    dispatch({type: 'CHANGE-QUANTITY', data: item, changeQuantityType: type});
  };
  const onAddCart = item => () => {
    dispatch({type: 'ADD_CART', data: item});
  };
  const totalPrice = detailItem[0]?.price * detailItem[0]?.quantity;
  return (
    <Modal
      testID={'modal'}
      isVisible={props.showDetail}
      onSwipeComplete={closeDetail}
      swipeDirection={['down']}
      scrollOffsetMax={400 - 300}
      propagateSwipe={true}
      style={styles.modal}>
      <View style={styles.scrollableModal}>
        <ScrollView>
          <View>
            <Image source={{uri: detailItem[0]?.image}} style={styles.banner} />
            <TouchableOpacity
              onPress={closeDetail}
              style={styles.closeModalDetail}>
              <Material name="close" size={20} style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
          <View style={{margin: 15}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                ellipsizeMode="tail"
                numberOfLines={2}
                style={styles.detailProductName}>
                {detailItem[0]?.product_name}
              </Text>
              <TouchableOpacity>
                <Material name="heart-outline" size={25} style={{margin: 10}} />
              </TouchableOpacity>
            </View>
            <Text style={styles.detaiPrice}>{detailItem[0]?.price}đ</Text>
            <Text>{detailItem[0]?.description}</Text>
          </View>
          <View>
            <Text>Yêu cầu khác</Text>
          </View>
        </ScrollView>
        <View style={styles.bottomBar}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={onChangeQuantity('reduce', detailItem[0])}
              style={styles.changeQuantityButton}>
              <Material name="minus" size={18} style={{fontWeight: 'bold'}} />
            </TouchableOpacity>
            <Text>{detailItem[0]?.quantity}</Text>
            <TouchableOpacity
              onPress={onChangeQuantity('increase', detailItem[0])}
              style={styles.changeQuantityButton}>
              <Material name="plus" size={18} style={{fontWeight: 'bold'}} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={onAddCart(detailItem[0])}
            style={styles.addCartButton}>
            <Text style={styles.textAddCart}>
              Chọn sản phẩm - {totalPrice}đ
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    marginRight: 10,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  scrollableModal: {
    backgroundColor: 'white',
    height: h - 80,
    borderRadius: 15,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    width: w,
  },
  banner: {
    width: w,
    height: 400,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  closeModalDetail: {
    alignItems: 'flex-end',
    position: 'absolute',
    right: 10,
    top: 10,
  },
  closeIcon: {
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'gray',
    color: '#ffffff',
  },
  detailProductName: {
    fontSize: 25,
    fontWeight: 'bold',
    width: '70%',
  },
  detaiPrice: {
    color: 'gray',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  bottomBar: {
    width: w,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  changeQuantityButton: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 5,
    margin: 15,
  },
  addCartButton: {
    width: '90%',
    backgroundColor: '#E47905',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  textAddCart: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 12,
    marginBottom: 12,
  },
});
