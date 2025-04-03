export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-5 md:mt-10">
      <p className="text-center">
        © {currentYear} Ravi Teja Karanam. All rights reserved.
      </p>
      <p className="text-center">
        This website is built using React and Tailwind CSS. ❤️❤️
      </p>
    </div>
  );
};
export default Footer;
