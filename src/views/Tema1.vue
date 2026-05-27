<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de la leche

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_1.png', class="img-fluid")
      .col-12.col-lg-8
        p.mb-3(data-aos="zoom-in-right") La leche es el punto de partida de toda la industria láctea. Su conocimiento profundo permite no solo garantizar la calidad de los productos finales, sino también optimizar los procesos y prevenir problemas.
        .cajon.color-acento-contenido.p-4(data-aos="zoom-in-right")
          p.mb-0 En este capítulo se aborda qué es la leche, de dónde proviene, cómo está compuesta y qué factores determinan sus características. Cada uno de estos aspectos es fundamental para comprender por qué la leche puede comportarse de manera diferente según la raza del animal, su alimentación o la época del año. Estos cambios influyen directamente en la elaboración de quesos y otros derivados lácteos.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.1 Definición, origen y composición
    .mb-0 

    p.mb-4(data-aos="zoom-in-right") Desde el punto de vista fisiológico, la leche se define como la secreción natural de las glándulas mamarias de las hembras de los mamíferos, producida con el fin de alimentar a sus crías.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1
        .tarjeta.color-secundario-10.p-4.rounded-3.mb-4(data-aos="zoom-in-right")
          p.mb-0 Desde el punto de vista legal, el Decreto 616 de 2006 del Ministerio de Salud y Protección Social la define como “el producto del ordeño completo e ininterrumpido, obtenido en condiciones higiénicas, de vacas sanas, bien alimentadas y en adecuado estado de salud, que no contiene calostro”.
        .tarjeta.color-terciario-10.p-4.rounded-3.mb-0(data-aos="zoom-in-right")
          p.mb-0 Aunque el término “leche” se asocia comúnmente a la leche de vaca, también se obtiene de otras especies como cabra, oveja y búfala, las cuales presentan características particulares.
      .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
        figure(data-aos="zoom-out-up")
          img(src='@/assets/curso/tema1/img_2.png', class="img-fluid")

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema1/img_3.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Composición fisicoquímica de la leche

    p.mb-5(data-aos="zoom-in-right") La leche es un sistema complejo que contiene agua, grasas, proteínas, lactosa, vitaminas, minerales y enzimas. Cada componente cumple funciones nutricionales y tecnológicas. A continuación, se amplía la descripción de cada componente, destacando su importancia en la elaboración de derivados lácteos.

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 1.
      |  Componentes de la leche y sus características
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p.mb-0 Nota. Adaptado de Francis & Gaona (2008) y Pardo et al. (2005).
        thead
          tr
            th.col-auto.col-lg-3 Componente
            th.col-auto.col-lg-3 Proporción aproximada
            th.col-auto.col-lg-auto Características y función
        tbody
          tr
            td.text-start Agua
            td.text-start 87,5 %
            td.text-start Disuelve los demás componentes; esencial para la formación de la estructura coloidal.
          tr
            td.text-start Grasa
            td.text-start 3,2 – 4,2 %
            td.text-start Presente en glóbulos de diferentes tamaños; aporta energía, vitaminas liposolubles (A, D, E, K) y contribuye al sabor y textura.
          tr
            td.text-start Proteínas
            td.text-start 3,0 – 4,0 %
            td.text-start Incluye caseína (≈80 %) y seroproteínas (≈20 %). La caseína forma la cuajada en la elaboración de queso.
          tr
            td.text-start Lactosa
            td.text-start 4,7 – 5,2 %
            td.text-start Principal carbohidrato; confiere el sabor ligeramente dulce; es fermentada por bacterias lácticas para producir ácido láctico.
          tr
            td.text-start Vitaminas
            td.text-start Trazas
            td.text-start Liposolubles (A, D, E, K) e hidrosolubles (B1, B2, B12, C, etc.).
          tr
            td.text-start Sales minerales
            td.text-start 0,6 – 1,0 %
            td.text-start Cloruros, fosfatos, sulfatos, carbonatos y citratos; calcio, sodio, potasio, magnesio. Importantes para la coagulación.
          tr
            td.text-start Enzimas
            td.text-start Trazas
            td.text-start Fosfatasa, peroxidasa, lipasa, etc. Se inactivan con el calor (pasteurización).
  
    .bg_img_9.mb-0
      .tarjeta.p-4.rounded-3.mb-5(data-aos="zoom-in-right")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema1/img_4.svg', class="img-fluid")
          .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
            p.mb-0 A continuación, se presenta una tabla con la composición de la leche expresada en gramos por cada 100 ml, considerando diferentes razas de vaca. Esta información permite identificar las variaciones en sus componentes y comprender su influencia en los procesos de transformación y elaboración de derivados lácteos.

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 2.
      |  Composición de la leche según raza de vaca (g/100 ml)
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p.mb-0 Nota. Adaptado de Unión Ganadera Regional de Jalisco (2014).
        thead
          tr
            th.col-auto.col-lg-3 Raza
            th.col-auto.col-lg-auto Grasa
            th.col-auto.col-lg-auto Proteína
            th.col-auto.col-lg-auto Lactosa
            th.col-auto.col-lg-auto Ceniza
            th.col-auto.col-lg-auto Sólidos totales
        tbody
          tr
            td.text-start Holstein
            td.text-start 3,54
            td.text-start 3,29
            td.text-start 4,68
            td.text-start 0,72
            td.text-start 12,16
          tr
            td.text-start Ayrshire
            td.text-start 3,95
            td.text-start 3,48
            td.text-start 4,60
            td.text-start 0,72
            td.text-start 12,77
          tr
            td.text-start Guernsey
            td.text-start 4,72
            td.text-start 3,75
            td.text-start 4,71
            td.text-start 0,76
            td.text-start 14,04
          tr
            td.text-start Jersey
            td.text-start 5,13
            td.text-start 3,98
            td.text-start 4,83
            td.text-start 0,77
            td.text-start 14,42
          tr
            td.text-start Pardo Suizo
            td.text-start 3,99
            td.text-start 3,64
            td.text-start 4,94
            td.text-start 0,74
            td.text-start 13,08
          tr
            td.text-start Normando
            td.text-start 4,50
            td.text-start 3,40
            td.text-start 4,75
            td.text-start 0,73
            td.text-start 13,10

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.2 Factores que influyen en la composición de la leche
    .mb-0 

    p.mb-4(data-aos="zoom-in-right") La composición de la leche no es constante, ya que puede variar en función de diversos factores. Conocer estas variaciones permite comprender y predecir su comportamiento durante la elaboración de derivados lácteos.

    .cajon.color-primario.p-4.mb-4(data-aos="zoom-in-right")
      p.mb-0 Por ejemplo, una leche con bajo contenido de proteínas puede presentar dificultades en el proceso de coagulación, afectando la formación de productos como el queso; mientras que una leche con mayor contenido de grasa favorece la obtención de derivados con textura más suave y cremosa.

    .bg_img_2.mb-0

      p.mb-5(data-aos="zoom-in-right") Por esta razón, a continuación se presentan los principales factores que influyen en la composición de la leche:

      .row.justify-content-center.align-items-start.mb-4
        .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
          figure
            img(src='@/assets/curso/tema1/img_6.png', class="img-fluid")
        .col-12.col-lg-8.mb-0(data-aos="zoom-in-right")
          AcordionA(tipo="a"  clase-tarjeta="tarjeta tarjeta--color-secundario-10")
            div(titulo="Estación del año")
              p.mb-0 Se ilustran cambios climáticos (sol, lluvia). En climas extremos puede haber variaciones en la producción y composición.
            div(titulo="Salud")
              p.mb-0 Se indica un signo de mastitis (inflamación de la ubre) con una representación de células somáticas elevadas. Las enfermedades alteran drásticamente la composición y calidad.
            div(titulo="Edad del animal")
              p.mb-0 Se muestra una vaca joven y una adulta. Las vacas jóvenes producen leche con menor contenido graso; las de mayor edad pueden aumentar la grasa hasta cierto límite.
            div(titulo="Estado de lactancia")
              p.mb-0 Se representa una línea de tiempo con tres fases: calostro (primera semana, alta proteína y anticuerpos), leche madura (estable) y leche tardía (mayor grasa).
            div(titulo="Alimentación")
              p.mb-0 Se muestra un comedero con forraje, concentrados y silos. Una alimentación rica en energía aumenta el contenido graso; una deficiencia de proteína afecta el nivel proteico.
            div(titulo="Raza")
              p.mb-0 Se ilustra con siluetas de vacas de diferentes razas (Holstein, Jersey, etc.). La raza Holstein produce leche con menor grasa y proteína que la Jersey, que es más concentrada.

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.3 Características fisicoquímicas y organolépticas
    .mb-0 

    p.mb-4(data-aos="zoom-in-right") La leche de vaca presenta características que la identifican y que son indicadores de calidad. Estas deben evaluarse tanto de manera sensorial como mediante pruebas instrumentales, con el fin de garantizar su aptitud para el consumo y su idoneidad en la elaboración de derivados lácteos.

    .bg_img_3.mb-0

      .cajon.color-primario.p-4.mb-5(data-aos="zoom-in-right")
        p.mb-0 La evaluación sensorial permite identificar aspectos como color, olor, sabor y apariencia; mientras que las pruebas instrumentales determinan parámetros fisicoquímicos y microbiológicos que aseguran el cumplimiento de los estándares de calidad establecidos.

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1
          TabsA.color-acento-botones.mb-3.uno
            .tarjeta.color-secundario-10.p-4(titulo="Sabor")
              h5.mb-3 Sabor
              p.mb-0 Ligeramente dulce debido a la lactosa; puede absorber olores y sabores del ambiente (por ello debe almacenarse en lugares limpios y sin olores fuertes, como productos de limpieza o alimentos de olor penetrante). Un sabor amargo, rancio o ácido indica alteración.
            .tarjeta.color-secundario-10.p-4(titulo="Aroma")
              h5.mb-3 Aroma
              p.mb-0 Suave, originado por la grasa y compuestos volátiles. La leche fresca tiene un aroma característico; olores a corral, a establo o a oxidación son defectos.
            .tarjeta.color-secundario-10.p-4(titulo="Color")
              h5.mb-3 Color
              p.mb-0 Blanco amarillento por la grasa y la caseína; la leche descremada tiene un tono azulado. Un color rojizo, azulado o amarillo intenso puede indicar presencia de sangre, contaminación o alto contenido de carotenos (en animales alimentados con pasto).
            .tarjeta.color-secundario-10.p-4(titulo="Acidez")
              h5.mb-3 Acidez
              p.mb-0 La acidez natural (desarrollada) es de aproximadamente 0,165 % (expresada como ácido láctico) y un pH de 6,6 – 6,8. Un aumento de acidez indica fermentación bacteriana. La acidez es crucial para la coagulación: una leche muy ácida puede coagular espontáneamente al calentarse.
            .tarjeta.color-secundario-10.p-4(titulo="Densidad")
              h5.mb-3 Densidad
              p.mb-0 Entre 1,029 y 1,033 g/mL a 15 °C. La densidad disminuye con la adición de agua y aumenta con la adición de leche en polvo o con el descremado.
            .tarjeta.color-secundario-10.p-4(titulo="Punto de ebullición")
              h5.mb-3 Punto de ebullición
              p.mb-0 Ligeramente superior al del agua, alrededor de 100,16 °C, debido a los sólidos disueltos.
            .tarjeta.color-secundario-10.p-4(titulo="Punto de congelación")
              h5.mb-3 Punto de congelación
              p.mb-0 Entre -0,530 y -0,550 °C; valores más altos indican adulteración con agua. La crioscopia es una prueba fundamental en los centros de acopio.
        .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/tema1/img_8.png', class="img-fluid")
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
