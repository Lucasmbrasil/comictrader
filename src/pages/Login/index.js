import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { useAuth } from "../../providers/auth";
// import { Container } from './styles';

function Login() {
  const { authenticated, setAuthenticated } = useAuth(); // sera utilizado para proteção de rotas futuramente
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

  const Requisicao = (data) => {
    console.log(data);

    localStorage.setItem("@comictrader:token", JSON.stringify(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(Requisicao)}>
        <input {...register("email")} placeholder="Digite seu email" />
        {errors.email?.message}
        <input {...register("password")} placeholder="Digite sua senha" />
        {errors.password?.message}
        <button type="submit">Logar com a minha conta</button>
      </form>
    </>
  );
}

export default Login;
