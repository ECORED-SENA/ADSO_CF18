<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Conceptos sobre patrones de diseño

    p.mb-5 El uso de patrones de diseño en el ámbito de la industria de 
      em software
      | , implica el conocimiento y la aplicación de una serie de criterios que aportan calidad al proceso mismo y efectividad del producto logrado. En ese mismo sentido, se favorece la estandarización del código fuente de determinada aplicación, lo cual facilita su monitoreo y mantenimiento.

    .contenedor.fcp20
      .row.align-items-center.justify-content-between.mb-5
        .col-lg-6(data-aos='fade-right')
          figure
            img(src='@/assets/curso/t1/f1.svg' alt='UX')
        .col-lg-5(data-aos='fade-left')
          p Los patrones de diseño tienen las siguientes características:
          SlyderF(columnas="col-12")
            .tarjeta.tarjeta--blanca.boxShadow.p-5
              .row.justify-content-center.mb-3
                .col
                  img(src='@/assets/curso/t1/f2.svg' alt='imagen relacionada' style='width:105px').mx-auto
              p.text-center Representan soluciones concretas que, aunque se representan de forma genérica, son aplicados para resolver problemas reales.
            .tarjeta.tarjeta--blanca.boxShadow.p-5
              .row.justify-content-center.mb-3
                .col
                  img(src='@/assets/curso/t1/f3.svg' alt='imagen relacionada' style='width:105px').mx-auto
              p.text-center Son especificaciones técnicas basadas en los principios de la programación orientada a objetos y dependiendo del lenguaje de programación, la forma de implementarlos puede variar.
            .tarjeta.tarjeta--blanca.boxShadow.p-5
              .row.justify-content-center.mb-3
                .col
                  img(src='@/assets/curso/t1/f4.svg' alt='imagen relacionada' style='width:105px').mx-auto
              p.text-center Son frecuentemente utilizados ya que se construyen a partir de la experiencia acumulada en la industria del desarrollo de 
                em software.
            .tarjeta.tarjeta--blanca.boxShadow.p-5
              .row.justify-content-center.mb-3
                .col
                  img(src='@/assets/curso/t1/f5.svg' alt='imagen relacionada' style='width:105px').mx-auto
              p.text-center Favorecen la implementación de las características de la programación orientada a objetos como la encapsulación, las jerarquías y el polimorfismo.
            .tarjeta.tarjeta--blanca.boxShadow.p-5
              .row.justify-content-center.mb-3
                .col
                  img(src='@/assets/curso/t1/f6.svg' alt='imagen relacionada' style='width:105px').mx-auto
              p.text-center No necesariamente el uso de un patrón implica el uso de palabras claves, reservadas o de librerías especializadas.
            .tarjeta.tarjeta--blanca.boxShadow.p-5
              .row.justify-content-center.mb-3
                .col
                  img(src='@/assets/curso/t1/f7.svg' alt='imagen relacionada' style='width:105px').mx-auto
              p.text-center Los patrones generalmente hacen referencia al uso de interfaces, clases y objetos que deben ser ajustados de acuerdo con la solución concreta a desarrollar.

    .col-lg-10.mx-auto
      .tarjeta.fcs
        img(src='@/assets/curso/comillasCAC.svg' alt='Cita' style='width:65px;margin-top:0' data-aos='flip-left').ms-5.mb-4
        .px-5
          p.texto-blanco Los patrones de diseño de 
            em software 
            | suelen clasificarse en tres grandes grupos según su finalidad: patrones comportamentales, patrones creacionales y patrones estructurales.
          .floatRight
            h6.texto-blanco EcuRed (2021). 
              i.fas.fa-square.cac
          .p-3

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
