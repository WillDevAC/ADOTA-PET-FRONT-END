import { useContext, useState } from "react";

import { Container, Box, Form, Network, Describe, ErrorForm, Info, Span } from "../styles";
import { BsGoogle, BsFacebook } from "react-icons/bs";

import { Header } from "../../../components/ui/header";
import { Button } from "../../../theme/ui/buttons";
import { Input } from "../../../theme/ui/inputs";

import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../utils/forms.schemas";
import { RotatingLines } from "react-loader-spinner";
import { AuthContext } from "../../../context/auth.context";

export const LoginFeature = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const handleSubmit = async (data: any) => {
    setLoading(true);
    try {
      await signIn(data);
    } catch (error) {
      toast.error("Usuário ou senha inválidos.");
    } finally {
      setLoading(false);
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
          <Info>Bem vindo, <b>adotapet.</b> </Info>
          <Span>Falta pouco para você ter o seu novo amigo.</Span>
            <Network>
              <Button size="full" type="google">
                <BsGoogle size={20} /> Entrar com Google
              </Button>
              <Button size="full" type="facebook">
                <BsFacebook size={20} /> Entrar com Facebook
              </Button>
            </Network>
            <Form onSubmit={onSubmit(handleSubmit)}>
              <Input
                type="email"
                placeholder="Email"
                variant="default"
                size="full"
                {...register("username")}
              />
              <ErrorForm>
                <>{errors?.username?.message}</>
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
                  "Fazer login"
                )}
              </Button>
              <Describe>
                Não tem uma conta? <Link to="/auth/register">Cadastre-se</Link>
              </Describe>
            </Form>
          </Box>
        </Container>
      </motion.div>
    </>
  );
};
