import React, { useState } from "react";
import Header from "./components/Header";
import VacancyList from "./components/VacancyList";
import VacancyForm from "./components/VacancyForm";

const mockVacancies = [
  {
    id: 1,
    title: "Frontend Developer",
    operationDate: "2025-03-03",
    address: "Москва, ул. Ленина 1",
    salaryFrom: "100,000",
    experience: "от 1 до 3 лет",
    metro: "Киевская",
  },
  {
    id: 2,
    title: "Backend Developer",
    operationDate: "2025-02-28",
    address: "Санкт-Петербург, ул. Пушкина 10",
    salaryFrom: "120,000",
    experience: "более 3 лет",
    metro: "Невский проспект",
  },
];

const App = () => {
  const [activeButton, setActiveButton] = useState("list");
  const [vacancies, setVacancies] = useState(mockVacancies);
  const [selectedVacancy, setSelectedVacancy] = useState(null);

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    setSelectedVacancy(null); // При создании новой вакансии сбрасываем выбранную
  };

  const handleSubmit = (newVacancy) => {
    setVacancies((prevVacancies) => [
      ...prevVacancies,
      {
        ...newVacancy,
        id: Date.now(),
        operationDate: new Date().toISOString().split("T")[0],
      },
    ]);
    setActiveButton("list");
  };

  const handleEdit = (vacancy) => {
    setSelectedVacancy(vacancy);
    setActiveButton("form");
  };

  const handleDelete = (id) => {
    setVacancies((prevVacancies) =>
      prevVacancies.filter((vacancy) => vacancy.id !== id)
    );
  };

  const handleUpdate = (updatedVacancy) => {
    setVacancies((prevVacancies) =>
      prevVacancies.map((vacancy) =>
        vacancy.id === updatedVacancy.id ? updatedVacancy : vacancy
      )
    );
    setSelectedVacancy(null);
    setActiveButton("list");
  };
  const handleCancel = () => {
    setSelectedVacancy(null); // Отменяем редактирование
    setActiveButton("list"); // Возвращаем в список
  };
  return (
    <div>
      <Header onButtonClick={handleButtonClick} />
      <div>
        {activeButton === "list" ? (
          <VacancyList
            vacancies={vacancies}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ) : (
          <VacancyForm
            onSubmit={selectedVacancy ? handleUpdate : handleSubmit}
            onCancel={() => setActiveButton("list")}
            vacancy={selectedVacancy}
          />
        )}
      </div>
    </div>
  );
};

export default App;
