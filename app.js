/* ==========================================================================
   CV DASHBOARD INTERACTIVE CONTROLLER - LUIS GALLARDO
   ========================================================================== */

// 1. DICTIONARY TRANSLATIONS (BILINGUAL SYSTEM)
const translations = {
    es: {
        sidebar_title: "Analista / Programador",
        menu_overview: "Resumen",
        menu_experience: "Trayectoria",
        menu_education: "Formación",
        menu_skills: "Habilidades",
        menu_portfolio: "Sistemas",
        header_main_title: "Panel de Control Profesional",
        header_sub_title: "Currículum & Sistemas Implementados por Luis Gallardo",
        status_active: "Disponible para proyectos",
        card_title: "Analista de Sistemas & Programador",
        info_age: "Edad",
        info_years: "Años",
        info_id: "Cédula",
        info_birth: "Nacimiento",
        info_loc: "Ubicación",
        bio_header: "Perfil Profesional",
        bio_p1: "Soy un analista de sistemas y programador altamente motivado y apasionado. Cuento con una sólida capacidad para trabajar en equipo, tomar decisiones lógicas y resolver problemas complejos de forma ágil, adaptándome al cambio y en constante evolución.",
        bio_p2: "A lo largo de mi carrera académica y profesional, he enfocado mis esfuerzos en el desarrollo de soluciones web completas (Full-Stack), desde la infraestructura de bases de datos hasta la interfaz del usuario. He liderado con éxito la automatización de censos comunales y la creación de plataformas de comercio electrónico robustas.",
        stat_projects: "Sistemas creados",
        stat_degrees: "Títulos / Carreras",
        stat_responsive: "Responsive UI",
        portfolio_summary_header: "Sistemas Relevantes Implementados",
        summary_roble: "Plataforma e-commerce para Bodegón. Frontend Next.js, API en FastAPI, base de datos PostgreSQL.",
        summary_araure: "Sistema de Censo Comunal. Next.js 14, ORM Prisma, Supabase y gráficos BI dinámicos.",
        summary_fitness: "Landing page corporativa para Centro de Entrenamiento. HTML5, CSS3 Grid y Javascript.",
        summary_tikios: "Diseño de interfaz deportiva y estructuración de redes sociales con enfoque corporativo.",
        exp_roble_role: "Encargado de Caja y Establecimiento",
        exp_roble_desc: "Responsable directo del área de caja, control de facturación y arqueos de fondos. Encargado del establecimiento como tal, coordinando la logística, supervisión de personal, inventario y el correcto funcionamiento operativo general del local.",
        tag_cash: "Control de Caja",
        tag_ops: "Gestión Operativa",
        tag_customer: "Atención al Cliente",
        tag_supervision: "Supervisión de Tienda",
        tag_logistics: "Logística",
        exp_mango_role: "Auxiliar Integral de Tienda",
        exp_mango_desc: "Asistencia operativa multifuncional en atención al cliente, logística interna, y soporte directo a los sistemas informáticos de ventas e inventario, colaborando en la resolución de incidentes técnicos en los terminales de punto de venta.",
        exp_hiper_role: "Cajero Profesional",
        exp_hiper_desc: "Gestión y registro de transacciones comerciales masivas en sistemas de punto de venta, cuadre de caja de alta precisión diaria, atención oportuna al cliente y manejo ágil de múltiples formas de pago (moneda nacional, divisas y transacciones electrónicas).",
        edu_upt_inst: "Universidad UPT Portuguesa",
        edu_upt_title: "P.N.F. Ingeniería Informática",
        edu_upt_desc: "Estudios enfocados en la arquitectura de redes, algoritmos, bases de datos avanzadas, ingeniería de software y desarrollo de proyectos sociotecnológicos aplicados a necesidades comunales reales.",
        edu_iutepi_inst: "Instituto IUTEPI - Acarigua",
        edu_iutepi_title: "T.S.U. Análisis de Sistemas",
        edu_iutepi_desc: "Estudios dedicados al análisis y diseño de flujos informáticos, diseño relacional de datos, metodologías ágiles de desarrollo (Scrum) y programación orientada a objetos en entornos web y de escritorio.",
        edu_iutepi_date: "2024 - Actual",
        edu_udemy_title: "Desarrollo Web Completo",
        edu_udemy_desc: "Certificación enfocada en el desarrollo de aplicaciones web dinámicas y adaptativas utilizando lenguajes core del desarrollo web tradicional y relacional.",
        edu_fermin_inst: "U.E. Colegio Privado \"Fermín Toro\"",
        edu_fermin_title: "Bachiller en Ciencias",
        edu_fermin_desc: "Formación académica integral de nivel medio diversificado, sentando las bases científicas y matemáticas fundamentales para las ciencias de la computación.",
        skills_tech: "Habilidades Técnicas",
        skills_soft: "Habilidades Blandas",
        skills_langs: "Idiomas",
        soft_proactive: "Proactivo",
        soft_teamwork: "Trabajo en Equipo",
        soft_mind: "Mente Abierta",
        soft_problem: "Resolución de Problemas",
        soft_adapt: "Adaptación al Cambio",
        lang_es: "Español",
        lang_es_lvl: "Nativo",
        lang_en: "Inglés",
        lang_en_lvl: "Intermedio",
        portfolio_header: "Portafolio Interactivo de Sistemas",
        portfolio_sub: "Ejecuta y experimenta simulaciones en tiempo real de los sistemas web reales desarrollados por Luis Gallardo.",
        roble_search_placeholder: "Buscar productos en Roble Market...",
        roble_cart_title: "Tu Pedido",
        roble_cart_empty: "El carrito está vacío.",
        roble_subtotal: "Subtotal",
        roble_delivery: "Envío / Delivery",
        roble_total: "Total General",
        roble_opt_pickup: "Retirar en tienda",
        roble_opt_delivery: "Delivery (+$2.50)",
        roble_btn_pay: "Proceder a Pagar",
        araure_bi_title: "BI Demográfico - Censo Escuela",
        araure_pyr_title: "Pirámide de Población (Censo Comunal)",
        araure_pyr_men: "MASCULINO (Cian)",
        araure_pyr_women: "FEMENINO (Esmeralda)",
        araure_med_title: "Top 3 Demanda de Medicamentos Censados",
        araure_med_units: "Regs",
        araure_form_title: "Simulador de Censo Comunal",
        araure_step1_header: "Paso 1: Datos de Vivienda y Dirección",
        araure_label_street: "Calle / Avenida",
        araure_label_house: "Nro Casa",
        araure_label_type: "Tipo de Vivienda",
        araure_house_opt: "Casa",
        araure_label_services: "Servicios Básicos Disponibles",
        srv_water: "Agua Potable",
        srv_power: "Electricidad",
        srv_gas: "Gas Comunal",
        srv_net: "Internet",
        araure_step2_header: "Paso 2: Jefe de Familia & Condiciones de Salud",
        araure_label_name: "Nombre Completo",
        araure_label_id: "Cédula",
        araure_label_gender: "Género",
        araure_gender_m: "Masculino",
        araure_gender_f: "Femenino",
        araure_label_med_req: "Medicamento Requerido",
        araure_med_none: "Ninguno / Sano",
        araure_label_pending_list: "Historial local de envío",
        btn_back: "Volver",
        btn_next: "Siguiente",
        gym_active_members: "Atletas Activos hoy",
        gym_coaches: "Entrenadores Pro",
        gym_hours: "Horario Semanal",
        gym_scheduler_title: "Calendario de Actividades Especiales",
        gym_day_week: "Lunes a Viernes",
        gym_day_sat: "Sábados",
        gym_th_time: "Hora",
        gym_th_class: "Actividad",
        gym_th_coach: "Entrenador",
        gym_th_intensity: "Intensidad",
        gym_trainer_1: "Head Coach & Antofit CEO",
        gym_trainer_2: "Entrenador de Fuerza Máxima",
        gym_trainer_3: "Especialista en Yoga & Vinyasa",
        modal_payment_title: "Pago Móvil de Confirmación",
        modal_payment_sub: "Realiza la transferencia desde la app de tu banco a los siguientes datos simulados y presiona confirmar:",
        pm_bank: "Banco",
        pm_phone: "Teléfono",
        pm_id: "Cédula / RIF",
        pm_amount: "Monto a Transferir",
        pm_ref_label: "Número de Referencia Bancaria (Últimos 4 dígitos)",
        pm_btn_confirm: "Confirmar Pago Móvil",
        toast_add_cart: "Agregado al carrito: ",
        toast_limit: "Límite de stock alcanzado.",
        toast_pm_success: "¡Pago Móvil Confirmado! Webhook bancario recibido.",
        toast_pm_invalid: "Error: Ingresa los 4 dígitos de la referencia bancaria.",
        toast_censo_success: "Censo enviado. Registrado localmente como PENDIENTE.",
        toast_censo_err: "Por favor, completa los campos requeridos.",
        lang_switch_desc: "Español",
        out_of_stock_tag: "AGOTADO",
        in_stock_tag: "DISPONIBLE"
    },
    en: {
        sidebar_title: "Analyst / Programmer",
        menu_overview: "Overview",
        menu_experience: "Experience",
        menu_education: "Education",
        menu_skills: "Skills",
        menu_portfolio: "Systems",
        header_main_title: "Professional Control Panel",
        header_sub_title: "Resume & Systems Implemented by Luis Gallardo",
        status_active: "Available for projects",
        card_title: "Systems Analyst & Programmer",
        info_age: "Age",
        info_years: "Years",
        info_id: "ID Card",
        info_birth: "Birth Date",
        info_loc: "Location",
        bio_header: "Professional Profile",
        bio_p1: "I am a highly motivated and passionate systems analyst and programmer. I possess a strong ability for teamwork, making logical decisions, and solving complex problems in an agile manner, adapting to changes and constantly evolving.",
        bio_p2: "Throughout my academic and professional career, I have focused my efforts on developing complete web solutions (Full-Stack), from database design to the user interface. I have successfully led the automation of communal census systems and the creation of robust e-commerce platforms.",
        stat_projects: "Created Systems",
        stat_degrees: "Degrees / Careers",
        stat_responsive: "Responsive UI",
        portfolio_summary_header: "Relevant Systems Implemented",
        summary_roble: "E-commerce platform for Bodegón. Next.js Frontend, FastAPI API, PostgreSQL database.",
        summary_araure: "Communal Census System. Next.js 14, Prisma ORM, Supabase and dynamic BI charts.",
        summary_fitness: "Corporate landing page for Training Center. HTML5, CSS3 Grid and Javascript.",
        summary_tikios: "Sports interface design and structuring of social media with a corporate focus.",
        exp_roble_role: "Cashier & Store Supervisor",
        exp_roble_desc: "Directly responsible for the cash register area, billing control, and daily cash balancing. In charge of the establishment itself, coordinating logistics, staff supervision, inventory management, and the correct overall operational functioning of the store.",
        tag_cash: "Cash Control",
        tag_ops: "Store Operations",
        tag_customer: "Customer Service",
        tag_supervision: "Store Supervision",
        tag_logistics: "Logistics",
        exp_mango_role: "Integral Store Assistant",
        exp_mango_desc: "Multifunctional operational support in customer service, internal logistics, and direct assistance for sales and inventory software systems, helping resolve technical issues at POS terminals.",
        exp_hiper_role: "Professional Cashier",
        exp_hiper_desc: "Handling and recording massive commercial transactions on POS systems, high-precision daily cash balancing, timely customer service, and agile management of multiple payment forms (local currency, forex, and electronic payments).",
        edu_upt_inst: "UPT Portuguesa University",
        edu_upt_title: "B.S. Software Engineering",
        edu_upt_desc: "Studies focused on network architecture, algorithms, advanced databases, software engineering, and socio-technological development projects applied to real community needs.",
        edu_iutepi_inst: "IUTEPI Institute - Acarigua",
        edu_iutepi_title: "A.S. Systems Analysis",
        edu_iutepi_desc: "Dedicated to the analysis and design of computer workflows, relational database design, agile development methodologies (Scrum), and object-oriented programming in web and desktop environments.",
        edu_iutepi_date: "2024 - Present",
        edu_udemy_title: "Complete Web Development",
        edu_udemy_desc: "Certification focused on building dynamic and responsive web applications using core web technologies and databases.",
        edu_fermin_inst: "U.E. \"Fermín Toro\" Private School",
        edu_fermin_title: "High School Diploma in Science",
        edu_fermin_desc: "Comprehensive high school education, providing the fundamental scientific and mathematical bases for computer sciences.",
        skills_tech: "Technical Skills",
        skills_soft: "Soft Skills",
        skills_langs: "Languages",
        soft_proactive: "Proactive",
        soft_teamwork: "Team Player",
        soft_mind: "Open Minded",
        soft_problem: "Problem Solver",
        soft_adapt: "Adaptable to Change",
        lang_es: "Spanish",
        lang_es_lvl: "Native",
        lang_en: "English",
        lang_en_lvl: "Intermediate",
        portfolio_header: "Interactive Systems Portfolio",
        portfolio_sub: "Run and experience real-time simulations of real web systems developed by Luis Gallardo.",
        roble_search_placeholder: "Search products in Roble Market...",
        roble_cart_title: "Your Order",
        roble_cart_empty: "The cart is empty.",
        roble_subtotal: "Subtotal",
        roble_delivery: "Delivery Fee",
        roble_total: "Grand Total",
        roble_opt_pickup: "Store pickup",
        roble_opt_delivery: "Delivery (+$2.50)",
        roble_btn_pay: "Proceed to Pay",
        araure_bi_title: "Demographic BI - School Census",
        araure_pyr_title: "Population Pyramid (Communal Census)",
        araure_pyr_men: "MASCULINE (Cyan)",
        araure_pyr_women: "FEMENINO (Emerald)",
        araure_med_title: "Top 3 Demanded Census Medications",
        araure_med_units: "Regs",
        araure_form_title: "Communal Census Simulator",
        araure_step1_header: "Step 1: Housing & Address Details",
        araure_label_street: "Street / Avenue",
        araure_label_house: "House Number",
        araure_label_type: "Housing Type",
        araure_house_opt: "House",
        araure_label_services: "Available Basic Services",
        srv_water: "Drinking Water",
        srv_power: "Electricity",
        srv_gas: "Communal Gas",
        srv_net: "Internet",
        araure_step2_header: "Step 2: Head of Household & Health Conditions",
        araure_label_name: "Full Name",
        araure_label_id: "ID Number",
        araure_label_gender: "Gender",
        araure_gender_m: "Male",
        araure_gender_f: "Female",
        araure_label_med_req: "Required Medication",
        araure_med_none: "None / Healthy",
        araure_label_pending_list: "Local shipment log",
        btn_back: "Back",
        btn_next: "Next",
        gym_active_members: "Active Athletes today",
        gym_coaches: "Pro Coaches",
        gym_hours: "Weekly Schedule",
        gym_scheduler_title: "Special Activities Schedule",
        gym_day_week: "Monday to Friday",
        gym_day_sat: "Saturdays",
        gym_th_time: "Time",
        gym_th_class: "Activity",
        gym_th_coach: "Instructor",
        gym_th_intensity: "Intensity",
        gym_trainer_1: "Head Coach & Antofit CEO",
        gym_trainer_2: "Maximum Strength Coach",
        gym_trainer_3: "Yoga & Vinyasa Specialist",
        modal_payment_title: "Confirmation Mobile Payment",
        modal_payment_sub: "Transfer from your bank app using the following simulated details and press confirm:",
        pm_bank: "Bank",
        pm_phone: "Phone Number",
        pm_id: "ID / Tax ID",
        pm_amount: "Amount to Transfer",
        pm_ref_label: "Bank Reference Number (Last 4 digits)",
        pm_btn_confirm: "Confirm Mobile Payment",
        toast_add_cart: "Added to cart: ",
        toast_limit: "Stock limit reached.",
        toast_pm_success: "Mobile Payment Confirmed! Bank Webhook received.",
        toast_pm_invalid: "Error: Enter the 4 digits of bank reference.",
        toast_censo_success: "Census sent. Locally registered as PENDING.",
        toast_censo_err: "Please fill in all required fields.",
        lang_switch_desc: "Español",
        out_of_stock_tag: "OUT OF STOCK",
        in_stock_tag: "IN STOCK"
    }
};

let currentLanguage = localStorage.getItem('portfolio_lang') || 'es';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    localStorage.setItem('portfolio_lang', currentLanguage);
    applyLanguage(currentLanguage);
}

function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Update language switch button text
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.querySelector('span').innerText = lang === 'es' ? 'English' : 'Español';
    }

    // Refresh simulation contents that rely on language state
    renderRobleProducts();
    updateCartDOM();
    updateCensusHistoryDOM();
    renderGymSchedule();
}

// 2. TAB CONTROLLER
const tabButtons = document.querySelectorAll('.nav-menu .nav-item, .mobile-nav-bar .mobile-nav-btn');
const tabContents = document.querySelectorAll('.tab-content');
const sidebar = document.getElementById('sidebar');
const hamburgerBtn = document.getElementById('hamburgerBtn');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');
        
        // Remove active state from all buttons
        tabButtons.forEach(b => {
            if (b.getAttribute('data-tab') === tabName) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });

        // Show active tab, hide others
        tabContents.forEach(content => {
            if (content.id === tabName) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });

        // Close sidebar on mobile after clicking
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            const icon = hamburgerBtn.querySelector('i');
            icon.className = 'fa-solid fa-bars';
        }

        // Scroll main panel to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Trigger animations for skill bars
        if (tabName === 'skills') {
            animateSkillBars();
        }
    });
});

// Mobile Hamburger Menu toggle
if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        const icon = hamburgerBtn.querySelector('i');
        if (sidebar.classList.contains('active')) {
            icon.className = 'fa-solid fa-xmark';
        } else {
            icon.className = 'fa-solid fa-bars';
        }
    });
}

// Technical Skill Bar animations
function animateSkillBars() {
    const bars = document.querySelectorAll('.skill-bar-fill');
    bars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
}


// 3. TOAST NOTIFICATION HELPER
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'toast-error' : ''}`;
    
    const icon = document.createElement('i');
    icon.className = type === 'error' ? 'fa-solid fa-circle-exclamation' : 'fa-solid fa-circle-check';
    
    const textSpan = document.createElement('span');
    textSpan.innerText = message;

    toast.appendChild(icon);
    toast.appendChild(textSpan);
    container.appendChild(toast);

    // Fade out and remove
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(15px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3500);
}


// 4. PORTFOLIO SYSTEMS TABS CONTROLLER
const projTabButtons = document.querySelectorAll('.p-tab-btn');
const projPanels = document.querySelectorAll('.portfolio-content-panel');

projTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const projName = btn.getAttribute('data-proj');
        
        projTabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        projPanels.forEach(panel => {
            if (panel.id === `project-${projName}`) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    });
});


// ==========================================
// SIMULATOR 1: ROBLE MARKET (E-commerce)
// ==========================================
const robleProducts = [
    { id: 1, nameEs: "Harina PAN de Maíz", nameEn: "PAN Corn Flour 1kg", price: 1.10, stock: 0, icon: "fa-solid fa-wheat-awn" },
    { id: 2, nameEs: "Nutella Chocolate 350g", nameEn: "Nutella Spread 350g", price: 5.50, stock: 12, icon: "fa-solid fa-jar" },
    { id: 3, nameEs: "Coca-Cola Refresco 2L", nameEn: "Coca-Cola Soda 2L", price: 2.00, stock: 8, icon: "fa-solid fa-bottle-water" },
    { id: 4, nameEs: "Cerveza Polar Light Tercio", nameEn: "Polar Light Beer 330ml", price: 1.50, stock: 24, icon: "fa-solid fa-beer-mug-empty" },
    { id: 5, nameEs: "Queso Amarillo 1kg", nameEn: "Yellow Cheese 1kg", price: 6.20, stock: 5, icon: "fa-solid fa-cheese" },
    { id: 6, nameEs: "Café Fama de América 500g", nameEn: "Fama de America Coffee 500g", price: 4.80, stock: 15, icon: "fa-solid fa-mug-hot" }
];

let cart = [];
const deliveryPrice = 2.50;

function renderRobleProducts() {
    const grid = document.getElementById('catalogGrid');
    const searchVal = document.getElementById('robleSearch').value.toLowerCase();
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const filtered = robleProducts.filter(p => {
        const name = currentLanguage === 'es' ? p.nameEs.toLowerCase() : p.nameEn.toLowerCase();
        return name.includes(searchVal);
    });

    filtered.forEach(p => {
        const isOutOfStock = p.stock === 0;
        const name = currentLanguage === 'es' ? p.nameEs : p.nameEn;
        const statusText = isOutOfStock 
            ? `<span class="product-status status-outstock">${translations[currentLanguage].out_of_stock_tag}</span>` 
            : `<span class="product-status status-instock">${translations[currentLanguage].in_stock_tag} (${p.stock})</span>`;
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-placeholder">
                <i class="${p.icon}"></i>
            </div>
            <div class="product-info">
                <h4>${name}</h4>
                ${statusText}
            </div>
            <div class="product-footer">
                <span class="product-price">$${p.price.toFixed(2)}</span>
                <button class="btn-add-cart" onclick="addProductToCart(${p.id})" ${isOutOfStock ? 'disabled' : ''}>
                    <i class="fa-solid fa-cart-plus"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function addProductToCart(productId) {
    const prod = robleProducts.find(p => p.id === productId);
    if (!prod || prod.stock <= 0) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        if (existing.qty < prod.stock) {
            existing.qty++;
            showToast(`${translations[currentLanguage].toast_add_cart} ${currentLanguage === 'es' ? prod.nameEs : prod.nameEn}`);
        } else {
            showToast(translations[currentLanguage].toast_limit, 'error');
        }
    } else {
        cart.push({ id: productId, qty: 1, price: prod.price });
        showToast(`${translations[currentLanguage].toast_add_cart} ${currentLanguage === 'es' ? prod.nameEs : prod.nameEn}`);
    }

    updateCartDOM();
}

function updateCartQty(productId, delta) {
    const prod = robleProducts.find(p => p.id === productId);
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.qty += delta;

    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== productId);
    } else if (item.qty > prod.stock) {
        item.qty = prod.stock;
        showToast(translations[currentLanguage].toast_limit, 'error');
    }

    updateCartDOM();
}

function updateCartDOM() {
    const list = document.getElementById('cartItemsList');
    const countBadge = document.getElementById('cartCount');
    const subtotalText = document.getElementById('cartSubtotal');
    const deliveryText = document.getElementById('cartDelivery');
    const totalText = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('btnCheckout');
    
    if (!list) return;

    if (cart.length === 0) {
        list.innerHTML = `<div class="cart-empty">${translations[currentLanguage].roble_cart_empty}</div>`;
        countBadge.innerText = '0';
        subtotalText.innerText = '$0.00';
        deliveryText.innerText = '$0.00';
        totalText.innerText = '$0.00';
        checkoutBtn.disabled = true;
        return;
    }

    list.innerHTML = '';
    let totalQty = 0;
    let subtotal = 0;

    cart.forEach(item => {
        const prod = robleProducts.find(p => p.id === item.id);
        const name = currentLanguage === 'es' ? prod.nameEs : prod.nameEn;
        totalQty += item.qty;
        subtotal += item.price * item.qty;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h5>${name}</h5>
                <span class="cart-item-qty">$${item.price.toFixed(2)} x ${item.qty}</span>
            </div>
            <div class="cart-item-actions">
                <button class="btn-qty" onclick="updateCartQty(${item.id}, -1)">-</button>
                <button class="btn-qty" onclick="updateCartQty(${item.id}, 1)">+</button>
            </div>
        `;
        list.appendChild(cartItem);
    });

    countBadge.innerText = totalQty;
    subtotalText.innerText = `$${subtotal.toFixed(2)}`;
    
    const isDelivery = document.getElementById('deliveryShip').checked;
    const shippingCost = isDelivery ? deliveryPrice : 0;
    deliveryText.innerText = `$${shippingCost.toFixed(2)}`;
    
    const grandTotal = subtotal + shippingCost;
    totalText.innerText = `$${grandTotal.toFixed(2)}`;
    checkoutBtn.disabled = false;
}

// Payment modal interactions
const checkoutBtn = document.getElementById('btnCheckout');
const modalOverlay = document.getElementById('checkoutModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const confirmPaymentBtn = document.getElementById('btnConfirmPayment');

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        const total = document.getElementById('cartTotal').innerText;
        document.getElementById('pmModalAmount').innerText = total;
        
        // Randomly select BDV or Mercantil for display payment info
        const isBDV = Math.random() > 0.5;
        document.getElementById('pmBankLabel').innerText = isBDV 
            ? "Banco de Venezuela (BDV)" 
            : "Mercantil Banco";
        
        document.getElementById('pmRef').value = '';
        modalOverlay.classList.add('active');
    });
}

if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });
}

if (confirmPaymentBtn) {
    confirmPaymentBtn.addEventListener('click', () => {
        const refInput = document.getElementById('pmRef').value.trim();
        if (refInput.length !== 4 || isNaN(refInput)) {
            showToast(translations[currentLanguage].toast_pm_invalid, 'error');
            return;
        }

        // Simulate Bank API checkout validation & webhook response
        confirmPaymentBtn.disabled = true;
        confirmPaymentBtn.innerText = currentLanguage === 'es' ? 'Validando...' : 'Verifying...';

        setTimeout(() => {
            // Deduct stocks
            cart.forEach(item => {
                const prod = robleProducts.find(p => p.id === item.id);
                if (prod) {
                    prod.stock = Math.max(0, prod.stock - item.qty);
                }
            });

            // Reset UI states
            confirmPaymentBtn.disabled = false;
            confirmPaymentBtn.innerText = translations[currentLanguage].pm_btn_confirm;
            modalOverlay.classList.remove('active');
            
            showToast(translations[currentLanguage].toast_pm_success);
            cart = [];
            updateCartDOM();
            renderRobleProducts();
        }, 1200);
    });
}

// Search field live typing in Roble Market
const robleSearch = document.getElementById('robleSearch');
if (robleSearch) {
    robleSearch.addEventListener('input', renderRobleProducts);
}


// ==========================================
// SIMULATOR 2: ARAURE TRICENTENARIA
// ==========================================
let censusHistory = [
    { id: 1, name: "María González", street: "Calle Principal", house: "Casa 45", gender: "F", med: "Losartan", date: "24/05/2026", status: "APROBADO" },
    { id: 2, name: "Jesús Torrealba", street: "Calle Bolívar", house: "Casa 12", gender: "M", med: "Ninguno", date: "25/05/2026", status: "APROBADO" },
    { id: 3, name: "Ana Alicia Montilla", street: "Av. Libertador", house: "Apto 4B", gender: "F", med: "Metformina", date: "26/05/2026", status: "APROBADO" }
];

let currentStep = 1;
const btnCensoNext = document.getElementById('btnCensoNext');
const btnCensoPrev = document.getElementById('btnCensoPrev');
const stepIndicator1 = document.getElementById('stepIndicator1');
const stepIndicator2 = document.getElementById('stepIndicator2');
const stepPanel1 = document.getElementById('stepPanel1');
const stepPanel2 = document.getElementById('stepPanel2');

function updateCensusFormDOM() {
    if (currentStep === 1) {
        stepPanel1.classList.add('active');
        stepPanel2.classList.remove('active');
        btnCensoPrev.style.display = 'none';
        stepIndicator1.className = 'step-node active';
        stepIndicator2.className = 'step-node';
        btnCensoNext.innerText = translations[currentLanguage].btn_next;
    } else {
        stepPanel1.classList.remove('active');
        stepPanel2.classList.add('active');
        btnCensoPrev.style.display = 'block';
        stepIndicator1.className = 'step-node completed';
        stepIndicator2.className = 'step-node active';
        btnCensoNext.innerText = currentLanguage === 'es' ? 'Enviar Censo' : 'Submit Census';
    }
}

if (btnCensoNext) {
    btnCensoNext.addEventListener('click', () => {
        if (currentStep === 1) {
            // Simply transition to step 2
            currentStep = 2;
            updateCensusFormDOM();
        } else {
            // Process form submit
            const nombre = document.getElementById('c_nombre').value.trim();
            const cedula = document.getElementById('c_cedula').value.trim();
            
            if (!nombre || !cedula) {
                showToast(translations[currentLanguage].toast_censo_err, 'error');
                return;
            }

            const c_calle = document.getElementById('c_calle').value;
            const c_casa = document.getElementById('c_casa').value;
            const c_gender = document.getElementById('c_gender').value;
            const c_med = document.getElementById('c_med').value;

            // Save censo entry
            const newRecord = {
                id: censusHistory.length + 1,
                name: nombre,
                street: c_calle,
                house: c_casa,
                gender: c_gender,
                med: c_med,
                date: new Date().toLocaleDateString(),
                status: "PENDIENTE"
            };
            censusHistory.push(newRecord);

            // Update stats indicators
            updateBIStats(c_gender, c_med);

            // Clear inputs
            document.getElementById('c_nombre').value = '';
            document.getElementById('c_cedula').value = '';
            document.getElementById('c_med').selectedIndex = 0;

            showToast(translations[currentLanguage].toast_censo_success);

            // Reset step
            currentStep = 1;
            updateCensusFormDOM();
            updateCensusHistoryDOM();
        }
    });
}

if (btnCensoPrev) {
    btnCensoPrev.addEventListener('click', () => {
        currentStep = 1;
        updateCensusFormDOM();
    });
}

function updateBIStats(gender, med) {
    // 1. Pyramid update (simply shift percentages slightly)
    const leftFills = document.querySelectorAll('.pyramid-bar-left .pyramid-fill');
    const rightFills = document.querySelectorAll('.pyramid-bar-right .pyramid-fill');
    
    if (gender === 'M') {
        // Adjust middle row values slightly
        leftFills[2].style.width = '78%';
        leftFills[2].nextElementSibling.innerText = '78%';
    } else {
        rightFills[2].style.width = '72%';
        rightFills[2].nextElementSibling.innerText = '72%';
    }

    // 2. Medication demand counts increase
    if (med === 'Losartan') {
        const val = document.getElementById('losartanVal');
        const bar = document.getElementById('losartanBar');
        const count = parseInt(val.innerText) + 1;
        val.innerText = count;
        bar.style.width = '95%';
    } else if (med === 'Metformina') {
        const val = document.getElementById('metforminaVal');
        const bar = document.getElementById('metforminaBar');
        const count = parseInt(val.innerText) + 1;
        val.innerText = count;
        bar.style.width = '72%';
    } else if (med === 'Salbutamol') {
        const val = document.getElementById('salbutamolVal');
        const bar = document.getElementById('salbutamolBar');
        const count = parseInt(val.innerText) + 1;
        val.innerText = count;
        bar.style.width = '42%';
    }
}

function updateCensusHistoryDOM() {
    const list = document.getElementById('censusListHistory');
    if (!list) return;

    list.innerHTML = '';
    
    [...censusHistory].reverse().forEach(record => {
        const statusClass = record.status === 'PENDIENTE' ? 'color: var(--accent-cyan);' : 'color: var(--accent-emerald);';
        
        const element = document.createElement('div');
        element.style.padding = '6px 0';
        element.style.borderBottom = '1px solid rgba(255, 255, 255, 0.03)';
        element.innerHTML = `
            <div style="display:flex; justify-content:space-between;">
                <strong>${record.name} (${record.gender})</strong>
                <span style="font-weight:700; ${statusClass}">${record.status}</span>
            </div>
            <div style="color:var(--text-muted); font-size: 0.75rem; display:flex; justify-content:space-between; margin-top:2px;">
                <span>${record.street}, ${record.house}</span>
                <span>Med: ${record.med} • ${record.date}</span>
            </div>
        `;
        list.appendChild(element);
    });
}


// ==========================================
// SIMULATOR 3: ACARIGUA FITNESS HUB (Gym)
// ==========================================
const gymSchedule = {
    lun_vie: [
        { time: "06:00 AM", activityEs: "Crossfit WOD", activityEn: "Crossfit WOD", coach: "Antonio T.", intensity: "High" },
        { time: "08:00 AM", activityEs: "Yoga Vinyasa", activityEn: "Vinyasa Yoga", coach: "Valeria M.", intensity: "Low" },
        { time: "12:00 PM", activityEs: "Open Gym / Pesas", activityEn: "Open Gym / Weights", coach: "Alejandro R.", intensity: "Med" },
        { time: "06:00 PM", activityEs: "Crossfit WOD", activityEn: "Crossfit WOD", coach: "Diego T.", intensity: "High" },
        { time: "07:30 PM", activityEs: "Powerlifting Pro", activityEn: "Pro Powerlifting", coach: "Alejandro R.", intensity: "High" }
    ],
    sab: [
        { time: "08:00 AM", activityEs: "Extreme HIIT", activityEn: "Extreme HIIT Circuit", coach: "Diego T.", intensity: "High" },
        { time: "10:00 AM", activityEs: "Yoga Regenerativo", activityEn: "Restore Yoga", coach: "Valeria M.", intensity: "Low" },
        { time: "11:30 AM", activityEs: "Open Gym / Pesas", activityEn: "Open Gym / Free Weights", coach: "Alejandro R.", intensity: "Med" }
    ]
};

function renderGymSchedule() {
    const tbody = document.getElementById('scheduleTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';
    
    // Check which tab button is active
    const activeBtn = document.querySelector('#gymDaySelector .day-btn.active');
    const selectedDay = activeBtn ? activeBtn.getAttribute('data-day') : 'lun_vie';
    
    const rows = gymSchedule[selectedDay] || [];
    
    rows.forEach(r => {
        const activity = currentLanguage === 'es' ? r.activityEs : r.activityEn;
        
        let intensityClass = 'intensity-med';
        if (r.intensity === 'High') intensityClass = 'intensity-high';
        if (r.intensity === 'Low') intensityClass = 'intensity-low';
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="schedule-time">${r.time}</td>
            <td class="schedule-class">${activity}</td>
            <td class="schedule-instructor">${r.coach}</td>
            <td><span class="schedule-intensity ${intensityClass}">${r.intensity}</span></td>
        `;
        tbody.appendChild(row);
    });
}

// Day button clicks for scheduler
const dayBtns = document.querySelectorAll('#gymDaySelector .day-btn');
dayBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        dayBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGymSchedule();
    });
});

// Visitor counter tick simulator
function startVisitorTicker() {
    const counterEl = document.getElementById('activeMembers');
    if (!counterEl) return;

    setInterval(() => {
        const current = parseInt(counterEl.innerText);
        // Ticks up/down by -4 to +6
        const delta = Math.floor(Math.random() * 11) - 4; 
        const nextVal = Math.max(350, Math.min(500, current + delta));
        counterEl.innerText = nextVal;
    }, 4000);
}


// ==========================================
// APPLICATION INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Language Switcher Bind
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }

    // Connect Delivery/Pickup radio inputs to update DOM
    const deliveryOptionRadios = document.getElementsByName('deliveryOpt');
    deliveryOptionRadios.forEach(radio => {
        radio.addEventListener('change', updateCartDOM);
    });

    // Mobile nav tab buttons integration
    const mobileNavButtons = document.querySelectorAll('.mobile-nav-bar .mobile-nav-btn');
    mobileNavButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.getAttribute('data-tab');
            
            // Mirror onto desktop sidebar buttons
            const desktopBtn = document.querySelector(`.sidebar .nav-item[data-tab="${tabName}"]`);
            if (desktopBtn) desktopBtn.click();
        });
    });

    // Run Initializers
    applyLanguage(currentLanguage);
    startVisitorTicker();
});
