import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/routes'

//ignorar avisos que aparecem em caixas amarelas no app
//ignora o aviso na string
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Routes/>
    </>
  );
}

