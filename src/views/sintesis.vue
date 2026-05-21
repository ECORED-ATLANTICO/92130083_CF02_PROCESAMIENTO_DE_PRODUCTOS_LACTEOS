<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-3 La leche es una materia prima compleja cuya composición varía según factores como la raza, alimentación y estado de salud del animal, lo que exige un estricto control de calidad en su recepción mediante pruebas de plataforma, conforme a la normativa colombiana vigente.
    p.mb-3 En la producción de derivados lácteos, especialmente queso, se utilizan aditivos como cuajo, cultivos lácticos y sal, dentro de un proceso estructurado que incluye etapas como estandarización, coagulación, corte, desuerado, moldeado, salado, maduración y envasado.
    p.mb-3 Asimismo, el uso adecuado de equipos e implementos garantiza la correcta ejecución del proceso, mientras que el conocimiento de variedades de queso y equivalencias de producción permite obtener productos inocuos y de calidad.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El dominio tecnológico de la leche como materia prima exige comprender su naturaleza compleja y variable, donde componentes como agua, grasa, caseína y lactosa dictan los parámetros de transformación. Este componente formativo abordó de manera integral el control de calidad en la recepción de leche, fundamentado en la normativa colombiana (Decreto 616, Resoluciones 2674 y 2310), mediante pruebas de plataforma que aseguran la idoneidad de la materia prima. Se profundizó en la importancia de las condiciones estructurales de las plantas procesadoras, con áreas físicamente separadas y envases autorizados, así como en la función estratégica de los aditivos en la elaboración de queso. Posteriormente, se desarrolló el proceso tecnológico del queso en sus nueve etapas esenciales, desde la estandarización hasta el envasado, destacando los parámetros específicos que diferencian tanto las variedades internacionales como las tradicionales colombianas. Finalmente, se analizó el papel de la maquinaria e implementos especializados en la correcta ejecución del proceso, junto con el cálculo del rendimiento mediante equivalencias en leche, integrando así los conocimientos necesarios para transformar la leche en productos inocuos, estandarizados y de alta calidad.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Síntesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
