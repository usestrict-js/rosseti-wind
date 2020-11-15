import React from "react";
import { Button, Card, FormGroup, InputGroup, Intent } from "@blueprintjs/core";
import { useHistory } from "react-router-dom";

const Auth = () => {
  const history = useHistory();
  return (
    <Card style={{ maxWidth: "400px", margin: '200px' }}>
      <FormGroup
        helperText="Введите Ваши Фамилию Имя Отчество полностью через пробел"
        label="ФИО"
        labelFor="text-input"
        labelInfo="(кириллицей)"
      >
        <InputGroup large id="fio-input" placeholder="Фамилия Имя Отчество" />
      </FormGroup>

      <FormGroup
        helperText="Введите Ваши Фамилию Имя Отчество полностью через пробел"
        label="№ учебной группы"
        labelFor="text-input"
        labelInfo="(только номер)"
      >
        <InputGroup large id="group-number" placeholder="номер Вашей группы" />
      </FormGroup>

      <Button
        large
        icon="key-enter"
        intent={Intent.SUCCESS}
        onClick={() => {
          history.push("/emulator");
        }}
      >
        Войти
      </Button>
    </Card>
  );
};

export default Auth;
