<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Aditivos en la industria láctea

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-8.order-2.order-lg-1.mb-0
        p.mb-3(data-aos="zoom-in-right") Los aditivos son sustancias que se añaden intencionalmente a los alimentos en pequeñas cantidades para mejorar sus características tecnológicas, sensoriales o de conservación. En la industria láctea, su uso está estrictamente regulado. En este capítulo se describen los aditivos más comunes en la elaboración de quesos, leches fermentadas y arequipe, destacando su función y las dosis autorizadas.
        .cajon.color-acento-contenido.p-4(data-aos="zoom-in-right")
          p.mb-0 Lo invitamos a escuchar el siguiente Pódcast: Aditivos en la industria láctea: ciencia y regulación para un queso perfecto
      .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema3/img_1.png', class="img-fluid")

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-12.col-lg-8
        .tarjeta.color-secundario-70.p-5.rounded-3.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-6.col-md-4.col-lg-6.mb-lg-0.mb-3
              figure
                img(src="@/assets/curso/tema3/img_2.png", class="img-fluid w-100")
            .col-12.col-md-8.col-lg-6.mb-lg-0
              h2.mb-5.text-white Pódcast
              TarjetaAudio.color-acento-botones.mb-0.p-4(
                texto="<I>Aditivos en la industria láctea: ciencia y regulación para un queso perfecto.</I>"
                :audio="require('@/assets/curso/tema3/img_2.png')"
                @audio-hover="mostrarIndicadorTarjetaAudio = True")
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio") 

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.1 Definición y marco legal
    .mb-0 

    p.mb-5(data-aos="zoom-in-right") Según la Resolución 2310 de 1986 del Ministerio de Salud, los aditivos utilizados en productos lácteos deben cumplir con los límites máximos establecidos y corresponder únicamente a aquellos autorizados por la autoridad sanitaria competente.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema3/img_3.png', class="img-fluid")
      .col-12.col-lg-8
        .tarjeta.color-terciario-10.p-4.rounded-3.mb-3(data-aos="zoom-in-right")
          p.mb-0 Esta normativa se complementa con la Resolución 2674 de 2013 y las disposiciones emitidas por el INVIMA, las cuales regulan las condiciones sanitarias y de inocuidad en la producción de alimentos en Colombia.
        p.mb-3(data-aos="zoom-in-right") Adicionalmente, referentes internacionales como el Codex Alimentarius y las normas ISO sirven como guía para estandarizar criterios de calidad y seguridad alimentaria en el sector lácteo.
        .cajon.color-primario.p-4(data-aos="zoom-in-right")
          p.mb-0 Es importante que el aprendiz comprenda que el uso de aditivos no debe emplearse para ocultar defectos en la materia prima ni para compensar deficiencias en las prácticas de fabricación, sino que debe responder a necesidades tecnológicas específicas dentro del proceso productivo.

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.2 Aplicación en quesos y derivados
    .mb-0 

    .tarjeta.color-acento-contenido-10.p-4.rounded-3.mb-5(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema3/img_4.svg', class="img-fluid")
        .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
          p.mb-0 En la elaboración de quesos y otros derivados lácteos, el uso de aditivos cumple funciones específicas relacionadas con la conservación, estabilidad y mejora de las características del producto final. Su aplicación debe realizarse conforme a la normativa vigente, garantizando que no se altere la naturaleza del producto ni se afecte la salud del consumidor.

    p.mb-5(data-aos="zoom-in-right") El adecuado uso de estos aditivos permite optimizar procesos tecnológicos, mantener la calidad y asegurar condiciones de inocuidad en los productos obtenidos.

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 4.
      |  Aditivos comunes en la elaboración de queso
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p.mb-0 Nota. Adaptado de Meyer (2014) y Resolución 2310 de 1986.
        thead
          tr
            th.col-auto.col-lg-3 Aditivo
            th.col-auto.col-lg-auto Función
            th.col-auto.col-lg-2 Dosis típica
            th.col-auto.col-lg-auto Observaciones
        tbody
          tr
            td.text-start Nitrato de potasio (sal nitro).
            td.text-start Previene el crecimiento de bacterias indeseables (coliformes, clostridios) que causan hinchazón precoz y sabores anormales.
            td.text-start 0,1 0,2 g / L.
            td.text-start Su uso está restringido; en algunos países se ha reducido al mínimo. Es importante no exceder la dosis para evitar formación de nitrosaminas.
          tr
            td.text-start Cloruro de calcio,
            td.text-start Nivela el calcio en la leche pasteurizada, mejora la coagulación, reduce el tiempo de coagulación y favorece la salida del suero.
            td.text-start 0,1 0,2 g / L.
            td.text-start Se añade después de la pasteurización, diluido en agua fría. Es especialmente útil en leches pasteurizadas que han perdido parte del calcio.
          tr
            td.text-start Colorantes (achiote).
            td.text-start Uniformiza el color del queso, especialmente en quesos que tradicionalmente tienen tonalidad amarilla.
            td.text-start <600 mg / L.
            td.text-start Debe ser de origen vegetal (achiote, annatto). Se añade antes del cuajo.
          tr
            td.text-start Cuajo (rennina).
            td.text-start Coagula la caseína formando la cuajada. Puede ser de origen animal, microbiano o vegetal.
            td.text-start Variable según concentración (ej. 20 40 mL de cuajo 10000 por 100 L).
            td.text-start Se diluye en agua fría antes de agregar. La dosis se ajusta según la temperatura y el tipo de queso.
          tr
            td.text-start Sal (cloruro de sodio).
            td.text-start Aporta sabor, controla la fermentación, favorece el desuerado y contribuye a la conservación.
            td.text-start 1 2 % sobre la cuajada.
            td.text-start Puede añadirse en la leche, en la cuajada o en salmuera. En salmuera se usa una concentración del 23 %.
          tr
            td.text-start Cultivos lácticos.
            td.text-start Microorganismos que acidifican la leche, desarrollan aroma y textura.
            td.text-start 0,05 5 % según tipo.
            td.text-start Difieren según el tipo de queso (mesófilos o termófilos). Se añaden antes del cuajo.

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.3 Uso responsable de aditivos
    .mb-0 

    p.mb-5(data-aos="zoom-in-right") En la elaboración de leches fermentadas como yogur y kumis, así como en productos como el arequipe, los aditivos cumplen funciones específicas que contribuyen a la estabilidad, textura, sabor y conservación del producto. Su uso debe ajustarse a la normativa vigente y a las características propias de cada derivado lácteo.

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 5.
      |  Aditivos comunes en leches fermentadas (yogur, kumis) y arequipe
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p.mb-0 Nota. Adaptado de Resolución 2310 de 1986 y Codex Alimentarius.
        thead
          tr
            th.col-auto.col-lg-2 Aditivo
            th.col-auto.col-lg-2 Producto
            th.col-auto.col-lg-auto Función
            th.col-auto.col-lg-auto Límite máximo
        tbody
          tr
            td.text-start Leche en polvo.
            td.text-start Yogur.
            td.text-start Aumenta el contenido de sólidos no grasos, mejora la viscosidad y reduce la sinéresis.
            td.text-start Hasta 5 % en yogur natural; hasta 10 % en yogur con fruta.
          tr
            td.text-start Azúcar (sacarosa).
            td.text-start Yogur, arequipe.
            td.text-start Endulza, mejora el sabor; en arequipe es esencial para la concentración y la textura.
            td.text-start Variable según receta (20 30 % en arequipe).
          tr
            td.text-start Estabilizantes (goma xantan, carragenina, pectina).
            td.text-start Yogur.
            td.text-start Evitan la sinéresis, mejoran la textura y la sensación en boca.
            td.text-start Según autorización (Codex Alimentarius).
          tr
            td.text-start Bicarbonato de sodio.
            td.text-start Arequipe.
            td.text-start Neutraliza la acidez de la leche, evita que se corte durante la concentración.
            td.text-start Máximo 5 g / kg de leche.
          tr
            td.text-start Conservantes (ácido sórbico, benzoato).
            td.text-start Yogur, kumis.
            td.text-start Prolongan la vida útil al inhibir mohos y levaduras.
            td.text-start Máximo 1000 mg / kg (expresado como ácido sórbico).
          tr
            td.text-start Saborizantes.
            td.text-start Yogur, kumis.
            td.text-start Aportan aromas a frutas, vainilla, etc.
            td.text-start Cantidad mínima necesaria, según autorización.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-7.order-2.order-lg-1.mb-0
        .tarjeta.color-acento-contenido-10.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
          h5.mb-4 Consideraciones sobre el uso de aditivos
          ul.lista-ul.lista-ul--check
            li
              i.lista-ul__vineta-check.mb-2
              span #[strong Aprobación:] deben estar autorizados por el INVIMA y declarados en la lista de ingredientes, garantizando transparencia al consumidor.
            li
              i.lista-ul__vineta-check.mb-2
              span #[strong Dosificación:] su uso debe ajustarse a las Buenas Prácticas de Manufactura (BPM), empleando únicamente la cantidad mínima necesaria para lograr el efecto tecnológico.
            li
              i.lista-ul__vineta-check.mb-2
              span #[strong Restricciones:] algunos aditivos, como el nitrato, presentan límites legales específicos y requieren un control riguroso en su aplicación.
            li
              i.lista-ul__vineta-check.mb-0
              span #[strong Enfoque artesanal:] se recomienda reducir su uso y priorizar alternativas naturales, como cultivos lácticos, que contribuyen a la calidad del producto.
      .col-12.col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema3/img_5.png', class="img-fluid")
</template>

<script>
export default {
  name: 'Tema3',
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
