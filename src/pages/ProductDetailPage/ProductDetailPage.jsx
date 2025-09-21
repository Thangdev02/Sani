"use client"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import "./ProductDetailPage.css"
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts"
import { getProducts } from "../../services/api"
import { useLanguage } from "../../LanguageContext"

const ProductDetail = () => {
    const { id } = useParams()
    const { language } = useLanguage()
    const [product, setProduct] = useState(null)
    const [relatedProducts, setRelatedProducts] = useState([])
    const [activeTab, setActiveTab] = useState("policy")
    const [activeIndex, setActiveIndex] = useState(null)
    const [showAll, setShowAll] = useState(false)


    const faqs = [
        {
            question: "Làm thế nào để tôi đặt hàng online?",
            answer: (
                <>
                    Mode Fashion rất vui lòng hỗ trợ khách hàng đặt hàng online bằng một trong những cách sau:
                    <ul>
                        <li>Truy cập website Mode Fashion</li>
                        <li>Gửi email đặt hàng: hi@modefashion.com</li>
                        <li>Gọi hotline: 1900.636.000 để đặt sản phẩm</li>
                        <li>Chat với tư vấn viên trên fanpage</li>
                    </ul>
                </>
            ),
        },
        {
            question: "Nếu tôi đặt hàng trực tuyến có rủi ro gì không?",
            answer: "Chúng tôi cam kết bảo mật thông tin khách hàng và giao hàng đúng hạn thông qua đối tác vận chuyển uy tín.",
        },
        {
            question: "Nếu tôi mua sản phẩm với số lượng nhiều thì giá có được giảm không?",
            answer: "Khách hàng mua số lượng lớn sẽ nhận được ưu đãi/chiết khấu riêng. Vui lòng liên hệ CSKH để biết thêm chi tiết.",
        },
        {
            question: "Quy định hoàn trả và đổi sản phẩm của Mode như thế nào?",
            answer: "Sản phẩm có thể đổi trả trong vòng 14 ngày kể từ ngày mua, nếu còn nguyên tem, nhãn mác và chưa qua sử dụng.",
        },
        {
            question: "Tôi mua hàng rồi, không vừa ý có thể đổi lại hay không?",
            answer: "Bạn có thể đổi sản phẩm trong vòng 7 ngày kể từ ngày mua, với điều kiện sản phẩm chưa sử dụng và còn nguyên bao bì.",
        },
    ]
    useEffect(() => {
        const fetchData = async () => {
            try {
                const all = await getProducts(1, 50, language)
                const prod = all.find((p) => String(p.id) === id)
                setProduct(prod)

                if (prod) {
                    const related = all.filter((p) => p.category === prod.category && p.id !== prod.id)
                    setRelatedProducts(related)
                }
            } catch (err) {
                console.error("Error fetching product:", err)
            }
        }
        fetchData()
    }, [id, language])

    if (!product) return <p>Đang tải...</p>

    return (
        <section className="product-detail-page">
            <Container>
                <Row>
                    {/* LEFT IMAGE */}
                    <Col md={6}>
                        <motion.img
                            src={product.image}
                            alt={product.name}
                            className="product-image"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </Col>

                    {/* MIDDLE INFO */}
                    <Col md={6}>
                        <h2 className="product-title">{product.name}</h2>
                        <p className="product-description">
                            {/* {product.shortDescription || "Combo Muối Hồng Himalaya Xay Nhuyễn 1.1kg + Muối Hồng Nguyên Hạt 120gr"} */}
                        </p>
                        <p className="product-status">
                            Tình trạng: <b style={{ color: "green" }}>Còn hàng</b>
                        </p>
                        <p className="product-price" style={{ display: "flex", justifyContent: "start" }}>
                            Giá: <span className="price-new">{product.price}₫</span>
                        </p>

                        {/* SHARE */}
                        <div className="share-box">
                            <span>Chia sẻ:</span>
                            <div className="share-icons d-flex align-items-center gap-3">
                                <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/250px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook" /></a>
                                <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png" alt="Messenger" /></a>
                                <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png" alt="Twitter" /></a>
                                <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pinterest.svg/1200px-Pinterest.svg.png" alt="Pinterest" /></a>
                            </div>
                        </div>
                        <div className="product-extra-info mt-4">
                        <div
                                        className="description-content"
                                        dangerouslySetInnerHTML={{ __html: product.description || "<p>Chưa có mô tả chi tiết cho sản phẩm này.</p>" }}
                                    />
                            {/* <p><b>Xuất xứ:</b> Việt Nam</p>
                            <p><b>HSD:</b> 1 năm kể từ ngày sản xuất</p>
                            <p><b>Bảo quản:</b> Để nơi khô ráo và thoáng mát, đậy kín bao bì sau khi sử dụng.</p> */}
                        </div>
                    </Col>


                </Row>

                {/* BENEFITS */}
                <div className="benefit-row">
                    {[
                        { icon: "/images/product_info1_desc1_img.png", text: "Miễn phí giao hàng" },
                        { icon: "/images/product_info1_desc2_img.png", text: "Đổi trả trong 7 ngày" },
                        { icon: "/images/product_info1_desc3_img.png", text: "Cam kết hàng chính hãng 100%" },
                        { icon: "/images/product_info2_desc1_img.png", text: "Mở hộp kiểm tra nhận hàng" },
                        { icon: "/images/product_info2_desc2_img.png", text: "Hỗ trợ 24/7" },
                        { icon: "/images/product_info2_desc3_img.png", text: "Thanh toán nhanh chóng" },
                    ].map((item, index) => (
                        <div className="benefit-item" key={index}>
                            <img src={item.icon} alt={item.text} className="benefit-icon" />
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>

                {/* BOTTOM ROW: TABS + RELATED */}
                <Row className="tab-related-row">
                    {/* LEFT TABS */}
                    <Col md={8}>
                        <div className="tab-section">
                            <div className="tab-header">
                                <button className={activeTab === "policy" ? "active" : ""} onClick={() => setActiveTab("policy")}>
                                    Chính sách đổi trả
                                </button>
                                <button className={activeTab === "terms" ? "active" : ""} onClick={() => setActiveTab("terms")}>
                                    Điều khoản dịch vụ
                                </button>
                                <button className={activeTab === "faq" ? "active" : ""} onClick={() => setActiveTab("faq")}>
                                    Câu hỏi thường gặp
                                </button>
                            </div>

                            <div className="tab-content">
                                {activeTab === "policy" && (
                                    <div
                                        className="policy-content"
                                        dangerouslySetInnerHTML={{ __html: product.returnPolicy || "<p>Chưa có chính sách đổi trả.</p>" }}
                                    />
                                )}

                                {activeTab === "terms" && (
                                    <div
                                        className="terms-content"
                                        dangerouslySetInnerHTML={{ __html: product.termsOfService || "<p>Chưa có điều khoản dịch vụ.</p>" }}
                                    />
                                )}

                                {activeTab === "faq" && (
                                    <div
                                        className="faq-content"
                                        dangerouslySetInnerHTML={{ __html: product.faq || "<p>Chưa có câu hỏi thường gặp.</p>" }}
                                    />
                                )}
                            </div>

                        </div>
                    </Col>

                    {/* RIGHT RELATED PRODUCTS */}
                    <Col md={4} className="related-products-column">
                        <h4 className="related-title">Sản phẩm liên quan</h4>
                        <div className="related-list">
                            {relatedProducts.map((item) => (
                                <div className="related-item -flex flex-wrap flex-column align-items-center  justify-content-center" key={item.id} style={{ padding: '2% 8%' }}>
                                    <img src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                    <span className="related-price">{item.price}₫</span>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>

                {/* Swiper Related Products */}
                <RelatedProducts category={product.category} />
            </Container>
        </section>
    )
}

export default ProductDetail
