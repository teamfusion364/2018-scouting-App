/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, Button, Navigator, TouchableHighlight, AsyncStorage, ViewList, ActivityIndicator,ListView, FlatList, TextInput, TouchableOpacity, Alert, Picker, ScrollView} from 'react-native';
export default class QuestionScreen extends Component {
  LearnMore1 (){
    console.log ('New User pressed!');
}
LearnMore2 (){
  console.log ('Return user Pressed!');
}
static navigationOptions = {
  title: null ,
  header: null,
}




constructor(props) {

   super(props)

   this.state = {
     username : '',
     team_num : '',
     scale : 'N/A',
     switches : 'N/A',
     cycle_time : 'N/A',
     climb_time : 'N/A',
     auto : 'N/A',
     cross_line_auto : 'N/A',
     switch_auto : 'N/A',
     vault_auto : 'N/A',
     vault : 'N/A',
     team_power : 'N/A',
     cube_num : 'N/A',
     team_hang : 'N/A',
     team_focus : 'N/A',
     team_penalties : 'N/A',
     dec_auto : 'N/A',
     dec_endgame : 'N/A',
     dec_strat : 'N/A'

   }
   AsyncStorage.getItem("username").then((value) => {
     this.setState({"username": value})
   });
   AsyncStorage.getItem("team_num").then((team) => {
     this.setState({"team_num": team})
   });


   }
   saveData(value){
       AsyncStorage.setItem("username", value);
       this.setState({"username": value});
   }
   saveData(team){
       AsyncStorage.setItem("team_num", team);
       this.setState({"team_num": team});
   }



InsertRecords = () =>{

     fetch('http://www.quotin.co/React/user-input.php', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       username : this.state.username,
       team_num : this.state.team_num,
       scale : this.state.scale,
       switches : this.state.switches,
       cycle_time : this.state.cycle_time,
       climb_time : this.state.climb_time,
       auto : this.state.auto,
       cross_line_auto : this.state.cross_line_auto,
       switch_auto : this.state.switch_auto,
       vault_auto : this.state.vault_auto,
       vault : this.state.vault,
       team_power : this.state.team_power,
       cube_num : this.state.cube_num,
       team_hang : this.state.team_hang,
       team_focus : this.state.team_focus,
       team_penalties : this.state.team_penalties,
       dec_auto : this.state.dec_auto,
       dec_endgame : this.state.dec_endgame,
       dec_strat : this.state.dec_strat

     })

     }).then((response) => response.json())
         .then((responseJson) => {

           // Showing response message coming from server after inserting records.
           Alert.alert(responseJson);

         }).catch((error) => {
           console.error(error);
         });

}


  render() {



      return(

        <View style={styles.MainContainer}>

        <ScrollView>
       <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Question Form </Text>
       <Text>{this.state.team_num}</Text>
       <Picker
  selectedValue={this.state.scale}
  onValueChange={(itemValue, itemIndex) => this.setState({scale: itemValue})}>
  <Picker.Item label="N/A" value="N/A" />
  <Picker.Item label="Yes" value="Yes" />
  <Picker.Item label="No" value="No" />
</Picker>
<Text>Can {this.state.team_num} score on the switch consistently?</Text>
<Picker
selectedValue={this.state.switches}
onValueChange={(itemValue, itemIndex) => this.setState({switches: itemValue})}>
<Picker.Item label="N/A" value="N/A" />
<Picker.Item label="Yes" value="Yes" />
<Picker.Item label="No" value="No" />
</Picker>
<Text>Can {this.state.team_num} score on the switch consistently?</Text>
<Picker
selectedValue={this.state.cycle_time}
onValueChange={(itemValue, itemIndex) => this.setState({cycle_time: itemValue})}>
<Picker.Item label="N/A" value="N/A" />
<Picker.Item label="Yes" value="Yes" />
<Picker.Item label="No" value="No" />
</Picker>
<Picker
selectedValue={this.state.climb_time}
onValueChange={(itemValue, itemIndex) => this.setState({climb_time: itemValue})}>
<Picker.Item label="N/A" value="N/A" />
<Picker.Item label="Yes" value="Yes" />
<Picker.Item label="No" value="No" />
</Picker>
<Picker
selectedValue={this.state.auto}
onValueChange={(itemValue, itemIndex) => this.setState({auto: itemValue})}>
<Picker.Item label="N/A" value="N/A" />
<Picker.Item label="Yes" value="Yes" />
<Picker.Item label="No" value="No" />
</Picker>
<Picker
selectedValue={this.state.cross_line_auto}
onValueChange={(itemValue, itemIndex) => this.setState({cross_line_auto: itemValue})}>
<Picker.Item label="N/A" value="N/A" />
<Picker.Item label="Yes" value="Yes" />
<Picker.Item label="No" value="No" />
</Picker>
<Picker
selectedValue={this.state.switch_auto}
onValueChange={(itemValue, itemIndex) => this.setState({switch_auto: itemValue})}>
<Picker.Item label="N/A" value="N/A" />
<Picker.Item label="Yes" value="Yes" />
<Picker.Item label="No" value="No" />
</Picker>
<Picker
selectedValue={this.state.vault_auto}
onValueChange={(itemValue, itemIndex) => this.setState({vault_auto: itemValue})}>
<Picker.Item label="N/A" value="N/A" />
<Picker.Item label="Yes" value="Yes" />
<Picker.Item label="No" value="No" />
</Picker>
<Picker
selectedValue={this.state.vault}
onValueChange={(itemValue, itemIndex) => this.setState({vault: itemValue})}>
<Picker.Item label="N/A" value="N/A" />
<Picker.Item label="Yes" value="Yes" />
<Picker.Item label="No" value="No" />
</Picker>
<Picker
selectedValue={this.state.team_power}
onValueChange={(itemValue, itemIndex) => this.setState({team_power: itemValue})}>
<Picker.Item label="N/A" value="N/A" />
<Picker.Item label="Yes" value="Yes" />
<Picker.Item label="No" value="No" />
</Picker>
<Picker
selectedValue={this.state.cube_num}
onValueChange={(itemValue, itemIndex) => this.setState({cube_num: itemValue})}>
<Picker.Item label="N/A" value="N/A" />
<Picker.Item label="Yes" value="Yes" />
<Picker.Item label="No" value="No" />
</Picker>
<Picker
selectedValue={this.state.team_hang}
onValueChange={(itemValue, itemIndex) => this.setState({team_hang: itemValue})}>
<Picker.Item label="N/A" value="N/A" />
<Picker.Item label="Yes" value="Yes" />
<Picker.Item label="No" value="No" />
</Picker>
<Picker
selectedValue={this.state.team_focus}
onValueChange={(itemValue, itemIndex) => this.setState({team_focus: itemValue})}>
<Picker.Item label="N/A" value="N/A" />
<Picker.Item label="Yes" value="Yes" />
<Picker.Item label="No" value="No" />
</Picker>
<Picker
selectedValue={this.state.team_penalties}
onValueChange={(itemValue, itemIndex) => this.setState({team_penalties: itemValue})}>
<Picker.Item label="N/A" value="N/A" />
<Picker.Item label="Yes" value="Yes" />
<Picker.Item label="No" value="No" />
</Picker>
<Picker
selectedValue={this.state.dec_auto}
onValueChange={(itemValue, itemIndex) => this.setState({dec_auto: itemValue})}>
<Picker.Item label="N/A" value="N/A" />
<Picker.Item label="Yes" value="Yes" />
<Picker.Item label="No" value="No" />
</Picker>
<Picker
selectedValue={this.state.dec_endgame}
onValueChange={(itemValue, itemIndex) => this.setState({dec_endgame: itemValue})}>
<Picker.Item label="N/A" value="N/A" />
<Picker.Item label="Yes" value="Yes" />
<Picker.Item label="No" value="No" />
</Picker>
<Picker
selectedValue={this.state.dec_strat}
onValueChange={(itemValue, itemIndex) => this.setState({dec_strat: itemValue})}>
<Picker.Item label="N/A" value="N/A" />
<Picker.Item label="Yes" value="Yes" />
<Picker.Item label="No" value="No" />
</Picker>


      <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.InsertRecords} >

        <Text style={styles.TextStyle}> Update Data</Text>

      </TouchableOpacity>
</ScrollView>

</View>

       );
     }
   }


const styles = StyleSheet.create({
  MainContainer :{

     alignItems: 'center',
     flex:1,
     paddingTop: 30,
     backgroundColor: '#fff'

   },

   MainContainer_For_Show_StudentList_Activity :{

     flex:1,
     paddingTop: (Platform.OS == 'ios') ? 20 : 0,
     marginLeft: 5,
     marginRight: 5

     },

   TextInputStyleClass: {

   textAlign: 'center',
   width: '90%',
   marginBottom: 7,
   height: 40,
   borderWidth: 1,
   borderColor: '#FF5722',
   borderRadius: 5 ,

   },

   TouchableOpacityStyle: {

     paddingTop:10,
     paddingBottom:10,
     borderRadius:5,
     marginBottom:7,
     width: '90%',
     backgroundColor: '#00BCD4'

   },

   TextStyle:{
     color:'#fff',
     textAlign:'center',
   },

   rowViewContainer: {
     fontSize: 20,
     paddingRight: 10,
     paddingTop: 10,
     paddingBottom: 10,
   }
});
