document.addEventListener("DOMContentLoaded", function () {
  // ===== Sidebar Toggle =====
  const menuIcon = document.querySelector(".menu-icon");
  const sidebar = document.querySelector(".sidebar");

  if (menuIcon && sidebar) {
    menuIcon.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
    });
  }

  // ===== Chart.js Setup =====
  const chartCanvas = document.getElementById('reportChart');
  if (chartCanvas) {
    const ctx = chartCanvas.getContext('2d');
    const reportChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['COMPLETED', 'ONGOING', 'PENDING'],
        datasets: [{
          label: 'Reports',
          data: [24, 20, 15],
          backgroundColor: ['#4caf50', '#1976d2', '#f44336']
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }

  // ===== Profile Dropdown =====
  const profileBtn = document.getElementById("profileMenuBtn");
  const dropdown = document.getElementById("dropdownMenu");

  if (profileBtn && dropdown) {
    profileBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    // Close dropdown if clicking outside
    window.addEventListener("click", (e) => {
      if (!profileBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = "none";
      }
    });
  }

  // ===== User Search & Actions =====
  const searchInput = document.getElementById('searchUserInput');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const filter = this.value.toLowerCase();
      const rows = document.querySelectorAll('#userTable tbody tr');
      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(filter) ? '' : 'none';
      });
    });
  }

  document.querySelectorAll('.approve-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const row = this.closest('tr');
      alert('Approved: ' + row.cells[0].textContent);
      row.remove();
    });
  });

  document.querySelectorAll('.decline-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const row = this.closest('tr');
      alert('Declined: ' + row.cells[0].textContent);
      row.remove();
    });
  });

  // ===== Manage Reports Search =====
  const searchReportInput = document.getElementById('searchReportInput');
  if (searchReportInput) {
    searchReportInput.addEventListener('input', function () {
      const filter = this.value.toLowerCase();
      const rows = document.querySelectorAll('#reportTable tbody tr');
      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(filter) ? '' : 'none';
      });
    });
  }

  // ===== Completed Reports Search =====
  const searchCompletedInput = document.getElementById('searchCompletedInput');
  if (searchCompletedInput) {
    searchCompletedInput.addEventListener('input', function () {
      const filter = this.value.toLowerCase();
      const rows = document.querySelectorAll('#completedTable tbody tr');
      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(filter) ? '' : 'none';
      });
    });
  }
});
