import styles from "./formulario.module.css"
import React from 'react';
import {FaEnvelope} from "react-icons/fa"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, Button, TextField } from "@mui/material";
import mensagensErro from "../../utilities/errors.json";
import SendIcon from '@mui/icons-material/Send';
import regExNome from "../../utilities/regexValidation.js"
import axios from "axios";

export default function Formulario() {

   const validacao = yup.object().shape({
      nome: yup.string().min(2).max(50).matches(regExNome).required(),
      assunto: yup.string().min(2).max(50).required(),
      email: yup.string().email().max(50).required(),
      mensagem: yup.string().min(2).max(200).required()
   }).required();

  const { register, handleSubmit, reset, formState:{errors} } = useForm({
    resolver: yupResolver(validacao),
  });

  function enviar(data){
		axios.post("https://pacific-atoll-83565.herokuapp.com/", data)
		.then(()=>{
			alert("E-mail enviado com sucesso! Obrigado pelo seu contato.");
         reset();
		})
		.catch((err)=>{
				if(err.code === "ERR_NETWORK"){
					alert(`Sem acesso ao banco!`)
					return
				}
				alert("E-mail enviado com sucesso! Obrigado pelo seu contato!!!");
		})
  }

  return(
    <section className={styles.secao__formulario} id="contato">
      <h2 className={styles.titulo}><FaEnvelope style={{paddingBottom: 6}}/>Contate-me</h2>
      <form name="form" className={styles.form} id="form" onSubmit={handleSubmit(enviar)}>
         <Box className={styles.box}>
            <TextField
               name="nome"
               type="text"
               error={errors?.nome ? "Erro" : ""}
               helperText={errors?.nome ? mensagensErro["nome"][errors.nome.type] : ""}
               {...register("nome")}
               id="nome"
               label="Nome"
               variant="outlined"
               className={styles.campo}
            />
         </Box>
         <Box className={styles.box}>
            <TextField
               name="assunto"
               type="text"
               error={errors?.assunto ? "Erro" : ""}
               helperText={errors?.assunto ? mensagensErro["assunto"][errors.assunto.type] : ""}
               {...register("assunto")}
               id="assunto"
               label="Assunto"
               variant="outlined"
               className={styles.campo}
            />
         </Box>
         <Box className={styles.box}>
            <TextField
               name="email"
               type="email"
               error={errors?.email ? "Erro" : ""}
               helperText={errors?.email ? mensagensErro["email"][errors.email.type] : ""}
               {...register("email")}
               id="email"
               label="E-mail"
               variant="outlined"
               className={styles.campo}
            />
         </Box>
         <Box className={styles.box}>
            <TextField
               name="mensagem"
               type="text"
               error={errors?.mensagem ? "Erro" : ""}
               helperText={errors?.mensagem ? mensagensErro["mensagem"][errors.mensagem.type] : ""}
               {...register("mensagem")}
               id="mensagem"
               label="Mensagem"
               variant="outlined"
               className={styles.campo}
            />
         </Box>
         <Button color="success" type="submit" variant="contained" endIcon={<SendIcon />}>
            Send
         </Button>
      </form>
    </section>
  )
}