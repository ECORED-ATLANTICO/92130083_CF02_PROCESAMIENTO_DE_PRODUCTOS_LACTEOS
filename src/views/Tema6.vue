<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Tipos de queso

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema6/img_1.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 Existe una gran diversidad de quesos, determinada por el tipo de leche, el proceso, la maduración y la tradición. En este capítulo se presentan su clasificación y nueve variedades representativas, con sus especificaciones de elaboración. Cada queso incluye una tabla con parámetros clave y, al final, una figura que resume el proceso de forma visual.

    Separador

    .bg_img_6.mb-0

      #t_6_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 6.1 Clasificación general
      .mb-0 

      p.mb-5(data-aos="flip-left") Los quesos pueden clasificarse según diferentes criterios, como su contenido de humedad, tipo de maduración, textura, método de elaboración y características sensoriales. Esta clasificación permite comprender la diversidad de productos existentes y facilita su identificación, manejo y aplicación en la industria láctea.
    .bg_img_8.mb-0
      .row.justify-content-center.align-items-center.mb-2
        .col-12.col-lg-6.mb-3.mb-lg-0(data-aos="flip-left")
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 3.
            |    Clasificación de quesos
          figure(data-aos="flip-left").mb-5
            img(src='@/assets/curso/tema6/img_3.svg', class="img-fluid d-none d-lg-block", alt="Esquema que muestra la clasificación de los quesos según su contenido de grasa, maduración (fresco o madurado) y tipo de leche (cruda, pasteurizada o termizada). ").mb-3
            img(src='@/assets/curso/tema6/img_4.svg', class="img-fluid d-block d-lg-none", alt="Esquema que muestra la clasificación de los quesos según su contenido de grasa, maduración (fresco o madurado) y tipo de leche (cruda, pasteurizada o termizada). ").mb-3
            figcaption Nota. SENA, (2026).

    Separador

    #t_6_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.2 Quesos frescos
    .mb-0 

    p.mb-5(data-aos="flip-left") Los quesos frescos son aquellos que no presentan un proceso de maduración o este es muy corto, por lo que se consumen poco tiempo después de su elaboración. Se caracterizan por su alto contenido de humedad, textura blanda o semiblanda y sabor suave, ligeramente ácido.

    .row.justify-content-center.align-items-start.mb-4
      .col-12.mb-3(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema6/img_5.png')

      .col-12.mb-0(data-aos="zoom-in-right")
        AcordionA(tipo="a"  clase-tarjeta="tarjeta tarjeta--color-secundario-10")
          div(titulo="Queso blanco (fresco)")
            p.mb-4 Es un queso de alta humedad, sin maduración, de consumo inmediato o corta refrigeración. Se caracteriza por su sabor suave y textura blanda. Es muy popular en Colombia para acompañar arepas, empanadas o consumir solo.
            .titulo-sexto.color-acento-contenido
              h5 Tabla 8.
              |  Especificaciones para la elaboración de queso blanco 
            .tabla-a.mb-5
              table
                caption 
                  p.mb-0 Nota. SENA, (2026).
                thead
                  tr
                    th.col-auto.col-lg-auto Etapa
                    th.col-auto.col-lg-auto Parámetro / Especificación
                    th.col-auto.col-lg-auto Detalles técnicos
                tbody
                  tr
                    td.text-start.bg-table-01 Recepción de leche
                    td.text-start.bg-table-01 Grasa 3,3 – 3,5 %
                    td.text-start.bg-table-01 Leche fresca, acidez <18 °D.
                  tr
                    td.text-start.bg-table-01 Estandarización
                    td.text-start.bg-table-01 Ajustar a 3 % de grasa
                    td.text-start.bg-table-01 Si es necesario, mezclar con leche descremada.
                  tr
                    td.text-start.bg-table-01 Pasteurización
                    td.text-start.bg-table-01 63 – 65 °C durante 30 minutos
                    td.text-start.bg-table-01 Pasteurización lenta (LTLT) para conservar proteínas.
                  tr
                    td.text-start.bg-table-01 Enfriamiento
                    td.text-start.bg-table-01 32 – 38 °C
                    td.text-start.bg-table-01 Temperatura óptima para la coagulación.
                  tr
                    td.text-start.bg-table-01 Adición de cloruro de calcio
                    td.text-start.bg-table-01 0,1 – 0,2 g/L; reposo 10 - 20 minutos
                    td.text-start.bg-table-01 Diluir en agua fría.
                  tr
                    td.text-start.bg-table-01 Agitación
                    td.text-start.bg-table-01 Durante 5 minutos
                    td.text-start.bg-table-01 Homogeneizar la mezcla
                  tr
                    td.text-start.bg-table-01 Adición de cuajo
                    td.text-start.bg-table-01 1 pastilla para 40 litros (previamente disuelta), temperatura 35 °C
                    td.text-start.bg-table-01 Disolver en agua sin cloro.
                  tr
                    td.text-start.bg-table-01 Coagulación
                    td.text-start.bg-table-01 30 – 40 minutos
                    td.text-start.bg-table-01 Verificar punto de corte (coágulo firme).
                  tr
                    td.text-start.bg-table-01 Corte
                    td.text-start.bg-table-01 Grano de 1 – 1,5 cm con lira
                    td.text-start.bg-table-01 Cortes verticales y horizontales.
                  tr
                    td.text-start.bg-table-01 Ajuste de temperatura
                    td.text-start.bg-table-01 Elevar a 45 °C durante 5 minutos, agitando suavemente
                    td.text-start.bg-table-01 Favorece el desuerado.
                  tr
                    td.text-start.bg-table-01 Desuerado
                    td.text-start.bg-table-01 10 – 20 minutos
                    td.text-start.bg-table-01 Retirar el suero con balde o desagüe.
                  tr
                    td.text-start.bg-table-01 Amasado y salado
                    td.text-start.bg-table-01 1 – 1,5 % de sal sobre el peso de la cuajada
                    td.text-start.bg-table-01 Mezclar uniformemente.
                  tr
                    td.text-start.bg-table-01 Moldeado
                    td.text-start.bg-table-01 Moldes esterilizados a 85 °C
                    td.text-start.bg-table-01 Pueden ser plásticos o de acero inoxidable.
                  tr
                    td.text-start.bg-table-01 Prensado
                    td.text-start.bg-table-01 Según consistencia deseada
                    td.text-start.bg-table-01 Prensado suave (1 - 2 horas).
                  tr
                    td.text-start.bg-table-01 Almacenamiento
                    td.text-start.bg-table-01 Refrigeración (2 - 6 °C)
                    td.text-start.bg-table-01 Vida útil 5 7 días.
          div(titulo="Queso campesino")
            p.mb-4 Similar al queso blanco pero con adición de nitrato de potasio para controlar fermentaciones indeseables. Se consume fresco.
            .titulo-sexto.color-acento-contenido
              h5 Tabla 9.
              |  Especificaciones para la elaboración de queso campesino
            .tabla-a.mb-5
              table
                caption 
                  p.mb-0 Nota. SENA, (2026).
                thead
                  tr
                    th.col-auto.col-lg-auto Etapa
                    th.col-auto.col-lg-auto Parámetro / Especificación
                    th.col-auto.col-lg-auto Detalles técnicos
                tbody
                  tr
                    td.text-start.bg-table-01 Recepción de leche
                    td.text-start.bg-table-01 Grasa 3,3 – 3,5 %.
                    td.text-start.bg-table-01 Leche fresca, acidez < 18 °D
                  tr
                    td.text-start.bg-table-01 Estandarización
                    td.text-start.bg-table-01 Ajustar a 3 % de grasa
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Pasteurización
                    td.text-start.bg-table-01 63 – 65 °C durante 20 segundos
                    td.text-start.bg-table-01 Pasteurización rápida (HTST).
                  tr
                    td.text-start.bg-table-01 Enfriamiento
                    td.text-start.bg-table-01 32 – 38 °C
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Adición de cloruro de calcio
                    td.text-start.bg-table-01 0,1 – 0,2 g/L; reposo 10 20 minutos
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Agitación
                    td.text-start.bg-table-01 Durante 5 minutos
                    td.text-start.bg-table-01  –
                  tr
                    td.text-start.bg-table-01 Adición de nitrato de potasio
                    td.text-start.bg-table-01 0,1 – 0,2 g / L
                    td.text-start.bg-table-01 Controla hinchazón precoz
                  tr
                    td.text-start.bg-table-01 Adición de cuajo
                    td.text-start.bg-table-01 1 pastilla para 40 litros a 35 °C
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Coagulación
                    td.text-start.bg-table-01 30 – 40 minutos
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Corte
                    td.text-start.bg-table-01 Grano de 1 cm
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Desuerado
                    td.text-start.bg-table-01 10 – 20 minutos
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Amasado y salado
                    td.text-start.bg-table-01 1 – 2 % de sal sobre la cuajada
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Moldeado
                    td.text-start.bg-table-01 Moldes esterilizados
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Prensado
                    td.text-start.bg-table-01 –
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Secado
                    td.text-start.bg-table-01 Envolver en lienzos limpios y colocar en mesa inclinada
                    td.text-start.bg-table-01 Eliminar suero residual
                  tr
                    td.text-start.bg-table-01 Almacenamiento
                    td.text-start.bg-table-01 Refrigeración
                    td.text-start.bg-table-01 –
          div(titulo="Queso doble crema")
            p.mb-4 Queso de textura untuosa, de alto contenido graso. Se elabora mezclando leche ácida con leche fresca, lo que le da una acidez suave y una textura cremosa.
            .titulo-sexto.color-acento-contenido
              h5 Tabla 10.
              |  Especificaciones para la elaboración de queso doble crema
            .tabla-a.mb-5
              table
                caption 
                  p.mb-0 Nota. SENA, (2026).
                thead
                  tr
                    th.col-auto.col-lg-auto Etapa
                    th.col-auto.col-lg-auto Parámetro / Especificación
                    th.col-auto.col-lg-auto Detalles técnicos
                tbody
                  tr
                    td.text-start.bg-table-01 Leche
                    td.text-start.bg-table-01 Grasa 3,3 – 3,5 %; estandarizar a 3 %
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Acidificación
                    td.text-start.bg-table-01 30 % de la leche se acidifica a temperatura ambiente por 24 horas
                    td.text-start.bg-table-01 Se obtiene leche ácida (pH ~4,5)
                  tr
                    td.text-start.bg-table-01 Mezcla
                    td.text-start.bg-table-01 Leche ácida + 70 % leche fresca
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Temperatura
                    td.text-start.bg-table-01 32 °C
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Adición de cuajo
                    td.text-start.bg-table-01 Mitad de la dosis normal
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Coagulación
                    td.text-start.bg-table-01 15 minutos
                    td.text-start.bg-table-01 Coagulación rápida
                  tr
                    td.text-start.bg-table-01 Corte
                    td.text-start.bg-table-01 Cubos de 10 cm de lado, reposo 5 minutos
                    td.text-start.bg-table-01 Corte grueso
                  tr
                    td.text-start.bg-table-01 Calentamiento
                    td.text-start.bg-table-01 Elevar a 45 °C agitando suavemente hasta obtener cuajada firme y elástica
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Desuerado
                    td.text-start.bg-table-01 Retirar suero y colocar cuajada en mesa
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Corte y salado
                    td.text-start.bg-table-01 Cortar en trozos pequeños, agregar 2 % de sal
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Calentamiento para hilado
                    td.text-start.bg-table-01 Calentar cuajada a 72 - 75 °C durante 20 minutos hasta que se hile
                    td.text-start.bg-table-01 Proceso de pasta hilada
                  tr
                    td.text-start.bg-table-01 Moldeado
                    td.text-start.bg-table-01 Moldes esterilizados, volteos cada 2 horas durante 12 horas
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Envasado
                    td.text-start.bg-table-01 Bolsas de plástico o película termo encogible, refrigeración
                    td.text-start.bg-table-01 –
          div(titulo="Queso crema")
            p.mb-4 Queso de textura untuosa, elaborado con leche de alto contenido graso y sin maduración. Se consume como crema para untar. Su elaboración requiere una estandarización a alto contenido graso.
            .titulo-sexto.color-acento-contenido
              h5 Tabla 11.
              |  Especificaciones para la elaboración de queso crema
            .tabla-a.mb-5
              table
                caption 
                  p.mb-0 Nota. SENA, (2026).
                thead
                  tr
                    th.col-auto.col-lg-auto Etapa
                    th.col-auto.col-lg-auto Parámetro / Especificación
                    th.col-auto.col-lg-auto Detalles técnicos
                tbody
                  tr
                    td.text-start.bg-table-01 Leche
                    td.text-start.bg-table-01 Grasa 3,3 – 3,5 %; estandarizar a 11,5 % de grasa
                    td.text-start.bg-table-01 Se añade crema para alcanzar alta grasa
                  tr
                    td.text-start.bg-table-01 Pasteurización
                    td.text-start.bg-table-01 71 °C durante 30 minutos
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Enfriamiento
                    td.text-start.bg-table-01 31 °C
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Acidificación
                    td.text-start.bg-table-01 5 % de cultivo (S. <em>lactis</em>, S. <em>cremoris</em>, L. <em>citrovorum</em>)
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Reposo
                    td.text-start.bg-table-01 15 30 minutos
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Adición de cuajo
                    td.text-start.bg-table-01 7 mL de cuajo 10000 por 100 L
                    td.text-start.bg-table-01 Baja dosis
                  tr
                    td.text-start.bg-table-01 Coagulación
                    td.text-start.bg-table-01 5 horas hasta pH 4,6
                    td.text-start.bg-table-01 Coagulación lenta
                  tr
                    td.text-start.bg-table-01 Fragmentación
                    td.text-start.bg-table-01 Con agitador o rastrillo, 30 minutos
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Cocción y enfriamiento
                    td.text-start.bg-table-01 Calentar a 55 °C, enfriar a 32 °C, agregar agua fría hasta 7 °C
                    td.text-start.bg-table-01 Choque térmico
                  tr
                    td.text-start.bg-table-01 Desuerado
                    td.text-start.bg-table-01 En bolsas de tela fina, escurrir 2 días, apilar e invertir dos veces al día
                    td.text-start.bg-table-01 Desuerado por gravedad
                  tr
                    td.text-start.bg-table-01 Salado y amasado
                    td.text-start.bg-table-01 Agregar 1 % de sal, amasar hasta textura untuosa
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Envasado
                    td.text-start.bg-table-01 Recipientes de cartón o plástico
                    td.text-start.bg-table-01 –

    Separador

    #t_6_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.3 Quesos madurados
    .mb-0 

    p.mb-5(data-aos="flip-left") Los quesos madurados son aquellos que, después de su elaboración, pasan por un proceso de maduración o afinado durante un periodo determinado, en el cual se desarrollan sus características de sabor, aroma, textura y apariencia. Este proceso puede durar desde semanas hasta varios meses o incluso años, dependiendo del tipo de queso.

    .row.justify-content-center.align-items-start.mb-4
      .col-12.mb-3(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema6/img_6.png')

      .col-12.mb-0(data-aos="zoom-in-right")
        AcordionA(tipo="a"  clase-tarjeta="tarjeta tarjeta--color-secundario-10")
          div(titulo="Queso <em>Camembert</em>")
            p.mb-4 Queso de pasta blanda con moho superficial (<em>Penicillium camemberti</em>). Se caracteriza por su textura cremosa y sabor a hongos. La maduración es relativamente corta (4 - 6 semanas).
            .titulo-sexto.color-acento-contenido
              h5 Tabla 12.
              |  Especificaciones para la elaboración de queso <em>Camembert</em>
            .tabla-a.mb-5
              table
                caption 
                  p.mb-0 Nota. SENA, (2026).
                thead
                  tr
                    th.col-auto.col-lg-auto Etapa
                    th.col-auto.col-lg-auto Parámetro / Especificación
                    th.col-auto.col-lg-auto Detalles técnicos
                tbody
                  tr
                    td.text-start.bg-table-01 Leche
                    td.text-start.bg-table-01 Grasa 3,3 – 3,5 %; estandarizar a 3 %
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Pasteurización
                    td.text-start.bg-table-01 72 °C durante 15 segundos
                    td.text-start.bg-table-01 HTST
                  tr
                    td.text-start.bg-table-01 Enfriamiento
                    td.text-start.bg-table-01 34 °C
                    td.text-start.bg-table-01 Temperatura de coagulación
                  tr
                    td.text-start.bg-table-01 Acidificación
                    td.text-start.bg-table-01 2 % de cultivo láctico (mesófilo); opcional: 0,1 % de esporas de <em>Penicillium candidum</em>
                    td.text-start.bg-table-01 El moho se añade a la leche o se asperja después
                  tr
                    td.text-start.bg-table-01 Colorante
                    td.text-start.bg-table-01 Achiote (<600 mg / L)
                    td.text-start.bg-table-01 Opcional, para color amarillo
                  tr
                    td.text-start.bg-table-01 Reposo
                    td.text-start.bg-table-01 2 horas
                    td.text-start.bg-table-01 Para desarrollo de acidez
                  tr
                    td.text-start.bg-table-01 Adición de cuajo
                    td.text-start.bg-table-01 35 mL de cuajo 10000 por 100 L de leche (diluir)
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Coagulación
                    td.text-start.bg-table-01 45 minutos
                    td.text-start.bg-table-01 Hasta obtener coágulo firme
                  tr
                    td.text-start.bg-table-01 Corte
                    td.text-start.bg-table-01 Grano de 2,5 cm, cortes horizontales y verticales
                    td.text-start.bg-table-01 Corte grueso para retener humedad
                  tr
                    td.text-start.bg-table-01 Reposo
                    td.text-start.bg-table-01 5 veces el tiempo de coagulación
                    td.text-start.bg-table-01 Para sinéresis inicial
                  tr
                    td.text-start.bg-table-01 Moldeo.
                    td.text-start.bg-table-01 Moldes cilíndricos perforados (11 cm diámetro, 13 cm altura) sobre rejillas
                    td.text-start.bg-table-01 El desuerado ocurre en los moldes
                  tr
                    td.text-start.bg-table-01 Desuerado
                    td.text-start.bg-table-01 En los moldes, sin agitación
                    td.text-start.bg-table-01 Durante 18 - 24 horas
                  tr
                    td.text-start.bg-table-01 Volteo
                    td.text-start.bg-table-01 A la hora, voltear con rejilla
                    td.text-start.bg-table-01 Para uniformidad
                  tr
                    td.text-start.bg-table-01 Siembra
                    td.text-start.bg-table-01 Asperjar esporas de <em>Penicillium camemberti</em> en agua sobre la superficie; voltear y repetir
                    td.text-start.bg-table-01 Si no se añadieron a la leche
                  tr
                    td.text-start.bg-table-01 Salado
                    td.text-start.bg-table-01 Salmuera al 23 % durante 30 minutos a 13 °C
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Secado y maduración
                    td.text-start.bg-table-01 1 - 2 días a 14 °C y 75 % HR; luego 12 días a 14 °C y 95 % HR; voltear dos veces
                    td.text-start.bg-table-01 La alta humedad favorece el desarrollo del moho
                  tr
                    td.text-start.bg-table-01 Envasado
                    td.text-start.bg-table-01 Papel parafinado, cajas de madera
                    td.text-start.bg-table-01 Permite respirar
                  tr
                    td.text-start.bg-table-01 Almacenamiento
                    td.text-start.bg-table-01 5 °C.
                    td.text-start.bg-table-01 –
          div(titulo="Queso <em>Cheddar</em>")
            p.mb-4 Queso de origen inglés, de pasta firme con pequeñas aberturas (ojos). Su proceso incluye una etapa de “cheddarización” (apilado de bloques) que desarrolla su textura característica.
            .titulo-sexto.color-acento-contenido
              h5 Tabla 13.
              |  Especificaciones para la elaboración de queso <em>Cheddar</em>
            .tabla-a.mb-5
              table
                caption 
                  p.mb-0 Nota. SENA, (2026).
                thead
                  tr
                    th.col-auto.col-lg-auto Etapa
                    th.col-auto.col-lg-auto Parámetro / Especificación
                    th.col-auto.col-lg-auto Detalles técnicos
                tbody
                  tr
                    td.text-start.bg-table-01 Leche
                    td.text-start.bg-table-01 Grasa 3,3 – 3,5 %; estandarizar a 3 %
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Pasteurización
                    td.text-start.bg-table-01 72 °C durante 15 segundos
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Enfriamiento
                    td.text-start.bg-table-01 32 °C
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Acidificación
                    td.text-start.bg-table-01 0,5 % de cultivo (S. cremoris y S. lactis)
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Colorante
                    td.text-start.bg-table-01 6,7 % de achiote
                    td.text-start.bg-table-01 Opcional
                  tr
                    td.text-start.bg-table-01 Reposo
                    td.text-start.bg-table-01 25 minutos
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Adición de cuajo
                    td.text-start.bg-table-01 30 mL de cuajo 10000 por 100 L
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Coagulación
                    td.text-start.bg-table-01 25 minutos
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Corte
                    td.text-start.bg-table-01 Grano de 0,6 cm, agitar 5 minutos
                    td.text-start.bg-table-01 Corte fino
                  tr
                    td.text-start.bg-table-01 Ajuste de temperatura
                    td.text-start.bg-table-01 Elevar a 38 °C en 30 minutos, mantener 45 minutos agitando
                    td.text-start.bg-table-01 Cocción para desuerar
                  tr
                    td.text-start.bg-table-01 Desuerado
                    td.text-start.bg-table-01 En cuba con desagüe central, escurrir y conglomerar cuajada 15 minutos
                    td.text-start.bg-table-01 Formar una masa
                  tr
                    td.text-start.bg-table-01 Corte en bloques
                    td.text-start.bg-table-01 Bloques de 15 cm; apilar y voltear cada 15 minutos hasta pH 5,2 y acidez 0,55 %
                    td.text-start.bg-table-01 Cheddarización: apilado de bloques que se voltean
                  tr
                    td.text-start.bg-table-01 Fragmentación
                    td.text-start.bg-table-01 Molino especial para obtener tiras de 6 cm x 1,5 cm
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Salado.
                    td.text-start.bg-table-01 0,3 % de sal, distribuir en 3 partes y mezclar 25 minutos
                    td.text-start.bg-table-01 Salado en seco
                  tr
                    td.text-start.bg-table-01 Moldeado
                    td.text-start.bg-table-01 Moldes revestidos de muselina húmeda
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Prensado
                    td.text-start.bg-table-01 1 hora, aumentando presión hasta 1,75 kg/cm²; cambiar muselina y prensar 20 h
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Secado
                    td.text-start.bg-table-01 3 días a 13 °C y 70 % HR, volteos diarios
                    td.text-start.bg-table-01 Formación de corteza
                  tr
                    td.text-start.bg-table-01 Maduración
                    td.text-start.bg-table-01 En parafina, a 4 °C durante 9 - 12 meses
                    td.text-start.bg-table-01 Maduración fría prolongada
          div(titulo="Queso <em>Gruyere</em>")
            p.mb-4 Queso suizo de pasta dura, caracterizado por sus ojos (formados por gas producido por Propionibacterium shermanii) y su sabor a nuez. La maduración es larga y se realiza en dos fases de temperatura.
            .titulo-sexto.color-acento-contenido
              h5 Tabla 14.
              |  Especificaciones para la elaboración de queso <em>Gruyere</em>
            .tabla-a.mb-5
              table
                caption 
                  p.mb-0 Nota. SENA, (2026).
                thead
                  tr
                    th.col-auto.col-lg-auto Etapa
                    th.col-auto.col-lg-auto Parámetro / Especificación
                    th.col-auto.col-lg-auto Detalles técnicos
                tbody
                  tr
                    td.text-start.bg-table-01 Leche
                    td.text-start.bg-table-01 Grasa 3,3 – 3,5 %; estandarizar a 3 %
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Pasteurización
                    td.text-start.bg-table-01 72 °C durante 15 segundos
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Enfriamiento
                    td.text-start.bg-table-01 35 °C
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Acidificación
                    td.text-start.bg-table-01 0,07 % de cultivo (<em>S. thermophilus</em>, <em>L. bulgaricus</em>, <em>P. shermanii</em>)
                    td.text-start.bg-table-01 Incluye propiónicas para los ojos
                  tr
                    td.text-start.bg-table-01 Adición de cuajo
                    td.text-start.bg-table-01 23 mL de cuajo 10000 por 100 L
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Corte
                    td.text-start.bg-table-01 Grano de 0,6 cm; luego reducir a 0,3 cm con movimientos circulares
                    td.text-start.bg-table-01 Corte fino
                  tr
                    td.text-start.bg-table-01 Agitación
                    td.text-start.bg-table-01 40 minutos a 35 °C
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Ajuste de temperatura
                    td.text-start.bg-table-01 Elevar a 55 °C en 30 minutos, agitando hasta pH 6,6
                    td.text-start.bg-table-01 Cocción alta
                  tr
                    td.text-start.bg-table-01 Desuerado
                    td.text-start.bg-table-01 Escurrir con aro y tela
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Moldeado y prensado
                    td.text-start.bg-table-01 Amasar con mano, cambiar muselina cada 2 horas (3 veces), prensar 18 h
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Salado
                    td.text-start.bg-table-01 Salmuera al 23 % durante 2 - 3 días, volteo diario
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Maduración
                    td.text-start.bg-table-01 2 - 3 semanas a 10 °C y 90 % HR (volteo diario, frotar con salmuera); luego 2 - 3 meses a 16 °C y 82 % HR; finalmente 4 - 12 meses a 13 °C
                    td.text-start.bg-table-01 Fase cálida para desarrollo de ojos
          div(titulo="Queso Parmesano")
            p.mb-4 Queso italiano de pasta dura, utilizado principalmente rallado. Maduración de 1 a 2 años. Tiene bajo contenido de humedad y se elabora con leche parcialmente desnatada.
            .titulo-sexto.color-acento-contenido
              h5 Tabla 15.
              |  Especificaciones para la elaboración de queso Parmesano 
            .tabla-a.mb-5
              table
                caption 
                  p.mb-0 Nota. SENA, (2026).
                thead
                  tr
                    th.col-auto.col-lg-auto Etapa
                    th.col-auto.col-lg-auto Parámetro / Especificación
                    th.col-auto.col-lg-auto Detalles técnicos
                tbody
                  tr
                    td.text-start.bg-table-01 Leche
                    td.text-start.bg-table-01 Estandarizar a 2,5 % de grasa
                    td.text-start.bg-table-01 Leche semidesnatada
                  tr
                    td.text-start.bg-table-01 Pasteurización
                    td.text-start.bg-table-01 72 °C durante 15 segundos
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Enfriamiento
                    td.text-start.bg-table-01 32 °C
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Acidificación
                    td.text-start.bg-table-01 0,75 % de <em>L. helveticus</em> + 0,75 % de <em>S. lactis</em> y <em>L. casei</em>
                    td.text-start.bg-table-01 Cultivos termófilos y mesófilos
                  tr
                    td.text-start.bg-table-01 Reposo
                    td.text-start.bg-table-01 15 - 30 minutos
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Adición de cuajo
                    td.text-start.bg-table-01 23 mL de cuajo 10000 por 100 L
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Coagulación
                    td.text-start.bg-table-01 20 - 30 minutos
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Corte
                    td.text-start.bg-table-01 Grano de 0,6 cm
                    td.text-start.bg-table-01 Corte fino.
                  tr
                    td.text-start.bg-table-01 Reposo
                    td.text-start.bg-table-01 30 minutos
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Ajuste de temperatura
                    td.text-start.bg-table-01 Elevar a 50 °C en 60 minutos, mantener hasta 0,15 % de acidez
                    td.text-start.bg-table-01 Cocción alta
                  tr
                    td.text-start.bg-table-01 Desuerado
                    td.text-start.bg-table-01 Escurrir suero y vaciar en moldes
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Moldeado
                    td.text-start.bg-table-01 Moldes con muselina impregnada en salmuera
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Prensado
                    td.text-start.bg-table-01 30 minutos, luego 15 horas con presión creciente
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Secado
                    td.text-start.bg-table-01 1 2 días a 20 °C, volteos frecuentes
                    td.text-start.bg-table-01 –
                  tr
                    td.text-start.bg-table-01 Salado
                    td.text-start.bg-table-01 Salmuera al 23 % durante 28 días, volteo diario
                    td.text-start.bg-table-01 Salado prolongado
                  tr
                    td.text-start.bg-table-01 Maduración
                    td.text-start.bg-table-01 15 °C, voltear y frotar con aceite vegetal cada semana; al perder 15 % del peso, encerar o envasar al vacío; maduración total hasta 2 años
                    td.text-start.bg-table-01 –
      

    Separador

    #t_6_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.4 Quesos hilados y especiales
    .mb-0 

    p.mb-5(data-aos="flip-left") Los quesos hilados y especiales comprenden un grupo de productos lácteos que se caracterizan por técnicas de elaboración particulares que les confieren propiedades únicas en textura, sabor y apariencia.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.mb-3(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema6/img_7.png')
      
      .col-12.order-2.order-lg-1.mb-0
        .tarjeta.color-acento-contenido-10.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
          h5.mb-4 Queso Mozzarella
          p.mb-4 Queso de pasta hilada, originario de Italia, con alta humedad y textura elástica. Se consume fresco o en pizzas. Su proceso incluye una etapa de hilado en agua caliente.
          .titulo-sexto.color-acento-contenido
            h5 Tabla 16.
            |  Especificaciones para la elaboración de queso Mozzarella 
          .tabla-a.mb-5
            table
              caption 
                p.mb-0 Nota. SENA, (2026).
              thead
                tr
                  th.col-auto.col-lg-auto Etapa
                  th.col-auto.col-lg-auto Parámetro / Especificación
                  th.col-auto.col-lg-auto Detalles técnicos
              tbody
                tr
                  td.text-start.bg-table-01 Leche
                  td.text-start.bg-table-01 Grasa 3,3 – 3,5 %; estandarizar a 3 %
                  td.text-start.bg-table-01 –
                tr
                  td.text-start.bg-table-01 Pasteurización
                  td.text-start.bg-table-01 72 °C durante 15 segundos
                  td.text-start.bg-table-01 –
                tr
                  td.text-start.bg-table-01 Enfriamiento
                  td.text-start.bg-table-01 32 °C
                  td.text-start.bg-table-01 –
                tr
                  td.text-start.bg-table-01 Acidificación
                  td.text-start.bg-table-01 0,05 % de cultivo (<em>S. cremoris, S. lactis</em>)
                  td.text-start.bg-table-01 Baja dosis
                tr
                  td.text-start.bg-table-01 Adición de cuajo
                  td.text-start.bg-table-01 24 mL de cuajo 10000 por 100 L
                  td.text-start.bg-table-01 –
                tr
                  td.text-start.bg-table-01 Coagulación
                  td.text-start.bg-table-01 20 - 30 minutos
                  td.text-start.bg-table-01 –
                tr
                  td.text-start.bg-table-01 Corte
                  td.text-start.bg-table-01 Grano de 1,75 cm
                  td.text-start.bg-table-01 Corte grueso
                tr
                  td.text-start.bg-table-01 Agitación
                  td.text-start.bg-table-01 15 minutos, agitando 3 veces
                  td.text-start.bg-table-01 –
                tr
                  td.text-start.bg-table-01 Desuerado
                  td.text-start.bg-table-01 Mover con rastrillo y apretar cuajada
                  td.text-start.bg-table-01 –
                tr
                  td.text-start.bg-table-01 Corte en cubos
                  td.text-start.bg-table-01 Cubos de 15 cm
                  td.text-start.bg-table-01 –
                tr
                  td.text-start.bg-table-01 Enjuague
                  td.text-start.bg-table-01 Sumergir en agua fría 15 minutos, escurrir
                  td.text-start.bg-table-01 –
                tr
                  td.text-start.bg-table-01 Envolver y almacenar
                  td.text-start.bg-table-01 En tela quesera por porciones de 25 kg, cuarto fresco hasta pH 5,3
                  td.text-start.bg-table-01 Fermentación hasta pH adecuado
                tr
                  td.text-start.bg-table-01 Corte y calentamiento
                  td.text-start.bg-table-01 Cortar en cubos, sumergir en agua a 82 °C (1 L agua por 2 kg cuajada)
                  td.text-start.bg-table-01 –
                tr
                  td.text-start.bg-table-01 Amasado
                  td.text-start.bg-table-01 Cuando alcance 58 °C, amasar hasta obtener masa plástica
                  td.text-start.bg-table-01 Se hila
                tr
                  td.text-start.bg-table-01 Porcionado
                  td.text-start.bg-table-01 Formar bolas de 250 g, sumergir en agua fría
                  td.text-start.bg-table-01 Enfriado rápido
                tr
                  td.text-start.bg-table-01 Salado
                  td.text-start.bg-table-01 Salmuera al 23 % durante 2 horas
                  td.text-start.bg-table-01 –
                tr
                  td.text-start.bg-table-01 Secado y envasado
                  td.text-start.bg-table-01 Secar, envasar en papel pergamino o bolsas de plástico
                  td.text-start.bg-table-01 –
                tr
                  td.text-start.bg-table-01 Almacenamiento
                  td.text-start.bg-table-01 Refrigeración a 4 °C
                  td.text-start.bg-table-01 –
      
</template>

<script>
export default {
  name: 'Tema6',
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
