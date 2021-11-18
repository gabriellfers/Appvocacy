import React, {useState} from 'react';

import {
View, 
StyleSheet, 
Text, 
TextInput,
TouchableOpacity,
Image,
ScrollView
} from 'react-native';

import { 
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";

import { 
  doc, setDoc, getFirestore
} from "firebase/firestore";

require ("./../../firebaseConfig.js")


import { Ionicons } from '@expo/vector-icons';
import logo from './../assets/logo.png';

export default function CadastroCliente({navigation}) {
    
    const db = getFirestore();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [vCPF, setCPF] = useState('');
    const [vDataNascimento, setDataNascimento] = useState('');
    const [vNome, setNome] = useState('');
    const [vTelefone, setTelefone] = useState('');
    const [ocultarSenha, setOcultarSenha] = useState (true);

    function cadastrarFirebase(){
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, senha, vCPF, vDataNascimento, vNome, vTelefone).then(cred => {
                // Signed in
                const user = cred.user;
                // ...

                setDoc(doc(db, "info-user", user.uid), {
                  CPF: vCPF,
                  DataNascimnto: vDataNascimento,
                  Nome: vNome,
                  Telefone: vTelefone
                });

                console.log("Criado com sucesso! UID: " + user.uid)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Ocorreu um erro na criação da conta", errorCode, errorMessage)
            // ..
          })
        };
    
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
       if (user) {
         console.log("Bem vindo: " +user.uid)
         const uid = user.uid;
         navigation.navigate("Main")
       } else {
         console.log("Não está logado")
       }
       });
    return(

    <ScrollView style={styles.fundo}>
    <View style={styles.container}>
     <View style={styles.logo}>
       <Image 
       source={logo} 
       />
     </View>

     <View style={styles.container}>

     <TextInput 
        style={styles.inputs}
        autoCorrect = {false}
        placeholder = " Email"
        onChangeText={ email => setEmail(email) }  
      />
    <View style={styles.areaInputSenha}>
    <TextInput 
        style={styles.inputsenha}
        autoCorrect = {false}
        placeholder = " Senha"
        onChangeText={ senha => setSenha(senha) }  
        secureTextEntry={ocultarSenha}
    />
    
    <TouchableOpacity style={styles.icon} onPress={ () => setOcultarSenha(!ocultarSenha)}>
        {ocultarSenha ?
          <Ionicons name="eye" color="#FFF" size={25} />
          :
          <Ionicons name="eye-off" color="#8c8c8c" size={25} />
        }
    </TouchableOpacity>
    </View>
    

    <View style={styles.areainputs}>
    <TextInput 
        style={styles.inputs}
        autoCorrect = {false}
        placeholder = " Nome"
        onChangeText={ nome => setNome(nome) }  
      />

    <TextInput 
        style={styles.inputs}
        autoCorrect = {false}
        placeholder = " CPF"
        onChangeText={ CPF => setCPF(CPF) }  
      />

    <TextInput 
        style={styles.inputs}
        autoCorrect = {false}
        placeholder = " Telefone"
        onChangeText={ Telefone => setTelefone(Telefone) }  
      />

    <TextInput 
        style={styles.inputs}
        autoCorrect = {false}
        placeholder = " Data de Nascimento"
        onChangeText={ nascimento => setDataNascimento(nascimento) }  
      />
     </View>
     </View>    
     
     <View>
     <TouchableOpacity style={styles.btnCadastrar} onPress={()=>cadastrarFirebase()}>
        <Text style={styles.textoCadastrar}>Cadastrar</Text>
      </TouchableOpacity>    
     </View>
    </View>
    </ScrollView>
      )
      }

    const styles = StyleSheet.create({
    fundo:{
        flex: 1,
        backgroundColor: '#e6e6e6'
    },
    
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo:{
        marginBottom: 10,
        flex: 1,
        paddingTop: 10,
        justifyContent: 'center',
    },
    
    inputs:{
        backgroundColor: '#FFF',
        width: 300,
        marginBottom: 10,
        color:'#000000',
        fontSize: 17,
        borderRadius: 7,
        paddingRight: 0,
        paddingLeft: 0,
        padding: 10
    },

    inputsenha:{
        backgroundColor: '#FFF',
        width: 260,
        marginBottom: 10,
        color:'#000000',
        fontSize: 17,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRadius: 7,
        paddingRight: 0,
        paddingLeft: 0,
        padding: 10
    },

    areaInputSenha:{
        flexDirection: 'row',
        justifyContent: 'center',
        borderStyle: 'solid'
    },

    btnCadastrar:{
        backgroundColor: '#D49D3D',
        width: 150,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 40,
        marginTop: 30
    },
    
    textoCadastrar:{
        color: '#FFFFFF',
        fontSize: 17
    },

    icon:{
        width: 40,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderRadius: 7,
    
      }
    
})

