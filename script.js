// Datos de categorías
const categories = [
    { id: 'tech', name: 'Tecnología', color: 'from-cyan-500 to-blue-600', bgColor: 'bg-gray-950' },
    { id: 'art', name: 'Arte', color: 'from-yellow-400 to-yellow-500', bgColor: 'bg-yellow-950' },

    { id: 'sports', name: 'Deportes', color: 'from-green-500 to-emerald-600', bgColor: 'bg-green-950' },
    { id: 'reforzamientos', name: 'Reforzamientos', color: 'from-green-500 to-emerald-600', bgColor: 'bg-green-950' },
];

// Datos de cursos por categoría
const coursesByCategory = {
    tech: [
        {
            title: "ELECTROJÓVENES",
            description: "Este taller está diseñado para jovenes curiosos  que quieren aprender los fundamentos de la electricidad y explorar  como funciona el mundo electrico",
            icon: "code-2",
            image: "img/electricidad.jpeg",
            url: "electro.html",
            price: "consultar",
            videoUrl: "img/clases_particulares.mp4",
            curriculum: [
                "Introducción a la electricidad básica",
                "Circuitos eléctricos fundamentales",
                "Medición y uso de instrumentos",
                "Seguridad eléctrica",
                "Proyectos prácticos",
                "Evaluación y certificación"
            ]
           
        },
        {
            title: "Instalación de Cámaras",
            description: "El taller de instalación  de redes de cámaras  te enseñará a crear conexiones y a  instalar cámaras de seguridad, paso a paso. Aprenderás a usar todo tipo de herramientas y realizar conexiones",
            icon: "cpu",
            image: "img/camaras.jpeg",
            url: "camara.html",
              price: "consultar",
              videoUrl: "https://www.youtube.com/shorts/HHshGskl_uk",
              curriculum: [
                  "Introducción a la electricidad básica",
                  "Circuitos eléctricos fundamentales",
                  "Medición y uso de instrumentos",
                  "Seguridad eléctrica",
                  "Proyectos prácticos",
                  "Evaluación y certificación"
              ]
           
        },
        {
            title: "Tech Lab",
            description: "Los estudiantes de Secundaria  aprenderán a ensamblar  una computadora desde cero y descubriran como resolver problemas técnicos básicos",
            icon: "database",
            image: "img/computadoras.jpeg",
            url: "computadoras.html",
              price: "consultar",
              videoUrl: "",
              curriculum: [
                  "Introducción a la electricidad básica",
                  "Circuitos eléctricos fundamentales",
                  "Medición y uso de instrumentos",
                  "Seguridad eléctrica",
                  "Proyectos prácticos",
                  "Evaluación y certificación"
              ]
           
        },
        {
            title: "Robotica",
            description: "Los estudiantes de secundaria exploraran la robotica, diseñando  y construyendo robots. Este taller es práctico y apto para todos los que estén interesados en la ciencia e ingeniería",
            icon: "database",
            image: "img/robotica.jpeg",
            url: "robotica.html",
              price: "consultar"
           
        },   {
            title: "Diseño",
            description: "Los estudiantes desccubrirán el emocinante mundo del diseño gráfico, aprendiendo a crear desde logos y posters hasta piezas digitales para redes y mucho más ",
            icon: "database",
            image: "img/diseño.jpeg",
             price: "consultar",
             url: "diseño.html",
             videoUrl: "",
             curriculum: [
                 "Introducción a la electricidad básica",
                 "Circuitos eléctricos fundamentales",
                 "Medición y uso de instrumentos",
                 "Seguridad eléctrica",
                 "Proyectos prácticos",
                 "Evaluación y certificación"
             ]
           
        }
    ],
    art: [
        {
            title: "Danza",
            description: "Bienvenidos a Danza en Movimiento, Este taller es el lugar perfecto para los adolescentes que desean expresarse a través del movimiento y la música.",
            icon: "brush",
            image: "img/danza.jpeg",
              price: "consultar",
              url: "danza.html",
              videoUrl: "",
              curriculum: [
                  "Introducción a la electricidad básica",
                  "Circuitos eléctricos fundamentales",
                  "Medición y uso de instrumentos",
                  "Seguridad eléctrica",
                  "Proyectos prácticos",
                  "Evaluación y certificación"
              ]
            
        },
        {
            title: "Taller de Cocina",
            description: "Descubre el chef que llevas dentro ! En este taller  aprenderás a preparar platillos deliciosos, sencillos y llenos  de sabor  que sorprenderán a tu familia.",
            icon: "camera",
            image: "img/cocina.jpeg",
              price: "consultar",
              url: "cocina.html",
              videoUrl: "",
              curriculum: [
                  "Introducción a la electricidad básica",
                  "Circuitos eléctricos fundamentales",
                  "Medición y uso de instrumentos",
                  "Seguridad eléctrica",
                  "Proyectos prácticos",
                  "Evaluación y certificación"
              ]
            
        },
        {
            title: "Arte Creativo",
            description: "Este taller està diseñado para estudiantes que quieren liberar su imaginaciòn y experimentar con diferentes formas de arte",
            icon: "camera",
            image: "img/artecreativo.jpeg",
            url: "arte.html",
             price: "consultar",
             videoUrl: "",
             curriculum: [
                 "Introducción a la electricidad básica",
                 "Circuitos eléctricos fundamentales",
                 "Medición y uso de instrumentos",
                 "Seguridad eléctrica",
                 "Proyectos prácticos",
                 "Evaluación y certificación"
             ]
        },
       
    ],
    sports: [
        {
            title: "Fuerda y Disciplina MMA",
            description: "Los adolescentes se adentrarán en el emocinante mundo de las artes marciales mixtas(MMA),  una disciplina  que combina fuerza, agilidad y autocontrol",
            icon: "dumbbell",
            image: "img/artesmarciales.jpeg",
              price: "consultar",
              url: "mma.html",
              videoUrl: "",
              curriculum: [
                  "Introducción a la electricidad básica",
                  "Circuitos eléctricos fundamentales",
                  "Medición y uso de instrumentos",
                  "Seguridad eléctrica",
                  "Proyectos prácticos",
                  "Evaluación y certificación"
              ]
            
        }
      
    ],
    reforzamientos: [
        {
            title: "Clases de Matematicas, Reforzamientos",
            description: "Brindamos clases de reforzamientos en las áreas de matematicas de manera grupal e individual",
            icon: "dumbbell",
            image: "img/taller_matematica.jpg",
            price: "consultar",
            url: "matematicas.html",
            videoUrl: "",
            curriculum: [
                "Trigonometría",
                "Geometría",
                "Física",
                "Álgebra",
                "Razonamiento Matematico",
                "Aritmetica"
            ]
           
        }, 
        {
            title: "Clases de Reforzamientos Letras ",
            description: "Brindamos clases de reforzamientos en el área de letras ",
            icon: "dumbbell",
            image: "img/taller_letras.jpg",
            price: "consultar",
            url: "matematicas.html",
            videoUrl: "",
            curriculum: [
                "Trigonometría",
                "Geometría",
                "Física",
                "Álgebra",
                "Razonamiento Matematico",
                "Aritmetica"
            ]
           
        }, 
      
    ]


};




// Inicializar iconos de Lucide
lucide.createIcons();

// Contador de progreso
let progress = 0;
const progressText = document.getElementById('progress-text');
const progressInterval = setInterval(() => {
    progress++;
    progressText.textContent = `${progress}%`;
    if (progress >= 100) {
        clearInterval(progressInterval);
        setTimeout(showContent, 500);
    }
}, 20);

// Mostrar contenido principal
function showContent() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').classList.remove('hidden');
}

// Crear tarjeta de curso
function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    
    const whatsappLink = `https://wa.me/51924678713?text=Hola,%20estoy%20interesado%20en%20el%20curso%20de%20${encodeURIComponent(course.title)}`;
    
    card.innerHTML = `
        <div class="course-image">
            <img src="${course.image}" alt="${course.title}">
            <div class="course-icon">
                <i data-lucide="${course.icon}"></i>
            </div>
        </div>
        <div class="course-content">
            <h3 class="course-title">${course.title}</h3>
            <p class="course-description">${course.description}</p>
            <div class="course-footer">
             <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" class="enroll-button">
              Consultar Info
               
                <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" class="enroll-button">
                    Inscribirse
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// Modal functionality
const modal = document.getElementById('courseModal');
const closeButton = document.getElementById('closeModal'); // Selecciona el botón de cierre del modal


const video = document.getElementById('courseVideo');

function openModal(courseTitle) {
    const course = findCourseByTitle(courseTitle);
    if (!course) return;

    // Actualizar contenido del modal
    document.getElementById('courseTitle').textContent = course.title;
    document.getElementById('courseDescription').textContent = course.description;

    // Actualizar el enlace del video, verificando si es de YouTube o un archivo local
    if (course.videoUrl.includes('youtube.com') || course.videoUrl.includes('youtu.be')) {
        // Si es un enlace de YouTube, extraer el ID del video y usar un formato compatible con embed
        const videoId = course.videoUrl.split('/').pop().split('?')[0];
        video.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    } else if (course.videoUrl.endsWith('.mp4')) {
        // Si es un video local, cargar directamente el archivo en el `src`
        video.src = course.videoUrl;
    } else {
        video.src = ''; // Si no hay video, dejar en blanco
    }

    // Mostrar el temario
    const curriculumContent = document.getElementById('curriculumContent');
    curriculumContent.innerHTML = course.curriculum
        .map(item => `<li>${item}</li>`)
        .join('');

    // Mostrar el modal
    modal.classList.remove('hidden');
    lucide.createIcons();
}




function closeModal() {
    modal.classList.remove('active');
    video.pause();
    video.src = '';
}

// Helper function to find course by title
function findCourseByTitle(title) {
    for (const category in coursesByCategory) {
        const course = coursesByCategory[category].find(c => c.title === title);
        if (course) return course;
    }
    return null;
}
function findCourseByTitle(title) {
    for (const category in coursesByCategory) {
        const course = coursesByCategory[category].find(c => c.title === title);
        if (course) return course;
    }
    return null;
}

// Crear filtros de categoría
function createCategoryFilters() {
    const filterContainer = document.createElement('div');
    filterContainer.className = 'category-filters';
    filterContainer.innerHTML = `
        <div class="flex justify-center gap-4 mb-12">
            ${categories.map(category => `
                <button
                    data-category="${category.id}"
                    class="category-btn px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                        category.id === 'tech' ? `bg-gradient-to-r ${category.color} text-white shadow-lg` : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }"
                >
                    ${category.name}
                </button>
            `).join('')}
        </div>
    `;
    
    return filterContainer;
}


// Renderizar detalles de cada curso.


const renderDetallesPorCurso =() =>{
const coursescategoria=document.getElementById('courses-detallado');



}

// Renderizar cursos por categoría
function renderCourses(categoryId) {
    const coursesContainer = document.getElementById('courses-container');
    coursesContainer.innerHTML = '';
    coursesByCategory[categoryId].forEach(course => {
        coursesContainer.appendChild(createCourseCard(course));
    });
    lucide.createIcons();
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    const coursesContainer = document.getElementById('courses-container');
    
    // Insertar filtros antes del contenedor de cursos
    main.insertBefore(createCategoryFilters(), coursesContainer);
    
    // Manejar clics en los filtros
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const categoryId = e.target.dataset.category;
            
            // Actualizar estilos de botones
            document.querySelectorAll('.category-btn').forEach(button => {
                const category = categories.find(c => c.id === button.dataset.category);
                if (button.dataset.category === categoryId) {
                    button.className = `category-btn px-6 py-3 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r ${category.color} text-white shadow-lg`;
                } else {
                    button.className = 'category-btn px-6 py-3 rounded-full font-semibold transition-all duration-300 bg-gray-800 text-gray-300 hover:bg-gray-700';
                }
            });
            
            // Actualizar color de fondo
            const selectedCategory = categories.find(c => c.id === categoryId);
            document.body.className = selectedCategory.bgColor;
            
            // Renderizar cursos de la categoría seleccionada
            renderCourses(categoryId);
        });
    });
    
    // Renderizar cursos iniciales
    renderCourses('tech');
});

