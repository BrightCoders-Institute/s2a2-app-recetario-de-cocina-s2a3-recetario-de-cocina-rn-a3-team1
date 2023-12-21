import React from 'react';
import {StackNav} from './src/navigator/StackNav';
import {SafeAreaView} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StackNav />
    </SafeAreaView>
  );
}

export default App;
