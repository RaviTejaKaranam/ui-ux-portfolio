const PrimaryButton = ({ label, href }) => {
  return (
    <a
      className="primary bg-[var(--primary-dark-color)] text-[var(--primary-light-color)]  py-2 px-2 rounded cursor-pointer hover:bg-[var(--primary-light-color)] hover:text-[var(--primary-dark-color)] hover:border-black transition duration-300 ease-in-out"
      type="button"
      href={href}
      target={label === "Contact Me" ? "_self" : "_blank"}
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
};

export default PrimaryButton;
