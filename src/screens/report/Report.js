import { Ionicons } from '@expo/vector-icons';

import React, { Component } from 'react';

import {View,StyleSheet,TextInput,Text,TouchableOpacity, Alert} from 'react-native';

import Modal from 'react-native-modal';

import {Button,Container} from 'native-base';




export default class ReportScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            show:false,
            phone:false,
            phone1:true,
            validity:true,
            case:'',
            case1:'',
            report:'',
        }
    }
    
    onChange=(value)=>{
        this.setState({phone:true})
        this.setState({phone1:false})
    }
    onChange1=(value)=>{
        this.setState({phone1:true})
        this.setState({phone:false})
    }
    close(show1){
        this.setState({show:show1});
    }
    
    render(){
        const {navigate}=this.props.navigation;
        return(
            <View style={{flex:1,backgroundColor:'#fff'}}>
            <View style={{padding:20}}>
            <Text style={{fontFamily:'rale_bold',fontSize:30}}>Case Reports</Text>
            <View 
            style={{justifyContent:'center',paddingTop:40,flexDirection:'row',flex:0.5}}
            >
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
                color:'#000',fontFamily:'rale_regular',
                fontWeight:'400',fontSize:12
        }}
            >Make Case Report</Text>
            </Button>
            <Modal
            style={{flex:1,backgroundColor:'none',margin:0,height:150,justifyContent:'flex-start',paddingTop:10}}
            animationType = {"slide"}
            
            transparent={false}
            visible={this.state.show}
            onRequestClose={() => {
                this.close(!this.state.show);
            }}
            >
            
            <View style={styles.modalView}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontFamily:'rale_bold',fontSize:35}}>Make Report</Text>
            <Ionicons name="md-close" size={30} color="black" 
            onPress={() => {
                this.close(!this.state.show);}}
                
            />
            </View>
            <View style={{marginTop:20}}>
            <Text style={{fontFamily:'rale_regular',fontWeight:'bold',paddingBottom:10}}>Who are you reporting?</Text>
            <View style={{flexDirection:'row',paddingBottom:30}}>
            <TouchableOpacity onPress={this.onChange1}>
            <View style={{flexDirection:'row'}}>
            <Button rounded dark
            style={{width:27,height:27,justifyContent:'center'}}
               light={!Boolean(this.state.phone1)}
               
            >
            <Ionicons name="ios-checkmark" size={34} color="white" />
            </Button>
            <Text style={{paddingRight:30,fontFamily:'rale_regular',fontSize:12,alignSelf:'center'}}>Self</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onChange}
            >
            <View style={{flexDirection:"row"}}>
            <Button rounded dark
            style={{width:27,height:27,justifyContent:'center'}}
            light={!Boolean(this.state.phone)}
            
            >
            <Ionicons name="ios-checkmark" size={34} color="white" />
            </Button>
            <Text style={{fontFamily:'rale_regular',fontSize:12,alignSelf:'center'}}>Other Individual</Text>
            </View>
            </TouchableOpacity>
            </View>
            <View>
            <Text style={{fontFamily:'rale_bold',fontWeight:'bold',paddingBottom:10}}>Location or Digital Address</Text>
            <TextInput
             keyboardType='name-phone-pad'
             style={{
                    height:50,
                    borderWidth:StyleSheet.hairlineWidth,
                    borderRadius:4,borderColor:'rgb(220, 220, 220)',
                    justifyContent:'center'
            }}
            placeholder="eg.GA-492-74"
             />
             <View style={{flexDirection:'row',paddingTop:10}}>
             <Text style={{fontFamily:'rale_bold',fontWeight:'bold',flex:4}}>Nearest Landmark</Text>
             <Text style={{fontFamily:'rale_bold',fontWeight:'bold',marginBottom:10,flex:3}}>Alternate Contact</Text>
             </View>
             <View style={{flexDirection:'row'}}>
             <TextInput
             keyboardType='name-phone-pad'
             style={{
                    height:50,flex:4,
                    borderWidth:StyleSheet.hairlineWidth,
                    borderRadius:4,borderColor:'rgb(220, 220, 220)',
                    justifyContent:'center',marginBottom:15,
                    marginRight:10
            }}
            placeholder="eg.Goil Fuel Station"
             />
             <TextInput
             keyboardType='phone-pad'
             style={{
                    height:50,flex:3,
                    borderWidth:StyleSheet.hairlineWidth,
                    borderRadius:4,borderColor:'rgb(220, 220, 220)',
                    justifyContent:'center',marginBottom:15
            }}
            placeholder="Contact Number"
            onChangeText={(text) => this.setState({case1:text})}
            value={this.state.case1}
             />
             </View>
             <Text style={{fontFamily:'rale_bold',fontWeight:'bold',marginBottom:10}}>Description</Text>
             <TextInput
             keyboardType='default'
             style={{
                    height:150,
                    borderWidth:StyleSheet.hairlineWidth,
                    borderRadius:4,borderColor:'rgb(220, 220, 220)',
                    marginBottom:15,textAlignVertical:'top'
            }}
            multiline={true}
            numberOfLines={15}
            placeholder="Type something"
            value={this.state.case}
            onChangeText={(text)=>this.setState({case:text})}
             />
             </View>
             <View style={{justifyContent:'center',marginTop:100}}>
            <Button style={{height:55,justifyContent:'center'}}
            dark
            onPress={
                ()=>{this.close(!this.state.show),
                    navigate('UpdateReport',{data:this.state.case,data1:this.state.case1,value:this.state.report}),
                Alert.alert('Your report has been updated successfully')
                }}
            >
            <Text style={{color:'#fff',fontFamily:'rale_bold'}}>Report Case</Text>
            </Button>
            </View>
            </View>
                  </View>
          </Modal>
            </View>
            </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    modalView: {
        margin: 0,
        backgroundColor: "white",
        borderTopRightRadius: 5,borderTopLeftRadius:5,
        padding:20,
        height:727,flex:1
      }
})
