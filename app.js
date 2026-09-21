/* ==========================================================================
   CV & PORTFOLIO DASHBOARD CONTROLLER - LUIS GALLARDO
   ========================================================================== */

// 1. DICTIONARY TRANSLATIONS (BILINGUAL SYSTEM: ES / EN)
const translations = {
    es: {
        sidebar_title: "Ingeniero de Software / Analista",
        btn_download_cv: "Descargar CV (PDF)",
        btn_print_cv: "Imprimir CV",
        menu_overview: "Resumen",
        menu_experience: "Trayectoria",
        menu_education: "Formación",
        menu_skills: "Habilidades",
        menu_portfolio: "Sistemas",
        header_main_title: "Panel de Control Profesional",
        header_sub_title: "Currículum & Sistemas de Software por Luis Gallardo",
        status_active: "Disponible para proyectos",
        card_title: "Ingeniero de Software / Analista Full-Stack",
        info_age: "Edad",
        info_years: "Años",
        info_id: "Cédula",
        info_birth: "Nacimiento",
        info_loc: "Ubicación",
        bio_header: "Perfil Profesional",
        bio_p1: "Ingeniero de Software y Analista de Sistemas enfocado en la arquitectura, desarrollo e implantación de soluciones Full-Stack modernas (Next.js, React, TypeScript, Python FastAPI, PostgreSQL y Supabase). Especialista en diseñar plataformas escalables tanto de ámbito comercial (punto de venta POS, inventario, e-commerce) como de misión crítica en salud comunitaria e institucional.",
        bio_p2: "A lo largo de mi trayectoria he liderado con éxito el ciclo de vida completo de 4 sistemas de producción empresarial e institucional: desde el diseño relacional con seguridad por fila (RLS) y APIs REST de alto rendimiento hasta interfaces multiplataforma (Web, PWA Offline-First y Android nativo vía Capacitor) con altos estándares de usabilidad, accesibilidad y pruebas automatizadas.",
        stat_projects: "Sistemas en producción",
        stat_degrees: "Títulos Universitarios",
        stat_responsive: "Mobile-First & PWA",
        portfolio_summary_header: "Sistemas Relevantes Implementados",
        summary_cdi: "Sistema Hospitalario Multiplataforma (Web/PWA/Android). 24 módulos clínicos, Triaje NEWS2, visor DICOM y récipes con QR. FastAPI + Supabase.",
        summary_araure: "Sistema de Censo Comunal en producción activa (Vercel). Next.js 14, ORM Prisma, PostgreSQL y Business Intelligence demográfico.",
        summary_robles: "Gestión Comunitaria, Catastro & Garita. Next.js 16, Supabase RLS, control de acceso vehicular estricto y condominio bimonetario FIFO.",
        summary_roble: "Plataforma e-commerce y Punto de Venta (POS) para Bodegón. Backend FastAPI, frontend Next.js, PostgreSQL y confirmación de Pago Móvil.",
        exp_roble_role: "Encargado General de Operaciones & Desarrollador POS / E-Commerce",
        exp_roble_desc: "Responsable directo de la gestión operativa, supervisión de personal, inventario físico y arqueo de fondos diario. Diseñó, programó e implementó de manera autónoma la plataforma de ventas, catálogo digital y punto de venta POS en FastAPI, Next.js y PostgreSQL, optimizando el despacho e integrando facturación bimonetaria (USD/VES) sin discrepancias cambiarias.",
        exp_comun_role: "Ingeniero de Software Principal & Consultor Técnico",
        exp_comun_company: "Iniciativas Sociotecnológicas y de Salud (Portuguesa, VE)",
        exp_comun_desc: "Lideró la arquitectura, desarrollo e implantación de sistemas sociotecnológicos de alto impacto comunitario: el sistema hospitalario integral CDI Salud Integral (24 módulos clínicos, triaje NEWS2 y PWA/Android), el sistema de censo y BI demográfico Araure Tricentenaria desplegado en producción en Vercel, y la plataforma de gestión urbanística y condominio Urbanización Los Robles con Supabase RLS y Next.js 16.",
        exp_mango_role: "Auxiliar Integral & Soporte Técnico POS",
        exp_mango_desc: "Asistencia operativa multifuncional en atención al cliente, logística interna, y soporte directo a los sistemas informáticos de ventas e inventario, colaborando en la resolución de incidentes técnicos en terminales POS.",
        exp_hiper_role: "Operador de Caja y Transacciones Masivas",
        exp_hiper_desc: "Gestión y registro de transacciones comerciales masivas en sistemas de punto de venta, cuadre de caja de alta precisión diaria, atención oportuna al cliente y manejo ágil de múltiples formas de pago (moneda nacional, divisas y transacciones electrónicas).",
        tag_cash: "Control de Caja",
        tag_ops: "Gestión Operativa",
        edu_upt_inst: "Universidad UPT Portuguesa \"J.J. Montilla\"",
        edu_upt_title: "P.N.F. Ingeniería Informática",
        edu_upt_desc: "Estudios enfocados en la arquitectura de redes, algoritmos avanzados, ingeniería de software, bases de datos relacionales y diseño de proyectos sociotecnológicos aplicados a necesidades comunales y de salud reales.",
        edu_iutepi_inst: "Instituto IUTEPI - Acarigua",
        edu_iutepi_title: "T.S.U. Análisis de Sistemas",
        edu_iutepi_desc: "Formación orientada al modelado de datos, análisis de requerimientos de negocio, diseño de algoritmos, metodologías ágiles de desarrollo (Scrum) y programación orientada a objetos en entornos web y empresariales.",
        edu_iutepi_date: "2024 - Presente",
        edu_udemy_title: "Desarrollo Web Full-Stack Completo",
        edu_udemy_desc: "Certificación profesional en desarrollo de aplicaciones web dinámicas y adaptativas de alto rendimiento utilizando tecnologías core del ecosistema web moderno.",
        edu_fermin_inst: "U.E. Colegio Privado \"Fermín Toro\"",
        edu_fermin_title: "Bachiller en Ciencias",
        edu_fermin_desc: "Formación académica integral de nivel medio diversificado, sentando las bases científicas y lógico-matemáticas fundamentales para las ciencias de la computación.",
        skills_tech: "Habilidades Técnicas",
        skills_soft: "Habilidades Blandas",
        skills_langs: "Idiomas",
        soft_proactive: "Liderazgo & Proactividad",
        soft_teamwork: "Trabajo en Equipo",
        soft_mind: "Pensamiento Lógico y Analítico",
        soft_problem: "Resolución Ágil de Problemas",
        soft_adapt: "Adaptación al Cambio",
        lang_es: "Español",
        lang_es_lvl: "Nativo",
        lang_en: "Inglés",
        lang_en_lvl: "Intermedio (Técnico / Documentación)",
        portfolio_header: "Portafolio Interactivo de Sistemas",
        portfolio_sub: "Explora y ejecuta simulaciones interactivas en tiempo real de los 4 sistemas de ingeniería desarrollados por Luis Gallardo.",
        cdi_triage_title: "Triaje de Urgencias Clínico (NEWS2)",
        cdi_triage_desc: "Ingresa o modifica los signos vitales del paciente para calcular automáticamente el puntaje National Early Warning Score (NEWS2) y la clasificación de riesgo médico recomendada:",
        cdi_presets_label: "Casos Clínicos de Prueba:",
        cdi_preset_stable: "Estable (0 pts)",
        cdi_preset_warning: "Infección (5 pts)",
        cdi_preset_critical: "Sepsis Crítica (9 pts)",
        cdi_patient_name: "Nombre del Paciente",
        cdi_patient_age: "Edad",
        cdi_label_pa: "Presión Arterial Sistólica",
        cdi_label_fc: "Frecuencia Cardíaca",
        cdi_label_fr: "Frecuencia Respiratoria",
        cdi_label_temp: "Temperatura Corporal",
        cdi_label_spo2: "Saturación Oxígeno (SpO2)",
        cdi_label_avpu: "Nivel de Consciencia",
        cdi_label_o2: "Paciente con Oxígeno Suplementario",
        cdi_score_label: "Puntaje NEWS2 Calculado:",
        cdi_btn_save: "Registrar en Historia Clínica",
        cdi_history_title: "Pacientes en Triaje Hospitalario",
        cdi_modules_title: "Módulos del Sistema Implementados",
        robles_gate_title: "Bitácora de Garita y Control de Accesos",
        robles_gate_desc: "El sistema de seguridad perimetral valida las placas en tiempo real e impide que un mismo vehículo registre dos ingresos simultáneos sin antes registrar su salida:",
        robles_btn_entry: "Registrar Ingreso en Garita",
        robles_inside_title: "Vehículos Actualmente Dentro del Urbanismo",
        robles_services_title: "Semáforo de Servicios Comunales",
        robles_services_desc: "Haz clic en cualquier servicio para alternar su estado en tiempo real (Operativo / Inestable / Interrumpido):",
        robles_solvency_title: "Condominio & Tesorería Bimonetaria",
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
        roble_search_placeholder: "Buscar productos en Roble Market...",
        roble_cart_title: "Tu Pedido",
        roble_cart_empty: "El carrito está vacío.",
        roble_subtotal: "Subtotal",
        roble_delivery: "Envío / Delivery",
        roble_total: "Total General",
        roble_opt_pickup: "Retirar en tienda",
        roble_opt_delivery: "Delivery (+$2.50)",
        roble_btn_pay: "Proceder a Pagar",
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
        toast_cart_cleared: "Carrito vaciado.",
        toast_pm_success: "¡Pago Móvil Confirmado! Webhook bancario recibido.",
        toast_pm_invalid: "Error: Ingresa los 4 dígitos de la referencia bancaria.",
        toast_censo_success: "Censo enviado. Registrado localmente como PENDIENTE.",
        toast_censo_err: "Por favor, completa los campos requeridos.",
        toast_triage_saved: "Paciente y signos vitales registrados con éxito en Historia Clínica.",
        toast_gate_success: "Ingreso autorizado y registrado en garita.",
        toast_gate_duplicate: "¡Violación de seguridad! La placa ya tiene un ingreso abierto en garita.",
        toast_gate_exit: "Salida registrada. El vehículo ya no se encuentra en el urbanismo.",
        toast_service_toggle: "Estado del servicio actualizado en la cartelera comunitaria.",
        toast_condo_paid: "Pago de condominio registrado exitosamente bajo imputación contable FIFO.",
        lang_switch_desc: "Español",
        out_of_stock_tag: "AGOTADO",
        in_stock_tag: "DISPONIBLE"
    },
    en: {
        sidebar_title: "Software Engineer / Analyst",
        btn_download_cv: "Download CV (PDF)",
        btn_print_cv: "Print CV",
        menu_overview: "Overview",
        menu_experience: "Experience",
        menu_education: "Education",
        menu_skills: "Skills",
        menu_portfolio: "Systems",
        header_main_title: "Professional Control Panel",
        header_sub_title: "Resume & Software Systems by Luis Gallardo",
        status_active: "Available for projects",
        card_title: "Software Engineer / Full-Stack Analyst",
        info_age: "Age",
        info_years: "Years",
        info_id: "ID Number",
        info_birth: "Birth Date",
        info_loc: "Location",
        bio_header: "Professional Profile",
        bio_p1: "Software Engineer and Systems Analyst focused on modern Full-Stack architecture, development, and deployment (Next.js, React, TypeScript, Python FastAPI, PostgreSQL, and Supabase). Specialist in designing scalable platforms for both retail commerce (POS, inventory, e-commerce) and mission-critical community and healthcare systems.",
        bio_p2: "Throughout my career, I have successfully led the entire software lifecycle of 4 production-grade systems: from relational database architecture with Row Level Security (RLS) and high-performance REST APIs to multiplatform user interfaces (Web, Offline-First PWA, and native Android via Capacitor) adhering to strict usability, accessibility, and automated testing standards.",
        stat_projects: "Production Systems",
        stat_degrees: "University Degrees",
        stat_responsive: "Mobile-First & PWA",
        portfolio_summary_header: "Key Implemented Systems",
        summary_cdi: "Multiplatform Hospital System (Web/PWA/Android). 24 clinical modules, NEWS2 Triage, DICOM viewer, and QR prescriptions. FastAPI + Supabase.",
        summary_araure: "Community Census System in live production (Vercel). Next.js 14, Prisma ORM, PostgreSQL, and real-time demographic Business Intelligence.",
        summary_robles: "Community Management, Cadastre & Security Gate. Next.js 16, Supabase RLS, strict vehicular access control, and bi-monetary FIFO condominium ledger.",
        summary_roble: "E-Commerce and Point-of-Sale (POS) platform. FastAPI backend, Next.js frontend, PostgreSQL, and automated mobile payment confirmation.",
        exp_roble_role: "General Operations Manager & POS / E-Commerce Developer",
        exp_roble_desc: "Directly managed local retail operations, staff coordination, physical inventory audits, and daily cash reconciliations. Autonomously engineered and deployed the complete POS sales and digital catalog software platform using FastAPI, Next.js, and PostgreSQL, streamlining checkout times and integrating bi-monetary billing without currency discrepancies.",
        exp_comun_role: "Lead Software Engineer & Technical Consultant",
        exp_comun_company: "Community & Healthcare Software Initiatives (Portuguesa, VE)",
        exp_comun_desc: "Led the software architecture and deployment of high-impact sociotechnological platforms: the comprehensive CDI Salud Integral hospital system (24 clinical modules, NEWS2 triage, PWA/Android), the Araure Tricentenaria census BI system deployed to production on Vercel, and the Los Robles urban cadastre and condominium platform built with Next.js 16 and Supabase RLS.",
        exp_mango_role: "Retail Associate & POS Technical Support",
        exp_mango_desc: "Multifunctional operations in customer service, internal logistics, and direct technical support for computer sales and inventory POS systems, assisting in terminal hardware and software troubleshooting.",
        exp_hiper_role: "High-Volume POS Cashier & Transactions Operator",
        exp_hiper_desc: "Processed massive commercial retail transaction volumes on POS systems, executed precise daily cash register audits, provided fast customer support, and handled multi-currency and electronic payment methods.",
        tag_cash: "Cash Audit Control",
        tag_ops: "Operational Management",
        edu_upt_inst: "UPT Portuguesa University \"J.J. Montilla\"",
        edu_upt_title: "B.S. in Computer Science & Informatics Engineering",
        edu_upt_desc: "Comprehensive studies in network architecture, advanced algorithms, software engineering, relational databases, computer security, and applied community sociotechnological systems.",
        edu_iutepi_inst: "IUTEPI Computer Technology Institute - Acarigua",
        edu_iutepi_title: "Associate Degree in Systems Analysis",
        edu_iutepi_desc: "Studies focused on data modeling, business systems analysis, algorithm design, Agile methodologies (Scrum), and object-oriented programming in web and enterprise environments.",
        edu_iutepi_date: "2024 - Present",
        edu_udemy_title: "Full-Stack Web Development Masterclass",
        edu_udemy_desc: "Professional certification covering modern high-performance web application development using core modern web technologies.",
        edu_fermin_inst: "\"Fermin Toro\" Private Academy",
        edu_fermin_title: "High School Diploma in Science",
        edu_fermin_desc: "Integral scientific and mathematical education establishing core logical and analytical foundations for computer science.",
        skills_tech: "Technical Skills",
        skills_soft: "Soft Skills",
        skills_langs: "Languages",
        soft_proactive: "Leadership & Proactivity",
        soft_teamwork: "Teamwork & Collaboration",
        soft_mind: "Logical & Analytical Thinking",
        soft_problem: "Agile Problem Solving",
        soft_adapt: "Adaptability & Rapid Learning",
        lang_es: "Spanish",
        lang_es_lvl: "Native",
        lang_en: "English",
        lang_en_lvl: "Intermediate (Technical / Documentation)",
        portfolio_header: "Interactive Systems Portfolio",
        portfolio_sub: "Explore and run live interactive simulations of the 4 engineering software systems built by Luis Gallardo.",
        cdi_triage_title: "Clinical Emergency Triage (NEWS2)",
        cdi_triage_desc: "Enter or adjust the patient's vital signs to calculate the National Early Warning Score (NEWS2) and recommended clinical action in real time:",
        cdi_presets_label: "Clinical Test Presets:",
        cdi_preset_stable: "Stable (0 pts)",
        cdi_preset_warning: "Infection (5 pts)",
        cdi_preset_critical: "Severe Sepsis (9 pts)",
        cdi_patient_name: "Patient Full Name",
        cdi_patient_age: "Age",
        cdi_label_pa: "Systolic Blood Pressure",
        cdi_label_fc: "Heart Rate",
        cdi_label_fr: "Respiration Rate",
        cdi_label_temp: "Body Temperature",
        cdi_label_spo2: "Oxygen Saturation (SpO2)",
        cdi_label_avpu: "Consciousness Level (AVPU)",
        cdi_label_o2: "Patient on Supplemental Oxygen",
        cdi_score_label: "Calculated NEWS2 Score:",
        cdi_btn_save: "Record in Electronic Medical Record",
        cdi_history_title: "Patients in Hospital Triage",
        cdi_modules_title: "Implemented System Modules",
        robles_gate_title: "Security Gate Log & Access Control",
        robles_gate_desc: "The perimeter security engine validates license plates in real time and prevents duplicate open entries without an exit timestamp:",
        robles_btn_entry: "Record Gate Entry",
        robles_inside_title: "Vehicles Currently Inside Community",
        robles_services_title: "Community Public Services Traffic Light",
        robles_services_desc: "Click any service to toggle its real-time public status (Operational / Unstable / Disrupted):",
        robles_solvency_title: "Bi-Monetary Condominium & Treasury",
        araure_bi_title: "Demographic BI - School Census",
        araure_pyr_title: "Population Pyramid (Community Census)",
        araure_pyr_men: "MALE (Cyan)",
        araure_pyr_women: "FEMALE (Emerald)",
        araure_med_title: "Top 3 Censused Medication Demands",
        araure_med_units: "Records",
        araure_form_title: "Community Census Simulator",
        araure_step1_header: "Step 1: Housing & Address Data",
        araure_label_street: "Street / Avenue",
        araure_label_house: "House #",
        araure_label_type: "Housing Type",
        araure_house_opt: "House",
        araure_label_services: "Available Public Services",
        srv_water: "Drinking Water",
        srv_power: "Electricity",
        srv_gas: "Communal Gas",
        srv_net: "Internet",
        araure_step2_header: "Step 2: Head of Household & Health Conditions",
        araure_label_name: "Full Name",
        araure_label_id: "National ID",
        araure_label_gender: "Gender",
        araure_gender_m: "Male",
        araure_gender_f: "Female",
        araure_label_med_req: "Required Medication",
        araure_med_none: "None / Healthy",
        araure_label_pending_list: "Local Submission History",
        btn_back: "Back",
        btn_next: "Next",
        roble_search_placeholder: "Search products in Roble Market...",
        roble_cart_title: "Your Order",
        roble_cart_empty: "Cart is empty.",
        roble_subtotal: "Subtotal",
        roble_delivery: "Shipping / Delivery",
        roble_total: "Grand Total",
        roble_opt_pickup: "Store Pickup",
        roble_opt_delivery: "Delivery (+$2.50)",
        roble_btn_pay: "Proceed to Checkout",
        modal_payment_title: "Mobile Payment Confirmation",
        modal_payment_sub: "Transfer the amount from your banking app to the simulated details below and press confirm:",
        pm_bank: "Bank",
        pm_phone: "Phone",
        pm_id: "ID / Tax Number",
        pm_amount: "Amount to Transfer",
        pm_ref_label: "Bank Reference Number (Last 4 Digits)",
        pm_btn_confirm: "Confirm Mobile Payment",
        toast_add_cart: "Added to cart: ",
        toast_limit: "Stock limit reached.",
        toast_cart_cleared: "Cart emptied.",
        toast_pm_success: "Payment confirmed! Banking webhook verified.",
        toast_pm_invalid: "Error: Please enter the 4-digit bank reference.",
        toast_censo_success: "Census submitted. Saved locally as PENDING.",
        toast_censo_err: "Please fill in all required fields.",
        toast_triage_saved: "Patient vitals successfully recorded in Medical Record.",
        toast_gate_success: "Entry authorized and logged in security gate.",
        toast_gate_duplicate: "Security violation! License plate already has an open entry.",
        toast_gate_exit: "Exit recorded. Vehicle has left the community.",
        toast_service_toggle: "Service status updated on the public community board.",
        toast_condo_paid: "Condominium payment successfully logged under FIFO accounting criteria.",
        lang_switch_desc: "English",
        out_of_stock_tag: "OUT OF STOCK",
        in_stock_tag: "IN STOCK"
    }
};

let currentLanguage = 'es';
let currentCurrency = 'USD';
const BCV_RATE = 42.50; // Bs. per USD official rate

function formatCurrencyPrice(usdVal) {
    if (currentCurrency === 'VES') {
        const vesVal = (usdVal * BCV_RATE).toFixed(2);
        return `Bs. ${vesVal}`;
    }
    return `$${usdVal.toFixed(2)}`;
}

function applyLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Update text nodes
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Update placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Toggle button label
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.querySelector('span').innerText = lang === 'es' ? 'English' : 'Español';
    }

    // Refresh dynamic components
    renderRobleProducts();
    updateCartDOM();
    calculateNEWS2();
    renderGateTable();
}

function toggleLanguage() {
    applyLanguage(currentLanguage === 'es' ? 'en' : 'es');
}

// 2. TOAST NOTIFICATION SYSTEM
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'toast-error' : ''}`;
    
    const icon = type === 'error' ? 'fa-triangle-exclamation' : 'fa-circle-check';
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// 3. MAIN DASHBOARD TABS NAVIGATION
const navItems = document.querySelectorAll('.nav-item');
const tabContents = document.querySelectorAll('.tab-content');
const sidebar = document.getElementById('sidebar');
const hamburgerBtn = document.getElementById('hamburgerBtn');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const tab = item.getAttribute('data-tab');
        
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const mobileBtns = document.querySelectorAll('.mobile-nav-btn');
        mobileBtns.forEach(b => {
            if (b.getAttribute('data-tab') === tab) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });

        tabContents.forEach(content => {
            if (content.id === tab) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });

        if (tab === 'skills') {
            animateSkillBars();
        }

        if (sidebar && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });
});

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        if (sidebar) sidebar.classList.toggle('open');
    });
}

// Print CV Button
const btnPrintCv = document.getElementById('btnPrintCv');
if (btnPrintCv) {
    btnPrintCv.addEventListener('click', () => {
        window.print();
    });
}

function animateSkillBars() {
    const fills = document.querySelectorAll('.skill-bar-fill');
    fills.forEach(fill => {
        const targetWidth = fill.getAttribute('data-width');
        fill.style.width = '0%';
        setTimeout(() => {
            fill.style.width = targetWidth;
        }, 150);
    });
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


// ==========================================================================
// SIMULATOR 1: CDI SALUD INTEGRAL (NEWS2 Triage Calculator & Presets)
// ==========================================================================
function calculateNEWS2() {
    const paEl = document.getElementById('newsPa');
    const fcEl = document.getElementById('newsFc');
    const frEl = document.getElementById('newsFr');
    const tempEl = document.getElementById('newsTemp');
    const spo2El = document.getElementById('newsSpo2');
    const avpuEl = document.getElementById('newsAvpu');
    const o2El = document.getElementById('newsO2');

    if (!paEl || !fcEl || !frEl || !tempEl || !spo2El || !avpuEl) return;

    const pa = parseFloat(paEl.value) || 120;
    const fc = parseFloat(fcEl.value) || 75;
    const fr = parseFloat(frEl.value) || 16;
    const temp = parseFloat(tempEl.value) || 36.8;
    const spo2 = parseFloat(spo2El.value) || 98;
    const avpu = avpuEl.value || 'A';
    const o2 = o2El ? o2El.checked : false;

    let score = 0;
    let singleParam3 = false;

    // Respiration Rate
    let frScore = 0;
    if (fr <= 8) frScore = 3;
    else if (fr >= 9 && fr <= 11) frScore = 1;
    else if (fr >= 12 && fr <= 20) frScore = 0;
    else if (fr >= 21 && fr <= 24) frScore = 2;
    else if (fr >= 25) frScore = 3;
    if (frScore === 3) singleParam3 = true;
    score += frScore;

    // SpO2
    let spo2Score = 0;
    if (spo2 <= 91) spo2Score = 3;
    else if (spo2 >= 92 && spo2 <= 93) spo2Score = 2;
    else if (spo2 >= 94 && spo2 <= 95) spo2Score = 1;
    else spo2Score = 0;
    if (spo2Score === 3) singleParam3 = true;
    score += spo2Score;

    // Supplementary O2
    if (o2) score += 2;

    // Systolic Blood Pressure
    let paScore = 0;
    if (pa <= 90) paScore = 3;
    else if (pa >= 91 && pa <= 100) paScore = 2;
    else if (pa >= 101 && pa <= 110) paScore = 1;
    else if (pa >= 111 && pa <= 219) paScore = 0;
    else if (pa >= 220) paScore = 3;
    if (paScore === 3) singleParam3 = true;
    score += paScore;

    // Heart Rate
    let fcScore = 0;
    if (fc <= 40) fcScore = 3;
    else if (fc >= 41 && fc <= 50) fcScore = 1;
    else if (fc >= 51 && fc <= 90) fcScore = 0;
    else if (fc >= 91 && fc <= 110) fcScore = 1;
    else if (fc >= 111 && fc <= 130) fcScore = 2;
    else if (fc >= 131) fcScore = 3;
    if (fcScore === 3) singleParam3 = true;
    score += fcScore;

    // Consciousness
    let avpuScore = (avpu === 'A') ? 0 : 3;
    if (avpuScore === 3) singleParam3 = true;
    score += avpuScore;

    // Temperature
    let tempScore = 0;
    if (temp <= 35.0) tempScore = 3;
    else if (temp >= 35.1 && temp <= 36.0) tempScore = 1;
    else if (temp >= 36.1 && temp <= 38.0) tempScore = 0;
    else if (temp >= 38.1 && temp <= 39.0) tempScore = 1;
    else if (temp >= 39.1) tempScore = 2;
    if (tempScore === 3) singleParam3 = true;
    score += tempScore;

    // DOM Update
    const scoreValEl = document.getElementById('news2ScoreVal');
    const badgeEl = document.getElementById('news2RiskBadge');
    const actionEl = document.getElementById('news2ActionText');

    if (scoreValEl) scoreValEl.innerText = score;

    if (badgeEl && actionEl) {
        if (score >= 7) {
            badgeEl.className = 'news2-badge badge-risk-high';
            badgeEl.innerText = currentLanguage === 'es' ? `Riesgo Alto (Score: ${score})` : `High Risk (Score: ${score})`;
            actionEl.innerText = currentLanguage === 'es' 
                ? "ALERTA CRÍTICA: Respuesta médica de emergencia inmediata. Notificación al equipo de guardia y preparación para soporte vital / reanimación."
                : "CRITICAL ALERT: Immediate emergency medical response. Notify rapid response team and prepare resuscitation / ICU transfer.";
            if (scoreValEl) scoreValEl.style.color = 'var(--accent-red)';
        } else if (score >= 5 || singleParam3) {
            badgeEl.className = 'news2-badge badge-risk-med';
            badgeEl.innerText = currentLanguage === 'es' ? `Riesgo Medio (Score: ${score})` : `Medium Risk (Score: ${score})`;
            actionEl.innerText = currentLanguage === 'es'
                ? "Alerta Intermedia: Evaluación urgente por médico tratante dentro de 30 minutos. Monitoreo continuo de signos vitales cada 1 hora."
                : "Urgent Warning: Urgent evaluation by attending physician within 30 minutes. Monitor vitals hourly.";
            if (scoreValEl) scoreValEl.style.color = 'var(--accent-yellow)';
        } else {
            badgeEl.className = 'news2-badge badge-risk-low';
            badgeEl.innerText = currentLanguage === 'es' ? `Riesgo Bajo (Score: ${score})` : `Low Risk (Score: ${score})`;
            actionEl.innerText = currentLanguage === 'es'
                ? "Monitoreo clínico de rutina cada 12 horas. Paciente hemodinámicamente estable, continuar flujo asistencial estándar."
                : "Routine clinical monitoring every 12 hours. Patient hemodynamically stable, continue standard ward care.";
            if (scoreValEl) scoreValEl.style.color = 'var(--accent-emerald)';
        }
    }
}

// Preset cases buttons for NEWS2
const presetButtons = document.querySelectorAll('.btn-preset-case');
presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const preset = btn.getAttribute('data-preset');
        const paEl = document.getElementById('newsPa');
        const fcEl = document.getElementById('newsFc');
        const frEl = document.getElementById('newsFr');
        const tempEl = document.getElementById('newsTemp');
        const spo2El = document.getElementById('newsSpo2');
        const avpuEl = document.getElementById('newsAvpu');
        const o2El = document.getElementById('newsO2');

        if (preset === 'stable') {
            if (paEl) paEl.value = 120;
            if (fcEl) fcEl.value = 75;
            if (frEl) frEl.value = 16;
            if (tempEl) tempEl.value = 36.8;
            if (spo2El) spo2El.value = 98;
            if (avpuEl) avpuEl.value = 'A';
            if (o2El) o2El.checked = false;
        } else if (preset === 'warning') {
            if (paEl) paEl.value = 104;
            if (fcEl) fcEl.value = 102;
            if (frEl) frEl.value = 22;
            if (tempEl) tempEl.value = 38.4;
            if (spo2El) spo2El.value = 93;
            if (avpuEl) avpuEl.value = 'A';
            if (o2El) o2El.checked = false;
        } else if (preset === 'critical') {
            if (paEl) paEl.value = 84;
            if (fcEl) fcEl.value = 132;
            if (frEl) frEl.value = 28;
            if (tempEl) tempEl.value = 39.4;
            if (spo2El) spo2El.value = 89;
            if (avpuEl) avpuEl.value = 'V';
            if (o2El) o2El.checked = true;
        }
        calculateNEWS2();
    });
});

// Bind NEWS2 vital sign input change events
['newsPa', 'newsFc', 'newsFr', 'newsTemp', 'newsSpo2', 'newsAvpu'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener('input', calculateNEWS2);
        el.addEventListener('change', calculateNEWS2);
    }
});
const o2Checkbox = document.getElementById('newsO2');
if (o2Checkbox) o2Checkbox.addEventListener('change', calculateNEWS2);

// Triage Patient Electronic Records List
let triagePatientHistory = [
    { name: "Yolanda Rivas", age: 58, pa: "125/80", fc: 74, fr: 16, temp: 36.6, spo2: 98, score: 0, risk: "BAJO", time: "10:20 AM" },
    { name: "Ramón Colmenárez", age: 64, pa: "145/95", fc: 96, fr: 22, temp: 38.4, spo2: 94, score: 4, risk: "BAJO", time: "11:05 AM" },
    { name: "Eduardo Castillo", age: 71, pa: "88/55", fc: 118, fr: 26, temp: 39.2, spo2: 91, score: 9, risk: "ALTO", time: "11:45 AM" }
];

function renderTriageHistoryDOM() {
    const list = document.getElementById('triageHistoryList');
    if (!list) return;

    list.innerHTML = '';
    triagePatientHistory.slice().reverse().forEach(p => {
        let badgeClass = 'color: var(--accent-emerald);';
        if (p.risk === 'MEDIO') badgeClass = 'color: var(--accent-yellow);';
        if (p.risk === 'ALTO') badgeClass = 'color: var(--accent-red); font-weight:800;';

        const item = document.createElement('div');
        item.style.padding = '8px 0';
        item.style.borderBottom = '1px solid rgba(255, 255, 255, 0.04)';
        item.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <strong style="font-size: 0.88rem;">${p.name} (${p.age}a)</strong>
                <span style="font-size:0.75rem; ${badgeClass}">NEWS2: ${p.score} [${p.risk}]</span>
            </div>
            <div style="color:var(--text-muted); font-size: 0.76rem; display:flex; justify-content:space-between; margin-top:3px;">
                <span>PA: ${p.pa} | FC: ${p.fc} | SpO2: ${p.spo2}%</span>
                <span>${p.time}</span>
            </div>
        `;
        list.appendChild(item);
    });
}

const btnSaveTriage = document.getElementById('btnSaveTriage');
if (btnSaveTriage) {
    btnSaveTriage.addEventListener('click', () => {
        const scoreVal = parseInt(document.getElementById('news2ScoreVal').innerText) || 0;
        let riskLabel = "BAJO";
        if (scoreVal >= 7) riskLabel = "ALTO";
        else if (scoreVal >= 5) riskLabel = "MEDIO";

        const nameInput = document.getElementById('newsPatientName');
        const ageInput = document.getElementById('newsPatientAge');
        const patientName = nameInput ? nameInput.value.trim() || 'Paciente Anónimo' : 'Paciente Anónimo';
        const patientAge = ageInput ? parseInt(ageInput.value) || 40 : 40;

        const paVal = document.getElementById('newsPa').value;
        const fcVal = document.getElementById('newsFc').value;
        const frVal = document.getElementById('newsFr').value;
        const tempVal = document.getElementById('newsTemp').value;
        const spo2Val = document.getElementById('newsSpo2').value;

        const newTriageEntry = {
            name: patientName,
            age: patientAge,
            pa: `${paVal}/80`,
            fc: fcVal,
            fr: frVal,
            temp: tempVal,
            spo2: spo2Val,
            score: scoreVal,
            risk: riskLabel,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        triagePatientHistory.push(newTriageEntry);
        renderTriageHistoryDOM();
        showToast(translations[currentLanguage].toast_triage_saved);
    });
}


// ==========================================================================
// SIMULATOR 2: ARAURE TRICENTENARIA (Census Demography & BI)
// ==========================================================================
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
    if (!stepPanel1 || !stepPanel2) return;
    if (currentStep === 1) {
        stepPanel1.classList.add('active');
        stepPanel2.classList.remove('active');
        if (btnCensoPrev) btnCensoPrev.style.display = 'none';
        if (stepIndicator1) stepIndicator1.className = 'step-node active';
        if (stepIndicator2) stepIndicator2.className = 'step-node';
        if (btnCensoNext) btnCensoNext.innerText = translations[currentLanguage].btn_next;
    } else {
        stepPanel1.classList.remove('active');
        stepPanel2.classList.add('active');
        if (btnCensoPrev) btnCensoPrev.style.display = 'block';
        if (stepIndicator1) stepIndicator1.className = 'step-node completed';
        if (stepIndicator2) stepIndicator2.className = 'step-node active';
        if (btnCensoNext) btnCensoNext.innerText = currentLanguage === 'es' ? 'Enviar Censo' : 'Submit Census';
    }
}

if (btnCensoNext) {
    btnCensoNext.addEventListener('click', () => {
        if (currentStep === 1) {
            currentStep = 2;
            updateCensusFormDOM();
        } else {
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

            updateBIStats(c_gender, c_med);

            document.getElementById('c_nombre').value = '';
            document.getElementById('c_cedula').value = '';
            document.getElementById('c_med').selectedIndex = 0;

            showToast(translations[currentLanguage].toast_censo_success);

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
    const leftFills = document.querySelectorAll('.pyramid-bar-left .pyramid-fill');
    const rightFills = document.querySelectorAll('.pyramid-bar-right .pyramid-fill');
    
    if (leftFills[2] && gender === 'M') {
        leftFills[2].style.width = '78%';
        leftFills[2].nextElementSibling.innerText = '78%';
    } else if (rightFills[2]) {
        rightFills[2].style.width = '72%';
        rightFills[2].nextElementSibling.innerText = '72%';
    }

    if (med === 'Losartan') {
        const val = document.getElementById('losartanVal');
        const bar = document.getElementById('losartanBar');
        if (val && bar) {
            val.innerText = parseInt(val.innerText) + 1;
            bar.style.width = '95%';
        }
    } else if (med === 'Metformina') {
        const val = document.getElementById('metforminaVal');
        const bar = document.getElementById('metforminaBar');
        if (val && bar) {
            val.innerText = parseInt(val.innerText) + 1;
            bar.style.width = '72%';
        }
    } else if (med === 'Salbutamol') {
        const val = document.getElementById('salbutamolVal');
        const bar = document.getElementById('salbutamolBar');
        if (val && bar) {
            val.innerText = parseInt(val.innerText) + 1;
            bar.style.width = '42%';
        }
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


// ==========================================================================
// SIMULATOR 3: URBANIZACION LOS ROBLES (Gate Log, Filter, & Condo FIFO)
// ==========================================================================
let gateActiveVehicles = [
    { plate: "AB123CD", driver: "Carlos Mendoza", type: "Residente", time: "10:15 AM" },
    { plate: "XY987ZT", driver: "Despacho Farmacia", type: "Proveedor", time: "11:30 AM" }
];
let currentGateFilter = 'all';

function renderGateTable() {
    const tbody = document.getElementById('gateTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';
    
    const filtered = gateActiveVehicles.filter(v => {
        if (currentGateFilter === 'all') return true;
        return v.type === currentGateFilter;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:16px;">No hay vehículos registrados para este filtro.</td></tr>`;
        return;
    }

    filtered.forEach((v) => {
        const originalIndex = gateActiveVehicles.indexOf(v);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong style="color:var(--accent-cyan);">${v.plate}</strong></td>
            <td>${v.driver}</td>
            <td><span class="p-badge" style="font-size:0.7rem;">${v.type}</span></td>
            <td style="color:var(--text-muted);">${v.time}</td>
            <td>
                <button class="btn-small-danger" onclick="exitVehicle(${originalIndex})">
                    <i class="fa-solid fa-arrow-right-from-bracket"></i> Salida
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Filter buttons for gate
const filterButtons = document.querySelectorAll('.gate-filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentGateFilter = btn.getAttribute('data-filter');
        renderGateTable();
    });
});

function exitVehicle(index) {
    if (index >= 0 && index < gateActiveVehicles.length) {
        const exited = gateActiveVehicles.splice(index, 1)[0];
        renderGateTable();
        showToast(`${translations[currentLanguage].toast_gate_exit} (${exited.plate})`);
    }
}
window.exitVehicle = exitVehicle;

const btnGateEntry = document.getElementById('btnGateEntry');
if (btnGateEntry) {
    btnGateEntry.addEventListener('click', () => {
        const plateInput = document.getElementById('gatePlate');
        const driverInput = document.getElementById('gateDriver');
        const typeSelect = document.getElementById('gateType');

        const plate = plateInput.value.trim().toUpperCase();
        const driver = driverInput.value.trim() || 'Visitante Autorizado';
        const type = typeSelect.value;

        if (!plate) {
            showToast("Por favor ingresa la placa del vehículo.", "error");
            return;
        }

        const isDuplicate = gateActiveVehicles.some(v => v.plate === plate);
        if (isDuplicate) {
            showToast(`${translations[currentLanguage].toast_gate_duplicate} [${plate}]`, 'error');
            return;
        }

        const newEntry = {
            plate: plate,
            driver: driver,
            type: type,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        gateActiveVehicles.push(newEntry);
        plateInput.value = '';
        driverInput.value = '';
        renderGateTable();
        showToast(`${translations[currentLanguage].toast_gate_success} [${plate}]`);
    });
}

// Services Traffic Light Cycle
const serviceStates = {
    agua: { state: 'green', textEs: 'Operativo', textEn: 'Operational' },
    luz: { state: 'green', textEs: 'Operativo', textEn: 'Operational' },
    gas: { state: 'yellow', textEs: 'En distribución', textEn: 'In Distribution' },
    aseo: { state: 'green', textEs: 'Al día', textEn: 'On Schedule' },
    seguridad: { state: 'green', textEs: '100% Activa', textEn: '100% Active' }
};

const serviceItems = document.querySelectorAll('.service-traffic-item');
serviceItems.forEach(item => {
    item.addEventListener('click', () => {
        const sKey = item.getAttribute('data-service');
        const pill = document.getElementById(`pill-${sKey}`);
        if (!pill || !serviceStates[sKey]) return;

        const curr = serviceStates[sKey].state;
        if (curr === 'green') {
            serviceStates[sKey].state = 'yellow';
            serviceStates[sKey].textEs = 'Inestable';
            serviceStates[sKey].textEn = 'Unstable';
            pill.className = 'traffic-pill pill-yellow';
            pill.innerHTML = `<i class="fa-solid fa-clock"></i> ${currentLanguage === 'es' ? 'Inestable' : 'Unstable'}`;
        } else if (curr === 'yellow') {
            serviceStates[sKey].state = 'red';
            serviceStates[sKey].textEs = 'Interrumpido';
            serviceStates[sKey].textEn = 'Disrupted';
            pill.className = 'traffic-pill pill-red';
            pill.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${currentLanguage === 'es' ? 'Interrumpido' : 'Disrupted'}`;
        } else {
            serviceStates[sKey].state = 'green';
            serviceStates[sKey].textEs = 'Operativo';
            serviceStates[sKey].textEn = 'Operational';
            pill.className = 'traffic-pill pill-green';
            pill.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${currentLanguage === 'es' ? 'Operativo' : 'Operational'}`;
        }

        showToast(translations[currentLanguage].toast_service_toggle);
    });
});

// Condominium Payment FIFO simulation
const btnPayCondo = document.getElementById('btnPayCondo');
if (btnPayCondo) {
    btnPayCondo.addEventListener('click', () => {
        const sel = document.getElementById('condoParcelSelect');
        const parcelName = sel ? sel.value : 'A-01';
        showToast(`${translations[currentLanguage].toast_condo_paid} [Parcela ${parcelName}]`);
    });
}


// ==========================================================================
// SIMULATOR 4: ROBLE MARKET (E-Commerce, POS & Multi-currency)
// ==========================================================================
const robleProducts = [
    { id: 1, nameEs: "Harina PAN de Maíz 1kg", nameEn: "PAN Corn Flour 1kg", price: 1.10, stock: 0, icon: "fa-solid fa-wheat-awn" },
    { id: 2, nameEs: "Nutella Chocolate 350g", nameEn: "Nutella Spread 350g", price: 5.50, stock: 12, icon: "fa-solid fa-jar" },
    { id: 3, nameEs: "Coca-Cola Refresco 2L", nameEn: "Coca-Cola Soda 2L", price: 2.00, stock: 8, icon: "fa-solid fa-bottle-water" },
    { id: 4, nameEs: "Cerveza Polar Light Tercio", nameEn: "Polar Light Beer 330ml", price: 1.50, stock: 24, icon: "fa-solid fa-beer-mug-empty" },
    { id: 5, nameEs: "Queso Amarillo Paisa 1kg", nameEn: "Yellow Cheese Paisa 1kg", price: 6.20, stock: 5, icon: "fa-solid fa-cheese" },
    { id: 6, nameEs: "Café Fama de América 500g", nameEn: "Fama de America Coffee 500g", price: 4.80, stock: 15, icon: "fa-solid fa-mug-hot" }
];

let cart = [];
const deliveryPrice = 2.50;

function renderRobleProducts() {
    const grid = document.getElementById('catalogGrid');
    const searchInput = document.getElementById('robleSearch');
    const searchVal = searchInput ? searchInput.value.toLowerCase() : '';
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const filtered = robleProducts.filter(p => {
        const name = currentLanguage === 'es' ? p.nameEs.toLowerCase() : p.nameEn.toLowerCase();
        return name.includes(searchVal);
    });

    filtered.forEach(p => {
        const isOutOfStock = p.stock === 0;
        const name = currentLanguage === 'es' ? p.nameEs : p.nameEn;
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-badge ${isOutOfStock ? 'badge-out' : 'badge-in'}">
                ${isOutOfStock ? translations[currentLanguage].out_of_stock_tag : translations[currentLanguage].in_stock_tag}
            </div>
            <div class="product-icon-wrap">
                <i class="${p.icon}"></i>
            </div>
            <div class="product-info">
                <h4>${name}</h4>
                <div class="product-meta">
                    <span class="product-price">${formatCurrencyPrice(p.price)}</span>
                    <span class="product-stock">${isOutOfStock ? '' : `Stock: ${p.stock}`}</span>
                </div>
            </div>
            <button class="btn-add-cart" ${isOutOfStock ? 'disabled' : ''} onclick="addToCart(${p.id})">
                <i class="fa-solid fa-cart-plus"></i>
            </button>
        `;
        grid.appendChild(card);
    });
}

function addToCart(productId) {
    const prod = robleProducts.find(p => p.id === productId);
    if (!prod || prod.stock === 0) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        if (existing.qty < prod.stock) {
            existing.qty++;
            showToast(`${translations[currentLanguage].toast_add_cart} ${currentLanguage === 'es' ? prod.nameEs : prod.nameEn}`);
        } else {
            showToast(translations[currentLanguage].toast_limit, 'error');
        }
    } else {
        cart.push({ id: prod.id, nameEs: prod.nameEs, nameEn: prod.nameEn, price: prod.price, qty: 1 });
        showToast(`${translations[currentLanguage].toast_add_cart} ${currentLanguage === 'es' ? prod.nameEs : prod.nameEn}`);
    }

    updateCartDOM();
}
window.addToCart = addToCart;

function updateCartDOM() {
    const list = document.getElementById('cartItemsList');
    const subtotalEl = document.getElementById('cartSubtotal');
    const deliveryEl = document.getElementById('cartDelivery');
    const totalEl = document.getElementById('cartTotal');
    const countEl = document.getElementById('cartCount');
    const btnPay = document.getElementById('btnCheckout');

    if (!list) return;

    list.innerHTML = '';
    
    let subtotal = 0;
    let totalItems = 0;

    if (cart.length === 0) {
        list.innerHTML = `<div class="cart-empty">${translations[currentLanguage].roble_cart_empty}</div>`;
        if (btnPay) btnPay.disabled = true;
    } else {
        if (btnPay) btnPay.disabled = false;
        
        cart.forEach((item, index) => {
            subtotal += item.price * item.qty;
            totalItems += item.qty;
            
            const name = currentLanguage === 'es' ? item.nameEs : item.nameEn;
            const row = document.createElement('div');
            row.className = 'cart-item-row';
            row.innerHTML = `
                <div class="cart-item-desc">
                    <span class="cart-item-name">${name}</span>
                    <span class="cart-item-unit-price">${formatCurrencyPrice(item.price)} c/u</span>
                </div>
                <div class="cart-item-ctrls">
                    <button class="btn-qty" onclick="changeQty(${index}, -1)">-</button>
                    <span class="qty-count">${item.qty}</span>
                    <button class="btn-qty" onclick="changeQty(${index}, 1)">+</button>
                    <button class="btn-remove" onclick="removeFromCart(${index})"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
            list.appendChild(row);
        });
    }

    let isDelivery = false;
    const deliveryRadio = document.getElementById('deliveryShip');
    if (deliveryRadio && deliveryRadio.checked) isDelivery = true;

    const shipping = (cart.length > 0 && isDelivery) ? deliveryPrice : 0.00;
    const grandTotal = subtotal + shipping;

    if (subtotalEl) subtotalEl.innerText = formatCurrencyPrice(subtotal);
    if (deliveryEl) deliveryEl.innerText = formatCurrencyPrice(shipping);
    if (totalEl) totalEl.innerText = formatCurrencyPrice(grandTotal);
    if (countEl) countEl.innerText = totalItems;
}

function changeQty(index, delta) {
    if (!cart[index]) return;
    const prod = robleProducts.find(p => p.id === cart[index].id);
    
    const newQty = cart[index].qty + delta;
    if (newQty <= 0) {
        cart.splice(index, 1);
    } else if (newQty > prod.stock) {
        showToast(translations[currentLanguage].toast_limit, 'error');
    } else {
        cart[index].qty = newQty;
    }
    updateCartDOM();
}
window.changeQty = changeQty;

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDOM();
}
window.removeFromCart = removeFromCart;

// Clear Cart button
const btnClearCart = document.getElementById('btnClearCart');
if (btnClearCart) {
    btnClearCart.addEventListener('click', () => {
        if (cart.length > 0) {
            cart = [];
            updateCartDOM();
            showToast(translations[currentLanguage].toast_cart_cleared);
        }
    });
}

// Currency Switcher buttons
const currencyButtons = document.querySelectorAll('.currency-btn');
currencyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currencyButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCurrency = btn.getAttribute('data-curr');
        renderRobleProducts();
        updateCartDOM();
    });
});

// Bind Search Box
const robleSearch = document.getElementById('robleSearch');
if (robleSearch) {
    robleSearch.addEventListener('input', renderRobleProducts);
}

// Payment Modal Controller
const checkoutModal = document.getElementById('checkoutModal');
const btnCheckout = document.getElementById('btnCheckout');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const btnConfirmPayment = document.getElementById('btnConfirmPayment');
const pmModalAmount = document.getElementById('pmModalAmount');

if (btnCheckout) {
    btnCheckout.addEventListener('click', () => {
        const total = document.getElementById('cartTotal').innerText;
        if (pmModalAmount) pmModalAmount.innerText = total;
        if (checkoutModal) checkoutModal.classList.add('open');
    });
}

if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
        if (checkoutModal) checkoutModal.classList.remove('open');
    });
}

if (btnConfirmPayment) {
    btnConfirmPayment.addEventListener('click', () => {
        const ref = document.getElementById('pmRef').value.trim();
        if (ref.length !== 4) {
            showToast(translations[currentLanguage].toast_pm_invalid, 'error');
            return;
        }

        checkoutModal.classList.remove('open');
        document.getElementById('pmRef').value = '';
        cart = [];
        updateCartDOM();
        showToast(translations[currentLanguage].toast_pm_success);
    });
}


// ==========================================================================
// APPLICATION INITIALIZATION
// ==========================================================================
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
            const desktopBtn = document.querySelector(`.sidebar .nav-item[data-tab="${tabName}"]`);
            if (desktopBtn) desktopBtn.click();
        });
    });

    // Run Initializers
    applyLanguage(currentLanguage);
    renderTriageHistoryDOM();
    updateCensusHistoryDOM();
    renderGateTable();
});
