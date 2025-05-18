function toggleSidebar() {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("overlay").classList.add("active");
  }

  function closeSidebar() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("overlay").classList.remove("active");

    // Ẩn tất cả submenu khi đóng
    document.querySelectorAll(".submenu").forEach(el => el.classList.remove("open"));
  }

  function toggleSubmenu(id) {
    const submenu = document.getElementById("submenu-" + id);
    const plus = document.getElementById("plus-" + id);
    const isOpen = submenu.style.display === "block";

    submenu.style.display = isOpen ? "none" : "block";
    plus.textContent = isOpen ? "+" : "–";
  }
  function toggleSearchBar() {
    var searchBar = document.getElementById("searchBar");
    searchBar.classList.toggle("show");
  }