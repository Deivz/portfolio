import styles from "./formulario.module.css"
import React from 'react';
import {FaEnvelope} from "react-icons/fa"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, TextField } from "@mui/material";

export default function Formulario() {

   const validacao = yup.object().shape({
      nome: yup.string().min(2).max(50).matches().required(),
      assunto: yup.string().min(2).max(50).required(),
      email: yup.string().email().max(50).required(),
      mensagem: yup.string().min(2).max(200).required()
   }).required();

  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(validacao),
  });

  function enviar(dados){
     console.log(dados);
  }

  return(
    <section className={styles.secao__formulario} id="contato">
      <h2 className={styles.titulo}><FaEnvelope style={{paddingBottom: 6}}/>Contate-me</h2>
      <form name="form" className={styles.form} id="form" onSubmit={handleSubmit(enviar)}>
         <Box>
            <TextField
               name="nome"
               {...register("nome")}
               id="nome"
               label="Nome"
               variant="outlined"
            />
         </Box>
      </form>
    </section>
  )
}