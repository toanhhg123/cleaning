(function ($) {
    "use strict";

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        }
    });

    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

})(jQuery);

/* ----------------------------------------
   XỬ LÝ ĐĂNG KÝ VÀ ĐĂNG NHẬP
----------------------------------------- */
function handleRegisterForm(event) {
    event.preventDefault();

    const username = document.querySelector("input[placeholder='Tên đăng nhập']").value.trim();
    const password = document.querySelector("input[placeholder='Mật khẩu']").value.trim();
    const fullName = document.querySelector("input[placeholder='Họ và tên']").value.trim();
    const email = document.querySelector("input[placeholder='Email']").value.trim();
    const phone = document.querySelector("input[placeholder='Số điện thoại']").value.trim();

    let errorMessages = [];
    if (!username) errorMessages.push("Tên đăng nhập không được để trống.");
    if (!password || password.length < 6) errorMessages.push("Mật khẩu phải có ít nhất 6 ký tự.");
    if (!fullName) errorMessages.push("Họ và tên không được để trống.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errorMessages.push("Email không hợp lệ.");
    if (!/^(0|\+84)[3|5|7|8|9][0-9]{8}$/.test(phone)) errorMessages.push("Số điện thoại không hợp lệ.");

    if (errorMessages.length > 0) {
        alert(errorMessages.join("\n"));
        return;
    }

    alert("Đăng ký thành công!");
    window.location.href = "login.html";
}

function handleLoginForm(event) {
    event.preventDefault();

    const username = document.querySelector("input[placeholder='Tên đăng nhập']").value.trim();
    const password = document.querySelector("input[placeholder='Mật khẩu']").value.trim();

    if (!username || !password) {
        alert("Tên đăng nhập và mật khẩu không được để trống.");
        return;
    }

    alert("Đăng nhập thành công!");
    window.location.href = "index.html";
}

document.querySelector("#registerForm")?.addEventListener("submit", handleRegisterForm);
document.querySelector("#loginForm")?.addEventListener("submit", handleLoginForm);

/* ----------------------------------------
   HIỂN THỊ DỊCH VỤ VỚI PHÂN TRANG
----------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 4;
    const services = [
        { name: "Flour Cleaning", price: "1.200.000đ", image: "img/service-1.jpg" },
        { name: "Glass Cleaning", price: "900.000đ", image: "img/service-2.jpg" },
        { name: "Carpet Cleaning", price: "1.500.000đ", image: "img/service-3.jpg" },
        { name: "Toilet Cleaning", price: "800.000đ", image: "img/service-4.jpg" },
        { name: "Kitchen Cleaning", price: "1.100.000đ", image: "img/service-5.jpg" },
        { name: "Office Cleaning", price: "1.800.000đ", image: "img/service-6.jpg" },
        { name: "Window Cleaning", price: "950.000đ", image: "img/service-7.jpg" },
        { name: "Deep Cleaning", price: "2.000.000đ", image: "img/service-8.jpg" }
    ];

    const pagination = document.querySelector(".pagination");
    const serviceContainer = document.querySelector(".service .container .row");
    let currentPage = 1;
    const totalPages = Math.ceil(services.length / itemsPerPage);

    function displayServices(page) {
        serviceContainer.innerHTML = "";
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedServices = services.slice(start, end);

        paginatedServices.forEach(service => {
            const serviceItem = `
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <img src="${service.image}" alt="${service.name}">
                        <h3>${service.name}</h3>
                        <p>${service.price}</p>
                        <a class="btn" href="service-detail.html?name=${encodeURIComponent(service.name)}">Xem thêm</a>
                    </div>
                </div>
            `;
            serviceContainer.insertAdjacentHTML("beforeend", serviceItem);
        });
    }

    function updatePagination() {
        pagination.innerHTML = `
            <a href="#" class="rounded" data-page="${currentPage - 1}">&laquo;</a>
        `;
        for (let i = 1; i <= totalPages; i++) {
            pagination.innerHTML += `
                <a href="#" class="rounded ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</a>
            `;
        }
        pagination.innerHTML += `
            <a href="#" class="rounded" data-page="${currentPage + 1}">&raquo;</a>
        `;
    }

    pagination.addEventListener("click", function (event) {
        event.preventDefault();
        const page = parseInt(event.target.getAttribute("data-page"));
        if (page > 0 && page <= totalPages) {
            currentPage = page;
            displayServices(currentPage);
            updatePagination();
        }
    });

    displayServices(currentPage);
    updatePagination();
});

/* ----------------------------------------
   TRANG PAYMENT (XÁC NHẬN THANH TOÁN)
----------------------------------------- */
/* Payment Page Logic */
document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector("#orderForm")) {
        const urlParams = new URLSearchParams(window.location.search);
        const serviceId = urlParams.get('id'); // Lấy ID từ URL
        const orders = JSON.parse(localStorage.getItem('orders')) || [];

        // Hiển thị thông tin dịch vụ trong form thanh toán
        if (serviceId) {
            const selectedService = orders.find(order => order.id == serviceId);
            if (selectedService) {
                document.querySelector('#serviceName').textContent = selectedService.service;
                document.querySelector('#servicePrice').textContent = selectedService.price;
                document.querySelector('#serviceDate').textContent = selectedService.date;
                document.querySelector('#serviceTime').textContent = `${selectedService.startTime} - ${selectedService.endTime}`;
                document.querySelector('#serviceAddress').textContent = selectedService.address;
                document.querySelector('#serviceMessage').textContent = selectedService.message;
            }
        }

        // Xử lý khi nhấn "Thanh toán"
        document.querySelector("#orderForm").addEventListener("submit", function (event) {
            event.preventDefault(); // Ngăn gửi form mặc định

            // Tạo đơn hàng mới
            const newOrder = {
                id: Date.now(),
                service: document.querySelector('#serviceName').textContent,
                price: document.querySelector('#servicePrice').textContent,
                date: document.querySelector('#serviceDate').textContent,
                time: document.querySelector('#serviceTime').textContent,
                address: document.querySelector('#serviceAddress').textContent,
                message: document.querySelector('#serviceMessage').textContent,
                status: "Đang xử lý"
            };

            // Lưu vào localStorage
            orders.push(newOrder);
            localStorage.setItem('orders', JSON.stringify(orders));

            alert("Thanh toán thành công! Đơn hàng đã được lưu.");
            // Chuyển sang trang order-detail.html với ID đơn hàng
            window.location.href = `order-detail.html?id=${newOrder.id}`;
        });
    }
});


