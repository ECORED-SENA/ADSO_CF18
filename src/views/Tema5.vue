<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 5
      h1 Vistas estáticas

    .row
      .col-lg-6(data-aos='fade-right')
        figure
          img(src='@/assets/curso/t5/f1.jpg' alt='imagen relacionada')
      .col-lg-6
        p La vista estática está encargada de modelar los conceptos significativos del dominio de la aplicación desde sus propiedades internas y las relaciones existentes. Se denomina vista estática porque no modela el comportamiento del sistema ni muestra las variaciones que se puedan presentar por efecto del tiempo.
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Los elementos fundamentales de la vista estática son las clases que describen los conceptos del dominio del problema y las relaciones que pueden ser de tipo asociación, generalización y de dependencia. Entre los diagramas de UML que se utilizan para representar la vista estática del sistema encontramos (ITCA, 2021):

        .row
          .col-4
            figure(data-aos='flip-right')
              img(src='@/assets/curso/t5/f2.svg' alt='imagen relacionada' style='width:85px').mb-4.mx-auto
            h4.text-center Diagrama de clases
          .col-4
            figure(data-aos='flip-right')
              img(src='@/assets/curso/t5/f3.svg' alt='imagen relacionada' style='width:85px').mb-4.mx-auto
            h4.text-center Diagrama de objetos
          .col-4
            figure(data-aos='flip-right')
              img(src='@/assets/curso/t5/f4.svg' alt='imagen relacionada' style='width:85px').mb-4.mx-auto
            h4.text-center Diagramas de componentes

</template>

<script>
export default {
  name: 'Tema5',
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
