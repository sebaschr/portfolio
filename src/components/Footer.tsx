
export const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <button onClick={scrollToTop} className="footer-button">Up Top</button>
    </footer>

  );
};
