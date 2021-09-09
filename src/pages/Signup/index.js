import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// import { useAuth } from "../../providers/auth";
import { useUser } from "../../providers/user";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import fakeapi from "../../services/fakeapi";

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
      })
      .then((_) => history.push("/login"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitSignup)}>
        <h1>Cadastrar</h1>
        <TextField
          {...register("name")}
          placeholder="name"
          helperText={errors.name?.message}
        />
        <TextField
          {...register("email")}
          placeholder="email"
          helperText={errors.email?.message}
        />
        <TextField
          {...register("password")}
          placeholder="password"
          helperText={errors.password?.message}
        />
        <TextField
          {...register("state")}
          placeholder="state"
          helperText={errors.state?.message}
        />
        <Button type="submit">Cadastrar</Button>
        <p>
          Já é cadastrado? Faça seu <Link to="/login">login</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default Signup;
