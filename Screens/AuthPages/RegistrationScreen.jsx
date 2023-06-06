import { useState } from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import backgroundImg from '../../assets/img/background.jpg';
import SvgAddButton from '../../assets/svg/SvgAddButton';

const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isAvatar, setAvatar] = useState(false);

  const handleFocus = () => {
    setIsShowKeyboard(true);
  };

  const handleKeyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardHide}>
      <View style={styles.container}>
        <ImageBackground source={backgroundImg} style={styles.bgContainer}>
          <View style={{ ...styles.contentWrapper, height: '67.61%' }}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.keyboardView}
            >
              <View style={styles.avatarWrapper}>
                <Image style={styles.avatar} />
                <TouchableOpacity
                  style={styles.isAvatar ? styles.btnAddAvatarLoad : styles.btnAddAvatar}
                >
                  <SvgAddButton
                    style={styles.isAvatar ? styles.btnAddAvatarSvgLoad : styles.btnAddAvatarSvg}
                  />
                </TouchableOpacity>
              </View>
              <Text style={{ ...styles.title, marginTop: 92 }}>Реєстрація</Text>
              <TextInput style={styles.input} placeholder="Логін" onFocus={handleFocus} />
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                onFocus={handleFocus}
              />
              <View style={{ ...styles.passWrapper, marginBottom: isShowKeyboard ? 323 : 43 }}>
                <TextInput
                  style={{ ...styles.input, ...styles.inputLast }}
                  placeholder="Пароль"
                  onFocus={handleFocus}
                />
                <TouchableOpacity style={styles.btnPassShow}>
                  <Text style={styles.btnPassShowText}>Показати</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>

            {!isShowKeyboard && (
              <View>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>Зареєструватися</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.link}>
                  <Text style={styles.linkText}>
                    Вже є акаунт? <Text style={styles.linkTextUnderline}>Увійти</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

import { Dimensions, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgContainer: {
    width: '100%',
    height: '100%',

    flexDirection: 'row',
    alignItems: 'flex-end',

    resizeMode: 'cover',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  keyboardView: {
    width: '100%',
  },
  contentWrapper: {
    paddingHorizontal: 16,

    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    height: '60.22%',
  },
  title: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',

    marginTop: 32,
    marginBottom: 32,
    color: '#212121',
  },
  input: {
    height: 50,
    fontSize: 16,
    padding: 16,
    marginBottom: 16,

    color: '#212121',
    backgroundColor: '#f6f6f6',

    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 8,
  },
  inputLast: {
    marginBottom: 0,
  },
  passWrapper: {
    marginBottom: 323,
  },
  btnPassShow: {
    position: 'absolute',
    right: 0,
    top: 0,
    alignSelf: 'center',

    padding: 16,

    backgroundColor: 'transparent',
  },
  btnPassShowText: {
    color: '#1B4371',
  },

  btn: {
    alignItems: 'center',
    padding: 16,

    backgroundColor: '#ff6c00',
    borderRadius: 100,
  },
  btnText: {
    color: '#ffffff',
  },

  link: {
    alignItems: 'center',

    marginTop: 16,
  },
  linkText: {
    color: '#1B4371',
  },
  linkTextUnderline: {
    textDecorationLine: 'underline',
  },

  //
  avatarWrapper: {
    position: 'absolute',
    top: -60,
    alignSelf: 'center',

    width: 120,
    height: 120,

    backgroundColor: '#f6f6f6',
    borderRadius: 16,
  },
  avatar: {
    width: 120,
    height: 120,
  },
  btnAddAvatar: {
    position: 'absolute',
    bottom: 14,
    right: -12.5,

    alignItems: 'center',
    alignContent: 'center',

    width: 25,
    height: 25,

    color: '#ff6c00',
    backgroundColor: '#ffffff',
    borderRadius: 50,
  },
  btnAddAvatarLoad: {
    position: 'absolute',
    bottom: 14,
    right: -12.5,

    alignItems: 'center',
    alignContent: 'center',

    width: 25,
    height: 25,

    color: '#ff6c00',
    backgroundColor: '#ffffff',
    borderRadius: 50,

    transform: [{ rotate: '45deg' }],
  },
  btnAddAvatarSvg: {
    fill: '#ff6c00',
    stroke: '#ff6c00',
    backgroundColor: '#ffffff',
  },
  btnAddAvatarSvgLoad: {
    fill: '#bdbdbd',
    stroke: '#e8e8e8',
    backgroundColor: '#ffffff',
  },
});
