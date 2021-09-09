import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import fakeapi from "../../services/fakeapi";

// import { useAuth } from "../../providers/auth";
// import { Container } from './styles';

function Login() {
  // const { authenticated, setAuthenticated } = useAuth(); // sera utilizado para proteção de rotas futuramente
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("E-mail obrigatório")
      .matches(/^(.+)@(\S+)$/, "Digite um formato de email valido"),
    password: yup
      .string()
      .min(8, "Digite uma senha com 8 caracteres")
      .required("Senha Obrigatoria")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        "uma letra maiuscula, uma letra minuscula e um numero"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onSubmitSignin = (data) => {
    fakeapi
      .post("login", data)
      .then((res) => {
        console.log("deu bom");
        const { accessToken } = res.data;
        localStorage.setItem("@comictrader:token", JSON.stringify(accessToken));
        // setAuthenticated(true)
      })
      .then((_) => history.push("/main"))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmitSignin)}>
        <input {...register("email")} placeholder="Digite seu email" />
        {errors.email?.message}
        <input {...register("password")} placeholder="Digite sua senha" />
        {errors.password?.message}
        <button type="submit">Logar com a minha conta</button>
      </form>
      <p>
        Não tem um cadastro? Faça seu <Link to="/signup">registro</Link>
      </p>
    </>
  );
}

export default Login;
