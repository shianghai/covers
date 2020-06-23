import { Ionicons } from '@expo/vector-icons';

import React, { Component } from 'react';

import {View,StyleSheet,Text,TouchableOpacity,Alert,ScrollView} from 'react-native';

import {Button,Container,Header,Card,CardItem,Left,Content, Right,Body,Radio} from 'native-base';

import Modal from 'react-native-modal';

import ActionButton from 'react-native-action-button';

import ViewItem from '../../application/base/ViewItem';
import FlatRadioButtonGroup from '../../application/view/flat-radio-button-group';



export default class VitalsScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            show:false,
            symptoms:this.defaultSymptoms,
            symptomsReport:[]
        }
    }
    defaultSymptoms={
        "dry cough":{key:0,value:'None'},
        "Tiredness":{key:0,value:'None'},
        "Sore Throat":{key:0,value:'None'},
        "Fever":{key:0,value:'None'},
        "Aches and Pain":{key:0,value:'None'},
        "Shortness of breath":{key:0,value:'None'}
    }

    close(show1){
        this.setState({show:show1});
    }

    render(){
        const {date}=new Date().toString;
        const {navigate}= this.props.navigation;
        return(
            <Container style={{flex:1}}>
            <View style={{height:50,marginLeft:20}}>
            <Text style={{fontFamily:'Roboto_medium',fontSize:30}}>Vitals</Text>
            </View>
            <View
            style={{justifyContent:'center',flex:0.5,flexDirection:'row'}}
            >
            {
                this.state.symptomsReport.length ===0 &&
            <Button transparent
            style={{
                justifyContent:'center',
                borderStyle:'dashed',
                borderColor:'#000',
                borderWidth:1,
                flex:0.5,height:55,
            
            }}
            onPress={()=>this.setState({show:true})}
            >
            <Text
            style={{
                textTransform:'capitalize',
                color:'#000',fontFamily:'rale_bold',
                fontSize:16
        }}
            >Log Vitals</Text>
            </Button>
        }
            </View>
            <View>
            <Modal
            style={{flex:1,backgroundColor:'none',margin:0,height:180,justifyContent:'flex-start',paddingTop:10}}
            animationType = {"slide"}
            
            transparent={false}
            visible={this.state.show}
            onRequestClose={() => {
                this.close(!this.state.show);
            }}
            >
            
            <View style={styles.modalView}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontFamily:'rale_bold',fontSize:35}}>Log Symptoms</Text>
            <Ionicons name="md-close" size={30} color="black" 
            onPress={() => {
                this.close(!this.state.show);}}
                style={{alignSelf:'center'}}
                
            />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{padding:10}}>
            <View style={{flex:1}}>
                {Object.keys(this.state.symptoms).map(name=>{

                    return (
                        <ViewItem
                            backgroundColor={'white'}
                            paddingHorizontal={8}
                        >
                        <Card style={{flex:1,padding:12,borderRadius:8}}>
                        <CardItem header style={{flex:1,borderBottomWidth:1,borderColor:'#D3D3D3'}}>
                            <Text style={{fontFamily:'rale_bold', fontSize: 16}}>
                                {name}
                            </Text>
                            </CardItem>
                            <CardItem>
                            <Body>
                            <FlatRadioButtonGroup
                                default={this.state.symptoms[name].key}
                                orientation={'horizontal'}
                                contentGravity={'center'}
                                onChange={(value) => {
                                    console.log(value);
                                    let symptoms=this.state.symptoms;
                                    symptoms[name]=value;
                                    this.setState({symptoms:symptoms})
                                }}
                                height={80}
                            />
                            </Body>
                            </CardItem>
                            </Card>
                        </ViewItem>
                    )
                })

        }
    </View>
    </ScrollView>
            <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
            <Button style={{height:55}}
            dark block
            onPress={()=>{this.close(!this.state.show);
                Alert.alert('Your log has been updated');
                let report =this.state.symptomsReport
                report.push(this.state.symptoms)
                this.setState({symptoms:this.defaultSymptoms,symptomsReport:report})
            }  
        }
            >
            <Text style={{color:'#fff',fontFamily:'rale_bold'}}>Report Case</Text>
            </Button>
            </View>
            </View>
            </Modal>
            </View>
            {this.state.symptomsReport.map(report=>{
                return(
                <View style={{height:250,borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'#D3D3D3'}}>
            <View style={{flex:1,paddingTop:20,paddingHorizontal:60}}>
            <View>
            <Text style={{fontFamily:'rale_bold'}}>{date}</Text>
            </View>
            {/*the first row */}
            <View style={{flex:1}}>
            <View style={{flex:1,flexDirection:'row'}}>
            <View style={{flex:1,backgroundColor:'#00FA9A',height:90,borderRadius:5,marginLeft:8}}>
            <View style={{justifyContent:'center',alignItems:'center',paddingTop:10}}>
            <Text style={{fontFamily:'rale_bold',color:'#fff'}}>Aches</Text>
            <Text style={{fontFamily:'rale_bold',color:'#fff'}}>{report["Aches and Pain"].key}</Text>
            <Text style={{fontFamily:'rale_bold',color:'#fff'}}>{report["Aches and Pain"].value}</Text>
            </View>
            </View>
            <View style={{flex:1,backgroundColor:'#FF0000',height:90,borderRadius:5,marginLeft:8}}>
            <View style={{justifyContent:'center',alignItems:'center',padding:5}}>
            <Text style={{fontFamily:'rale_bold',color:'#fff'}}>Breath Shortness</Text>
            <Text style={{fontFamily:'rale_bold',color:'#fff'}}>{report["Shortness of breath"].key}</Text>
            <Text style={{fontFamily:'rale_bold',color:'#fff'}}>{report["Shortness of breath"].value}</Text>
            </View>
            </View>
            <View style={{flex:1,backgroundColor:'#87CEFA',height:90,borderRadius:5,marginLeft:8}}>
            <View style={{justifyContent:'center',alignItems:'center',paddingTop:10}}>
            <Text style={{fontFamily:'rale_bold',color:'#fff'}}>Fever</Text>
            <Text style={{fontFamily:'rale_bold',color:'#fff'}}>{report["Fever"].key}</Text>
            <Text style={{fontFamily:'rale_bold',color:'#fff'}}>{report["Fever"].value}</Text>
            </View>
            </View>
            </View>
            {/*end of first row */}
            {/*Second row */}
            <View style={{flex:1,flexDirection:'row'}}>
            <View style={{flex:1,backgroundColor:'#87CEFA',height:90,borderRadius:5,marginLeft:8}}>
            <View style={{justifyContent:'center',alignItems:'center',paddingTop:10}}>
            <Text style={{fontFamily:'rale_bold',color:'#fff'}}>Dry Cough</Text>
            <Text style={{fontFamily:'rale_bold',color:'#fff'}}>{report["dry cough"].key}</Text>
            <Text style={{fontFamily:'rale_bold',color:'#fff'}}>{report["dry cough"].value}</Text>
            </View>
            </View>
            <View style={{flex:1,backgroundColor:'#FF8C00',height:90,borderRadius:5,marginLeft:8}}>
            <View style={{justifyContent:'center',alignItems:'center',paddingTop:10}}>
            <Text style={{fontFamily:'rale_bold',color:'#fff'}}>Tiredness</Text>
            <Text style={{fontFamily:'rale_bold',color:'#fff'}}>{report["Tiredness"].key}</Text>
            <Text style={{fontFamily:'rale_bold',color:'#fff'}}>{report["Tiredness"].value}</Text>
            </View>
            </View>
            <View style={{flex:1,backgroundColor:'#EE82EE',height:90,borderRadius:5,marginLeft:8}}>
            <View style={{justifyContent:'center',alignItems:'center',paddingTop:10}}>
            <Text style={{fontFamily:'rale_bold',color:'#fff'}}>Sore Throat</Text>
            <Text style={{fontFamily:'rale_bold',color:'#fff'}}>{report["Sore Throat"].key}</Text>
            <Text style={{fontFamily:'rale_bold',color:'#fff'}}>{report["Sore Throat"].value}</Text>
            </View>
            </View>
            </View>
            {/*end of second row */}
            </View>
            </View>
            </View>
            )})}
            {
                this.state.symptomsReport.length !==0 &&
            <ActionButton buttonColor="#000"
            onPress={()=>this.setState({show:true})}
            />
        }
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
      }
})