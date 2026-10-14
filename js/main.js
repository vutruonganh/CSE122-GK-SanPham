/* =====================================================
   TRANG: KẾ HOẠCH HUẤN LUYỆN – Cổng Huấn luyện viên
   Chức năng JavaScript duy nhất: TÌM KIẾM THEO TÊN THÚ CƯNG
   1. Dữ liệu mẫu (mảng các kế hoạch)
   2. Hàm vẽ thẻ kế hoạch từ dữ liệu
   3. Hàm tìm kiếm + lắng nghe sự kiện gõ phím
   ===================================================== */

/* ---------- 1. DỮ LIỆU MẪU ----------
   Mỗi kế hoạch là 1 object, bên trong có object "pet" (thú cưng).
   tone:  màu nhãn trạng thái  -> normal | alert | success | new
   goals[].state: done (xong) | doing (đang làm) | todo (chưa làm) */
const plans = [
  { title: "Lộ trình Vỡ lòng & Nghe lời cơ bản (Puppy Foundation)",
    badge: "Đang rèn luyện", tone: "normal", durationText: "4 tuần • 3 buổi/tuần",
    pet: { name: "LuLu", breed: "Poodle Toy", age: "8 tháng tuổi", owner: "Trần Mai Hương", code: "Mã: #PET-8821",
           img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPRNZ4tEhBiLaRMnmH6Ny6taEdOL2iRKXiOp88jQnSuL_Zfca614XOk_3UJUQZiqfjezZ33J54UYw92ovbQrcnv0Y2JMZmbPUXLP-Ufgn9dRBBV_qWwgqyIEfoW65g23jzHasRdODT1dL_7DQYRGJ2SPE5YUbHpaGAu8Cgjfv60yHadGpVSZUqcaQDekt1udqEmpn82NBQo0ifgMgbwogtqbAK6IrCzMkQP_AoELD87cAV_XVfEru3" },
    week: "Tuần 3 / 4", progress: 75, progressNote: "75% (6/8 bài tập đạt chuẩn)", color: "primary",
    goalsTitle: "Mục tiêu trọng tâm:",
    goals: [{ text: "Ngồi - Nằm - Yên vị trí", state: "done" }, { text: "Bắt tay tương tác", state: "done" }, { text: "Không cắn phá đồ đạc & gặm giày", state: "todo" }],
    left:  { label: "Xem chi tiết & Nhật ký", icon: "history_edu", style: "link" },
    right: { label: "Giao bài tập về nhà", icon: "assignment_add", style: "soft" } },

  { title: "Kiểm soát tính hung hăng & Hòa nhập xã hội (Socialization & Anxiety)",
    badge: "Cần chú ý cao", tone: "alert", durationText: "8 tuần • 4 buổi/tuần",
    pet: { name: "Rocky", breed: "Husky Bắc Cực", age: "2 tuổi", owner: "Phạm Thùy Linh", code: "Mã: #PET-9042",
           img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAna_z4yz3Y8GJCjsiVlcJdgQalFJkBtJV0UX35_ZEBLnwCF8I2S1iOlGQGyvNO-YnyzNHVsphVTe9iGuRct5t9ipWiW7_Sf-33YD4KLPRa5KhRIf_z_AeoRMQfr6MD93Q020dzCt98q0M-Sjot9I5UbtO_J31HASVyPENh1kH_DU3l5IWJ6YzgAecOoKl5cTX1pl3Q-wR2aHC4RXDmHNga4eQfmUjJ9OQMoQOSK49JMS4IfwW_M-tk" },
    week: "Tuần 2 / 8", progress: 25, progressNote: "25% (Đang giải tỏa căng thẳng)", color: "warning",
    goalsTitle: "Mục tiêu trọng tâm:",
    goals: [{ text: "Giảm căng thẳng khi gặp chó lạ", state: "doing" }, { text: "Kiểm soát lực kéo dây dắt (Leash Pulling)", state: "todo" }, { text: "Hạ tín hiệu phòng vệ thức ăn", state: "todo" }],
    left:  { label: "Ghi chú khẩn hành vi", icon: "warning", style: "danger" },
    right: { label: "Cập nhật đánh giá", icon: "rate_review", style: "solid" } },

  { title: "Lộ trình Huấn luyện Thể lực & Vượt chướng ngại vật (Agility Master)",
    badge: "Đã tốt nghiệp xuất sắc", tone: "success", durationText: "6 tuần • Hoàn tất",
    pet: { name: "Max", breed: "Border Collie", age: "1.5 tuổi", owner: "Lê Minh", code: "Điểm thi: 9.8 / 10", codeSuccess: true,
           img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjoAExQxzjWmZPZkGpCuqQgl0U4da0fgKWZrYysHwMdoYBGnUF41KxLukw4-pWFI8w06-OqSujYlGZPgu08ua25Q5bR6gvQi6jBfuku8DPkeQx107HkkXB-CtackyBOt1ohxJ1uQTbEg-_BKaPfzbCfhg_4nFLqZYOfZxgk9RVzLEG6qmHVFk01IRWnTtV1iuuzs4WanRJnMAuJRDutxUwfhkNXZgJQXDh4gJkGY9vXMBHfq8i5zC3" },
    week: "Tuần 6 / 6", progress: 100, progressNote: "100% Hoàn thành xuất sắc", color: "success",
    goalsTitle: "Kỹ năng thuần thục:",
    goals: [{ text: "Vượt hầm chui & nhảy rào 80cm", state: "done" }, { text: "Chạy zíc-zắc cọc tiêu phản xạ nhanh", state: "done" }, { text: "Lệnh dừng khẩn cấp từ xa 30m", state: "done" }],
    left:  { label: "Lưu trữ hồ sơ", icon: "archive", style: "muted" },
    right: { label: "Cấp chứng nhận điện tử", icon: "workspace_premium", style: "green" } },

  { title: "Trị liệu sợ sấm sét & Tiếng ồn lạ (Sound Desensitization)",
    badge: "Mới khởi tạo", tone: "new", durationText: "4 tuần • 2 buổi/tuần",
    pet: { name: "Bơ", breed: "Golden Retriever", age: "2 tuổi", owner: "Hoàng Yến", code: "Mã: #PET-7119",
           img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAw_jVP5Nw5WF2agzdRJ-G6GcnRYZK8Kxtoda_E9rna0VPoHhCzpE4hgukVHZ5Lqb1cEpTgCwan6wNW9W6rQegWh8FjVtz2hfrqLjAYXDi7x49Tx6-7V3QEo24HhWQrLj4hsKydmYq6-zWGk_qX1T9igxAsmyszmu7Ggl0skn6sjk7BQi2D24hJsGa1FGcp7coNGaTD4C2-DFq9G75iB9xOeVSV8sWAnkMGN6ZxxSz98oKD2WIId8de" },
    week: "Tuần 1 / 4", progress: 20, progressNote: "20% (Làm quen âm thanh nhỏ)", color: "primary",
    goalsTitle: "Mục tiêu trọng tâm:",
    goals: [{ text: "Giải tỏa phản xạ giật mình khi nghe tiếng sấm", state: "todo" }, { text: "Tạo vùng an toàn (Safe Crate Training)", state: "todo" }, { text: "Duy trì nhịp thở ổn định khi giông bão", state: "todo" }],
    left:  { label: "Điều chỉnh giáo án", icon: "edit_note", style: "link" },
    right: { label: "Bắt đầu buổi tập #1", icon: "play_arrow", style: "teal" } }
];

/* ---------- 2. LẤY PHẦN TỬ DOM ---------- */
const planList    = document.getElementById("planList");
const emptyState  = document.getElementById("emptyState");
const shownCount  = document.getElementById("shownCount");
const searchInput = document.getElementById("searchInput");

/* ---------- 3. VẼ THẺ KẾ HOẠCH ---------- */

// Bỏ dấu tiếng Việt + chữ thường: "Bơ" -> "bo" (để gõ không dấu vẫn tìm được)
function normalize(text) {
  return text.toLowerCase().replace(/đ/g, "d").normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function buildPlanCard(plan) {
  const pet = plan.pet;
  const goalIcons = { done: "check_circle", doing: "sync", todo: "pending" };

  const goalsHTML = plan.goals.map(goal => `
    <li class="goal--${goal.state}">
      <span class="material-symbols-outlined" aria-hidden="true">${goalIcons[goal.state]}</span>${goal.text}
    </li>`).join("");

  return `
  <article class="card plan">
    <div>
      <div class="plan-head">
        <div>
          <span class="badge badge--${plan.tone}">${plan.badge}</span>
          <h3>${plan.title}</h3>
        </div>
        <span class="plan-duration">${plan.durationText}</span>
      </div>

      <div class="pet">
        <img class="pet-avatar" src="${pet.img}" alt="Ảnh thú cưng ${pet.name}">
        <div class="pet-info">
          <div class="pet-line">
            <span class="pet-name">Bé ${pet.name}</span>
            <span class="pet-code ${pet.codeSuccess ? "pet-code--success" : ""}">${pet.code}</span>
          </div>
          <p class="pet-meta">${pet.breed} • ${pet.age} • <strong>Chủ: ${pet.owner}</strong></p>
        </div>
      </div>

      <div class="progress">
        <div class="progress-text">
          <span>Tiến trình giáo trình: <strong>${plan.week}</strong></span>
          <b class="text-${plan.color}">${plan.progressNote}</b>
        </div>
        <div class="progress-track">
          <div class="progress-bar tone-${plan.color}" style="width: ${plan.progress}%"></div>
        </div>
      </div>

      <span class="goals-title">${plan.goalsTitle}</span>
      <ul class="goals">${goalsHTML}</ul>
    </div>

    <div class="plan-foot">
      <button type="button" class="act act--${plan.left.style}">
        <span class="material-symbols-outlined" aria-hidden="true">${plan.left.icon}</span>${plan.left.label}
      </button>
      <button type="button" class="act act--${plan.right.style}">
        <span class="material-symbols-outlined" aria-hidden="true">${plan.right.icon}</span>${plan.right.label}
      </button>
    </div>
  </article>`;
}

/* ---------- 4. TÌM KIẾM THEO TÊN THÚ CƯNG ---------- */

// Lọc các kế hoạch có tên thú cưng chứa từ khóa, rồi vẽ lại danh sách
function render(keyword) {
  const key = normalize(keyword.trim());
  const result = plans.filter(plan => normalize(plan.pet.name).includes(key));

  planList.innerHTML = result.map(buildPlanCard).join("");
  emptyState.hidden = result.length > 0;     // không có kết quả thì hiện dòng thông báo
  shownCount.textContent = result.length;    // cập nhật "Hiển thị x trong tổng số 15"
}

// Mỗi lần gõ phím (sự kiện "input") thì tìm lại
searchInput.addEventListener("input", () => render(searchInput.value));

render("");                                  // vẽ danh sách lần đầu khi mở trang
