--1. Bảng users
--Bao gồm 3 vai trò: admin, employee, và customer.
CREATE TABLE
    users (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(100) NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        phone_number VARCHAR(15) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'employee', 'customer')),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

--2. Bảng services
--Dịch vụ do khách hàng tạo và cần được admin phê duyệt.
CREATE TABLE
    services (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT,
        price_per_hour NUMERIC(10, 2) NOT NULL,
        created_by INT NOT NULL REFERENCES users (id) ON DELETE CASCADE, -- Chỉ khách hàng có thể tạo dịch vụ
        approved_by INT REFERENCES users (id) ON DELETE SET NULL, -- Admin duyệt dịch vụ
        status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

--3. Bảng orders
--Lưu thông tin các đơn đặt hàng. Chỉ các dịch vụ đã được duyệt (approved) mới có thể được sử dụng để tạo đơn.
CREATE TABLE
    orders (
        id SERIAL PRIMARY KEY,
        customer_id INT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
        worker_id INT REFERENCES users (id) ON DELETE SET NULL, -- Employee nhận đơn hàng
        service_id INT NOT NULL REFERENCES services (id) ON DELETE CASCADE,
        status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (
            status IN ('pending', 'accepted', 'completed', 'canceled')
        ),
        start_time TIMESTAMP NOT NULL,
        end_time TIMESTAMP,
        total_price NUMERIC(10, 2),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CHECK (
            status != 'pending'
            OR worker_id IS NULL
        ) -- Nếu đang 'pending', chưa được assign worker
    );

--4. Bảng worker_availability
--Giữ thời gian làm việc khả dụng của nhân viên.
CREATE TABLE
    worker_availability (
        id SERIAL PRIMARY KEY,
        worker_id INT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
        available_date DATE NOT NULL,
        start_time TIME NOT NULL,
        end_time TIME NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

--5. Bảng reviews
--Khách hàng có thể đánh giá dịch vụ và nhân viên.
CREATE TABLE
    reviews (
        id SERIAL PRIMARY KEY,
        order_id INT NOT NULL REFERENCES orders (id) ON DELETE CASCADE,
        customer_id INT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
        worker_id INT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
        rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
        comment TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

--6. Bảng locations
--Lưu địa chỉ của người dùng.
CREATE TABLE
    locations (
        id SERIAL PRIMARY KEY,
        user_id INT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(100) NOT NULL,
        state VARCHAR(100),
        zip_code VARCHAR(20),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

--1. Bảng wallets
--Mỗi người dùng có một ví để quản lý số dư của họ.
CREATE TABLE
    wallets (
        id SERIAL PRIMARY KEY,
        user_id INT NOT NULL UNIQUE REFERENCES users (id) ON DELETE CASCADE, -- Mỗi người dùng có một ví
        balance NUMERIC(15, 2) NOT NULL DEFAULT 0.00, -- Số dư hiện tại
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

--2. Bảng wallet_transactions
--Lưu lịch sử nạp tiền hoặc giao dịch ví của người dùng.
CREATE TABLE
    wallet_transactions (
        id SERIAL PRIMARY KEY,
        wallet_id INT NOT NULL REFERENCES wallets (id) ON DELETE CASCADE, -- Gắn giao dịch với ví
        transaction_type VARCHAR(20) NOT NULL CHECK (transaction_type IN ('deposit', 'withdrawal')), -- Loại giao dịch
        amount NUMERIC(15, 2) NOT NULL CHECK (amount > 0), -- Số tiền giao dịch
        status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed')), -- Trạng thái giao dịch
        transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Ngày thực hiện giao dịch
        description TEXT, -- Mô tả thêm về giao dịch
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );