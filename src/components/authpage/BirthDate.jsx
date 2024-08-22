const BirthDate = ({ formik }) => {
  // 100 yars of dates
  const year = new Date().getFullYear();

  const generateDates = Array.from({ length: 80 }, (_, i) => year - i);
  const generateMonth = Array.from({ length: 12 }, (_, i) => i + 1);

  // 0 means which month you have selected it will give the last date of that month. And 1 will give the first date of that month wich is as expeced,
  const dateData = new Date(
    formik.values.bYear,
    formik.values.bMonth,
    0
  ).getDate();
  const days = Array.from({ length: dateData }, (_, i) => i + 1);

  return (
    <div className="xs:flex-col sm:flex-row flex gap-2">
      <select
        className="border border-secondary_color px-[5px] lg:px-4 py-2 w-full rounded-md focus:border-blue focus:outline-none my-[6px]"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.bYear}
        name="bYear"
      >
        <option value="Birth Month">Birth Year</option>
        {generateDates.map((dates, i) => (
          <option key={i} value={dates}>
            {dates}
          </option>
        ))}
      </select>
      <select
        className="border border-secondary_color px-[5px] lg:px-4 py-2 w-full rounded-md focus:border-blue focus:outline-none my-[6px]"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.bMonth}
        name="bMonth"
      >
        <option value="Birth Month">Birth Month</option>
        {generateMonth.map((month, i) => (
          <option key={i} value={month}>
            {month}
          </option>
        ))}
      </select>
      <select
        className="border border-secondary_color px-[5px] lg:px-4 py-2 w-full rounded-md focus:border-blue focus:outline-none my-[6px]"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.bDay}
        name="bDay"
      >
        <option value="Birth Month">Birth Day</option>
        {days.map((day, i) => (
          <option key={i} value={day}>
            {day}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BirthDate;
