export const Footer = () => {
  return (
    <footer className={`pt-4 pb-4 bg-black text-white`}>
      <div className="container mx-auto">
        <div
          className={`flex flex-col md:flex-row justify-between items-center`}
        >
          <div className={`mb-4 md:mb-0`}>&copy; 2024 IndustrialMind</div>
          <div className={`mb-4 md:mb-0`}>
            <a
              href="http://beian.miit.gov.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              沪ICP备2025124770号
            </a>
          </div>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
