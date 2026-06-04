<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Equipos y materiales de proceso

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema4/img_1.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 La transformación de la leche en derivados requiere de equipos e implementos que aseguren la eficiencia del proceso, la calidad higiénica y la consistencia del producto final. A continuación, se describen los principales equipos utilizados en plantas procesadoras de lácteos, desde pequeña escala hasta nivel industrial.

    LineaTiempoD.color-secundario-10.mb-5
      .row.justify-content-center.align-items-center(numero="1" titulo="Pasteurizador de placas")
        .col-12.col-lg-12.mb-md-0
          .cajon.color-primario.p-4.mb-4
            p.mb-0 #[strong Función principal:] calentar la leche a temperaturas controladas para eliminar microorganismos patógenos y reducir la carga microbiana (pasteurización), manteniendo al máximo las propiedades nutricionales y organolépticas.
          p.mb-5 #[strong Principio de funcionamiento:] utiliza un conjunto de placas de acero inoxidable corrugadas que forman canales por donde circulan la leche y el agua caliente (o vapor) en direcciones opuestas, permitiendo un intercambio de calor eficiente. el sistema incluye secciones de calentamiento, retención (tubo o placa de retención) y enfriamiento.
          .row.justify-content-center.align-items-center.mb-4
            .col-12.col-lg-8.order-2.order-lg-1.mb-0
              .tarjeta.color-acento-contenido-5.p-4.rounded-3.mb-5
                p.mb-4 Tipos según el proceso:
                ul.lista-ul.lista-ul--check.mb-0
                  li
                    i.lista-ul__vineta-check.mb-2
                    span
                      strong
                        | HTST (
                        em High Temperature Short Time
                        | ):
                      |  72 – 75 °C durante 15 – 20 segundos. Es el más común para leche de consumo y quesería.

                  li.mb-0
                    i.lista-ul__vineta-check.mb-2
                    span
                      strong
                        | UHT (
                        em Ultra High Temperature
                        | ):
                      |  135 – 150 °C durante 1 – 4 segundos. Produce leche estable a temperatura ambiente.
                br
              br
              .row.justify-content-center.align-items-stretch.mb-0
                .col-12.col-lg-6.mb-5.mb-lg-0.pt-4.d-flex
                  .tarjeta-icono-top.color-secundario-10.h-100
                    .tarjeta-icono-top__icono
                      figure
                        img(src='@/assets/curso/tema4/img_2.svg' alt='')
                    p.mb-0  #[strong Componentes:] placas, juntas, bomba centrífuga, tanque pulmón, inyector de vapor, válvula modulante, sistema de control de temperatura y tiempo.
                .col-12.col-lg-6.mb-5.mb-lg-0.pt-4.d-flex
                  .tarjeta-icono-top.color-secundario-10.h-100
                    .tarjeta-icono-top__icono
                      figure
                        img(src='@/assets/curso/tema4/img_3.svg' alt='')
                    p.mb-0  #[strong Mantenimiento:] limpieza CIP (<em>Cleaning In Place</em>) diaria con detergentes alcalinos y ácidos; inspección periódica de juntas y placas; calibración de sensores de temperatura.
            .col-12.col-md-10.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema4/img_4.png', class="img-fluid")

          p.mb-5 #[strong Capacidades:] desde 100 L / h hasta 20.000 L / h o más.
            
      .row.justify-content-center.align-items-center(numero="2" titulo="Pasteurizador tipo túnel o de inmersión (para pequeña escala)")
        .col-12.col-lg-12.mb-md-0
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-8.order-2.order-lg-1.mb-0
              .cajon.color-primario.p-4.mb-4
                p.mb-0 #[strong Descripción:] equipo más simple, consiste en un tanque de acero inoxidable con doble chaqueta de calentamiento (baño maría) y sistema de agitación. Se utiliza en plantas artesanales.
              p.mb-4 #[strong Funcionamiento:] la leche se calienta a 63 – 65 °C durante 30 minutos (pasteurización lenta) con agitación constante.
              .tarjeta.color-acento-contenido-5.p-4.rounded-3.mb-5
                p.mb-0 #[strong Ventajas:] bajo costo, fácil operación. Desventaja: menor productividad.
            .col-12.col-md-10.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema4/img_5.png', class="img-fluid")
      .row.justify-content-center.align-items-center(numero="3" titulo="Desueradora manual (o batea de desuerado)")
        .col-12.col-lg-12.mb-md-0
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-8.order-2.order-lg-1.mb-0
              .cajon.color-primario.p-4.mb-4
                p.mb-0 #[strong Función:] separar el suero de la cuajada después del corte y realizar el pre prensado.
              p.mb-4 #[strong Descripción:] es una batea de acero inoxidable con fondo plano, provista de dos descargas de suero en los extremos. Incluye pantallas de cierre móviles en chapa perforada que permiten retener la cuajada mientras el suero drena. También cuenta con puentes de prensado que se desplazan por rieles laterales, con cilindros neumáticos o mecánicos.
              .tarjeta.color-acento-contenido-5.p-4.rounded-3.mb-0
                p.mb-0 #[strong Uso:] se coloca la cuajada cortada sobre las pantallas, se deja drenar el suero por gravedad, luego se aplica presión con los puentes para acelerar el desuerado. Es ideal para quesos frescos y semi-madurados.
            .col-12.col-md-10.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema4/img_6.png', class="img-fluid")
      .row.justify-content-center.align-items-center(numero="4" titulo="Prensa quesera")
        .col-12.col-lg-12.mb-md-0
          .cajon.color-primario.p-4.mb-4
            p.mb-0 #[strong Función:] aplicar presión controlada a la cuajada dentro de los moldes para extraer el suero residual y compactar la masa, dando forma definitiva al queso.
          p.mb-5 #[strong Tipos: manual (husillo):] se acciona mediante una palanca o volante que presiona un pistón. Adecuada para pequeña producción.
          .row.justify-content-center.align-items-center.mb-4
            .col-12.col-lg-8.order-2.order-lg-1.mb-0
              .tarjeta.color-acento-contenido-5.p-4.rounded-3.mb-5
                ul.lista-ul.lista-ul--check.mb-0
                  li
                    i.lista-ul__vineta-check.mb-2
                    span #[strong Neumática:] utiliza aire comprimido para ejercer presión constante. Permite programar presión y tiempo.
                  li.mb-0
                    i.lista-ul__vineta-check.mb-2
                    span #[strong Hidráulica:] mayor capacidad, con cilindros hidráulicos; se usa en plantas industriales. 
              br
              br
              .row.justify-content-center.align-items-stretch.mb-0
                .col-12.col-lg-6.mb-5.mb-lg-0.pt-4.d-flex
                  .tarjeta-icono-top.color-secundario-10.h-100
                    .tarjeta-icono-top__icono
                      figure
                        img(src='@/assets/curso/tema4/img_2.svg' alt='')
                    p.mb-0  #[strong Parámetros:] la presión varía según el tipo de queso: quesos blandos (0,5 – 1 kg/cm²), quesos semiduros (1–2 kg/cm²), quesos duros (2–5 kg/cm²). El tiempo de prensado puede ser desde 30 minutos hasta 20 horas.
                .col-12.col-lg-6.mb-5.mb-lg-0.pt-4.d-flex
                  .tarjeta-icono-top.color-secundario-10.h-100
                    .tarjeta-icono-top__icono
                      figure
                        img(src='@/assets/curso/tema4/img_3.svg' alt='')
                    p.mb-0  #[strong Mantenimiento:] limpieza de moldes y telas después de cada uso; revisión de juntas y pistones; lubricación de partes móviles.
            .col-12.col-md-10.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema4/img_7.png', class="img-fluid")
      .row.justify-content-center.align-items-center(numero="5" titulo="Tina quesera")
        .col-12.col-lg-12.mb-md-0
          .cajon.color-primario.p-4.mb-4
            p.mb-0 #[strong Función:] recipiente donde se realizan las etapas de coagulación, corte de la cuajada, agitación, cocción (desuerado) y a veces salado.
          .row.justify-content-center.align-items-center.mb-4
            .col-12.col-lg-8.order-2.order-lg-1.mb-0
              .tarjeta.color-acento-contenido-5.p-4.rounded-3.mb-5
                p.mb-4 Características: 
                ul.lista-ul.lista-ul--check.mb-0
                  li
                    i.lista-ul__vineta-check.mb-2
                    span Fabricada en acero inoxidable AISI 304 o 316.
                  li
                    i.lista-ul__vineta-check.mb-2
                    span Puede tener doble chaqueta para calentamiento con agua caliente o vapor.
                  li
                    i.lista-ul__vineta-check.mb-2
                    span Cuenta con agitador (palas o rastrillos) de velocidad variable.
                  li.mb-0
                    i.lista-ul__vineta-check.mb-2
                    span Capacidades desde 50 L hasta 10.000 L. 
              br
              br
              .row.justify-content-center.align-items-stretch.mb-0
                .col-12.col-lg-6.mb-5.mb-lg-0.pt-4.d-flex
                  .tarjeta-icono-top.color-secundario-10.h-100
                    .tarjeta-icono-top__icono
                      figure
                        img(src='@/assets/curso/tema4/img_2.svg' alt='')
                    p.mb-0  #[strong Tipos:] tina abierta (para quesos artesanales) o cerrada con sistema de aspersión (para procesos automatizados).
                .col-12.col-lg-6.mb-5.mb-lg-0.pt-4.d-flex
                  .tarjeta-icono-top.color-secundario-10.h-100
                    .tarjeta-icono-top__icono
                      figure
                        img(src='@/assets/curso/tema4/img_3.svg' alt='')
                    p.mb-0  #[strong Mantenimiento:] limpieza CIP; verificación de agitadores y sellos; calibración de termómetros.
            .col-12.col-md-10.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema4/img_8.png', class="img-fluid")
      .row.justify-content-center.align-items-center(numero="6" titulo="Descremadora o centrífuga")
        .col-12.col-lg-12.mb-md-0
          .cajon.color-primario.p-4.mb-4
            p.mb-0 #[strong Función:] separar la nata (crema) de la leche entera por fuerza centrífuga. Permite obtener leche descremada y crema con diferentes contenidos de grasa.
          p.mb-5 #[strong Principio:] la leche se introduce en un tambor que gira a alta velocidad (6000 – 10000 rpm). La crema, al ser menos densa, se concentra en el centro y es descargada por una salida, mientras que la leche descremada sale por otra.
          .row.justify-content-center.align-items-center.mb-4
            .col-12.col-lg-8.order-2.order-lg-1.mb-0
              .tarjeta.color-acento-contenido-5.p-4.rounded-3.mb-5
                ul.lista-ul.lista-ul--check.mb-0
                  li
                    i.lista-ul__vineta-check.mb-2
                    span #[strong Capacidades:] desde 100 L / h (descremadoras manuales) hasta 20.000 L/h (industriales).
              br
              .row.justify-content-center.align-items-stretch.mb-0
                .col-12.col-lg-6.mb-5.mb-lg-0.pt-4.d-flex
                  .tarjeta-icono-top.color-secundario-10.h-100
                    .tarjeta-icono-top__icono
                      figure
                        img(src='@/assets/curso/tema4/img_2.svg' alt='')
                    p.mb-0  #[strong Aplicaciones:] estandarización de grasa para quesos, obtención de crema para mantequilla o leche descremada.
                .col-12.col-lg-6.mb-5.mb-lg-0.pt-4.d-flex
                  .tarjeta-icono-top.color-secundario-10.h-100
                    .tarjeta-icono-top__icono
                      figure
                        img(src='@/assets/curso/tema4/img_3.svg' alt='')
                    p.mb-0  #[strong Mantenimiento:] limpieza inmediata después de cada uso para evitar incrustaciones; desmontaje y lubricación de rodamientos según especificaciones.
            .col-12.col-md-10.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema4/img_9_1.png', class="img-fluid")
       
      .row.justify-content-center.align-items-center(numero="7" titulo="Mantequillera (batidora de mantequilla)")
        .col-12.col-lg-12.mb-md-0
          .cajon.color-primario.p-4.mb-4
            p.mb-0 #[strong Función:] transformar la crema en mantequilla mediante batido, que rompe los glóbulos de grasa y los aglutina, separando el suero de mantequilla (suero de leche).
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-8.order-2.order-lg-1.mb-0
              .tarjeta.color-acento-contenido-5.p-4.rounded-3.mb-5
                p.mb-4 Tipos:
                ul.lista-ul.lista-ul--check.mb-0
                  li
                    i.lista-ul__vineta-check.mb-2
                    span #[strong Manual:] tambor giratorio con paletas, usado en pequeña escala.
                  li.mb-0
                    i.lista-ul__vineta-check.mb-2
                    span #[strong Eléctrica:] con motor y sistema de agitación; permite controlar temperatura y velocidad.
                  li.mb-0
                    i.lista-ul__vineta-check.mb-2
                    span #[strong Industrial:] grandes volúmenes, con sistema de lavado y amasado.
              .tarjeta.color-acento-contenido-5.p-4.rounded-3.mb-5
                p.mb-0 #[strong Proceso:] la crema se bate a temperatura controlada (8–12 °C) hasta que se forman gránulos de mantequilla; luego se lava con agua fría para eliminar suero residual y se amasa para darle textura.
            .col-12.col-md-10.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema4/img_9.png', class="img-fluid")
          p.mb-0 #[strong Capacidades:] desde 5 L hasta 1000 L.
      .row.justify-content-center.align-items-center(numero="8" titulo="Homogeneizador")
        .col-12.col-lg-12.mb-md-0
          .cajon.color-primario.p-4.mb-4
            p.mb-0 #[strong Función:] reducir el tamaño de los glóbulos de grasa mediante presión, para evitar la separación de la crema (formación de nata) y mejorar la estabilidad y textura de la leche, yogur y otros derivados.
          .row.justify-content-center.align-items-center.mb-4
            .col-12.col-lg-8.order-2.order-lg-1.mb-0
              p.mb-5 #[strong Principio:] la leche se bombea a alta presión (150–250 bar) a través de una válvula de homogeneización, donde los glóbulos se rompen en partículas mucho más pequeñas.
              br
              br
              .row.justify-content-center.align-items-stretch.mb-0
                .col-12.col-lg-6.mb-5.mb-lg-0.pt-4.d-flex
                  .tarjeta-icono-top.color-secundario-10.h-100
                    .tarjeta-icono-top__icono
                      figure
                        img(src='@/assets/curso/tema4/img_2.svg' alt='')
                    p.mb-0  #[strong Aplicaciones:] leche pasteurizada homogeneizada, yogur, crema, quesos fundidos.
                .col-12.col-lg-6.mb-5.mb-lg-0.pt-4.d-flex
                  .tarjeta-icono-top.color-secundario-10.h-100
                    .tarjeta-icono-top__icono
                      figure
                        img(src='@/assets/curso/tema4/img_3.svg' alt='')
                    p.mb-0  #[strong Mantenimiento:] limpieza CIP; revisión de asientos de válvulas y pistones; calibración de presión.
            .col-12.col-md-10.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema4/img_10.png', class="img-fluid")
      
    .bg_img_6.mb-0
    
      p.mb-5(data-aos="flip-left") Durante el proceso de elaboración de queso, además de los equipos principales, se requieren accesorios que facilitan las operaciones de corte, moldeado, drenado y manipulación, garantizando condiciones adecuadas de higiene y calidad del producto final.
      
      .row.justify-content-center.align-items-center.mb-5 
        .col-12.col-lg-6.col-xl-4.mb-3.mb-lg-0(data-aos="flip-left")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/tema4/img_12.png', class="img-fluid")
        .col-12.col-lg-12.col-xl-8
          .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta--color-white.h-100
                .tarjeta--09
                h5.text-center.mb-3 Lira (arpa de corte)
                p.mb-3 Marco con alambres tensados de acero inoxidable para cortar la cuajada en cubos o granos uniformes. Existen manuales y automáticas.
              .tarjeta--color-white.h-100
                .tarjeta--10
                h5.text-center.mb-3 Moldes
                p.mb-3 Estructuras de acero inoxidable o polipropileno, con orificios para drenaje, de diversas formas. Pueden forrarse con lienzo.
              .tarjeta--color-white.h-100
                .tarjeta--11
                h5.text-center.mb-3 Lienzos (muselina)
                p.mb-3 Telas de algodón de trama abierta, resistentes al calor y lavables, para recubrir moldes, transportar cuajada y desuerar.
              .tarjeta--color-white.h-100
                .tarjeta--12
                h5.text-center.mb-3 Bombas de trasvase
                p.mb-3 Bombas sanitarias centrífugas o de lóbulos para mover leche, suero o productos sin contaminación.
              .tarjeta--color-white.h-100
                .tarjeta--13
                h5.text-center.mb-3 Agitadores
                p.mb-3 Palas manuales o mecánicas para remover durante calentamiento y homogeneizar aditivos.
              .tarjeta--color-white.h-100
                .tarjeta--14
                h5.text-center.mb-3 Baldes y jarras graduadas
                p.mb-3 Acero inoxidable, para medir y adicionar líquidos.
              .tarjeta--color-white.h-100
                .tarjeta--15
                h5.text-center.mb-3 Mesa de trabajo
                p.mb-3 Superficie de acero inoxidable para moldeado y salado.
              .tarjeta--color-white.h-100
                .tarjeta--16
                h5.text-center.mb-3 Anaqueles de maduración
                p.mb-3 Armarios con malla fina (angeo) para secado y maduración, con control de temperatura y humedad.
                   
      br
      br
</template>

<script>
export default {
  name: 'Tema4',
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
