import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "./Input";

const inputLabels = ['username', 'e-mail', 'password', 'repeat password'];

const SignUpForm: React.FC<{
  account: string
}> = ({
  account
}) => {
  const [userData, setUserData] = useState<any>({
    userName: '',
    email: '',
    password: '',
    passwordRepeat: ''
  });
  const { t } = useTranslation();

  const onInput = (e: any): void => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
    console.log(e.target.id);
    
  }

  return (
    <div className="mx-auto">
      <div className="text-center text-5xl font-extrabold mb-12">
        <span>{t('sign_up_page.sign_up_form_title')}</span>
        <span>{t(`sign_up_page.${account}.title`)}</span>
      </div>
      <div>
        {Object.keys(userData).map((key, index) => 
          <Input 
            id={key}
            type={key.includes('password') ? 'password' : 'text'}
            value={userData[key]}
            label={inputLabels[index]}
            onChange={onInput}
          />)}
      </div>
    </div>
  );
}

export default SignUpForm;