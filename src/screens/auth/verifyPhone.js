import React,{Component} from 'react';

import 
{
    View,
    Text,
    TextInput,
    KeyboardAvoidingView, 
    TouchableWithoutFeedback,
    Keyboard,
    ActivityIndicator,
    Dimensions,
    TouchableOpacity,
    StyleSheet
} 
from 'react-native';

import {Button} from 'native-base';

export default class VerifyScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            code:'',
            validity:true,
            loading:false,
        }
    }
    handleButton=()=> {
        this.setState({loading:true});
        setTimeout(() => {
            this.props.navigation.navigate('General Information')
          this.setState({loading:false})
        }, 1000);
    }
    render(){
        const {data}=this.props.route.params;
        const {width}=Dimensions.get('window');
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
            style={{flex:1,backgroundColor:'#FFFF'}}>
            <View style={{alignItems:'center',justifyContent:'center'}} >
            <KeyboardAvoidingView style={{
                justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 15,
            }}
            behavior="padding"
            >
            <Text style={{fontSize:22,fontFamily:'rale_bold'}}> Verification PIN</Text>
            <View style={{}}>
            <Text style={{fontFamily:'rale_bold',fontSize:14}}>Enter the verification code</Text>
            <Text style={{fontFamily:'rale_bold',alignSelf:'center',fontSize:14}}>we just sent you on</Text>
            <Text style={{fontFamily:'rale_bold',alignSelf:'center',fontSize:20}}>{data}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <TextInput keyboardType={'number-pad'}
            style={{
                flex:0.66,
                height:50,borderBottomWidth:2,
                textAlign:'center',fontSize:20,
                width: width * 0.8,
            }}
            onChangeText={(value)=>this.setState({code:value,validity:false})}
            maxLength={4}
            value={this.state.code}
            />
            </View>
            <View style={{flexDirection:'row',paddingTop:10}}>
            {this.state.code.length < 4 ? (
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 54,
                    backgroundColor: '#9f9f99',
                    width:width*0.62
                }}>
                  <Text style={styles.Text}>Submit Code</Text>
                </View>
              ) : (
                <TouchableOpacity onPress={this.handleButton} style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 54,
                    backgroundColor: 'black',
                    width:width*0.62
                }}>
                  {this.state.loading ? (
                    <ActivityIndicator color={'#fff'} />
                  ) : (
                    <Text style={styles.Text}>Submit Code</Text>
                  )}
                </TouchableOpacity>
              )}
            </View>
            <View style={{paddingTop:10}}>
            <Text style={{fontFamily:'Roboto',fontSize:12}}> Have not received your code?</Text>
            </View>
            <Button onPress={()=>this.props.navigation.navigate('Change Phone')}
            transparent><Text style={{fontFamily:'Roboto_medium',fontSize:14}}> Resend Code</Text></Button>
            </KeyboardAvoidingView>
            </View>
            </TouchableWithoutFeedback>
            </View>
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
  });