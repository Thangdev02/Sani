import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
    resources: {
        vi: {
            translation: {
                // HEADER
                home: "Trang chủ",
                products: "Sản phẩm",
                about: "Giới thiệu",
                news: "Tin tức - Bài viết",
                contact: "Liên hệ",

                // FEATURES
                feature_growth_title: "Sự phát triển",
                feature_growth_desc:
                    "Chúng tôi yêu gia vị của Việt Nam và rất mong muốn đưa sản phẩm chất lượng cao ra toàn thế giới. Với niềm đam mê trong công việc và sự hiểu biết sâu sắc về nền nông nghiệp Việt Nam.",
                feature_origin_title: "Nguồn gốc",
                feature_origin_desc:
                    "Nhà máy chúng tôi đặt tại trung tâm cung cấp nguyên liệu lớn nhất tại Việt Nam và chúng tôi hoàn toàn chủ động nguồn nguyên liệu.",
                feature_factory_title: "Sản xuất",
                feature_factory_desc:
                    "Nhà máy sản xuất áp dụng công nghệ mới nhất, có dây chuyền sản xuất tự động và phòng thí nghiệm được trang bị đầy đủ. Chúng tôi áp dụng thương mại công bằng để đảm bảo chất lượng cao và ổn định.",
                feature_quality_title: "Chất lượng",
                feature_quality_desc:
                    "Chúng tôi cam kết cung cấp sản phẩm hạt tiêu đạt tiêu chuẩn quốc tế, không thông qua trung gian nhằm kiểm soát chặt chẽ chất lượng tiêu từ nông trại cho đến thị trường.",

                // PRODUCTS SECTION
                core_values: "GIÁ TRỊ CỐT LÕI",
                core_values_subtitle: "ĐIỀU QUAN TRỌNG NHẤT VỚI SANI",

                left_1_title: "Niềm đam mê",
                left_1_desc:
                    "Chúng tôi yêu thích công việc kinh doanh và các mặt hàng gia vị của mình.",
                left_2_title: "Chất lượng cao",
                left_2_desc:
                    "Một điều rất quan trọng đối với chúng tôi là hạt tiêu không bị phun thuốc trừ sâu.",
                left_3_title: "An toàn",
                left_3_desc:
                    "Một điều rất quan trọng đối với chúng tôi là hạt tiêu không bị phun thuốc trừ sâu.",
                left_4_title: "Con người là trung tâm",
                left_4_desc:
                    "Chúng tôi quan tâm phát triển tinh thần đồng đội và nâng cao chất lượng sống của mỗi thành viên trong công ty.",

                right_1_title: "Gia vị hữu cơ",
                right_1_desc: "100% Tiêu sọ hữu cơ, dùng làm gia vị trong các món ăn",
                right_2_title: "Gia vị tự nhiên",
                right_2_desc: "100% Tiêu sọ hữu cơ, dùng làm gia vị trong các món ăn",
                right_3_title: "Gia vị kết hợp",
                right_3_desc: "100% Tiêu sọ hữu cơ, dùng làm gia vị trong các món ăn",
                right_4_title: "Lá gia vị",
                right_4_desc: "100% Tiêu sọ hữu cơ, dùng làm gia vị trong các món ăn",
                core_values: "GIÁ TRỊ CỐT LÕI",
                intro_quality_title: "Sự phát triển từ chất lượng",
                intro_quality_desc: "Chúng tôi yêu gia vị của Việt Nam và rất mong muốn đưa sản phẩm chất lượng cao ra toàn thế giới. Với niềm đam mê trong công việc và sự hiểu biết sâu sắc về nền nông nghiệp Việt Nam, sản lượng xuất khẩu của công ty đã tăng mạnh hàng năm và đạt nhiều thành tựu.",
                intro_quality_alt: "Chất lượng tiêu",
                intro_origin_title: "Nguồn gốc gia vị sạch",
                intro_origin_desc: "Nhà máy chúng tôi đặt tại trung tâm cung cấp nguyên liệu lớn nhất tại Việt Nam và hoàn toàn chủ động nguyên liệu. Sản lượng tiêu được thu hoạch từ các nông trại tại Gia Lai và Đắk Lắk, đảm bảo chất lượng và vệ sinh an toàn thực phẩm.",
                intro_origin_alt: "Nguồn gốc gia vị sạch",
                see_now: "XEM NGAY",
                high_quality_products: "Sản phẩm đạt chất lượng cao",
                clean_safe_foods: "Thực phẩm sạch & An Toàn",
                all: "Tất cả",
                rice: "Gạo",
                pasta: "Nui",
                vermicelli: "Bún",
                banh_canh: "Bánh Canh",
                hu_tieu: "Hủ Tiếu",
                pho: "Phở",
                no_products: "Không có sản phẩm nào trong danh mục này.",
                details_packaging: "CHI TIẾT VÀ ĐÓNG GÓI",
                sani_products: "Sản phẩm SANI",
                pepper_alt: "Hạt tiêu đen",
                safe: "An toàn",
                safe_desc: "Một điều rất quan trọng đối với chúng tôi là hạt tiêu không bị phun thuốc trừ sâu.",
                clean_products: "Sản phẩm sạch",
                clean_products_desc: "Một điều rất quan trọng đối với chúng tôi là hạt tiêu không bị phun thuốc trừ sâu.",
                packaging: "Đóng gói",
                packaging_desc: "Chúng tôi rất vui khi gửi cho các bạn những mẫu tiêu chất lượng được đóng gói sạch đẹp.",
                featured_products: "Sản phẩm nổi bật",
                our_private_brand: "NHÃN HÀNG RIÊNG CỦA CHÚNG TÔI",
                view_all_private_brand: "XEM TẤT CẢ NHÃN HÀNG RIÊNG CỦA CHÚNG TÔI",
                latest_posts: "Bài viết mới nhất",
                read_more: "Xem thêm",
                newsletter: {
                    subtitle: "Để cập nhật những sản phẩm mới, nhận thông tin ưu đãi đặc biệt và thông tin giảm giá khác.",
                    title: "Đăng ký nhận bản tin",
                    placeholder: "Nhập email của bạn",
                    button: "ĐĂNG KÝ"
                },
                sort: {
                    newest: "Mới nhất",
                    oldest: "Cũ nhất",
                    priceAsc: "Giá: Tăng dần",
                    priceDesc: "Giá: Giảm dần",
                    az: "Tên: A-Z",
                    za: "Tên: Z-A",
                    bestseller: "Bán chạy nhất"
                },
                categories: {
                    all: "Tất cả",
                    gao: "Gạo",
                    nui: "Nui",
                    banhcanh: "Bánh Canh",
                    bun: "Bún",
                    pho: "Phở",
                    hutieu: "Hủ Tiếu"
                },
                productPage: {
                    allProducts: "Tất cả sản phẩm",
                    products: "sản phẩm",
                    sortBy: "Sắp xếp theo",
                    loading: "Đang tải sản phẩm..."
                },
                contact: {
                    sendQuestion: "Gửi thắc mắc cho chúng tôi",
                    description:
                        "Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể.",
                    name: "Tên của bạn",
                    email: "Email của bạn",
                    phone: "Số điện thoại của bạn",
                    message: "Nội dung",
                    submit: "GỬI CHO CHÚNG TÔI",
                    thankYou: "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.",
                    recaptcha:
                        "Trang này được bảo vệ bởi reCAPTCHA và áp dụng Chính sách bảo mật và Điều khoản dịch vụ của Google.",
                    contactInfo: "Thông tin liên hệ",
                    address: "Địa chỉ",
                    phoneLabel: "Điện thoại",
                    workingHours: "Thời gian làm việc",
                    emailLabel: "Email",
                    addressDetail:
                        "151/24A Đường Tam Châu, Khu Phố 2, Phường Tam Bình, TP Hồ Chí Minh",
                    phoneNumber: "1900.000.XXX",
                    workingDetail:
                        "Thứ 2 đến Thứ 6: từ 8h00 đến 18h00\nThứ 7 và Chủ nhật: từ 8h00 đến 17h00",
                    email: "hi@sani.com",
                },
                intro: {
                    subtitle: "Giới thiệu",
                    title: "VỀ SANI",
                    desc1: "Lorem ipsum dolor sit amet...",
                    desc2: "Aut eveniet quisquam est saepe dicta...",
                    button: "XEM CHI TIẾT",
                    quality: {
                      title: "Chất lượng sản phẩm",
                      title1: "Tiêu đề 1",
                      desc1: "Mô tả chất lượng 1",
                      title2: "Tiêu đề 2",
                      desc2: "Mô tả chất lượng 2",
                      title3: "Tiêu đề 3",
                      desc3: "Mô tả chất lượng 3",
                      title4: "Tiêu đề 4",
                      desc4: "Mô tả chất lượng 4",
                      title5: "Tiêu đề 5",
                      desc5: "Mô tả chất lượng 5",
                      title6: "Tiêu đề 6",
                      desc6: "Mô tả chất lượng 6",
                    },
                    about: {
                      title: "Về chúng tôi",
                      item1: { title: "Tiêu đề 1", desc: "Mô tả 1" },
                      item2: { title: "Tiêu đề 2", desc: "Mô tả 2" },
                    },
                  },
                  newsList: {
                    title: "Tin tức",
                    latestPosts: "Bài viết mới nhất",
                    by: "bởi",
                    error: "Không thể tải dữ liệu bài viết.",
                  },
                  menu: {
                    home: "Trang chủ",
                    products: "Sản phẩm",
                    about: "Giới thiệu",
                    news: "Tin tức - Bài viết",
                    contact: "Liên hệ",
                  },
            },

        },
        en: {
            translation: {
                // HEADER
                home: "Home",
                products: "Products",
                about: "About Us",
                news: "News & Articles",
                contact: "Contact",

                // FEATURES
                feature_growth_title: "Growth",
                feature_growth_desc:
                    "We love Vietnamese spices and aim to bring high-quality products worldwide. With passion for our work and deep understanding of Vietnamese agriculture.",
                feature_origin_title: "Origin",
                feature_origin_desc:
                    "Our factory is located in the largest raw material supply center in Vietnam, giving us full control over the source of materials.",
                feature_factory_title: "Production",
                feature_factory_desc:
                    "Our factory applies the latest technology, with automated production lines and fully equipped laboratories. We practice fair trade to ensure stable and high quality.",
                feature_quality_title: "Quality",
                feature_quality_desc:
                    "We are committed to providing pepper products that meet international standards, avoiding intermediaries to strictly control quality from farm to market.",

                // PRODUCTS SECTION
                core_values: "CORE VALUES",
                core_values_subtitle: "WHAT MATTERS MOST TO SANI",

                left_1_title: "Passion",
                left_1_desc:
                    "We love our business and our spice products.",
                left_2_title: "High Quality",
                left_2_desc:
                    "It is very important to us that our pepper is not sprayed with pesticides.",
                left_3_title: "Safety",
                left_3_desc:
                    "It is very important to us that our pepper is not sprayed with pesticides.",
                left_4_title: "People First",
                left_4_desc:
                    "We care about teamwork development and improving the quality of life for every member of our company.",

                right_1_title: "Organic Spices",
                right_1_desc: "100% Organic white pepper, used as a spice in dishes",
                right_2_title: "Natural Spices",
                right_2_desc: "100% Organic white pepper, used as a spice in dishes",
                right_3_title: "Blended Spices",
                right_3_desc: "100% Organic white pepper, used as a spice in dishes",
                right_4_title: "Spice Leaves",
                right_4_desc: "100% Organic white pepper, used as a spice in dishes",
                core_values: "CORE VALUES",
                intro_quality_title: "Growth from Quality",
                intro_quality_desc: "We love Vietnamese spices and are eager to bring high–quality products to the world. With passion for our work and deep understanding of Vietnam's agriculture, our company’s exports have grown strongly every year and achieved many milestones.",
                intro_quality_alt: "Pepper Quality",
                intro_origin_title: "Origin of Clean Spices",
                intro_origin_desc: "Our factory is located in the largest raw material supply center in Vietnam, giving us full control over sourcing. The pepper is harvested from farms in Gia Lai and Đắk Lắk, ensuring top quality and food safety standards.",
                intro_origin_alt: "Clean Spice Origin",
                see_now: "SEE NOW",
                high_quality_products: "High-quality Products",
                clean_safe_foods: "Clean & Safe Foods",
                all: "All",
                rice: "Rice",
                pasta: "Pasta",
                vermicelli: "Vermicelli",
                banh_canh: "Banh Canh",
                hu_tieu: "Hu Tieu",
                pho: "Pho",
                no_products: "No products found in this category.",
                details_packaging: "DETAILS & PACKAGING",
                sani_products: "SANI Products",
                pepper_alt: "Black Pepper",
                safe: "Safe",
                safe_desc: "It is very important to us that our pepper is not sprayed with pesticides.",
                clean_products: "Clean Products",
                clean_products_desc: "It is very important to us that our pepper is not sprayed with pesticides.",
                packaging: "Packaging",
                packaging_desc: "We are pleased to deliver high-quality pepper samples with clean and neat packaging.",
                featured_products: "Featured Products",
                our_private_brand: "OUR PRIVATE BRAND",
                view_all_private_brand: "VIEW ALL OUR PRIVATE BRAND PRODUCTS",
                latest_posts: "Latest Posts",
                read_more: "Read more",
                newsletter: {
                    subtitle: "Stay updated with new products, special offers, and discount information.",
                    title: "Subscribe to our Newsletter",
                    placeholder: "Enter your email",
                    button: "SUBSCRIBE"
                },
                sort: {
                    newest: "Newest",
                    oldest: "Oldest",
                    priceAsc: "Price: Low to High",
                    priceDesc: "Price: High to Low",
                    az: "Name: A-Z",
                    za: "Name: Z-A",
                    bestseller: "Bestseller"
                },
                categories: {
                    all: "All",
                    gao: "Rice",
                    nui: "Pasta",
                    banhcanh: "Thick Noodles",
                    bun: "Vermicelli",
                    pho: "Pho",
                    hutieu: "Hu Tieu"
                },
                productPage: {
                    allProducts: "All Products",
                    products: "products",
                    sortBy: "Sort by",
                    loading: "Loading products..."
                },
                contact: {
                    sendQuestion: "Send us your inquiry",
                    description:
                        "If you have any questions, feel free to send us your request, and we will get back to you as soon as possible.",
                    name: "Your name",
                    email: "Your email",
                    phone: "Your phone number",
                    message: "Message",
                    submit: "SEND TO US",
                    thankYou: "Thank you for contacting us! We will respond as soon as possible.",
                    recaptcha:
                        "This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.",
                    contactInfo: "Contact Information",
                    address: "Address",
                    phoneLabel: "Phone",
                    workingHours: "Working Hours",
                    emailLabel: "Email",
                    addressDetail:
                        "151/24A Tam Chau Street, Quarter 2, Tam Binh Ward, Thu Duc City, Ho Chi Minh City",
                    phoneNumber: "+84 1900.000.XXX",
                    workingDetail:
                        "Mon - Fri: 8:00 AM - 6:00 PM\nSat & Sun: 8:00 AM - 5:00 PM",
                    email: "hi@powerdrink.com",
                },
                intro: {
                    subtitle: "Introduction",
                    title: "ABOUT SANI",
                    desc1: "Lorem ipsum dolor sit amet...",
                    desc2: "Aut eveniet quisquam est saepe dicta...",
                    button: "SEE DETAILS",
                    quality: {
                      title: "Product Quality",
                      title1: "Title 1",
                      desc1: "Quality description 1",
                      title2: "Title 2",
                      desc2: "Quality description 2",
                      title3: "Title 3",
                      desc3: "Quality description 3",
                      title4: "Title 4",
                      desc4: "Quality description 4",
                      title5: "Title 5",
                      desc5: "Quality description 5",
                      title6: "Title 6",
                      desc6: "Quality description 6",
                    },
                    about: {
                      title: "About Us",
                      item1: { title: "Title 1", desc: "Description 1" },
                      item2: { title: "Title 2", desc: "Description 2" },
                    },
                  },
                  newsList: {
                    title: "News",
                    latestPosts: "Latest Posts",
                    by: "by",
                    error: "Failed to load news posts.",
                  },
                  menu: {
                    home: "Home",
                    products: "Products",
                    about: "About",
                    news: "News & Articles",
                    contact: "Contact",
                  },
            },
        },
    },
    lng: "vi",
    fallbackLng: "vi",
    interpolation: { escapeValue: false },
})

export default i18n
