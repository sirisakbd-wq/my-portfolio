<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800 font-sans pb-20 scroll-smooth">
    <nav class="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-100 shadow-sm">
      <div class="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        <div class="flex items-center gap-8">
      

      
        </div>

        <RouterLink 
          to="/portfolio" 
          class="flex items-center gap-3 px-4 py-2 bg-blue-50/50 hover:bg-blue-600 border border-blue-100 hover:border-blue-600 rounded-full transition-all duration-300 group shadow-sm hover:shadow-blue-200"
        >
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          
          <span class="text-xs font-bold text-blue-700 group-hover:text-white transition-colors">
           ผลงาน Project 
          </span>

          <div class="bg-blue-600 group-hover:bg-white p-1 rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </RouterLink>

      </div>
    </nav>

    <header class="max-w-6xl mx-auto px-6 pt-16 pb-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
      <div class="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden shadow-2xl border-4 border-white">
        <img src="../assets/images/ball.png" alt="Profile" class="w-full h-full object-cover">
      </div>

      <div class="flex-1">
        <p class="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Professional Portfolio</p>
        <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
          ผลงานของ <br class="hidden md:block">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Sirisak Buddee
          </span>
        </h1>
        <p class="text-gray-500 text-lg max-w-2xl leading-relaxed">
          รวบรวมประสบการณ์การฝึกงานและทักษะด้านการพัฒนาเว็บไซต์ 
          จากการเรียนรู้สาขาระบบสารสนเทศ มทร.อีสาน วิทยาเขตขอนแก่น
        </p>
        
     <div class="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
  <RouterLink 
    to="/portfolio" 
    class="flex items-center gap-3 px-5 py-2.5 bg-white rounded-full shadow-sm border border-gray-100 hover:border-blue-400 hover:shadow-md transition-all duration-300 group cursor-pointer"
  >
    <span class="relative flex h-3 w-3">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
    </span>
    
    <span class="text-sm font-semibold text-gray-600 group-hover:text-blue-600">
      Available for Work (ดูผลงาน)
    </span>

    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </RouterLink>
</div>
      </div>
    </header>

    <main id="experience" class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 scroll-mt-24">
      
      <div class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2">
        <div class="relative h-64 overflow-hidden bg-gray-100">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
               alt="TCC Internship" 
               class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
          <div class="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold">TCC</div>
          <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span class="text-white text-lg font-medium">ตำแหน่ง Front-End Development</span>
          </div>
        </div>
        <div class="p-8">
          <div class="flex justify-between items-start mb-4">
            <div>
              <p class="text-xs font-bold text-blue-500 uppercase mb-1">Internship</p>
              <h3 class="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition">ฝึกงานที่ TCC</h3>
            </div>
          </div>
          <ul class="text-gray-600 text-sm mb-6 space-y-2">
            <li>🔹 พัฒนาและดูแลเว็บไซต์ของบริษัท</li>
            <li>🔹 ออกแบบส่วนติดต่อผู้ใช้งาน (UI)</li>
            <li>🔹 ทำงานร่วมกับทีมพัฒนาด้วยเทคโนโลยีสมัยใหม่</li>
          </ul>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full uppercase">HTML/CSS</span>
            <span class="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full uppercase">Vue.js</span>
            <span class="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full uppercase">Tailwind</span>
          </div>
        </div>
      </div>

      <div class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2">
        <div class="relative h-64 overflow-hidden bg-gray-100">
          <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
               alt="NBT Internship" 
               class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
          <div class="absolute top-4 left-4 bg-green-600 text-white px-4 py-1 rounded-full text-xs font-bold">NBT 11</div>
          <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span class="text-white text-lg font-medium">ตำแหน่ง Multimedia & IT Support</span>
          </div>
        </div>
        <div class="p-8">
          <div class="flex justify-between items-start mb-4">
            <div>
              <p class="text-xs font-bold text-red-500 uppercase mb-1">Internship</p>
              <h3 class="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition">ฝึกงานที่ NBT</h3>
            </div>
          </div>
          <ul class="text-gray-600 text-sm mb-6 space-y-2">
            <li>🔸 ออกแบบหน้าปกข่าวและสื่อกราฟิก</li>
            <li>🔸 ตัดต่อคลิปข่าวและจัดการสื่อวิดีโอ</li>
            <li>🔸 ดูแลระบบคอมพิวเตอร์และลงโปรแกรม</li>
          </ul>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-red-50 text-red-600 text-[10px] font-bold rounded-full uppercase">Premiere Pro</span>
            <span class="px-3 py-1 bg-red-50 text-red-600 text-[10px] font-bold rounded-full uppercase">Photoshop</span>
            <span class="px-3 py-1 bg-red-50 text-red-600 text-[10px] font-bold rounded-full uppercase">IT Support</span>
          </div>
        </div>
      </div>
    </main>
<section id="activities" class="max-w-6xl mx-auto px-6 mt-24">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">กิจกรรมและผลงานอื่นๆ</h2>
        <div class="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(act, index) in activities" 
          :key="index"
          class="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer"
        >
          <img 
            :src="act.image" 
            :alt="act.title" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          >

          <div class="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
            <span class="text-blue-300 text-xs font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
              {{ act.date }}
            </span>
            <h3 class="text-white text-xl font-bold mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
              {{ act.title }}
            </h3>
            <p class="text-blue-100 text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
              {{ act.description }}
            </p>
          </div>

          <div class="absolute bottom-0 left-0 right-0 h-1.5 bg-blue-600 group-hover:opacity-0 transition-opacity"></div>
        </div>
      </div>
    </section>

    <section id="skills" class="max-w-6xl mx-auto px-6 mt-20 scroll-mt-24">
    <h2 class="text-3xl font-bold mb-12 text-center text-gray-900">My Tech Stack & Tools</h2>
    
    <div class="flex flex-wrap justify-center gap-3 mb-12">
      <button 
        v-for="cat in categories" 
        :key="cat"
        @click="currentTab = cat"
        :class="[
          'px-6 py-2.5 rounded-xl font-medium transition-all duration-300 border',
          currentTab === cat 
            ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200 scale-105' 
            : 'bg-white text-gray-500 border-gray-100 hover:border-blue-200 hover:text-blue-600'
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <div 
        v-for="skill in filteredSkills" 
        :key="skill.name"
        class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 text-center group"
      >
        <div :class="['w-16 h-16 mx-auto mb-4 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300', skill.color]">
          <img :src="skill.icon" :alt="skill.name" class="w-full h-full object-contain">
        </div>
        <h3 class="font-bold text-gray-800 mb-3">{{ skill.name }}</h3>
        <span :class="['px-4 py-1 text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm', skill.labelColor]">
          {{ skill.level }}
        </span>
      </div>
    </div>

    <div v-if="filteredSkills.length === 0" class="text-center py-20 text-gray-400">
        <p>กำลังพัฒนาทักษะในส่วนนี้เพิ่มเติม...</p>
    </div>
</section>
  

  </div>
  <footer class="bg-white border-t border-gray-100 pt-16 pb-8 mt-20">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-gray-900">
              Sirisak <span class="text-blue-600">Buddee</span>
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              นักศึกษาสาขาระบบสารสนเทศ มทร.อีสาน วิทยาเขตขอนแก่น 
              มุ่งมั่นพัฒนาทักษะด้าน Web Development และเทคโนโลยีสมัยใหม่
            </p>
          </div>

          <div>
            <h4 class="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Navigation</h4>
            <ul class="space-y-3">
              <li>
                <a href="#experience" class="text-gray-500 hover:text-blue-600 text-sm transition-colors">สถานที่ฝึกงาน</a>
              </li>
              <li>
                <a href="#skills" class="text-gray-500 hover:text-blue-600 text-sm transition-colors">ทักษะความสามารถ (Skills)</a>
              </li>
              <li>
                <RouterLink to="/" class="text-gray-500 hover:text-blue-600 text-sm transition-colors">กลับหน้าประวัติส่วนตัว</RouterLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Contact Me</h4>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 text-gray-500 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 012 2v-7a2 2 0 01-2-2H5a2 2 0 01-2 2v7a2 2 0 012 2z" />
                </svg>
                sirisak.bd@gmail.com
              </li>
              <li class="flex items-center gap-3 text-gray-500 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                065-084-1409
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-400 text-xs">
            © 2026 Sirisak Buddee. All rights reserved.
          </p>
          <div class="flex items-center gap-2">
            <span class="text-xs text-gray-400">Powered by</span>
            <span class="text-xs font-bold text-emerald-500">Vue.js</span>
            <span class="text-gray-300">|</span>
            <span class="text-xs font-bold text-sky-500">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
</template>

<style scoped>
/* ทำให้เลื่อนนุ่มนวล */
:deep(html) {
  scroll-behavior: smooth;
}

/* กำหนดให้หยุดก่อนถึงหัวข้อเล็กน้อย เพื่อไม่ให้ Navbar บัง */
.scroll-mt-24 {
  scroll-margin-top: 6rem; /* ประมาณ 96px */
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>

<script setup>
import { ref, computed } from 'vue'

// --- ข้อมูลกิจกรรม (Activities) ---
const activities = ref([
  {
    title: 'Project IOT',
    description: 'มินิโปรเจค iOT ให้อาหารสุนัขอัตโนมัติ โดยใช้การควบคุมผ่านระบบออนไลน์และเซ็นเซอร์วัดปริมาณอาหาร',
    image: new URL('../assets/images/projectiot.png', import.meta.url).href,
    date: '10/10/2022',
    tags: ['Arduino', 'IoT', 'C++']
  },
  {
    title: 'TCC Technology (TCCtech)',
    description: 'ภาพรวมช่วงฝึกงานที่ TCC Technology เรียนรู้ระบบ Front-End และการทำงานร่วมกับทีมพัฒนาในระดับองค์กร',
    image: new URL('../assets/images/TCC.jpg', import.meta.url).href,
    date: '28/10/2023',
    tags: ['Internship', 'Frontend', 'Vue.js']
  },
  {
    title: 'กิจกรรมแข่งขัน Happy Soft',
    description: 'เป็นตัวแทนไปแข่งขันการพัฒนาซอฟต์แวร์ Happy Soft และได้รับรางวัลอันดับที่ 3',
    image: new URL('../assets/images/BIS.jpg', import.meta.url).href,
    date: '25/12/2022',
    tags: ['Competition', 'Software Dev']
  }
])

// --- ข้อมูลทักษะ (Skills) ---
const skills = [
  { name: 'Nuxt.js Project', level: 'Intermediate', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg', color: 'bg-emerald-50', labelColor: 'bg-yellow-500' },
  { name: 'Vue.js Project', level: 'Intermediate', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', color: 'bg-emerald-50', labelColor: 'bg-yellow-500' },
  { name: 'Design System', level: 'Intermediate', category: 'Design', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: 'bg-pink-50', labelColor: 'bg-yellow-500' },
  { name: 'HTML', level: 'Advanced', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: 'bg-orange-50', labelColor: 'bg-green-500' },
  { name: 'CSS', level: 'Advanced', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: 'bg-blue-50', labelColor: 'bg-green-500' },
  { name: 'JavaScript', level: 'Basic', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'bg-yellow-50', labelColor: 'bg-red-500' },
  { name: 'Tailwind CSS', level: 'Intermediate', category: 'Frontend', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', color: 'bg-sky-50', labelColor: 'bg-yellow-500' },
  { name: 'PostgreSQL', level: 'Intermediate', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: 'bg-slate-100', labelColor: 'bg-yellow-500' },
  { name: 'Gemini', level: 'Advanced', category: 'Tools', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png', color: 'bg-gradient-to-br from-blue-50 to-purple-50', labelColor: 'bg-green-500' },
  { name: 'VS Code', level: 'Advanced', category: 'Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: 'bg-blue-50', labelColor: 'bg-green-500' }
]

// --- ระบบ Modal ---
const isModalOpen = ref(false)
const selectedActivity = ref(null)

const openActivity = (activity) => {
  selectedActivity.value = activity
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = 'auto'
}

// --- ระบบ Filter Skills ---
const currentTab = ref('All')
const categories = ['All', 'Frontend', 'Backend', 'Design', 'Tools']
const filteredSkills = computed(() => {
  if (currentTab.value === 'All') return skills
  return skills.filter(skill => skill.category === currentTab.value)
})
</script>