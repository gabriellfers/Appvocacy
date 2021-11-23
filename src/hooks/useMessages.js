import { 
  useEffect, 
  useState 
} from 'react';

import { 
  useCollection 
} from 'react-firebase-hooks/firestore';

import { 
  getFirestore
} from "firebase/firestore";;

function useMessages () {
  const db = getFirestore();
  const [messages, setMessages] = useState([])
  const [messagesCollection, loadingMessages, error] = useCollection(
    db.collection('messages')
      .orderBy('created', 'desc')
      .limit(500)
  )

  useEffect(() => {
    const newMessages = messagesCollection?.docs
      .map(doc => ({
        ...doc.data(),
        key: doc.id
      })).reverse() || []

    setMessages(newMessages)
  }, [messagesCollection])

  return {
    messages,
    loadingMessages,
    error
  }
}

export default useMessages