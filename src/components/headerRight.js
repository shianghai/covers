import { Ionicons } from '@expo/vector-icons';

import React,{Component} from 'react';

import { Text, Button, View,StyleSheet } from 'react-native';

import RBSheet from "react-native-raw-bottom-sheet";

import { DATA1 } from './../notify';



export default class HeaderRight extends Component{
    constructor(props){
        super(props)
        this.state={
            selected:''
        }
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:'center'}}>
            <Ionicons name="ios-notifications-outline" size={50} color="black"
                    style={{padding:20}}
                    onPress={() => this.RBSheet.open()}
                    />
                    <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          animationType="slide"
          closeOnDragDown={true}
          height={800}
          openDuration={50}
          customStyles={{
              wrapper:{
                
              },
            container: {
              
              backgroundColor:'#fff',
              borderColor:'#f3f3f3',borderWidth:1,borderRadius:10
              
            },
            draggableIcon: {
                display:'none'
            }
          }}
        >
        <View style={styles.container}>
        <View style={{alignItems:'center',padding:20}}>
        <Text style={{fontFamily:'rale_bold',fontSize:18}}>Notifications</Text>
        </View>
        <View style={styles.cover}>
        <Text style={styles.title}>{DATA1[0].title}</Text>
        <Text style={styles.data}>{DATA1[0].data}</Text>
        </View>
        <View style={styles.cover}>
        <Text style={styles.title}>{DATA1[1].title}</Text>
        <Text style={styles.data}>{DATA1[1].data}</Text>
        </View>
        <View style={styles.cover}>
        <Text style={styles.title}>{DATA1[2].title}</Text>
        <Text style={styles.data}>{DATA1[2].data}</Text>
        </View>
        <View style={styles.cover}>
        <Text style={styles.title}>{DATA1[3].title}</Text>
        <Text style={styles.data}>{DATA1[3].data}</Text>
        </View>
        <View style={styles.cover}>
        <Text style={styles.title}>{DATA1[4].title}</Text>
        <Text style={styles.data}>{DATA1[4].data}</Text>
        </View>
        <View style={styles.cover}>
        <Text style={styles.title}>{DATA1[5].title}</Text>
        <Text style={styles.data}>{DATA1[5].data}</Text>
        </View>
        <View style={styles.cover}>
        <Text style={styles.title}>{DATA1[6].title}</Text>
        <Text style={styles.data}>{DATA1[6].data}</Text>
        </View>
        <View style={styles.cover}>
        <Text style={styles.title}>{DATA1[7].title}</Text>
        <Text style={styles.data}>{DATA1[7].data}</Text>
        </View>
        </View>
        </RBSheet>
                    
                    </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:30
    },
    cover:{
        flexDirection:'row',
        paddingTop:20,
        height:50,borderBottomWidth:0.2,borderColor:'rgb(220, 220, 220)',
        alignItems:'center',justifyContent:'space-between',flex:1
    },
    title:{
        fontFamily:'rale_regular',
        fontSize: 14,fontWeight:'bold'
    },
    data:{
        fontFamily:'rale_light',
        fontSize:10

    }
})