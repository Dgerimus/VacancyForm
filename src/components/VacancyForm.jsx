import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./VacancyForm.css";
import Calendar from "./icons/Calendar.png";
import Swich from "./icons/Swich.png";
import SwichOpen from "./icons/SwichOpen.png";
import { NumericFormat } from "react-number-format";

// Валидация формы
const validationSchema = Yup.object({
  title: Yup.string().required("Укажите наименование"),
  department: Yup.string().required("Укажите отдел"),
  operationDate: Yup.date().required("Выберите дату открытия"),

  gender: Yup.string().required("Выберите пол"),
  salaryFrom: Yup.string().required("Укажите уровень зарплаты"),
  region: Yup.string().required("Выберите регион"),
  address: Yup.string().required(
    "Введите полный адрес. Например, Походный проезд, 3с1"
  ),
  experience: Yup.string().required("Укажите опыт работы"),
  workSchedule: Yup.string().required("Укажите график работы"),
  employmentType: Yup.string().required("Выберите тип занятости"),
  netSalary: Yup.string().required("Укажите форму зарплаты "),
});

const VacancyForm = ({ onSubmit, vacancy, onCancel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowIcon, setArrowIcon] = useState(Swich); // Изначально стрелка закрыта
  const isEdit = Boolean(vacancy);
  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
    setArrowIcon((prevState) => (prevState === Swich ? SwichOpen : Swich)); // Меняем иконку стрелки
  };

  const handleSelectChange = (e, setFieldValue) => {
    setFieldValue(e.target.name, e.target.value);
    setArrowIcon(Swich);
    setIsOpen(false);
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setArrowIcon(Swich); // Возвращаем стрелку в исходное положение
    }
    setIsOpen(false); // Закрываем список
  };
  const handleCancelClick = () => {
    onCancel();
  };

  return (
    <div className="vacancy-form">
      <h2 className="zag1">
        {isEdit ? "Форма редактирования " : "Форма размещения "} <u>заявки</u>
      </h2>

      <Formik
        initialValues={{
          title: vacancy?.title || "",
          department: vacancy?.department || "",
          operationDate: vacancy?.operationDate || "",
          plannedDate: vacancy?.plannedDate || "",
          gender: vacancy?.gender || "",
          region: vacancy?.region || "",
          address: vacancy?.address || "",
          salaryFrom: vacancy?.salaryFrom || "",
          salaryTo: vacancy?.salaryTo || "",
          experience: vacancy?.experience || "",
          metro: vacancy?.metro || "",
          workSchedule: vacancy?.workSchedule || "",
          employmentType: vacancy?.employmentType || "",
          netSalary: vacancy?.netSalary || "",
        }}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const newVacancy = {
            ...values,
            id: isEdit ? vacancy.id : new Date().toISOString(),
          };

          onSubmit(newVacancy);
          resetForm();
        }}
      >
        {({ setFieldValue, resetForm, errors, touched }) => (
          <Form>
            <div className="vacancy-form-body">
              <div className="company-row">
                <div className="company-group">
                  <label htmlFor="title">
                    Наименование вакансии<span className="req">*</span>
                  </label>
                  <Field
                    type="text"
                    id="title"
                    name="title"
                    className={`custom-input ${
                      errors.title && touched.title
                        ? "error"
                        : touched.title
                        ? "success"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="company-group">
                  <label htmlFor="department">
                    Отдел<span className="req">*</span>
                  </label>
                  <Field
                    type="text"
                    id="department"
                    name="department"
                    className={`custom-input ${
                      errors.department && touched.department
                        ? "error"
                        : touched.department
                        ? "success"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="department"
                    component="div"
                    className="error"
                  />
                </div>
              </div>

              <div className="date-row">
                <div>
                  <label htmlFor="operationDate">
                    Дата открытия<span className="req">*</span>
                  </label>
                  <div className="date-input-wrapper">
                    <Field
                      type="date"
                      id="operationDate"
                      name="operationDate"
                      className={`custom-input ${
                        errors.operationDate && touched.operationDate
                          ? "error"
                          : touched.operationDate
                          ? "success"
                          : ""
                      }`}
                    />
                    <img
                      src={Calendar}
                      alt="Календарик"
                      className="calendar-icon"
                      onClick={() =>
                        document.getElementById("operationDate").showPicker()
                      }
                    />
                  </div>
                  <ErrorMessage
                    name="operationDate"
                    component="div"
                    className="error"
                  />
                </div>

                <div>
                  <label htmlFor="plannedDate">
                    Плановая дата закрытия<span className="req">*</span>
                  </label>
                  <div className="date-input-wrapper">
                    <Field
                      type="date"
                      id="plannedDate"
                      name="plannedDate"
                      className={`custom-date-input custom-input ${
                        errors.plannedDate && touched.plannedDate ? "error" : ""
                      }`}
                    />
                    <img
                      src={Calendar}
                      alt="Календарик"
                      className="calendar-icon"
                      onClick={() =>
                        document.getElementById("plannedDate").showPicker()
                      }
                    />
                  </div>
                  <ErrorMessage
                    name="plannedDate"
                    component="div"
                    className="error"
                  />
                </div>
              </div>

              <div className="pol-part">
                <label>
                  Пол<span className="req">*</span>
                </label>
                <div className="radio-group-sex">
                  <Field type="radio" id="male" name="gender" value="Мужской" />
                  <label htmlFor="male">Мужской</label>

                  <Field
                    type="radio"
                    id="female"
                    name="gender"
                    value="Женский"
                  />
                  <label htmlFor="female">Женский</label>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="error"
                  />
                </div>
              </div>

              <div className="zarp-part">
                <label>
                  Зарплата<span className="req">*</span>
                </label>
                <div className="salary-options">
                  <Field
                    type="radio"
                    id="salaryNetHands"
                    name="netSalary"
                    value="На руки"
                  />
                  <label htmlFor="salaryNetHands">На руки</label>

                  <Field
                    type="radio"
                    id="salaryPreTax"
                    name="netSalary"
                    value="До вычета налогов"
                  />
                  <label htmlFor="salaryPreTax">До вычета налогов</label>
                </div>

                <ErrorMessage
                  name="netSalary"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <div className="salary-range">
                  <div className="salary-renge-one">
                    <div className="otdo">От</div>
                    <Field
                      name="salaryFrom"
                      render={({ field, form }) => (
                        <NumericFormat
                          {...field}
                          placeholder=""
                          thousandSeparator={true}
                          allowNegative={false}
                          isNumericString
                          customInput="input"
                          className={`custom-date-input custom-input ${
                            form.errors.salaryFrom && form.touched.salaryFrom
                              ? "error"
                              : touched.salaryFrom
                              ? "success"
                              : ""
                          }`}
                        />
                      )}
                    />
                  </div>
                  <div className="salary-renge-one">
                    <div className="otdo">До</div>
                    <Field
                      name="salaryTo"
                      render={({ field, form }) => (
                        <NumericFormat
                          {...field}
                          placeholder=""
                          thousandSeparator={true}
                          allowNegative={false}
                          isNumericString
                          customInput="input"
                          className="custom-date-input custom-input"
                        />
                      )}
                    />
                  </div>
                  <div>
                    <ErrorMessage
                      name="salaryFrom"
                      component="div"
                      className="error"
                    />
                  </div>
                </div>
              </div>

              <div className="address-inputs-row">
                <div className="address-input-group">
                  <label htmlFor="region">
                    Регион<span className="req">*</span>
                  </label>
                  <Field
                    type="text"
                    id="region"
                    name="region"
                    className={`custom-input ${
                      errors.region && touched.region
                        ? "error"
                        : touched.region
                        ? "success"
                        : ""
                    }`}
                  />

                  <ErrorMessage
                    name="region"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="address-input-group">
                  <label htmlFor="address">
                    Адрес<span className="req">*</span>
                  </label>
                  <Field
                    type="text"
                    id="address"
                    name="address"
                    className={`long-input custom-input ${
                      errors.address && touched.address
                        ? "error"
                        : touched.address
                        ? "success"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="address-input-group">
                  <label htmlFor="metro">Станция метро, МЦД</label>
                  <Field type="text" id="metro" name="metro" />
                  <ErrorMessage
                    name="metro"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
              <div className="exp-inputs-row">
                <div className="experience-group">
                  <label htmlFor="experience">
                    Опыт работы<span className="req">*</span>
                  </label>
                  <Field
                    type="text"
                    id="experience"
                    name="experience"
                    className={`custom-input ${
                      errors.experience && touched.experience
                        ? "error"
                        : touched.experience
                        ? "success"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="experience"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="schedule-group">
                  <label htmlFor="workSchedule">
                    График работы<span className="req">*</span>
                  </label>
                  <div className="select-wrapper">
                    <Field
                      as="select"
                      id="workSchedule"
                      name="workSchedule"
                      className={`custom-select ${
                        errors.workSchedule && touched.workSchedule
                          ? "error"
                          : ""
                      }`}
                      onFocus={handleToggle}
                      onBlur={handleBlur}
                      onChange={(e) => handleSelectChange(e, setFieldValue)}
                    >
                      <option value="" className="placeHS">
                        Выберите
                      </option>
                      <option value="fullTime">Полный день</option>
                      <option value="partTime">Сменный 5/2</option>
                      <option value="remote">Сменный 2/2</option>
                    </Field>

                    <img
                      src={arrowIcon}
                      alt="Стрелка"
                      className="select-icon"
                    />
                  </div>

                  <ErrorMessage
                    name="workSchedule"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="employment-type-options">
                  <label>
                    Тип занятости<span className="req">*</span>
                  </label>
                  <div className="type-radio-group">
                    <Field
                      type="radio"
                      id="fullTime"
                      name="employmentType"
                      value="Полная занятость"
                    />
                    <label htmlFor="fullTime">Полная занятость</label>

                    <Field
                      type="radio"
                      id="partTime"
                      name="employmentType"
                      value="Частичная занятость"
                    />
                    <label htmlFor="partTime">Частичная занятость</label>

                    <Field
                      type="radio"
                      id="project"
                      name="employmentType"
                      value="Проектная работа"
                    />
                    <label htmlFor="project">Стажировка</label>

                    <ErrorMessage
                      name="employmentType"
                      component="div"
                      className="error"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-actions">
              <button type="submit">
                {isEdit ? "Сохранить" : "Отправить"}
              </button>

              <button
                type="button"
                onClick={isEdit ? handleCancelClick : resetForm}
              >
                {isEdit ? "Отмена" : "Сбросить"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default VacancyForm;
