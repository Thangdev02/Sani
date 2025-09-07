"use client"

import { useState } from "react"
import { Navbar, Nav, Container, Badge, NavDropdown } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { motion } from "framer-motion"
import { Bell, Search, Person } from "react-bootstrap-icons"   // 👈 import icon
import "./Header.css"

const menuItems = [
    {
        title: "Trang chủ",
        id: "home-dropdown",
        children: [
            { label: "Kiểu hiển thị header 1", path: "/header1" },
            { label: "Kiểu hiển thị header 2", path: "/header2" },
            { label: "Kiểu hiển thị header 3", path: "/header3" },
        ],
    },
    {
        title: "Sản phẩm",
        id: "product-dropdown",
        children: [
            { label: "Loại 1", path: "/products/type1" },
            { label: "Loại 2", path: "/products/type2" },
        ],
    },
    {
        title: "Giới thiệu",
        id: "about-dropdown",
        children: [
            { label: "Về công ty", path: "/about/company" },
            { label: "Đội ngũ", path: "/about/team" },
        ],
    },
    { title: "Tin tức - Bài viết", path: "/blog" },
    { title: "Landing page", path: "/landing" },
    { title: "Hệ thống cửa hàng", path: "/stores" },
]

const Header = () => {
    const [expanded, setExpanded] = useState(false)

    return (
        <>
            {/* Top Bar */}
            <div className="top-bar">
                <Container>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="contact-info">
                            <span>Hotline: 1900.636.000 (8h - 12h, 13h30 - 17h)</span>
                            <span className="ms-3">Liên hệ</span>
                        </div>
                        <div className="notification">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-icon me-3 position-relative"
                            >
                                <Bell color="white" size={20} />
                                <Badge
                                    bg="danger"
                                    pill
                                    className="position-absolute top-30 start-100 translate-middle"
                                    style={{ fontSize: "0.7rem" }}
                                >
                                    3
                                </Badge>
                            </motion.button>
                            <span>Thông báo</span>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Main Navigation */}
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
                                <motion.h2
                                    whileHover={{ scale: 1.05 }}
                                    className="mb-0 text-black fw-bold"
                                >
                                    Sani
                                </motion.h2>
                            </Navbar.Brand>
                        </LinkContainer>

                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav"
                            onClick={() => setExpanded(!expanded)}
                        />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                {menuItems.map((item) =>
                                    item.children ? (
                                        <NavDropdown
                                            key={item.id}
                                            title={item.title}
                                            id={item.id}
                                            className="nav-item-custom"
                                        >
                                            {item.children.map((child, idx) => (
                                                <LinkContainer to={child.path} key={idx}>
                                                    <NavDropdown.Item>{child.label}</NavDropdown.Item>
                                                </LinkContainer>
                                            ))}
                                        </NavDropdown>
                                    ) : (
                                        <LinkContainer to={item.path} key={item.title}>
                                            <Nav.Link className="nav-item-custom">{item.title}</Nav.Link>
                                        </LinkContainer>
                                    )
                                )}
                            </Nav>

                            {/* Actions */}
                            <div className="navbar-actions d-flex align-items-center">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-icon me-3"
                                >
                                    <Search size={20} />
                                </motion.button>



                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-icon"
                                >
                                    <Person size={20} />
                                </motion.button>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </motion.div>
        </>
    )
}

export default Header
