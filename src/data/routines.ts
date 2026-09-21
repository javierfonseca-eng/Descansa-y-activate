import { PauseRoutine } from '../types';

export const HUV_ROUTINES: PauseRoutine[] = [
  {
    id: 'lumbar',
    name: 'Descompresión Lumbar y Piernas',
    shortTag: 'Postura y Espalda',
    targetRole: 'Atención de partos de pie y traslados',
    benefit: 'Alivia la compresión discal y reactiva la circulación en miembros inferiores.',
    recommendedFor: 'Después de atender expulsivos prolongados o cirugías ginecológicas.',
    totalDurationSeconds: 120,
    colorTheme: {
      badge: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      bgHover: 'hover:border-emerald-500 hover:bg-emerald-50/40',
      ring: 'focus:ring-emerald-500',
      accent: 'text-emerald-700',
      gradient: 'from-emerald-600 to-teal-700',
    },
    steps: [
      {
        id: 'lum-1',
        title: '1. Basculación Pélvica y Extensión Suave',
        durationSeconds: 30,
        instruction: 'De pie, apoya las manos en la cintura o en la barra de la camilla. Inhala suave y lleva la pelvis levemente al frente arqueando con suavidad la zona lumbar.',
        clinicalTip: 'Disminuye la presión intradiscal tras posturas de flexión mantenida.',
        keyAction: 'Mantén las rodillas microflexionadas y no fuerces el arco.',
        iconName: 'Activity',
        visualGraphic: 'lumbar_stretch'
      },
      {
        id: 'lum-2',
        title: '2. Elevación de Talones (Bomba Gemelar)',
        durationSeconds: 30,
        instruction: 'Ponte de puntillas sosteniendo 2 segundos arriba y desciende lento tocando talones. Repite a ritmo constante.',
        clinicalTip: 'Activa la bomba muscular de la pantorrilla, acelerando el retorno venoso y previniendo várices.',
        keyAction: '12 a 15 elevaciones suaves y controladas.',
        iconName: 'TrendingUp',
        visualGraphic: 'calf_raise'
      },
      {
        id: 'lum-3',
        title: '3. Elongación de Pantorrilla e Isquiotibiales',
        durationSeconds: 30,
        instruction: 'Apoya las manos en la pared. Da un paso atrás con una pierna, manteniendo el talón pegado al suelo (15s). Luego cambia de pierna (15s).',
        clinicalTip: 'Libera la tensión acumulada en la cadena posterior y el tendón de Aquiles.',
        keyAction: 'Siente el estiramiento en la pantorrilla trasera sin despegar el talón.',
        iconName: 'ArrowDownUp',
        visualGraphic: 'hamstring_wall'
      },
      {
        id: 'lum-4',
        title: '4. Descarga Alterna de Peso y Relajación',
        durationSeconds: 30,
        instruction: 'Flexiona suavemente una rodilla mientras apoyas el peso en la otra pierna, alternando como caminando en el puesto sin despegar la punta de los pies.',
        clinicalTip: 'Reequilibra el tono pélvico y oxigena la fascia lumbar.',
        keyAction: 'Respira hondo dejando caer los hombros flojos.',
        iconName: 'Footprints',
        visualGraphic: 'weight_shift'
      }
    ]
  },
  {
    id: 'cervical',
    name: 'Alivio Cervical y Escapular',
    shortTag: 'Cuello y Hombros',
    targetRole: 'Instrumentación, suturas e intervenciones',
    benefit: 'Desactiva contracturas en trapecios y cuello causadas por mirar hacia abajo continuamente.',
    recommendedFor: 'Al terminar episiorrafias, revisión de canal o instrumentalización.',
    totalDurationSeconds: 120,
    colorTheme: {
      badge: 'bg-teal-100 text-teal-800 border-teal-300',
      bgHover: 'hover:border-teal-500 hover:bg-teal-50/40',
      ring: 'focus:ring-teal-500',
      accent: 'text-teal-700',
      gradient: 'from-teal-600 to-cyan-700',
    },
    steps: [
      {
        id: 'cerv-1',
        title: '1. Inclinación Lateral de Cuello (Bilateral)',
        durationSeconds: 30,
        instruction: 'Inclina la oreja derecha hacia el hombro derecho sin subir el hombro. Mantén 15 segundos. Cambia suavemente hacia el lado izquierdo (15s).',
        clinicalTip: 'Elonga las fibras superiores del trapecio y el elevador de la escápula.',
        keyAction: 'No ejerzas tirones bruscos, usa solo el peso de la gravedad.',
        iconName: 'Move',
        visualGraphic: 'neck_tilt'
      },
      {
        id: 'cerv-2',
        title: '2. Retracción Escapular (Abrir Pecho)',
        durationSeconds: 30,
        instruction: 'Lleva los codos hacia atrás y junta los omóplatos como si sostuvieras un lápiz entre ellos. Mantén 4 segundos y relaja. Repite 5 veces.',
        clinicalTip: 'Contrarresta la cifosis dorsal por posturas encorvadas sobre la mesa ginecológica.',
        keyAction: 'Abre el pecho e inhala al juntar los omóplatos.',
        iconName: 'Shield',
        visualGraphic: 'shoulder_retract'
      },
      {
        id: 'cerv-3',
        title: '3. Circunducción de Hombros Amplia',
        durationSeconds: 30,
        instruction: 'Realiza círculos amplios con los hombros hacia atrás (15 segundos) y luego hacia adelante (15 segundos).',
        clinicalTip: 'Favorece la lubricación de la articulación glenohumeral y descontractura la cintura escapular.',
        keyAction: 'Movimientos lentos y coordinados con tu respiración.',
        iconName: 'RefreshCw',
        visualGraphic: 'shoulder_rolls'
      },
      {
        id: 'cerv-4',
        title: '4. Mentón al Pecho y Descompresión Occipital',
        durationSeconds: 30,
        instruction: 'Entrelaza suavemente las manos detrás de la nuca. Deja caer el mentón hacia el esternón sin forzar, solo con el peso de los brazos.',
        clinicalTip: 'Alivia los músculos suboccipitales que causan cefalea tensional por turnos nocturnos.',
        keyAction: 'Mantén la espalda recta mientras desciende solo la cabeza.',
        iconName: 'ArrowDown',
        visualGraphic: 'chin_tuck'
      }
    ]
  },
  {
    id: 'hands',
    name: 'Cuidado de Manos, Muñecas y Dedos',
    shortTag: 'Manos Clínicas',
    targetRole: 'Tactos obstétricos, canalizaciones y guantes',
    benefit: 'Previene el síndrome del túnel del carpo y tenosinovitis de De Quervain.',
    recommendedFor: 'Tras colocación repetida de guantes quirúrgicos, suturas y venopunciones.',
    totalDurationSeconds: 120,
    colorTheme: {
      badge: 'bg-sky-100 text-sky-800 border-sky-300',
      bgHover: 'hover:border-sky-500 hover:bg-sky-50/40',
      ring: 'focus:ring-sky-500',
      accent: 'text-sky-700',
      gradient: 'from-sky-600 to-blue-700',
    },
    steps: [
      {
        id: 'hnd-1',
        title: '1. Extensión de Flexores y Extensores',
        durationSeconds: 30,
        instruction: 'Extiende el brazo al frente con la palma hacia adelante y dedos hacia arriba; con la otra mano jala suavemente los dedos hacia atrás (15s). Luego invierte apuntando hacia abajo (15s).',
        clinicalTip: 'Descomprime el ligamento anular y el nervio mediano.',
        keyAction: 'Brazo bien extendido a la altura del pecho sin levantar el hombro.',
        iconName: 'Hand',
        visualGraphic: 'wrist_extension'
      },
      {
        id: 'hnd-2',
        title: '2. Apertura en Estrella y Puño Controlado',
        durationSeconds: 30,
        instruction: 'Abre al máximo los dedos separándolos con fuerza 3 segundos; luego cierra en puño apretando 2 segundos. Repite 6 veces.',
        clinicalTip: 'Mejora la circulación linfática distal y moviliza los tendones flexores profundos.',
        keyAction: 'Siente la apertura en los espacios interóseos de la mano.',
        iconName: 'Maximize2',
        visualGraphic: 'finger_spread'
      },
      {
        id: 'hnd-3',
        title: '3. Masaje Miofascial de Eminencia Tenar y Pulgar',
        durationSeconds: 30,
        instruction: 'Con el pulgar opuesto, realiza presión circular profunda en la base carnosa del pulgar (zona tenar) 15s por mano.',
        clinicalTip: 'Zona de altísima fatiga en personal asistencial por agarre de pinzas e instrumentos.',
        keyAction: 'Presión firme pero tolerable respirando pausadamente.',
        iconName: 'Sparkles',
        visualGraphic: 'thumb_massage'
      },
      {
        id: 'hnd-4',
        title: '4. Descarga y Sacudida Suave de Muñecas',
        durationSeconds: 30,
        instruction: 'Deja caer las manos relajadas al costado del cuerpo y sacúdelas suavemente como si salpicaras gotas de agua durante 30 segundos.',
        clinicalTip: 'Restaura el tono neuromuscular y elimina la rigidez isométrica.',
        keyAction: 'Brazos y hombros completamente sueltos.',
        iconName: 'Waves',
        visualGraphic: 'wrist_shake'
      }
    ]
  },
  {
    id: 'visual',
    name: 'Descanso Visual y Enfoque 20-20-20',
    shortTag: 'Higiene Visual',
    targetRole: 'Lectura de monitores fetales y pantallas',
    benefit: 'Combate la astenopía (fatiga ocular), sequedad y espasmo de acomodación.',
    recommendedFor: 'Tras largas horas frente al cardiotocógrafo, historias clínicas o luz blanca.',
    totalDurationSeconds: 120,
    colorTheme: {
      badge: 'bg-indigo-100 text-indigo-800 border-indigo-300',
      bgHover: 'hover:border-indigo-500 hover:bg-indigo-50/40',
      ring: 'focus:ring-indigo-500',
      accent: 'text-indigo-700',
      gradient: 'from-indigo-600 to-violet-700',
    },
    steps: [
      {
        id: 'vis-1',
        title: '1. Regla 20-20: Enfoque al Infinito',
        durationSeconds: 30,
        instruction: 'Retira la vista de la pantalla o monitor. Mira por la ventana o al punto más lejano del pasillo (>6 metros) sin forzar el enfoque.',
        clinicalTip: 'Relaja el músculo ciliar que permanece contraído durante la visión cercana.',
        keyAction: 'Parpadea de forma consciente y suave.',
        iconName: 'Eye',
        visualGraphic: 'rule_20_20'
      },
      {
        id: 'vis-2',
        title: '2. Movimientos Oculares en Ocho (∞)',
        durationSeconds: 30,
        instruction: 'Sin mover la cabeza, traza lentamente con tu mirada la figura de un 8 acostado imaginario a media distancia. 15s en un sentido, 15s en el otro.',
        clinicalTip: 'Moviliza y flexibiliza los 6 músculos extraoculares.',
        keyAction: 'Movimiento fluido y continuo, sin saltos bruscos.',
        iconName: 'RotateCw',
        visualGraphic: 'eye_roll'
      },
      {
        id: 'vis-3',
        title: '3. Palming (Oscuridad y Calor Óptico)',
        durationSeconds: 30,
        instruction: 'Frota las palmas de tus manos para generar calor. Cierra los ojos y apoya las palmas ahuecadas sobre las cuencas oculares sin presionar el globo ocular.',
        clinicalTip: 'La oscuridad absoluta y el calor tenue permiten la regeneración de la rodopsina retiniana.',
        keyAction: 'Disfruta la penumbra total y respira lento.',
        iconName: 'SunDim',
        visualGraphic: 'palming'
      },
      {
        id: 'vis-4',
        title: '4. Drenaje en Sienes y Arco Superciliar',
        durationSeconds: 30,
        instruction: 'Con las yemas de los dedos índices y medios, haz pequeños círculos suaves sobre las sienes y luego desliza sobre las cejas hacia afuera.',
        clinicalTip: 'Alivia la tensión del músculo frontal y estimula la microcirculación periocular.',
        keyAction: 'Presión muy suave, sincronizada con tu exhalación.',
        iconName: 'Smile',
        visualGraphic: 'temple_massage'
      }
    ]
  },
  {
    id: 'breathing',
    name: 'Respiración Guiada 4-4-6 (Calma Obstétrica)',
    shortTag: 'Anti-estrés y Regulación',
    targetRole: 'Todo el equipo de guardia y partos',
    benefit: 'Reduce el cortisol y activa el tono vagal parasimpático tras momentos de alta tensión.',
    recommendedFor: 'Posterior a emergencias obstétricas (código rojo, distocias) o cambio de turno.',
    totalDurationSeconds: 120,
    colorTheme: {
      badge: 'bg-rose-100 text-rose-800 border-rose-300',
      bgHover: 'hover:border-rose-500 hover:bg-rose-50/40',
      ring: 'focus:ring-rose-500',
      accent: 'text-rose-700',
      gradient: 'from-rose-600 to-pink-700',
    },
    steps: [
      {
        id: 'resp-1',
        title: 'Ciclo 1 y 2: Anclaje y Vaciado',
        durationSeconds: 30,
        instruction: 'Inhala en 4 segundos por la nariz llenando el abdomen. Retén el aire 4 segundos con serenidad. Exhala despacio por la boca en 6 segundos. Pausa 1s.',
        clinicalTip: 'La exhalación prolongada estimula el nervio vago, reduciendo la frecuencia cardíaca.',
        keyAction: 'Siente cómo se expande el diafragma y se relaja la mandíbula.',
        iconName: 'HeartPulse',
        visualGraphic: 'box_breathing'
      },
      {
        id: 'resp-2',
        title: 'Ciclo 3 y 4: Descompresión de Hombros',
        durationSeconds: 30,
        instruction: 'Inhala en 4s... Sostén 4s... Exhala en 6s soltando cualquier tensión en tu pecho y espalda. Deja ir la sobrecarga del turno.',
        clinicalTip: 'El personal obstétrico acumula tensión diafragmática en situaciones críticas.',
        keyAction: 'Permite que cada exhalación sea más suave y silenciosa.',
        iconName: 'Feather',
        visualGraphic: 'box_breathing'
      },
      {
        id: 'resp-3',
        title: 'Ciclo 5 y 6: Claridad y Enfoque',
        durationSeconds: 30,
        instruction: 'Inhala aire fresco en 4s... Sostén en 4s... Exhala en 6s. Nota cómo disminuye la agitación mental y se aclara tu foco.',
        clinicalTip: 'Optimiza la oxigenación cerebral para una toma de decisiones clínicas asertiva.',
        keyAction: 'Mantén una postura erguida pero no rígida.',
        iconName: 'Wind',
        visualGraphic: 'box_breathing'
      },
      {
        id: 'resp-4',
        title: 'Ciclo 7 y 8: Retorno Sereno al Turno',
        durationSeconds: 30,
        instruction: 'Últimos dos ciclos: Inhala 4s... Sostén 4s... Exhala largo 6s. Reconoce el gran valor de tu labor cuidando a las madres y recién nacidos del HUV.',
        clinicalTip: 'El anclaje emocional positivo previene el síndrome de burnout asistencial.',
        keyAction: 'Abre suavemente los ojos con sensación de renovación y calma.',
        iconName: 'Sparkles',
        visualGraphic: 'box_breathing'
      }
    ]
  }
];
