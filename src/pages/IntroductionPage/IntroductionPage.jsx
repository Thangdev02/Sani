import React, { useState } from "react";
import { motion } from "framer-motion";
import "./IntroductionPage.css";
import { Col } from "react-bootstrap";

const IntroductionPage = () => {
    // --- State cho phần Chất lượng sản phẩm ---
    const [activeImage, setActiveImage] = useState("/images/about03_slide_1_img.jpg");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "/images/about03_slide_1_img.jpg", // Thay bằng đường dẫn thực tế
        "https://theme.hstatic.net/200000666963/1001343745/14/about03_slide_2_img.jpg?v=124", // Thêm các hình ảnh khác nếu cần
        "https://theme.hstatic.net/200000666963/1001343745/14/about03_slide_3_img.jpg?v=124",
    ];

    // Hàm chuyển đến hình ảnh tiếp theo
    const handleNext = () => {
        if (images.length > 1) {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }
    };

    const handleBack = () => {
        if (images.length > 1) {
            setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };
    const qualitiesLeft = [
        {
            title: "Tiêu đề 1",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "/images/about03_service_quanlity_1_img.jpg",
        },
        {
            title: "Tiêu đề 2",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "/images/about03_service_quanlity_2_img.jpg",
        },
        {
            title: "Tiêu đề 3",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "/images/about03_service_quanlity_3_img.jpg",
        },
    ];

    const qualitiesRight = [
        {
            title: "Tiêu đề 4",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "/images/about03_service_quanlity_4_img.jpg",
        },
        {
            title: "Tiêu đề 5",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "/images/about03_service_quanlity_5_img.jpg",
        },
        {
            title: "Tiêu đề 6",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "/images/about03_service_quanlity_6_img.jpg",
        },
    ];

    return (
        <div className="introduction-page" style={{ fontFamily: "Monserrat" }}>
            {/* --- Section 1: Giới thiệu --- */}
            <section className="intro-section">
                <div className="intro-content">
                    <motion.div
                        className="intro-image"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="image-frame">
                            <img src={images[currentImageIndex]} alt="Black Pepper" />
                        </div>
                        {/* Nút Back và Next */}
                        <div className="navigation-buttons">
                            <button className="nav-button back" onClick={handleBack}>
                                &larr;
                            </button>
                            <button className="nav-button next" onClick={handleNext}>
                                &rarr;
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="intro-text"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4>Giới thiệu</h4>
                        <h2>VỀ SANI</h2>
                        <p>
                            Lorem ipsum dolor sit amet. Ea atque facilis ad velit perferendis
                            sed velit consequatur ut dolores velit est officiis fugiat et
                            velit illum qui magni voluptatem.
                        </p>
                        <p>
                            Aut eveniet quisquam est saepe dicta At excepturi quam. Et quas
                            eligendi et galisum internos vel cumque accusamus ad voluptatem
                            ipsa.
                        </p>
                        <button className="btn-primary">XEM CHI TIẾT</button>
                    </motion.div>
                </div>
            </section>

            {/* --- Section 2: Chất lượng sản phẩm --- */}
            <section className="quality-section">
                <h2 className="section-title text-white">Chất lượng sản phẩm</h2>
                <div className="quality-content">
                    {/* Left */}
                    <div className="quality-left">
                        {qualitiesLeft.map((q, i) => (
                            <motion.div
                                key={i}
                                className="quality-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                onMouseEnter={() => setActiveImage(q.img)}
                            >
                                <h4>{q.title}</h4>
                                <p>{q.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Center Image */}
                    {/* Center Image */}
                    <motion.div
                        className="quality-image"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.img
                            key={activeImage} // đổi key để animate khi ảnh thay đổi
                            src={activeImage || "/images/about03_slide_1_img.jpg"} // fallback an toàn
                            alt="Product Quality"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        />
                    </motion.div>

                    {/* Right */}
                    <div className="quality-right">
                        {qualitiesRight.map((q, i) => (
                            <motion.div
                                key={i}
                                className="quality-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                onMouseEnter={() => setActiveImage(q.img)}
                                whileHover={{ y: -5, scale: 1.02 }} // hover nhô lên nhẹ
                            >
                                <h4>{q.title}</h4>
                                <p>{q.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Section 3: Về chúng tôi --- */}
            <section className="about-section">
                <h2 className="section-title">Về chúng tôi</h2>
                <div className="about-timeline">
                    <motion.div
                        className="about-item"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        style={{ position: "relative", width: "100%", height: "400px" }} // Đảm bảo container có chiều cao cố định
                    >
                        <img
                            src="/images/about03_story_1_img.jpg"
                            alt="About 1"
                            style={{
                                width: "50%",
                                height: "90%",
                                objectFit: "cover",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                zIndex: 1,
                            }}
                        />
                        <div
                            className="about-text"
                            style={{
                                position: "absolute",
                                right: "200px",
                                top: "90px",
                                width: "500px",
                                padding: "20px",
                                background: "#fff", // Background trắng để dễ thấy
                                borderRadius: "8px",
                                zIndex: 2, // Đảm bảo text nằm trên hình ảnh
                            }}
                        >
                            <span>20-11-2022</span>
                            <h4>Tiêu đề 1</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-item reverse"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            position: "relative",
                            width: "100%",
                            height: "400px"  // Chiều cao cố định, điều chỉnh theo ý
                        }}
                    >
                        <img
                            src="/images/about03_story_2_img.jpg"
                            alt="About 2"
                            style={{
                                width: "50%",
                                height: "90%",
                                objectFit: "cover",  // Giữ tỷ lệ hình ảnh
                                position: "absolute",
                                top: 0,
                                right: 0,  // Vì reverse, nhưng để lấp đầy container thì left:0 cũng ok, right:0 để align phải nếu cần
                                zIndex: 1,
                            }}
                        />
                        <div
                            className="about-text highlight text-end"
                            style={{
                                position: "absolute",
                                left: "200px",  // Đặt ở bên trái cho reverse (thay vì right)
                                top: "100px",
                                width: "500px",
                                padding: "20px",
                                zIndex: 2,  // Nằm trên hình ảnh
                                // Background từ .highlight trong CSS (đỏ), không cần override
                            }}
                        >
                            <span className="text-white">30-11-2022</span>
                            <h4>Tiêu đề 2</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-item"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        style={{ position: "relative", width: "100%", height: "400px" }} // Đảm bảo container có chiều cao cố định
                    >
                        <img
                            src="/images/about03_story_3_img.jpg"
                            alt="About 1"
                            style={{
                                width: "50%",
                                height: "90%",
                                objectFit: "cover",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                zIndex: 1,
                            }}
                        />
                        <div
                            className="about-text"
                            style={{
                                position: "absolute",
                                right: "200px",
                                top: "90px",
                                width: "500px",
                                padding: "20px",
                                background: "#fff", // Background trắng để dễ thấy
                                borderRadius: "8px",
                                zIndex: 2, // Đảm bảo text nằm trên hình ảnh
                            }}
                        >
                            <span>20-11-2022</span>
                            <h4>Tiêu đề 3</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-item reverse"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            position: "relative",
                            width: "100%",
                            height: "400px"  // Chiều cao cố định, điều chỉnh theo ý
                        }}
                    >
                        <img
                            src="/images/about03_story_4_img.jpg"
                            alt="About 2"
                            style={{
                                width: "50%",
                                height: "90%",
                                objectFit: "cover",  // Giữ tỷ lệ hình ảnh
                                position: "absolute",
                                top: 0,
                                right: 0,  // Vì reverse, nhưng để lấp đầy container thì left:0 cũng ok, right:0 để align phải nếu cần
                                zIndex: 1,
                            }}
                        />
                        <div
                            className="about-text highlight text-end"
                            style={{
                                position: "absolute",
                                left: "200px",  // Đặt ở bên trái cho reverse (thay vì right)
                                top: "100px",
                                width: "500px",
                                padding: "20px",
                                zIndex: 2,  // Nằm trên hình ảnh
                                // Background từ .highlight trong CSS (đỏ), không cần override
                            }}
                        >
                            <span className="text-white">30-11-2022</span>
                            <h4>Tiêu đề 4</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default IntroductionPage;
