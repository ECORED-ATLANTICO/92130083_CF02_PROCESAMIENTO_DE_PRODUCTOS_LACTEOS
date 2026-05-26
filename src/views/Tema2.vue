<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Calidad e inocuidad de la leche

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema2/img_1.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 Para garantizar que la leche sea apta para el consumo humano y para la elaboración de derivados lácteos, existen normas que establecen criterios de calidad específicos. En este capítulo se presentan las pruebas y parámetros aplicados durante la recepción de la leche, tanto en plantas procesadoras como en centros de acopio.

    p.mb-5(data-aos="zoom-in-right") La correcta ejecución de estas evaluaciones permite identificar y rechazar materias primas que puedan afectar la calidad de productos como el queso o que representen un riesgo para la salud del consumidor.

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.1 Normativa colombiana vigente
    .mb-0 
    
    p.mb-5(data-aos="zoom-in-right") En Colombia, la producción, recolección, transporte y procesamiento de la leche están regulados por un conjunto de normas que establecen los requisitos sanitarios y de calidad que debe cumplir este alimento. Estas disposiciones buscan garantizar la inocuidad del producto, proteger la salud del consumidor y asegurar condiciones adecuadas en toda la cadena productiva.

    br
    br
    br

    .bg_img_4.mb-0 

      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-5.mb-5
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5.mb-5 Decreto 616 de 2006
            p.mb-0 Reglamento técnico que establece los requisitos sanitarios, fisicoquímicos y microbiológicos para la leche cruda, la leche pasteurizada y los productos lácteos, además de definir las condiciones de higiene, procesamiento y etiquetado. Es la norma base que regula la calidad y comercialización de la leche en Colombia.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema2/img_3.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5.mb-5 Resolución 2674 de 2013
            p.mb-0 Norma sanitaria que regula las condiciones bajo las cuales deben realizarse las actividades de fabricación, procesamiento, preparación, almacenamiento, transporte y comercialización de alimentos, estableciendo la obligatoriedad de implementar Buenas Prácticas de Manufactura (BPM) para garantizar la inocuidad alimentaria.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema2/img_4.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5.mb-5 Resolución 412 de 2014
            p.mb-0 Norma que establece el sistema de inspección, vigilancia y control para la leche cruda y los productos lácteos, definiendo los procedimientos de muestreo, análisis y seguimiento en la cadena productiva, con el fin de asegurar el cumplimiento de los estándares de calidad e inocuidad.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema2/img_5.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5.mb-5 Normas Técnicas Colombianas (NTC)
            p.mb-0 Conjunto de normas técnicas que establecen especificaciones y métodos de ensayo para productos lácteos, como la NTC 1578 para leche cruda y la NTC 1579 para leche pasteurizada, proporcionando criterios estandarizados de calidad que complementan la regulación sanitaria vigente.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema2/img_6.png', class="img-fluid")
      
      br
    br
    br

    Separador

    .bg_img_5.mb-0 

      #t_2_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 2.2 Control de calidad (pruebas de plataforma)
      .mb-0 

      p.mb-3(data-aos="zoom-in-right") En la recepción de la leche se realizan pruebas rápidas, conocidas como pruebas de plataforma, que permiten evaluar su calidad inicial y detectar posibles adulteraciones o alteraciones. Estas pruebas constituyen el primer filtro de control y deben aplicarse a cada lote recibido.

      .row.justify-content-center.align-items-center.mb-5 
        .col-12.col-lg-6.col-xl-4.mb-3.mb-lg-0(data-aos="flip-left")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/tema2/img_8.png', class="img-fluid")
        .col-12.col-lg-12.col-xl-8
          .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-12 col-lg-6").p-2.rounded-3
              .tarjeta--color-white.h-100
                .tarjeta--01
                h5.text-center.mb-3 Registro de temperatura
                p.mb-3 La leche debe llegar a una temperatura ≤ 8 °C (idealmente 4 °C ± 2 °C) para evitar la proliferación bacteriana. Valores superiores indican ruptura de la cadena de frío y posible crecimiento de microorganismos.
              .tarjeta--color-white.h-100
                .tarjeta--02
                h5.text-center.mb-3 Densidad
                p.mb-3 Se determina con lactodensímetro a 15 °C. Valores inferiores a 1,029 g/mL sugieren adición de agua; valores superiores a 1,033 g/mL pueden indicar descremado o adición de sólidos.
              .tarjeta--color-white.h-100
                .tarjeta--03
                h5.text-center.mb-3 Acidez titulable
                p.mb-3 Se expresa en grados Dornic (°D), con un valor máximo permitido de 18 °D. Una acidez superior indica fermentación avanzada. Se determina mediante titulación con hidróxido de sodio y uso de fenolftaleína como indicador.
              .tarjeta--color-white.h-100
                .tarjeta--04
                h5.text-center.mb-3 Prueba de alcohol
                p.mb-3 Consiste en mezclar volúmenes iguales de leche y alcohol al 68–72 %. La formación de grumos (coagulación) indica inestabilidad térmica asociada a alta acidez, lo que puede generar problemas durante la pasteurización.
              .tarjeta--color-white.h-100
                .tarjeta--05
                h5.text-center.mb-3 Crioscopía
                p.mb-3 Mide el punto de congelación mediante un crioscopio. Valores superiores a -0,530 °C evidencian posible adición de agua. Es una prueba de alta precisión.
              .tarjeta--color-white.h-100
                .tarjeta--06
                h5.text-center.mb-3 Prueba de reductasa
                p.mb-3 Estima la carga bacteriana según el tiempo de decoloración del azul de metileno. Tiempos menores a 2 horas indican deficiente calidad higiénica.
              .tarjeta--color-white.h-100
                .tarjeta--07
                h5.text-center.mb-3 Detección de antibióticos
                p.mb-3 Se realiza mediante kits rápidos para identificar residuos (betalactámicos, tetraciclinas, entre otros). Su presencia inhibe los cultivos lácticos, afectando procesos como la fermentación en yogur y la elaboración de queso.
              .tarjeta--color-white.h-100
                .tarjeta--08
                h5.text-center.mb-3 Prueba de mastitis
                p.mb-3 Mediante el California Mastitis Test (CMT) se detecta inflamación de la glándula mamaria. La leche proveniente de animales con mastitis presenta mayor contenido de células somáticas y puede afectar la calidad y coagulación.

    .cajon.color-acento-contenido.p-4.mb-4(data-aos="zoom-in-right")
      p.mb-0 En la tabla se relacionan los parámetros de calidad exigidos para la leche cruda conforme al Decreto 616 de 2006, los cuales son fundamentales para asegurar su inocuidad y su adecuada utilización en la industria láctea.

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 3.
      |  Parámetros de calidad de la leche cruda según Decreto 616 de 2006
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p.mb-0 Nota. Adaptado del Decreto 616 de 2006.
        thead
          tr
            th.col-auto.col-lg-auto Parámetro
            th.col-auto.col-lg-auto Requisito
        tbody
          tr
            td.text-start Temperatura de recepción.
            td.text-start ≤ 8 °C.
          tr
            td.text-start Densidad a 15 °C.
            td.text-start 1,029 – 1,033 g / mL.
          tr
            td.text-start Acidez (expresada como ácido láctico).
            td.text-start 0,13 – 0,17 % (13 – 17 °Dornic).
          tr
            td.text-start Crioscopia.
            td.text-start -0,530 a -0,550 °C.
          tr
            td.text-start Prueba de alcohol (68 %).
            td.text-start Negativa (sin grumos).
          tr
            td.text-start Recuento de microorganismos mesófilos.
            td.text-start ≤ 500.000 UFC / mL (categoría A).
          tr
            td.text-start Recuento de células somáticas.
            td.text-start ≤ 400.000 células / mL.
          tr
            td.text-start Ausencia de antibióticos.
            td.text-start Negativa.
          tr
            td.text-start Ausencia de conservantes (formol, peróxido).
            td.text-start Negativa.

    #t_2_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.3 Parámetros microbiológicos y fisicoquímicos
    .mb-0 

    p.mb-5(data-aos="zoom-in-right") Además de las pruebas de plataforma, es necesario realizar análisis de laboratorio que permitan una evaluación más precisa de la calidad higiénica y composicional de la leche. Estos análisis complementan el control inicial y son fundamentales para garantizar la inocuidad del producto y su adecuado comportamiento en los procesos de transformación. Entre los principales parámetros evaluados se encuentran:

    TabsB.color-adicional-1.mb-5
      .pt-4.pt-md-5.pb-4.p-5(titulo="Recuento de mesófilos" :icono="require('@/assets/curso/tema2/img_17.svg')")
        h5.mb-4 Recuento de mesófilos
        p.mb-0 Indica la carga bacteriana total presente en la leche. Para leche de categoría A, el valor debe ser inferior a 500.000 UFC/mL. Valores elevados evidencian deficiencias en la higiene durante el ordeño, almacenamiento o transporte.
      .pt-4.pt-md-5.pb-4.p-5(titulo="Recuento de células somáticas" :icono="require('@/assets/curso/tema2/img_18.svg')")
        h5.mb-4 Recuento de células somáticas 
        p.mb-0 Permite identificar problemas de salud en el animal, especialmente mastitis. El valor debe ser inferior a 400.000 células/mL. Niveles altos afectan la calidad y el rendimiento en la elaboración de derivados.
      .pt-4.pt-md-5.pb-4.p-5(titulo="Coliformes totales y fecales" :icono="require('@/assets/curso/tema2/img_19.svg')")
        h5.mb-4 Coliformes totales y fecales
        p.mb-0 Son indicadores de contaminación ambiental o fecal. Su presencia refleja deficiencias en las prácticas higiénicas y en la manipulación de la leche.
      .pt-4.pt-md-5.pb-4.p-5(titulo="Ausencia de patógenos" :icono="require('@/assets/curso/tema2/img_20.svg')")
        h5.mb-4 Ausencia de patógenos
        p.mb-0 Se verifica la no presencia de microorganismos como Salmonella y Listeria monocytogenes, los cuales representan un riesgo para la salud pública.
      .pt-4.pt-md-5.pb-4.p-5(titulo="Determinación de composición" :icono="require('@/assets/curso/tema2/img_21.svg')")
        h5.mb-4 Determinación de composición
        p.mb-0 Incluye análisis de proteína (método Kjeldahl), grasa (método Gerber), extracto seco y pH. Estos parámetros permiten evaluar el valor nutricional de la leche y su aptitud para la elaboración de productos como queso, yogur y otros derivados lácteos.
      .pt-4.pt-md-5.pb-4.p-5(titulo="Detección de adulterantes y antibióticos" :icono="require('@/assets/curso/tema2/img_22.svg')")
        h5.mb-4 Detección de adulterantes y antibióticos
        p.mb-0 Mediante métodos específicos se identifica la presencia de sustancias como agua, almidón, sacarosa y conservantes prohibidos (formol, peróxido), las cuales alteran la calidad de la leche. Asimismo, se detectan residuos de antibióticos mediante kits rápidos; su presencia es causa de rechazo, ya que interfieren con los cultivos lácticos e impiden procesos como la fermentación en la elaboración de productos derivados.
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
