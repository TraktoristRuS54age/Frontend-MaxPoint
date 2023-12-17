/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
import { useContext } from "react";
import style from "./Title.module.css";
import { useForm } from "react-hook-form";
import { PresentationContext } from "../../context/context";


export const Title = () => {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const {
    //создаём объект используя useForm
    handleSubmit, //создаём передачу данных
    register, //позволяет регистрировать различные поля (ну знаения крч)
    formState: { errors }, //объект ошибки
  } = useForm({ mode: "onChange" }); //валидация сразу при форме
  const onChange = (e) => {
    const newPresentation = {...presentation}
    newPresentation.name = e.name;
    setPresentation(newPresentation);
  };

  return (
    <>
      <form onChange={handleSubmit(onChange)}>
        <input
          type="text"
          className={errors.name && style.header_input_name} //если поле содержит ошибку
          value={presentation.name}
          {...register("name", {
            required: true, //поле является обязательным для ввода
            minLength: 2, //мин. символов
            maxLength: 15, //макс. символов
            pattern: /^[a-zA-Zа-яА-Я]*$/,
          })} // какие символы будем вводить
        />
        {errors.name?.type == "required" && <span>Введите имя</span>}
        {errors.name?.type == "minLength" && <span>Мин 2 буквы</span>}
        {errors.name?.type == "maxLength" && <span>Макс 15 букв</span>}
        {errors.name?.type == "pattern" && <span>Только буквы</span>}
      </form>
    </>
  );
};

export default Title;
