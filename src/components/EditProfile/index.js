import { toast } from "react-toastify";
import fakeapi from "../../services/fakeapi";
import { PanelContainer } from "../../styles/globalComponents";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useUser } from "../../providers/user";

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
    name: yup.string(),
    state: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <PanelContainer>
      <form onSubmit={handleSubmit(updateProfile)}>
        <h2>Atualizar dados</h2>
        <input {...register("name")} placeholder="Novo nome de usuário" />
        <input {...register("state")} placeholder="Estado" />
        <button type="submit">Salvar alterações</button>
      </form>
    </PanelContainer>
  );
}

export default EditProfile;
