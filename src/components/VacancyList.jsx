import React from "react";
import "./VacancyList.css";
import Edit from "./icons/Edit.png";
import Cross from "./icons/Cross.png";
import Subtract from "./icons/Subtract.png";
import Vector from "./icons/Vector.png";

const VacancyList = ({ vacancies, onEdit, onDelete }) => {
  return (
    <div className="fon">
      <h2 className="zag">Заявки на размещение вакансий</h2>
      <div className="vacancy-list">
        {vacancies.length === 0 ? (
          <p className="empty-message">Нет вакансий</p>
        ) : (
          vacancies.map((vacancy) => (
            <div key={vacancy.id} className="vacancy-card">
              <span className="vacancy-head">
                <span className="vacancy-date">
                  Дата публикации: {vacancy.operationDate}
                </span>
                <span>
                  <button
                    className="edit-button"
                    onClick={() => onEdit({ ...vacancy, isEditing: true })} // Добавляем isEditing
                  >
                    <img src={Edit} alt="Edit" className="edit-button-icon" />
                  </button>
                  <button
                    className="edit-button"
                    onClick={() => onDelete(vacancy.id)}
                  >
                    <img src={Cross} alt="Cross" className="edit-button-icon" />
                  </button>
                </span>
              </span>
              <div>
                <h3 className="vacancy-title">{vacancy.title}</h3>
              </div>
              <div className="vacancy-footer">
                <p className="vacancy-address">
                  <img
                    src={Subtract}
                    alt="Subtract"
                    className="subtract-icon"
                  />{" "}
                  {vacancy.region ? `${vacancy.region}, ` : ""}
                  {vacancy.address}
                </p>
                <span className="vacancy-footer-right">
                  <span className="vacancy-salary">
                    от {vacancy.salaryFrom}{" "}
                    <span className="vacancy-salary-hand">на руки</span>
                  </span>
                  <span className="vacancy-experience">
                    Требуемый опыт:
                    <span className="experience-gate">
                      {vacancy.experience}
                    </span>
                  </span>
                  <span className="vacancy-metro">
                    <img src={Vector} alt="Metro" className="vector-icon" />{" "}
                    {vacancy.metro}
                  </span>
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VacancyList;
