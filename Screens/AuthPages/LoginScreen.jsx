import { Dimensions, StyleSheet } from 'react-native';

import { useState } from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import backgroundImg from '../../assets/img/background.jpg';

const LoginScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

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
          <View style={styles.contentWrapper}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.keyboardView}
            >
              <Text style={styles.title}>Увійти</Text>
              <TextInput
                style={{ ...styles.input }}
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
                  <Text style={styles.btnText}>Увійти</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.link}>
                  <Text style={styles.linkText}>
                    Немає акаунту? <Text style={styles.linkTextUnderline}>Зареєструватися</Text>
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

export default LoginScreen;

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
});
