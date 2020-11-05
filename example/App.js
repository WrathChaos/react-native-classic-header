import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
// import ClassicHeader from "react-native-classic-header";
import ClassicHeader from "./build/dist/ClassicHeader";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ClassicHeader title="Profile" />
      </SafeAreaView>
    </>
  );
};

export default App;
