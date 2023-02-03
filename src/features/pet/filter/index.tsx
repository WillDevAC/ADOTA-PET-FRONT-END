import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { FilterCard } from "../../../components/cards/filter";
import { ICategories } from "../../../@types/filter.type";

import { api } from "../../../services/api";

import { Container } from "./styles";

export const FilterPetsFeature = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState({} as ICategories);
  const [ref, inView] = useInView({ threshold: 0, triggerOnce: true });

  const getCategories = async () => {
    setLoading(true);
    const response = await api.get("/pet/options");
    setCategories(response.data);
    setLoading(false);
  };

  useEffect(() => {
    if (inView) {
      getCategories();
    }
  }, [inView]);

  return (
    <>
      <Container ref={ref}>
        {categories.specie && (
          <FilterCard title="Espécie" options={categories.specie}/>
        )}
        {categories.size && (
          <FilterCard title="Porte" options={categories.size} />
        )}
        {categories.sex && <FilterCard title="Sexo" options={categories.sex} />}
      </Container>
      <div
        style={{ display: loading ? "flex" : "none" }}
        className={"loader"}
      />
    </>
  );
};
