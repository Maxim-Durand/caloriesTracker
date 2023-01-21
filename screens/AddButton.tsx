import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { View, Text } from '../components/Themed';
import Colors from '../constants/Colors'

const AddButton = (props: { buttonNumber: any; }) => {

    const {buttonNumber} = props
    return(
        <Text style={styles.text}>
            +{buttonNumber}
        </Text>
    )

}
export default AddButton

const styles = StyleSheet.create({
    text: {
      fontSize: 50,
      lineHeight: 21,
      fontWeight: 'normal',
      letterSpacing: 0.25,
      color: Colors.gray.text,
      width: 'fit-content',
      height: 'fit-content'
    },
  });