// Giả lập dữ liệu công việc và thông tin nhân viên
const tasks = [
    { id: 1, name: "Kiểm tra hệ thống A", description: "Kiểm tra và bảo trì hệ thống A", status: "Chưa hoàn thành", startDate: "2023-11-10", endDate: "2023-11-15" },
    { id: 2, name: "Sửa chữa máy B", description: "Sửa chữa và kiểm tra máy B", status: "Đã hoàn thành", startDate: "2023-11-08", endDate: "2023-11-13" }
];

// Hiển thị danh sách công việc
function loadTasks() {
    const tableBody = document.querySelector("#taskTable tbody");
    tableBody.innerHTML = "";

    tasks.forEach(task => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task.id}</td>
            <td>${task.name}</td>
            <td>${task.status}</td>
            <td>${task.startDate}</td>
            <td>${task.endDate}</td>
            <td>
                <button class="btn btn-success" onclick="acceptTask(${task.id})" ${task.status === "Đã nhận" || task.status === "Đã hoàn thành" ? "disabled" : ""}>
                    Nhận Việc
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Nhận công việc
function acceptTask(id) {
    const task = tasks.find(t => t.id === id);

    if (task.status === "Chưa hoàn thành") {
        task.status = "Đã nhận";
        alert(`Bạn đã nhận công việc: ${task.name}`);
        loadTasks(); // Tải lại danh sách công việc
    } else {
        alert("Công việc này đã được nhận hoặc hoàn thành.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const role = localStorage.getItem("role");

    // Kiểm tra nếu người dùng chưa đăng nhập hoặc không phải là nhân viên
    if (isLoggedIn !== "true" || role !== "employee") {
        window.location.href = "login.html";
    }
});

// Chức năng đăng xuất
function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    window.location.href = "login.html";
}

// Tải danh sách công việc khi trang được tải
document.addEventListener("DOMContentLoaded", loadTasks);
