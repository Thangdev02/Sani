// data.js
export const products = [
    {
      id: "1",
      name: "Bột tỏi nguyên chất Vipep 600g - bột gia vị tiện lợi dễ thấm cho món ăn đậm đà, thơm ngon chuẩn vị",
      category: "gao",
      price: 151000,
      oldPrice: 167000,
      discount: 10,
      image: "/images/products/product1.jpg",
      description: "Bột tỏi nguyên chất Vipep được làm từ tỏi khô nghiền mịn, tiện lợi trong nấu ăn, giúp món ăn thêm thơm ngon và đậm đà.",
      returnPolicy: "Đổi trả trong 7 ngày nếu sản phẩm lỗi hoặc hư hỏng.",
      termsOfService: "Sản phẩm được sản xuất theo tiêu chuẩn vệ sinh an toàn thực phẩm. Khách hàng vui lòng kiểm tra trước khi sử dụng.",
      faq: "Hỏi: Bột tỏi có bị mất hương không? Đáp: Bột tỏi được đóng gói kín nên vẫn giữ nguyên hương vị tự nhiên."
    },
    {
      id: "2",
      name: "Combo Muối Hồng Himalaya Xay Nhuyễn 1.1kg + Muối Hồng Nguyên Hạt Cối Xay Vipep 120gr",
      category: "nui",
      price: 99000,
      image: "/images/products/product2.jpg",
      description: "Muối hồng Himalaya Vipep được xay nhuyễn hoàn toàn từ 100% muối hồng Himalaya tự nhiên và được đóng gói an toàn.",
      returnPolicy: "Đổi trả trong 7 ngày nếu sản phẩm lỗi hoặc hư hỏng.",
      termsOfService: "Sản phẩm nhập khẩu chính hãng, có giấy chứng nhận chất lượng.",
      faq: "Hỏi: Muối hồng có dùng để tắm được không? Đáp: Có, muối hồng có thể dùng cho cả nấu ăn và spa."
    },
    {
      id: "3",
      name: "Combo tẩm ướp nấu ăn tỏi bột, sả bột, hành bột, ngủ vị hương thơm ngon tự nhiên - Gia vị Vipep",
      category: "bun",
      price: 116000,
      image: "/images/products/product3.jpg",
      description: "Combo gia vị tẩm ướp đa năng giúp chế biến món ăn nhanh chóng, tiện lợi, giữ được hương vị tự nhiên.",
      returnPolicy: "Đổi trả trong 7 ngày nếu sản phẩm lỗi hoặc hư hỏng.",
      termsOfService: "Không hoàn tiền khi sản phẩm đã được mở bao bì.",
      faq: "Hỏi: Có thể dùng combo này cho thịt nướng không? Đáp: Có, rất phù hợp."
    },
    {
      id: "4",
      name: "Gói Gia Vị Xốt Phở Trộn 82g",
      category: "pho",
      price: 129000,
      image: "/images/products/product4.jpg",
      description: "Gia vị Xốt Phở Trộn giúp món phở trở nên đậm đà và tiện lợi hơn, phù hợp cho bữa ăn nhanh.",
      returnPolicy: "Đổi trả trong 7 ngày nếu sản phẩm lỗi hoặc hư hỏng.",
      termsOfService: "Không hoàn tiền khi sản phẩm đã được sử dụng.",
      faq: "Hỏi: Có thể dùng cho phở xào không? Đáp: Có, sử dụng rất hợp vị."
    },
    {
      id: "5",
      name: "Lá Kinh Giới Vipep Hũ Nhựa 6g - Gia vị Vipep",
      category: "hutieu",
      price: 27000,
      oldPrice: 30000,
      discount: 10,
      image: "/images/products/product5.jpg",
      description: "Lá Kinh Giới Vipep được sấy khô, đóng gói trong hũ nhựa tiện lợi, giữ trọn hương vị đặc trưng.",
      returnPolicy: "Đổi trả trong 7 ngày nếu sản phẩm lỗi hoặc hư hỏng.",
      termsOfService: "Sản phẩm đã mở nắp sẽ không được đổi trả.",
      faq: "Hỏi: Lá Kinh Giới có giữ được mùi thơm lâu không? Đáp: Có, nhờ công nghệ sấy khô hiện đại."
    },
    {
      id: "6",
      name: "Muối Trắng Hymalaya Vipep Nguyên Hạt Hũ Nhựa 500g - Gia vị Vipep",
      category: "banhcanh",
      price: 47000,
      oldPrice: 53000,
      discount: 11,
      image: "/images/products/product6.jpg",
      description: "Muối trắng Hymalaya nguyên hạt, dùng trong nấu ăn và bảo quản thực phẩm.",
      returnPolicy: "Đổi trả trong 7 ngày nếu sản phẩm lỗi hoặc hư hỏng.",
      termsOfService: "Sản phẩm có thể đổi trả nếu còn nguyên bao bì.",
      faq: "Hỏi: Muối trắng khác muối hồng thế nào? Đáp: Muối trắng ít khoáng chất hơn muối hồng."
    }
  ];
  
  export const posts = [
    {
      id: "1",
      title: "Hạt tiêu - Loại gia vị bé nhỏ mà bùng nổ hương vị ấm nồng",
      excerpt: "Hạt tiêu tuy nhỏ bé nhưng lại mang trong mình vị cay nồng ấm, cùng với mùi hương rất đặc trưng...",
      date: "2024-11-15",
      author: "Pepper Black",
      image: "/images/blog1.jpg",
      sections: [
        {
          heading: "Hạt tiêu là gì?",
          content: "Hạt tiêu là quả của cây hồ tiêu. Loài cây này có thân dạng dây leo, mọc thành đốt. Ở mỗi đốt lại mọc rễ để cây có thể bám và leo lên cột, giàn. Lá hồ tiêu có điểm tương đồng với lá trầu nhưng bé hơn, cứng và dày hơn. ",
          image: "https://file.hstatic.net/200000666963/file/screenshot_2024-11-15_at_11.41.36_eac376edacc24998a1d9f79fa3cfe3fe.png"
        },
        {
          heading: "Hạt tiêu xuất hiện từ khi nào?",
          content: "Cây hồ tiêu được người Ấn Độ phát hiện ra cách đây khoảng 2000 năm trước Công Nguyên, tại những khu rừng hoang phía Tây Nam nước này (vùng Assam và Ghats). Thời điểm đó, đây được coi là cống phẩm quý giá dâng lên vua chúa, thậm chí họ còn dùng tiêu để bồi thường thiệt hại chiến tranh. ",
          image: "https://file.hstatic.net/200000666963/file/blog2-4_16c7bad9057843c7984f9b558f8b678d.jpg"
        },
        {
          heading: "Việt Nam có bao nhiêu loại tiêu?",
          content: "Việt Nam có 5 loại tiêu phổ biến: tiêu đen, tiêu xanh, tiêu trắng, tiêu hồng và tiêu mắc khén Tây Bắc.",
          image: "https://file.hstatic.net/200000666963/file/blog1_de45e70216b446a39c42c38f428a608a.jpg"
        },
        {
          heading: "Công dụng của hạt tiêu",
          content: "Hạt tiêu giúp tăng hương vị, hỗ trợ tiêu hóa và có tác dụng kháng khuẩn.",
          image: null
        },
        {
          heading: "Hạt tiêu trong ẩm thực Việt",
          content: "Trong bữa ăn hàng ngày, hạt tiêu là gia vị không thể thiếu...",
          image: "https://file.hstatic.net/200000666963/file/blog2-4_16c7bad9057843c7984f9b558f8b678d.jpg"
        }
      ]
    },
    {
      id: "2",
      title: "Khám phá hạt tiêu - Vua của các loại gia vị",
      excerpt: "Đối với một nền ẩm thực chú trọng về sự hài hòa hương vị và tính cân bằng, hạt tiêu chính là lựa chọn tuyệt vời...",
      date: "2024-11-15",
      author: "Pepper Black",
      image: "/images/blog2.jpg",
      sections: [
        {
          heading: "Giới thiệu",
          content: "Hạt tiêu được xem là vua của gia vị nhờ hương thơm đặc trưng và công dụng tuyệt vời.",
          image: "/images/detail4.jpg"
        },
        {
          heading: "Nguồn gốc",
          content: "Nguồn gốc hạt tiêu bắt đầu từ Ấn Độ và lan rộng khắp thế giới...",
          image: null
        }
      ]
    },
]
  