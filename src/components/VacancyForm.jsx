import React, { useState } from "react";
import "./VacancyForm.css";
import Radiobutton from "./icons/Radiobutton.png";
import RadiobuttonHover from "./icons/RadiobuttonHover.png";
import Radiobutton0 from "./icons/Radiobutton0.png";

const VacancyForm = ({ onSubmit, initialValues }) => {
  const [formData, setFormData] = useState(
    initialValues || {
      title: "",
      department: "",
      operationDate: "",
      plannedDate: "",
      gender: "",

      address: "",
      salaryFrom: "",
      salaryTo: "",
      salary: "",
      experience: "",
      metro: "",
      workSchedule: "",
      employmentType: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleReset = () => {
    setFormData({
      title: "",
      department: "",
      operationDate: "",
      plannedDate: "",
      gender: "",
      address: "",
      salary: "",
      experience: "",
      metro: "",
      workSchedule: "",
      employmentType: "",
    });
  };

  return (
    <div className="vacancy-form">
      <h2>Добавить вакансию</h2>

      <div className="vacancy-form-body">
        <form onSubmit={handleSubmit}>
          <div className="company-row">
            <div>
              <label htmlFor="title">
                Наименование вакансии<span className="req">*</span>
              </label>
              <div>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="department">
                Отдел<span className="req">*</span>
              </label>
              <div>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="date-row">
            <div>
              <label htmlFor="operationDate">
                Дата открытия<span className="req">*</span>
              </label>
              <div>
                <input
                  type="date"
                  id="operationDate"
                  name="operationDate"
                  value={formData.operationDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="plannedDate">
                Плановая дата закрытия<span className="req">*</span>
              </label>
              <div>
                <input
                  type="date"
                  id="plannedDate"
                  name="plannedDate"
                  value={formData.plannedDate}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div>
            <label>
              Пол<span className="req">*</span>
            </label>
            <div>
              <div className="radio-group-sex">
                <div>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Мужской"
                      checked={formData.gender === "Мужской"}
                      onChange={handleChange}
                      required
                      className="custom-radio"
                    />
                    Мужской
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Женский"
                      checked={formData.gender === "Женский"}
                      onChange={handleChange}
                      required
                      className="custom-radio"
                    />
                    Женский
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label>
              Зарплата<span className="req">*</span>
            </label>
            <div className="salary-options">
              <label>
                <input
                  type="radio"
                  name="netSalary"
                  value="На руки"
                  checked={formData.netSalary === "На руки"}
                  onChange={handleChange}
                />
                На руки
              </label>
              <label>
                <input
                  type="radio"
                  name="netSalary"
                  value="До вычета налогов"
                  checked={formData.netSalary === "До вычета налогов"}
                  onChange={handleChange}
                />
                До вычета налогов
              </label>
            </div>
            <div className="salary-range">
              <input
                type="number"
                name="salaryFrom"
                placeholder="от"
                value={formData.salaryFrom}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="salaryTo"
                placeholder="до"
                value={formData.salaryTo}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="address-inputs-row">
            <div className="address-input-group">
              <label htmlFor="region">
                Регион<span className="req">*</span>
              </label>
              <input
                type="text"
                id="region"
                name="region"
                value={formData.region}
                onChange={handleChange}
                required
              />
            </div>

            <div className="address-input-group">
              <label htmlFor="adres">
                Адрес<span className="req">*</span>
              </label>
              <input
                type="text"
                id="adres"
                name="adres"
                value={formData.adres}
                onChange={handleChange}
                className="long-input"
                required
              />
            </div>

            <div className="address-input-group">
              <label htmlFor="metro">Станция метро, МЦД</label>
              <input
                type="text"
                id="metro"
                name="metro"
                value={formData.metro}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="exp-input-row">
            <div className="exp-input-group">
              <label htmlFor="experience">
                Опыт<span className="req">*</span>
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              />
            </div>
            <div className="exp-input-group">
              <label htmlFor="workSchedule">
                График работы<span className="req">*</span>
              </label>
              <input
                type="text"
                id="workSchedule"
                name="workSchedule"
                value={formData.workSchedule}
                onChange={handleChange}
                required
              />
            </div>
            <div className="exp-input-group">
              <label>
                Тип занятости<span className="req">*</span>
              </label>
              <div className="type-radio-group">
                <label>
                  <input
                    type="radio"
                    name="employmentType"
                    value="Полная занятость"
                    checked={formData.employmentType === "Полная занятость"}
                    onChange={handleChange}
                    required
                  />
                  Полная занятость
                </label>
                <label>
                  <input
                    type="radio"
                    name="employmentType"
                    value="Частичная занятость"
                    checked={formData.employmentType === "Частичная занятость"}
                    onChange={handleChange}
                    required
                  />
                  Частичная занятость
                </label>
                <label>
                  <input
                    type="radio"
                    name="employmentType"
                    value="Стажировка"
                    checked={formData.employmentType === "Стажировка"}
                    onChange={handleChange}
                    required
                  />
                  Стажировка
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="form-actions">
        <button type="submit" onClick={handleSubmit}>
          Отправить
        </button>
        <button type="button" onClick={handleReset}>
          Сбросить
        </button>
      </div>
    </div>
  );
};

export default VacancyForm;
