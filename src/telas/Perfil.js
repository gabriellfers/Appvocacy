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
  Modal,
  Image,
  Promise,
  Dimensions
  
} from 'react-native';
import { 
  getFirestore,
  doc,
  getDoc,
  setDoc,
  deleteDoc
} from "firebase/firestore";
import { 
  getAuth,
  signOut,
  onAuthStateChanged,
  deleteUser,
  updateEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";

import { 
  Avatar,
  Card,
  ListItem
} from "react-native-elements";

import { TouchableHighlight } from "react-native";

const dHeight = Dimensions.get('window').height
const dWidth = Dimensions.get('window').width


export default function Perfil({navigation}) {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalImagemVisible, setModalImagemVisible] = useState(false);
  const [modalExcluirVisible, setModalExcluirVisible] = useState(false);
  const [modalCreditosVisible, setModalCreditosVisible] = useState(false);
  const [modalEmailVisible, setModalEmailVisible] = useState(false);

  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;

  const [vEmail, setEmail] = useState(user.email);
  const [vCPF, setCPF] = useState();
  const [vData, setData] = useState();
  const [vNome, setNome] = useState();
  const [vTel, setTelefone] = useState();
  const [vImagem, setImagem] = useState();

  const [TextoNome, setTNome] = useState();
  const [TextoCPF, setTCPF] = useState();
  const [TextoData, setTData] = useState();
  const [TextoTel, setTTel] = useState();
  const [TextoEmail, setTEmail] = useState();
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
   navigation.navigate('Cadastro')
 }
})

const AlterarDados = ()=>{
console.log(auth.lastNotifiedUid)
if(vCPF == null | vData == null | vNome == null | vTel == null){
  alert("Preencha todos os campos")
}
else{
  setDoc(doc(db, "info-user", auth.lastNotifiedUid), {
  CPF: vCPF,
  DataNascimnto: vData,
  Nome: vNome,
  Telefone: vTel,
  Imagem: TextoImagem
});
alert("Dados alterados com sucesso!!!")
}
};

const AlterarImagem = ()=>{
  const auth = getAuth()
  const user = auth.currentUser;
  if(vImagem == null){
  alert("Preencha todos os campos")
  }
  else{
  console.log(vImagem)
    setDoc(doc(db, "info-user", user.uid), {
    CPF: TextoCPF,
    DataNascimnto: TextoData,
    Nome: TextoNome,
    Telefone: TextoTel,
    Imagem: vImagem
  });
  alert("Imagem alterada com sucesso!!!")
}
}

  const ExcluirConta = ()=>{
  const auth = getAuth();
  const user = auth.currentUser;

  deleteDoc(doc(db, "info-user", auth.currentUser.uid));

  deleteUser(user).then(() => {
  // User deleted.
  alert("Usuário excluido com sucesso!!!")
  navigation.navigate('Cadastro')
  }).catch((error) => {
  // An error ocurred
  // ...
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorCode, errorMessage);
  });
}

  const AlterarEmail = ()=>{
  const auth = getAuth();
  const user = auth.currentUser;
  const email = user.email;
  const password = user.password;
  if(TextoEmail == null){
    alert("Preencha todos os campos")
  }
  else{
  updateEmail(user, TextoEmail).then(() => {
    alert("Email alterado com sucesso!!!")
    alert("Entre com seu novo email")
    navigation.navigate('Cadastro')
  }).catch((error) => {
  // An error occurred
  // ...
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorCode, errorMessage);
  });
}

}

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
        onPress={() => setModalImagemVisible(true)}
        size="large"
        rounded
        title="+"
        source={{uri: TextoImagem}
          /*(()=>{
          if(TextoImagem){
            {uri: TextoImagem}
          }
          else{
            null
          }
        })*/
      }
        titleStyle={{}}
      />
      <ListItem.Content>
        <ListItem.Title>
          <Text>{TextoNome}</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text>{vEmail}</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
      <TouchableOpacity style={styles.btnEditar}>
        <Text style={styles.textoLogin} onPress={() => setModalVisible(true)}>Editar</Text>
        </TouchableOpacity> 
    </ListItem>

    <View style = {styles.container}>
    <Card containerStyle={styles.profile} wrapperStyle={{}}>
      <Text style={styles.titulo}>Opções:</Text>
      <TouchableOpacity style={styles.btnExcluir} onPress={()=> setModalCreditosVisible(true)}>
      <Text style={styles.textoLogin}>Créditos</Text>
      </TouchableOpacity> 
    </Card>

    <Card containerStyle={styles.profile} wrapperStyle={{}}>
      <Text style={styles.titulo}>Conta:</Text>
      <TouchableOpacity style={styles.btn} onPress={()=> setModalEmailVisible(true)}>
      <Text style={styles.textoLogin}>Trocar Email</Text>
      </TouchableOpacity>  
      <TouchableOpacity style={styles.btnLogout} onPress={()=>{logoutFirebase()}}>
      <Text style={styles.textoLogin}>Sair</Text>
      </TouchableOpacity>  
      <TouchableOpacity style={styles.btnExcluir} onPress={()=> setModalExcluirVisible(true)}>
      <Text style={styles.textoLogin}>EXCLUIR CONTA</Text>
      </TouchableOpacity>  
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

        <TouchableOpacity style={styles.btnEditConfirm} onPress={AlterarDados}>
        <Text style={styles.textoLogin} >Alterar</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.btnEditsair} onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.textoLogin}>Fechar</Text>
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
            <Text style={styles.modalText}>Coloque o link da imagem desejada:</Text>

      <TextInput 
       style={styles.inputs}
       autoCorrect = {false}
       placeholder = {TextoImagem}
       value= {vImagem}
       onChangeText={ imagem => setImagem(imagem) }  
      />

        <TouchableOpacity style={styles.btnEditConfirm}onPress={AlterarImagem}>
        <Text style={styles.textoLogin}>Alterar</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.btnEditsair} onPress={() => {setModalImagemVisible(!modalImagemVisible), setImagem("");}}>
        <Text style={styles.textoLogin}>Fechar</Text>
        </TouchableOpacity>  
          </View>
        </View>
      </Modal>
    </View>

    <View style={styles.centeredView}>
      <ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        swipeDirection="left"
        visible={modalCreditosVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalCreditosVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalViewc}>
            <Text style={{fontSize: 26, fontWeight: 'bold'}}>Criadores{"\n"}</Text>
            <Image style={{height:75, width:75, borderRadius:37.5}} source={{uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQG_fdUKbMwsaA/profile-displayphoto-shrink_200_200/0/1638580111097?e=1644451200&v=beta&t=rgV22QOiKoX8IdwUF0T-eyGpMbvuBMMSE28Wj3qFJPY'}}/>
            <Text style={{fontSize: 18}}>Gabriel Fernandes</Text>
            <Text style={{fontSize: 10}}>Estudante de Desenvolvimento de Sistemas na Etec Zona Leste{"\n"}</Text>

            <Image style={{height:75, width:75, borderRadius:37.5}} source={{uri: 'https://cdn.discordapp.com/attachments/818301339104837633/918328296389902406/gay.jpg'}}/>
            <Text style={{fontSize: 18}}>Gustavo Almeida</Text>
            <Text style={{fontSize: 10}}>Estudante de Desenvolvimento de Sistemas na Etec Zona Leste{"\n"}</Text>

            <Image style={{height:75, width:75, borderRadius:37.5}} source={{uri: 'https://media-exp1.licdn.com/dms/image/D4E03AQEmjjgtAD85uQ/profile-displayphoto-shrink_200_200/0/1638541718332?e=1644451200&v=beta&t=suocdXZfPa905pP1e7esGxj5E2V4KlIDdj027zZko5o'}}/>
            <Text style={{fontSize: 18}}>Fabio Yukio</Text>
            <Text style={{fontSize: 10}}>Estudante de Desenvolvimento de Sistemas na Etec Zona Leste{"\n"}</Text>

            <Image style={{height:75, width:75, borderRadius:37.5}} source={{uri: 'https://i.imgur.com/pGoGnmR.jpg'}}/>
            <Text style={{fontSize: 18}}>Diego Fortes</Text>
            <Text style={{fontSize: 10}}>Estudante de Desenvolvimento de Sistemas na Etec Zona Leste{"\n"}</Text>
            

        <TouchableOpacity style={styles.btnEditsair} onPress={() => {setModalCreditosVisible(!modalCreditosVisible)}}>
        <Text style={styles.textoLogin}>Fechar</Text>
        </TouchableOpacity>  
          </View>
        </View>
      </Modal>
      </ScrollView>
    </View>



    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalExcluirVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalExcluirVisible(!modalImagemVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Você realmente deseja excluir sua conta?</Text>

        <TouchableOpacity style={styles.btnEditConfirm} onPress={ExcluirConta}>
        <Text style={styles.textoLogin}>Sim</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.btnEditsair} onPress={() => {setModalExcluirVisible(!modalExcluirVisible)}}>
        <Text style={styles.textoLogin}>Não</Text>
        </TouchableOpacity>    
          </View>
        </View>
      </Modal>
    </View>

    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalEmailVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalEmailVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Digite seu novo email:</Text>

      <TextInput 
       style={styles.inputs}
       autoCorrect = {false}
       placeholder = {vEmail}
       value= {TextoEmail}
       onChangeText={ email => setTEmail(email) }  
      />

        <TouchableOpacity style={styles.btnEditConfirm} onPress={AlterarEmail}>
        <Text style={styles.textoLogin}>Alterar</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.btnEditsair} onPress={() => {setModalEmailVisible(!modalEmailVisible)}}>
        <Text style={styles.textoLogin}>Fechar</Text>
        </TouchableOpacity>     
          </View>
        </View>
      </Modal>
    </View>
    
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
    titulo:{
      fontSize: 24,
      marginBottom: 10
    },
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
    btn:{
      backgroundColor: '#DBBA81',
      width: (dWidth - 50),
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginBottom: 10
      },
    btnLogout:{
      backgroundColor: '#A1772F',
      width: (dWidth - 50),
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginBottom: 10
      },
      btnExcluir:{
        backgroundColor: '#544732',
        width: (dWidth - 50),
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        },     
      btnEditConfirm:{
      backgroundColor: '#DBBA81',
      height: 40,
      width: (dWidth - 100),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginTop: 10,
      marginBottom: 10
      },
      btnEditar:{
        backgroundColor: '#DBBA81',
        height: 40,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 10,
        marginBottom: 10
        },
      btnEditsair:{
        backgroundColor: '#543E18',
        height: 40,
        width: (dWidth - 100),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 5,
        marginBottom: 5
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
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      modalView: {
        position: 'absolute',
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
      modalViewc: {
        height: (dHeight - 50),
        position: 'absolute',
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
        width: (dWidth - 100),
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