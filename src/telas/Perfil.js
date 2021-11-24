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
  setDoc
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
  const [modalImagemVisible, setModalImagemVisible] = useState(false);

  const [vCPF, setCPF] = useState();
  const [vData, setData] = useState();
  const [vNome, setNome] = useState();
  const [vTel, setTelefone] = useState();
  const [vImagem, setImagem] = useState();

  const [TextoNome, setTNome] = useState();
  const [TextoCPF, setTCPF] = useState();
  const [TextoData, setTData] = useState();
  const [TextoTel, setTTel] = useState();
  const [TextoImagem, setTImagem] = useState();
  const [Idfirebase, setUID] = useState();
  var documento = 'info-user';

  class User {
    constructor (Nome, CPF, DataNascimnto, Telefone, Imagem ) {
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
    toStringImagem() {
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
   console.log("Usuario logado: " +user.uid)
   getDoc(doc(db, "info-user", user.uid).withConverter(userConverter)).then(docSnap => {
     setUID(user.uid)
    if (docSnap.exists()) {
     // console.log("Document data:", docSnap.data());
      var data = docSnap.data()

      setTNome(data.toStringNome())
      setTCPF(data.toStringCPF())
      setTData(data.toStringData())
      setTTel(data.toStringTel())
      setTImagem(data.toStringImagem())

    } else {
      console.log("No such document!");
    }
  })  
 } else {
   console.log("Não está logado")
 }
})

const AlterarDados = ()=>{
console.log(auth.lastNotifiedUid)
  setDoc(doc(db, "info-user", auth.lastNotifiedUid), {
  CPF: vCPF,
  DataNascimnto: vData,
  Nome: vNome,
  Telefone: vTel,
});
alert("Dados alterados com sucesso!!!")
};

const AlterarImagem = ()=>{
  const auth = getAuth()
  console.log(auth.lastNotifiedUid)
  console.log(vImagem)
    setDoc(doc(db, "info-user", auth.lastNotifiedUid), {
    CPF: TextoCPF,
    DataNascimnto: TextoData,
    Nome: TextoNome,
    Telefone: TextoTel,
    Imagem: vImagem
  });
  alert("Imagem alterada com sucesso!!!")

  };

      console.log(TextoCPF)
      console.log(TextoData)
      console.log(TextoNome)
      console.log(TextoTel)
      console.log(TextoImagem)

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
        onPress={() => setModalImagemVisible(true)}
        overlayContainerStyle={{}}
        placeholderStyle={{}}
        size="large"
        rounded
        source={{uri: TextoImagem}}
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
      </View>
    </Card>
    </View>
    </View>

    </View>




    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Editar dados:</Text>

      <TextInput 
       style={styles.inputs}
       autoCorrect = {false}
       placeholder = {TextoNome}
       value= {vNome}
       onChangeText={ nome => setNome(nome) }  
      />

      <TextInputMask 
       style={styles.inputs}
       placeholder={TextoCPF}
       type={'cpf'}
       value={vCPF}
       onChangeText={ cpf => setCPF(cpf)}
      />

      <TextInputMask 
       style={styles.inputs}
       type={'cel-phone'}
       placeholder={TextoTel}
       options={{
         maskType: 'BRL',
         withDDD: true,
         dddMask: '(99)'
       }}
       value={vTel}
       onChangeText={ telefone => setTelefone(telefone)}
      />

      <TextInputMask 
       style={styles.inputs}
       type={'datetime'}
       placeholder={TextoData}
       options={{
         format: 'DD/MM/YYYY'
       }}
       value={vData}
        onChangeText={ nascimento => setData(nascimento) }  
      />

        <TouchableOpacity style={styles.btnEditConfirm}>
        <Text style={styles.textoLogin} onPress={AlterarDados}>Alterar</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.btnEditsair}>
        <Text style={styles.textoLogin} onPress={() => setModalVisible(!modalVisible)}>Fechar</Text>
        </TouchableOpacity>   
          </View>
        </View>
      </Modal>
    </View>


    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalImagemVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalImagemVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Editar dados:</Text>

      <TextInput 
       style={styles.inputs}
       autoCorrect = {false}
       placeholder = {TextoImagem}
       value= {vImagem}
       onChangeText={ imagem => setImagem(imagem) }  
      />

        <TouchableOpacity style={styles.btnEditConfirm}>
        <Text style={styles.textoLogin} onPress={AlterarImagem}>Alterar</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.btnEditsair}>
        <Text style={styles.textoLogin} onPress={
          () => {
            setModalImagemVisible(!modalImagemVisible)
            setImagem("");
          }}>Fechar</Text>
        </TouchableOpacity>   
          </View>
        </View>
      </Modal>
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
      },
     btnEditConfirm:{
      backgroundColor: '#3D86D4',
      height: 30,
      width: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginTop: 10,
      marginBottom: 10
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
      btnEditsair:{
        backgroundColor: '#e13d3d',
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
        marginLeft: 20,
        marginRight: 20,
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