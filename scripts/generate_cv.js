const { jsPDF } = require('/home/lgallardo/Escritorio/proyectos/araure-tricentenaria/node_modules/jspdf');
const fs = require('fs');
const path = require('path');

const doc = new jsPDF({ format: 'a4', unit: 'mm' });
const pageWidth = 210;
const pageHeight = 297;

// Color Palette
const C_DARK_NAVY = [15, 23, 42];     // #0f172a
const C_CYAN       = [0, 168, 204];    // Accessible Cyan
const C_EMERALD    = [16, 149, 93];    // Emerald Green
const C_TEXT_MAIN  = [30, 41, 59];     // Slate 800
const C_TEXT_MUTED = [100, 116, 139];  // Slate 500
const C_BORDER     = [226, 232, 240];  // Slate 200

// Helper to draw section title
function drawSectionTitle(text, x, y, width = 125) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...C_DARK_NAVY);
    doc.text(text.toUpperCase(), x, y);
    
    // Bottom accent line
    doc.setDrawColor(...C_CYAN);
    doc.setLineWidth(0.8);
    doc.line(x, y + 1.5, x + 25, y + 1.5);
    
    doc.setDrawColor(...C_BORDER);
    doc.setLineWidth(0.3);
    doc.line(x + 25, y + 1.5, x + width, y + 1.5);
}

// Helper to draw sidebar section title
function drawSidebarTitle(text, x, y) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...C_CYAN);
    doc.text(text.toUpperCase(), x, y);
    
    doc.setDrawColor(30, 58, 95);
    doc.setLineWidth(0.5);
    doc.line(x, y + 1.5, x + 50, y + 1.5);
}

// ==================== PAGE 1 ====================
// Left Sidebar Background
doc.setFillColor(15, 23, 42); // Deep Navy
doc.rect(0, 0, 68, pageHeight, 'F');

// Top Right Header Background
doc.setFillColor(241, 245, 249); // Slate 100
doc.rect(68, 0, pageWidth - 68, 42, 'F');

// Header Info (Right)
doc.setFont('helvetica', 'bold');
doc.setFontSize(22);
doc.setTextColor(...C_DARK_NAVY);
doc.text('LUIS GALLARDO', 75, 16);

doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(...C_CYAN);
doc.text('INGENIERO DE SOFTWARE / ANALISTA DE SISTEMAS', 75, 23);

doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(...C_TEXT_MUTED);
doc.text('Full-Stack Developer | Arquitectura Web, Móvil & Sistemas de Gestión', 75, 29);

doc.setFontSize(8.5);
doc.setTextColor(...C_DARK_NAVY);
doc.text('Araure / Acarigua, Portuguesa, Venezuela  |  Disponible para contratación', 75, 36);

// SIDEBAR CONTENT (Left)
let sy = 16;

// Profile Photo monogram
doc.setFillColor(30, 41, 59);
doc.roundedRect(16, sy, 36, 36, 3, 3, 'F');
doc.setDrawColor(...C_CYAN);
doc.setLineWidth(0.8);
doc.roundedRect(16, sy, 36, 36, 3, 3, 'D');

doc.setFont('helvetica', 'bold');
doc.setFontSize(18);
doc.setTextColor(255, 255, 255);
doc.text('LG', 30, sy + 23);

sy += 46;

// Contact Section
drawSidebarTitle('CONTACTO', 10, sy);
sy += 8;

const contacts = [
    { label: 'Teléfono / WhatsApp', val: '+58 424-5937578' },
    { label: 'Teléfono Secundario', val: '+58 422-5937578' },
    { label: 'Correo Electrónico', val: 'luis.adriangallardo@gmail.com' },
    { label: 'GitHub', val: 'github.com/lgallardo04' },
    { label: 'Portafolio Web', val: 'portfolio-dashboard (Vercel)' },
    { label: 'Ubicación', val: 'Urb. Los Robles 1, Calle 3, #110' },
    { label: 'Cédula de Identidad', val: 'V-30.922.958 (23 Años)' }
];

contacts.forEach(c => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text(c.label, 10, sy);
    sy += 3.8;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(255, 255, 255);
    const splitVal = doc.splitTextToSize(c.val, 50);
    doc.text(splitVal, 10, sy);
    sy += (splitVal.length * 3.8) + 2.5;
});

sy += 2;
// Skills Sidebar Section
drawSidebarTitle('HABILIDADES CLAVE', 10, sy);
sy += 8;

const skillGroups = [
    { title: 'Frontend & UI', items: ['Next.js 14/16 (App Router)', 'React 19, TypeScript', 'Tailwind CSS, CSS3 Glass', 'Responsive & Mobile-First', 'Recharts, Chart.js, jsPDF'] },
    { title: 'Backend & APIs', items: ['Python (FastAPI)', 'Node.js, Express', 'PHP (Desarrollo Web)', 'RESTful APIs, JSON APIs', 'NextAuth.js, JWT, RBAC'] },
    { title: 'Bases de Datos & Cloud', items: ['PostgreSQL, Supabase (RLS)', 'Prisma ORM, SQLAlchemy', 'MySQL, Procedimientos', 'Vercel, Render'] },
    { title: 'Móvil & Herramientas', items: ['Capacitor (Android APK)', 'PWA (Progressive Web Apps)', 'Git, GitHub, CI/CD', 'Playwright (E2E Testing)'] }
];

skillGroups.forEach(sg => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(0, 240, 255);
    doc.text(`• ${sg.title}`, 10, sy);
    sy += 4;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(226, 232, 240);
    sg.items.forEach(item => {
        doc.text(`  - ${item}`, 10, sy);
        sy += 3.5;
    });
    sy += 2;
});

// Languages & Soft Skills in Sidebar
drawSidebarTitle('IDIOMAS & APTITUDES', 10, sy);
sy += 7;
doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
doc.setTextColor(255, 255, 255);
doc.text('• Español: Nativo', 10, sy); sy += 4;
doc.text('• Inglés: Intermedio (Técnico)', 10, sy); sy += 5;
doc.setTextColor(148, 163, 184);
doc.text('• Liderazgo técnico y proactividad', 10, sy); sy += 3.6;
doc.text('• Pensamiento analítico y resolución ágil', 10, sy); sy += 3.6;
doc.text('• Adaptabilidad y aprendizaje continuo', 10, sy); sy += 3.6;

// MAIN COLUMN (Right)
let my = 50;

// 1. Perfil Profesional
drawSectionTitle('PERFIL PROFESIONAL', 75, my);
my += 6;

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(...C_TEXT_MAIN);
const profileText = "Ingeniero de Software y Analista de Sistemas con sólida experiencia en la arquitectura, desarrollo e implantación de sistemas web, móviles y empresariales de alto rendimiento. Especializado en el ecosistema Full-Stack moderno con Next.js, React, TypeScript, Python (FastAPI), PostgreSQL y Supabase.\n\nDemostrada capacidad para liderar proyectos de software sociotecnológico y plataformas comerciales de punto de venta (POS) e inventario, diseñando desde la estructura relacional con seguridad por fila (RLS) y APIs REST hasta interfaces de usuario intuitivas y responsivas de alta fidelidad. Enfocado en resolver problemas complejos mediante código limpio, estándares modernos de seguridad y metodologías ágiles.";
const profileLines = doc.splitTextToSize(profileText, 125);
doc.text(profileLines, 75, my);
my += (profileLines.length * 3.8) + 6;

// 2. Proyectos Destacados de Ingeniería
drawSectionTitle('PROYECTOS DESTACADOS DE INGENIERÍA', 75, my);
my += 7;

// Project 1: CDI Salud Integral
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(...C_DARK_NAVY);
doc.text('CDI - Sistema Integral de Gestión Hospitalaria', 75, my);
doc.setFont('helvetica', 'bold');
doc.setFontSize(8);
doc.setTextColor(...C_EMERALD);
doc.text('Web / PWA / Android APK', 160, my);
my += 4;

doc.setFont('helvetica', 'italic');
doc.setFontSize(8);
doc.setTextColor(...C_CYAN);
doc.text('FastAPI (Python), SQLAlchemy, PostgreSQL/Supabase, React, TypeScript, Capacitor', 75, my);
my += 4;

doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(...C_TEXT_MAIN);
const cdiPoints = [
    "• Diseñó y desarrolló una plataforma hospitalaria integral de 24 módulos clínicos para Centros de Diagnóstico Integral.",
    "• Implementó el módulo de Triaje de Urgencias con el cálculo automatizado del puntaje internacional NEWS2 (National Early Warning Score) y clasificación Manchester.",
    "• Creó visor de imágenes radiológicas DICOM interactivo (RIS/PACS), odontograma anatómico FDI y generación de récipes médicos oficiales con código QR y validación digital.",
    "• Arquitectura híbrida offline-first con sincronización reactiva local y empaquetado nativo para Android mediante Capacitor."
];
cdiPoints.forEach(pt => {
    const lines = doc.splitTextToSize(pt, 125);
    doc.text(lines, 75, my);
    my += (lines.length * 3.6);
});
my += 3;

// Project 2: Araure Tricentenaria
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(...C_DARK_NAVY);
doc.text('Araure Tricentenaria — Censo Comunal & BI de Salud', 75, my);
doc.setFont('helvetica', 'bold');
doc.setFontSize(8);
doc.setTextColor(...C_CYAN);
doc.text('Producción Vercel', 168, my);
my += 4;

doc.setFont('helvetica', 'italic');
doc.setFontSize(8);
doc.setTextColor(...C_CYAN);
doc.text('Next.js 14 (App Router), Prisma ORM, PostgreSQL (Supabase), Tailwind, NextAuth, Chart.js', 75, my);
my += 4;

doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(...C_TEXT_MAIN);
const araurePoints = [
    "• Sistema en producción desplegado en Vercel para la digitalización y gestión del censo de la Comuna Escuela Araure Tricentenaria.",
    "• Módulo de Business Intelligence demográfico con pirámide poblacional en tiempo real y mapa estadístico de prevalencia de patologías crónicas y demanda de medicamentos.",
    "• Control de acceso por roles (RBAC) granular para Administradores, Jefes de Comunidad y Jefes de Calle con auditoría.",
    "• Generación de reportes institucionales y carnets de censo en PDF automatizados."
];
araurePoints.forEach(pt => {
    const lines = doc.splitTextToSize(pt, 125);
    doc.text(lines, 75, my);
    my += (lines.length * 3.6);
});
my += 3;

// Project 3: Urbanización Los Robles
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(...C_DARK_NAVY);
doc.text('Urbanización Los Robles — Catastro & Garita', 75, my);
doc.setFont('helvetica', 'bold');
doc.setFontSize(8);
doc.setTextColor(...C_EMERALD);
doc.text('Next.js 16 / Supabase', 168, my);
my += 4;

doc.setFont('helvetica', 'italic');
doc.setFontSize(8);
doc.setTextColor(...C_CYAN);
doc.text('Next.js 16, React 19, TypeScript, PostgreSQL Supabase (RLS), Recharts, Playwright E2E', 75, my);
my += 4;

doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(...C_TEXT_MAIN);
const roblesPoints = [
    "• Sistema integral de gestión comunitaria, catastro parcelario, registro de incidencias ciudadanas y bitácora de garita.",
    "• Control estricto de seguridad perimetral para registro de ingresos vehiculares/peatonales impidiendo duplicidad de ingresos abiertos.",
    "• Módulo financiero de condominio bimonetario (USD / VES con tasa oficial BCV), conciliación e imputación contable FIFO de cuotas.",
    "• Base de datos relacional con 19 tablas canónicas y políticas de Row Level Security (RLS) estrictas."
];
roblesPoints.forEach(pt => {
    const lines = doc.splitTextToSize(pt, 125);
    doc.text(lines, 75, my);
    my += (lines.length * 3.6);
});

// Footer Page 1
doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
doc.setTextColor(...C_TEXT_MUTED);
doc.text('Página 1 de 2  |  Currículum Vitae — Luis Gallardo  |  github.com/lgallardo04', 105, 292, { align: 'center' });


// ==================== PAGE 2 ====================
doc.addPage();

// Left Sidebar Background for Page 2
doc.setFillColor(15, 23, 42); // Deep Navy
doc.rect(0, 0, 68, pageHeight, 'F');

// Top Right Header Background Page 2
doc.setFillColor(241, 245, 249);
doc.rect(68, 0, pageWidth - 68, 25, 'F');

doc.setFont('helvetica', 'bold');
doc.setFontSize(14);
doc.setTextColor(...C_DARK_NAVY);
doc.text('LUIS GALLARDO  |  TRAYECTORIA & FORMACIÓN', 75, 14);

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(...C_TEXT_MUTED);
doc.text('Sistemas Implementados, Experiencia Laboral y Formación Académica', 75, 20);

// Page 2 Sidebar: Highlights Summary
let s2y = 20;
drawSidebarTitle('SÍNTESIS TÉCNICA', 10, s2y);
s2y += 8;

const techHighlights = [
    { k: 'Arquitectura', v: 'Clean Architecture, REST APIs, Microservicios modulares, PWA' },
    { k: 'Frontend', v: 'Next.js 14-16, React 19, TypeScript, Tailwind, Recharts' },
    { k: 'Backend', v: 'Python (FastAPI), Node.js, SQLAlchemy, Pydantic' },
    { k: 'Bases de Datos', v: 'PostgreSQL, Supabase RLS, Prisma ORM, MySQL' },
    { k: 'Testing & CI/CD', v: 'Playwright E2E, Unit Tests, Git GitHub Actions' },
    { k: 'Despliegue', v: 'Vercel, Render, Supabase Cloud' }
];

techHighlights.forEach(th => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(0, 240, 255);
    doc.text(th.k, 10, s2y);
    s2y += 3.5;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(226, 232, 240);
    const lines = doc.splitTextToSize(th.v, 50);
    doc.text(lines, 10, s2y);
    s2y += (lines.length * 3.5) + 3;
});

s2y += 4;
drawSidebarTitle('ENLACES A REPOSITORIOS', 10, s2y);
s2y += 8;
const repoLinks = [
    { name: 'Portafolio Web', url: 'github.com/lgallardo04/portfolio-dashboard' },
    { name: 'CDI Salud Integral', url: 'github.com/lgallardo04/cdi-salud-integral' },
    { name: 'Araure Tricentenaria', url: 'github.com/lgallardo04/araure-tricentenaria' },
    { name: 'Los Robles Gestión', url: 'github.com/lgallardo04/urbanizacion-los-robles' },
    { name: 'Roble Market', url: 'github.com/lgallardo04/roble-market-frontend' }
];
repoLinks.forEach(rl => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(255, 255, 255);
    doc.text(`• ${rl.name}:`, 10, s2y);
    s2y += 3.5;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.8);
    doc.setTextColor(148, 163, 184);
    const l = doc.splitTextToSize(rl.url, 50);
    doc.text(l, 10, s2y);
    s2y += (l.length * 3.2) + 2.5;
});

// Page 2 Main Column
let m2y = 35;

// Project 4: Roble Market E-Commerce & POS
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(...C_DARK_NAVY);
doc.text('Roble Market — Plataforma E-Commerce & POS', 75, m2y);
doc.setFont('helvetica', 'bold');
doc.setFontSize(8);
doc.setTextColor(...C_CYAN);
doc.text('FastAPI + Next.js', 170, m2y);
m2y += 4;

doc.setFont('helvetica', 'italic');
doc.setFontSize(8);
doc.setTextColor(...C_CYAN);
doc.text('FastAPI, PostgreSQL, SQLAlchemy, Next.js, ReportLab (PDFs), Vercel & Render', 75, m2y);
m2y += 4;

doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(...C_TEXT_MAIN);
const roblePoints = [
    "• Arquitectura e-commerce completa con API REST de alto rendimiento en FastAPI y frontend responsivo en Next.js.",
    "• Catálogo interactivo en tiempo real, carrito reactivo con validación de inventario y simulación de pagos móviles con webhooks.",
    "• Módulo de facturación bimonetaria, generación automática de reportes de arqueo de caja en PDF mediante ReportLab."
];
roblePoints.forEach(pt => {
    const lines = doc.splitTextToSize(pt, 125);
    doc.text(lines, 75, m2y);
    m2y += (lines.length * 3.6);
});
m2y += 6;

// EXPERIENCIA LABORAL
drawSectionTitle('EXPERIENCIA LABORAL', 75, m2y);
m2y += 7;

// Exp 1: Roble Market
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(...C_DARK_NAVY);
doc.text('Encargado General de Operaciones & Desarrollador POS / E-Commerce', 75, m2y);
m2y += 4;
doc.setFont('helvetica', 'bold');
doc.setFontSize(8);
doc.setTextColor(...C_CYAN);
doc.text('Roble Market | Acarigua, Venezuela', 75, m2y);
doc.setTextColor(...C_TEXT_MUTED);
doc.text('2024 — 2026', 178, m2y);
m2y += 4;

doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(...C_TEXT_MAIN);
const expRoble = [
    "• Coordinó la operativa general del local, supervisión de inventario físico, logística de compras y cuadre diario de caja y fondos.",
    "• Diseñó y desarrolló de forma autónoma la plataforma de software de ventas e inventario para agilizar el despacho y arqueos.",
    "• Integró mecanismos de facturación multimoneda (USD y VES) mitigando discrepancias cambiarias en caja."
];
expRoble.forEach(p => {
    const l = doc.splitTextToSize(p, 125);
    doc.text(l, 75, m2y);
    m2y += (l.length * 3.6);
});
m2y += 4;

// Exp 2: Desarrollo Independiente / Institucional
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(...C_DARK_NAVY);
doc.text('Ingeniero de Software / Consultor Técnico de Sistemas', 75, m2y);
m2y += 4;
doc.setFont('helvetica', 'bold');
doc.setFontSize(8);
doc.setTextColor(...C_CYAN);
doc.text('Proyectos Sociotecnológicos e Institucionales Comunitarios', 75, m2y);
doc.setTextColor(...C_TEXT_MUTED);
doc.text('2023 — Presente', 174, m2y);
m2y += 4;

doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(...C_TEXT_MAIN);
const expComun = [
    "• Lideró el ciclo de vida completo (análisis, diseño, desarrollo, pruebas y despliegue) de sistemas críticos comunales y de salud.",
    "• Desplegó soluciones en producción con alta disponibilidad mediante Vercel, Supabase y Docker, capacitando a usuarios finales."
];
expComun.forEach(p => {
    const l = doc.splitTextToSize(p, 125);
    doc.text(l, 75, m2y);
    m2y += (l.length * 3.6);
});
m2y += 4;

// Exp 3: Mango Center
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(...C_DARK_NAVY);
doc.text('Auxiliar Integral & Soporte Técnico POS', 75, m2y);
m2y += 4;
doc.setFont('helvetica', 'bold');
doc.setFontSize(8);
doc.setTextColor(...C_CYAN);
doc.text('Mango Center | Acarigua, Venezuela', 75, m2y);
doc.setTextColor(...C_TEXT_MUTED);
doc.text('2024', 188, m2y);
m2y += 4;

doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(...C_TEXT_MAIN);
const expMango = [
    "• Asistencia en atención al cliente, soporte operativo directo a terminales de punto de venta e inventario digitalizado."
];
expMango.forEach(p => {
    const l = doc.splitTextToSize(p, 125);
    doc.text(l, 75, m2y);
    m2y += (l.length * 3.6);
});
m2y += 4;

// Exp 4: Hiperlíder
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(...C_DARK_NAVY);
doc.text('Operador de Caja y Transacciones Comerciales Masivas', 75, m2y);
m2y += 4;
doc.setFont('helvetica', 'bold');
doc.setFontSize(8);
doc.setTextColor(...C_CYAN);
doc.text('Hiperlíder | Araure, Venezuela', 75, m2y);
doc.setTextColor(...C_TEXT_MUTED);
doc.text('2022', 188, m2y);
m2y += 4;

doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(...C_TEXT_MAIN);
const expHiper = [
    "• Manejo de transacciones de alto volumen, cuadre y arqueo exacto de caja, gestión de múltiples métodos de pago."
];
expHiper.forEach(p => {
    const l = doc.splitTextToSize(p, 125);
    doc.text(l, 75, m2y);
    m2y += (l.length * 3.6);
});
m2y += 6;

// FORMACIÓN ACADÉMICA
drawSectionTitle('EDUCACIÓN & FORMACIÓN PROFESIONAL', 75, m2y);
m2y += 7;

// Edu 1: UPT
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(...C_DARK_NAVY);
doc.text('P.N.F. Ingeniería Informática', 75, m2y);
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(...C_TEXT_MUTED);
doc.text('2020 — 2024', 178, m2y);
m2y += 4;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(...C_CYAN);
doc.text('Universidad Politécnica Territorial del estado Portuguesa "J.J. Montilla"', 75, m2y);
m2y += 3.8;
doc.setTextColor(...C_TEXT_MAIN);
doc.text('Especialización en arquitectura de software, bases de datos relacionales y proyectos sociotecnológicos.', 75, m2y);
m2y += 6;

// Edu 2: IUTEPI
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(...C_DARK_NAVY);
doc.text('T.S.U. Análisis de Sistemas', 75, m2y);
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(...C_TEXT_MUTED);
doc.text('2024 — Presente', 174, m2y);
m2y += 4;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(...C_CYAN);
doc.text('Instituto Universitario de Tecnología Para la Informática (IUTEPI) - Acarigua', 75, m2y);
m2y += 3.8;
doc.setTextColor(...C_TEXT_MAIN);
doc.text('Modelado de datos, análisis de requerimientos, diseño de algoritmos y metodologías ágiles (Scrum).', 75, m2y);
m2y += 6;

// Edu 3: Certificaciones
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(...C_DARK_NAVY);
doc.text('Certificación Profesional en Desarrollo Web Full-Stack', 75, m2y);
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(...C_TEXT_MUTED);
doc.text('Certificado', 180, m2y);
m2y += 4;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(...C_CYAN);
doc.text('Udemy Academy — HTML5, CSS3, JavaScript ES6+, PHP, MySQL & REST APIs', 75, m2y);

// Footer Page 2
doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
doc.setTextColor(...C_TEXT_MUTED);
doc.text('Página 2 de 2  |  Currículum Vitae — Luis Gallardo  |  luis.adriangallardo@gmail.com', 105, 292, { align: 'center' });

// Output
const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
const outPath = path.join(__dirname, '../Currículum Luis Gallardo.pdf');
fs.writeFileSync(outPath, pdfBuffer);
console.log('Successfully generated CV PDF at:', outPath, 'Size:', pdfBuffer.length);
