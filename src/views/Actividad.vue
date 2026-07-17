<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos clave del componente (composición de la leche, calidad, aditivos, proceso de queso y variedades) mediante un cuestionario con retroalimentación breve.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el porcentaje aproximado de agua en la composición de la leche?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '75,0 %', esCorrecta: false },
            { id: 'b', texto: '80,5 %', esCorrecta: false },
            { id: 'c', texto: '87,5 %', esCorrecta: true },
            { id: 'd', texto: '92,0 %', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. El agua es el componente mayoritario de la leche, constituyendo cerca del 87,5 % de su composición total.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué porcentaje de las proteínas de la leche representa la caseína?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '20 %', esCorrecta: false },
            { id: 'b', texto: '40 %', esCorrecta: false },
            { id: 'c', texto: '60 %', esCorrecta: false },
            { id: 'd', texto: '80 %', esCorrecta: true },
          ],
          mensaje_correcto:
            'Muy bien. La caseína es el 80 % de las proteínas de la leche; el 20 % restante corresponde a las seroproteínas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué ocurre con la densidad de la leche cuando se le adiciona agua?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aumenta.', esCorrecta: false },
            { id: 'b', texto: 'Disminuye.', esCorrecta: true },
            { id: 'c', texto: 'Permanece igual.', esCorrecta: false },
            { id: 'd', texto: 'Se duplica.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Por eso la crioscopia y la medición de densidad son pruebas clave para detectar adulteración con agua.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué indica una prueba de alcohol positiva (coagulación) en la leche?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Leche con baja acidez.', esCorrecta: false },
            { id: 'b', texto: 'Leche con alta acidez.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Leche con alto contenido de grasa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Leche con presencia de antibióticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Exacto. La coagulación al mezclar con alcohol al 68-72 % se produce cuando la acidez de la leche es elevada.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cómo afectan los antibióticos presentes en la leche la elaboración de queso?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No afectan, la elaboración de queso es normal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejoran la coagulación y aceleran el proceso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Inhiben el desarrollo de los cultivos lácticos, impidiendo la acidificación necesaria para la coagulación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumentan el rendimiento del queso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Los antibióticos inhiben el desarrollo de los cultivos lácticos, impidiendo la acidificación necesaria para la coagulación.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Para qué se añade cloruro de calcio en la elaboración de queso con leche pasteurizada?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Para endulzar la leche.', esCorrecta: false },
            {
              id: 'b',
              texto:
                'Para mejorar la coagulación, compensando la pérdida de calcio durante la pasteurización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Para dar color amarillo al queso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para inhibir el crecimiento de bacterias indeseables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. Compensa la pérdida de calcio durante la pasteurización y mejora la formación del coágulo.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la función del nitrato de potasio en la elaboración de queso?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aportar sabor salado al queso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Inhibir bacterias indeseables (clostridios, coliformes) que causan hinchazón precoz y sabores anormales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Acelerar la coagulación de la leche.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dar textura cremosa al queso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Así es. Controla la hinchazón precoz y sabores anormales, aunque su uso está restringido.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la función de los estabilizantes como la carragenina en el yogur?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Endulzar el producto.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Aumentar el contenido proteico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Evitar la sinéresis (separación del suero) y mejorar la textura.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Acelerar la fermentación.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Exactamente. Mejoran la textura y retienen agua, evitando la separación del suero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la función del bicarbonato de sodio en la elaboración de arequipe?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Endulzar el producto final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Neutralizar la acidez de la leche para evitar que se corte durante la concentración.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Dar color dorado característico.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Actuar como conservante.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Neutraliza la acidez natural de la leche, permitiendo una cocción estable.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿En qué consiste la estandarización de la leche para la elaboración de queso?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ajustar la temperatura de la leche antes de la pasteurización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ajustar la relación grasa/proteína según el tipo de queso que se desea obtener.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Agregar cultivos lácticos a la leche.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar las bacterias patógenas de la leche.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. Cada queso requiere un contenido graso específico en el extracto seco.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿A qué temperatura se utilizan los cultivos lácticos termófilos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '10 - 15 °C.', esCorrecta: false },
            { id: 'b', texto: '20 - 25 °C.', esCorrecta: false },
            { id: 'c', texto: '30 - 32 °C.', esCorrecta: false },
            { id: 'd', texto: '40 - 45 °C.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto. Los cultivos termófilos se utilizan a temperaturas de 40 - 45 °C; los cultivos mesófilos trabajan a 30 - 32 °C.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cómo influye el tamaño de corte de la cuajada en la humedad final del queso?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Partículas grandes producen un queso más seco.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Partículas pequeñas producen un queso más húmedo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Partículas pequeñas desueran más rápido, dando un queso más firme y seco.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El tamaño de corte no influye en la humedad del queso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Partículas pequeñas desueran más rápido, dando un queso más firme y seco.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es la concentración típica de sal en la salmuera para el salado de quesos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '5 %', esCorrecta: false },
            { id: 'b', texto: '12 %', esCorrecta: false },
            { id: 'c', texto: '23 %', esCorrecta: true },
            { id: 'd', texto: '35 %', esCorrecta: false },
          ],
          mensaje_correcto:
            'Muy bien. La concentración del 23 % es la típica para la salmuera en la elaboración de quesos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Con qué moho se madura el queso Camembert en su superficie?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Penicillium roqueforti</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Penicillium camemberti</em>',
              esCorrecta: true,
            },
            { id: 'c', texto: '<em>Aspergillus niger</em>', esCorrecta: false },
            { id: 'd', texto: '<em>Mucor miehei</em>', esCorrecta: false },
          ],
          mensaje_correcto:
            'Exacto. El moho Penicillium camemberti forma la corteza blanca característica del Camembert y contribuye a su sabor.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué etapa especial caracteriza el proceso de elaboración del queso <em>Cheddar</em>?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La adición de moho azul.', esCorrecta: false },
            {
              id: 'b',
              texto: 'El lavado de la cuajada con agua caliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La cheddarización (apilado de bloques de cuajada que se voltean periódicamente).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La maduración en cuevas de sal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Así es. La etapa de cheddarización (apilado de bloques) desarrolla la textura y el sabor típico del <em>Cheddar</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿El queso Gruyere forma ojos (huecos) durante la maduración?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No, el Gruyere es un queso sin ojos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sí, forma ojos gracias a la producción de gas por <em>Propionibacterium shermanii</em>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sí, pero solo si se añade bicarbonato.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No, los ojos son exclusivos del queso <em>Cheddar</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El queso Gruyere forma ojos gracias a la producción de gas por <em>Propionibacterium shermanii</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿A qué categoría de quesos pertenece la mozzarella?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Quesos de pasta blanda con moho superficial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Quesos de pasta dura madurados.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Quesos de pasta hilada.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Quesos frescos sin maduración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. La mozzarella pertenece a los quesos de pasta hilada; se estira y amasa en caliente para obtener su textura elástica.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Cuánto tiempo se madura el queso Parmesano como mínimo?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '1 mes.', esCorrecta: false },
            { id: 'b', texto: '3 meses.', esCorrecta: false },
            { id: 'c', texto: '6 meses.', esCorrecta: false },
            { id: 'd', texto: '1 año.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Así es. El queso Parmesano se madura al menos 1 año, pudiendo durar hasta 2 años, desarrollando un sabor intenso.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿La cuajada es un queso madurado?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sí, requiere al menos 30 días de maduración.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sí, pero solo si se añaden cultivos especiales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'No, es un queso fresco, sin maduración, de consumo inmediato.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'No, la cuajada no es un queso, es un subproducto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Exacto. La cuajada es un queso fresco, sin maduración, de consumo inmediato.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Cómo se elabora el queso fundido (procesado)?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente con leche pasteurizada sin añadir otros ingredientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mediante la fusión y emulsión de una o más variedades de quesos madurados, con sales emulsionantes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Exclusivamente con suero de leche concentrado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Por fermentación natural sin adición de cultivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Perfecto. Los quesos fundidos o procesados se obtienen calentando quesos madurados con sales emulsionantes, lo que permite obtener una textura homogénea y prolongar su vida útil.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
