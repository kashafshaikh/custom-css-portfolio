import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer">
      <p className="footer-text">Stay Connected with My Work:</p>

      <div className="footer-icons">
        {/* Email */}
        <a href="mailto:billushaikhshaikh@gmail.com" className="footer-link">
          <span  className="icon">
             <AiOutlineMail/>
          </span> 
          Email
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/kashafshaikh"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <span className="icon">
            <AiFillGithub/>
          </span>
          Github
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/kashaf-zeeshan-5756022b5"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <span className="icon">
            <AiFillLinkedin/>
          </span>
          Linkedin
        </a>
      </div>

      <p className="footer-rights">
        © 2024 Kashaf Shaikh. All Rights Reserved.
      </p>
    </div>
  );
}
