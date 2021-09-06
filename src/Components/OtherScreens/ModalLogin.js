import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TextInput, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";

const h = Dimensions.get('screen').height
const w = Dimensions.get('screen').width

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
      <SafeAreaView>
        <View style={styles.content}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/golden-age/2476730c-346d-464e-a4c2-002960d0c1bc/0.jpeg', }}
            style={styles.imgBackground}
          />
          <TouchableOpacity
            onPress={closeModal}
            style={styles.closeModalForm}>
            <Ionicons name='close-outline' style={styles.iconClose} />
          </TouchableOpacity>

          <View style={styles.bodyModal}>
            <View style={{ marginTop: 15, marginBottom: 15, alignItems: 'center' }}>
              <Text style={styles.title}>Chào mừng bạn đến với</Text>
              <Text style={styles.titleHeading}>THE COFFEE HOUSE</Text>
            </View>
            <View style={styles.formPhone}>
              <View style={styles.vietnam}>
                <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg/230px-Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg.png' }}
                  style={styles.vietnamIcon}
                />
                <Text style={styles.region}>+84</Text>
              </View>
              <View>
                <TextInput
                  placeholder='Nhập số điện thoại'
                  keyboardType='number-pad'
                  style={{ width: 280 }}
                ></TextInput>
              </View>
            </View>
            <TouchableOpacity style={styles.loginForm}>
              <Text style={{ color: '#ffffff' }}>Đăng nhập</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.line}></View>
              <Text style={styles.or}>HOẶC</Text>
              <View style={styles.line}></View>
            </View>
            <TouchableOpacity style={styles.continueFacebook}>
              <Ionicons name='logo-facebook' style={styles.logoFacebook} />
              <Text style={{ color: '#ffffff' }}>Tiếp tục với Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.continueGoogle}>
              <Ionicons name='logo-google' style={styles.logoGoogle} />
              <Text >Tiếp tục bằng Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    marginTop: 100,
    borderRadius: 15
  },
  content: {
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height: h
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  imgBackground: {
    width: "100%",
    height: 300,
    borderRadius: 15
  },
  bodyModal: {
    backgroundColor: '#ffffff',
    width: '100%',
    borderRadius: 10,
    marginTop: -30,
    alignItems: 'center'
  },
  closeModalForm: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#BBBBBB',
    borderRadius: 20,
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
    borderColor: '#F2F2F2',
    borderWidth: 1,
    width: 350
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
  },
  vietnam: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  vietnamIcon: {
    width: 20,
    height: 20,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 15
  },
  region: {
    fontSize: 15,
    paddingRight: 8,
    borderRightColor: '#F2F2F2',
    borderRightWidth: 1
  },
  line: {
    width: 100,
    height: 1,
    backgroundColor: '#BBBBBB'
  },
  or: {
    margin: 15,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#BBBBBB'
  },
  continueFacebook: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1976D3',
    width: 300,
    height: 50,
    borderRadius: 10
  },
  logoFacebook: {
    color: '#ffffff',
    fontSize: 20,
    marginRight: 5
  },
  continueGoogle: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    width: 300,
    height: 50,
    borderRadius: 10
  },
  logoGoogle: {
    fontSize: 18,
    marginRight: 5
  }
});
