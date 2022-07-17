import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../Api/index.api";
import useTopPopup from "../../Components/Common/TopPopup/TopPopup.hook";
import FlatButton from "../../Components/UI/Buttons/FlatButton/FlatButton";
import FlatFilePicker from "../../Components/UI/FilePickers/FlatFilePicker/FlatFilePicker";
import PageHeading from "../../Components/UI/Headings/PageHeading/PageHeading";
import FlatInput from "../../Components/UI/Inputs/FlatInput/FlatInput";
import FlatInputRandom from "../../Components/UI/Inputs/FlatInputRandom/FlatInputRandom";
import FlatSelect from "../../Components/UI/Selects/FlatSelect/FlatSelect";
import { VarenikFormType } from "../../shared/routes/api/api.shared";
import styles from "./FormPage.module.css";

const initialForm: VarenikFormType = {
     name: "",
     metro: "",
     height: "",
     age: "",
     weight: "",
     clothingSize: "",
     shoeSize: "",
     hairColor: "",
     race: "",
     boobsSize: "",
     photo: null,
     oneHourPrice: "",
     twoHourPrice: "",
};

const metroOptions = [
     { label: "Авиамоторная", value: "Авиамоторная" },
     { label: "Академическая", value: "Академическая" },
     { label: "Александровский сад", value: "Александровский сад" },
     { label: "Алексеевская", value: "Алексеевская" },
     { label: "Алтуфьево", value: "Алтуфьево" },
     { label: "Аннино", value: "Аннино" },
     { label: "Арбатская", value: "Арбатская" },
     { label: "Автозаводская", value: "Автозаводская" },
     { label: "Алма-Атинская", value: "Алма-Атинская" },
     { label: "Аэропорт", value: "Аэропорт" },
     { label: "Бабушкинская", value: "Бабушкинская" },
     { label: "Багратионовская", value: "Багратионовская" },
     { label: "Баррикадная", value: "Баррикадная" },
     { label: "Бауманская", value: "Бауманская" },
     { label: "Беговая", value: "Беговая" },
     { label: "Белорусская", value: "Белорусская" },
     { label: "Беляево", value: "Беляево" },
     { label: "Бибирево", value: "Бибирево" },
     { label: "Библиотека Ленина", value: "Библиотека Ленина" },
     { label: "Битцевский парк", value: "Битцевский парк" },
     { label: "Борисово", value: "Борисово" },
     { label: "Боровицкая", value: "Боровицкая" },
     { label: "Ботанический сад", value: "Ботанический сад" },
     { label: "Братиславская", value: "Братиславская" },
     { label: "Бульвар Дмитрия Донского", value: "Бульвар Дмитрия Донского" },
     { label: "Бульвар Рокоссовского", value: "Бульвар Рокоссовского" },
     { label: "Бульвар адмирала Ушакова", value: "Бульвар адмирала Ушакова" },
     { label: "Бунинская Аллея", value: "Бунинская Аллея" },
     { label: "ВДНХ", value: "ВДНХ" },
     { label: "Варшавская", value: "Варшавская" },
     { label: "Владыкино", value: "Владыкино" },
     { label: "Волгоградский проспект", value: "Волгоградский проспект" },
     { label: "Волжская", value: "Волжская" },
     { label: "Волоколамская", value: "Волоколамская" },
     { label: "Воробьевы горы", value: "Воробьевы горы" },
     { label: "Водный стадион", value: "Водный стадион" },
     { label: "Войковская", value: "Войковская" },
     { label: "Выставочная", value: "Выставочная" },
     { label: "Выхино", value: "Выхино" },
     { label: "Деловой центр", value: "Деловой центр" },
     { label: "Дмитровская", value: "Дмитровская" },
     { label: "Добрынинская", value: "Добрынинская" },
     { label: "Достоевская", value: "Достоевская" },
     { label: "Дубровка", value: "Дубровка" },
     { label: "Динамо", value: "Динамо" },
     { label: "Домодедовская", value: "Домодедовская" },
     { label: "Жулебино", value: "Жулебино" },
     { label: "Зябликово", value: "Зябликово" },
     { label: "Измайловская", value: "Измайловская" },
     { label: "Калужская", value: "Калужская" },
     { label: "Кантемировская", value: "Кантемировская" },
     { label: "Каховская", value: "Каховская" },
     { label: "Каширская", value: "Каширская" },
     { label: "Киевская", value: "Киевская" },
     { label: "Киевская", value: "Киевская" },
     { label: "Китай-город", value: "Китай-город" },
     { label: "Кожуховская", value: "Кожуховская" },
     { label: "Комсомольская", value: "Комсомольская" },
     { label: "Коньково", value: "Коньково" },
     { label: "Котельники", value: "Котельники" },
     { label: "Коломенская", value: "Коломенская" },
     { label: "Краснопресненская", value: "Краснопресненская" },
     { label: "Красносельская", value: "Красносельская" },
     { label: "Красные ворота", value: "Красные ворота" },
     { label: "Крестьянская застава", value: "Крестьянская застава" },
     { label: "Кропоткинская", value: "Кропоткинская" },
     { label: "Красногвардейская", value: "Красногвардейская" },
     { label: "Крылатское", value: "Крылатское" },
     { label: "Кузнецкий мост", value: "Кузнецкий мост" },
     { label: "Кузьминки", value: "Кузьминки" },
     { label: "Кунцевская", value: "Кунцевская" },
     { label: "Курская", value: "Курская" },
     { label: "Кутузовская", value: "Кутузовская" },
     { label: "Ленинский проспект", value: "Ленинский проспект" },
     { label: "Лермонтовский проспект", value: "Лермонтовский проспект" },
     { label: "Лесопарковая", value: "Лесопарковая" },
     { label: "Лубянка", value: "Лубянка" },
     { label: "Люблино", value: "Люблино" },
     { label: "Марксистская", value: "Марксистская" },
     { label: "Марьина роща", value: "Марьина роща" },
     { label: "Марьино", value: "Марьино" },
     { label: "Медведково", value: "Медведково" },
     { label: "Международная", value: "Международная" },
     { label: "Менделеевская", value: "Менделеевская" },
     { label: "Митино", value: "Митино" },
     { label: "Молодежная", value: "Молодежная" },
     { label: "Мякинино", value: "Мякинино" },
     { label: "Нагатинская", value: "Нагатинская" },
     { label: "Нагорная", value: "Нагорная" },
     { label: "Нахимовский Проспект", value: "Нахимовский Проспект" },
     { label: "Новогиреево", value: "Новогиреево" },
     { label: "Новокосино", value: "Новокосино" },
     { label: "Новокузнецкая", value: "Новокузнецкая" },
     { label: "Новослободская", value: "Новослободская" },
     { label: "Новоясеневская", value: "Новоясеневская" },
     { label: "Новые Черёмушки", value: "Новые Черёмушки" },
     { label: "Октябрьская", value: "Октябрьская" },
     { label: "Октябрьское Поле", value: "Октябрьское Поле" },
     { label: "Орехово", value: "Орехово" },
     { label: "Отрадное", value: "Отрадное" },
     { label: "Охотный ряд", value: "Охотный ряд" },
     { label: "Павелецкая", value: "Павелецкая" },
     { label: "Парк Культуры", value: "Парк Культуры" },
     { label: "Парк Победы", value: "Парк Победы" },
     { label: "Партизанская", value: "Партизанская" },
     { label: "Первомайская", value: "Первомайская" },
     { label: "Перово", value: "Перово" },
     { label: "Петровско-Разумовская", value: "Петровско-Разумовская" },
     { label: "Печатники", value: "Печатники" },
     { label: "Пионерская", value: "Пионерская" },
     { label: "Планерная", value: "Планерная" },
     { label: "Площадь Ильича", value: "Площадь Ильича" },
     { label: "Площадь Революции", value: "Площадь Революции" },
     { label: "Полежаевская", value: "Полежаевская" },
     { label: "Полянка", value: "Полянка" },
     { label: "Пражская", value: "Пражская" },
     { label: "Преображенская площадь", value: "Преображенская площадь" },
     { label: "Пролетарская", value: "Пролетарская" },
     { label: "Проспект Вернадского", value: "Проспект Вернадского" },
     { label: "Проспект Мира", value: "Проспект Мира" },
     { label: "Профсоюзная", value: "Профсоюзная" },
     { label: "Пушкинская", value: "Пушкинская" },
     { label: "Пятницкое шоссе", value: "Пятницкое шоссе" },
     { label: "Речной вокзал", value: "Речной вокзал" },
     { label: "Рижская", value: "Рижская" },
     { label: "Римская", value: "Римская" },
     { label: "Румянцево", value: "Румянцево" },
     { label: "Рязанский проспект", value: "Рязанский проспект" },
     { label: "Савеловская", value: "Савеловская" },
     { label: "Саларьево", value: "Саларьево" },
     { label: "Свиблово", value: "Свиблово" },
     { label: "Севастопольская", value: "Севастопольская" },
     { label: "Семеновская", value: "Семеновская" },
     { label: "Серпуховская", value: "Серпуховская" },
     { label: "Славянский бульвар", value: "Славянский бульвар" },
     { label: "Смоленская", value: "Смоленская" },
     { label: "Сокол", value: "Сокол" },
     { label: "Сокольники", value: "Сокольники" },
     { label: "Спартак", value: "Спартак" },
     { label: "Спортивная", value: "Спортивная" },
     { label: "Сретенский бульвар", value: "Сретенский бульвар" },
     { label: "Строгино", value: "Строгино" },
     { label: "Студенческая", value: "Студенческая" },
     { label: "Сухаревская", value: "Сухаревская" },
     { label: "Сходненская", value: "Сходненская" },
     { label: "Таганская", value: "Таганская" },
     { label: "Текстильщики", value: "Текстильщики" },
     { label: "Теплый стан", value: "Теплый стан" },
     { label: "Тверская", value: "Тверская" },
     { label: "Театральная", value: "Театральная" },
     { label: "Тимирязевская", value: "Тимирязевская" },
     { label: "Третьяковская", value: "Третьяковская" },
     { label: "Тропарёво", value: "Тропарёво" },
     { label: "Трубная", value: "Трубная" },
     { label: "Тульская", value: "Тульская" },
     { label: "Тургеневская", value: "Тургеневская" },
     { label: "Тушинская", value: "Тушинская" },
     { label: "Улица 1905 года", value: "Улица 1905 года" },
     { label: "Улица Горчакова", value: "Улица Горчакова" },
     { label: "Улица Скобелевская", value: "Улица Скобелевская" },
     { label: "Улица Старокачаловская", value: "Улица Старокачаловская" },
     { label: "Улица академика Янгеля", value: "Улица академика Янгеля" },
     { label: "Университет", value: "Университет" },
     { label: "Филевский парк", value: "Филевский парк" },
     { label: "Фили", value: "Фили" },
     { label: "Царицыно", value: "Царицыно" },
     { label: "Фрунзенская", value: "Фрунзенская" },
     { label: "Цветной бульвар", value: "Цветной бульвар" },
     { label: "Черкизовская", value: "Черкизовская" },
     { label: "Чертановская", value: "Чертановская" },
     { label: "Чеховская", value: "Чеховская" },
     { label: "Чистые пруды", value: "Чистые пруды" },
     { label: "Чкаловская", value: "Чкаловская" },
     { label: "Шаболовская", value: "Шаболовская" },
     { label: "Шипиловская", value: "Шипиловская" },
     { label: "Шоссе Энтузиастов", value: "Шоссе Энтузиастов" },
     { label: "Щелковская", value: "Щелковская" },
     { label: "Щукинская", value: "Щукинская" },
     { label: "Электрозаводская", value: "Электрозаводская" },
     { label: "Юго-Западная", value: "Юго-Западная" },
     { label: "Южная", value: "Южная" },
     { label: "Ясенево", value: "Ясенево" },
];
const raceOptions = [
     { label: "Русские", value: "Русские" },
     { label: "Татары", value: "Татары" },
     { label: "Украинцы", value: "Украинцы" },
     { label: "Башкиры", value: "Башкиры" },
     { label: "Чуваши", value: "Чуваши" },
     { label: "Чеченцы", value: "Чеченцы" },
     { label: "Армяне", value: "Армяне" },
     { label: "Аварцы", value: "Аварцы" },
     { label: "Мордва", value: "Мордва" },
     { label: "Казахи", value: "Казахи" },
     { label: "Азербайджанцы", value: "Азербайджанцы" },
     { label: "Даргинцы", value: "Даргинцы" },
     { label: "Удмурты", value: "Удмурты" },
     { label: "Марийцы", value: "Марийцы" },
     { label: "Осетины", value: "Осетины" },
     { label: "Белорусы", value: "Белорусы" },
     { label: "Кабардинцы", value: "Кабардинцы" },
     { label: "Кумыки", value: "Кумыки" },
     { label: "Якуты", value: "Якуты" },
     { label: "Лезгины", value: "Лезгины" },
     { label: "Буряты", value: "Буряты" },
     { label: "Ингуши", value: "Ингуши" },
     { label: "Немцы", value: "Немцы" },
     { label: "Узбеки", value: "Узбеки" },
     { label: "Тувинцы", value: "Тувинцы" },
     { label: "Коми", value: "Коми" },
     { label: "Карачаевцы", value: "Карачаевцы" },
     { label: "Цыгане", value: "Цыгане" },
     { label: "Таджики", value: "Таджики" },
     { label: "Калмыки", value: "Калмыки" },
     { label: "Лакцы", value: "Лакцы" },
     { label: "Грузины", value: "Грузины" },
     { label: "Евреи", value: "Евреи" },
     { label: "Молдаване", value: "Молдаване" },
     { label: "Корейцы", value: "Корейцы" },
     { label: "Табасараны", value: "Табасараны" },
     { label: "Адыгейцы", value: "Адыгейцы" },
     { label: "Балкарцы", value: "Балкарцы" },
     { label: "Турки", value: "Турки" },
     { label: "Ногайцы", value: "Ногайцы" },
     { label: "Киргизы", value: "Киргизы" },
     { label: "Коми-пермяки", value: "Коми-пермяки" },
     { label: "Греки", value: "Греки" },
     { label: "Алтайцы", value: "Алтайцы" },
     { label: "Черкесы", value: "Черкесы" },
     { label: "Хакасы", value: "Хакасы" },
     { label: "Казаки", value: "Казаки" },
     { label: "Карелы", value: "Карелы" },
     { label: "Мордва-рзяэ", value: "Мордва-рзяэ" },
     { label: "Поляки", value: "Поляки" },
     { label: "Ненцы", value: "Ненцы" },
     { label: "Абазины", value: "Абазины" },
     { label: "Езиды", value: "Езиды" },
     { label: "Эвенки", value: "Эвенки" },
     { label: "Туркмены", value: "Туркмены" },
     { label: "Рутульцы", value: "Рутульцы" },
     { label: "Кряшены", value: "Кряшены" },
     { label: "Агулы", value: "Агулы" },
     { label: "Литовцы", value: "Литовцы" },
     { label: "Ханты", value: "Ханты" },
     { label: "Китайцы", value: "Китайцы" },
     { label: "Болгары", value: "Болгары" },
     { label: "Горные", value: "Горные" },
     { label: "марийцы", value: "марийцы" },
     { label: "Курды", value: "Курды" },
     { label: "Эвены", value: "Эвены" },
     { label: "Финны", value: "Финны" },
     { label: "Латыши", value: "Латыши" },
     { label: "Эстонцы", value: "Эстонцы" },
     { label: "Чукчи", value: "Чукчи" },
     { label: "Вьетнамцы", value: "Вьетнамцы" },
     { label: "Гагаузы", value: "Гагаузы" },
     { label: "Шорцы", value: "Шорцы" },
     { label: "Цахуры", value: "Цахуры" },
     { label: "Манси", value: "Манси" },
     { label: "Нанайцы", value: "Нанайцы" },
     { label: "Андийцы", value: "Андийцы" },
     { label: "Дидойцы", value: "Дидойцы" },
     { label: "Абхазы", value: "Абхазы" },
     { label: "Ассирийцы", value: "Ассирийцы" },
     { label: "Арабы", value: "Арабы" },
     { label: "Нагайбаки", value: "Нагайбаки" },
     { label: "Коряки", value: "Коряки" },
     { label: "Ахвахцы", value: "Ахвахцы" },
     { label: "Долганы", value: "Долганы" },
     { label: "Сибирские", value: "Сибирские" },
     { label: "татары", value: "татары" },
     { label: "Коми-ижемцы", value: "Коми-ижемцы" },
     { label: "Бежтинцы", value: "Бежтинцы" },
     { label: "Вепсы", value: "Вепсы" },
     { label: "Пуштуны (афганцы)", value: "Пуштуны (афганцы)" },
     { label: "Турки-месхетинцы", value: "Турки-месхетинцы" },
     { label: "Каратинцы", value: "Каратинцы" },
     { label: "Мордва-мокша", value: "Мордва-мокша" },
     { label: "Нивхи", value: "Нивхи" },
     { label: "Удины", value: "Удины" },
     { label: "Индийцы (хинди)", value: "Индийцы (хинди)" },
     { label: "Шапсуги", value: "Шапсуги" },
     { label: "Теленгиты", value: "Теленгиты" },
     { label: "Персы", value: "Персы" },
     { label: "Уйгуры", value: "Уйгуры" },
     { label: "Селькупы", value: "Селькупы" },
];
const hairColorOptions = [
     { label: "Блонд", value: "Блонд" },
     { label: "Шатен", value: "Шатен" },
     { label: "Рыжий", value: "Рыжий" },
     { label: "Русый", value: "Русый" },
     { label: "Брюнет", value: "Брюнет" },
     { label: "Пепельный", value: "Пепельный" },
     { label: "красный", value: "красный" },
     { label: "розовый", value: "розовый" },
];

const FormPage = () => {
     const { showTopPopup } = useTopPopup();
     const { sendVarenik, sendVarenikImage } = api().useSendVarenikApi();
     const navigate = useNavigate();

     const [form, setForm] = useState<VarenikFormType>(initialForm);

     const formOnSubmitHandler = async (event: React.FormEvent) => {
          event.preventDefault();
     };

     const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          setForm({ ...form, [event?.target.name]: event?.target.value });
     };

     const selectOnChangeHandler = (name: string) => {
          return (event: any) => {
               setForm({ ...form, [name]: event.value });
          };
     };

     const fileInputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          if (event.target.files) {
               setForm({ ...form, [event.target.name]: event.target.files[0] });
          }
     };

     const submitButtonOnClickHandler = async () => {
          const formFields = Object.keys(form) as (keyof typeof form)[];
          for (let i = 0; i < formFields.length; i++) {
               if (form[formFields[i]] === null) {
                    return showTopPopup({ message: { text: "Заполните все поля" } });
               } else if (form[formFields[i]] === "") {
                    return showTopPopup({ message: { text: "Заполните все поля" } });
               }
          }

          const data = await sendVarenik(form);
          if (data.succes) {
               const formData = new FormData();
               if (!form.photo) {
                    return showTopPopup({ message: { text: "Не удалось отправить фото", type: "succes" } });
               }
               formData.append("photo", form.photo);
               formData.append("idvarenik", String(data.idvarenik));

               const dataImage = await sendVarenikImage(formData);

               if (dataImage.succes) {
                    showTopPopup({ message: { text: "Девушка успешно отправлена в базу", type: "succes" } });
                    navigate("/list");
               }
          }
     };

     return (
          <div className={styles.FormPage}>
               <PageHeading text="Добавить девушку в базу" />
               <FlatButton className={styles.toList} mode="link" text="Перейти к списку девушек" href="/list" />
               <form className={styles.form} onSubmit={formOnSubmitHandler}>
                    <FlatInput
                         label="Имя"
                         placeholder="Имя"
                         type={"text"}
                         name={"name"}
                         className={styles.input}
                         value={form.name}
                         onChange={inputOnChangeHandler}
                    />
                    <FlatInputRandom
                         label="Рост"
                         placeholder="Рост"
                         type={"number"}
                         name={"height"}
                         className={styles.input}
                         value={form.height}
                         onChange={inputOnChangeHandler}
                         form={form}
                         setForm={setForm}
                         ranges={[{ min: "155", max: "180" }]}
                    />

                    <FlatInputRandom
                         label="Возраст"
                         placeholder="Возраст"
                         type={"number"}
                         name={"age"}
                         className={styles.input}
                         value={form.age}
                         onChange={inputOnChangeHandler}
                         form={form}
                         setForm={setForm}
                         ranges={[{ min: "18", max: "30" }]}
                    />
                    <FlatInputRandom
                         label="Вес"
                         placeholder="Вес"
                         type={"number"}
                         name={"weight"}
                         className={styles.input}
                         value={form.weight}
                         onChange={inputOnChangeHandler}
                         form={form}
                         setForm={setForm}
                         ranges={[{ min: "45", max: "60" }]}
                    />
                    <FlatInputRandom
                         label="Размер одежды"
                         placeholder="Размер одежды"
                         type={"number"}
                         name={"clothingSize"}
                         className={styles.input}
                         value={form.clothingSize}
                         onChange={inputOnChangeHandler}
                         form={form}
                         setForm={setForm}
                         ranges={[{ min: "38", max: "45" }]}
                    />
                    <FlatInputRandom
                         label="Размер обуви"
                         placeholder="Размер обуви"
                         type={"number"}
                         name={"shoeSize"}
                         className={styles.input}
                         value={form.shoeSize}
                         onChange={inputOnChangeHandler}
                         form={form}
                         setForm={setForm}
                         ranges={[{ min: "36", max: "40" }]}
                    />
                    <FlatInputRandom
                         label="Размер груди"
                         placeholder="Размер груди"
                         type={"number"}
                         name={"boobsSize"}
                         className={styles.input}
                         value={form.boobsSize}
                         onChange={inputOnChangeHandler}
                         form={form}
                         setForm={setForm}
                         ranges={[{ min: "1", max: "4" }]}
                    />
                    <FlatInputRandom
                         label="Цена за час"
                         placeholder="Цена за час"
                         type={"number"}
                         name={"oneHourPrice"}
                         className={styles.input}
                         value={form.oneHourPrice}
                         onChange={inputOnChangeHandler}
                         form={form}
                         setForm={setForm}
                         ranges={[
                              { min: "2000", max: "5000" },
                              { min: "5000", max: "10000" },
                         ]}
                         pretty={true}
                    />
                    <FlatInputRandom
                         label="цена за два часа"
                         placeholder="цена за два часа"
                         type={"number"}
                         name={"twoHourPrice"}
                         className={styles.input}
                         value={form.twoHourPrice}
                         onChange={inputOnChangeHandler}
                         form={form}
                         setForm={setForm}
                         ranges={[
                              { min: "2000", max: "5000" },
                              { min: "5000", max: "10000" },
                         ]}
                         pretty={true}
                    />
                    <FlatSelect
                         onChange={selectOnChangeHandler("metro")}
                         name={"metro"}
                         label={"Метро"}
                         isSearchable={true}
                         options={metroOptions}
                         value={{ label: form.metro, value: form.metro }}
                    />
                    <FlatSelect
                         name="race"
                         label="Раса"
                         onChange={selectOnChangeHandler("race")}
                         options={raceOptions}
                         value={{ label: form.race, value: form.race }}
                         isSearchable={true}
                    />
                    <FlatSelect
                         name="hairColor"
                         label="Цвет Волос"
                         options={hairColorOptions}
                         onChange={selectOnChangeHandler("hairColor")}
                         value={{ label: form.hairColor, value: form.hairColor }}
                    />
                    <FlatFilePicker
                         name={"photo"}
                         isFileInputClear={!!!form.photo}
                         onChange={fileInputOnChangeHandler}
                         text={"Выберите фото"}
                         accept={".jpg, .jpeg, .png"}
                    />
                    <FlatButton onClick={submitButtonOnClickHandler} text={"Отправить"} />
               </form>
          </div>
     );
};

export default FormPage;
