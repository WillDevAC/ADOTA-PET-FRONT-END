import { useEffect, useState } from "react";
import { api } from "../../../services/api";

import {
  Container,
} from "./styles";

import { FilterCard } from "../../../components/cards/filter";

export const FilterPetsFeature = () => {

  const [loading, setLoading] = useState(false);

  const getCategories = async () => {
    const response = await api.get("/pet/options");
  };


  useEffect(() => {
    getCategories();
  }, []);
  
  return (
    <Container>
      <FilterCard/>
      <FilterCard/>
      <FilterCard/>
      <div
        style={{ display: loading ? "flex" : "none" }}
        className={"loader"}
      />
    </Container>
  );
};
