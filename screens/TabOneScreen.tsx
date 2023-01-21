import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Dimensions, Pressable, Animated } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';
import AddButton from './AddButton';

const { width, height } = Dimensions.get("window");
const crossSize = width/4


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [count, setCount] = useState(0)
  const buttonAnimationValue = React.useRef(new Animated.Value(0)).current;

  const button_values=[500,200,100,50]
  Animated.stagger(100, [Animated.timing(buttonAnimationValue, {
    toValue: 1,
    duration: 200,
    useNativeDriver: true,
  }),
]).start(({finished}) => {})

  const onPress = (value : number) =>{

    buttonAnimationValue.setValue(0);
    const currentCount = count;
    setCount(currentCount+value)
  }

  //android_ripple={{color: 'black', borderless: true}}

  return (
    <View style={styles.topContainer}>
      <Text style={styles.title}>{count} kCal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <ImageBackground source={require('../assets/images/cross.svg')} resizeMode="cover" style={styles.cross_image} >
        <View  style={styles.buttonContainer}>
            {button_values.map((value: number)=>{
              return(
                <Animated.View key={value} style={{
                  opacity: buttonAnimationValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                }}>
                  <Pressable style={styles.button} onPress={()=>{onPress(value)}} >
                    <AddButton buttonNumber={value} />
                  </Pressable>
                </Animated.View>
              )
            })}
          </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    minWidth: crossSize/2,
    minHeight: crossSize/2,
    alignItems: 'center',
    opacity: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, alpha)',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: Colors.gray.background,
    width: crossSize,
    height: crossSize,
    opacity: 1
  },
  topContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 60,
    height: 1,
    width: '80%',
  },
  cross_image: {
    justifyContent: "center",
    width: crossSize,
    height: crossSize,
  },

});
