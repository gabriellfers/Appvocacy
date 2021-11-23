import React, {useState} from 'react';

import { 
  TextInputMask 
} from 'react-native-masked-text'

import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal
  
} from 'react-native';
import { 
  getFirestore,
  doc,
  getDoc,
} from "firebase/firestore";
import { 
  getAuth,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { 
  Avatar,
  Card,
  ListItem
} from "react-native-elements";

import { TouchableHighlight } from "react-native";


export default function Perfil({navigation}) {

  const [modalVisible, setModalVisible] = useState(false);

  const [TextoNome, setTNome] = useState();
  const [TextoCPF, setTCPF] = useState();
  const [TextoData, setTData] = useState();
  const [TextoTel, setTTel] = useState();
  const [Imagem, setTImagem] = useState();
  const [Idfirebase, setUID] = useState();
  var documento = 'info-user';

  class User {
    constructor (Nome, CPF, DataNascimnto, Telefone ) {
        this.Nome = Nome;
        this.CPF = CPF;
        this.DataNascimnto = DataNascimnto;
        this.Telefone = Telefone;
        this.Imagem = Imagem;
    }
    toStringNome() {
      return this.Nome;
    }
    toStringCPF() {
      return this.CPF;
    }
    toStringData() {
      return this.DataNascimnto;
    }
    toStringTel() {
      return this.Telefone;
    }
    toStringImg() {
      return this.Imagem;
    }
}
  const userConverter = {
    toFirestore: (documento) => {
        return {
            Nome: documento.Nome,
            CPF: documento.CPF,
            DataNascimnto: documento.DataNascimnto,
            Telefone: documento.Telefone,
            Imagem: documento.Imagem
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new User(data.Nome, data.CPF, data.DataNascimnto, data.Telefone, data.Imagem);
    }
}
  const db = getFirestore();
  const auth = getAuth();

  function logoutFirebase(){
    const auth = getAuth();
  signOut(auth).then(() => {
    alert("Deslogado")
    navigation.navigate('Cadastro')
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode, errorMessage);
  });
  }

  onAuthStateChanged(auth, (user) => {
 if (user) {
   //console.log("Usuario logado: " +user.uid)
   getDoc(doc(db, "info-user", user.uid).withConverter(userConverter)).then(docSnap => {
     setUID(user.uid)
    if (docSnap.exists()) {
      //console.log("Document data:", docSnap.data());
      var data = docSnap.data()

      setTNome(data.toStringNome())
      setTCPF(data.toStringCPF())
      setTData(data.toStringData())
      setTTel(data.toStringTel())
      setTImg(data.toStringImagem())

      /*console.log(TextoCPF)
      console.log(TextoData)
      console.log(TextoNome)
      console.log(TextoTel)
      console.log(Imagem)*/

    } else {
      //console.log("No such document!");
    }
  })  
 } else {
   //console.log("Não está logado")
 }
})

function AlterarDados(){
setDoc(doc(db, "info-user", Idfirebase), {
  CPF: TextoCPF,
  DataNascimnto: TextoData,
  Nome: TextoNome,
  Telefone: TextoTel,
  Imagem: Imagem
});
}

      

  return (
    <ScrollView>
    <View>

    

    <View style = {styles.profile}>
    
    <ListItem
      Component={TouchableHighlight}
      containerStyle={{}}
      disabledStyle={{ opacity: 0.5 }}
      pad={20}
    >
        <Avatar
        activeOpacity={0.2}
        avatarStyle={{justifyContent: 'center'}}
        containerStyle={{ backgroundColor: "#BDBDBD" }}
        icon={{}}
        onPress={() => {
          setTImagem(window.prompt("Coloque o link da imagem desejada"));
        }
        }
        overlayContainerStyle={{}}
        placeholderStyle={{}}
        size="large"
        rounded
        source={Imagem}
        titleStyle={{}}
      />
      <ListItem.Content>
        <ListItem.Title>
          <Text>{TextoNome}</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text>Usuário Logado!</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
      <TouchableOpacity style={styles.btnEdit}>
        <Text style={styles.textoLogin} onPress={() => setModalVisible(true)}>Editar</Text>
        </TouchableOpacity> 
    </ListItem>

    <View style = {styles.container}>
    <Card containerStyle={styles.profile} wrapperStyle={{}}>
      <View>
      <TouchableOpacity style={styles.btnLogout} onPress={()=>{logoutFirebase()}}>
      <Text style={styles.textoLogin}>Sair</Text>
      </TouchableOpacity>  

      <TouchableOpacity style={styles.btnLogout} onPress={()=>{logoutFirebase()}}>
      <Text style={styles.textoLogin}>Sair</Text>
      </TouchableOpacity>  

      <TouchableOpacity style={styles.btnLogout} onPress={()=>{logoutFirebase()}}>
      <Text style={styles.textoLogin}>Sair</Text>
      </TouchableOpacity>  

      <TouchableOpacity style={styles.btnLogout} onPress={()=>{logoutFirebase()}}>
      <Text style={styles.textoLogin}>Sair</Text>
      </TouchableOpacity>  

      <TouchableOpacity style={styles.btnLogout} onPress={()=>{logoutFirebase()}}>
      <Text style={styles.textoLogin}>Sair</Text>
      </TouchableOpacity>  

      <TouchableOpacity style={styles.btnLogout} onPress={()=>{logoutFirebase()}}>
      <Text style={styles.textoLogin}>Sair</Text>
      </TouchableOpacity>  

      <TouchableOpacity style={styles.btnLogout} onPress={()=>{logoutFirebase()}}>
      <Text style={styles.textoLogin}>Sair</Text>
      </TouchableOpacity>  

      <TouchableOpacity style={styles.btnLogout} onPress={()=>{logoutFirebase()}}>
      <Text style={styles.textoLogin}>Sair</Text>
      </TouchableOpacity>  
      </View>
    </Card>
    </View>
    </View>

    </View>




    

    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
    modalText:{
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 10
    },
    container:{
        flex:1,
        alignItems: 'center',
        marginBottom: 15,
    },
    profile:{
      fontSize: 25,
      fontWeight: 'bold',
    },
    list:{
      alignItems: 'center',
      justifyContent: 'center'
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    btnLogout:{
      backgroundColor: '#4a0000',
      width: 300,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginTop: 15
      },
     btnEdit:{
      backgroundColor: '#3D86D4',
      height: 30,
      width: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginTop: 10,
      marginBottom: 10
      },
      textoLogin:{
        color: '#FFFFFF',
        fontSize: 17
      },
      modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      inputs:{
        backgroundColor: '#FFFFFF',
        width: 300,
        marginBottom: 10,
        color:'#000000',
        fontSize: 17,
        borderRadius: 7,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: "#e6e6e6",
        paddingRight: 0,
        paddingLeft: 0,
        padding: 10
    },
})