import React, {useState, useEffect} from 'react';
import { ThemeProvider, Image, Text, Button, Slider } from 'react-native-elements';
import {View, StyleSheet, TouchableOpacity, Animated, Picker} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const theme = {
    Button: {
      titleStyle: {
        color: 'red'
      },
    },
  };

const welcome = props => {
    onSetAge = (e) => {
        props.onSetAge(e);
    }
    onSetStressLevel = (e) => {
      props.onSetStressLevel(e);
  }
    intArray =[];
    for(let i=0; i<=100; i++) {
        intArray[i] = i;
    }
    return(
      <View style={{flex: 1}}>
        <Animated.View style={{flex: props.animationtop}}>
          {!props.topAnimCompleted &&
            <TouchableOpacity style={{flex:1, backgroundColor: 'black', justifyContent: 'center',alignItems: 'center',}} onPress={props.onChooseSpecialized} activeOpacity={1}>
              <ThemeProvider theme={theme} >
                <Animated.Image source={require('../images/Specialised.gif')} style={{ width: 250, height: 250, opacity: props.animationfade }} placeholderStyle={ {backgroundColor:'black' }} />
                <Animated.Text style={{opacity: props.animationfade, fontSize: 20,color: 'white',textAlign: 'center',margin: 10,}} >Specialised Program (Recommended)</Animated.Text>
              </ThemeProvider>
            </TouchableOpacity>
          }
          {props.topAnimCompleted && props.loginprogress==0 &&
            <View  style={{flex:1, backgroundColor: 'black', justifyContent: 'center',alignItems: 'center',}}>
              <Text style={{color:'white', fontSize:50, marginBottom:50, textAlign: 'center'}}>Select a Gender</Text>
              <Button
                icon={
                  <Icon
                    name="male"
                    size={25}
                    color="white"
                  />
                }
                buttonStyle={styles.button}
                titleStyle={{fontSize:25}}
                iconLeft
                title="   Male"
                onPress={props.onSelectGenderMale}
              />
              <Button
                icon={
                  <Icon
                    name="female"
                    size={25}
                    color="white"
                  />
                }
                iconLeft
                buttonStyle={styles.button}
                titleStyle={{fontSize:25}}
                title="   Female"
                onPress={props.onSelectGenderFemale}
              />
              <Button
              buttonStyle={styles.button}
              titleStyle={{fontSize:25}}
                title="Non-binary"
                onPress={props.onSelectGenderOther}
              />

            <View style={{opacity:0, flexDirection: 'row'}}>
            <View >
              <Button
               icon={
                <Icon
                  name="arrow-left"
                  size={20}
                  color="white"
                />
              }
              iconLeft
              buttonStyle={styles.buttonBack}
              titleStyle={{fontSize:25}}
                title=" Back"
                onPress={props.onBack}
              />
            </View>
            <View>
              <Button
              disabled
              opacity={0}
              iconRight
              buttonStyle={styles.buttonHidden}
              titleStyle={{fontSize:25, color:'black'}}
                title="     "
              />
            </View>
            
            
            </View>

              
          </View>
              
          }
          {props.loginprogress==1 &&
            <View style={{flex:1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center',}}>
            <Text style={{color:'white', fontSize:50, marginBottom:100, textAlign: 'center'}}>How Old Are You</Text>
            
            <Picker
              selectedValue={props.age}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                onSetAge(itemValue)
              }>
                {intArray.map((prop, key) => {
                  return (
                    <Picker.Item label={key.toString()} value={key} key={key} />
                  );
                })}
            </Picker>
            <View style={{flexDirection: 'row'}}>
            <View >
              <Button
               icon={
                <Icon
                  name="arrow-left"
                  size={20}
                  color="white"
                />
              }
              iconLeft
              buttonStyle={styles.buttonBack}
              titleStyle={{fontSize:25}}
                title=" Back"
                onPress={props.onBack}
              />
            </View>
            <View>
              <Button
               icon={
                <Icon
                  name="arrow-right"
                  size={25}
                  color="white"
                />
              }
              iconRight
              buttonStyle={styles.buttonNext}
              titleStyle={{fontSize:25}}
                title="Next "
                onPress={props.onChangeAge}
              />
            </View>
            
            
            </View>

          </View>
            
          }

          {props.loginprogress==2 &&
            <View  style={{flex:1, backgroundColor: 'black', justifyContent: 'center',alignItems: 'center',}}>
            <Text style={{color:'white', fontSize:30, marginBottom:50, textAlign: 'center'}}>On a Scale from 1 to 10, How stressed do you feel?</Text>
            <View style={styles.container}>
              <Slider
                value={props.stressLevel}
                onValueChange={value => props.onSetStressLevelChange(value)}
                minimumValue={0}
                maximumValue={10}
                step={1}
                style={{width:250}}
                thumbTintColor={'white'}
              />
              <Text style={{color:'white', fontSize:25, marginBottom:50, textAlign: 'center'}}>{props.stressLevel}</Text>
              
            </View>
            <View style={{flexDirection: 'row'}}>
            <View >
              <Button
               icon={
                <Icon
                  name="arrow-left"
                  size={20}
                  color="white"
                />
              }
              iconLeft
              buttonStyle={styles.buttonBack}
              titleStyle={{fontSize:25}}
                title=" Back"
                onPress={props.onBack}
              />
            </View>
            <View>
              <Button
               icon={
                <Icon
                  name="check"
                  size={25}
                  color="white"
                />
              }
              iconRight
              buttonStyle={styles.buttonFinish}
              titleStyle={{fontSize:25}}
                title="Finish "
                onPress={props.onSetStressLevel}
              />
            </View>
            
            
            </View>
            
          </View>
            
          }

        </Animated.View>

        <Animated.View style={{flex: props.animationbottom}}>
          <TouchableOpacity  style={{flex: 1, backgroundColor: '#ECECEC', justifyContent: 'center',alignItems: 'center',}} onPress={props.onChooseGlobal} activeOpacity={1}>
          { !props.isTopSelected &&
          <ThemeProvider theme={theme}>
            <Animated.Image source={require('../images/general.gif')} style={{width:250, height: 250, opacity: props.animationfade,}}  placeholderStyle={ {backgroundColor:'#ECECEC' }} />
            <Animated.Text style={{opacity: props.animationfade, fontSize: 20, textAlign: 'center', margin: 10,}}>General Program</Animated.Text>
          </ThemeProvider>
          }
          </TouchableOpacity>
        </Animated.View>
    </View>
        
    );
};

const styles = StyleSheet.create({
  white: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    margin: 10,
  },
  black: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button:{
    width:175,
    margin:20,
    backgroundColor:'red',
    borderRadius:10,
  },
  buttonFinish:{
    width:150,
    margin:20,
    backgroundColor:'green',
    borderRadius:10,
  },
  buttonBack:{
    width:150,
    margin:20,
    backgroundColor:'black',
    borderRadius:10,
  },
  buttonNext:{
    width:150,
    margin:20,
    backgroundColor:'black',
    borderRadius:10,
  },
  buttonHidden:{
    width:150,
    margin:20,
    opacity:0,
    backgroundColor:'black',
    borderRadius:10,
  },
  picker: {
    color: 'white',
    borderRadius: 14,
    backgroundColor: Platform.OS === 'ios' ? 'white' : 'green',
    width: 150,
    height: Platform.OS === 'ios' ? 220 : 40,
    transform: [
      { scaleX: 1.5 }, 
      { scaleY: 1.5 },
   ]
  },
  container: {
    flex: .5,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  }
});

export default welcome;