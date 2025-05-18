document.addEventListener('DOMContentLoaded', function() {
  const moviesRow = document.getElementById('movies-row');
  const movies = document.querySelectorAll('.movie');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const movieWidth = movies[0].offsetWidth;
  const gap = 15; // Khớp với gap trong CSS
  let currentPosition = 0;
  
  // Tính toán vị trí tối đa có thể cuộn
  const maxPosition = -(movies.length * (movieWidth + gap)) + moviesRow.offsetWidth;

  // Hàm cập nhật vị trí và trạng thái nút
  function updateCarousel() {
    moviesRow.style.transform = `translateX(${currentPosition}px)`;
    
    // Ẩn/hiện nút điều hướng khi ở đầu/cuối
    prevButton.style.visibility = currentPosition >= 0 ? 'hidden' : 'visible';
    nextButton.style.visibility = currentPosition <= maxPosition ? 'hidden' : 'visible';
  }

  // Xử lý sự kiện click nút
  prevButton.addEventListener('click', function() {
    if (currentPosition < 0) {
      currentPosition += movieWidth + gap;
      if (currentPosition > 0) currentPosition = 0;
      updateCarousel();
    }
  });

  nextButton.addEventListener('click', function() {
    if (currentPosition > maxPosition) {
      currentPosition -= movieWidth + gap;
      if (currentPosition < maxPosition) currentPosition = maxPosition;
      updateCarousel();
    }
  });

  // Khởi tạo ban đầu
  updateCarousel();
});
const episodes = {
    1: {
      title: "Dưa hấu lấp lánh - Tập 1",
      subtitle: "Twinkling Watermelon(2025)",
      description: "Một học sinh CODA (con của người lớn khiếm thính) sinh ra với năng khiếu về âm nhạc đã hạ cánh xuống một nơi xa lạ sau một thời gian du hành qua một cửa hàng âm nhạc đáng ngờ. Tại đây, anh thành lập ban nhạc Watermelon Sugar cùng với những thanh niên bí ẩn khác."
    },
    2: {
      title: "Dưa hấu lấp lánh - Tập 2",
      subtitle: "Twinkling Watermelon(2025)",
      description: "Cậu ấy bắt đầu hiểu rõ hơn về mối quan hệ giữa cha mẹ và chính mình, đồng thời đối mặt với thử thách từ quá khứ."
    },
    3: {
      title: "Dưa hấu lấp lánh - Tập 3",
      subtitle: "Twinkling Watermelon(2025)",
      description: "Tập này giới thiệu thêm các nhân vật phụ và mở ra mối tình đầu đầy cảm xúc."
    }
    
  };

  function changeEpisode(ep) {
    // Cập nhật text
    document.getElementById("episodeTitle").textContent = episodes[ep]?.title || `Dưa hấu lấp lánh - Tập ${ep}`;
    document.getElementById("episodeSubtitle").textContent = episodes[ep]?.subtitle || "Twinkling Watermelon(2025)";
    document.getElementById("episodeDescription").textContent = episodes[ep]?.description || "Nội dung đang cập nhật...";

    // Đổi class active
    const buttons = document.querySelectorAll(".epi button");
    buttons.forEach(btn => btn.classList.remove("active"));
    buttons[ep - 1].classList.add("active");
  }
const moviesRow = document.getElementById('movies-row');
const movies = document.querySelectorAll('.movie');
const btnPrev = document.querySelector('.carousel-button.prev');
const btnNext = document.querySelector('.carousel-button.next');
let currentIndex = 0;

function getVisibleCount() {
  return window.innerWidth <= 600 ? 2 : 5;
}

function updateButtons() {
  const visibleCount = getVisibleCount();
  const maxIndex = movies.length - visibleCount;

  btnPrev.style.display = currentIndex === 0 ? 'none' : 'flex';
  btnNext.style.display = currentIndex >= maxIndex ? 'none' : 'flex';
}

