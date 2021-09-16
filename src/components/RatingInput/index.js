import { useEffect, useState } from "react"
import fakeapi from "../../services/fakeapi";
import { PanelContainer } from "../../styles/globalComponents"

const RatingInput = () => {

    const [commentInput, setCommentInput] = useState("");
    const token = localStorage.getItem("@comictrader:token");
    const profileID = localStorage.getItem("@comictrader:profileID") || "";
    const userId = localStorage.getItem("@comictrader:userID") || "";
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const [profileRating, setProfileRating] = useState();

    useEffect(() => {
        fakeapi.get(`users/${profileID}`, config).then((res) => {
        setProfileRating(res.data.rating);
        });
    }, []);

    const handleComment = () => {
        const data = {
            "userId": userId,
            "comment": commentInput
        }
        fakeapi.patch(`users/${profileID}`,
        { rating: [...profileRating, data] }, config)
        .catch((err) => console.log(err))
    }

    return (
        <PanelContainer>
            <textarea maxLength="300" rows="5" placeholder="Digite seu comentário" wrap required />
            <button type="submit">Enviar</button>
        </PanelContainer>
    )
}