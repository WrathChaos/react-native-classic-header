<img alt="React Native Classic Header" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-classic-header)

[![React Native Classic Header](https://img.shields.io/badge/-Fully%20customizable%20Classic%20Header%20View%20for%20React%20Native-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-classic-header)

[![npm version](https://img.shields.io/npm/v/react-native-classic-header.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-classic-header)
[![npm](https://img.shields.io/npm/dt/react-native-classic-header.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-classic-header)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Classic Header"
        src="assets/Screenshots/React-Native-Classic-Header.png" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-classic-header
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-vector-icons": ">= 7.0.0",
"react-native-dynamic-vector-icons": ">= 1.0.0",
"@freakycoder/react-native-helpers": ">= 0.1.3"
```

# Usage

## Import

```jsx
import ClassicHeader from "react-native-classic-header";
```

## Classic Header Usage

### Basic Usage

```jsx
<ClassicHeader
  headerTitle="Header"
  rightComponentDisable
  leftComponentOnPress={() => {}}
  hitSlops={
    top: 30,
    bottom: 30,
    left: 30,
    right: 30
  }
/>
```

### Advanced Custom Usage

```jsx
<ClassicHeader
  headerTitle="Header"
  leftComponent={
    <TouchableOpacity onPress={() => {}}>
      <Icon name="ios-arrow-back" type="Ionicons" size={30} color="blue" />
    </TouchableOpacity>
  }
  rightComponent={
    <TouchableOpacity onPress={() => {}}>
      <Icon name="github" type="AntDesign" size={30} color="purple" />
    </TouchableOpacity>
  }
/>
```

# Configuration - Props

## Classic Header Props

| Property              |   Type    |  Default   | Description                                                                  |
| --------------------- | :-------: | :--------: | ---------------------------------------------------------------------------- |
| styles                |  styles   |   styles   | use this to change main style of the header                                  |
| height                |  number   |     50     | use this to change the header's height                                       |
| width                 |  number   |    100%    | use this to change the header's width                                        |
| statusBarHidden       |  boolean  |   false    | use this to let Header Component itself re-arrange depends on the status bar |
| hitSlops              |  object   | object: 30 | use this to change the header's left and right components' hitSlots          |
| bottomStick           |  boolean  |   false    | stick the header to bottom side                                              |
| headerTitle           |  string   |     ""     | use this to set header's title                                               |
| backgroundColor       |   color   |  #ffffff   | use this to change the header's background color                             |
| leftComponent         | component |    Icon    | set the left component                                                       |
| leftComponentStyle    |   style   |   style    | set the left component's style                                               |
| leftComponentDisable  |  boolean  |   false    | disable the left component                                                   |
| leftComponentOnPress  | function  |    null    | set the left component's onPress function                                    |
| rightComponent        | component |    Icon    | set the right component                                                      |
| rightComponentStyle   |   style   |   style    | set the right component's style                                              |
| rightComponentDisable |  boolean  |   false    | disable the right component                                                  |
| rightComponentOnPress | function  |    null    | set the right component's onPress function                                   |
| centerComponent       | component |    Icon    | set the center component                                                     |
| centerComponentStyle  |   style   |   style    | set the center component's style                                             |

## Future Plans

- [x] ~~LICENSE~~

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Classic Header is available under the MIT license. See the LICENSE file for more info.
