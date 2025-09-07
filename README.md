# Harvard CV Generator

Ứng dụng web tạo CV chuẩn Harvard chuyên nghiệp với khả năng xuất PDF.

## Tính năng

- ✅ Form nhập thông tin CV đầy đủ và dễ sử dụng
- ✅ Template CV chuẩn Harvard chuyên nghiệp
- ✅ Xem trước CV trước khi xuất
- ✅ Xuất CV định dạng PDF chất lượng cao
- ✅ Giao diện đơn giản, không màu mè
- ✅ Responsive design, tương thích mobile

## Các phần thông tin CV

### Thông tin cá nhân
- Họ và tên (bắt buộc)
- Email (bắt buộc)
- Số điện thoại (bắt buộc)
- Địa chỉ
- LinkedIn
- Website cá nhân

### Mục tiêu nghề nghiệp
- Mô tả ngắn gọn về mục tiêu nghề nghiệp

### Học vấn
- Bằng cấp (bắt buộc)
- Tên trường (bắt buộc)
- Năm tốt nghiệp (bắt buộc)
- GPA (tùy chọn)
- Thành tích nổi bật

### Kinh nghiệm làm việc
- Vị trí công việc (bắt buộc)
- Tên công ty (bắt buộc)
- Thời gian làm việc (bắt buộc)
- Mô tả công việc (bắt buộc)

### Kỹ năng
- Danh sách kỹ năng chuyên môn

### Chứng chỉ
- Tên chứng chỉ (bắt buộc)
- Tổ chức cấp (bắt buộc)
- Ngày cấp
- Mã chứng chỉ

### Dự án nổi bật
- Tên dự án (bắt buộc)
- Mô tả dự án (bắt buộc)
- Công nghệ sử dụng
- Link dự án

### Ngôn ngữ
- Danh sách ngôn ngữ và trình độ

### Sở thích
- Sở thích cá nhân (tùy chọn)

## Cách sử dụng

1. **Mở ứng dụng**: Mở file `index.html` trong trình duyệt web
2. **Điền thông tin**: Điền đầy đủ các thông tin bắt buộc (có dấu *)
3. **Thêm thông tin**: Sử dụng các nút "+ Thêm..." để thêm nhiều mục học vấn, kinh nghiệm, chứng chỉ, dự án
4. **Xem trước**: Nhấn "Xem trước" để kiểm tra CV trước khi xuất
5. **Tạo PDF**: Nhấn "Tạo CV PDF" để tải xuống file PDF

## Yêu cầu hệ thống

- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- Kết nối internet (để tải thư viện jsPDF)

## Công nghệ sử dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Styling và layout
- **JavaScript (ES6+)**: Logic xử lý và tương tác
- **jsPDF**: Thư viện tạo PDF từ JavaScript

## Cấu trúc dự án

```
harvard-cv-generator-online/
├── index.html          # Trang chính
├── styles.css          # CSS styling
├── script.js           # JavaScript logic
└── README.md           # Hướng dẫn sử dụng
```

## Tính năng nâng cao

### Validation
- Kiểm tra các trường bắt buộc
- Validate định dạng email và URL
- Kiểm tra số lượng tối thiểu các mục

### Responsive Design
- Tương thích với màn hình desktop và mobile
- Layout tự động điều chỉnh theo kích thước màn hình

### PDF Export
- Chất lượng PDF cao
- Font chữ chuẩn Harvard
- Layout chuyên nghiệp
- Tự động xuống dòng và chia trang

## Lưu ý

- File PDF sẽ được tải xuống với tên: `[Họ_tên]_CV.pdf`
- Đảm bảo điền đầy đủ thông tin bắt buộc trước khi xuất PDF
- Ứng dụng hoạt động hoàn toàn trên client-side, không cần server

## Hỗ trợ

Nếu gặp vấn đề, vui lòng kiểm tra:
1. Trình duyệt có hỗ trợ JavaScript không
2. Kết nối internet có ổn định không
3. Có điền đầy đủ thông tin bắt buộc không

## Phiên bản

- **v1.0.0**: Phiên bản đầu tiên với đầy đủ tính năng cơ bản
