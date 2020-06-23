import React,{Component} from 'react';

import {Button, Container} from 'native-base';

import {Text,ScrollView,View,StyleSheet,TouchableOpacity,ActivityIndicator, Dimensions} from 'react-native';




export default class BackgroundScreen extends Component{
    constructor(props){
        super(props)
        this.state={
                set1:{
                    id:1,
                    title:'Background',
                    data:'Citizens are advised to provide accurate information on this application to support the government and health services in managing and accurately containing the spread of the coronavirus'
                },
                set2:{
                    id:2,
                    title:'Collection of your information',
                    data:'We may collect information about you in a variety of ways. The information we may collect via the Application depends on the content and materials you use, and includes:'
                },
                set3:{
                    id:3,
                    title:'Personal information',
                    data:'Demographic and other personally identifiable information that you voluntarily give to us while using this application is anonymized and is only made available to the relevant authorities in cases of emergency'
                },
                set4:{
                    id:4,
                    title:'Geo-location information',
                    data:'We may request access or permission to and track location-based information from your mobile device, either continuously or while you are using the Application, to provide location-based services.If you wish to change our access or permissions, you may do so in your device settings.'
                },
                set5:{
                    id:5,
                    title:'Mobile device access',
                    data:`We may request access or permission to certain features from your mobile device, including your mobile device's bluetooth,gps.If you wish to change our access or permissions,you may do so in the app's settings. `
                },
                set6:{
                    id:6,
                    title:'Push notifications',
                    data:`We may request to send you push notifications regarding your account or the Application. If you wish to opt-out from receiving these types of communications, you may turn them off in the app's settings.`
                },
                set7:{
                    id:7,
                    title:'Use of your information',
                    data:`Having accurate information about you permits us to provide you with a smooth,efficient,and customized experience.Specifically,we may use information collected about you via the Application to
-Assist relevant authority to respond to suspected cases
-Compile anonymous statistical data and analysis
-Deliver targeted notifications concerning COVID-19 to you
-Monitor and analyze trends to inform sensitization efforts`
                },
                set8:{
                    id:8,
                    title:'Disclosure of your information',
                    data:`We will be sharing anonymized information we collect about you with the relevant government agencies and health services`
                },
                set9:{
                    id:9,
                    title:'Options regarding your information',
                    data:`You may at any time review or change the information in your account or terminate your account by
-Logging into your account settings and updating your account
-Contacting us using the contact information provided below
[send emails to :brownjay1997@gmail.com]

Upon your request to terminate your account,we will deactivate or delete your account and information from our active databases.
However,some information may be retrieved in our files to prevent
fraud,troubleshoot problems,assist with any investigations,
enforce our Terms of Use and/or comply with legal requirements.`
                },
                set10:{
                    id:10,
                    title:'Contact Us',
                    data:'If you have questions or comments about this Privacy Policy,please contact us at'
                },
            loading:false
        }
    }
    handleButton=()=> {
        this.setState({loading:true});
        setTimeout(() => {
            this.props.navigation.navigate('Root')
          this.setState({loading:false})
        }, 1000);
    }
    render(){
        const {width}=Dimensions.get('window');
        return(
            <View style={{flex:1,backgroundColor:'#fff'}}>
            <ScrollView>
            <View style={{padding:20}}>
            <View style={{paddingBottom:15}}>
            <Text style={styles.title}>{this.state.set1.title}</Text>
            <Text style={styles.data}>{this.state.set1.data}</Text>
            </View>
            <View  style={{paddingBottom: 15}}>
            <Text style={styles.title}>{this.state.set2.title}</Text>
            <Text style={styles.data}>{this.state.set2.data}</Text>
            </View>
            <View  style={{paddingBottom: 15}}>
            <Text style={styles.title}>{this.state.set3.title}</Text>
            <Text style={styles.data}>{this.state.set3.data}</Text>
            </View>
            <View  style={{paddingBottom: 15}}>
            <Text style={styles.title}>{this.state.set4.title}</Text>
            <Text style={styles.data}>{this.state.set4.data}</Text>
            </View>
            <View  style={{paddingBottom: 15}}>
            <Text style={styles.title}>{this.state.set5.title}</Text>
            <Text style={styles.data}>{this.state.set5.data}</Text>
            </View>
            <View  style={{paddingBottom: 15}}>
            <Text style={styles.title}>{this.state.set6.title}</Text>
            <Text style={styles.data}>{this.state.set6.data}</Text>
            </View>
            <View  style={{paddingBottom: 15}}>
            <Text style={styles.title}>{this.state.set7.title}</Text>
            <Text style={styles.data}>{this.state.set7.data}</Text>
            </View>
            <View  style={{paddingBottom: 15}}>
            <Text style={styles.title}>{this.state.set8.title}</Text>
            <Text style={styles.data}>{this.state.set8.data}</Text>
            </View>
            <View  style={{paddingBottom: 15}}>
            <Text style={styles.title}>{this.state.set9.title}</Text>
            <Text style={styles.data}>{this.state.set9.data}</Text>
            </View>
            <View  style={{paddingBottom: 15}}>
            <Text style={styles.title}>{this.state.set10.title}</Text>
            <Text style={styles.data}>{this.state.set10.data}</Text>
            </View>
            <View style={{alignItems:'flex-end'}}>
            <Text style={styles.data}>Polymorph Labs Gh.Ltd</Text>
            <Text style={styles.data}>17 National Service Avenue Market Street</Text>
            <Text style={styles.data}>Haatso,Accra</Text>
            <Text style={styles.data}>Ghana</Text>
            </View>
            </View>
            </ScrollView>
            <View style={{paddingHorizontal:20}}>
            <TouchableOpacity onPress={this.handleButton} style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 54,
                backgroundColor: 'black',
            }}>
              {this.state.loading ? (
                <ActivityIndicator color={'#fff'} />
              ) : (
                <Text style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontWeight: '500',
                    paddingTop: 5,
                }}>Let's get started...</Text>
              )}
            </TouchableOpacity>
            </View>
            </View>
            
        )
    }
}


const styles=StyleSheet.create({
    title:{
        fontFamily:'rale_bold',
        fontSize:16
    },
    data:{
        fontSize:14,
        fontFamily:'rale_regular'
    }

})