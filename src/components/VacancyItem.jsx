const VacancyItem = ({ vacancy }) => {
  return (
    <div className="vacancy-item">
      <h3>{vacancy.title}</h3>
      <p>{vacancy.department}</p>
      <p>
        {vacancy.operationDate} - {vacancy.plannedDate}
      </p>
      <p>Пол: {vacancy.gender}</p>
      <p>
        Зарплата: {vacancy.salaryFrom} - {vacancy.salaryTo} ({vacancy.netSalary}
        )
      </p>
      <p>Адрес: {vacancy.address}</p>
      <p>Опыт работы: {vacancy.experience}</p>
      <p>График работы: {vacancy.workSchedule}</p>
      <p>Тип занятости: {vacancy.employmentType}</p>
    </div>
  );
};
