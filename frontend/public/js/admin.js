$(document).ready(function () {
    // Lấy dữ liệu từ LocalStorage hoặc khởi tạo mảng rỗng
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    let services = JSON.parse(localStorage.getItem('services')) || [];
    let customers = JSON.parse(localStorage.getItem('customers')) || [];
    let employees = JSON.parse(localStorage.getItem('employees')) || [];
   
    const pageSize = 5; // Số mục hiển thị mỗi trang
    let currentPage = 1; // Trang hiện tại

    // Hàm lưu dữ liệu vào LocalStorage
    function saveToLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    // ------------------------ PHÂN TRANG ------------------------
    function paginateData(data, page) {
        let start = (page - 1) * pageSize;
        let end = page * pageSize;
        return data.slice(start, end);
    }

    function renderPagination(data, paginationElement, callback) {
        let totalPages = Math.ceil(data.length / pageSize);
        let paginationHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            paginationHTML += `<li class="page-item ${i === currentPage ? 'active' : ''}">
                <a class="page-link" href="#">${i}</a>
            </li>`;
        }
        paginationElement.html(paginationHTML);

        paginationElement.find('a').on('click', function (e) {
            e.preventDefault();
            currentPage = parseInt($(this).text());
            callback();
        });
    }

    // ------------------------ QUẢN LÝ ĐƠN HÀNG ------------------------
    function loadOrders() {
        let paginatedOrders = paginateData(orders, currentPage);
        let tbody = $('#orderTable tbody');
        tbody.empty();
        paginatedOrders.forEach(order => {
            tbody.append(`
                <tr>
                    <td>${order.id}</td>
                    <td>${order.fullName}</td>
                    <td>${order.phone}</td>
                    <td>${order.service}</td>
                    <td>${order.date}</td>
                    <td>${order.startTime}</td>
                    <td>${order.endTime}</td>
                    <td>${order.address}</td>
                      <td>
                    <span class="badge ${
                        order.status === 'Pending' ? 'badge-warning' :
                        order.status === 'In Progress' ? 'badge-primary' :
                        order.status === 'Completed' ? 'badge-success' :
                        'badge-danger'
                    }">${order.status}</span>
                </td>
                    <td>
                        <button class="btn btn-primary btn-sm" onclick="editOrder(${order.id})">Sửa</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteOrder(${order.id})">Xóa</button>
                    </td>
                </tr>
            `);
        });

        renderPagination(orders, $('#orderPagination'), loadOrders);
    }

    $('#orderForm').on('submit', function (e) {
        e.preventDefault();
        let id = $('#orderId').val();
        let orderData = {
            id: id ? parseInt(id) : (orders.length ? orders[orders.length - 1].id + 1 : 1),
            fullName: $('#fullName').val(),
            phone: $('#phone').val(),
            service: $('#service').val(),
            date: $('#date').val(),
            startTime: $('#startTime').val(),
            endTime: $('#endTime').val(),
            address: $('#address').val(),
            status: $('#status').val(),
        };

        if (id) {
            let index = orders.findIndex(order => order.id === parseInt(id));
            orders[index] = orderData;
        } else {
            orders.push(orderData);
        }

        saveToLocalStorage('orders', orders);
        loadOrders();
        $('#orderForm')[0].reset();
        $('#orderId').val('');
    });

    window.deleteOrder = function (id) {
        orders = orders.filter(order => order.id !== id);
        saveToLocalStorage('orders', orders);
        loadOrders();
    };

    window.editOrder = function (id) {
        let order = orders.find(order => order.id === id);
        if (order) {
            $('#orderId').val(order.id);
            $('#fullName').val(order.fullName);
            $('#phone').val(order.phone);
            $('#service').val(order.service);
            $('#date').val(order.date);
            $('#startTime').val(order.startTime);
            $('#endTime').val(order.endTime);
            $('#address').val(order.address);
            $('#status').val(order.status);
        }
    };

    $('#searchOrders').on('input', function () {
        let value = $(this).val().toLowerCase();
        let filteredOrders = orders.filter(order =>
            Object.values(order).some(val => val.toString().toLowerCase().includes(value))
        );
        renderPagination(filteredOrders, $('#orderPagination'), loadOrders);
    });

    // ------------------------ QUẢN LÝ DỊCH VỤ ------------------------
    function loadServices() {
        let paginatedServices = paginateData(services, currentPage);
        let tbody = $('#serviceTable tbody');
        tbody.empty();
        paginatedServices.forEach(service => {
            tbody.append(`
                <tr>
                    <td>${service.id}</td>
                    <td>${service.name}</td>
                    <td>${service.price}</td>
                    <td>${service.description}</td>
                    <td>
                        <button class="btn btn-primary btn-sm" onclick="editService(${service.id})">Sửa</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteService(${service.id})">Xóa</button>
                    </td>
                </tr>
            `);
        });

        renderPagination(services, $('#servicePagination'), loadServices);
    }

    $('#serviceForm').on('submit', function (e) {
        e.preventDefault();
        let id = $('#serviceId').val();
        let serviceData = {
            id: id ? parseInt(id) : (services.length ? services[services.length - 1].id + 1 : 1),
            name: $('#serviceName').val(),
            price: parseFloat($('#servicePrice').val()),
            description: $('#serviceDescription').val(),
        };

        if (id) {
            let index = services.findIndex(service => service.id === parseInt(id));
            services[index] = serviceData;
        } else {
            services.push(serviceData);
        }

        saveToLocalStorage('services', services);
        loadServices();
        $('#serviceForm')[0].reset();
        $('#serviceId').val('');
    });

    window.deleteService = function (id) {
        services = services.filter(service => service.id !== id);
        saveToLocalStorage('services', services);
        loadServices();
    };

    window.editService = function (id) {
        let service = services.find(service => service.id === id);
        if (service) {
            $('#serviceId').val(service.id);
            $('#serviceName').val(service.name);
            $('#servicePrice').val(service.price);
            $('#serviceDescription').val(service.description);
        }
    };

    $('#searchServices').on('input', function () {
        let value = $(this).val().toLowerCase();
        let filteredServices = services.filter(service =>
            Object.values(service).some(val => val.toString().toLowerCase().includes(value))
        );
        renderPagination(filteredServices, $('#servicePagination'), loadServices);
    });

    // ------------------------ QUẢN LÝ KHÁCH HÀNG ------------------------
    function loadCustomers() {
        let paginatedCustomers = paginateData(customers, currentPage);
        let tbody = $('#customerTable tbody');
        tbody.empty();
        paginatedCustomers.forEach(customer => {
            tbody.append(`
                <tr>
                    <td>${customer.id}</td>
                    <td>${customer.name}</td>
                    <td>${customer.phone}</td>
                    <td>${customer.email}</td>
                    <td>
                        <button class="btn btn-primary btn-sm" onclick="editCustomer(${customer.id})">Sửa</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteCustomer(${customer.id})">Xóa</button>
                    </td>
                </tr>
            `);
        });

        renderPagination(customers, $('#customerPagination'), loadCustomers);
    }

    $('#customerForm').on('submit', function (e) {
        e.preventDefault();
        let id = $('#customerId').val();
        let customerData = {
            id: id ? parseInt(id) : (customers.length ? customers[customers.length - 1].id + 1 : 1),
            name: $('#customerName').val(),
            phone: $('#customerPhone').val(),
            email: $('#customerEmail').val(),
        };

        if (id) {
            let index = customers.findIndex(customer => customer.id === parseInt(id));
            customers[index] = customerData;
        } else {
            customers.push(customerData);
        }

        saveToLocalStorage('customers', customers);
        loadCustomers();
        $('#customerForm')[0].reset();
        $('#customerId').val('');
    });

    window.deleteCustomer = function (id) {
        customers = customers.filter(customer => customer.id !== id);
        saveToLocalStorage('customers', customers);
        loadCustomers();
    };

    window.editCustomer = function (id) {
        let customer = customers.find(customer => customer.id === id);
        if (customer) {
            $('#customerId').val(customer.id);
            $('#customerName').val(customer.name);
            $('#customerPhone').val(customer.phone);
            $('#customerEmail').val(customer.email);
        }
    };

    $('#searchCustomers').on('input', function () {
        let value = $(this).val().toLowerCase();
        let filteredCustomers = customers.filter(customer =>
            Object.values(customer).some(val => val.toString().toLowerCase().includes(value))
        );
        renderPagination(filteredCustomers, $('#customerPagination'), loadCustomers);
    });

    // ------------------------ KHỞI TẠO ------------------------
    loadOrders();
    loadServices();
    loadCustomers();

    
    function logout() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("role");

        Swal.fire({
            icon: "success",
            title: "Đăng xuất thành công!",
            text: "Đang chuyển hướng về trang đăng nhập...",
            timer: 2000,
            showConfirmButton: false
        });

        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    }
    
});