import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import VacancyList from "./components/VacancyList";
import VacancyForm from "./components/VacancyForm";
// import mockVacancies from "./data/mockVacancies.json";

// const mockVacancies = [
//   {
//     id: 1,
//     title: "Frontend Developer",
//     operationDate: "2025-03-03",
//     address: "Москва, ул. Ленина 1",
//     salaryFrom: "100,000",
//     experience: "от 1 до 3 лет",
//     metro: "Киевская",
//   },
//   {
//     id: 2,
//     title: "Backend Developer",
//     operationDate: "2025-02-28",
//     address: "Санкт-Петербург, ул. Пушкина 10",
//     salaryFrom: "120,000",
//     experience: "более 3 лет",
//     metro: "Невский проспект",
//   },
// ];

const App = () => {
  const [activeButton, setActiveButton] = useState("list");
  const [vacancies, setVacancies] = useState([]);
  const [selectedVacancy, setSelectedVacancy] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/data/mockVacancies.json")
      .then((response) => {
        console.log("Ответ сервера:", response); // Логируем ответ
        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }
        return response.text(); // Сначала читаем как текст
      })
      .then((text) => {
        console.log("Полученные данные:", text); // Логируем сырой текст
        return JSON.parse(text); // Парсим JSON
      })
      .then((data) => {
        setVacancies(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка:", error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    setSelectedVacancy(null);
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
    setSelectedVacancy(null);
    setActiveButton("list");
  };

  if (isLoading) {
    return <div>Загрузка данных...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div>
      <Header onButtonClick={handleButtonClick} activeButton={activeButton} />
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
            onCancel={handleCancel}
            vacancy={selectedVacancy}
          />
        )}
      </div>
    </div>
  );
};

export default App;
