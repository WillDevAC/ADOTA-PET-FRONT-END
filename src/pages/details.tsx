import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DetailsPetFeature } from "../features/pet/details";

export const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate("/");
    }
  }, []);

  return <DetailsPetFeature id={id} />;
};
