<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 4
      h1 Patrones estructurales

    p Los patrones estructurales proveen una orientación relacionada a la forma de definir los componentes de los objetos. Dentro de los patrones estructurales se encuentran:

    #Patrones.row.justify-content-center.fcp.mb-5.p-0
      img(src='@/assets/curso/t4/f1.jpg' alt='imagen relacionada' data-aos='flip-up').mb-5
      .col-lg-4.tarjeta.tarjeta--blanca.mx-2.mb-5(data-aos='fade-right')
        a.indicador__container(@click="goToElement('Fachada')" @mouseover="mostrarIndicador = false")
          .p-4.text-center
            p 
              b El patrón Fachada: 
              | utilizado cuando el sistema está compuesto por varios subsistemas.
          .indicador--click(v-if="mostrarIndicador")
      .col-lg-4.tarjeta.tarjeta--blanca.mx-2.mb-5(data-aos='fade-left')
        a.indicador__container(@click="goToElement('Delegate')" @mouseover="mostrarIndicador = false")
          .p-4.text-center
            p 
              b El patrón 
                em Delegate: 
              | usado cuando se quiere reutilizar y extender funcionalidades de una clase, sin hacer uso de la herencia.
          .indicador--click(v-if="mostrarIndicador")
   
    #Fachada.pRelative
      .backtoTop
        a.indicador__container(@click="goToElement('Patrones')" @mouseover="mostrarIndicador = false")
          img(src='@/assets/curso/flechitaCAC.svg' alt='Volver arriba')
          .indicador--click(v-if="mostrarIndicador")
      .row.mb-5
        .col-lg-6.mb-4
          h3 Fachada
          p El patrón fachada se utiliza cuando el sistema está compuesto por varios subsistemas y se hace complejo gestionar los mensajes que debe realizar el cliente en cada uno de estos subsistemas. Este patrón permite generar al cliente una vista de alto nivel que simplifica el control y el envío de mensajes a los subsistemas, ocultando los detalles relacionados con la gestión de las clases e instancias.
          p Existen diferentes variaciones del patrón fachada:
          LineaTiempoD.color-primario
            div(numero='1' titulo='Opaco')
              p Una de las variaciones más utilizadas y en la cual los clientes no pueden acceder a los subsistemas solo se puede hacer mediante el objeto fachada.
            div(numero='2' titulo='Transparente')
              p El cliente tiene la posibilidad de acceder a los subsistemas por medio de la fachada, pero también puede hacerlo de forma directa.
            div(numero='3' titulo='Estática')
              p En esta variación la fachada se implementa como una clase estática, por lo cual, no se hace necesaria la instancia de un objeto concreto de la fachada. Landa. (2018).
        .col-lg-6.order-first.order-lg-last.mb-4
          figure
            img(src='@/assets/curso/t4/f2.svg' alt='imagen relacionada')
      .row.mb-5
        .col-lg-6
          figure
            img(src='@/assets/curso/t4/f3.jpg')
        .col-lg-6
          p 
            b En este patrón se reconocen tres partes fundamentales. Landa, (2018):
          .p-4.fcac20
            p 
              b Fachada: 
              | clase que provee las operaciones de alto nivel que serán usadas por el cliente.
            p 
              b Subsistemas: 
              | clases que proveen las funcionalidades que son expuestas por la fachada.
            p.mb-0 
              b Cliente: 
              | hace uso de las operaciones de alto nivel por medio de la fachada.
      p En la figura 1 se pueden ver cada uno de los componentes del patrón.

      .contenedor.bgDegradado.py-5.mb-5
        .col-lg-10.mx-auto
          .titulo-sexto.color-acento-contenido
            h6 Figura 1
            span Diagrama patrón fachada
          img(src='@/assets/curso/t4/f4.svg' alt='Diagrama patrón fachada')
      
      .row.mb-5
        .col-lg-6
          p A continuación, se muestra una implementación en código Java de cada uno de los elementos requeridos para la implementación del patrón fachada en un ejemplo sencillo. En este ejemplo el cliente quiere realizar una compra, pero este proceso involucra acciones por parte de tres diferentes subsistemas: subsistema de compras que verifica la viabilidad de la tarjeta para el pago, el subsistema de inventario que verifica si hay productos en 
            em stock 
            | y el subsistema de envíos. 
          .cajon.color-acento-contenido.p-4
            p.mb-0 Para disminuir la complejidad, de la cual no debería ocuparse el cliente, se creará una fachada que encapsula las acciones de todos los subsistemas involucrados y provee una interfaz simple con la que el cliente podrá interactuar más fácilmente.
        .col-lg-6.order-first.order-lg-last 
          figure
            img(src='@/assets/curso/t4/f5.jpg' alt='Diagrama patrón fachada')

      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
        div(titulo="Clase que representa el subsistema de compras")
          .code
            code public class GestorCompra {<br>&emsp; private Scanner in = new Scanner(System.in);<br>&emsp; <br>&emsp; public boolean comprar(){<br>&emsp;&emsp; int numero;<br>&emsp;&emsp; System.out.println("Ingrese el número de tarjeta para realizar el pago");<br>&emsp;&emsp; número = in.nextInt();<br>&emsp;&emsp; if(numero == 4567){<br>&emsp;&emsp;&emsp; System.out.println("Procesando la compra");<br>&emsp;&emsp;&emsp; System.out.println("--------------------");<br>&emsp;&emsp;&emsp; System.out.println("Pago aceptado");<br>&emsp;&emsp;&emsp; return true;<br>&emsp;&emsp; }else{<br>&emsp;&emsp;&emsp; System.out.println("Pago rechazado");<br>&emsp;&emsp;&emsp; return false;<br>&emsp;&emsp; }<br>&emsp; }<br> }
        div(titulo="Clase que representa el subsistema de inventario")
          .code
            code public class GestorInventario {<br>&emsp; private int stock;<br> <br>&emsp; public GestorInventario() {<br>&emsp;&emsp; this.stock = 2;<br>&emsp; }<br>&emsp; <br>&emsp; public boolean retirarStock(){<br>&emsp;&emsp; if(stock > 0){<br>&emsp;&emsp;&emsp; System.out.println("Producto listo para envío");<br>&emsp;&emsp;&emsp; stock--;<br>&emsp;&emsp;&emsp; return true;<br>&emsp;&emsp; }else{<br>&emsp;&emsp;&emsp; System.out.println("Producto no disponible, no hay existencias, entrega reprogramada!");<br>&emsp;&emsp;&emsp; return false;<br>&emsp;&emsp; }<br>&emsp; }&emsp;<br> }
        div(titulo="Clase que representa el subsistema de envíos")
          .code
            code public class GestorEnvio {<br>&emsp;public void enviarPedido(){<br>&emsp;&emsp;System.out.println("Envio autorizado y en camino!");<br>&emsp;}&emsp;<br>}
        div(titulo="Clase que representa la fachada de todos los subsistemas")
          .code
            code public class Fachada {<br>&emsp;//Instancias de los subsistemas que gestiona<br>&emsp; private GestorCompra compra = new GestorCompra();<br>&emsp; private GestorInventario inventario = new GestorInventario();<br>&emsp; private GestorEnvio envio = new GestorEnvio();<br>&emsp; <br>&emsp; //Metodo de alto nivel que se ofrece al cliente<br>&emsp; public void compra(){<br>&emsp;&emsp; if(compra.comprar() && inventario.retirarStock()){<br>&emsp;&emsp;&emsp;  envio.enviarPedido();&emsp;   <br>&emsp;&emsp; }<br>&emsp; }<br> }
        div(titulo="Clase que representa al Cliente")
          .code
            code public class Cliente {<br>&emsp; public static void main(String[] args) {<br>&emsp;&emsp; Fachada fachada = new Fachada();<br>&emsp;&emsp; // Se hace uso de las operaciones de alto nivel<br>&emsp;&emsp; fachada.compra();<br>&emsp;&emsp; fachada.compra();<br>&emsp;&emsp; fachada.compra();<br>&emsp; }<br> }
      
      .col-lg-10.mx-auto.mb-5
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/manitaDescarga1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Implementación patrón fachada - archivos completos
                  p.text-white Para obtener una copia completa del proyecto, para su verificación, usted puede consultar el repositorio público disponible en:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://gitlab.com/jonathanga/patron-fachada-en-java/-/tree/master" target="_blank")
                    span Ver
                    i.fas.fa-link

    hr 

    #Delegate.pRelative
      .backtoTop
        a.indicador__container(@click="goToElement('Patrones')" @mouseover="mostrarIndicador = false")
          img(src='@/assets/curso/flechitaCAC.svg' alt='Volver arriba')
          .indicador--click(v-if="mostrarIndicador")

      .row.mb-5
        .col-lg-6
          h3 
            em Delegate
          p El patrón 
            em delegate 
            | se usa cuando se quiere reutilizar y extender funcionalidades de una clase sin hacer uso de la herencia. Este patrón permite de cierta forma implementar algo similar a la herencia múltiple que no es admitido por algunos lenguajes de programación, pero adicionalmente permite tener un control más detallado sobre este proceso ya que se puede ocultar parte de los elementos heredados o, incluso, compartir elementos que no son posibles de heredar bajo el mecanismo de herencia tradicional.
          .cajon.color-acento-contenido.p-4
            p.mb-0 Este patrón lo que busca es evitar asumir todas las responsabilidades en una sola instancia y delegar las actividades en otras instancias que son especializadas en resolver dicha tarea.
        .col-lg-6.order-first.order-lg-last
          figure
            img(src='@/assets/curso/t4/f6.svg' alt='imagen relacionada')
      
      p A continuación, se muestra un ejemplo de implementación de este patrón de diseño donde se hace uso del patrón 
        em delegate 
        | para incorporar en una clase concreta, funcionalidades que están definidas en otras clases haciendo uso de interfaces.
      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
        div(titulo="En primer lugar se crean las interfaces que definen el comportamiento a ser reutilizado")
          .code
            code public interface IDisenadora {    <br>&emsp;&emsp;<br>void disenar();<br>}<br><br>public interface ICodificadora {&emsp;&emsp;<br>void codificar();  <br>}
        div(titulo="Se crean clases concretas que implementen este funcionamiento definido en las interfaces")
          .code
            code public class ClaseCodificadora implements ICodificadora{<br>&emsp;&emsp;<br>@Override&emsp;&emsp;<br>public void codificar() {&emsp;&emsp;&emsp;&emsp;<br>System.out.println("Codificación por la clase codificadora");&emsp;&emsp;<br>} <br>}<br><br>public class ClaseDisenadora implements IDisenadora{&emsp;&emsp;<br>@Override&emsp;&emsp;<br>public void disenar() {&emsp;&emsp;&emsp;&emsp;<br>System.out.println("Diseñado por clase Diseñadora");&emsp;&emsp;<br>}  <br>}
        div(titulo="Ahora se crea la clase que va a reutilizar las funcionalidades definidas en las interfaces")
          .code
            code public class Empleado implements ICodificadora,IDisenadora{<br>    &emsp;&emsp;<br>ICodificadora codificador;<br>&emsp;&emsp;<br>IDisenadora disenador;<br>&emsp;&emsp;<br>public Empleado(ICodificadora codificador, IDisenadora disenador) {&emsp;&emsp;&emsp;&emsp;<br>this.codificador = codificador;&emsp;&emsp;&emsp;&emsp;<br>this.disenador = disenador;&emsp;&emsp;<br>}<br>&emsp;&emsp;<br>@Override&emsp;&emsp;<br>public void codificar() {&emsp;&emsp;&emsp;&emsp;<br>codificador.codificar();&emsp;&emsp;<br>}<br>&emsp;&emsp;<br>@Override&emsp;&emsp;<br>public void disenar() {&emsp;&emsp;&emsp;&emsp;<br>disenador.disenar();&emsp;&emsp;<br>}   <br>}
        div(titulo="En este caso la clase principal instancia la clase indicando por parámetro las clases concretas a ser utilizadas para la extensión de los métodos que serán reutilizados")
          .code
            code public class PatronDelegate {<br>&emsp;&emsp;<br>public static void main(String[] args) {&emsp;&emsp;&emsp;&emsp;<br>Empleado objEmpleado = new Empleado(new ClaseCodificadora(),new ClaseDisenadora());&emsp;&emsp;&emsp;&emsp;<br>objEmpleado.codificar();&emsp;&emsp;&emsp;&emsp;<br>objEmpleado.disenar();&emsp;&emsp;<br>}<br>    <br>}
      .row.justify-content-center.mb-5
        .col-12
          img(src='@/assets/curso/t4/f7.jpg' alt='imagen relacionada')
        .col-10.traslapeTop
          .fcp20.p-5
            p.mb-0 Cualquier nueva clase concreta que implemente las interfaces originales podrá ser usada por la clase Empleado para su reutilización, solo indicando en el parámetro del constructor la respectiva instancia que implementa la nueva lógica.
      
      .col-lg-10.mx-auto.mb-5
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/manitaDescarga1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Implementación patrón <em>delegate</em> - archivos completos
                  p.text-white Para obtener una copia completa del proyecto, para su verificación, usted puede consultar el repositorio público disponible en:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://gitlab.com/jonathanga/patron-delegate/-/tree/master" target="_blank")
                    span Ver
                    i.fas.fa-link

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicador: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    goToElement(id) {
      const ele = document.getElementById(id)
      window.scrollTo(ele.offsetLeft, ele.offsetTop + 100)
    },
  },
}
</script>

<style lang="sass"></style>
