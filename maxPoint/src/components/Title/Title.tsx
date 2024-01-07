/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
import style from "./Title.module.css";
import { useForm } from "react-hook-form";
import { useAppActions } from "../../redux/Actions/Actions";
import { useAppSelector } from "../../redux/Reducer";

export const Title = () => {
  const { changePresentationName } = useAppActions();
  const name = useAppSelector((state) => state.name);
  const {
    //создаём объект используя useForm
    handleSubmit, //создаём передачу данных
    register, //позволяет регистрировать различные поля (ну знаения крч)
    formState: { errors }, //объект ошибки
  } = useForm({ mode: "onChange" }); //валидация сразу при форме

  return (
    <>
      <form
        onChange={handleSubmit((e) => {
          changePresentationName(e.name);
        })}
      >
        <input
          type="text"
          className={errors.name && style.header_input_name} //если поле содержит ошибку
          value={name}
          {...register("name", {
            required: true, //поле является обязательным для ввода
            minLength: 0, //мин. символов
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
