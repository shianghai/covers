import { Ionicons } from '@expo/vector-icons';

import React, { Component } from 'react';

import {View,StyleSheet,ScrollView,TouchableOpacity,Modal,TextInput,Alert,Share} from 'react-native';

import {Button,Container,Header,Card,CardItem,Left,Text,Content,Body} from 'native-base';

import Accordion from 'react-native-collapsible/Accordion';

import getDirections from 'react-native-google-maps-directions';

import Picker from '../../components/country';
import axios from "axios";

const {CountryStats, GlobalStats, GhanaStats} = require('../../utils/graphql/queries/queries');

const SECTIONS = [
    { title: "What is Coronavirus?", content: "Lorem ipsum dolor sit amet" },
    { title: "What are the Symptoms of COVID-19?", content: "Lorem ipsum dolor sit amet" },
    { title: "How does COVID-19 Spread?", content: "Lorem ipsum dolor sit amet" },
    { title: "What can i do to protect myself and prevent the spread of the diseas", content: "Lorem ipsum dolor sit amet" },
    { title: "How likely am i to catch COVID-19?", content: "Lorem ipsum dolor sit amet" },
    { title: "Should i worry about COVID-19?", content: "Lorem ipsum dolor sit amet" },
    { title: "Who is at risk of developing severe illness?", content: "Lorem ipsum dolor sit amet" },
    { title: "Are antibiotics effective for preventing or treating the COVID-19?", content: "Lorem ipsum dolor sit amet" },
    { title: "Are there any medications or therapy that can prevent or cure COVID-19?", content: "Lorem ipsum dolor sit amet" },
    { title: "Is there a vaccine,drug or treatment for COVID-19?", content: "Lorem ipsum dolor sit amet" },
    { title: "Is COVID-19 the same as SARS?", content: "Lorem ipsum dolor sit amet" },
    { title: "Should i wear a mask to protect myself?", content: "Lorem ipsum dolor sit amet" },
    { title: "How do i put on,use,take off and dispose of a mask?", content: "Lorem ipsum dolor sit amet" },
];

export default class SettingsScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            show:false,
            showFAQs:false,
            showTesting:false,
            showProfile:false,
            showStats:false,
            phone:false,
            phone1:true,
            validity:true,
            activeSections:[],
            globalStats:{},
            countryStats: {}
        };
        this._shareMessage =this._shareMessage.bind(this);
        this.loadWorldStats()
        this.loadCountryStats('Ghana')
    }


    loadCountryStats= (name)=>{
        console.log('country')
        axios({
            url: 'https://covid19-graphql.netlify.app/',
            method: 'post',
            data: {
                query: CountryStats.replace("KEY", name)
            }
        }).then((result) => {
            console.log(result.data.data);
            this.setState({countryStats: result.data.data.country.result})
        }).catch(err=>{
            console.log(err);
        });
    };


    loadWorldStats= ()=>{
        console.log('world')
        axios({
            url: 'https://covid19-graphql.netlify.app/',
            method: 'post',
            data: {
                query: GlobalStats
            }
        }).then((result) => {
            console.log(result.data.data.globalTotal);
            this.setState({globalStats: result.data.data.globalTotal})
        }).catch(err=>{
            console.log(err);
        });
    };

    onChange=(phone)=>{
        this.setState({phone:phone});
        this.setState({phone1:false})
    }
    onChange1=()=>{
        this.setState({phone1:true})
        this.setState({phone:false})
    }
    //Google Map Direction functions//
     handleGetDirections = () => {
        const data = {
          
            destination:{
                latitude:5.650497398,
                longitude:-0.185499258
            },
            params: [
                {
                    key:'travelmode',
                    value:'driving'
                },
                {
                    key:'dir_action',
                    value:'navigate'
                }
            ],
            waypoints:[
                {
                    latitude:5.650497398,
                    longitude:-0.185499258
                },
                {
                    latitude:5.650497398,
                    longitude:-0.185499258
                },
                {
                    latitude:5.650497398,
                    longitude:-0.185499258
                }
            ]
        }

        getDirections(data)
    }
    //*end of map functions *//
    //FAQs Accordion functions//
    renderSectionTitle = section => {
            return (
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
            );
        };
        
        renderHeader = section => {
            return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.title}</Text>
            </View>
            );
        };
        
        renderContent = section => {
            return (
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
            );
        };
        
            setSections = sections => {
                this.setState({
                activeSections: sections.includes(undefined) ? [] : sections,
                });
            };
            //end of FAQs functions//
            //Share function//
            _shareMessage(){
                Share.share({
                    message:'Hello,Get the COVID-19 Contact Tracing Expo Project at https://play.google.com/store/apps/details?id=com.TwiSDAHymn.twi_hymn'
                })
            }
            //end of share function//
    render(){
        const date= new Date().toDateString();
        return(
            <Container style={{flex:1}}>
            <View style={{height:50,marginLeft:20}}>
            <Text style={{fontFamily:'rale_bold',fontSize:30}}>Settings</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

            {/*Self Assessment Card */}
            <TouchableOpacity 
            onPress={()=>this.setState({show:true})}
            style={{flexDirection:'row',flex:1,height:100,borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'#D3D3D3'}}>
            <View style={{flex:1,alignSelf:'center',paddingLeft:20}}>
            <Text style={{fontFamily:'rale_bold'}}>Self Assessment</Text>
            <Text style={{fontFamily:'rale_light',fontSize:12,paddingTop:2}}>Ascertain your covid-19 risk using our screening tool</Text>
            </View>
            <View style={{alignSelf:'center',paddingRight:15}}>
            <Ionicons name="ios-arrow-forward" size={30} color="black" />
            </View>
            </TouchableOpacity>

            {/*FAQs Card */}
            <TouchableOpacity onPress={()=>this.setState({showFAQs:true})}
            style={{flexDirection:'row',flex:1,height:100,borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'#D3D3D3'}}>
            <View style={{flex:1,alignSelf:'center',paddingLeft:20}}>
            <Text style={{fontFamily:'rale_bold'}}>FAQs</Text>
            <Text style={{fontFamily:'rale_light',fontSize:12,paddingTop:2}}>Get answers to Frequently Asked Questions</Text>
            </View>
            <View style={{alignSelf:'center',paddingRight:15}}>
            <Ionicons name="ios-arrow-forward" size={30} color="black" />
            </View>
            </TouchableOpacity>
            {/*Testing Centers Card */}

            <TouchableOpacity onPress={()=>this.setState({showTesting:true})}
            style={{flexDirection:'row',flex:1,height:100,borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'#D3D3D3'}}>
            <View style={{flex:1,alignSelf:'center',paddingLeft:20}}>
            <Text style={{fontFamily:'rale_bold'}}>Testing Centers</Text>
            <Text style={{fontFamily:'rale_light',fontSize:12,paddingTop:2}}>View testing centers near you</Text>
            </View>
            <View style={{alignSelf:'center',paddingRight:15}}>
            <Ionicons name="ios-arrow-forward" size={30} color="black" />
            </View>
            </TouchableOpacity>

            {/*Personal Details Card */}
            <TouchableOpacity onPress={()=>this.setState({showProfile:true})}
            style={{flexDirection:'row',flex:1,height:100,borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'#D3D3D3'}}>
            <View style={{flex:1,alignSelf:'center',paddingLeft:20}}>
            <Text style={{fontFamily:'rale_bold'}}>Personal Details</Text>
            <Text style={{fontFamily:'rale_light',fontSize:12,paddingTop:2}}>View and update your personal details</Text>
            </View>
            <View style={{alignSelf:'center',paddingRight:15}}>
            <Ionicons name="ios-arrow-forward" size={30} color="black" />
            </View>
            </TouchableOpacity>

            {/*Statistics Card */}
            <TouchableOpacity onPress={()=>{
                this.loadWorldStats();
                this.setState({showStats:true})
            }}
            style={{flexDirection:'row',flex:1,height:100,borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'#D3D3D3'}}>
            <View style={{flex:1,alignSelf:'center',paddingLeft:20}}>
            <Text style={{fontFamily:'rale_bold'}}>Statistics</Text>
            <Text style={{fontFamily:'rale_light',fontSize:12,paddingTop:2}}>Get the current statistics of the COVID-19</Text>
            </View>
            <View style={{alignSelf:'center',paddingRight:15}}>
            <Ionicons name="ios-arrow-forward" size={30} color="black" />
            </View>
            </TouchableOpacity>

            {/*Policy Card */}
            <TouchableOpacity style={{flexDirection:'row',flex:1,height:100,borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'#D3D3D3'}}>
            <View style={{flex:1,alignSelf:'center',paddingLeft:20}}>
            <Text style={{fontFamily:'rale_bold'}}>Privacy Policy</Text>
            <Text style={{fontFamily:'rale_light',fontSize:12,paddingTop:2}}>View our privacy policy</Text>
            </View>
            <View style={{alignSelf:'center',paddingRight:15}}>
            <Ionicons name="ios-arrow-forward" size={30} color="black" />
            </View>
            </TouchableOpacity>

            {/*Share Card */}
            <TouchableOpacity onPress={this._shareMessage}
             style={{flexDirection:'row',flex:1,height:100,borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'#D3D3D3'}}>
            <View style={{flex:1,alignSelf:'center',paddingLeft:20}}>
            <Text style={{fontFamily:'rale_bold'}}>Share</Text>
            <Text style={{fontFamily:'rale_light',fontSize:12,paddingTop:2}}>Share this app with friends and family</Text>
            </View>
            <View style={{alignSelf:'center',paddingRight:15}}>
            <Ionicons name="ios-arrow-forward" size={30} color="black" />
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',flex:1,height:100,borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'#D3D3D3'}}>
            <View style={{flex:1,alignSelf:'center',paddingLeft:20}}>
            <Text style={{fontFamily:'rale_bold'}}>Self Assessment</Text>
            <Text style={{fontFamily:'rale_light',fontSize:12,paddingTop:2}}>Ascertain your covid-19 risk using our screening tool</Text>
            </View>
            <View style={{alignSelf:'center',paddingRight:15}}>
            <Ionicons name="ios-arrow-forward" size={30} color="black" />
            </View>
            </TouchableOpacity>
            </ScrollView>

            {/*This is the Self Assessment Modal*/}
            <Modal
            style={{flex:1,backgroundColor:'none',margin:0,height:180,justifyContent:'flex-start',paddingTop:10}}
            animationType = {"slide"}
            
            transparent={true}
            visible={this.state.show}
            onRequestClose={() => {
                this.setState({show:false})
            }}
            >
            
            <View style={styles.modalView}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontFamily:'rale_bold',fontSize:28,paddingTop:30}}>Self Assessment</Text>
            </View>
            <View style={{marginTop:30}}>
            <Text style={{fontFamily:'rale_bold',paddingBottom:4}}>Getting Started!</Text>
            <Text style={{fontFamily:'rale_regular',fontSize:14,textAlign:'justify',paddingBottom:4}}>This tool is intended to help you understand what to do next about COVID-19.You'll answer a few questions about your symptoms,travel and contact you've had with others.</Text>
            <Text style={{fontFamily:'rale_bold',paddingBottom:4}}>Note</Text>
            <Text style={{fontFamily:'rale_regular',fontSize:14,textAlign:'justify',paddingBottom:4}}>Recommendations provided by this tool do not constitute medical advice and should not be used to diagnose or treat medical conditions.</Text>
            <Text style={{fontFamily:'rale_regular',fontSize:14,textAlign:'justify',paddingBottom:4}}>Let's all look out for each other by knowing our status, trying not to infect others, and reserving care for those in need</Text>
            </View>
                <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
            <Button style={{height:55}}
            dark block
            onPress={
                ()=>this.setState({show:false})
                }
                
            >
            <Text style={{color:'#fff',fontFamily:'rale_bold'}}>Start Assessment...</Text>
        </Button>
            </View>
            </View>
            </Modal>
          {/*End of Self Assessment Modal */}

          {/*FAQs Modal */}
            <Modal
            style={{flex:1,backgroundColor:'none',margin:0,height:180,justifyContent:'flex-start',paddingTop:10}}
            animationType = {"slide"}
            transparent={true}
            visible={this.state.showFAQs}
            onRequestClose={() => {
                this.setState({showFAQs:false})
            }}
            >
            <View style={styles.modalView}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontFamily:'rale_bold',fontSize:28}}>FAQs</Text>
            <Ionicons name="md-close" size={30} color="black" 
            onPress={()=>this.setState({showFAQs:false})}  
            />
            </View>
            <View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Accordion
                activeSections={this.state.activeSections}
                sections={SECTIONS}
                touchableComponent={TouchableOpacity}
                renderHeader={this.renderHeader}
                renderContent={this.renderContent}
                duration={400}
                onChange={this.setSections}
            />
            </ScrollView>
            </View>
            </View>
        </Modal>
        {/*End of FAQs Modal */}


        {/*Testing Centers Modal */}
        <Modal
        style={{flex:1,backgroundColor:'none',margin:0,height:180,justifyContent:'flex-start',paddingTop:10}}
        animationType = {"slide"}
        
        transparent={true}
        visible={this.state.showTesting}
        onRequestClose={() => {
            this.setState({showTesting:false})
        }}
        >
        
        <View style={styles.modalView}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{fontFamily:'rale_bold',fontSize:28}}>Testing Centers</Text>
        <Ionicons name="md-close" size={30} color="black" 
        onPress={()=>this.setState({showTesting:false})} 
        />
        </View>
        <View 
            style={{flexDirection:'row',marginTop:30,borderBottomWidth:0.5,borderColor:'#D3D3D3',height:120,justifyContent:'center',alignItems:'center'}}>
        <View style={{marginRight:30}}>
        <Text style={{marginBottom:20,fontFamily:'rale_bold',fontSize:12}}>ani-fori medical institute</Text>
        <Text style={{fontSize:12}}>Accra, Ghana</Text>
        </View>
        <View style={{marginLeft:10}}>
        <Text style={{paddingLeft:70,fontFamily:'rale_regular',fontSize:14,marginBottom:20}}>{date}</Text>
        <TouchableOpacity onPress={this.handleGetDirections}>
        <Text style={{paddingLeft:70,fontFamily:'rale_regular',fontSize:14,color:'gold'}}>Get Directions</Text>
        </TouchableOpacity>
        </View>
        </View>
                <View 
                style={{flexDirection:'row',borderBottomWidth:0.5,borderColor:'#D3D3D3',height:120,justifyContent:'center',alignItems:'center'}}>
            <View style={{marginRight:30}}>
            <Text style={{marginBottom:20,fontFamily:'rale_bold',fontSize:12}}>ani-fori medical institute</Text>
            <Text style={{fontSize:12}}>Accra, Ghana</Text>
            </View>
            <View style={{marginLeft:10}}>
            <Text style={{paddingLeft:70,fontFamily:'rale_regular',fontSize:14,marginBottom:20}}>{date}</Text>
            <TouchableOpacity onPress={this.handleGetDirections}>
            <Text style={{paddingLeft:70,fontFamily:'rale_regular',fontSize:14,color:'gold'}}>Get Directions</Text>
            </TouchableOpacity>
            </View>
            </View>
            <View 
            style={{flexDirection:'row',borderBottomWidth:0.5,borderColor:'#D3D3D3',height:120,justifyContent:'center',alignItems:'center'}}>
        <View style={{marginRight:30}}>
        <Text style={{marginBottom:20,fontFamily:'rale_bold',fontSize:12}}>ani-fori medical institute</Text>
        <Text style={{fontSize:12}}>Accra, Ghana</Text>
        </View>
        <View style={{marginLeft:10}}>
        <Text style={{paddingLeft:70,fontFamily:'rale_regular',fontSize:14,marginBottom:20}}>{date}</Text>
        <TouchableOpacity onPress={this.handleGetDirections}>
        <Text style={{paddingLeft:70,fontFamily:'rale_regular',fontSize:14,color:'gold'}}>Get Directions</Text>
        </TouchableOpacity>
        </View>
        </View>
            <View 
            style={{flexDirection:'row',borderBottomWidth:0.5,borderColor:'#D3D3D3',height:120,justifyContent:'center',alignItems:'center'}}>
            <View style={{marginRight:30}}>
            <Text style={{marginBottom:20,fontFamily:'rale_bold',fontSize:12}}>ani-fori medical institute</Text>
            <Text style={{fontSize:12}}>Accra, Ghana</Text>
            </View>
            <View style={{marginLeft:10}}>
            <Text style={{paddingLeft:70,fontFamily:'rale_regular',fontSize:14,marginBottom:20}}>{date}</Text>
            <TouchableOpacity onPress={this.handleGetDirections}>
            <Text style={{paddingLeft:70,fontFamily:'rale_regular',fontSize:14,color:'gold'}}>Get Directions</Text>
            </TouchableOpacity>
            </View>
            </View>
            <View 
            style={{flexDirection:'row',borderBottomWidth:0.5,borderColor:'#D3D3D3',height:120,justifyContent:'center',alignItems:'center'}}>
        <View style={{marginRight:30}}>
        <Text style={{marginBottom:20,fontFamily:'rale_bold',fontSize:12}}>ani-fori medical institute</Text>
        <Text style={{fontSize:12}}>Accra, Ghana</Text>
        </View>
        <View style={{marginLeft:10}}>
        <Text style={{paddingLeft:70,fontFamily:'rale_regular',fontSize:14,marginBottom:20}}>{date}</Text>
        <TouchableOpacity onPress={this.handleGetDirections}>
        <Text style={{paddingLeft:70,fontFamily:'rale_regular',fontSize:14,color:'gold'}}>Get Directions</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
        </Modal>
      {/*End of Testing Centers Modal */}


        {/*Personal Details Modal */}
        <Modal
            style={{flex:1,backgroundColor:'none',margin:0,height:180,justifyContent:'flex-start',paddingTop:10}}
            animationType = {"slide"}
            transparent={false}
            visible={this.state.showProfile}
            onRequestClose={() => {
            this.setState({showProfile:false})
        }}
        >
        
        <View style={styles.modalView}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{fontFamily:'rale_bold',fontSize:35}}>Profile</Text>
        <Ionicons name="md-close" size={30} color="black" 
            onPress={()=>this.setState({showProfile:false})}    
        />
        </View>
        <View style={{flex:1}}>
        <Text style={{fontFamily:'rale_regular',fontWeight:'bold',paddingTop:10}}>Personal Details</Text>
        <Text style={{fontFamily:'rale_regular',fontSize:12,paddingTop:10}}>Enter Age</Text>
            <View style={{paddingTop:10}}>
            <TextInput
            keyboardType='number-pad'
            style={{
                height:50,
                borderWidth:StyleSheet.hairlineWidth,
                borderRadius:4,borderColor:'rgb(220, 220, 220)',
                justifyContent:'center'
            }}
            />
            </View>
        <View style={{flexDirection:'row',paddingTop:15}}>
        <TouchableOpacity onPress={this.onChange}>
        <View style={{flexDirection:'row'}}>
        <Button rounded dark
            style={{width:27,height:27,justifyContent:'center',padding:5}}
            light={!Boolean(this.state.phone)}
        >
        <Ionicons name="ios-checkmark" size={34} color="white" />
        </Button>
        <Text style={{paddingHorizontal:10,fontFamily:'rale_regular',fontSize:12,alignSelf:'center'}}>Female</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity   onPress={this.onChange1}>
        <View style={{flexDirection:'row'}}>
        <Button rounded dark
            style={{width:27,height:27,justifyContent:'center'}}
            light={!Boolean(this.state.phone1)}
        >
        <Ionicons name="ios-checkmark" size={34} color="white" />
        </Button>
        <Text style={{paddingHorizontal:10,fontFamily:'rale_regular',fontSize:12,alignSelf:'center'}}>Male</Text>
        </View>
        </TouchableOpacity>
        </View>
        <View style={{paddingTop:20}}>
        <Text style={{fontFamily:'rale_bold'}}>Travel History</Text>
        <Text
        style={{fontFamily:'rale_regular',fontSize:10}}
        >Select the last two countries you visited(If Applicable)</Text>
        </View>
        <View style={{flexDirection:'row',paddingTop:15}}>
            <View style={{
                borderWidth:1.5,
                flex:1,height:120,
                borderRadius:7,
                justifyContent:'center',alignItems:'center'
            }}>
            <Picker/>
            </View>
            
            <View
            style={{
                borderWidth:1.5,
                flex:1,height:120,
                borderRadius:7,marginLeft:10,
                justifyContent:'center',alignItems:'center'
            }}
            >
            <Picker/>
            </View>
            
        </View>
        <View style={{paddingTop:20}}>
            <Text style={{fontFamily:'rale_regular',fontWeight:'bold'}}>Medical Professional Information</Text>
            <Text style={{fontFamily:'rale_regular',fontSize:10}}>Applicable if you are a health worker</Text>
            </View>
            <View style={{paddingTop:20}}>
            <Text>Health License Number</Text>
            </View>
            <View style={{paddingTop:10}}>
            <TextInput
            keyboardType='number-pad'
            style={{
                    height:50,
                    borderWidth:StyleSheet.hairlineWidth,
                    borderRadius:4,borderColor:'rgb(220, 220, 220)',
                    justifyContent:'center'
            }}
            />
            </View>
            <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
            <Button style={{height:55}}
            dark block
            onPress={() => {
                this.setState({showProfile:false}),Alert.alert('Your Profile has been updated')}}
            >
            <Text style={{color:'#fff',fontFamily:'rale_bold'}}>Update Profile</Text>
            </Button>
            </View>
            </View>
            </View>
    </Modal>
      {/*End of Personal Details */}

      {/*Statistics of COVID-19 */}
        <Modal
        style={{flex:1,backgroundColor:'none',margin:0,height:180,justifyContent:'flex-start',paddingTop:10}}
        animationType = {"slide"}
        transparent={false}
        visible={this.state.showStats}
        onRequestClose={() => {
            this.setState({showStats:false}) 
        }}
        >
        <View style={styles.modalView}>
        <View style={{paddingTop:30,paddingBottom:10,margin:0,borderBottomWidth:2}}>
        <Text style={{fontFamily:'rale_bold',fontSize:28}}>COVID-19</Text>
        <Text style={{fontFamily:'rale_bold',fontSize:28}}>Worldwide</Text>
        </View>
        
        <View style={{paddingTop:20,flex:1}}>
        {/*World Stats Card */}
            <Card style={{borderRadius:10}}>
            <CardItem header style={{flexDirection:'row'}}>
            <Ionicons name="ios-globe" size={24} color="blue" />
            <Text style={{padding:5}}>Worldwide Statistics</Text>
            </CardItem>
            <CardItem>
            <Body style={{flexDirection:'row',flex:1,paddingBottom:20}}>
            <View style={{borderEndWidth:0.5,paddingRight:30}}>
            <Text style={{color:'blue'}}>Confirmed</Text>
            <Text style={{fontFamily:'rale_bold'}}>{this.state.globalStats.cases}</Text>
            </View>
            <View style={{borderEndWidth:0.5,paddingRight:30,paddingLeft:5}}>
            <Text style={{color:'green'}}>Recovered</Text>
            <Text style={{fontFamily:'rale_bold'}}>{this.state.globalStats.recovered}</Text>
            </View>
            <View style={{paddingLeft:5}}>
            <Text style={{color:'red'}}>Deaths</Text>
            <Text style={{fontFamily:'rale_bold'}}>{this.state.globalStats.deaths}</Text>
            </View>
            </Body>
            </CardItem>
            </Card>
            {/*Country Picker */}
            <View style={{paddingTop:20}}>
            <Text style={{fontFamily:'rale_bold',fontSize:12,paddingLeft:5}}>Select Country:</Text>
            <Card style={{borderRadius:7,flexDirection:'row',justifyContent:'space-between',height:45,alignItems:'center'}}>
            <Picker onSelect={(country)=>{
                this.loadCountryStats(country)
            }}/>
            <Ionicons name="ios-arrow-down" size={24} color="grey" style={{paddingRight:10}} /> 
            </Card>
            </View>
            {/*Selected Country Stats */}
            <View style={{paddingTop:10}}>
            <Card style={{padding:5}}>
            <CardItem header style={{flexDirection:'row'}}>
            <Ionicons name="ios-stats" size={24} color="green" />
            <Text style={{padding:5}}>Statistics</Text>
            </CardItem>
            <CardItem>
            <Body style={{flexDirection:'row',flex:1,paddingBottom:20}}>
            <View style={{borderEndWidth:0.5,paddingRight:30}}>
            <Text style={{color:'blue'}}>Confirmed</Text>
            <Text style={{fontFamily:'rale_bold'}}>{this.state.countryStats.cases}</Text>
            <Text style={{color:'orange',paddingTop:20}}>Active</Text>
            <Text style={{fontFamily:'rale_bold'}}>1,384</Text>
            </View>
            <View style={{borderEndWidth:0.5,paddingRight:30,paddingLeft:5}}>
            <Text style={{color:'green'}}>Recovered</Text>
            <Text style={{fontFamily:'rale_bold'}}>{this.state.countryStats.recovered}</Text>
            <Text style={{color:'green',paddingTop:20}}>Critical</Text>
            <Text style={{fontFamily:'rale_bold'}}>4</Text>
            </View>
            <View style={{paddingLeft:5}}>
            <Text style={{color:'red'}}>Deaths</Text>
            <Text style={{fontFamily:'rale_bold'}}>{this.state.countryStats.deaths}</Text>
            <Text style={{color:'red',paddingTop:20}}>Test</Text>
            <Text style={{fontFamily:'rale_bold'}}>{this.state.countryStats.test}</Text>
            </View>
            </Body>
            </CardItem>
            </Card>
            </View>
            {/*end of country stats */}
            <View style={{flexDirection:'row-reverse',flex:1}}>
            <Text style={{fontFamily:'rale_regular',fontSize:12}}>{date}</Text>
            <Text style={{fontFamily:'rale_bold',fontSize:12}}>Last Updated:</Text>
            </View>
        </View>
        </View>
    </Modal>
      {/*End of Stats */}
            </Container>
        )
    }
}

const styles=StyleSheet.create({
    modalView: {
        margin: 0,
        backgroundColor: "white",
        borderTopRightRadius: 5,borderTopLeftRadius:5,
        padding:15,
        height:727,flex:1
        },
        header: {
            padding: 20,
        },
        headerText: {
            fontSize: 16,
            fontFamily: 'rale_bold',
            letterSpacing: -0.8,
        },
        content: {
            paddingHorizontal: 20,
            backgroundColor: '#fff',
            paddingVertical: 10,
        },
        contentText: {
            fontFamily: 'rale_regular',
            fontSize: 14,
        }
})