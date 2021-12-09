import React, { useRef, useEffect } from "react";
import {Text, ScrollView, View, StyleSheet,} from 'react-native';
import Moment from "react-moment";
import moment from "moment";

const Message = ({ msgs, user1 }) => {
  return (
    
    <View style={styles.mensagem}>
      <ScrollView style={styles.tudo}>
        <View style={msgs.from === user1 ? styles.own : styles.other}>

          <Text style={[msgs.from === user1 ? styles.me : styles.friend]}>
            {msgs.text}
          </Text>

          <Text style={styles.small}>
              {moment(msgs.createdAt.toDate()).fromNow()}
          </Text>

        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  tudo:{
  height:"100%",
  flex:1, 
  },
  small:{
    fontSize: 10,
    flexDirection: 'column',
    marginTop: 10,
    opacity: 0.8,
    color: '#FFF',
  },
  mensagem:{
    marginTop: 5,
    paddingVertical: 5
  },
  other:{
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 20,
    padding: 10,
    flexDirection: 'column',
    backgroundColor: '#be8d37',
    borderRadius: 10,
    textAlign: 'left',
    maxWidth: '49%',
    marginLeft: '1%'
  },
  own:{
    padding: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 20,
    flexDirection: 'column',
    backgroundColor: '#D49D3D',
    borderRadius: 10,
    textAlign: 'right',
    maxWidth: '49%',
    marginLeft: "50%",
  },
  me:{
    color: '#FFF',
  },
  friend:{
    color: '#FFF',
  },

})

export default Message