import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";

const h = Dimensions.get('screen').height
const w = Dimensions.get('screen').w

export default function ModalLogin(props) {
  const [isVisible, setIsVisible] = useState()
  const closeModal = () => {
    setIsVisible(false)
    props.close(isVisible)
  }
  return (
    <Modal
      testID={'modal'}
      isVisible={props.showModal}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      style={styles.modal}>
      <View style={styles.content}>
        <Image
          source={require('./imgLogin.jpg')}
          style={styles.imgBackground}
        />
        <TouchableOpacity
          onPress={closeModal}
          style={styles.closeModalForm}
        >
          <Ionicons name='close-outline' style={styles.iconClose} />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Chào mừng bạn đến với</Text>
          <Text style={styles.titleHeading}>THE COFFEE HOUSE</Text>
        </View>
        <View style={styles.formPhone}>
          <View>
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg/230px-Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg.png' }}
            />
            <Text>+84</Text>
          </View>
          <View>
            <TextInput
              placeholder='Nhập số điện thoại'
              keyboardType='number-pad'
            ></TextInput>
          </View>
        </View>
        <TouchableOpacity style={styles.loginForm}>
          <Text>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  imgBackground: {
    width: w,
    height: 300
  },
  closeModalForm: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#BBBBBB',
    borderRadius: 20
  },
  iconClose: {
    padding: 5,
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 14,
    alignContent: 'center'
  },
  titleHeading: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  formPhone: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    width: 300
  },
  loginForm: {
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
