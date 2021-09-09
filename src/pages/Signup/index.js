import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { BlackTop, InitialBackground, InitialContainer } from "../../styles/globalComponents";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../../providers/auth";
import { useUser } from "../../providers/user";
import { FormGroup, InputGroup, Button } from "@blueprintjs/core";
import { Link } from "react-router-dom";
// import { Container } from './styles';

function Signup() {

  const { authenticated } = useAuth();
  const { onSubmitSignup } = useUser();

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

  return (
    <InitialBackground>
      <BlackTop>
        <Header/>
        <InitialContainer>
        <FormGroup onSubmit={handleSubmit(onSubmitSignup)}>
        <h1>Cadastrar</h1>
        <InputGroup
          {...register("name")}
          placeholder="name"
          helperText={errors.name?.message}
        />
        <InputGroup
          {...register("email")}
          placeholder="email"
          helperText={errors.email?.message}
        />
        <InputGroup
          {...register("password")}
          placeholder="password"
          helperText={errors.password?.message}
        />
        <InputGroup
          {...register("state")}
          placeholder="state"
          helperText={errors.state?.message}
        />
        <Button type="submit" minimal="true">
          Cadastrar
        </Button>
        <p>
          Já é cadastrado? Faça seu <Link to="/login">login</Link>{" "}
        </p>
      </FormGroup>
        </InitialContainer>
        <Footer/>
      </BlackTop>
    </InitialBackground>
  )
}

export default Signup;
