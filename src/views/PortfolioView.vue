<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800 font-sans pb-20">
    <nav class="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <RouterLink to="/" class="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition">
          <span class="text-xl">←</span> กลับหน้าหลัก
        </RouterLink>
        <div class="flex gap-6 text-sm font-medium text-gray-500">
          <span class="hover:text-blue-600 cursor-pointer">ผลงานของฉัน</span>
        </div>
      </div>
    </nav>

    <header class="max-w-6xl mx-auto px-6 pt-16 pb-12 text-center md:text-left">
      <p class="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">My Creative Journey</p>
      <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
        ผลงานของฉัน <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">(Portfolio)</span>
      </h1>
      <p class="text-gray-500 text-lg max-w-2xl">
        รวบรวมโปรเจกต์ที่ผมได้พัฒนาขึ้นมา เพื่อฝึกฝนทักษะและสร้างสรรค์สิ่งใหม่ๆ 
        ผ่านการใช้เทคโนโลยีสมัยใหม่ระดับโลก
      </p>
    </header>



    <main class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2">
        <div class="relative h-56 overflow-hidden">
          <img src="https://images.homify.com/v1453886406/p/photo/image/1275328/10.jpg" 
               alt="Project Thumbnail" 
               class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <span class="text-white font-medium">View Case Study →</span>
          </div>
        </div>
        
        <div class="p-6">
          <div class="flex justify-between items-start mb-4">
            <div>
              <p class="text-xs font-bold text-blue-500 uppercase mb-1">Shop</p>
              <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">Project ขายสินค้า </h3>
            </div>
            <div class="bg-blue-50 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
          
          <p class="text-gray-500 text-sm mb-6 line-clamp-2">
            รายละเอียดโปรเจกต์ย่อๆ เกี่ยวกับเทคโนโลยีที่ใช้ และผลลัพธ์ที่ได้จากการทำโปรเจกต์นี้
          </p>
          
          <div class="flex flex-wrap gap-2 mb-6">
            <span class="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-full uppercase">Vue 3</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-full uppercase">Tailwind</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-full uppercase">Vite</span>
          </div>

          <button class="w-full py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-gray-200">
            ดูรายละเอียดโปรเจกต์
          </button>
        </div>
      </div>
<div class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2">
        <div class="relative h-56 overflow-hidden">
          <img src="https://www.shabumusic.com/wp-content/uploads/2017/11/GM-Studio.jpg" 
               alt="Project Thumbnail" 
               class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <span class="text-white font-medium">View Case Study →</span>
          </div>
        </div>
        
        <div class="p-6">
          <div class="flex justify-between items-start mb-4">
            <div>
              <p class="text-xs font-bold text-blue-500 uppercase mb-1">music practice room</p>
              <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">Project จองห้องซ้อมดนตรี</h3>
            </div>
            <div class="bg-blue-50 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
          
          <p class="text-gray-500 text-sm mb-6 line-clamp-2">
            รายละเอียดโปรเจกต์ย่อๆ เกี่ยวกับเทคโนโลยีที่ใช้ และผลลัพธ์ที่ได้จากการทำโปรเจกต์นี้
          </p>
          
          <div class="flex flex-wrap gap-2 mb-6">
            <span class="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-full uppercase">Vue 3</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-full uppercase">Tailwind</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-full uppercase">Vite</span>
          </div>

          <button class="w-full py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-gray-200">
            ดูรายละเอียดโปรเจกต์
          </button>
        </div>
      </div>


    </main>

    <div class="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-4 backdrop-blur-md bg-opacity-90">
       <RouterLink to="/" class="text-sm font-bold text-blue-400 hover:text-blue-300">
  เกี่ยวกับฉัน
</RouterLink>
      <div class="h-4 w-[1px] bg-gray-700"></div>
      <a href="mailto:sirisak.bd@gmail.com" class="text-sm font-bold text-blue-400 hover:text-blue-300">Hire Me</a>
    </div>
  </div>
</template>

<style scoped>
/* เพิ่มฟอนต์สวยๆ หรือการตั้งค่าพิเศษได้ที่นี่ */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>