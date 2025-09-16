document.addEventListener("DOMContentLoaded", () => {
  const adminBtn = document.getElementById("adminBtn");
  const superAdminBtn = document.getElementById("superAdminBtn");
  const loginForm = document.getElementById("loginForm");
  const welcomeText = document.getElementById("welcomeText");
  const accessPanel = document.getElementById("accessPanel");
  const forgotLink = document.getElementById("forgotLink");

  // Modal elements
  const forgotModal = document.getElementById("forgotModal");
  const closeBtn = document.querySelector(".close-btn");
  const cancelForgot = document.getElementById("cancelForgot");

  let currentRole = "admin"; // default role

  // 🔹 Role toggle
  adminBtn.addEventListener("click", () => {
    adminBtn.classList.add("active");
    superAdminBtn.classList.remove("active");
    welcomeText.textContent = "Admin Login";
    accessPanel.textContent = "Admin Access Panel";
    currentRole = "admin";
  });

  superAdminBtn.addEventListener("click", () => {
    superAdminBtn.classList.add("active");
    adminBtn.classList.remove("active");
    welcomeText.textContent = "Super Admin Login";
    accessPanel.textContent = "Super Admin Access Panel";
    currentRole = "superadmin";
  });

  // 🔹 Login form submission
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "admin@gmail.com" && password === "12345" && currentRole === "admin") {
      window.location.href = "admin.html";
    } else if (email === "super@gmail.com" && password === "54321" && currentRole === "superadmin") {
      window.location.href = "super-admin.html";
    } else {
      alert("Invalid credentials or role selected!");
    }
  });

  // 🔹 Forgot Password modal
  forgotLink.addEventListener("click", (e) => {
    e.preventDefault();
    forgotModal.style.display = "flex";

    const forgotTitle = document.getElementById("forgotTitle");
    const forgotSubtitle = document.getElementById("forgotSubtitle");

    if (currentRole === "superadmin") {
      forgotTitle.textContent = "Super Admin Forgot Password";
      forgotSubtitle.textContent = "Provide your registered Super Admin email";
    } else {
      forgotTitle.textContent = "Admin Forgot Password";
      forgotSubtitle.textContent = "Provide your registered Admin email";
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", () => forgotModal.style.display = "none");
  if (cancelForgot) cancelForgot.addEventListener("click", () => forgotModal.style.display = "none");

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === forgotModal) {
      forgotModal.style.display = "none";
    }
  });
});
