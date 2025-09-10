"use client"

import { useState } from "react"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { motion } from "framer-motion"
import "./Header.css"

const menuItems = [
    { title: "Trang chủ", path: "/" },
    { title: "Sản phẩm", path: "/san-pham" },
    { title: "Giới thiệu", path: "/gioi-thieu" },
    { title: "Tin tức - Bài viết", path: "/tin-tuc" },
    { title: "Liên hệ", path: "/lien-he" },
]

const Header = () => {
    const [expanded, setExpanded] = useState(false)
    const [language, setLanguage] = useState("vi") // mặc định tiếng Việt

    const languages = [
        { code: "vi", label: "Tiếng Việt", flag: "/images/Vietnamf.jpg" },
        { code: "en", label: "English", flag: "/images/usa.png" },
    ]

    return (
        <div>
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
                            <Navbar.Brand className="brand-logo">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    src="/images/saniLogo.png"
                                    alt="Logo"
                                    className="logo-img"
                                    height="40"
                                />
                            </Navbar.Brand>
                        </LinkContainer>

                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav"
                            onClick={() => setExpanded(!expanded)}
                        />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                {menuItems.map((item) =>
                                    <LinkContainer to={item.path} key={item.title}>
                                        <Nav.Link className="nav-item-custom">{item.title}</Nav.Link>
                                    </LinkContainer>
                                )}
                            </Nav>

                            {/* Language Dropdown */}
                            <div className="navbar-actions d-flex align-items-center">
                                <NavDropdown
                                    title={
                                        <span className="d-flex align-items-center">
                                            <img
                                                src={languages.find(l => l.code === language)?.flag}
                                                alt="flag"
                                                width="24"
                                                height="14"
                                                className="me-2"
                                            />
                                            {languages.find(l => l.code === language)?.label}
                                        </span>
                                    }
                                    id="language-dropdown"
                                    align="end"
                                    className="lang-dropdown"
                                >
                                    {languages.map((lang) => (
                                        <NavDropdown.Item
                                            key={lang.code}
                                            onClick={() => setLanguage(lang.code)}
                                            className="d-flex align-items-center"
                                        >
                                            <img
                                                src={lang.flag}
                                                alt={lang.label}
                                                width="20"
                                                height="14"
                                                className="me-2"
                                            />
                                            {lang.label}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </motion.div>
        </div>
    )
}

export default Header
