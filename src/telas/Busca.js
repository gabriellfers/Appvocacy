import React from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView 
} from "react-native";

import { 
  TouchableOpacity 
} from 'react-native-gesture-handler';

import { 
  Searchbar 
} from 'react-native-paper';

const Buscar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <ScrollView>
    <View style={styles.container}>
     <Searchbar style={{marginLeft: 10, marginRight: 10, marginTop: 10}}
      placeholder=""
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    <View style={styles.container2}>
      <View style={{ flex: 0.5}}>
      {/* Primeira Coluna */}
      <TouchableOpacity>
      <Image style={styles.imagens}
       source={require('./../assets/advogado1.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style={styles.imagens}
       source={require('./../assets/advogado1.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style={styles.imagens}
       source={require('./../assets/advogado1.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style={styles.imagens}
       source={require('./../assets/advogado1.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style={styles.imagens}
       source={require('./../assets/advogado1.jpg')}
      />
      </TouchableOpacity>

      </View>
      <View style={{ flex: 0.5}}>

      <TouchableOpacity>
      <Image style={styles.imagens}
       source={require('./../assets/advogado1.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style={styles.imagens}
       source={require('./../assets/advogado1.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style={styles.imagens}
       source={require('./../assets/advogado1.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style={styles.imagens}
       source={require('./../assets/advogado1.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style={styles.imagens}
       source={require('./../assets/advogado1.jpg')}
      />
      </TouchableOpacity>
      </View>
      </View>
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container2: {
    flex: 0.5,
    flexDirection: "row",
  },
  container: {
    flex: 0.5,
  },
  imagens:{
    width: 175,
    height: 100,
    marginTop: 15,
    marginLeft: 11,
    borderRadius: 10,
    flexDirection: "row",
  },
});

export default Buscar;
