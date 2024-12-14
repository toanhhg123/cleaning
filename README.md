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


## restore database

```
docker compose up -d
docker exec -i postgres-postgres-1 psql -U root -d postgres < ./backup.sql
```



## run src

```
// chạy src 
vào folder backend > AppAplication > run

// chạy src admin > mở gitbash
cd admin
npm install -g pnpm 
pnpm install
pnpm dev

// chay src frontend > mở gitbash
cd frontend
npm install
npm run dev
```


# Backend
## Các Thư Viện Chính trong Spring Boot với JPA và Security (JWT)

### 1. Spring Boot Starter Web
**Dependency:**
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```


#### Các Chức Năng Chính của Spring Boot Starter Web

##### 1. Xử lý HTTP Request/Response
- **Tiếp nhận và xử lý yêu cầu HTTP từ client.**  
- **Trả về phản hồi HTTP cho client.**

---

##### 2. RESTful APIs
- **Xây dựng API theo kiến trúc RESTful.**  
- **Hỗ trợ các phương thức HTTP** như:
  - `GET`
  - `POST`
  - `PUT`
  - `DELETE`
  - Và nhiều phương thức khác.

---

#### 3. Web MVC Framework (Spring MVC)
- **Cung cấp framework để xây dựng ứng dụng web theo mô hình MVC (Model-View-Controller).**  
- **Hỗ trợ việc quản lý và xử lý yêu cầu HTTP.**

---

#### 4. Tự động Cấu Hình Các Thành Phần
- **Tự động cấu hình các thành phần quan trọng như:**
  - `DispatcherServlet` (Xử lý luồng yêu cầu trong Spring MVC).
  - `HttpMessageConverters` (Chuyển đổi dữ liệu giữa HTTP request/response và các đối tượng Java).
  - Và **nhiều thành phần khác** hỗ trợ hoạt động của ứng dụng.


### 2. Spring Boot Starter Security
**Dependency:**
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```



## Các Chức Năng Chính của Spring Boot Starter Security

### 1. Authentication (Xác thực)
- **Xác minh danh tính của người dùng.**
- **Hỗ trợ nhiều phương thức xác thực như:**
  - **Username & Password** (Form-based authentication).
  - **Basic Authentication** (Sử dụng tiêu đề HTTP).
  - **JWT (JSON Web Token)**.
  - **OAuth2**.

---

### 2. Authorization (Phân quyền)
- **Kiểm tra quyền truy cập tài nguyên dựa trên vai trò hoặc quyền của người dùng.**
- **Hỗ trợ phân quyền dựa trên:**
  - **Role** (vai trò).
  - **Custom permissions** (quyền tuỳ chỉnh).

---

### 3. Bảo mật Endpoint
- **Cung cấp khả năng bảo vệ các endpoint trong ứng dụng:**
  - **Cấu hình bảo mật cho từng đường dẫn cụ thể.**
  - **Định nghĩa chính sách truy cập như:**
    - `permitAll()` (Cho phép truy cập tự do).
    - `authenticated()` (Yêu cầu xác thực trước khi truy cập).

---

### 4. Tự động Cấu Hình Các Thành Phần
- **Tự động cấu hình các thành phần quan trọng như:**
  - `SecurityFilterChain` (Hệ thống bộ lọc bảo mật).
  - `AuthenticationManager` (Quản lý xác thực).
  - `PasswordEncoder` (Mã hóa mật khẩu).
  - Và **nhiều thành phần khác** để hỗ trợ bảo mật.


## Giới Thiệu Các Công Nghệ Frontend được sử dụng ở admin/client

### 1. React
#### **Mô tả**
- React là một thư viện JavaScript mã nguồn mở do Facebook phát triển.
- Được sử dụng để xây dựng giao diện người dùng (UI) tương tác và hiệu suất cao.
- Cấu trúc dựa trên **component** (thành phần), cho phép tái sử dụng mã.

#### **Tính năng chính**
- **Virtual DOM:** Cải thiện hiệu suất bằng cách cập nhật giao diện nhanh chóng.
- **Component-based Architecture:** Xây dựng ứng dụng từ các thành phần nhỏ, dễ quản lý.
- **Declarative Syntax:** Dễ dàng mô tả giao diện và trạng thái ứng dụng.
- **Strong Ecosystem:** Có thể kết hợp với các thư viện như Redux, React Router, và hơn thế nữa.

---

### 2. Ant Design (Antd)
#### **Mô tả**
- Ant Design là một thư viện giao diện người dùng (UI) mạnh mẽ và phong phú.
- Được phát triển bởi Alibaba, cung cấp các thành phần UI theo phong cách hiện đại và nhất quán.

#### **Tính năng chính**
- **Component Library:** Hơn 50+ thành phần UI như Button, Table, Modal, Form, v.v.
- **Customizable Theme:** Dễ dàng tùy chỉnh giao diện thông qua cấu hình chủ đề.
- **Responsive Design:** Hỗ trợ thiết kế giao diện đáp ứng (responsive) trên nhiều thiết bị.
- **Internationalization (i18n):** Hỗ trợ đa ngôn ngữ.

---

### 3. Bootstrap
#### **Mô tả**
- Bootstrap là một framework CSS mã nguồn mở, phổ biến để phát triển giao diện web nhanh chóng.
- Được phát triển bởi Twitter, tập trung vào khả năng responsive và thiết kế nhất quán.

#### **Tính năng chính**
- **Grid System:** Hệ thống lưới 12 cột hỗ trợ thiết kế responsive.
- **Pre-styled Components:** Bao gồm các thành phần được thiết kế sẵn như Button, Card, Navbar, Dropdown, v.v.
- **Customizable:** Cho phép tùy chỉnh thông qua SASS hoặc CSS.
- **Cross-browser Compatibility:** Tương thích tốt với nhiều trình duyệt.

```
frontend
├── README.md
├── config
│   └── axios.js
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
├── src
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── footer.jsx
│   │   └── header.jsx
│   ├── hooks
│   │   ├── useUser.js
│   │   └── useWallet.js
│   ├── main.jsx
│   ├── pages
│   │   ├── Contact.jsx
│   │   ├── Feedback.jsx
│   │   ├── about.jsx
│   │   ├── change-password.jsx
│   │   ├── home.jsx
│   │   ├── login.jsx
│   │   ├── my-orders.jsx
│   │   ├── my-works.jsx
│   │   ├── order-details.jsx
│   │   ├── orders.jsx
│   │   ├── payment-return.jsx
│   │   ├── profile.jsx
│   │   ├── project.jsx
│   │   ├── register.jsx
│   │   ├── service-detail.jsx
│   │   ├── service.jsx
│   │   └── wallet.jsx
│   └── service
│       ├── auth.js
│       ├── contact.js
│       ├── feedback.js
│       ├── order.js
│       ├── service.js
│       ├── serviceFeedback.js
│       ├── upload.js
│       ├── user.js
│       └── wallet.js
└── vite.config.js
```

## Giải Thích Cấu Trúc Thư Mục Frontend

### **1. Gốc thư mục (`frontend/`)**
Chứa các tệp và thư mục chính của ứng dụng frontend.

#### **1.1. README.md**
- Tệp mô tả dự án, bao gồm thông tin như cách cài đặt, sử dụng, hoặc các hướng dẫn liên quan.

#### **1.2. config/axios.js**
- Tệp cấu hình `axios` để thực hiện các yêu cầu HTTP trong ứng dụng, thường bao gồm cấu hình cơ sở URL, các interceptor, hoặc token.

#### **1.3. eslint.config.js**
- Cấu hình ESLint để đảm bảo mã nguồn tuân theo các quy tắc mã hóa đã đặt ra, giúp cải thiện chất lượng code.

#### **1.4. index.html**
- Tệp HTML chính, là nơi ứng dụng React được "mount" (chèn vào). Đây là điểm vào cho frontend.

#### **1.5. package-lock.json & package.json**
- **package.json:** Danh sách các dependency và script của dự án.
- **package-lock.json:** Ghi lại chi tiết phiên bản các dependency, đảm bảo tính nhất quán khi cài đặt.

#### **1.6. public/**
- Chứa các tài nguyên tĩnh như hình ảnh, favicon, hoặc các tệp tĩnh khác không được xử lý bởi webpack/vite.

---

### **2. src/**
Thư mục chứa mã nguồn chính của ứng dụng React.

#### **2.1. App.jsx**
- Thành phần gốc của ứng dụng React. Nơi cấu hình các thành phần con hoặc định tuyến.

#### **2.2. assets/**
- Chứa tài sản tĩnh như hình ảnh, biểu tượng, hoặc tệp CSS/JS dùng trong ứng dụng.

#### **2.3. components/**
- Chứa các thành phần UI tái sử dụng:
  - **header.jsx:** Thành phần hiển thị header của ứng dụng.
  - **footer.jsx:** Thành phần hiển thị footer của ứng dụng.

#### **2.4. hooks/**
- Chứa các custom hook, giúp tách logic ra khỏi giao diện:
  - **useUser.js:** Quản lý thông tin người dùng.
  - **useWallet.js:** Quản lý logic liên quan đến ví.

#### **2.5. main.jsx**
- Điểm vào chính của ứng dụng React, nơi `App.jsx` được render vào DOM.

#### **2.6. pages/**
- Chứa các thành phần giao diện (pages) tương ứng với từng chức năng:
  - **Contact.jsx:** Trang liên hệ.
  - **Feedback.jsx:** Trang phản hồi.
  - **home.jsx:** Trang chủ.
  - **login.jsx:** Trang đăng nhập.
  - **register.jsx:** Trang đăng ký.
  - **profile.jsx:** Trang thông tin cá nhân.
  - **wallet.jsx:** Trang quản lý ví tiền.
  - **my-orders.jsx:** Trang đơn hàng của tôi.
  - **order-details.jsx:** Trang chi tiết đơn hàng.
  - **service.jsx:** Trang dịch vụ.
  - **service-detail.jsx:** Trang chi tiết dịch vụ.
  - **payment-return.jsx:** Trang xử lý phản hồi sau khi thanh toán.
  - Và nhiều trang khác.

#### **2.7. service/**
- Chứa các tệp xử lý logic API, thường được gọi từ `axios.js`:
  - **auth.js:** Quản lý API liên quan đến xác thực.
  - **contact.js:** Quản lý API liên hệ.
  - **feedback.js:** Quản lý API phản hồi.
  - **order.js:** Quản lý API đơn hàng.
  - **service.js:** Quản lý API dịch vụ.
  - **upload.js:** Quản lý API tải lên tệp.
  - **user.js:** Quản lý API người dùng.
  - **wallet.js:** Quản lý API ví.

---

### **3. Vite Config (`vite.config.js`)**
- Tệp cấu hình cho Vite, một công cụ xây dựng frontend nhanh, hỗ trợ Hot Module Replacement (HMR) và tối ưu hóa quá trình phát triển.


# Hướng Dẫn Tích Hợp Thanh Toán VNPay với Java Spring Boot

## **Flow Thanh Toán VNPay**

1. **Người dùng yêu cầu thanh toán**:
   - Người dùng chọn phương thức thanh toán VNPay trên giao diện.

2. **Tạo URL thanh toán VNPay**:
   - Backend tạo URL thanh toán VNPay dựa trên các thông tin giao dịch.
   - Gửi yêu cầu đến API VNPay để lấy URL thanh toán.

3. **Chuyển hướng người dùng đến cổng thanh toán VNPay**:
   - Frontend chuyển hướng người dùng đến URL VNPay mà backend trả về.
   - Người dùng nhập thông tin và thực hiện thanh toán trên cổng VNPay.

4. **Xử lý callback từ VNPay**:
   - Sau khi thanh toán xong, VNPay gọi API callback của bạn để gửi kết quả giao dịch.
   - Backend kiểm tra chữ ký (checksum) và trạng thái giao dịch để xác nhận giao dịch.

5. **Hiển thị kết quả cho người dùng**:
   - Backend trả về kết quả giao dịch cho frontend.
   - Frontend hiển thị kết quả thanh toán thành công hoặc thất bại cho người dùng.

---

## **Hướng Dẫn Thực Hiện**

### **1. Cấu hình các thông tin cần thiết**
Bạn cần thông tin cấu hình từ VNPay:
- `vnp_TmnCode`: Mã terminal của bạn.
- `vnp_HashSecret`: Chuỗi bí mật dùng để tạo chữ ký.
- `vnp_PayUrl`: URL API thanh toán VNPay.
- `vnp_ReturnUrl`: URL để người dùng quay lại sau khi thanh toán.

# Tích Hợp Thanh Toán VNPay với Java Spring Boot

## 1. Tạo Đơn Hàng và URL Thanh Toán

### Code
```java
@PostMapping(path = "/vn-pay")
public String createOrder(
        @RequestBody() PaymentRequest paymentRequest,
        HttpServletRequest request)
        throws JsonProcessingException {
    String baseUrl = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort();

    paymentRequest.setUserId(userService.getCurrentUser().getId().toString());

    // Convert the payment request to a JSON string
    ObjectMapper objectMapper = new ObjectMapper();
    String body = objectMapper.writeValueAsString(paymentRequest);

    // Create the order and get the redirection URL
    return paymentService.createOrder(paymentRequest.getAmount(), body, baseUrl);
}
```

### **Giải Thích**

#### **Mục Đích**  
Xử lý yêu cầu từ phía client để tạo đơn hàng và trả về URL thanh toán VNPay.

#### **Chi Tiết**  
1. **Lấy thông tin URL server**:  
   - Bao gồm `scheme`, tên miền, và cổng, được sử dụng để cấu hình `baseUrl`.

2. **Thêm thông tin người dùng**:  
   - Lấy `userId` của người dùng hiện tại thông qua `userService.getCurrentUser()` và gán vào `PaymentRequest`.

3. **Chuyển đổi dữ liệu**:  
   - Sử dụng `ObjectMapper` để chuyển đổi đối tượng `PaymentRequest` thành chuỗi JSON.

4. **Tạo đơn hàng**:  
   - Gọi phương thức `paymentService.createOrder()` để tạo đơn hàng với các tham số:
     - `paymentRequest.getAmount()`: Số tiền cần thanh toán.
     - `body`: Chuỗi JSON chứa thông tin đơn hàng.
     - `baseUrl`: Đường dẫn gốc của server.

#### **Kết Quả**  
- Trả về URL từ VNPay để frontend chuyển hướng người dùng đến trang thanh toán.
```java

 @GetMapping(path = "/vnpay-payment")
    public void returnOrder(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // Convert the payment request parameter to a JSON string
        ObjectMapper objectMapper = new ObjectMapper();

        // Parse the JSON string to a PaymentRequest object
        PaymentRequest paymentRequest = objectMapper.readValue(
                request.getParameter("vnp_OrderInfo"),
                PaymentRequest.class);
        log.info("payment request: {}", paymentRequest.toString());

        // Process the payment return
        int result = paymentService.orderReturn(request, paymentRequest);

        // Process the payment return
        String clientUrl = result == 1
                ? "http://localhost:5173/payment-return?type=success"
                : "http://localhost:5173/payment-return?type=fail";

        response.sendRedirect(clientUrl);
    }
```

### Giải Thích

#### Mục Đích
Xử lý thông tin callback từ VNPay sau khi người dùng hoàn tất thanh toán.

#### Chi Tiết
1. **Lấy Thông Tin Callback**:
   - Lấy tham số `vnp_OrderInfo` từ request callback và chuyển thành chuỗi JSON.

2. **Chuyển Đổi Dữ Liệu**:
   - Dùng `ObjectMapper` để parse JSON thành đối tượng `PaymentRequest`.

3. **Kiểm Tra Trạng Thái Giao Dịch**:
   - Gọi phương thức `paymentService.orderReturn()` với các tham số:
     - `request`: Chứa thông tin callback từ VNPay gửi về.
     - `paymentRequest`: Thông tin chi tiết về giao dịch được parse từ JSON.

4. **Xử Lý Kết Quả Giao Dịch**:
   - Nếu giao dịch thành công (`result == 1`):
     - Chuyển hướng người dùng đến trang thành công: `/payment-return?type=success`.
   - Nếu giao dịch thất bại:
     - Chuyển hướng người dùng đến trang thất bại: `/payment-return?type=fail`.

#### Kết Quả
Điều hướng người dùng đến trang kết quả giao dịch tương ứng trên frontend.
