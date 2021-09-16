import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import fakeapi from "../../services/fakeapi";
import { PanelContainer } from "../../styles/globalComponents";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useUser } from "../../providers/user";

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
    console.log(data);
    const newData = { comment: data.comment, userId: userId };
    // data.userId = userId;
    // data.comment = data.rating;
    console.log(profileID);
    fakeapi
      .patch(
        `users/${profileID}`,
        { rating: [...profileRating, newData] },
        config
      )
      .then((res) => {
        console.log("chegou aqui");
        setOpenRating(false);
      })
      .catch((err) => {
        //   toast.error("Algo deu errado. Tente novamente.")
        console.log(err);
        setOpenRating(false);
      });
  };

  return (
    <PanelContainer>
      <form onSubmit={handleSubmit(handleComment)}>
        <textarea
          maxLength="300"
          rows="5"
          placeholder="Digite seu comentário"
          wrap
          required
          {...register("comment")}
        />
        <span>{errors.message?.comment}</span>
        <button type="submit">Enviar</button>
      </form>
    </PanelContainer>
  );
};
export default RatingInput;
