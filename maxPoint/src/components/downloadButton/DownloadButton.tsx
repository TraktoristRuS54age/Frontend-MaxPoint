/* eslint-disable sort-imports */
import style from "../ToolBar/ToolBar.module.css";
import { useSelector } from "react-redux";
import { allData } from "../../redux/slide/selectors";

const DownloadButton = () => {
  const data = useSelector(allData);
  const createFile = () => {
    const file = new Blob([JSON.stringify(data)], {
      type: "application/json",
    }); // создаём файл на стороне пользователя
    return file; //возвращаем созданный файл
  };

  const file = createFile(); // переменная с файлом, который возвращает функция createFile()[которая выше]

  const downloadFile = () => {
    const url = URL.createObjectURL(file); // создаём ссылку на файл
    const link = document.createElement("a"); //создаём ссылку для скачивания файла, пользователь её не видит.
    //она существует только в области выполнения скрипта
    link.href = url; //записываем в аттрибут элемента ссылки ссылку на файл
    link.download = "file.json"; //задаём название файлу
    link.click(); //совершаем клик по ссылки внутри кода, чтобы сработало скачивание файла
  };

  return (
    <>
      <button
        onClick={downloadFile}
        className={style.header_upload_button}
        type="button"
      >
        Download
      </button>
    </>
  );
};

export default DownloadButton;
