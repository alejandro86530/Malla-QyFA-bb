document.addEventListener('DOMContentLoaded', function() {

    // --- ESTRUCTURA DE DATOS ---
    // Aquí definimos todos los ramos, sus IDs únicos y sus requisitos.
    // Un ID único es crucial para que el sistema de requisitos funcione correctamente.
    const ramosData = [
        // Semestre 1
        { id: 'matematica', nombre: 'Matemática', semestre: 1, req: [] },
        { id: 'intro-ciencias-farmaceuticas', nombre: 'Introducción a las Ciencias Farmaceuticas', semestre: 1, req: [] },
        { id: 'psicologia-general', nombre: 'Psicologia General', semestre: 1, req: [] },
        { id: 'quimica-general', nombre: 'Química General', semestre: 1, req: [] },
        { id: 'lab-quimica-general', nombre: 'Laboratorio de Quimica General', semestre: 1, req: [] },
        { id: 'biologia-celular', nombre: 'Biologia Celular', semestre: 1, req: [] },
        // Semestre 2
        { id: 'anatomia-humana', nombre: 'Anatomía Humana', semestre: 2, req: [] },
        { id: 'estadistica', nombre: 'Estadística', semestre: 2, req: ['matematica'] },
        { id: 'intro-fisica', nombre: 'Introducción a la Física', semestre: 2, req: ['matematica'] },
        { id: 'quimica-organica', nombre: 'Química Orgánica', semestre: 2, req: ['quimica-general', 'lab-quimica-general'] },
        { id: 'lab-quimica-organica', nombre: 'Laboratorio de Química Orgánica', semestre: 2, req: ['quimica-general', 'lab-quimica-general'] },
        { id: 'quimica-inorganica', nombre: 'Química Inorgánica', semestre: 2, req: ['quimica-general', 'lab-quimica-general'] },
        { id: 'lab-quimica-inorganica', nombre: 'Laboratorio de Química Inorgánica', semestre: 2, req: ['quimica-general', 'lab-quimica-general'] },
        // Semestre 3
        { id: 'calculo', nombre: 'Calculo', semestre: 3, req: ['matematica'] },
        { id: 'fisiologia-humana', nombre: 'Fisiologia Humana', semestre: 3, req: ['biologia-celular', 'anatomia-humana'] },
        { id: 'quimica-analitica', nombre: 'Quimica Analitica Cuanti-Cualitativa', semestre: 3, req: ['quimica-inorganica', 'lab-quimica-inorganica'] },
        { id: 'lab-quimica-analitica', nombre: 'Laboratorio de Quimica Analitica Cuanti-Cualitativa', semestre: 3, req: ['quimica-inorganica', 'lab-quimica-inorganica'] },
        { id: 'quimica-organica-avanzada', nombre: 'Quimica Organica Avanzada', semestre: 3, req: ['quimica-organica', 'lab-quimica-organica'] },
        { id: 'lab-quimica-organica-avanzada', nombre: 'Laboratorio de Quimica Organica Avanzada', semestre: 3, req: ['quimica-organica', 'lab-quimica-organica'] },
        { id: 'epidemiologia', nombre: 'Epidemiologia y Salud Pública', semestre: 3, req: ['estadistica'] },
        { id: 'formacion-integral-1', nombre: 'Formación Integral', semestre: 3, req: [] },
        // Semestre 4
        { id: 'fisiopatologia', nombre: 'Fisiopatología', semestre: 4, req: ['fisiologia-humana'] },
        { id: 'fisicoquimica', nombre: 'Fisicoquímica', semestre: 4, req: ['intro-fisica', 'calculo', 'quimica-inorganica', 'lab-quimica-inorganica'] },
        { id: 'lab-fisicoquimica', nombre: 'Laboratorio de Fisicoquímica', semestre: 4, req: ['intro-fisica', 'calculo', 'quimica-inorganica', 'lab-quimica-inorganica'] },
        { id: 'analisis-instrumental', nombre: 'Analisis Químico Instrumental', semestre: 4, req: ['quimica-analitica', 'lab-quimica-analitica'] },
        { id: 'lab-analisis-instrumental', nombre: 'Laboratorio de Analisis Químico Instrumental', semestre: 4, req: ['quimica-analitica', 'lab-quimica-analitica'] },
        { id: 'farmacognosia', nombre: 'Farmacognosia y Fitoterapia', semestre: 4, req: ['biologia-celular', 'quimica-organica-avanzada', 'lab-quimica-organica-avanzada'] },
        { id: 'microbiologia', nombre: 'Microbiología General', semestre: 4, req: ['biologia-celular', 'quimica-organica', 'lab-quimica-organica'] },
        { id: 'formacion-integral-2', nombre: 'Formación Integral 2', semestre: 4, req: [] },
        // Semestre 5
        { id: 'farmacologia-1', nombre: 'Farmacología 1', semestre: 5, req: ['fisiopatologia', 'microbiologia'] },
        { id: 'bioquimica-general', nombre: 'Bioquímica General', semestre: 5, req: ['biologia-celular', 'quimica-organica-avanzada', 'lab-quimica-organica-avanzada'] },
        { id: 'lab-bioquimica-general', nombre: 'Laboratorio de Bioquímica General', semestre: 5, req: ['biologia-celular', 'quimica-organica-avanzada', 'lab-quimica-organica-avanzada'] },
        { id: 'tecnologia-farmaceutica-1', nombre: 'Tecnologia Farmaceutica 1', semestre: 5, req: ['fisicoquimica', 'lab-fisicoquimica', 'analisis-instrumental', 'lab-analisis-instrumental'] },
        { id: 'farmacoquimica-1', nombre: 'Farmaco química 1', semestre: 5, req: ['farmacognosia', 'fisiopatologia', 'analisis-instrumental', 'lab-analisis-instrumental'] },
        { id: 'analisis-evidencia-1', nombre: 'Analisis de la Evidencia Cientifica 1', semestre: 5, req: ['farmacognosia', 'fisiopatologia'] },
        { id: 'formacion-integral-3', nombre: 'Formación Integral 3', semestre: 5, req: [] },
        // Semestre 6
        { id: 'farmacologia-2', nombre: 'Farmacología 2', semestre: 6, req: ['farmacologia-1'] },
        { id: 'tecnologia-farmaceutica-2', nombre: 'Tecnologia Farmaceutica 2', semestre: 6, req: ['tecnologia-farmaceutica-1'] },
        { id: 'farmacoquimica-2', nombre: 'Farmacoquímica 2', semestre: 6, req: ['farmacoquimica-1'] },
        { id: 'analisis-evidencia-2', nombre: 'Analisis de la Evidencia Cientifica 2', semestre: 6, req: ['analisis-evidencia-1'] },
        { id: 'bioquimica-clinica', nombre: 'Bioquímica Clínica', semestre: 6, req: ['microbiologia', 'bioquimica-general', 'lab-bioquimica-general'] },
        // Semestre Verano 1
        { id: 'practica-primaria', nombre: 'Práctica Atención Primaria', semestre: 'Verano 1', req: ['farmacologia-2', 'farmacognosia', 'analisis-evidencia-2'] },
        // Semestre 7
        { id: 'farmacocinetica', nombre: 'Farmacocinetica Clínica', semestre: 7, req: ['farmacologia-2', 'bioquimica-clinica'] },
        { id: 'nutricion-clinica', nombre: 'Nutrición Clinica', semestre: 7, req: ['farmacologia-2', 'bioquimica-clinica'] },
        { id: 'tecnologia-cosmetica', nombre: 'Tecnologia Cosmética', semestre: 7, req: ['tecnologia-farmaceutica-2'] },
        { id: 'toxicologia', nombre: 'Toxicología', semestre: 7, req: ['farmacologia-2', 'bioquimica-clinica'] },
        { id: 'farmacia-clinica-1', nombre: 'Farmacia Clínica 1', semestre: 7, req: ['farmacologia-2', 'bioquimica-clinica'] },
        // Semestre 8
        { id: 'farmacia-asistencial', nombre: 'Farmacia Asistencial', semestre: 8, req: ['farmacologia-2', 'analisis-evidencia-2'] },
        { id: 'bioequivalencia', nombre: 'Bioequivalencia', semestre: 8, req: ['farmacocinetica', 'tecnologia-cosmetica'] },
        { id: 'control-calidad-procesos', nombre: 'Control de Calidad y Procesos', semestre: 8, req: ['tecnologia-cosmetica'] },
        { id: 'admin-gestion-farmaceutica', nombre: 'Administración y Gestión Farmaceutica', semestre: 8, req: ['practica-primaria'] },
        { id: 'farmacia-clinica-2', nombre: 'Farmacia Clínica 2', semestre: 8, req: ['nutricion-clinica', 'farmacia-clinica-1'] },
        // Semestre Verano 2
        { id: 'practica-comunitaria', nombre: 'Práctica Farmacia Comunitaria', semestre: 'Verano 2', req: ['farmacoquimica-2', 'admin-gestion-farmaceutica', 'toxicologia'] },
        // Semestre 9
        { id: 'internado-asistencial', nombre: 'Internado en Farmacia Asistencial', semestre: 9, req: ['licenciatura'] },
        { id: 'aseguramiento-calidad', nombre: 'Aseguramiento y Gestión de Calidad', semestre: 9, req: ['control-calidad-procesos'] },
        { id: 'farmacovigilancia', nombre: 'Farmacovigilancia y Atención Farmacéutica', semestre: 9, req: ['toxicologia', 'farmacia-clinica-2'] },
        { id: 'legislacion-farmaceutica', nombre: 'Legislación Farmacéutica y Bioética', semestre: 9, req: ['practica-comunitaria'] },
        { id: 'seminario-titulo-1', nombre: 'Seminario de Título', semestre: 9, req: ['licenciatura'] },
        // Semestre 10
        { id: 'internado-clinica-industria', nombre: 'Internado: Farmacía Clínica o Industria', semestre: 10, req: ['licenciatura'] },
        { id: 'seminario-titulo-2', nombre: 'Seminario de Título', semestre: 10, req: ['licenciatura'] },
    ];
    
    // Lista de mensajes motivadores
    const mensajesMotivadores = [
        "¡Felicidades, te amo!",
        "¡Eres seca! Sigue así.",
        "Un paso más cerca de la meta.",
        "¡Seca! Cada día te superas más.",
        "¡Cada vez más poquito! No te rindas jamás bb.",
        "¡Tu puedes con esto y más!",
        "¡Qué orgullo! Vas súper bien mi bb."
    ];

    const mallaContainer = document.getElementById('malla-curricular');
    const notificacionDiv = document.getElementById('notificacion');
    
    // Almacenamiento de ramos aprobados
    let aprobados = JSON.parse(localStorage.getItem('ramosAprobados')) || [];

    /**
     * Busca el nombre completo de un ramo a partir de su ID.
     * @param {string} id El ID del ramo a buscar.
     * @returns {string} El nombre del ramo.
     */
    function getNombreRamo(id) {
        const ramo = ramosData.find(r => r.id === id);
        return ramo ? ramo.nombre : 'Ramo desconocido';
    }

    /**
     * Muestra una notificación en pantalla.
     * @param {string} mensaje El texto a mostrar.
     * @param {string} tipo 'error' o 'exito'.
     * @param {number} duracion Duración en milisegundos.
     */
    function mostrarNotificacion(mensaje, tipo = 'error', duracion = 3000) {
        notificacionDiv.textContent = mensaje;
        notificacionDiv.className = `notificacion visible ${tipo}`;
        
        setTimeout(() => {
            notificacionDiv.className = 'notificacion';
        }, duracion);
    }
    
    /**
     * Guarda el estado actual de los ramos aprobados en el localStorage del navegador.
     */
    function guardarEstado() {
        localStorage.setItem('ramosAprobados', JSON.stringify(aprobados));
    }

    /**
     * Genera y muestra los hitos de la carrera.
     */
    function generarHitos() {
        const hitos = [
            { id: 'licenciatura', nombre: 'Obtención Licenciatura en Ciencias Farmacéuticas', reqSemestres: [1, 2, 3, 4, 5, 6, 7, 8] },
            { id: 'titulo', nombre: 'Obtención Título Profesional de Química Farmacéutica', reqSemestres: 'todos' }
        ];
        const hitosContainer = document.getElementById('hitos-container');
        hitosContainer.innerHTML = ''; // Limpiar antes de generar

        hitos.forEach(hito => {
            const hitoDiv = document.createElement('div');
            hitoDiv.id = hito.id;
            hitoDiv.className = 'hito';
            hitoDiv.textContent = hito.nombre;
            hitosContainer.appendChild(hitoDiv);
        });
    }

    /**
     * Actualiza el estado visual de los hitos (licenciatura y título).
     */
    function actualizarHitos() {
        // Verificar Licenciatura
        const ramosLicenciatura = ramosData.filter(r => r.semestre <= 8).map(r => r.id);
        const licenciaturaObtenida = ramosLicenciatura.every(id => aprobados.includes(id));
        const licenciaturaDiv = document.getElementById('licenciatura');
        
        if (licenciaturaObtenida) {
            licenciaturaDiv.classList.add('obtenido');
            // Si la licenciatura se acaba de obtener y no está en la lista de aprobados, se añade.
            // Esto es clave para desbloquear los ramos que la requieren.
            if (!aprobados.includes('licenciatura')) {
                aprobados.push('licenciatura');
                guardarEstado(); // Guardar el nuevo estado
            }
        } else {
            licenciaturaDiv.classList.remove('obtenido');
            // Si se desmarca un ramo que quita la licenciatura, la removemos de los aprobados.
            const index = aprobados.indexOf('licenciatura');
            if (index > -1) {
                aprobados.splice(index, 1);
                guardarEstado();
            }
        }

        // Verificar Título Profesional
        const todosLosRamos = ramosData.map(r => r.id);
        const tituloObtenido = todosLosRamos.every(id => aprobados.includes(id));
        document.getElementById('titulo').classList.toggle('obtenido', tituloObtenido);
    }

    /**
     * Actualiza el estado visual de todos los ramos (aprobado, bloqueado, disponible).
     */
    function actualizarEstadoRamos() {
        const todosLosRamosDivs = document.querySelectorAll('.ramo');
        
        todosLosRamosDivs.forEach(ramoDiv => {
            const id = ramoDiv.dataset.id;
            const requisitos = ramosData.find(r => r.id === id).req;
            
            // 1. Marcar como aprobado si está en la lista
            if (aprobados.includes(id)) {
                ramoDiv.classList.add('aprobado');
                ramoDiv.classList.remove('bloqueado');
                return; // Si está aprobado, no necesita más validación
            }
            
            // Si no está aprobado, quitar la clase por si acaso
            ramoDiv.classList.remove('aprobado');

            // 2. Verificar requisitos para ramos no aprobados
            const requisitosFaltantes = requisitos.filter(reqId => !aprobados.includes(reqId));
            
            if (requisitosFaltantes.length > 0) {
                ramoDiv.classList.add('bloqueado');
                const nombresFaltantes = requisitosFaltantes.map(getNombreRamo).join(', ');
                ramoDiv.dataset.faltantes = `Requiere: ${nombresFaltantes}`;
            } else {
                ramoDiv.classList.remove('bloqueado');
                ramoDiv.dataset.faltantes = '';
            }
        });
        
        actualizarHitos();
    }
    
    /**
     * Gestiona el evento de clic sobre un ramo.
     * @param {Event} e El evento de clic.
     */
    function toggleAprobado(e) {
        const ramoDiv = e.target.closest('.ramo');
        if (!ramoDiv) return; // Si no se hizo clic en un ramo, no hacer nada

        const id = ramoDiv.dataset.id;

        // Si el ramo ya está aprobado, se puede desmarcar
        if (ramoDiv.classList.contains('aprobado')) {
            const index = aprobados.indexOf(id);
            if (index > -1) {
                aprobados.splice(index, 1);
            }
        } else if (ramoDiv.classList.contains('bloqueado')) {
            // Si está bloqueado, mostrar notificación de error con los requisitos faltantes
            mostrarNotificacion(ramoDiv.dataset.faltantes, 'error');
            return;
        } else {
            // Si no está aprobado ni bloqueado, se marca como aprobado
            aprobados.push(id);
            // Mostrar mensaje motivador (no siempre)
            if (Math.random() > 0.4) { // 60% de probabilidad de mostrar mensaje
                const mensaje = mensajesMotivadores[Math.floor(Math.random() * mensajesMotivadores.length)];
                mostrarNotificacion(mensaje, 'exito', 2500);
            }
        }

        guardarEstado();
        actualizarEstadoRamos();
    }
    
    /**
     * Genera la estructura HTML de la malla a partir de los datos.
     */
    function generarMalla() {
        const semestres = [...new Set(ramosData.map(r => r.semestre))];
        
        semestres.forEach(numSemestre => {
            const semestreDiv = document.createElement('div');
            semestreDiv.className = 'semestre';
            
            const titulo = document.createElement('h2');
            titulo.textContent = `Semestre ${numSemestre}`;
            // Ajuste para los semestres de verano
            if (typeof numSemestre === 'string') {
                titulo.textContent = numSemestre;
            }
            semestreDiv.appendChild(titulo);

            const ramosDelSemestre = ramosData.filter(r => r.semestre === numSemestre);

            ramosDelSemestre.forEach(ramo => {
                const ramoDiv = document.createElement('div');
                ramoDiv.className = 'ramo';
                ramoDiv.textContent = ramo.nombre;
                ramoDiv.dataset.id = ramo.id;
                semestreDiv.appendChild(ramoDiv);
            });

            mallaContainer.appendChild(semestreDiv);
        });

        generarHitos();
    }

    // --- INICIALIZACIÓN ---
    generarMalla();
    actualizarEstadoRamos();
    mallaContainer.addEventListener('click', toggleAprobado);

});
