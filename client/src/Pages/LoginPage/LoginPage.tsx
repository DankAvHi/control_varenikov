import React, { useState } from "react";
import { api } from "../../Api/index.api";
import FlatButton from "../../Components/UI/Buttons/FlatButton/FlatButton";
import FlatInput from "../../Components/UI/Inputs/FlatInput/FlatInput";
import { LoginFormType } from "../../shared/routes/api/api.shared";
import styles from "./LoginPage.module.css";
import { loginButtonText, loginInuptLabelText, passwordInputLabelText } from "./LoginPage.text";

const initialFormState: LoginFormType = {
     login: "",
     password: "",
};

const LoginPage = () => {
     const { login } = api().useLoginApi();

     const [form, setForm] = useState<LoginFormType>(initialFormState);

     const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          setForm({ ...form, [event.target.name]: event.target.value });
     };

     const submitButtonOnClickHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          const data = await login(form);
          if (data.succes) {
               window.location.reload();
          }
     };

     return (
          <div className={styles.LoginPage}>
               <form className={styles.form}>
                    <FlatInput
                         label={loginInuptLabelText}
                         value={form.login}
                         type={"text"}
                         placeholder={loginInuptLabelText}
                         name={"login"}
                         className={styles.input}
                         onChange={inputOnChangeHandler}
                    />

                    <FlatInput
                         label={passwordInputLabelText}
                         value={form.password}
                         type={"password"}
                         placeholder={passwordInputLabelText}
                         name={"password"}
                         className={styles.input}
                         onChange={inputOnChangeHandler}
                    />

                    <FlatButton onClick={submitButtonOnClickHandler} className={styles.submit} text={loginButtonText} />
               </form>
          </div>
     );
};

export default LoginPage;
