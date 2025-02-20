import React from 'react';

const CV = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">María Cecilia Miranda Garcés</h1>
        <div className="text-gray-600 mb-4">
          <p>+593998024577 | mirandagarces@gmail.com</p>
        </div>
      </header>

      {/* Motivation Section */}
      <section className="mb-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-3">Carta de motivación</h2>
        <p className="text-gray-700 leading-relaxed">
          Mi relación con la PUCE abarca múltiples dimensiones: como estudiante de pregrado, como docente de las materias Comunicación Oral y Escrita y Pensamiento y Lenguaje, y hasta 2023 como correctora en el Centro de Traducciones. Esta trayectoria me ha permitido desarrollar un profundo entendimiento de las necesidades educativas de la institución. A lo largo de mi carrera, he desarrollado materiales didácticos para comunicación oral y escrita en diversas instituciones de educación superior y me destaco por mi capacidad para crear contenido que integra teoría y práctica de manera efectiva. Mi experiencia como correctora y autora de libros de texto me ha permitido desarrollar una comprensión profunda de las necesidades específicas de los estudiantes en el área de comunicación. Mi maestría en New Media de la Universidad de Leeds me brindó una sólida base en tecnologías digitales, que he expandido mediante mi trabajo con inteligencia artificial y modelos de lenguaje. Esta combinación única de experiencia académica, pedagógica y tecnológica me posiciona idealmente para desarrollar contenido técnico innovador que integre las últimas tendencias en educación digital, especialmente en el área de comunicación oral y escrita.
        </p>
      </section>

      {/* Digital Innovation and AI Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Innovación digital e IA</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Experiencia avanzada en el uso y diseño de prompts para modelos extensos de lenguaje</li>
            <li>Becaria de la School of Poetic Computation (NY) para el desarrollo de un proyecto 
            innovador con Large Language Models (2024)</li>
            <li>Autora del ensayo "Sobre errores y alucinaciones: la creatividad en generadores de texto y chatbots" 
            (Mil Machetes, 2024)</li>
          </ul>
        </div>
      </section>

      {/* Relevant Experience Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Experiencia profesional relevante</h2>
        
        <div className="mb-6">
          <h3 className="font-bold text-gray-700">Editorial Didáctica (2022-2023)</h3>
          <p className="text-gray-600 italic mb-2">Autora de libros educativos</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Desarrollo de cuatro libros de texto para educación secundaria</li>
            <li>Integración de elementos digitales y recursos multimedia</li>
            <li>Diseño de actividades interactivas</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-gray-700">Deutsche Welle Akademie, GIZ, UDLA (2022)</h3>
          <p className="text-gray-600 italic mb-2">Fellow del Proyecto Desenredatos</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Ganadora de una beca para escribir un reportaje de periodismo de datos</li>
            <li>Desarrollo del proyecto "Ser una mujer migrante en Ecuador: un camino endurecido por la violencia", publicado en el medio digital Indómita</li>
            <li>Manejo de bases de datos gubernamentales de acceso abierto y minería de datos</li>
            <li>Creación de visualizaciones con Datawrapper</li>
            <li>Participación en una delegación que viajó a Alemania para capacitación en gestión y análisis de datos abiertos</li>
            <li>Colaboración con instructores internacionales en metodologías de investigación y visualización de datos</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-gray-700">PUCE (2018-2023)</h3>
          <p className="text-gray-600 italic mb-2">Correctora del Centro de Traducciones y docente</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Corrección y revisión especializada de textos académicos multilingües</li>
            <li>Docencia en Pensamiento y Lenguaje (Facultad de Educación)</li>
            <li>Docencia en Comunicación Oral y Escrita (Facultad de Comunicación, Lingüística y Literatura)</li>
            <li>Desarrollo de material didáctico digital</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-gray-700">Universidad San Francisco de Quito (2019-2022)</h3>
          <p className="text-gray-600 italic mb-2">Docente tiempo completo</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Docencia en Escritura Académica</li>
            <li>Correctora de las revistas académicas PerDebate y Post(s)</li>
            <li>Implementación de metodologías de enseñanza híbrida</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-gray-700">Universidad de las Américas (2018-2019)</h3>
          <p className="text-gray-600 italic mb-2">Docente</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Docencia en Investigación y Textos Académicos</li>
            <li>Docencia en Escritura Académica</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-gray-700">Universidad Estatal de Bolívar (2017-2018)</h3>
          <p className="text-gray-600 italic mb-2">Docente tiempo completo</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Docencia en múltiples asignaturas incluyendo Escenografía, Introducción a la Cinematografía, y Guión para Televisión</li>
            <li>Investigadora en el proyecto "Catalogación del patrimonio intangible de las comunidades indígenas de Guaranda"</li>
            <li>Desarrollo de metodologías de investigación para Comunicación y Turismo</li>
          </ul>
        </div>
      </section>

      {/* Pedagogical Training */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Formación pedagógica especializada</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>USFQ Blended Flexible Learning Course (40 horas, 2022)</li>
          <li>Complete Brightspace Course (250 horas, 2020)</li>
          <li>Curso de uso didáctico del entorno virtual Moodle 3.5 (40 horas, 2019)</li>
          <li>Taller de planificación educativa, didáctica y evaluación (50 horas, 2018)</li>
        </ul>
      </section>

      {/* Technical Skills Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Competencias técnicas</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-gray-700 mb-2">Idiomas</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Español (Lengua materna)</li>
              <li>Inglés (TOEFL IBT: 113)</li>
              <li>Alemán (Sprachdiplom der Kultusministerkonferenz, Stufe II, nivel C1)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-700 mb-2">Herramientas digitales</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Gestión de entornos virtuales de aprendizaje:
                <ul className="pl-4 mt-1">
                  <li>Moodle</li>
                  <li>Desire2Learn/Brightspace</li>
                  <li>Google Classroom</li>
                  <li>Canvas</li>
                </ul>
              </li>
              <li>Herramientas de productividad académica:
                <ul className="pl-4 mt-1">
                  <li>Microsoft Office Suite</li>
                  <li>Google Workspace</li>
                  <li>Herramientas de colaboración en línea (Notion)</li>
                  <li>OJS (Open Journal Systems)</li>
                  <li>Remnote</li>
                </ul>
              </li>
              <li>Creación y edición de contenido:
                <ul className="pl-4 mt-1">
                  <li>Adobe Creative Suite</li>
                  <li>Datawrapper (Visualización de datos)</li>
                  <li>Herramientas de edición y corrección digital</li>
                  <li>Plataformas de creación de contenido interactivo (Canva, Genially, Infogram)</li>
                </ul>
              </li>
              <li>Tecnologías emergentes:
                <ul className="pl-4 mt-1">
                  <li>Modelos extensos de lenguaje (GPT, Perplexity, Wolfram Alpha)</li>
                  <li>Herramientas de inteligencia artificial para educación (Sway, Mindmeister)</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Publicaciones destacadas</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-gray-700 mb-2">Libros de texto</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Lengua y Literatura EGB 8 (Didáctica Editorial, 2023)</li>
              <li>Caligrafía y Ortografía EGB 9 y 10 (Didáctica Editorial, 2023)</li>
              <li>Comunicación oral y escrita 8EGB (Didáctica Editorial, 2024)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-700 mb-2">Artículos académicos, trabajo periodístico y ensayos recientes</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li><a href="https://milmachetes.info/sobre-errores-y-alucinaciones-la-creatividad-en-generadores-de-texto-y-chatbots/" className="text-blue-600 hover:underline">"Sobre errores y alucinaciones: la creatividad en generadores de texto y chatbots" (2024)</a></li>
              <li><a href="https://revistas.usfq.edu.ec/index.php/anima/article/view/3255" className="text-blue-600 hover:underline">"Impulso poético y trauma en la novela Fiebre de Carnaval" (2024)</a></li>
              <li><a href="https://indomita.media/mujeres-migrantes-violencia-ecuador/" className="text-blue-600 hover:underline">"Ser mujer migrante en Ecuador: un camino endurecido por la violencia" (2022)</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Formación académica</h2>
        <ul className="text-gray-700 space-y-3">
          <li>
            <span className="font-bold">Maestría en Literatura con mención en Escritura Creativa, Aprobada con distinción</span>
            <br />Universidad Andina Simón Bolívar (2022-2024)
          </li>
          <li>
            <span className="font-bold">Master of Arts in New Media, Distinction</span>
            <br />University of Leeds (2015-2016)
            <br />Especialización en cultura digital y nuevas tecnologías
          </li>
          <li>
            <span className="font-bold">Licenciatura en Comunicación</span>
            <br />Pontificia Universidad Católica del Ecuador (2008-2012)
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CV;