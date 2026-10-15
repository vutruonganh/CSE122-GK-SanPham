PetCompanion – Cổng Huấn Luyện Viên (Trainer Portal)

Học phần: Phát triển ứng dụng Web cơ bản – CSE122

Bài kiểm tra giữa kỳ: Nộp sản phẩm đơn trang (Single-page implementation) từ bản thiết kế Figma.

1.Thông Tin Dự Án

Tên đề tài BTL: PetCompanion – Hệ thống quản lý & Chăm sóc thú cưng toàn diện

Tên trang thực hiện: Trang Quản lý Kế hoạch Huấn luyện & Lộ trình Đào tạo Hành vi (index.html)

Đối tượng sử dụng: Huấn luyện viên thú cưng (Trainers / Behaviorists)

Mục đích của trang:
Xây dựng và quản lý các giáo án huấn luyện cá nhân hóa theo từng giống loài, độ tuổi và mục tiêu rèn luyện cho thú cưng bằng phương pháp phản hồi tích cực (Positive Reinforcement). Trang giúp huấn luyện viên theo dõi tiến trình bài tập, giao việc về nhà cho chủ nuôi và đánh giá chất lượng rèn luyện.

2.Các Chức Năng Chính

Thống kê nhanh (KPI Dashboard):

Tìm kiếm thú cưng tự động (JavaScript Dynamic Search):

Render danh sách kế hoạch động (Dynamic Data Rendering):

Giao diện chuẩn Responsive Design:

3.Công Nghệ Sử Dụng

HTML5:

Cấu trúc chuẩn Semantic HTML (main, header, section, article, nav).

Áp dụng các thuộc tính WAI-ARIA (aria-label, aria-hidden, aria-current) giúp tăng tính truy cập.

CSS3:

Quản lý màu sắc và giao diện tập trung bằng CSS Variables (:root).

Bố cục linh hoạt kết hợp CSS Grid (cho thẻ KPI & danh sách bài tập) và Flexbox (cho toolbar & thanh điều hướng).

Sử dụng Google Fonts (Be Vietnam Pro, Manrope) và bộ icon Material Symbols Outlined.

JavaScript (ES6+):

Xử lý DOM Manipulation (querySelector, getElementById, innerHTML).

Lắng nghe sự kiện gõ bàn phím (input event listener).

Thuật toán lọc mảng (Array.prototype.filter(), Array.prototype.map()) và chuẩn hóa chuỗi Unicode (normalize("NFD")).


4.Đường Dẫn Liên Kết

Link Thiết kế Figma: 

Link Video Youtube Demo: https://youtu.be/HchwCoRP_XY

Link GitHub Repository: https://github.com/vutruonganh/CSE122-GK-SanPham/tree/main/js
