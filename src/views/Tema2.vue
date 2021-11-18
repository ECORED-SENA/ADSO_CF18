<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Patrones comportamentales

    .row
      .col-lg-6
        p Los patrones de diseño comportamentales se centran en definir la manera en que los objetos interactúan entre ellos, por medio de mensajes. Son tres los tipos de patrones comportamentales: estrategia, comando e iterador.
        .cajon.color-acento-contenido.p-4
          p.mb-0 Explore el siguiente recurso y conozca los aspectos más relevantes relacionados con patrones comportamentales:
      .col-lg-6.order-first.order-lg-last
        figure
          img(src='@/assets/curso/t2/f1.svg' alt='imagen relacionada')

    #Patrones.contenedor.fcp20
      .py-5
        h3 Patrones comportamentales
        .row.justify-content-center
          .col-md-3
            a(href='/#Estrategia')
              img(src='@/assets/curso/t2/f2.svg' alt='Estrategia')
          .col-md-3
            a(href='/#Comando')
              img(src='@/assets/curso/t2/f3.svg' alt='Comando')
          .col-md-3
            a(href='/#Iterador')
              img(src='@/assets/curso/t2/f4.svg' alt='Iterador')

    #Estrategia.pRelative
      .backtoTop
        a(href='/#Patrones')
          img(src='@/assets/curso/flechitaCAC.svg' alt='Volver arriba')
      h3 Estrategia
      .row.mb-5
        .col-auto(style='font-size:48px')
          i.fas.fa-quote-left.cac
        .col
          .cajon-b.color-primario.p-4
            p El patrón estrategia permite encapsular un conjunto de algoritmos de manera que puedan ser seleccionados, dinámicamente para su ejecución, durante el tiempo de ejecución y de acuerdo con las acciones del cliente. Este patrón es una de las formas en las que se ven reflejadas, fácilmente, las características de la programación orientada a objetos, particularmente en lo referente a encapsulamiento y polimorfismo. 
          .floatRight
            h6 Landa. (2018). 
              i.fas.fa-square.cac 
      .row.align-items-center
        .col-lg-6
          p Este patrón de diseño es útil cuando una misma funcionalidad puede ser provista usando diferentes mecanismos, algoritmos o estrategias, que serán seleccionadas dependiendo de las acciones realizadas por el cliente, en el momento que está ejecutando el programa.
          .cajon.color-acento-contenido.p-4
            p.mb-0 
              b Ejemplo: 
              | suponga que quiere implementar una calculadora, la cual provee un conjunto de operaciones (suma, resta, multiplicación y división) que serán usadas por el cliente según su deseo. Cada una de estas operaciones representan una estrategia diferente y será el cliente quien invocará la ejecución de cada una de ellas dependiendo de su deseo por medio de una interfaz que, usando las propiedades del polimorfismo, se transformará para poder responder a cada solicitud.
        .col-lg-6.order-first.order-lg-last
          figure
            img(src='@/assets/curso/t2/f6.svg' alt='imagen relacionada')
    hr

    #Comando.pRelative
      .backtoTop
        a(href='/#Patrones')
          img(src='@/assets/curso/flechitaCAC.svg' alt='Volver arriba')
      h3 Comando
      p El patrón comando permite aislar los objetos que realizan una petición de los objetos concretos encargados de recibir y realizar dicha acción, esto permite entre otras cosas que las peticiones puedan ser enviadas a varios receptores y si se maneja el estado de las solicitudes controla acciones de tipo Undo y Redo.
      .row.align-items-center
        .col-lg-6
          p El patrón comando necesita la implementación de varios elementos:
          ul.lista-ul
            li
              i.fas.fa-database.cas
              p.mb-0 <b>Comando:</b> clase que sirve de puente entre el cliente y los receptores.
            li
              i.fas.fa-database.cas
              p.mb-0 <em><b>Invoker:</b> </em> elemento usado por los clientes y que le solicita al comando llevar a cabo una acción.
            li
              i.fas.fa-database.cas
              p.mb-0 <b>Cliente:</b> invoca la ejecución de las acciones desde el Invoker.
            li
              i.fas.fa-database.cas
              p.mb-0 <b>IComando:</b> interfaz donde se especifican las operaciones a ejecutar.
            li
              i.fas.fa-database.cas
              p.mb-0 <b>Receptor:</b> clase que realiza la acción.
            li
              i.fas.fa-database.cas
              p.mb-0 <b>Ejecutar:</b> operación que necesita ser llevada a cabo.
          .cajon.color-acento-contenido.p-4
            p.mb-0 
              p.mb-0 <b>Ejemplo:</b> una persona (Cliente) quiere hacer uso del televisor y hace todas las solicitudes de servicios por medio del control remoto (Invoker). El control remoto se comunica con una interfaz encargada de responder solicitudes de cada comando, que el usuario puede hacer como, por ejemplo, prender televisor, apagar televisor, subir volumen, etc. Cada comando realiza una acción particular sobre el televisor (Receptor).
        .col-lg-6.order-first.order-lg-last
          figure
            img(src='@/assets/curso/t2/f7.svg' alt='imagen relacionada')
    hr 

    #iterador.pRelative
      .backtoTop
        a(href='/#Patrones')
          img(src='@/assets/curso/flechitaCAC.svg' alt='Volver arriba')

      h3 Iterador
      p Este patrón de diseño está orientado al trabajo con colecciones y facilita el acceso a todos los elementos de la colección sin tener la necesidad de conocer su estructura.
      .contenedor.border12.fcp.py-5
        .row.mb-4
          .col-lg-3.col-md-6.fblanco.ofVisible(data-aos='flip-left')
            figure
              img(src='@/assets/curso/t2/f8.svg' alt='1' style='width:65px').mx-auto
            .p-4
              p.text-center En este patrón se reconocen los enumeradores y los iteradores. Los enumeradores establecen para conocer el siguiente elemento de la estructura y los iteradores corresponden a un mecanismo para recorrer la estructura, de acuerdo con su secuencia, de inicio a fin.
          .col-lg-3.col-md-6.fblanco.ofVisible(data-aos='flip-left')
            figure
              img(src='@/assets/curso/t2/f9.svg' alt='2' style='width:65px').mx-auto
            .p-4
              p.text-center El enumerado por lo tanto se encarga de implementar un conjunto de métodos estándar para poder establecer la secuencia con la que se debe recorrer la estructura
          .col-lg-3.col-md-6.fblanco.ofVisible(data-aos='flip-left')
            figure
              img(src='@/assets/curso/t2/f10.svg' alt='3' style='width:65px').mx-auto
            .p-4
              p.text-center Los métodos más comunes: 
                b moveNext() 
                | que indica si existe o no un próximo elemento por recorrer. Método 
                b Current() 
                | que devuelve el valor actual de la colección según la posición actual en la secuencia. Método 
                b Reset() 
                | que permite iniciar nuevamente la secuencia a su punto de partida. El iterador necesita del enumerador para poder hacer el proceso de recorrido.
          .col-lg-3.col-md-6.fblanco.ofVisible(data-aos='flip-left')
            figure
              img(src='@/assets/curso/t2/f11.svg' alt='4' style='width:65px').mx-auto
            .p-4
              p.text-center Este tipo de operaciones son tan comunes en los sistemas actuales que los lenguajes de programación ya poseen una implementación propia del patrón iterador.

    img(src='@/assets/curso/t2/f12.svg' alt='imagen relacionada')

</template>

<script>
export default {
  name: 'Tema2',
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
