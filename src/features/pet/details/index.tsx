import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PET, TSizes, TSpecies } from "../../../@types/pet.type";
import Layout from "../../../layout";

import { api } from "../../../services/api";

interface IDetailsPetProps {
  id: string | undefined;
}

import {
  Breadcrumb,
  Grid,
  InfoPET,
  Slider,
  SliderPhoto,
  SliderVariants,
  Variant,
} from "./styles";

export const DetailsPetFeature = ({ id }: IDetailsPetProps) => {
  const [pet, setPet] = useState({} as PET);
  const [specie, setSpecie] = useState({} as TSpecies);
  const [size, setSize] = useState({} as TSizes);

  const getPet = async () => {
    const pet = await api.get(`/pet/${id}`);
    return pet;
  };

  const getSpecie = async () => {
    const specie = await api.get(`/specie/${id}`);
    return specie;
  };

  const getSize = async () => {
    const size = await api.get(`/size/${id}`);
    return size;
  };

  useEffect(() => {
    getPet().then((pet) => {
      setPet(pet.data);
    });

    getSpecie().then((specie) => {
      setSpecie(specie.data);
    });

    getSize().then((size) => {
      setSize(size.data);
    });
  }, []);

  return (
    <Layout>
      <Breadcrumb>
        <Link to="/">Home</Link> / pets / details / {id}
      </Breadcrumb>
      <Grid>
        <Slider>
          <SliderPhoto>
            <img
              src="https://lottserves.org/wp-content/uploads/2017/10/500x500.png"
              alt="Photo"
            />
          </SliderPhoto>
          <SliderVariants>
            <Variant>
              <img
                src="https://lottserves.org/wp-content/uploads/2017/10/500x500.png"
                alt="Photo"
              />
            </Variant>
            <Variant>
              <img
                src="https://lottserves.org/wp-content/uploads/2017/10/500x500.png"
                alt="Photo"
              />
            </Variant>
            <Variant>
              <img
                src="https://lottserves.org/wp-content/uploads/2017/10/500x500.png"
                alt="Photo"
              />
            </Variant>
            <Variant>
              <img
                src="https://lottserves.org/wp-content/uploads/2017/10/500x500.png"
                alt="Photo"
              />
            </Variant>
          </SliderVariants>
        </Slider>
        <InfoPET>
          <h1>{pet.name}</h1>
          <span>
            {specie.specieName} | Porte {size.sizeName}
          </span>
        </InfoPET>
      </Grid>
    </Layout>
  );
};
