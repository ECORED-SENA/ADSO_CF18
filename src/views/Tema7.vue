<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 7
      h1 Diagrama de componentes

    p El diagrama de componentes es uno de los diagramas propuestos en UML que representa una vista estática del sistema de información y hace parte de los diagramas estructurales. Este diagrama proporciona una vista de alto nivel de los componentes dentro del sistema y generalmente se construye posterior a la construcción del diagrama de clases.
    img(src='@/assets/curso/t7/f1.jpg' alt='imagen relacionada').mb-4

    .col-lg-10.mx-auto.mb-5
      .p-5.fcp30
        p.mb-0 Le invitamos a ahondar en los aspectos más característicos e importantes de los diagramas de componentes, explorando el recurso que se muestra a continuación:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .contenedor.fcp20.p-5
      h3 Síntesis
      p Hasta este punto, el componente formativo ha favorecido la profundización en los aspectos y generalidades más importantes relativos al diseño de patrones de software. 
      p Para lograr una síntesis general y tener más y mejores herramientas conceptuales y de aplicación, explore el recurso que se sugiere a continuación:
      SlyderF.mb-5(columnas="col-lg-6 col-xl-3")
        .tarjeta.tarjeta--blanca.boxShadow.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/t7/f2.svg' alt='icono relacionado')
          h2.text-center Buenas prácticas
          p.text-center Los patrones de diseño de software son de gran importancia para los desarrolladores; recogen un conjunto de buenas prácticas, abordadas por muchas personas en problemas reales y en contextos muy bien definidos.
        .tarjeta.tarjeta--blanca.boxShadow.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/t7/f3.svg' alt='icono relacionado')
          h2.text-center Categorías de los patrones
          p.text-center Los patrones de diseño por sus características están categorizados en tres grandes grupos: comportamentales, creacionales o estructurales. 
        .tarjeta.tarjeta--blanca.boxShadow.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/t7/f4.svg' alt='icono relacionado')
          h2.text-center Multifuncionalidad
          p.text-center Dependiendo de la forma como se espera que se comporte una funcionalidad o se creen los objetos, incluso, cómo se desea definir su estructura, se puede implementar varios patrones de diseño al mismo tiempo.
        .tarjeta.tarjeta--blanca.boxShadow.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/t7/f5.svg' alt='icono relacionado')
          h2.text-center Amplia implementación
          p.text-center El desarrollo de un proyecto profesional requerirá siempre la implementación de varios patrones de diseño.
        .tarjeta.tarjeta--blanca.boxShadow.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/t7/f6.svg' alt='icono relacionado')
          h2.text-center Innovación permanente
          p.text-center Existen muchos más patrones de diseño desarrollados, adicionales a los tratados en este componente formativo, y a medida que pasa el tiempo seguramente aparecen muchos más.

    p Visite el material complementario para profundizar en la temática.
    
</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
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
