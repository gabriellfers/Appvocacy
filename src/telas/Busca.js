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
      <Image style={styles.imagenstopo}
       source={require('../assets/button_ambiental.png')}
      /> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens}
       source={require('../assets/button_consumidor.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens}
       source={require('../assets/button_criminal.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens}
       source={require('../assets/button_empresarial.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens}
       source={require('../assets/button_penal.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens}
       source={require('../assets/button_t-i.png')}
       />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens}
       source={require('../assets/button_tributario.png')}
       />
      </TouchableOpacity>
      </View>
      <View style={{ flex: 0.5}}>

      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagenstopo2}
       source={require('../assets/button_civil.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens2}
       source={require('../assets/button_contratual.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens2}
       source={require('../assets/button_eleitoral.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens2}
       source={require('../assets/button_estado.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens2}
       source={require('../assets/button_prop-intelectual.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListaBusca')}>
      <Image style={styles.imagens2}
       source={require('../assets/button_trabalhista.png')}
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
    padding: 10,
    marginBottom: 5,
  },
  container: {
    flex: 0.5,
  },
  imagenstopo:{
    height: 60,
    width: 190,
    marginTop: 25,
    marginBottom: 25,
    borderRadius: 5,
    flexDirection: "row",
  },
  imagens:{
    height: 60,
    width: 190,
    marginBottom: 25,
    borderRadius: 5,
    flexDirection: "row",
  },
  imagenstopo2:{
    height: 60,
    width: 190,
    marginTop: 25,
    marginLeft: 7,
    marginBottom: 25,
    borderRadius: 5,
    flexDirection: "row",
  },
  imagens2:{
    height: 60,
    width: 190,
    marginLeft: 7,
    marginBottom: 25,
    borderRadius: 5,
    flexDirection: "row",
  },
});

export default Buscar;
