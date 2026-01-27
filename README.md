DeskTop:fontsize :18px
Mobile(768):fontsize :16px
Mobile(620):fontsize :12px
Mobile(420):fontsize :8px


//background xam trang
background:
    linear-gradient(
      120deg,
      transparent 30%,
      rgba(255, 255, 255, 0.4),
      transparent 70%
    ),
    #4173b433;

    https://chatgpt.com/c/696f1fe4-62f4-8324-9b2f-ca105d4d3dec




    thiết kết cho tôi giao diện web trang danh sách khóa học theo category với tông màu chủ đạo background: lch(13.06% 1.5 19.68);


Canva AI responded with: Tôi sẽ tạo cho bạn một trang danh sách khóa học theo category với tông màu tối đẹp mắt!

Tôi đã tạo cho bạn một trang danh sách khóa học với:

✨ Thiết kế đẹp mắt

Tông màu tối ấm với accent hồng coral theo yêu cầu
Hiệu ứng gradient và blur làm nổi bật các phần quan trọng
Animation mượt mà khi load và hover
🎯 Tính năng chính

Lọc theo 6 category: Tất cả, Lập trình, Thiết kế, Marketing, Kinh doanh, Ngoại ngữ
Tìm kiếm theo tên khóa học hoặc giảng viên
Cards hiển thị đầy đủ thông tin: giá, rating, số học viên, thời lượng
💅 Responsive

Hiển thị tốt trên mọi kích thước màn hình
Bạn có muốn tôi điều chỉnh gì thêm không? Ví dụ thêm animation, thay đổi layout, hoặc thêm tính năng mới?features.json {"persistence_enabled":false,"app_name":"Course Catalog","edit_panel":{"header_label":{"type":"label","text":"Cài đặt trang","size":"large"},"page_title":{"type":"text_input","label":"Tiêu đề trang","placeholder":"Nhập tiêu đề trang"},"hero_subtitle":{"type":"text_input","label":"Mô tả ngắn","placeholder":"Nhập mô tả"}}}

<html lang="vi" class="h-full"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Khóa Học Online</title> <script src="https://cdn.tailwindcss.com"></script> <script src="/_sdk/element_sdk.js"></script> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap" rel="stylesheet"> <style> body { box-sizing: border-box; } :root { --bg-primary: #1f1a1b; --bg-secondary: #2a2425; --text-primary: #f5f0f1; --accent-primary: #e85d75; --accent-secondary: #ff8fa3; } * { font-family: 'Be Vietnam Pro', sans-serif; } .card-hover { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); } .card-hover:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(232, 93, 117, 0.15); } .category-btn { transition: all 0.3s ease; } .category-btn.active { background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); color: white; box-shadow: 0 4px 20px rgba(232, 93, 117, 0.4); } .category-btn:not(.active):hover { background: var(--bg-secondary); border-color: var(--accent-primary); } .gradient-text { background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; } .search-input:focus { box-shadow: 0 0 0 3px rgba(232, 93, 117, 0.3); } @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } } .animate-in { animation: fadeInUp 0.5s ease forwards; } .course-card { animation: fadeInUp 0.5s ease forwards; opacity: 0; } .course-card:nth-child(1) { animation-delay: 0.1s; } .course-card:nth-child(2) { animation-delay: 0.15s; } .course-card:nth-child(3) { animation-delay: 0.2s; } .course-card:nth-child(4) { animation-delay: 0.25s; } .course-card:nth-child(5) { animation-delay: 0.3s; } .course-card:nth-child(6) { animation-delay: 0.35s; } .icon-badge { background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); } ::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-track { background: var(--bg-primary); } ::-webkit-scrollbar-thumb { background: var(--bg-secondary); border-radius: 4px; } ::-webkit-scrollbar-thumb:hover { background: var(--accent-primary); } </style> </head> <body class="h-full" style="background: var(--bg-primary); color: var(--text-primary);"> <div id="app-wrapper" class="h-full w-full overflow-auto"> <!-- Header --> <header class="sticky top-0 z-50" style="background: rgba(31, 26, 27, 0.95); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(232, 93, 117, 0.1);"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between h-16"> <!-- Logo --> <div class="flex items-center gap-3"> <div class="w-10 h-10 rounded-xl icon-badge flex items-center justify-center"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/> </svg> </div> <span class="text-xl font-bold gradient-text">EduMaster</span> </div> <!-- Search --> <div class="hidden md:flex flex-1 max-w-md mx-8"> <div class="relative w-full"> <input type="text" id="search-input" placeholder="Tìm ki���m khóa học..." class="search-input w-full px-4 py-2.5 pl-11 rounded-xl border border-transparent focus:outline-none transition-all" style="background: var(--bg-secondary); color: var(--text-primary);"> <svg class="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/> </svg> </div> </div> <!-- Nav Actions --> <div class="flex items-center gap-4"> <button class="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl transition-all hover:bg-opacity-80" style="background: var(--bg-secondary);"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/> </svg> <span class="text-sm font-medium">Yêu thích</span> </button> <button class="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-105" style="background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));"> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/> </svg> </button> </div> </div> </div> </header> <!-- Hero Section --> <section class="relative py-16 overflow-hidden"> <div class="absolute inset-0 opacity-30"> <div class="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style="background: var(--accent-primary);"></div> <div class="absolute bottom-10 right-20 w-96 h-96 rounded-full blur-3xl" style="background: var(--accent-secondary); opacity: 0.3;"></div> </div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h1 id="page-title" class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-in"> Khám Phá <span class="gradient-text">Khóa Học</span> Của Bạn </h1> <p id="hero-subtitle" class="text-lg md:text-xl opacity-70 max-w-2xl mx-auto animate-in" style="animation-delay: 0.1s;"> Hơn 500+ khóa học chất lượng cao từ các chuyên gia hàng đầu </p> <!-- Stats --> <div class="flex flex-wrap justify-center gap-8 mt-12 animate-in" style="animation-delay: 0.2s;"> <div class="text-center"> <div class="text-3xl font-bold gradient-text">500+</div> <div class="text-sm opacity-60 mt-1">Khóa học</div> </div> <div class="text-center"> <div class="text-3xl font-bold gradient-text">50K+</div> <div class="text-sm opacity-60 mt-1">Học viên</div> </div> <div class="text-center"> <div class="text-3xl font-bold gradient-text">100+</div> <div class="text-sm opacity-60 mt-1">Giảng viên</div> </div> <div class="text-center"> <div class="text-3xl font-bold gradient-text">4.9</div> <div class="text-sm opacity-60 mt-1">Đánh giá</div> </div> </div> </div> </section> <!-- Main Content --> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"> <!-- Categories --> <div class="mb-12"> <h2 class="text-xl font-semibold mb-6">Danh mục</h2> <div class="flex flex-wrap gap-3" id="category-container"> <button class="category-btn active px-5 py-2.5 rounded-xl text-sm font-medium border border-transparent" data-category="all"> 🎯 Tất cả </button> <button class="category-btn px-5 py-2.5 rounded-xl text-sm font-medium border" style="border-color: rgba(232, 93, 117, 0.3);" data-category="programming"> 💻 Lập trình </button> <button class="category-btn px-5 py-2.5 rounded-xl text-sm font-medium border" style="border-color: rgba(232, 93, 117, 0.3);" data-category="design"> 🎨 Thiết kế </button> <button class="category-btn px-5 py-2.5 rounded-xl text-sm font-medium border" style="border-color: rgba(232, 93, 117, 0.3);" data-category="marketing"> 📈 Marketing </button> <button class="category-btn px-5 py-2.5 rounded-xl text-sm font-medium border" style="border-color: rgba(232, 93, 117, 0.3);" data-category="business"> 💼 Kinh doanh </button> <button class="category-btn px-5 py-2.5 rounded-xl text-sm font-medium border" style="border-color: rgba(232, 93, 117, 0.3);" data-category="language"> 🌍 Ngoại ngữ </button> </div> </div> <!-- Course Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="course-grid"> <!-- Courses will be rendered here --> </div> <!-- Empty State --> <div id="empty-state" class="hidden text-center py-20"> <div class="text-6xl mb-4">🔍</div> <h3 class="text-xl font-semibold mb-2">Không tìm thấy khóa học</h3> <p class="opacity-60">Thử tìm kiếm với từ khóa khác</p> </div> </main> <!-- Footer --> <footer class="border-t py-8" style="border-color: rgba(232, 93, 117, 0.1);"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <p class="text-sm opacity-50">© 2024 EduMaster. Học không giới hạn.</p> </div> </footer> </div> <script> const courses = [ { id: 1, title: "React.js từ Zero đến Hero", category: "programming", instructor: "Nguyễn Văn A", avatar: "👨‍💻", rating: 4.9, students: 12500, duration: "40 giờ", price: 1990000, originalPrice: 2990000, level: "Trung cấp", image: "⚛️", tags: ["Hot", "Bestseller"] }, { id: 2, title: "UI/UX Design Masterclass", category: "design", instructor: "Trần Thị B", avatar: "👩‍🎨", rating: 4.8, students: 8300, duration: "35 giờ", price: 1490000, originalPrice: 2490000, level: "Mọi cấp độ", image: "🎨", tags: ["New"] }, { id: 3, title: "Digital Marketing Pro", category: "marketing", instructor: "Lê Văn C", avatar: "👨‍💼", rating: 4.7, students: 15200, duration: "28 giờ", price: 990000, originalPrice: 1990000, level: "Cơ bản", image: "📊", tags: ["Bestseller"] }, { id: 4, title: "Python cho Data Science", category: "programming", instructor: "Phạm Văn D", avatar: "🧑‍🔬", rating: 4.9, students: 9800, duration: "50 giờ", price: 2490000, originalPrice: 3990000, level: "Nâng cao", image: "🐍", tags: ["Hot"] }, { id: 5, title: "Khởi nghiệp từ A-Z", category: "business", instructor: "Hoàng Thị E", avatar: "👩‍💼", rating: 4.6, students: 6700, duration: "20 giờ", price: 790000, originalPrice: 1490000, level: "Mọi cấp độ", image: "🚀", tags: [] }, { id: 6, title: "IELTS 7.0+ Intensive", category: "language", instructor: "David Smith", avatar: "👨‍🏫", rating: 4.8, students: 11000, duration: "60 giờ", price: 2990000, originalPrice: 4990000, level: "Trung cấp", image: "📚", tags: ["Popular"] } ]; const defaultConfig = { page_title: "Khám Phá Khóa Học Của Bạn", hero_subtitle: "Hơn 500+ khóa học chất lượng cao từ các chuyên gia hàng đầu", background_color: "#1f1a1b", surface_color: "#2a2425", text_color: "#f5f0f1", primary_color: "#e85d75", secondary_color: "#ff8fa3" }; let config = { ...defaultConfig }; let currentCategory = "all"; let searchQuery = ""; function formatPrice(price) { return new Intl.NumberFormat('vi-VN').format(price) + 'đ'; } function renderCourses() { const grid = document.getElementById('course-grid'); const emptyState = document.getElementById('empty-state'); let filtered = courses; if (currentCategory !== "all") { filtered = filtered.filter(c => c.category === currentCategory); } if (searchQuery) { const query = searchQuery.toLowerCase(); filtered = filtered.filter(c => c.title.toLowerCase().includes(query) || c.instructor.toLowerCase().includes(query) ); } if (filtered.length === 0) { grid.innerHTML = ''; emptyState.classList.remove('hidden'); return; } emptyState.classList.add('hidden'); grid.innerHTML = filtered.map(course => ` <div class="course-card card-hover rounded-2xl overflow-hidden" style="background: var(--bg-secondary);"> <!-- Course Image --> <div class="relative h-44 flex items-center justify-center" style="background: linear-gradient(135deg, rgba(232, 93, 117, 0.2), rgba(255, 143, 163, 0.1));"> <span class="text-6xl">${course.image}</span> ${course.tags.length > 0 ? ` <div class="absolute top-3 left-3 flex gap-2"> ${course.tags.map(tag => ` <span class="px-2.5 py-1 rounded-lg text-xs font-semibold text-white" style="background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));"> ${tag} </span> `).join('')} </div> ` : ''} <button class="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110" style="background: rgba(31, 26, 27, 0.8);"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/> </svg> </button> </div> <!-- Course Info --> <div class="p-5"> <div class="flex items-center gap-2 mb-3"> <span class="px-2.5 py-1 rounded-lg text-xs font-medium" style="background: rgba(232, 93, 117, 0.15); color: var(--accent-secondary);"> ${course.level} </span> <span class="text-xs opacity-50">• ${course.duration}</span> </div> <h3 class="font-semibold text-lg mb-3 line-clamp-2 leading-snug">${course.title}</h3> <!-- Instructor --> <div class="flex items-center gap-2 mb-4"> <span class="text-xl">${course.avatar}</span> <span class="text-sm opacity-70">${course.instructor}</span> </div> <!-- Stats --> <div class="flex items-center gap-4 mb-4"> <div class="flex items-center gap-1"> <svg class="w-4 h-4" style="color: var(--accent-secondary);" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/> </svg> <span class="text-sm font-medium">${course.rating}</span> </div> <div class="flex items-center gap-1 opacity-60"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/> </svg> <span class="text-sm">${(course.students / 1000).toFixed(1)}K</span> </div> </div> <!-- Price & Action --> <div class="flex items-end justify-between pt-4" style="border-top: 1px solid rgba(232, 93, 117, 0.1);"> <div> <div class="text-xs line-through opacity-40">${formatPrice(course.originalPrice)}</div> <div class="text-xl font-bold gradient-text">${formatPrice(course.price)}</div> </div> <button class="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg" style="background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));"> Đăng ký </button> </div> </div> </div> `).join(''); } function setupCategoryButtons() { const buttons = document.querySelectorAll('.category-btn'); buttons.forEach(btn => { btn.addEventListener('click', () => { buttons.forEach(b => b.classList.remove('active')); btn.classList.add('active'); currentCategory = btn.dataset.category; renderCourses(); }); }); } function setupSearch() { const searchInput = document.getElementById('search-input'); let timeout; searchInput.addEventListener('input', (e) => { clearTimeout(timeout); timeout = setTimeout(() => { searchQuery = e.target.value; renderCourses(); }, 300); }); } async function onConfigChange(newConfig) { config = { ...defaultConfig, ...newConfig }; const titleEl = document.getElementById('page-title'); const subtitleEl = document.getElementById('hero-subtitle'); if (titleEl) { titleEl.innerHTML = `Khám Phá <span class="gradient-text">Khóa Học</span> Của Bạn`; if (config.page_title && config.page_title !== defaultConfig.page_title) { const words = config.page_title.split(' '); if (words.length > 2) { const mid = Math.ceil(words.length / 2); titleEl.innerHTML = `${words.slice(0, mid).join(' ')} <span class="gradient-text">${words.slice(mid).join(' ')}</span>`; } else { titleEl.innerHTML = config.page_title; } } } if (subtitleEl) { subtitleEl.textContent = config.hero_subtitle || defaultConfig.hero_subtitle; } document.documentElement.style.setProperty('--bg-primary', config.background_color); document.documentElement.style.setProperty('--bg-secondary', config.surface_color); document.documentElement.style.setProperty('--text-primary', config.text_color); document.documentElement.style.setProperty('--accent-primary', config.primary_color); document.documentElement.style.setProperty('--accent-secondary', config.secondary_color); } function mapToCapabilities(cfg) { return { recolorables: [ { get: () => cfg.background_color || defaultConfig.background_color, set: (v) => { cfg.background_color = v; window.elementSdk.setConfig({ background_color: v }); } }, { get: () => cfg.surface_color || defaultConfig.surface_color, set: (v) => { cfg.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); } }, { get: () => cfg.text_color || defaultConfig.text_color, set: (v) => { cfg.text_color = v; window.elementSdk.setConfig({ text_color: v }); } }, { get: () => cfg.primary_color || defaultConfig.primary_color, set: (v) => { cfg.primary_color = v; window.elementSdk.setConfig({ primary_color: v }); } }, { get: () => cfg.secondary_color || defaultConfig.secondary_color, set: (v) => { cfg.secondary_color = v; window.elementSdk.setConfig({ secondary_color: v }); } } ], borderables: [], fontEditable: undefined, fontSizeable: undefined }; } function mapToEditPanelValues(cfg) { return new Map([ ["page_title", cfg.page_title || defaultConfig.page_title], ["hero_subtitle", cfg.hero_subtitle || defaultConfig.hero_subtitle] ]); } // Initialize if (window.elementSdk) { window.elementSdk.init({ defaultConfig, onConfigChange, mapToCapabilities, mapToEditPanelValues }); } setupCategoryButtons(); setupSearch(); renderCourses(); </script> </body> </html>



<!doctype html>
<html lang="vi" class="h-full">
 <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Online</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="/_sdk/element_sdk.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">
  <style>
    body {
      box-sizing: border-box;
    }
    
    :root {
      --bg-primary: #1f1a1b;
      --bg-secondary: #2a2425;
      --text-primary: #f5f0f1;
      --accent-primary: #e85d75;
      --accent-secondary: #ff8fa3;
    }
    
    * {
      font-family: 'Be Vietnam Pro', sans-serif;
    }
    
    .card-hover {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .card-hover:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(232, 93, 117, 0.15);
    }
    
    .category-btn {
      transition: all 0.3s ease;
    }
    
    .category-btn.active {
      background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
      color: white;
      box-shadow: 0 4px 20px rgba(232, 93, 117, 0.4);
    }
    
    .category-btn:not(.active):hover {
      background: var(--bg-secondary);
      border-color: var(--accent-primary);
    }
    
    .gradient-text {
      background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .search-input:focus {
      box-shadow: 0 0 0 3px rgba(232, 93, 117, 0.3);
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-in {
      animation: fadeInUp 0.5s ease forwards;
    }
    
    .course-card {
      animation: fadeInUp 0.5s ease forwards;
      opacity: 0;
    }
    
    .course-card:nth-child(1) { animation-delay: 0.1s; }
    .course-card:nth-child(2) { animation-delay: 0.15s; }
    .course-card:nth-child(3) { animation-delay: 0.2s; }
    .course-card:nth-child(4) { animation-delay: 0.25s; }
    .course-card:nth-child(5) { animation-delay: 0.3s; }
    .course-card:nth-child(6) { animation-delay: 0.35s; }
    
    .icon-badge {
      background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    }
    
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    ::-webkit-scrollbar-track {
      background: var(--bg-primary);
    }
    
    ::-webkit-scrollbar-thumb {
      background: var(--bg-secondary);
      border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: var(--accent-primary);
    }
  </style>
  <style>@view-transition { navigation: auto; }</style>
  <script src="/_sdk/data_sdk.js" type="text/javascript"></script>
 </head>
 <body class="h-full" style="background: var(--bg-primary); color: var(--text-primary);">
  <div id="app-wrapper" class="h-full w-full overflow-auto"><!-- Header -->
   <header class="sticky top-0 z-50" style="background: rgba(31, 26, 27, 0.95); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(232, 93, 117, 0.1);">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div class="flex items-center justify-between h-16"><!-- Logo -->
      <div class="flex items-center gap-3">
       <div class="w-10 h-10 rounded-xl icon-badge flex items-center justify-center">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
       </div><span class="text-xl font-bold gradient-text">EduMaster</span>
      </div><!-- Search -->
      <div class="hidden md:flex flex-1 max-w-md mx-8">
       <div class="relative w-full"><input type="text" id="search-input" placeholder="Tìm kiếm khóa học..." class="search-input w-full px-4 py-2.5 pl-11 rounded-xl border border-transparent focus:outline-none transition-all" style="background: var(--bg-secondary); color: var(--text-primary);">
        <svg class="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
       </div>
      </div><!-- Nav Actions -->
      <div class="flex items-center gap-4"><button class="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl transition-all hover:bg-opacity-80" style="background: var(--bg-secondary);">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg><span class="text-sm font-medium">Yêu thích</span> </button> <button class="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-105" style="background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));">
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg></button>
      </div>
     </div>
    </div>
   </header><!-- Hero Section -->
   <section class="relative py-16 overflow-hidden">
    <div class="absolute inset-0 opacity-30">
     <div class="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style="background: var(--accent-primary);"></div>
     <div class="absolute bottom-10 right-20 w-96 h-96 rounded-full blur-3xl" style="background: var(--accent-secondary); opacity: 0.3;"></div>
    </div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
     <h1 id="page-title" class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-in">Khám Phá <span class="gradient-text">Khóa Học</span> Của Bạn</h1>
     <p id="hero-subtitle" class="text-lg md:text-xl opacity-70 max-w-2xl mx-auto animate-in" style="animation-delay: 0.1s;">Hơn 500+ khóa học chất lượng cao từ các chuyên gia hàng đầu</p><!-- Stats -->
     <div class="flex flex-wrap justify-center gap-8 mt-12 animate-in" style="animation-delay: 0.2s;">
      <div class="text-center">
       <div class="text-3xl font-bold gradient-text">
        500+
       </div>
       <div class="text-sm opacity-60 mt-1">
        Khóa học
       </div>
      </div>
      <div class="text-center">
       <div class="text-3xl font-bold gradient-text">
        50K+
       </div>
       <div class="text-sm opacity-60 mt-1">
        Học viên
       </div>
      </div>
      <div class="text-center">
       <div class="text-3xl font-bold gradient-text">
        100+
       </div>
       <div class="text-sm opacity-60 mt-1">
        Giảng viên
       </div>
      </div>
      <div class="text-center">
       <div class="text-3xl font-bold gradient-text">
        4.9
       </div>
       <div class="text-sm opacity-60 mt-1">
        Đánh giá
       </div>
      </div>
     </div>
    </div>
   </section><!-- Main Content -->
   <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"><!-- Categories -->
    <div class="mb-12">
     <h2 class="text-xl font-semibold mb-6">Danh mục</h2>
     <div class="flex flex-wrap gap-3" id="category-container"><button class="category-btn active px-5 py-2.5 rounded-xl text-sm font-medium border border-transparent" data-category="all"> 🎯 Tất cả </button> <button class="category-btn px-5 py-2.5 rounded-xl text-sm font-medium border" style="border-color: rgba(232, 93, 117, 0.3);" data-category="programming"> 💻 Lập trình </button> <button class="category-btn px-5 py-2.5 rounded-xl text-sm font-medium border" style="border-color: rgba(232, 93, 117, 0.3);" data-category="design"> 🎨 Thiết kế </button> <button class="category-btn px-5 py-2.5 rounded-xl text-sm font-medium border" style="border-color: rgba(232, 93, 117, 0.3);" data-category="marketing"> 📈 Marketing </button> <button class="category-btn px-5 py-2.5 rounded-xl text-sm font-medium border" style="border-color: rgba(232, 93, 117, 0.3);" data-category="business"> 💼 Kinh doanh </button> <button class="category-btn px-5 py-2.5 rounded-xl text-sm font-medium border" style="border-color: rgba(232, 93, 117, 0.3);" data-category="language"> 🌍 Ngoại ngữ </button>
     </div>
    </div><!-- Course Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="course-grid"><!-- Courses will be rendered here -->
    </div><!-- Empty State -->
    <div id="empty-state" class="hidden text-center py-20">
     <div class="text-6xl mb-4">
      🔍
     </div>
     <h3 class="text-xl font-semibold mb-2">Không tìm thấy khóa học</h3>
     <p class="opacity-60">Thử tìm kiếm với từ khóa khác</p>
    </div>
   </main><!-- Footer -->
   <footer class="border-t py-8" style="border-color: rgba(232, 93, 117, 0.1);">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
     <p class="text-sm opacity-50">© 2024 EduMaster. Học không giới hạn.</p>
    </div>
   </footer>
  </div>
  <script>
    const courses = [
      {
        id: 1,
        title: "React.js từ Zero đến Hero",
        category: "programming",
        instructor: "Nguyễn Văn A",
        avatar: "👨‍💻",
        rating: 4.9,
        students: 12500,
        duration: "40 giờ",
        price: 1990000,
        originalPrice: 2990000,
        level: "Trung cấp",
        image: "⚛️",
        tags: ["Hot", "Bestseller"]
      },
      {
        id: 2,
        title: "UI/UX Design Masterclass",
        category: "design",
        instructor: "Trần Thị B",
        avatar: "👩‍🎨",
        rating: 4.8,
        students: 8300,
        duration: "35 giờ",
        price: 1490000,
        originalPrice: 2490000,
        level: "Mọi cấp độ",
        image: "🎨",
        tags: ["New"]
      },
      {
        id: 3,
        title: "Digital Marketing Pro",
        category: "marketing",
        instructor: "Lê Văn C",
        avatar: "👨‍💼",
        rating: 4.7,
        students: 15200,
        duration: "28 giờ",
        price: 990000,
        originalPrice: 1990000,
        level: "Cơ bản",
        image: "📊",
        tags: ["Bestseller"]
      },
      {
        id: 4,
        title: "Python cho Data Science",
        category: "programming",
        instructor: "Phạm Văn D",
        avatar: "🧑‍🔬",
        rating: 4.9,
        students: 9800,
        duration: "50 giờ",
        price: 2490000,
        originalPrice: 3990000,
        level: "Nâng cao",
        image: "🐍",
        tags: ["Hot"]
      },
      {
        id: 5,
        title: "Khởi nghiệp từ A-Z",
        category: "business",
        instructor: "Hoàng Thị E",
        avatar: "👩‍💼",
        rating: 4.6,
        students: 6700,
        duration: "20 giờ",
        price: 790000,
        originalPrice: 1490000,
        level: "Mọi cấp độ",
        image: "🚀",
        tags: []
      },
      {
        id: 6,
        title: "IELTS 7.0+ Intensive",
        category: "language",
        instructor: "David Smith",
        avatar: "👨‍🏫",
        rating: 4.8,
        students: 11000,
        duration: "60 giờ",
        price: 2990000,
        originalPrice: 4990000,
        level: "Trung cấp",
        image: "📚",
        tags: ["Popular"]
      }
    ];
    
    const defaultConfig = {
      page_title: "Khám Phá Khóa Học Của Bạn",
      hero_subtitle: "Hơn 500+ khóa học chất lượng cao từ các chuyên gia hàng đầu",
      background_color: "#1f1a1b",
      surface_color: "#2a2425",
      text_color: "#f5f0f1",
      primary_color: "#e85d75",
      secondary_color: "#ff8fa3"
    };
    
    let config = { ...defaultConfig };
    let currentCategory = "all";
    let searchQuery = "";
    
    function formatPrice(price) {
      return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
    }
    
    function renderCourses() {
      const grid = document.getElementById('course-grid');
      const emptyState = document.getElementById('empty-state');
      
      let filtered = courses;
      
      if (currentCategory !== "all") {
        filtered = filtered.filter(c => c.category === currentCategory);
      }
      
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(c => 
          c.title.toLowerCase().includes(query) || 
          c.instructor.toLowerCase().includes(query)
        );
      }
      
      if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
      }
      
      emptyState.classList.add('hidden');
      
      grid.innerHTML = filtered.map(course => `
        <div class="course-card card-hover rounded-2xl overflow-hidden" style="background: var(--bg-secondary);">
          <!-- Course Image -->
          <div class="relative h-44 flex items-center justify-center" style="background: linear-gradient(135deg, rgba(232, 93, 117, 0.2), rgba(255, 143, 163, 0.1));">
            <span class="text-6xl">${course.image}</span>
            ${course.tags.length > 0 ? `
              <div class="absolute top-3 left-3 flex gap-2">
                ${course.tags.map(tag => `
                  <span class="px-2.5 py-1 rounded-lg text-xs font-semibold text-white" style="background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));">
                    ${tag}
                  </span>
                `).join('')}
              </div>
            ` : ''}
            <button class="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110" style="background: rgba(31, 26, 27, 0.8);">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>
          </div>
          
          <!-- Course Info -->
          <div class="p-5">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-1 rounded-lg text-xs font-medium" style="background: rgba(232, 93, 117, 0.15); color: var(--accent-secondary);">
                ${course.level}
              </span>
              <span class="text-xs opacity-50">• ${course.duration}</span>
            </div>
            
            <h3 class="font-semibold text-lg mb-3 line-clamp-2 leading-snug">${course.title}</h3>
            
            <!-- Instructor -->
            <div class="flex items-center gap-2 mb-4">
              <span class="text-xl">${course.avatar}</span>
              <span class="text-sm opacity-70">${course.instructor}</span>
            </div>
            
            <!-- Stats -->
            <div class="flex items-center gap-4 mb-4">
              <div class="flex items-center gap-1">
                <svg class="w-4 h-4" style="color: var(--accent-secondary);" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span class="text-sm font-medium">${course.rating}</span>
              </div>
              <div class="flex items-center gap-1 opacity-60">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
                <span class="text-sm">${(course.students / 1000).toFixed(1)}K</span>
              </div>
            </div>
            
            <!-- Price & Action -->
            <div class="flex items-end justify-between pt-4" style="border-top: 1px solid rgba(232, 93, 117, 0.1);">
              <div>
                <div class="text-xs line-through opacity-40">${formatPrice(course.originalPrice)}</div>
                <div class="text-xl font-bold gradient-text">${formatPrice(course.price)}</div>
              </div>
              <button class="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg" style="background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }
    
    function setupCategoryButtons() {
      const buttons = document.querySelectorAll('.category-btn');
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          buttons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentCategory = btn.dataset.category;
          renderCourses();
        });
      });
    }
    
    function setupSearch() {
      const searchInput = document.getElementById('search-input');
      let timeout;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          searchQuery = e.target.value;
          renderCourses();
        }, 300);
      });
    }
    
    async function onConfigChange(newConfig) {
      config = { ...defaultConfig, ...newConfig };
      
      const titleEl = document.getElementById('page-title');
      const subtitleEl = document.getElementById('hero-subtitle');
      
      if (titleEl) {
        titleEl.innerHTML = `Khám Phá <span class="gradient-text">Khóa Học</span> Của Bạn`;
        if (config.page_title && config.page_title !== defaultConfig.page_title) {
          const words = config.page_title.split(' ');
          if (words.length > 2) {
            const mid = Math.ceil(words.length / 2);
            titleEl.innerHTML = `${words.slice(0, mid).join(' ')} <span class="gradient-text">${words.slice(mid).join(' ')}</span>`;
          } else {
            titleEl.innerHTML = config.page_title;
          }
        }
      }
      
      if (subtitleEl) {
        subtitleEl.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
      }
      
      document.documentElement.style.setProperty('--bg-primary', config.background_color);
      document.documentElement.style.setProperty('--bg-secondary', config.surface_color);
      document.documentElement.style.setProperty('--text-primary', config.text_color);
      document.documentElement.style.setProperty('--accent-primary', config.primary_color);
      document.documentElement.style.setProperty('--accent-secondary', config.secondary_color);
    }
    
    function mapToCapabilities(cfg) {
      return {
        recolorables: [
          {
            get: () => cfg.background_color || defaultConfig.background_color,
            set: (v) => { cfg.background_color = v; window.elementSdk.setConfig({ background_color: v }); }
          },
          {
            get: () => cfg.surface_color || defaultConfig.surface_color,
            set: (v) => { cfg.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); }
          },
          {
            get: () => cfg.text_color || defaultConfig.text_color,
            set: (v) => { cfg.text_color = v; window.elementSdk.setConfig({ text_color: v }); }
          },
          {
            get: () => cfg.primary_color || defaultConfig.primary_color,
            set: (v) => { cfg.primary_color = v; window.elementSdk.setConfig({ primary_color: v }); }
          },
          {
            get: () => cfg.secondary_color || defaultConfig.secondary_color,
            set: (v) => { cfg.secondary_color = v; window.elementSdk.setConfig({ secondary_color: v }); }
          }
        ],
        borderables: [],
        fontEditable: undefined,
        fontSizeable: undefined
      };
    }
    
    function mapToEditPanelValues(cfg) {
      return new Map([
        ["page_title", cfg.page_title || defaultConfig.page_title],
        ["hero_subtitle", cfg.hero_subtitle || defaultConfig.hero_subtitle]
      ]);
    }
    
    // Initialize
    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
      });
    }
    
    setupCategoryButtons();
    setupSearch();
    renderCourses();
  </script>
 <script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9c4669f576dbdd8b',t:'MTc2OTQ5NzY1NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>