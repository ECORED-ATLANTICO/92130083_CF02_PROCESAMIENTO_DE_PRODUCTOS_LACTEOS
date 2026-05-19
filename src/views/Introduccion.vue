<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg_img_1.mb-0

      .tarjeta.color-acento-contenido-10.p-4.rounded-3.mb-5(data-aos="zoom-in-right")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/introduccion/img_2.svg', class="img-fluid")
          .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
            p.mb-0 La leche es una materia prima fundamental en la industria láctea por su alto valor nutricional y versatilidad, siendo base para la elaboración de productos como el queso. Comprender su composición, características y los factores que influyen en su calidad es esencial para su adecuada transformación.

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1
          p.mb-3(data-aos="zoom-in-right") Este componente formativo aborda la composición de la leche, los requisitos de calidad establecidos por la normatividad colombiana vigente y el uso de aditivos en la industria láctea. Asimismo, desarrolla el proceso general de elaboración de queso y la aplicación de estos conocimientos en diferentes tipos.
          .cajon.color-primario.p-4(data-aos="zoom-in-right")
            p.mb-3 El aprendizaje se estructura de manera progresiva, iniciando con los fundamentos de la leche, seguido de los controles de calidad y finalizando con los procesos de elaboración. Al finalizar, el aprendiz estará en capacidad de aplicar criterios técnicos para la selección, procesamiento y elaboración de quesos conforme a los parámetros establecidos.
        .col-10.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/introduccion/img_3.png', class="img-fluid")

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-12.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure.mb-2
            .video.mb-2
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Buenas Prácticas de Manufactura BPM, empaque de s y elaboración de derivados lácteos.
  
</template>

<script>
export default {
  name: 'Introduccion',
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
