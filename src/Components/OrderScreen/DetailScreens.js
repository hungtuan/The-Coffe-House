import React from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import Modal from 'react-native-modal';
const h = Dimensions.get('screen').height
export default function DetailScreens(props) {
    return (
        <Modal
            testID={'modal'}
            isVisible={props.showModal}
            // onSwipeComplete={this.close}
            swipeDirection={['down']}
            // scrollTo={this.handleScrollTo}
            // scrollOffset={this.state.scrollOffset}
            scrollOffsetMax={400 - 300} // content height - ScrollView height
            propagateSwipe={true}
            style={styles.modal}>
            <View style={styles.scrollableModal}>
                <ScrollView>
                    <View style={{}}>
                        <Text>saa</Text>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    scrollableModal: {
        backgroundColor: 'white',
        height: 650,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
});
