"use client"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import axios from "axios"
import "./ProductDetailPage.css"
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts"

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [relatedProducts, setRelatedProducts] = useState([])
    const [activeTab, setActiveTab] = useState("description")
    const [activeIndex, setActiveIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);
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
          answer:
            "Chúng tôi cam kết bảo mật thông tin khách hàng và giao hàng đúng hạn thông qua đối tác vận chuyển uy tín.",
        },
        {
          question: "Nếu tôi mua sản phẩm với số lượng nhiều thì giá có được giảm không?",
          answer:
            "Khách hàng mua số lượng lớn sẽ nhận được ưu đãi/chiết khấu riêng. Vui lòng liên hệ CSKH để biết thêm chi tiết.",
        },
        {
          question: "Quy định hoàn trả và đổi sản phẩm của Mode như thế nào?",
          answer:
            "Sản phẩm có thể đổi trả trong vòng 14 ngày kể từ ngày mua, nếu còn nguyên tem, nhãn mác và chưa qua sử dụng.",
        },
        {
          question: "Tôi mua hàng rồi, không vừa ý có thể đổi lại hay không?",
          answer:
            "Bạn có thể đổi sản phẩm trong vòng 7 ngày kể từ ngày mua, với điều kiện sản phẩm chưa sử dụng và còn nguyên bao bì.",
        },
      ];
    useEffect(() => {
        axios
            .get(`http://localhost:3000/products/${id}`)
            .then((res) => {
                setProduct(res.data)
                // fetch sản phẩm liên quan theo category
                axios
                    .get(`http://localhost:3000/products?category=${res.data.category}`)
                    .then((r) => setRelatedProducts(r.data.filter((p) => p.id !== res.data.id)))
            })
            .catch((err) => console.error(err))
    }, [id])

    if (!product) return <p>Đang tải...</p>

    return (
        <section className="product-detail-page">
            <Container>
                {/* TOP ROW: IMAGE + INFO */}
                <Row>
                    {/* LEFT IMAGE */}
                    <Col md={4}>
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
                    <Col md={4}>
                        <h2 className="product-title">{product.name}</h2>
                        <p className="product-description">
                            {product.shortDescription || "Combo Muối Hồng Himalaya Xay Nhuyễn 1.1kg + Muối Hồng Nguyên Hạt 120gr"}
                        </p>
                        <p className="product-status">
                            Tình trạng: <b style={{ color: "green" }}>Còn hàng</b>
                        </p>
                        <p className="product-price" style={{ display: "flex", justifyContent: "start" }}>
                            Giá: <span className="price-new">99,000₫</span>
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
                    </Col>

                    {/* RIGHT COUPONS */}
                    <Col md={4} className="coupon-column">
                        <div className="coupon-list">
                            {[
                                {
                                    icon: "/images/home_coupon_1_img.png",
                                    title: "Miễn phí vận chuyển",
                                    desc: "Đơn hàng từ 300k",
                                    code: "FREE300",
                                    expiry: "10/12/2025"
                                },
                                {
                                    icon: "/images/home_coupon_2_img.png",
                                    title: "Giảm 20%",
                                    desc: "Đơn từ 200k",
                                    code: "SALE20",
                                    expiry: "10/12/2025"
                                },
                                {
                                    icon: "/images/home_coupon_3_img.png",
                                    title: "Giảm 50k",
                                    desc: "Đơn từ 500k",
                                    code: "DISCOUNT50",
                                    expiry: "10/12/2025"
                                },
                                {
                                    icon: "/images/home_coupon_4_img.png",
                                    title: "Giảm 10%",
                                    desc: "Đơn từ 100k",
                                    code: "HOT10",
                                    expiry: "10/12/2025"
                                }
                            ].map((coupon, index) => (
                                <div className="coupon-item" key={index}>
                                    <div className="coupon-left">
                                        <img src={coupon.icon} alt={coupon.title} className="coupon-icon" />
                                        <div>
                                            <h4 className="coupon-title">{coupon.title}</h4>
                                            <p className="coupon-description">{coupon.desc}</p>
                                            <p className="coupon-code">Mã: {coupon.code}</p>
                                            <p className="coupon-expiry">HSD: {coupon.expiry}</p>
                                        </div>
                                    </div>
                                    <div className="coupon-right">
                                        <button className="coupon-button">SAO CHÉP MÃ</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
                {/* BENEFITS / COUPON LIST */}
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

                {/* BOTTOM ROW: TABS + RELATED PRODUCTS */}
                <Row className="tab-related-row">
                    {/* LEFT TABS */}
                    <Col md={8}>
                        <div className="tab-section">
                            <div className="tab-header">
                                <button className={activeTab === "description" ? "active" : ""} onClick={() => setActiveTab("description")}>
                                    Mô tả sản phẩm
                                </button>
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
                                {activeTab === "description" && (
                                    <div>
                                        <p>{product.description || "Chưa có mô tả chi tiết cho sản phẩm này."}</p>
                                    </div>
                                )}

                                {activeTab === "policy" && (
                                    <div className="policy-content">
                                        <h4>1. Điều kiện đổi trả</h4>
                                        <p>
                                            Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/ trả lại hàng ngay tại thời điểm
                                            giao/nhận hàng trong những trường hợp sau:
                                        </p>
                                        <ul>
                                            <li>Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như trên website tại thời điểm đặt hàng.</li>
                                            <li>Không đủ số lượng, không đủ bộ như trong đơn hàng.</li>
                                            <li>Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể vỡ...</li>
                                        </ul>
                                        <p>
                                            Khách hàng có trách nhiệm trình giấy tờ liên quan chứng minh sự thiếu sót trên để hoàn thành việc hoàn trả/đổi trả hàng hóa.
                                        </p>

                                        <h4>2. Quy định về thời gian thông báo và gửi sản phẩm đổi trả</h4>
                                        <ul>
                                            <li>
                                                <b>Thời gian thông báo đổi trả:</b> trong vòng 48h kể từ khi nhận sản phẩm đổi với trường hợp sản phẩm thiếu phụ kiện, quà tặng hoặc bể vỡ.
                                            </li>
                                            <li>
                                                <b>Thời gian gửi chuyển trả sản phẩm:</b> trong vòng 14 ngày kể từ khi nhận sản phẩm.
                                            </li>
                                            <li>
                                                <b>Địa điểm đổi trả sản phẩm:</b> Khách hàng có thể mang hàng trực tiếp đến văn phòng/ cửa hàng của chúng tôi hoặc chuyển qua đường bưu điện.
                                            </li>
                                        </ul>

                                        <p>
                                            Trong trường hợp Quý Khách hàng có ý kiến đóng góp/ khiếu nại liên quan đến chất lượng sản phẩm,
                                            Quý Khách hàng vui lòng liên hệ đường dây chăm sóc khách hàng của chúng tôi.
                                        </p>
                                    </div>
                                )}

{activeTab === "terms" && (
      <div className="terms-content">
        <h4>1. Giới thiệu</h4>
        <p>
          Chào mừng quý khách hàng đến với website chúng tôi.
        </p>
        <p>
          Khi quý khách hàng truy cập vào trang website của chúng tôi có nghĩa là quý khách đồng ý với các điều khoản này.
          Trang web có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần nào trong Điều khoản mua bán hàng hóa này,
          vào bất cứ lúc nào. Các thay đổi có hiệu lực ngay khi được đăng trên trang web mà không cần thông báo trước.
          Và khi quý khách tiếp tục sử dụng trang web, sau khi các thay đổi về Điều khoản này được đăng tải, có nghĩa là
          quý khách chấp nhận với những thay đổi đó.
        </p>
        <p>
          Quý khách hàng vui lòng kiểm tra thường xuyên để cập nhật những thay đổi của chúng tôi.
        </p>

        <h4>2. Hướng dẫn sử dụng website</h4>
        <p>
          Khi vào web của chúng tôi, khách hàng phải đảm bảo đủ 18 tuổi, hoặc truy cập dưới sự giám sát của cha mẹ
          hay người giám hộ hợp pháp. Khách hàng đảm bảo có đầy đủ hành vi dân sự để thực hiện các giao dịch
          mua bán hàng hóa theo quy định hiện hành của pháp luật Việt Nam.
        </p>
        <p>
          Trong suốt quá trình đăng ký, quý khách đồng ý nhận email quảng cáo từ website. Nếu không muốn tiếp tục
          nhận mail, quý khách có thể từ chối bằng cách nhấp vào đường link ở dưới cùng trong mọi email quảng cáo.
        </p>

        <h4>3. Thanh toán an toàn và tiện lợi</h4>
        <p>Người mua có thể tham khảo các phương thức thanh toán sau đây và lựa chọn áp dụng phương thức phù hợp:</p>
        <ul>
          <li>Cách 1: Thanh toán trực tiếp (người mua nhận hàng tại địa chỉ người bán)</li>
          <li>Cách 2: Thanh toán sau (COD – giao hàng và thu tiền tận nơi)</li>
          <li>Cách 3: Thanh toán online qua thẻ tín dụng, chuyển khoản</li>
        </ul>
      </div>
    )}

{activeTab === "faq" && (
  <div className="faq-section">
    {(showAll ? faqs : faqs.slice(0, 3)).map((faq, index) => (
      <div key={index} className="faq-item">
        <div
          className="faq-question"
          onClick={() =>
            setActiveIndex(activeIndex === index ? null : index)
          }
        >
          <span>{faq.question}</span>
          <span className="faq-icon">
            {activeIndex === index ? "−" : "+"}
          </span>
        </div>
        {activeIndex === index && (
          <div className="faq-answer">{faq.answer}</div>
        )}
      </div>
    ))}

    <div className="faq-more">
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "THU GỌN" : "XEM THÊM"}
      </button>
    </div>
  </div>
)}

                            </div>
                        </div>
                    </Col>

                    {/* RIGHT RELATED PRODUCTS */}
                    <Col md={4} className="related-products-column">
                        <h4 className="related-title">Sản phẩm liên quan</h4>
                        <div className="related-list">
                            {relatedProducts.map((item) => (
                                <div className="related-item -flex flex-wrap flex-column align-items-center  justify-content-center" key={item.id} style={{padding:'2% 8%'}}>
                                    <img src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                    <span className="related-price">{item.price}₫</span>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
                <RelatedProducts category={product.category} />
            </Container>
        </section>
    )
}

export default ProductDetail
