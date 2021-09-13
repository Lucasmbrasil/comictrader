import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { BlackTop, InitialBackground } from "../../styles/globalComponents";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import fakeapi from "../../services/fakeapi";
import { AnimationContainer, SignUpBackground } from "./styles";
// import { useAuth } from "../../providers/auth";

// import { Container } from './styles';

function Signup() {
  // const { authenticated } = useAuth();

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        "uma letra maiuscula, uma letra minuscula e um numero"
      )
      .required("Senha inválida"),
    state: yup.string().required("Informe seu Estado"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // if(authenticated) {
  //   return <Redirect to="/dashboard" />
  // }

  const history = useHistory();

  const onSubmitSignup = (data) => {
    data.country = "Brasil";
    data.comics_owned = [];
    data.comcis_wanted = [];
    data.rating = [];

    fakeapi
      .post("signup", data)
      .then((_) => {
        console.log("deu bom");
        console.log(data);
      })
      .then((_) => history.push("/login"))
      .catch((err) => console.log(err));
  };

  return (
    <InitialBackground>
      <BlackTop>
        <Header />
        <AnimationContainer>
          <SignUpBackground>
            <h1>CADASTRO</h1>
          </SignUpBackground>
          <form onSubmit={handleSubmit(onSubmitSignup)}>
            <input {...register("name")} placeholder="Nome" />
            <span>{errors.name?.message}</span>
            <input {...register("email")} placeholder="E-mail" />
            <span>{errors.email?.message}</span>
            <input
              {...register("password")}
              type="password"
              placeholder="Senha"
            />
            <span>{errors.password?.message}</span>
            <input
              {...register("state")}
              placeholder="Estado"
            />
            <span>{errors.state?.message}</span>
            <button type="submit">Cadastrar</button>
            <p>
              Já é cadastrado? Faça seu <Link to="/login">login</Link>.
            </p>
          </form>
        </AnimationContainer>
        <Footer />
      </BlackTop>
    </InitialBackground>
  );
}

export default Signup;
