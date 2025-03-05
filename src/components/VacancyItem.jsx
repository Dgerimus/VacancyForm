import React from "react";

const VacancyItem = ({ vacancy, onEdit }) => {
  return (
    <div>
      <h3>{vacancy.title}</h3>
      <p>{vacancy.description}</p>
      <p>Компания: {vacancy.company}</p>
      <p>Зарплата: {vacancy.salary}</p>
      <button onClick={() => onEdit(vacancy)}>Редактировать</button>
    </div>
  );
};

export default VacancyItem;
