import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar , Animated, AsyncStorage, BackHandler} from 'react-native';
import Welcome from './views/Welcome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomePage from './components/HomePage';
import SettingsPage from './components/Settings';
import { ThemeConsumer } from 'react-native-elements';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 1,
      show_Main_App: false,
      isGlobal: false,
      animationtop: new Animated.Value(.5),
      animationbottom: new Animated.Value(.5),
      animationfade: new Animated.Value(1),
      topAnimCompleted:false,
      isTopSelected:false,
      infolevel:true,
      loginprogress:0,
      userData:{
        gender:null,
        age:18,
        stressLevel:5,
        global:true,
        notifications: true
      },
      currentUserId: undefined,
      client: undefined,
      isLoadingComplete: false
    };
  }
  openSettings = () => {
      this.setState({ 
      val: 2
    })
  };

  openMain = () => {
    this.setState({ 
    val: 1
  })
};

  renderElement(){
    //You can add N number of Views here in if-else condition
    if (this.state.val === 1) {
      //Return the FirstScreen as a child to set in Parent View
      return <HomePage style={styles.container} user={this.state.userData} openSettings={this.openSettings } openMain={()=>{}} />;
    } else if (this.state.val === 2) {
      //Return the SecondScreen as a child to set in Parent View
      return <SettingsPage user={this.state.userData}  openMain={this.openMain } openSettings={()=>{}}/>;
    }
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    this.displayData();
  }
  onDoneLogin = () => {
    Animated.timing(this.state.animationtop, {
      toValue: 1,
      duration: 1000
    }).start();
    Animated.timing(this.state.animationbottom, {
      toValue: 0,
      duration: 1000
    }).start();
    Animated.timing(this.state.animationfade, {
      toValue: 0,
      duration: 1000
    }).start(() => {
      this.setState({ 
        topAnimCompleted:true,
      });
    });

    this.setState({ 
      show_Main_App: false,
      isGlobal: false,
      isTopSelected:true,
    });
  }

  onChooseGlobal = () =>{
    Animated.timing(this.state.animationbottom, {
      toValue: 1,
      duration: 500
    }).start();
    Animated.timing(this.state.animationfade, {
      toValue: 0,
      duration: 500
    }).start();
    Animated.timing(this.state.animationtop, {
      toValue: 0,
      duration: 500
    }).start(() => {
      this.setState({ 
        show_Main_App:true,
      });
    });

    this.setState({ 
      userData:{
        global:true
      },
      isGlobal: true
    });
  }
  login = () =>{
    console.log('Button pressed');
  }

  onSelectGenderMale = () =>{
    const userDataNew = this.state.userData;
    userDataNew.gender = 'male';
    AsyncStorage.setItem('user', JSON.stringify(userDataNew));
    
    this.setState({ 
      userData: userDataNew,
      loginprogress: 1
    });
  }

  displayData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(value);
      if(value !== null){
        this.setState({ 
          userData: parsed,
          show_Main_App: true
        });
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  onSelectGenderFemale = () =>{
    const userDataNew = this.state.userData;
    userDataNew.gender = 'female';
    AsyncStorage.setItem('user', JSON.stringify(userDataNew));
    this.setState({ 
      userData: userDataNew,
      loginprogress: 1
    });
  }
  onSelectGenderOther = () =>{
    const userDataNew = this.state.userData;
    userDataNew.gender = 'other';
    AsyncStorage.setItem('user', JSON.stringify(userDataNew));
    this.setState({ 
      userData: userDataNew,
      loginprogress: 1
    });
  }
  login = () =>{
    console.log('Button pressed');
  }

  onChangeAge = () =>{
    const userDataNew = this.state.userData;
    AsyncStorage.setItem('user', JSON.stringify(userDataNew));
    this.setState({ 
      userData: userDataNew,
      loginprogress: 2
    });
  }

  onSetAge = (age) => {
    const userDataNew = this.state.userData;
    userDataNew.age = age;
    this.setState({ 
      userData: userDataNew
    });
  }

  onSetStressLevel =() => {
    const userDataNew = this.state.userData;
    AsyncStorage.setItem('user', JSON.stringify(userDataNew));
    this.setState({ 
      userData: userDataNew,
      show_Main_App: true
    });
  }

  

  componentWillUnmount() {
    this.backHandler.remove()
  }

  handleBackPress = () => {
    this.back(); // works best when the goBack is async
    return true;
  }

  onSetStressLevelChange =(stressLevel) => {
    const userDataNew = this.state.userData;
    userDataNew.stressLevel = stressLevel;
    this.setState({ 
      userData: userDataNew
    });
  }

  back = () =>{
    if(this.state.loginprogress > 0){
      let currProgression = this.state.loginprogress;
      currProgression--;
      this.setState({ 
        loginprogress: currProgression
      });
    }
  }

  render() {
        if (this.state.show_Main_App) {
          return (
            this.renderElement()
          );
      } else { 
          return ( 
            //<View style={styles.container}>
            //  <Login onChooseGlobal={this.onChooseGlobal}/>
            //</View> 
            <View style={{flex: 1}}>
              <StatusBar   
                hidden={true} />  
              <Welcome onSetAge={this.onSetAge} onChangeAge={this.onChangeAge} stressLevel={this.state.userData.stressLevel} onSetStressLevel={this.onSetStressLevel} onSetStressLevelChange={this.onSetStressLevelChange} onChooseGlobal={this.onChooseGlobal} onBack={this.back} onChooseSpecialized={this.onDoneLogin} animationtop={this.state.animationtop} age={this.state.userData.age}  animationbottom={this.state.animationbottom} animationfade={this.state.animationfade} isTopSelected={this.state.isTopSelected} topAnimCompleted={this.state.topAnimCompleted} onSelectGenderMale={this.onSelectGenderMale} onSelectGenderFemale={this.onSelectGenderFemale} onSelectGenderOther={this.onSelectGenderOther} loginprogress={this.state.loginprogress}/>
          </View>
            ); 
      }
    
  }
}

        
        





const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
