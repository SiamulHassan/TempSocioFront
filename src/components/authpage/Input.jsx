const Input = ({ formik, placeholder, name, type, value }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-secondary_color px-4 py-2 w-full rounded-md focus:border-blue focus:outline-none my-[6px]"
        name={name}
        value={value}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </>
  );
};

export default Input;
