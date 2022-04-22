import styles from "./formulario.module.css"
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import {FaEnvelope} from "react-icons/fa"

export default function Formulario() {
  return(
    <section className={styles.secao__formulario} id="contato">
      <h2 className={styles.titulo}><FaEnvelope style={{paddingBottom: 6}}/>Contate-me</h2>
      <form name="form" className={styles.form} id="form" action="" method="POST">
        <Form inline>
        <FormGroup floating>
            <Input id="nome" name="nome" placeholder="Nome" type="text" />
            <Label for="nome">Nome</Label>
          </FormGroup>
          <FormGroup floating>
            <Input id="assunto" name="assunto" placeholder="Assunto" type="text" />
            <Label for="assunto">Assunto</Label>
          </FormGroup>
          <FormGroup floating>
            <Input id="exampleEmail" name="email" placeholder="Email" type="email" />
            <Label for="exampleEmail">Email</Label>
          </FormGroup>
          <FormGroup floating>
            <Input id="mensagem" name="mensagem" placeholder="Mensagem" type="textarea" rows="50" cols="60" minlength="10" maxlength="300"/>
            <Label for="mensagem">Mensagem</Label>
          </FormGroup>
          <Button>Enviar</Button>
        </Form>
      </form>
    </section>
  )
}