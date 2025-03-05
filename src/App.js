import React, { useState } from "react";
import Header from "./components/Header";
import VacancyList from "./components/VacancyList";
import VacancyForm from "./components/VacancyForm";

const mockVacancies = [
  {
    id: 1,
    title: "Frontend Developer",
    date: "2025-03-03",
    address: "Москва, ул. Ленина 1",
    salary: "100,000",
    experience: "от 1 до 3 лет",
    metro: "Киевская",
  },
  {
    id: 2,
    title: "Backend Developer",
    date: "2025-02-28",
    address: "Санкт-Петербург, ул. Пушкина 10",
    salary: "120,000",
    experience: "более 3 лет",
    metro: "Невский проспект",
  },
];

const App = () => {
  const [activeButton, setActiveButton] = useState("list");
  const [vacancies, setVacancies] = useState(mockVacancies);

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  const handleSubmit = (newVacancy) => {
    setVacancies((prevVacancies) => [
      ...prevVacancies,
      { ...newVacancy, id: Date.now() },
    ]);
    setActiveButton("list"); // После добавления вакансии возвращаемся в список
  };

  return (
    <div>
      <Header onButtonClick={handleButtonClick} />
      <div>
        {activeButton === "list" ? (
          <VacancyList vacancies={vacancies} />
        ) : (
          <VacancyForm
            onSubmit={handleSubmit}
            initialValues={{
              title: "",
              address: "",
              salary: "",
              experience: "",
              metro: "",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
