export default {
  global: {
    Name:
      'Composición de la leche, aditivos y procesos de elaboración de quesos',
    Description:
      'Este componente formativo aborda los fundamentos de la composición fisicoquímica de la leche, su importancia como materia prima en la industria láctea, los requisitos de calidad exigidos por la normatividad colombiana, los aditivos autorizados y su función, y los procesos tecnológicos para la elaboración de diferentes tipos de queso. Se describen las etapas comunes del proceso quesero y las particularidades de variedades como queso blanco, campesino, <em>Camembert, Cheddar, Gruyere,</em> doble crema, crema, parmesano y mozzarella.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de la leche',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición, origen y composición',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Factores que influyen en su calidad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características fisicoquímicas y organolépticas',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Calidad e inocuidad de la leche',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Normativa colombiana vigente',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Control de calidad (pruebas de plataforma)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Parámetros microbiológicos y fisicoquímicos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Aditivos en la industria láctea',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Definición y marco legal',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Aplicación en quesos y derivados',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Uso responsable de aditivos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Equipos y materiales de proceso',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Proceso general de elaboración de quesos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Estandarización de la leche y cultivos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Coagulación y corte',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Desuerado, moldeado y salado',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Maduración, envasado y almacenamiento',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Tipos de queso',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Clasificación general',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Quesos frescos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Quesos madurados',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Quesos hilados y especiales',
            hash: 't_6_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/92130083_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Aditivo',
      significado:
        'Sustancia añadida intencionalmente en pequeñas cantidades a los alimentos para mejorar sus características tecnológicas, sensoriales o de conservación.',
    },
    {
      termino: 'Bacterias lácticas',
      significado:
        'Microorganismos que fermentan la lactosa produciendo ácido láctico, fundamentales en la elaboración de quesos y leches fermentadas.',
    },
    {
      termino: 'Caseína',
      significado:
        'Proteína principal de la leche (aproximadamente 80 % de las proteínas totales), que coagula por acción del cuajo o por acidificación para formar la cuajada.',
    },
    {
      termino: 'Cheddarización',
      significado:
        'Proceso específico en la elaboración del queso <em>cheddar</em> que consiste en apilar bloques de cuajada y voltearlos periódicamente para desarrollar textura y sabor.',
    },
    {
      termino: 'Coagulación',
      significado:
        'Transformación de la leche líquida en un coágulo semisólido mediante la acción de enzimas (cuajo) o ácidos.',
    },
    {
      termino: 'Crioscopia',
      significado:
        'Prueba que mide el punto de congelación de la leche; valores superiores a -0,530 °C indican adulteración con agua.',
    },
    {
      termino: 'Cuajo',
      significado:
        'Enzima (renina) que coagula la caseína; puede ser de origen animal, microbiano o vegetal.',
    },
    {
      termino: 'Cultivos lácticos',
      significado:
        'Bacterias seleccionadas (mesófilas o termófilas) que se añaden a la leche para acidificarla y desarrollar sabor y textura.',
    },
    {
      termino: 'Desuerado',
      significado:
        'Separación del suero de la cuajada durante la elaboración del queso, mediante agitación, calentamiento y prensado.',
    },
    {
      termino: 'Estandarización',
      significado:
        'Ajuste de la composición de la leche (principalmente la relación grasa/proteína) para obtener un queso con las características deseadas.',
    },
    {
      termino: 'Extracto seco',
      significado:
        'El residuo que queda después de eliminar el agua de la leche o del queso; incluye grasa, proteínas, lactosa y minerales.',
    },
    {
      termino: 'Maduración',
      significado:
        'Proceso controlado de transformación del queso mediante enzimas y microorganismos, que desarrolla sus características organolépticas.',
    },
    {
      termino: 'Mastitis',
      significado:
        'Inflamación de la glándula mamaria de la vaca, que altera la composición de la leche y aumenta el recuento de células somáticas.',
    },
    {
      termino: 'Pasta hilada',
      significado:
        'Tipo de queso que se elabora calentando y amasando la cuajada hasta obtener una masa elástica y brillante (ej. mozzarella, quesillo).',
    },
    {
      termino: 'Pasteurización',
      significado:
        'Tratamiento térmico que destruye los microorganismos patógenos y reduce la carga microbiana sin alterar significativamente las propiedades del alimento.',
    },
    {
      termino: 'Prueba de alcohol',
      significado:
        'Prueba rápida que detecta la estabilidad de la leche al calor; la coagulación indica acidez elevada.',
    },
    {
      termino: 'Prueba de reductasa',
      significado:
        'Prueba que estima la carga bacteriana de la leche mediante el tiempo de decoloración del azul de metileno.',
    },
    {
      termino: 'Queso',
      significado:
        'Producto obtenido por coagulación de la leche, separación del suero y, en muchos casos, maduración.',
    },
    {
      termino: 'Salmuera',
      significado:
        'Solución saturada de sal (aproximadamente 23 %) utilizada para el salado de quesos.',
    },
    {
      termino: 'Sinéresis',
      significado:
        'Separación del suero en productos fermentados (como el yogur), defecto textural no deseado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cámara de Comercio de Bogotá. (2015). <em>Manual de lácteos</em>. Bogotá: CCB.',
      link: 'https://www.ccb.org.co/',
    },
    {
      referencia:
        'Colombia. Ministerio de Salud y Protección Social. (2006). Decreto 616 de 2006. Por el cual se expide el reglamento técnico sobre los requisitos que debe cumplir la leche para el consumo humano.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=21980',
    },
    {
      referencia:
        'Colombia. Ministerio de Salud y Protección Social. (2013). Resolución 2674 de 2013. Por la cual se reglamenta el artículo 126 del Decreto-ley 019 de 2012 y se dictan otras disposiciones.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-2674-de-2013.pdf',
    },
    {
      referencia:
        'Colombia. Ministerio de Salud. (1986). Resolución 2310 de 1986. Por la cual se reglamenta parcialmente el Título V de la Ley 09 de 1979, en lo referente a procesamiento, composición, requisitos, transporte y comercialización de los derivados lácteos.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/OT/Resolucion-2310-de-1986.pdf',
    },
    {
      referencia:
        'Francis, P., & Gaona, H. (2008). <em>Introducción a la lactología</em> (2.ª ed.). México: Limusa.',
      link: 'https://www.limusa.com.mx/',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2018). <em>NTC 1578: Leche cruda</em>. Bogotá: ICONTEC.',
      link: 'https://www.icontec.org/',
    },
    {
      referencia:
        'Meyer, M. R. (2014). <em>Elaboración de productos lácteos</em> (4.ª ed.). México: Trillas.',
      link: '',
    },
    {
      referencia:
        'Pardo, V. M. E., Almanza, G. F., Acero, D. L. E., Rodríguez, M. L., Bernal, H. Y., & Durán, L. A. (2005). <em>Guía de procesos para la elaboración de productos lácteos</em>. Bogotá: Convenio Andrés Bello.',
      link: 'https://books.google.com.co/books?id=9J6vfzzOUpYC',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2018). <em>Materiales RAP1 y RAP2: Composición y características de la leche, clases de queso y proceso de elaboración</em>. Bogotá: SENA.',
      link: 'https://repositorio.sena.edu.co/',
    },
    {
      referencia:
        'Universidad Nacional Abierta y a Distancia. (2014). <em>Tecnología de los quesos colombianos</em>.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yina Paola Castro Zarate',
          cargo: 'Experto Temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jesus Antonio Vecino Valero',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
