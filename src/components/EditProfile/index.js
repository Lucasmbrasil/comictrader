import { toast } from "react-toastify";
import fakeapi from "../../services/fakeapi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useUser } from "../../providers/user";
import { EditProfileForm } from "./style";

function EditProfile({ handleCloseEdit }) {
  const token = localStorage.getItem("@comictrader:token");
  const userId = localStorage.getItem("@comictrader:userID") || "";
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const { getId } = useUser();
  const updateProfile = (data) => {
    fakeapi
      .patch(`users/${userId}`, data, config)
      .then(() => {
        toast.info("Perfil atualizado");
        handleCloseEdit();
      })
      .then(getId())
      .catch((_) => toast.error("Falha ao atualizar perfil, tente novamente"));
  };

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    state: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <EditProfileForm>
      <form onSubmit={handleSubmit(updateProfile)}>
        <h2>Atualizar dados</h2>
        <input {...register("name")} placeholder="Novo nome de usuário" />
        <span>{errors.name?.message}</span>
        <input {...register("state")} placeholder="Estado" />
        <span>{errors.state?.message}</span>
        <button type="submit">Salvar alterações</button>
      </form>
    </EditProfileForm>
  );
}

export default EditProfile;
