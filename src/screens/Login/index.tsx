import {Formik} from 'formik';
import React, {useCallback, useState} from 'react';
import {Image, View, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
import {Input, Button} from 'components';
import {LoginRequest, StackParams, AppDispatch} from 'types';
import styles from './styles';
import {login} from './thunk';
import validationSchema from './validationSchema';

type Props = StackScreenProps<StackParams, 'Login'>;

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleOnSubmit = useCallback(
    async (values: LoginRequest) => {
      setLoading(true);
      await dispatch(login(values));
      setLoading(false);
      navigation.navigate('Home');
    },
    [dispatch, navigation],
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled"
      style={styles.container}>
      <Formik
        onSubmit={handleOnSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}>
        {({handleSubmit}) => (
          <View style={styles.content}>
            <View style={styles.header}>
              <Image source={images.logo_light} style={styles.logo} />
            </View>
            <Input
              name="email"
              placeholder="Enter email"
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <Input
              name="password"
              secureTextEntry
              placeholder="Enter password"
            />
            <Button
              label="SignIn"
              onPress={handleSubmit}
              isLoading={loading}
              disabled={loading}
              containerStyle={styles.submit}
            />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const initialValues: LoginRequest = {
  email: '',
  password: '',
};

export default LoginScreen;
