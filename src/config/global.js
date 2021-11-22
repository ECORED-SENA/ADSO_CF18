export default {
  global: {
    componenteFormativo: 'Diseño de patrones de <em>software</em>',
    descripcionCurso:
      'Con el estudio de este componente, el aprendiz estará en capacidad de conceptualizar, interpretar y aplicar diseños de patrones de <em>software</em>. Así mismo, se afianzará en lo referente a patrones comportamentales, creacionales, estructurales, vistas estáticas, diagramas de despliegue y de componentes, todo ello en el marco general de análisis y desarrollo de <em>software</em>.',
    imagenBannerPrincipal: require('@/assets/curso/banner-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner-bg.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos sobre patrones de diseño',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Patrones comportamentales',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Patrones creacionales',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Patrones estructurales',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Vistas estáticas',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Diagrama de despliegue',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Diagrama de componentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Síntesis',
            hash: 't_7_1',
          },
        ],
      },
    ],
    subMenu: [
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Creately (2021, enero 15). La Guía Fácil de los Diagramas de Despliegue UML. [<em>Web log post</em>]. Blogspot.',
      link:
        'https://creately.com/blog/es/diagramas/tutorial-de-diagrama-de-despliegue/',
    },
    {
      referencia:
        'DiagramasUML (2013, diciembre 8). Diagrama de componentes [<em>Web log post</em>]. Blogspot.',
      link: 'https://diagramasuml.com/componentes/ ',
    },
    {
      referencia: 'EcuRed (2021). Patrones Gof. ECURED.',
      link: 'https://www.ecured.cu/Patrones_Gof',
    },
    {
      referencia:
        'Escuela especializada en ingeniería (2021). Diagramas UML estáticos. ITCA-FEPADE.',
      link:
        'https://virtual.itca.edu.sv/Mediadores/ads/222_diagramas_uml_estticos.html ',
    },
    {
      referencia:
        'Gamma, E., Helm, R., Johnson, R., Vlissides, J., & Booch, G. (1994). <em>Design Patterns: Elements of Reusable Object-Oriented Software</em>. Addison-Wesley <em>Professional</em>.',
    },
    {
      referencia:
        'Landa, N. (2018). Patrones de Diseño de <em>Software</em> [Video]. YouTube.',
      link:
        'https://www.youtube.com/playlist?list=PLM-p96nOrGcbqbL_A29b0z3KUXdq2_fpn ',
    },
  ],
  glosario: [
    {
      termino: 'Patrones GOF',
      significado:
        'Los patrones GOF, se trata de los patrones de diseño y se denominan de esa manera por el libro <em>Desing patterns elements of reusable software</em>, de cuatro autores que descubrieron la manera fundamental de adentrarse en el mundo de la programación. GOF es la sigla de “<em>The Gang of four</em>”, que significa la pandilla de los cuatro.',
    },
    {
      termino: '<em>Software</em>',
      significado:
        'Se trata del compendio de rutinas o de programas que favorecen a los dispositivos el cumplimiento y ejecución de determinadas tareas, funciones o aplicaciones.',
    },
    {
      termino: 'UML',
      significado:
        'Lenguaje unificado de modelado. Relaciona un conjunto de diagramas estandarizados para la representación de sistemas de información desde diferentes tipos de vista.',
    },
  ],
  complementario: [
    {
      texto:
        'Leiva, A. (2020). Patrones de diseño <em>software</em>: Repaso completo en 10 minutos. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/6BHOeDL8vls',
    },
    {
      texto:
        'Nicosiored. (2018). Diagrama de Despliegue - 22 - Tutorial UML en español. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/NSB0ATJUavA',
    },
    {
      texto:
        'Nicosiored. (2018). Diagrama de Componentes I - 20- Tutorial UML en español. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/oOycG_n1ARs',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jonathan Guerrero Astaiza',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro: 'Centro agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Sandra Carolina Durán López',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Arnulfo Beltrán Mojica',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
