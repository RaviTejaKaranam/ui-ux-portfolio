export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-5 md:mt-10">
      <p className="text-center">
        © {currentYear} Ravi Teja Karanam. All rights reserved.
      </p>
    </div>
  );
};
export default Footer;
