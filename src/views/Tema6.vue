<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 6
      h1 Diagrama de despliegue

    .contenedor.fcp20.pt-5.mb-5
      .row
        .col-lg-6
          p Los diagramas de despliegue hacen parte de los tipos de diagrama propuestos por UML y su objetivo es la representación de la arquitectura del sistema en términos de 
            em hardware 
            | y 
            em software 
            | físico y los medios por los cuales se conectan. Este tipo de diagrama es muy útil para el proceso de despliegue del sistema.
          .cajon.color-acento-contenido.p-4
            p.mb-0 Los diagramas de despliegue utilizan un conjunto de elementos gráficos que tienen una representación y significado estandarizado. A continuación, se detalla cada uno de ellos:
        .col-lg-6(data-aos='fade-left')
          SlyderC(:datos="datosSlyder")

    p A continuación, se detalla cada uno de ellos:
    TabsA.color-acento-contenido.mb-5
      .tarjeta.tarjeta--gris.p-4(titulo="Nodos")
        .row.align-items-center
          .col-lg-8
            h4 Nodos
            p Representa un elemento que puede ser 
              em hardware 
              | o 
              em software 
              | y se representa por un cubo.
          .col-lg-4
            figure
              img(src='@/assets/curso/t6/f6.svg')
      .tarjeta.tarjeta--gris.p-4(titulo="Artefactos")
        .row.align-items-center
          .col-lg-8
            h4 Artefactos
            p Representan elementos concretos generados en el proceso de desarrollo, como por ejemplo bibliotecas, archivos, etc. 
          .col-lg-4
            figure
              img(src='@/assets/curso/t6/f7.svg')
      .tarjeta.tarjeta--gris.p-4(titulo="Asociación de comunicación")
        .row.align-items-center
          .col-lg-8
            h4 Asociación de comunicación
            p Representa el camino de comunicación entre los nodos y se representa por una línea continua uniendo los nodos en cuestión.
          .col-lg-4
            figure
              img(src='@/assets/curso/t6/f8.svg')
      .tarjeta.tarjeta--gris.p-4(titulo="Dispositivos")
        .row.align-items-center
          .col-lg-7
            h4 Dispositivos
            p Es un tipo especial de nodo que representa un recurso computacional del sistema como por ejemplo un servidor.
          .col-lg-5
            figure
              img(src='@/assets/curso/t6/f9.svg')
      .tarjeta.tarjeta--gris.p-4(titulo="Especificaciones de despliegue")
        .row.align-items-center
          .col-lg-6
            h4 Especificaciones de despliegue
            p Representan configuraciones que se deben tener en cuenta para desplegar un artefacto en un nodo.
          .col-lg-6
            figure
              img(src='@/assets/curso/t6/f10.svg')

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/t6/f1.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/t6/f2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/t6/f3.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/t6/f4.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/t6/f5.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
