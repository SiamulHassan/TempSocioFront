const Gender = ({ formik }) => {
  return (
    <div className="flex gap-5 mt-2">
      <div className="flex items-center gap-3">
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label htmlFor="male" className="cursor-pointer">
          Male
        </label>
      </div>
      <div className="flex items-center gap-3 ">
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label htmlFor="female" className="cursor-pointer">
          Female
        </label>
      </div>
    </div>
  );
};

export default Gender;
