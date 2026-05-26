<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Proceso general de elaboración de quesos

    .bloque-texto-g.color-secundario-10.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El queso es el resultado de la concentración de la materia seca de la leche mediante coagulación, separación del suero y, en muchos casos, maduración. Aunque cada variedad tiene sus particularidades, el proceso sigue etapas comunes. En este capítulo se describen dichas etapas, que constituyen la base para comprender las especificidades de los diferentes tipos de queso. Dominar cada etapa permite al técnico ajustar los parámetros para obtener el queso deseado, ya sea fresco, blando, semiduro o duro.

    .bg_img_7.mb-0

      .titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 1.
        |    Las 9 etapas del queso
      figure(data-aos="flip-left").mb-5
        img(src='@/assets/curso/tema5/img_3.svg', class="img-fluid d-none d-lg-block", alt="LAS 9 ETAPAS DEL QUESO Proceso básico de elaboración del queso desde la leche hasta su envasado. 1. ESTANDARIZACIÓN Se ajusta la composición de la leche (grasa, proteína y sólidos) para obtener las características deseadas en el queso. 2. INOCULACIÓN (SIEMBRA) Se adicionan cultivos lácticos para desarrollar acidez, sabor y textura característicos del queso. 3. COAGULACIÓN Se agrega el cuajo y se deja reposar hasta que la leche se transforme en un gel firme (cuajada). 4. CORTE La cuajada se corta en cubos o granos para facilitar la salida del suero y favorecer la firmeza del queso. 5. DESUERADO Se elimina parte del suero (cuajo líquido) mediante calentamiento y reposo, reduciendo su humedad. 6. MOLDEADO La cuajada se coloca en moldes para darle forma y permitir el drenaje del suero restante bajo presión. 7. SALADO Se aplica sal en seco o en salmuera para dar sabor, ayudar a conservar y controlar el desarrollo de microorganismos. 8. MADURACIÓN El queso reposa en condiciones controladas de temperatura y humedad para desarrollar sabor, textura y aroma. 9. ENVASADO El queso se protege en envases adecuados para mantener su calidad e inocuidad hasta llegar al consumidor. TEXTO FINAL (NOTA) Cada etapa debe realizarse con buenas prácticas de higiene y control para garantizar la calidad e inocuidad del queso.").mb-3
        img(src='@/assets/curso/tema5/img_4.png', class="img-fluid d-block d-lg-none", alt="LAS 9 ETAPAS DEL QUESO Proceso básico de elaboración del queso desde la leche hasta su envasado. 1. ESTANDARIZACIÓN Se ajusta la composición de la leche (grasa, proteína y sólidos) para obtener las características deseadas en el queso. 2. INOCULACIÓN (SIEMBRA) Se adicionan cultivos lácticos para desarrollar acidez, sabor y textura característicos del queso. 3. COAGULACIÓN Se agrega el cuajo y se deja reposar hasta que la leche se transforme en un gel firme (cuajada). 4. CORTE La cuajada se corta en cubos o granos para facilitar la salida del suero y favorecer la firmeza del queso. 5. DESUERADO Se elimina parte del suero (cuajo líquido) mediante calentamiento y reposo, reduciendo su humedad. 6. MOLDEADO La cuajada se coloca en moldes para darle forma y permitir el drenaje del suero restante bajo presión. 7. SALADO Se aplica sal en seco o en salmuera para dar sabor, ayudar a conservar y controlar el desarrollo de microorganismos. 8. MADURACIÓN El queso reposa en condiciones controladas de temperatura y humedad para desarrollar sabor, textura y aroma. 9. ENVASADO El queso se protege en envases adecuados para mantener su calidad e inocuidad hasta llegar al consumidor. TEXTO FINAL (NOTA) Cada etapa debe realizarse con buenas prácticas de higiene y control para garantizar la calidad e inocuidad del queso.").mb-3
        figcaption Nota. SENA, (2026). 
    
    .cajon.color-acento-contenido.p-4(data-aos="zoom-in-right")
      p.mb-0 Lo invitamos a escuchar el siguiente Pódcast: #[strong Quesos del mundo: de la tradición colombiana a la técnica internacional]

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
                texto="<I>Quesos del mundo: de la tradición colombiana a la técnica internacional.</I>"
                :audio="require('@/assets/curso/tema3/img_2.png')"
                @audio-hover="mostrarIndicadorTarjetaAudio = True")
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio") 

    Separador

    #t_5_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.1 Estandarización de la leche y cultivos
    .mb-0 

    .tarjeta.color-terciario-10.p-4.rounded-3.mb-5(data-aos="zoom-in-right")
      p.mb-0 La estandarización consiste en ajustar la relación grasa/proteína de la leche para obtener un queso con el contenido graso deseado en el extracto seco. Cada tipo de queso tiene un rango definido de grasa en el extracto seco (por ejemplo, queso fresco 40-45 %; queso duro 50-60 %). 

    p.mb-5(data-aos="flip-left") Este ajuste se realiza mezclando la leche entera con leche descremada o con crema, según se requiera reducir o aumentar la grasa. Para calcular la cantidad necesaria, se utiliza la siguiente fórmula (Meyer, 2014):

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-12.col-lg-7
        .tarjeta.color-secundario-10.p-4.rounded-3.mb-0(data-aos="zoom-in-right")
          p.text-center.mb-0 Grasa de la leche (%) = Contenido proteico de la leche (%) × Factor de estandarización

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 6.
      |  Factores de estandarización según tipo de queso
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p.mb-0 Nota. Adaptado de Meyer (2014).
        thead
          tr
            th.col-auto.col-lg-2 Tipo de queso
            th.col-auto.col-lg-4 Contenido graso del extracto seco (%)
            th.col-auto.col-lg-2 Factor
            th.col-auto.col-lg-auto Ejemplo de aplicación
        tbody
          tr
            td.text-start(rowspan="5") Queso fresco.
            td 20
            td 0,33
            td.text-start Para queso fresco con 20 % grasa en extracto seco, si la leche tiene 3,2 % proteína, la grasa requerida es 1,06 %.
          tr
            td 30
            td 0,55
            td.text-start 3,2 × 0,55 = 1,76 %
          tr
            td 40
            td 0,79
            td.text-start 3,2 × 0,79 = 2,53 %
          tr
            td 45
            td 0,96
            td.text-start 3,2 × 0,96 = 3,07 %
          tr
            td 50
            td 1,12
            td.text-start 3,2 × 1,12 = 3,58 %
          tr
            td.text-start(rowspan="5") Queso de pasta blanda.
            td 20
            td 0,24
            td.text-start 3,2 × 0,24 = 0,77 %
          tr
            td 30
            td 0,44
            td.text-start 3,2 × 0,44 = 1,41 %
          tr
            td 40
            td 0,68
            td.text-start 3,2 × 0,68 = 2,18 %
          tr
            td 45
            td 0,84
            td.text-start 3,2 × 0,84 = 2,69 %
          tr
            td 50
            td 1,00
            td.text-start 3,2 × 1,00 = 3,20 %
          tr
            td.text-start(rowspan="5") Queso de pasta firme.
            td 20
            td 0,28
            td.text-start 3,2 × 0,28 = 0,90 %
          tr
            td 30
            td 0,50
            td.text-start 3,2 × 0,50 = 1,60 %
          tr
            td 40
            td 0,74
            td.text-start 3,2 × 0,74 = 2,37 %
          tr
            td 45
            td 0,90
            td.text-start 3,2 × 0,90 = 2,88 %
          tr
            td 50
            td 1,06
            td.text-start 3,2 × 1,06 = 3,39 %
          tr
            td.text-start(rowspan="2") Queso de pasta dura.
            td 45
            td 0,93
            td.text-start 3,2 × 0,93 = 2,98 %
          tr
            td 50
            td 1,09
            td.text-start 3,2 × 1,09 = 3,49 %

    .tarjeta.color-acento-contenido-10.p-4.rounded-3.mb-5(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema5/img_5.svg', class="img-fluid")
        .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
          p.mb-0 Ejemplo práctico: para elaborar un queso de pasta firme con 40 % de grasa en el extracto seco, si la leche tiene 3,5 % de proteína, la grasa requerida será: 3,5 × 0,74 = 2,59 %. Si la leche entera tiene 3,5 % de grasa, no sería necesario ajustar. Si la leche tiene mayor grasa, se mezcla con leche descremada; si tiene menor, se añade crema.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema1/img_3.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Siembra de cultivos lácticos

    p.mb-5(data-aos="flip-left") Los cultivos lácticos son bacterias seleccionadas que fermentan la lactosa produciendo ácido láctico. Esto reduce el pH, facilita la coagulación, contribuye al sabor y textura, y ayuda a controlar microorganismos indeseables. La composición del cultivo varía según el tipo de queso.

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 7.
      |  Cultivos lácticos según tipo de queso (ampliada)
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p.mb-0 Nota. Adaptado de Meyer (2014).
        thead
          tr
            th.col-auto.col-lg-auto Clase de queso
            th.col-auto.col-lg-auto Especies bacterianas
            th.col-auto.col-lg-auto Función
            th.col-auto.col-lg-auto Dosis aproximada
            th.col-auto.col-lg-auto Temperatura de incubación
        tbody
          tr
            td.text-start Pasta blanda y firme.
            td.text-start Streptococcus lactis, S. cremoris.
            td.text-start Acidificación activa.
            td.text-start 2 %
            td.text-start 30 32 °C.
          tr
            td.text-start Pasta firme y dura.
            td.text-start S. lactis, Lactobacillus casei, Leuconostoc citrovorum.
            td.text-start Acidificación pasiva, producción de gas y sabor.
            td.text-start 4 %
            td.text-start 30 32 °C.
          tr
            td.text-start Pasta firme y dura (termófilos).
            td.text-start Streptococcus thermophilus.
            td.text-start Acidificación hasta pH 5,0.
            td.text-start 0,1 %
            td.text-start 40 42 °C.
          tr
            td.text-start Pasta dura.
            td.text-start Lactobacillus bulgaricus, L. helveticus.
            td.text-start Acidificación intensa a > 40 °C.
            td.text-start 0,04 %
            td.text-start 40 45 °C.

    p.mb-5(data-aos="flip-left") La selección del cultivo adecuado es fundamental para obtener las características deseadas. Por ejemplo, los quesos de pasta dura requieren cultivos termófilos que trabajen a temperaturas elevadas durante la cocción de la cuajada.

    Separador

    #t_5_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.2 Coagulación y corte
    .mb-0 

    .bg_img_8.mb-0

      .tarjeta.color-primario-10.p-4.rounded-3.mb-5(data-aos="zoom-in-right")
        p.mb-0 La coagulación puede ser ácida (por adición de ácido o fermentación) o enzimática (con cuajo). En la elaboración de la mayoría de los quesos se emplea cuajo, una enzima (rennina) que actúa sobre la caseína formando un coágulo. El mecanismo de acción consiste en que la rennina corta la micela de caseína en dos fracciones (paracaseína y macropéptido), permitiendo que la para caseína se agregue en presencia de calcio para formar un gel tridimensional.

      .row.justify-content-center.align-items-center.mb-5 
        .col-12.col-lg-6.col-xl-4.mb-3.mb-lg-0(data-aos="zoom-out-up")
          figure
            img(src='@/assets/curso/tema5/img_7.png', class="img-fluid")
        .col-12.col-lg-12.col-xl-8
          .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-12 col-lg-6").p-2.rounded-3
              .tarjeta--color-white.h-100
                .tarjeta--17 
                p.mb-3 #[strong Temperatura óptima:] 40 42 °C para máxima actividad. Sin embargo, cada tipo de queso tiene su temperatura de coagulación (por ejemplo, para quesos blandos se usan temperaturas más bajas, 32 35 °C). 
              .tarjeta--color-white.h-100
                .tarjeta--18 
                p.mb-3 #[strong Tiempo de coagulación:] 20 40 minutos, dependiendo del tipo de queso, la temperatura y la dosis de cuajo. 
              .tarjeta--color-white.h-100
                .tarjeta--19 
                p.mb-3 #[strong Punto de corte:] se determina cuando el coágulo tiene la consistencia adecuada (se rompe limpiamente al introducir un dedo o se observa una rotura limpia con un cuchillo). También se puede medir el pH, que debe estar entre 6,4 y 6,6 al momento de cortar. tres iconos independientes.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema1/img_3.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Corte de la cuajada

    p.mb-5(data-aos="flip-left") El corte tiene como objetivo facilitar la salida del suero. Se utiliza una lira (instrumento con alambres) para obtener partículas de tamaño uniforme. El tamaño influye en la humedad final:
    
    br
    br

    .row.justify-content-center.align-items-stretch.mb-5
      .col-12.col-lg-6.col-xl-4.mb-5.mb-lg-0.pt-4.d-flex.order-1.order-lg-2
        .tarjeta-icono-top.tarjeta-icono-top--img-doble.color-secundario-10.h-100
          .tarjeta-icono-top__icono
            figure
              img(src='@/assets/curso/tema5/img_11.svg', class="img-fluid")
          h5.mb-4 Partículas grandes
          p.mb-4 Retienen más humedad: la estructura abierta y los canales más grandes atrapan más suero dentro del coágulo, limitando el desuerado.
          p.mb-0 Queso más suave y ácido: el exceso de humedad promueve una textura más blanda y cremosa, y el suero retenido permite que las bacterias sigan fermentando, aumentando la acidez.
      .col-12.col-lg-6.col-xl-4.mb-5.mb-lg-0.pt-4.d-flex.order-2.order-lg-3
        .tarjeta-icono-top.tarjeta-icono-top--img-doble.color-secundario-10.h-100
          .tarjeta-icono-top__icono
            figure
              img(src='@/assets/curso/tema5/img_12.svg', class="img-fluid")
          h5.mb-4 Partículas pequeñas
          p.mb-4 Desueran más rápido: el tamaño reducido de las partículas crea más superficie y canales estrechos, permitiendo que el suero escape más fácilmente y rápido.
          p.mb-0 Queso más firme y menos ácido: la menor retención de humedad da como resultado una textura más densa, compacta y firme, y la reducción de suero limita la fermentación posterior, produciendo un sabor más suave.
      .col-12.col-lg-8.col-xl-4.mb-5.order-3.order-lg-1
        figure
          img(src='@/assets/curso/tema5/img_13.png', class="img-fluid")
    
    p.mb-5(data-aos="flip-left") Además del tamaño, la velocidad de agitación y la temperatura durante el corte también afectan la pérdida de humedad. En quesos de pasta dura, se realizan cortes más finos y se aplica mayor temperatura para expulsar más suero.

    Separador

    #t_5_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.3 Desuerado, moldeado y salado
    .mb-0 

    .bg_img_9.mb-0

      p.mb-5(data-aos="flip-left") El desuerado es la etapa del proceso en la cual se separa el suero de la cuajada, permitiendo la formación de una estructura más firme y definiendo características clave como la humedad, textura y rendimiento del queso. Esta operación influye directamente en la calidad final del producto, por lo que debe controlarse cuidadosamente mediante diferentes acciones tecnológicas. Se favorece mediante:
      
      .row.justify-content-center.mb-5
        .col-12.col-lg-4.mb-4.mb-lg-0.d-flex
          .tarjeta-img-top.color-primario-20.w-100
            .tarjeta-img-top__imagen
              figure
                img(src='@/assets/curso/tema5/img_15.png', alt='Agitación')
            .tarjeta-img-top__contenido
              h5.mb-3 Agitación
              p.mb-0 Favorece la sinéresis (expulsión del suero) y permite que los granos se contraigan y liberen líquido.

        .col-12.col-lg-4.mb-4.mb-lg-0.d-flex
          .tarjeta-img-top.color-primario-20.w-100
            .tarjeta-img-top__imagen
              figure
                img(src='@/assets/curso/tema5/img_16.png', alt='Calentamiento')
            .tarjeta-img-top__contenido
              h5.mb-3 Calentamiento
              p.mb-0 Facilita la expulsión del suero por temperatura. Mayor temperatura final = menor humedad del queso.

        .col-12.col-lg-4.mb-4.mb-lg-0.d-flex
          .tarjeta-img-top.color-primario-20.w-100
            .tarjeta-img-top__imagen
              figure
                img(src='@/assets/curso/tema5/img_17.png', alt='Prensado')
            .tarjeta-img-top__contenido
              h5.mb-3 Prensado
              p.mb-0 Elimina el suero restante mediante presión. Puede ser manual o mecánico, con intensidad variable según el tipo de queso.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema1/img_3.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Moldeado

    .bloque-texto-g.color-secundario-10.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img_18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La cuajada desuerada se coloca en moldes que le dan la forma definitiva. Los moldes pueden ser de diferentes materiales (acero inoxidable, plástico, madera) y formas (cilíndrica, rectangular, etc.). A menudo se revisten con tela de quesería (muselina) para facilitar el desuerado y el desmolde. En algunos quesos, el moldeado se realiza en caliente (quesos de pasta hilada como la mozzarella), mientras que en otros se hace en frío.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema1/img_3.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Salado

    p.mb-5(data-aos="flip-left") El salado cumple varias funciones: aporta sabor, controla la fermentación, extrae suero residual y contribuye a la conservación. Puede realizarse de varias maneras:


    .row.justify-content-center.mb-5
      .col-12.col-lg-6.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img_19.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Salado en la leche
            p.mb-3 Se realiza antes del cuajo, agregando sal directamente a la leche. Es poco usado porque puede afectar la coagulación y el desarrollo de cultivos. Requiere control cuidadoso.
      .col-12.col-lg-6.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img_20.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Salado en la cuajada
            p.mb-3 Se añade sal después del corte y antes del moldeado. Común en quesos frescos. Permite buena distribución, control del sabor y facilita la salida del suero.
      .col-12.col-lg-6.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img_21.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Salado en seco
            p.mb-3 Se aplica sobre el queso ya moldeado. Favorece la corteza, regula la humedad y aporta sabor durante la maduración. Uso típico en quesos madurados.
      .col-12.col-lg-6.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img_22.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Salado en salmuera
            p.mb-3 El queso se sumerge en solución salina (≈23 %). Permite penetración uniforme, mejora la conservación y controla microorganismos. Muy usado en quesos semiduros y duros.

    Separador

    #t_5_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.4 Maduración, envasado y almacenamiento
    .mb-0 

    p.mb-5(data-aos="flip-left") La maduración es el proceso mediante el cual el queso desarrolla sus características organolépticas (sabor, aroma, textura) gracias a la acción de enzimas y microorganismos. Puede durar desde unos días (quesos frescos) hasta varios años (quesos duros). Durante este periodo se controlan temperatura y humedad, y se realizan volteos y frotados de la superficie. Factores clave:

    .bg_img_10.mb-0

      .row.justify-content-center.align-items-center.mb-5 
        .col-12.col-lg-8.mb-3.mb-lg-0(data-aos="flip-left")
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 2.
            |    Factores clave para la maduración del queso
          figure(data-aos="flip-left").mb-5
            img(src='@/assets/curso/tema5/img_24.svg', class="img-fluid d-none d-lg-block", alt="La figura muestra los factores clave para la maduración del queso: temperatura controlada entre 10 y 15 °C, humedad relativa entre 80 y 95 %, volteos para asegurar una maduración uniforme y tratamientos superficiales como frotado, aceitado o cepillado según el tipo de queso.").mb-3
            img(src='@/assets/curso/tema5/img_25.svg', class="img-fluid d-block d-lg-none", alt="La figura muestra los factores clave para la maduración del queso: temperatura controlada entre 10 y 15 °C, humedad relativa entre 80 y 95 %, volteos para asegurar una maduración uniforme y tratamientos superficiales como frotado, aceitado o cepillado según el tipo de queso.").mb-3
            figcaption Nota. SENA, (2026). 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-7.order-2.order-lg-1.mb-0
        .tarjeta.color-acento-contenido-10.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
          h5.mb-4 Envasado y almacenamiento
          p.mb-4 Una vez el queso alcanza su maduración, se envasa para protegerlo, evitar pérdida de humedad y conservar su calidad. Se usan materiales como papel parafinado, plásticos (vacío) o cera, según el tipo de queso.
          ul.lista-ul.lista-ul--check.mb-4
            li
              i.lista-ul__vineta-check.mb-2
              span Los quesos frescos se almacenan en refrigeración (2–6 °C) por su alta humedad, mientras los madurados se conservan entre 8 y 14 °C.
            li
              i.lista-ul__vineta-check.mb-2
              span El envasado al vacío prolonga la vida útil al reducir el oxígeno, pero no se recomienda durante la maduración, ya que afecta el desarrollo del sabor.
          .tarjeta.color-acento-contenido-5.p-4.rounded-3.mb-0
            p.mb-0 Un buen envasado y almacenamiento asegura calidad, inocuidad y aceptación del producto.
      .col-12.col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema5/img_26.png', class="img-fluid")
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
