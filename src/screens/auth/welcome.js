import React,{Component} from 'react';

import {Text,Content,Button} from 'native-base';

import 
{
    ImageBackground,View,TextInput,
    KeyboardAvoidingView, 
    TouchableWithoutFeedback,
    Keyboard,
    ActivityIndicator,
    Dimensions,
    TouchableOpacity,
    StyleSheet
} 
from 'react-native';
// import axios from "axios";

export default class WelcomeScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            phone:'',
            validity:true,
            loading:false
        }
    }
    handleButton=()=> {
        this.props.navigation.navigate('Change Phone',{data:this.state.phone})
        this.setState({loading:false})
    };
    attemptRegister = ()=>{
        this.setState({loading:true});

        axios({
            url: 'https://signalc.herokuapp.com/graphql/',
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                mutation: '',
                variables: {
                    phone: this.state.phone
                }
            },
        }).then((result) => {
            console.log(result);
            this.props.navigation.navigate('Change Phone',{data:this.state.phone})
            this.setState({loading:false})
        }).catch(err=>{
            console.log(err);
            this.props.navigation.navigate('Change Phone',{data:this.state.phone})
            this.setState({loading:false})
        });
    };

    render(){
        const{width}=Dimensions.get('window');
        const {phone}=this.state.phone;
        return(
            <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
            style={{flex:1}}>
            <ImageBackground source={require('../../../assets/images/welcome.png')}
            style={{flex:1,resizeMode:'cover',alignItems:'center',justifyContent:'center'}}
            >
            <KeyboardAvoidingView style={{
                justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 15,
            }}
            behavior="padding"
            >
            <Text style={{
                color:'#f3f3f3',
                fontSize: 60
                ,textAlign:'center',fontFamily:'rale_bold'
            }}>COVERS</Text>
            <Text style={{
                color:'#f3f3f3',fontFamily:'rale_bold',
                fontSize:14,textAlign:'center'
            }}>(COVID-19 EMERGENCY RESPONSE SOLUTION)</Text>
            
            <View>
            <Text style={{
                color:'#f3f3f3',
                fontSize:14,textAlign:'center',fontFamily:'rale_regular'
            }}>Join the effort by well-meaning Africans using technology to slow down and eventually halt the spread of COVID-19</Text>
            </View>
            <View style={{flexDirection:'row',paddingTop:40,}}>
            <TextInput keyboardType={'phone-pad'}
            value={phone}
            onChangeText={(phone)=>this.setState({phone:phone})}
            style={{
                backgroundColor:'#f3f3f3',
                borderRadius:5,fontFamily:'rale_regular',
                fontSize:18,
                height:53,
                width: width * 0.8,
                marginVertical: 10,
                paddingHorizontal: 20,
                flex:1
            }}
            maxLength={10}
            />
            <Text style={{
            position: 'absolute',
            top: 65,
            left: width * 0.60,
            fontFamily:'rale_regular',
            }}>Phone Number</Text>
            </View>

            <View style={{flexDirection:'row',paddingTop:15}}>
            {this.state.phone.length < 10 ? (
                <View style={styles.initialState}>
                  <Text style={styles.Text}>Get Started</Text>
                </View>
              ) : (
                <TouchableOpacity onPress={this.handleButton} style={styles.buttonState}>
                  {this.state.loading ? (
                    <ActivityIndicator color={'#fff'} />
                  ) : (
                    <Text style={styles.Text}>Get Started</Text>
                  )}
                </TouchableOpacity>
              )}
            </View>
            </KeyboardAvoidingView>
            </ImageBackground>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    Text: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: '500',
      paddingTop: 5,
    },
    phone: {
      position: 'absolute',
      top: 65,
      fontWeight: '500',
    },
    initialState: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 54,
      backgroundColor: '#9f9f99',
      flex:1,
      borderRadius:5
    },
    buttonState: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 54,
      backgroundColor: '#4cbd7a',
      flex:1,
      borderRadius:5
    },
  });