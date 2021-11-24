/*import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'

import Fire from '../components/Fire';

type Props = {
  name?: string,
};

class Chat extends React.Component<Props> {

  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });

  state = {
    messages: [],
  };

 
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
      />
    );
  }

  componentWillUnmount() {
    Fire.shared.off();
  }
}

export default Chat;
*/