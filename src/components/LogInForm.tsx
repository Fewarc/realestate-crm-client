import { ApolloError, useLazyQuery } from "@apollo/client";
import classNames from "classnames";
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { clearErrorAlerts, pushAlert } from "../actions/AlertsActions";
import { userLogIn } from "../actions/UserActions";
import Config from "../constants/Config";
import LOG_IN_USER from "../graphql/queries/logInUser";
import Button from "./Button";
import Input from "./Input";
import Spinner from "./Spinner";

interface userDataTypes {
  username: string,
  password: string,
}

const LogInForm: React.FC = () => {
  const [userData, setUserData] = useState<userDataTypes>({
    username: '',
    password: ''
  });
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [ logInUser, { loading, error, data } ] = useLazyQuery(LOG_IN_USER, { errorPolicy: 'all' });

  useEffect(() => {
    if(error) {
      dispatch(pushAlert({
        type: Config.ERROR_ALERT,
        message: new ApolloError(error).message
      }));
    }
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, error]);

  useEffect(() => {
    if (data) {
      const token = jwt_decode(data.logInUser) as any
      const { user } = token;

      if(user.login === userData.username) {
        localStorage.setItem('token', data.logInUser);
        dispatch(userLogIn(user));
        dispatch(clearErrorAlerts());
        history.push('/');
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const inputLabels = [
    t('log_in_page.form.label.username'),
    t('log_in_page.form.label.password')
  ];

  const submitForm = (): void => {
    logInUser({
      variables: {
        login: userData.username,
        password: userData.password
      }
    });
  }

  return (
    <div className="mx-auto relative">
      {loading && <Spinner className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"/>}
      <div className={`transition duration-500 ${loading && 'opacity-20 pointer-events-none'}`}>
        <div className="text-center text-5xl font-extrabold mb-12">
          <span>{t('log_in_page.log_in_form_title')}</span>
        </div>
        <div className="max-w-md px-4 mx-auto">
          {Object.keys(userData).map((key, index) => 
            <Input 
              id={key}
              type={key.includes('password') ? 'password' : 'text'}
              value={userData[key as keyof userDataTypes]}
              label={inputLabels[index]}
              onChange={e => setUserData({ ...userData, [e.target.id]: e.target.value.replaceAll(' ', '') })}
              className={classNames({'border-opacity-100': userData[key as keyof userDataTypes].length})}
            />)}
        </div>
        <div className="w-full mt-6 flex justify-center">
          <Button 
            type='primary'
            onClick={() => submitForm()}
            children={t('log_in_page.form.button')}
            disabled={Object.values(userData).some(value => value === '')}
          />
        </div>
      </div>
    </div>
  );
}

export default LogInForm;