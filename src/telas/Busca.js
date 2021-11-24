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

const Buscar = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <ScrollView>
    
    <View style={styles.container2}>
      <View style={{ flex: 0.5}}>
      {/* Primeira Coluna */}
      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens}
       source={require('./../assets/advogado1.jpg')}
      /> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens}
       source={require('./../assets/advogado1.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens}
       source={require('./../assets/advogado1.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens}
       source={require('./../assets/advogado1.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens}
       source={require('./../assets/advogado1.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens}
       source={require('./../assets/advogado1.jpg')}
       />
      </TouchableOpacity>
      </View>
      <View style={{ flex: 0.5}}>

      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens}
       source={require('./../assets/advogado1.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens}
       source={require('./../assets/advogado1.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens}
       source={require('./../assets/advogado1.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens}
       source={require('./../assets/advogado1.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens}
       source={require('./../assets/advogado1.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens}
       source={require('./../assets/advogado1.jpg')}
       />
      </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container2: {
    flex: 0.5,
    flexDirection: "row",
    marginBottom: 5,
  },
  container: {
    flex: 0.5,
  },
  imagens:{
    width: 175,
    height: 100,
    marginTop: 15,
    marginLeft: 11,
    borderRadius: 5,
    flexDirection: "row",
  },
});

export default Buscar;
