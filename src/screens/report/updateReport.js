import { Ionicons } from '@expo/vector-icons';

import React,{Component}from 'react';

import { View ,Text,StyleSheet,TextInput,TouchableOpacity, Alert} from 'react-native';

import { Container,Card, CardItem,Body,Button } from 'native-base';

import ActionButton from 'react-native-action-button';

import Modal from 'react-native-modal';
export default class UpdateReportScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            show:false,
            phone:false,
            phone1:true,
            validity:true,
            case:'',
            case1:''
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
        const {data,data1,value}=this.props.route.params
        const date= new Date().toDateString();
        const{navigate}=this.props.navigation;
        
        return(
            <Container>
            <View style={{height:50,marginLeft:20}}>
            <Text style={{fontFamily:'Roboto_medium',fontSize:30}}>Case Reports</Text>
            </View>
            <Card style={{marginTop:30}}>
            <CardItem header style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontFamily:'rale_bold',fontSize:14}}>{value}</Text>
            <Text style={{fontFamily:'rale_light',fontSize:12}}>{date}</Text>
            </CardItem>
            <CardItem>
            <Body>
            <Text>{data}</Text>
            <Text>{data1}</Text>
            </Body>
            </CardItem>
            </Card>
            <ActionButton buttonColor="#000"
            onPress={()=>this.setState({show:true})}
            />
            <Modal
            style={{width:420,backgroundColor:'none',margin:0,height:180,justifyContent:'flex-start',paddingTop:10}}
            animationType = {"slide"}
            
            transparent={true}
            visible={this.state.show}
            onRequestClose={() => {
                Alert.alert('Modal has now been closed.');
                
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
            <Text style={{fontFamily:'rale_regular',fontWeight:'bold',marginBottom:10}}>Who are you reporting?</Text>
            <View style={{flexDirection:'row',marginBottom:30}}>
            <TouchableOpacity onPress={this.onChange1,{data2:'Self'}}>
            <View style={{flexDirection:'row'}}>
            <Button rounded dark
            style={{width:27,height:27,justifyContent:'center',marginRight:5}}
               light={!Boolean(this.state.phone1)}
               
            >
            <Ionicons name="ios-checkmark" size={34} color="white" />
            </Button>
            <Text style={{marginRight:30,fontFamily:'rale_regular',fontSize:12,alignSelf:'center'}}>Self</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onChange}>
            <View style={{flexDirection:"row"}}>
            <Button rounded dark
            style={{width:27,height:27,justifyContent:'center',marginRight:5}}
            light={!Boolean(this.state.phone)}
            
            >
            <Ionicons name="ios-checkmark" size={34} color="white" />
            </Button>
            <Text style={{fontFamily:'rale_regular',fontSize:12,alignSelf:'center'}}>Other Individual</Text>
            </View>
            </TouchableOpacity>
            </View>
            <View>
            <Text style={{fontFamily:'rale_bold',fontWeight:'bold',marginBottom:10}}>Location or Digital Address</Text>
            <TextInput
             keyboardType='name-phone-pad'
             style={{
                    height:50,
                    borderWidth:StyleSheet.hairlineWidth,
                    borderRadius:4,borderColor:'rgb(220, 220, 220)',
                    justifyContent:'center',marginBottom:15
            }}
            placeholder="eg.GA-492-74"
             />
             <View style={{flexDirection:'row'}}>
             <Text style={{fontFamily:'rale_bold',fontWeight:'bold',marginBottom:10,marginRight:100}}>Nearest Landmark</Text>
             <Text style={{fontFamily:'rale_bold',fontWeight:'bold',marginBottom:10}}>Alternate Contact</Text>
             </View>
             <View style={{flexDirection:'row'}}>
             <TextInput
             keyboardType='name-phone-pad'
             style={{
                    height:50,width:220,
                    borderWidth:StyleSheet.hairlineWidth,
                    borderRadius:4,borderColor:'rgb(220, 220, 220)',
                    justifyContent:'center',marginBottom:15,
                    marginRight:10
            }}
            placeholder="eg.Goil Fuel Station"
             />
             <TextInput
             keyboardType='name-phone-pad'
             style={{
                    height:50,width:160,
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
                    navigate('UpdateReport',{data:this.state.case,data1:this.state.case1}),
                    Alert.alert('Your report has been updated successfully')
                }}
            >
            <Text style={{color:'#fff',fontFamily:'rale_bold'}}>Report Case</Text>
            </Button>
            </View>
            </View>
                  </View>
          </Modal>
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
        height:727
      }
})