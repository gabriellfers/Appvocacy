import { 
  getAuth,  
  firebase 
} from 'firebase/auth'

import { 
  getFirestore
} from "firebase/firestore";;


const MessagingService = {
  async getMessages() {
    const db = getFirestore()
    const auth = getAuth()
    return db
      .collection('messages')
      .then(messages => {
        let _messages = []
        messages.forEach(message => {
          _messages.push(message.data())
        })
        return _messages
      })
  },

  observeMessages (callback) {
    db.collection('messages').onSnapshot(callback)
  },

  async sendMessage (message) {
    const user = auth().currentUser

    db.collection('messages').add({
      user: {
        uid: user.uid,
        photo: user.photoURL,
        name: user.displayName,
        email: user.email
      },
      message,
      created: firebase.firestore.FieldValue.serverTimestamp()
    })
  },
}

export default MessagingService
