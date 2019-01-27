import React from 'react';
import { Picker, StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import { Alert, Button, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';

class FoodScreen extends React.Component{
  render(){
    const { navigate } = this.props.navigation;
    var mood = this.props.navigation.getParam('mood', "default");
    if(mood == 'happy'){
      return (
        <View style ={styles.container}>
            <Text style ={styles.hereIsWhatYouShouldEatStyle}> Here is what you should eat:</Text>
            <TouchableOpacity>
                <Text style= {styles.buttonStyle}> Leafy Vegetables </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style= {styles.buttonStyle}> Boiled Potatoes </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style= {styles.buttonStyle}> Tuna Fish </Text>
            </TouchableOpacity>

            <View style={styles.containerHomeButton}>
            <TouchableOpacity style={styles.customButton}  onPress={() => navigate('Home')}>
                <Text style= {styles.buttonStyleHome}> Home </Text>
            </TouchableOpacity>
            </View>
        </View>
      );
    }
    else if(mood == 'sad'){
      return (
        <View style ={styles.container}>
            <Text style ={styles.hereIsWhatYouShouldEatStyle}> Here is what you should eat:</Text>
            <TouchableOpacity>
                <Text style= {styles.buttonStylePear} > Pear (especially asian pear) </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style= {styles.buttonStyle}> Eggs </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style= {styles.buttonStyle}> Dark chocolate </Text>
            </TouchableOpacity>

            <View style={styles.containerHomeButton}>
            <TouchableOpacity style={styles.customButton}  onPress={() => navigate('Home')}>
                <Text style= {styles.buttonStyleHome}> Home </Text>
            </TouchableOpacity>
            </View>
        </View>
      );
    }
    else if(mood == 'sexy'){
      return (
        <View style ={styles.container}>
            <Text style ={styles.hereIsWhatYouShouldEatStyle}> Here is what you should eat:</Text>
            <TouchableOpacity>
                <Text style= {styles.buttonStyle}> Watermelon </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style= {styles.buttonStyle}> Asparagus </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style= {styles.buttonStyle}> Steak </Text>
            </TouchableOpacity>

            <View style={styles.containerHomeButton}>
            <TouchableOpacity style={styles.customButton}  onPress={() => navigate('Home')}>
                <Text style= {styles.buttonStyleHome}> Home </Text>
            </TouchableOpacity>
            </View>
        </View>
      );
    }
    else if(mood == 'irritable'){
      return (
        <View style ={styles.container}>
            <Text style ={styles.hereIsWhatYouShouldEatStyle}> Here is what you should eat:</Text>
            <TouchableOpacity>
                <Text style= {styles.buttonStyle}> Brussel Sprouts </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style= {styles.buttonStyle}> Avocado </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style= {styles.buttonStyle}> Orange Juice </Text>
            </TouchableOpacity>

            <View style={styles.containerHomeButton}>
            <TouchableOpacity style={styles.customButton}  onPress={() => navigate('Home')}>
                <Text style= {styles.buttonStyleHome}> Home </Text>
            </TouchableOpacity>
            </View>
        </View>
      );
    }
    else if(mood == 'sluggish'){
      return (
        <View style ={styles.container}>
            <Text style ={styles.hereIsWhatYouShouldEatStyle}> Here is what you should eat:</Text>
            <TouchableOpacity>
                <Text style= {styles.buttonStyle}> Spinach </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style= {styles.buttonStyle}> Eggs </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style= {styles.buttonStyle}> Beet root</Text>
            </TouchableOpacity>

            <View style={styles.containerHomeButton}>
            <TouchableOpacity style={styles.customButton}  onPress={() => navigate('Home')}>
                <Text style= {styles.buttonStyleHome}> Home </Text>
            </TouchableOpacity>
            </View>
        </View>
      );
    }
    else if(mood == 'cranky'){
      return (
        <View style ={styles.container}>
            <Text style ={styles.hereIsWhatYouShouldEatStyle}> Here is what you should eat:</Text>
            <TouchableOpacity>
                <Text style= {styles.buttonStyleSpecial}> Apple with peanut butter </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style= {styles.buttonStyleSpecial}> Egg salad sandwich </Text>
            </TouchableOpacity>

            <View style={styles.containerHomeButton}>
            <TouchableOpacity style={styles.customButton}  onPress={() => navigate('Home')}>
                <Text style= {styles.buttonStyleHome}> Home </Text>
            </TouchableOpacity>
            </View>
        </View>
      );
    }
    else if(mood == 'stressed'){
      return (
        <View style ={styles.container}>
            <Text style ={styles.hereIsWhatYouShouldEatStyle}> Here is what you should eat:</Text>
            <TouchableOpacity>
                <Text style= {styles.buttonStyle}> Salmon </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style= {styles.buttonStyle}> Tofu </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style= {styles.buttonStyle}> Persimmon </Text>
            </TouchableOpacity>

            <View style={styles.containerHomeButton}>
            <TouchableOpacity style={styles.customButton}  onPress={() => navigate('Home')}>
                <Text style= {styles.buttonStyleHome}> Home </Text>
            </TouchableOpacity>
            </View>
        </View>
      );
    }
    else{
      return null;
    }
  }
}

class MoodScreen extends React.Component{
  state ={mood:''}
  changeMood = (mood) =>{
    this.setState({mood: mood})
    const { navigate } = this.props.navigation;
    navigate('Food', {mood: mood})
  }
  render(){

    return (
      <View style={styles.container}>

      <View style={styles.container5}>
      <Image source={require ('./assets/gourd.png')}  style={{width: 200, height: 250}} />
      </View>

      <View style={styles.containerFEEL}>
      <Text style ={styles.textFeelStyle}> How do you feel now?</Text>
      </View>

      <View style={styles.containerPicker}>
      <Picker
        style={{height: 50, width: 100}}
        selectedValue = {this.state.mood}
        onValueChange = {this.changeMood}>
        <Picker.Item label ="Choose your mood"/>
        <Picker.Item label ="Happy" value="happy"/>
        <Picker.Item label = "Sad" value = "sad"/>
        <Picker.Item label = "Sexy" value ="sexy"/>
        <Picker.Item label = "Irritable" value ="irritable"/>
        <Picker.Item label = "Sluggish" value ="sluggish"/>
        <Picker.Item label = "Cranky" value ="cranky"/>
        <Picker.Item label = "Stressed" value ="stressed"/>
        </Picker>
        </View>
    </View>
  );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions =
  { title: 'Welcome', };
  state = {
    fontLoaded: false,
  };
  // _onPressButton() {
  //   navigate('Mood')
  // }
  async componentDidMount() {
    await Font.loadAsync({
      'kaushan-script': require('./assets/KaushanScript-Regular.ttf')
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <View style={styles.titleStyle}>
      {
        this.state.fontLoaded ? (
          <Text style ={styles.textStyle}>Feeling fit!</Text>
        ) : null
      }
        </View>
        <View style={styles.descriptionStyle}>
        {
          this.state.fontLoaded ? (
            <Text style ={styles.descriptionStyle}>How can we help you today?</Text>
          ) : null
        }
          </View>
          <View style={styles.container2}>
          <TouchableOpacity style={styles.customButton}  onPress={() => navigate('Mood')}>
              <Text style= {styles.buttonStyle}> Recommendations </Text>
          </TouchableOpacity>
          </View>

          <View style={styles.container3}>
          <TouchableOpacity style={styles.customButton2}  onPress={this._onPressButton}>
              <Text style= {styles.buttonStyle}> Tracking </Text>
          </TouchableOpacity>
          </View>

          <View style={styles.container4}>
          <Image source={require ('./assets/tomato.png')}  style={{width: 160, height: 183}} />
          </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Mood: {
    screen: MoodScreen
  },
  Food: {
    screen: FoodScreen
  },
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2957E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    top: 30,
    left: 50,
    transform: [{ rotate: '-20deg'}],
  },
  textStyle: {
    fontFamily: 'kaushan-script',
    fontSize: 40,
    color: '#FFCCC6',
    textShadowColor: '#BF2300',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1
  },
  descriptionStyle: {
    //fontFamily: 'customfont',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#BF2300',
    bottom: 100
  },
  buttonStyle: {
    backgroundColor: '#BF2300',
    color: '#FFCCC6',
    fontSize: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    height: 90,
    width: 300,
    padding: 25
  },
  buttonStyle2: {
    backgroundColor: '#F0976D',
    color: '#FFFFFF',
    fontSize: 25,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    top: 200,
    borderRadius: 100,
    height: 90,
    width: 300,
    padding: 25
  },
  buttonStyle3: {
    backgroundColor: '#F0976D',
    color: '#FFFFFF',
    fontSize: 25,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    top: 200,
    borderRadius: 100,
    height: 90,
    width: 300,
    padding: 25
  },
  container2: {
    justifyContent: 'flex-start',
    bottom: 130
  },
  container3: {
    justifyContent: 'flex-end',
    bottom: 110
  },
  container4: {
    justifyContent: 'flex-end',
    bottom: 80
  },
  hereIsWhatYouShouldEatStyle: {
    justifyContent: 'flex-start',
    bottom: 100,
    fontFamily: 'kaushan-script',
    fontSize: 40,
    color: '#470700'
  },
  container5: {
    justifyContent: 'flex-end',
    bottom: 150,
    right: 60
  },
  containerPicker:{
    justifyContent: 'flex-end',
    bottom: 140
  },
  containerFEEL: {
    justifyContent: 'flex-end',
    bottom: 110,
    width: 300
  },
  textFeelStyle:{
    fontFamily: 'kaushan-script',
    fontSize: 24,
    color: '#470700'
  },
  buttonStylePear: {
    backgroundColor: '#BF2300',
    color: '#FFCCC6',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    height: 90,
    width: 300,
    padding: 25
  },
  buttonStyleSpecial: {
    backgroundColor: '#F0976D',
    color: '#FFCCC6',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    height: 90,
    width: 300,
    padding: 25
  },
  containerHomeButton: {
    backgroundColor: '#E8B8A4',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    top: 100,
    borderRadius: 100,
    height: 90,
    width: 120,
    padding: 30,
    borderColor: '#470700'
  },
  buttonStyleHome: {
    color: '#470700',
    fontWeight: 'bold',
    fontSize: 16
  }
});
