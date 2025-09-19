import { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { motion } from "framer-motion";
import { Search, Person } from "react-bootstrap-icons"; // 👈 thêm Person
import "./Header.css";
import { useLanguage } from "../../LanguageContext";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next"; // 👈 dịch text

const menuItems = [
  { key: "home", path: "/" },
  { key: "products", path: "/san-pham" },
  { key: "about", path: "/gioi-thieu" },
  { key: "news", path: "/tin-tuc" },
  { key: "contact", path: "/lien-he" },
];

const languages = [
  { code: "vi", label: "Tiếng Việt", flag: "/images/Vietnamf.jpg" },
  { code: "en", label: "English", flag: "/images/usa.png" },
];

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation(); // 👈 dịch menu

  return (
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <Navbar
        bg="white"
        expand="lg"
        className="main-navbar shadow-sm"
        expanded={expanded}
        onToggle={setExpanded}
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/images/saniLogo.png"
                alt="Logo"
                height="40"
              />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle onClick={() => setExpanded(!expanded)} />

          <Navbar.Collapse>
            <Nav className="mx-auto">
              {menuItems.map((item) => (
                <LinkContainer to={item.path} key={item.key}>
                  <Nav.Link>{t(`menu.${item.key}`)}</Nav.Link>
                </LinkContainer>
              ))}
            </Nav>

            <div className="d-flex align-items-center">
              {/* 🔍 Search */}
              <motion.button className="btn-icon me-3">
                <Search size={20} />
              </motion.button>

              {/* 👤 Login */}
              {/* <LinkContainer to="/login">
                <motion.button className="btn-icon me-3">
                  <Person size={22} />
                </motion.button>
              </LinkContainer> */}

              {/* 🌐 Language Switcher */}
              <NavDropdown
  title={
    <span className="d-flex align-items-center">
      <img
        src={languages.find((l) => l.code === language)?.flag}
        width="24"
        height="14"
        className="me-2"
        alt="flag"
      />
      {languages.find((l) => l.code === language)?.label}
    </span>
  }
  id="language-dropdown"
  align="end"
  className="no-caret" // 👈 thêm class
>
  {languages.map((lang) => (
    <NavDropdown.Item
      key={lang.code}
      onClick={() => {
        setLanguage(lang.code);
        i18n.changeLanguage(lang.code);
      }}
    >
      <img src={lang.flag} width="20" height="14" className="me-2" alt="flag" />
      {lang.label}
    </NavDropdown.Item>
  ))}
</NavDropdown>

            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Header;
