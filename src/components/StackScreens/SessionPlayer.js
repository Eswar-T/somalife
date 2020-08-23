import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const SessionPlayer = ({ navigation }) => {
    return(
        <View style={{ justifyContent:'center',alignItems:'center' }}>
          <Text style={{ fontSize:30,fontWeight:'bold' }}>Session Player Screen</Text>
          <TouchableOpacity style={{ height:70,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("PostSession")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Go to Post Session</Text>
          </TouchableOpacity>
        </View>
    )
}

export default SessionPlayer;