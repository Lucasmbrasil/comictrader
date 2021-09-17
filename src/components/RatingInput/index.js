import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import fakeapi from "../../services/fakeapi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useUser } from "../../providers/user";
import { RatingForm } from "./styles";

const RatingInput = () => {
  const token = localStorage.getItem("@comictrader:token");
  const profileID = localStorage.getItem("@comictrader:profileID") || "";
  const userId = localStorage.getItem("@comictrader:userID") || "";
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const [profileRating, setProfileRating] = useState("");
  const { setOpenRating } = useUser();
  const schema = yup.object().shape({
    comment: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    if (profileRating === "") {
      fakeapi.get(`users/${profileID}`, config).then((res) => {
        setProfileRating(res.data.rating);
      });
    }
  }, []);

  const handleComment = (data) => {
    const newData = { comment: data.comment, userId: userId };
    fakeapi
      .patch(
        `users/${profileID}`,
        { rating: [...profileRating, newData] },
        config
      )
      .then((res) => {
        setOpenRating(false);
      })
      .catch((err) => {
        toast.error("Algo deu errado. Tente novamente.")
        setOpenRating(false);
      });
  };

  return (
    <RatingForm>
      <form onSubmit={handleSubmit(handleComment)}>
        <h2>Avalie sue troca com o usuário:</h2>
        <textarea
          maxLength="300"
          rows="5"
          placeholder="Digite seu comentário"
          wrap
          {...register("comment")}
        />
        <span>{errors.comment?.message}</span>
        <button type="submit">Enviar</button>
      </form>
    </RatingForm>
  );
};
export default RatingInput;
