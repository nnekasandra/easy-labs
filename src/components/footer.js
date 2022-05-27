import "../index.css";
const Footer = () => {
  return (
    <footer className="p-4 bg-lighter-blue">
      <p className="text-center">
        Made with Love by{" "}
        <a
          href="https://twitter.com/nnekasandra_"
          target={"_blank"}
          className="border-b-2 border-b-main-blue"
        >
          Nneka
        </a>
      </p>
    </footer>
  );
};
export default Footer;
