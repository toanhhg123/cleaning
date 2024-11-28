# Hướng Dẫn Chạy Dự Án

Dự án bao gồm 3 thành phần chính:

- **Backend**: Ứng dụng Spring Boot viết bằng Java 21.
- **Frontend**: Ứng dụng giao diện người dùng viết bằng Node.js 20.9.0.
- **Admin**: Hệ thống quản trị sử dụng `pnpm`.

## Yêu Cầu Cài Đặt

Đảm bảo bạn đã cài đặt các công cụ sau:

- **Java 21**  
  Tải và cài đặt từ [trang chính thức của Java](https://www.oracle.com/java/technologies/javase-downloads.html).
- **Node.js 20.9.0**  
  Tải và cài đặt từ [trang chính thức của Node.js](https://nodejs.org/).
- **pnpm**  
  Cài đặt toàn cục thông qua `npm`:
  ```bash
  npm install -g pnpm
  ```

## Cấu Trúc Dự Án

```plaintext
src/
├── frontend/  # Ứng dụng giao diện người dùng
├── admin/     # Ứng dụng quản trị
└── backend/   # Dịch vụ API

cd backend

./mvnw clean install

```
