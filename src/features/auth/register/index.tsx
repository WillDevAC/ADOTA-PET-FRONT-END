import React, { useState } from "react";

import { motion } from "framer-motion";

import {
  Container,
  Box,
  Form,
  Describe,
  Info,
  Span,
  ErrorForm,
} from "../styles";

import { Input } from "../../../theme/ui/inputs";
import { Button } from "../../../theme/ui/buttons";
import { Header } from "../../../components/ui/header";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerSchema } from "../../../utils/forms.schemas";
import { RotatingLines } from "react-loader-spinner";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export const RegisterFeature = () => {
  const defaultValues = {
    name: "",
    email: "",
    password: "",
  };

  const [loading, setLoading] = useState<Boolean>(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit: onSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const handleSubmit = async (data: any) => {
    const { name, email, password } = data;

    setLoading(true);

    const response = await api.post("/config/user/", {
      name,
      email,
      password,
    });

    if (response.status === 201) {
      setLoading(false);
      reset(defaultValues);
      navigate("/auth/login");
      toast.success("Usuário cadastrado com sucesso!");
    } else {
      setLoading(false);
      reset(defaultValues);
      toast.error("Erro ao cadastrar usuário!");
    }
  };

  return (
    <>
      <Header path="/auth/" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Container>
          <Box>
            <Info>
              Cadastro <b>adotapet.</b>
            </Info>
            <Span>Preencha os dados abaixo para cadastro.</Span>
            <Form onSubmit={onSubmit(handleSubmit)}>
              <Input
                type="text"
                placeholder="Nome completo"
                variant="default"
                size="full"
                {...register("name")}
              />
              <ErrorForm>
                <>{errors?.name?.message}</>
              </ErrorForm>
              <Input
                type="email"
                placeholder="Email"
                variant="default"
                size="full"
                {...register("email")}
              />
              <ErrorForm>
                <>{errors?.email?.message}</>
              </ErrorForm>
              <Input
                type="password"
                placeholder="Senha"
                variant="default"
                size="full"
                {...register("password")}
              />
              <ErrorForm>
                <>{errors?.password?.message}</>
              </ErrorForm>
              <Button
                size="full"
                type={loading ? "disabled" : "default"}
                disabled={loading}
              >
                {loading ? (
                  <RotatingLines width="20" strokeColor="#9fa3a9" />
                ) : (
                  "Finalizar cadastro"
                )}
              </Button>
              <Describe>
                Já tem uma conta? <Link to="/auth/login">fazer login</Link>
              </Describe>
            </Form>
          </Box>
        </Container>
      </motion.div>
    </>
  );
};
