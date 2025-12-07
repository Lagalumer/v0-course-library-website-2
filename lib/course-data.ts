export interface Lesson {
  id: string
  title: string
  duration: string
  completed: boolean
  topics: string[]
  content: {
    sections: {
      title: string
      content: string[]
      subsections?: {
        title: string
        content: string[]
      }[]
      list?: string[]
      highlight?: string
    }[]
  }
}

export interface Module {
  id: number
  title: string
  lessons: Lesson[]
}

export interface Course {
  id: string
  title: string
  description: string
  totalLessons: number
  completedLessons: number
  modules: Module[]
}

export const courseData: Course = {
  id: "marca-personal",
  title: "Curso Completo de Marca Personal",
  description:
    "Domina las redes sociales, crea contenido viral y monetiza tu marca personal con estrategias probadas que han generado millones de visitas.",
  totalLessons: 16,
  completedLessons: 0,
  modules: [
    {
      id: 1,
      title: "Fundamentos de la Viralidad en Redes Sociales",
      lessons: [
        {
          id: "1-1",
          title: "Cómo funcionan las redes sociales",
          duration: "35:00",
          completed: false,
          topics: [
            "Instagram es entretenimiento: los usuarios buscan estímulo y dopamina",
            "La fórmula de éxito: mezcla de valor y entretenimiento",
            "Qué es el RI (Ratio de Interés) y cómo funciona el algoritmo",
            "El umbral del RI: cómo escalar contenido de 1,000 a millones",
            "Progresión Concéntrica (APC): cómo el algoritmo escala tu contenido",
            "Por qué los compartidos son la interacción más valiosa",
          ],
          content: {
            sections: [
              {
                title: "Instagram es, ante todo, entretenimiento",
                content: [
                  "La realidad inmutable que debes entender es que Instagram no es una plataforma creada para que la gente aprenda.",
                ],
                subsections: [
                  {
                    title: "La Predisposición del Usuario",
                    content: [
                      "Los usuarios entran a Instagram o TikTok buscando estímulo y dopamina, no un contenido técnico o una clase. Entran en momentos en los que están aburridos o necesitan estímulo que no están recibiendo en su vida normal (ej., mientras están en el baño o calentando comida).",
                    ],
                  },
                  {
                    title: "El Foco Esencial",
                    content: [
                      "El contenido que esperan consumir es el que los entretenga más que su vida presente en ese momento. Por lo tanto, el enfoque de tu contenido, sin importar tu nicho (salud, entrenamiento, psicología, dinero), tiene que ser cómo entretener a esa persona.",
                    ],
                  },
                  {
                    title: "La Fórmula de Éxito",
                    content: [
                      "Si tú, como creador, solo aportas valor, no se quedarán. La fórmula para un contenido viral debe ser una mezcla de valor y entretenimiento. Si bien el valor es importante, la clave para crecer en redes sociales es generar dopamina a las personas, más que la media de los vídeos que hay sobre un tema similar.",
                    ],
                  },
                  {
                    title: "El Riesgo del Valor Puro",
                    content: [
                      "Si un usuario entra a entretenerse y tú le muestras un contenido muy técnico y de valor, pero cero entretenido, simplemente deslizará porque no estaba predispuesto a verlo. Esto es un error común que cometen los expertos: confunden el valor técnico con una idea ganadora.",
                    ],
                  },
                ],
              },
              {
                title: "Qué es el RI (Ratio de Interés)",
                content: [
                  "El Ratio de Interés (RI) es la métrica más importante en el algoritmo de Instagram y TikTok.",
                ],
                subsections: [
                  {
                    title: "Definición",
                    content: [
                      "El RI es la relación entre la cantidad de personas a las que se les muestra tu contenido y la cantidad de personas a las que genuinamente les gusta.",
                    ],
                  },
                  {
                    title: "El Objetivo Algorítmico",
                    content: [
                      "El único objetivo de Instagram es ganar dinero. Gana dinero al poner anuncios. Por lo tanto, el algoritmo funciona como un sistema de recomendación que siempre está comparando un video con otro, apostando por el contenido que sea más rentable seguir mostrando.",
                    ],
                  },
                  {
                    title: "La Apuesta de Instagram",
                    content: [
                      "Cada vez que el algoritmo enseña un video, está haciendo una apuesta. Si el video no gusta, corre el riesgo de que la persona se salga de la plataforma, lo que significa menos tiempo de visualización y menos oportunidades de poner anuncios.",
                    ],
                  },
                ],
                list: [
                  "Si un video se muestra a 1,000 personas y le gusta solo a 300, el RI es del 30%, lo cual es demasiado bajo, y el algoritmo no lo recomendará.",
                  "Si se muestra a 1,000 personas y le gusta a 800, el RI es del 80%, y el video se escalará a más audiencia.",
                  "La única forma de que cualquier contenido dentro de Instagram se haga viral es que mantenga un RI mayor a la media en ese momento.",
                ],
              },
              {
                title: "Progresión Concéntrica (APC)",
                content: [
                  "Si el video supera el RI inicial, el algoritmo lo escala progresivamente. Primero se lo muestra a un pequeño grupo, luego a un grupo de 10,000, luego de 100,000, y así sucesivamente.",
                ],
                highlight:
                  "La interacción que más le importa a Instagram son los compartidos, ya que obligan a personas de otras plataformas (como WhatsApp o Telegram) a entrar a Instagram, aumentando la base de usuarios activos.",
              },
              {
                title: "Por qué tu contenido no crece aunque publiques todos los días",
                content: [
                  "Este es un error crítico y multifactorial que la mayoría de los creadores cometen, basado en creencias obsoletas.",
                ],
                subsections: [
                  {
                    title: "1. La Idea No Es Ganadora (El Fallo Fundamental)",
                    content: [
                      "La razón principal por la que tu video no funciona es porque no es una idea ganadora. La producción, la edición y el mejor gancho no sirven de absolutamente nada si la idea es mala.",
                      "El 99% de las ideas que se publican son 'simples ideas' y solo el 1% son ideas ganadoras que se vuelven virales.",
                    ],
                  },
                  {
                    title: "2. Canibalismo de Contenido (Publicar Demasiado)",
                    content: [
                      "El consejo de los antiguos gurús de publicar 5, 8 o 20 videos a la semana es lo peor que puedes hacer.",
                      "Al publicar mucho, la calidad media de cada video individualmente disminuye.",
                      "Se produce el canibalismo: el algoritmo no sabe qué contenido mostrar, y toda tu fuerza de audiencia se divide en varios videos.",
                      "La Regla del 80/20: Solo el 10% del contenido va a atraer el 90% de las visitas. Por lo tanto, más videos no es mejor; mejores videos es mejor.",
                      "La frecuencia estándar recomendada es entre dos a cuatro videos semanales.",
                    ],
                  },
                  {
                    title: "3. Cuenta Intoxicada (Malas Acciones Pasadas)",
                    content: [
                      "Una cuenta intoxicada es un perfil que ha cometido errores que la han dañado, haciendo que el algoritmo deje de recomendar su contenido.",
                    ],
                  },
                ],
                list: [
                  "Comprar Seguidores: Inyecta bots o personas sin interés, haciendo que el RI de los videos sea bajísimo.",
                  "Hacer Demasiados Anuncios: Forzar el contenido a gente que no está interesada reduce el RI. Solo el 20% de tu crecimiento debe venir de anuncios.",
                  "Publicar Mal Contenido Repetidamente: Si publicas contenido con mal gancho durante un tiempo prolongado, tus seguidores dejan de interactuar.",
                ],
                highlight:
                  "Si tienes menos del 5% de views en tus historias en relación con tu número de seguidores, tu cuenta está muy intoxicada. Si tienes menos del 30% de visualizaciones en Reels con respecto a tus seguidores, tu cuenta está muy jodida.",
              },
              {
                title: "4. Foco en Métricas Irrelevantes",
                content: [
                  "Mucha gente pierde tiempo preocupándose por hashtags, texto en la descripción o la hora de publicación.",
                  "Si el video es genuinamente bueno, la hora de publicación da exactamente igual. Lo único que importa es la calidad del contenido para que Instagram lo recomiende.",
                ],
              },
            ],
          },
        },
        {
          id: "1-2",
          title: "Elegir tu sector",
          duration: "40:00",
          completed: false,
          topics: [
            "La fórmula SSDD: Sexo, Salud, Dinero y Desarrollo Personal",
            "Nicho vs. Sector: diferencias reales y cómo elegir",
            "Cómo encontrar tu sector ideal según tu producto",
            "Tu voz y estilo como creador (branding personal)",
            "El Umbral Mínimo de Viralidad (UMV)",
            "Cómo encontrar el punto medio entre contenido nicho y general",
          ],
          content: {
            sections: [
              {
                title: "Sectores principales: la fórmula SSDD",
                content: [
                  "Para que cualquier contenido se haga viral en redes sociales, debe estar dentro de uno de los cuatro sectores fundamentales del interés humano. Estos son los cuatro deseos básicos que rigen todas las acciones humanas:",
                ],
                subsections: [
                  {
                    title: "Sector Sexo/Relaciones (S)",
                    content: [
                      "Este es un deseo primario del ser humano enfocado en la reproducción y la perpetuación de la especie.",
                      "Nichos relacionados: Seducción, relaciones de pareja, sexología, relaciones sociales, belleza.",
                    ],
                  },
                  {
                    title: "Sector Salud (S)",
                    content: [
                      "El deseo de vivir más y estar mejor, y mantenerse saludable.",
                      "Nichos relacionados: Salud mental, fitness, nutrición, running, dolores, pérdida de peso.",
                    ],
                  },
                  {
                    title: "Sector Dinero (D)",
                    content: [
                      "El deseo de acumular recursos, que es necesario para comprar comida, pagar una casa, ropa y tener una vida más cómoda en la sociedad capitalista.",
                      "Nichos relacionados: Cómo ganar dinero, finanzas personales, emprendimiento, inversiones, apuestas. Es el sector más grande y más fuerte que más dinero mueve y más atención tiene.",
                    ],
                  },
                  {
                    title: "Sector Desarrollo Personal (D) / Dios",
                    content: [
                      "El deseo de ser feliz y la búsqueda del desarrollo personal en todas sus versiones, incluida la religión o la espiritualidad.",
                    ],
                  },
                ],
              },
              {
                title: "Nicho vs. Sector: diferencias reales",
                content: [
                  "Debes diferenciar entre tu nicho específico (el pequeño círculo) y el sector amplio (el círculo grande).",
                ],
                subsections: [
                  {
                    title: "Nicho (Círculo Pequeño)",
                    content: [
                      "Es el tema muy concreto, específico y cerrado al que te dedicas.",
                      "Problema del Nicho: Si el contenido es demasiado nicho y técnico (ej., 'cómo los adipocitos afectan a la movilización de la grasa en el cuerpo'), tiene un volumen de audiencia tan reducido que, aunque sea muy valioso, el algoritmo no lo recomendará porque el Ratio de Interés (RI) será muy bajo.",
                    ],
                  },
                  {
                    title: "Sector (Círculo Grande)",
                    content: [
                      "Es el deseo principal y universal (SSDD) en el que se enmarca tu nicho. Es lo suficientemente amplio para atraer a una audiencia masiva.",
                      "Problema del Sector: Si el contenido es demasiado general (ej., noticias, clima, humor), aunque se viralice, no hay ningún filtro hacia el cliente ideal que pueda comprar tu producto.",
                    ],
                  },
                ],
                highlight:
                  "La Zona de Convergencia Viral: La clave es hacer un contenido que sea de sector y no de nicho. Tienes que crear un contenido que sea lo suficientemente amplio para atraer audiencia masiva, y luego, dentro de ese video, dar un pequeño porcentaje de contenido nicho que filtre al cliente ideal hacia tu embudo.",
              },
              {
                title: "Cómo encontrar tu sector ideal",
                content: ["Tu producto o servicio siempre debe anclarse a uno de los deseos básicos (SSDD)."],
                list: [
                  "Agente Inmobiliario (Nicho): Lo que vendes es una oportunidad de inversión en vivienda, lo cual se relaciona con el sector Dinero.",
                  "Asesoría de Imagen (Nicho): Aunque parezca que es solo de ropa, se asocia al sector Sexo, ya que al verse más atractivo, aumenta la tasa de reproducción.",
                  "Trading/Inversión (Nicho): La gente no quiere saber sobre índices o rentabilidades, quiere saber sobre Ganar Dinero.",
                ],
                highlight:
                  "Lenguaje Simple: Tienes que bajar tu nivel de conciencia como experto y comunicarte con la audiencia en los términos más simples posibles. La gente no habla sobre 'déficit calórico', sino sobre 'perder peso'.",
              },
              {
                title: "Tu 'voz' y 'estilo' como creador (branding)",
                content: [
                  "El personaje de marca es clave porque la gente prefiere comprarle a personas que a empresas con logos. La clave es la congruencia.",
                ],
                subsections: [
                  {
                    title: "Principio de Congruencia de Marca",
                    content: [
                      "Tienes que ser el resultado que vendes para después enseñar.",
                      "Si vendes crecimiento en redes, tienes que mostrar cientos de miles de seguidores.",
                      "Si vendes un buen físico, debes tener un buen físico.",
                      "Si vendes riqueza, debes demostrar que te va bien económicamente.",
                    ],
                  },
                  {
                    title: "Autoridad",
                    content: [
                      "Tienes que demostrar que eres una autoridad irrefutable en tu campo, mostrando tus resultados o los de tus clientes.",
                    ],
                  },
                  {
                    title: "Memorable y Único",
                    content: [
                      "Tu personaje debe ser algo memorable que se distinga del resto.",
                      "Utiliza frases que te caractericen (como el 'todo o nada'), o un estilo de vestir muy característico.",
                      "Usa objetos representativos de tu marca, como puros en los videos.",
                    ],
                  },
                  {
                    title: "Energía y Comunicación",
                    content: [
                      "Debes usar una alta energía en tu comunicación.",
                      "Juega con las emociones dentro del video, hablando alto, luego bajito, rápido, luego lento, para provocar picos emocionales.",
                      "Utiliza tu forma de hablar genuina, sin miedo a palabras fuertes, porque eso hace que te recuerden.",
                    ],
                  },
                ],
              },
              {
                title: "Qué es el Umbral Mínimo de Viralidad (UMV)",
                content: ["El UMV es el secreto detrás del crecimiento exponencial."],
                subsections: [
                  {
                    title: "Definición",
                    content: [
                      "Es el punto exacto, la línea invisible, en el triángulo invertido donde el contenido es lo suficientemente atractivo para una audiencia masiva, pero sin alejarse de tu tema principal.",
                    ],
                  },
                  {
                    title: "Triángulo Invertido",
                    content: [
                      "En la punta estrecha está el contenido nicho (RI bajo). En la base ancha está el contenido general (viral, pero no cualificado). El UMV es el punto medio que tienes que encontrar.",
                    ],
                  },
                  {
                    title: "Encontrar el UMV",
                    content: [
                      "No se encuentra adivinando; se encuentra probando contenido.",
                      "Debes crear series de videos que se acerquen a lo muy nicho (Bloque 1), otras en un punto intermedio (Bloque 2) y algunas más generales (Bloque 3).",
                      "Luego, analiza las métricas de esos videos para ver cuáles tienen mayor RI.",
                    ],
                  },
                ],
                highlight:
                  "La Mentalidad Correcta: No vas a hacer un video que le guste solamente a los de tu nicho; vas a hacer un video que le guste a la mayoría de la gente y luego los vas a llevar a tu nicho.",
              },
            ],
          },
        },
      ],
    },
    {
      id: 2,
      title: "Psicología del Consumidor y Técnicas de Retención",
      lessons: [
        {
          id: "2-1",
          title: "Cómo atrapar la atención en menos de un segundo",
          duration: "45:00",
          completed: false,
          topics: [
            "Los usuarios deciden en 0.6 segundos si tu video les gusta",
            "La regla 80/20: enfoca el 80% del esfuerzo en los primeros 5 segundos",
            "Gancho Brecha de Curiosidad (Curiosity Gap)",
            "Gancho Contracorriente: ir contra la creencia popular",
            "Gancho Regla de Tres y Gancho Reto/Ego",
            "Gancho Hoyo (Delay), Cotilla y Objetos Incongruentes",
            "Ganchos de Promesa Tangible y Pregunta Incómoda",
          ],
          content: {
            sections: [
              {
                title: "Qué hace que alguien haga scroll o se quede viendo tu video",
                content: [
                  "El principio fundamental que rige el éxito de tu contenido es el siguiente: Instagram es, ante todo, entretenimiento. La gente entra buscando estímulo y dopamina, y tu contenido debe generar más dopamina que la media de los videos de tu competencia.",
                ],
                subsections: [
                  {
                    title: "El Tiempo Decisivo",
                    content: [
                      "Los usuarios de Instagram y TikTok tardan de media solo 0.6 segundos en decidir si un video les gusta o no. Este tiempo es incluso peor que los 3 segundos que se manejaban anteriormente.",
                    ],
                  },
                  {
                    title: "El Gancho (Hook)",
                    content: [
                      "El gancho es lo que dices o haces al principio del video para obligar a la persona a detenerse y escuchar tu contenido.",
                      "Si no consigues convencer a la persona en esos primeros 0.6 segundos, simplemente hará swipe up y no verá tu video.",
                      "Prioridad: El gancho es lo más importante para que cualquier video funcione.",
                    ],
                  },
                ],
                highlight:
                  "La Regla 80/20 del Esfuerzo: El 80% de tu esfuerzo, ganas y tiempo debe estar enfocado en el 20% del video, que son los primeros 5 segundos.",
              },
              {
                title: "Tipos de ganchos ganadores",
                content: [
                  "He desarrollado una metodología con más de 50 tipos de ganchos validados con clientes, generando cientos de millones de visitas. Aquí te presento los que rompen el algoritmo:",
                ],
                subsections: [
                  {
                    title: "1. Gancho Brecha de Curiosidad (Curiosity Gap)",
                    content: [
                      "Mecanismo: Consiste en dar una pequeña pista sobre algo, pero ocultar la información más importante para que el cerebro del usuario intente rellenar ese vacío.",
                      "El cerebro odia los espacios en blanco de información y se siente obligado a buscar la respuesta.",
                      "Ejemplo: Mencionar una frase que es la solución a un deseo, pero no decirla de inmediato.",
                    ],
                  },
                  {
                    title: "2. Gancho Contracorriente",
                    content: [
                      "Mecanismo: Se basa en decir algo que va completamente en contra de la creencia popular sobre un tema o sector.",
                      "Efecto: Llama la atención porque es algo que la gente no está acostumbrada a escuchar, generando disonancia cognitiva.",
                      "Ejemplo: Afirmar que es mejor alquilar una casa que comprarla.",
                    ],
                  },
                  {
                    title: "3. Gancho Regla de Tres",
                    content: [
                      "Mecanismo: Consiste en enumerar tres acciones, productos, o razones que la audiencia desea. El número tres es simple y organiza la información.",
                      "Clave: Nunca des las tres respuestas de forma seguida al principio. Debes desvelarlas poco a poco durante el desarrollo del video.",
                    ],
                  },
                  {
                    title: "4. Gancho Reto / Ego",
                    content: [
                      "Mecanismo: Reta a la persona atacando su ego o su conocimiento, forzándola a ver el video hasta el final para saber si está haciendo las cosas bien o mal.",
                      "Ejemplo: 'Solamente el 10% que lo hace bien consigue generar unos buenos pectorales. El resto hace esto mal...'",
                    ],
                  },
                  {
                    title: "5. Gancho Hoyo (Delay)",
                    content: [
                      "Mecanismo: Retrasar la respuesta clave del video intencionalmente para alargar el tiempo de retención.",
                      "Uso: Muy efectivo en el formato entrevista.",
                    ],
                  },
                  {
                    title: "6. Gancho Cotilla (Efecto Chismoso)",
                    content: [
                      "Mecanismo: Consiste en causar curiosidad apalancándose en algo que la persona ya conoce (una celebridad, una localización, un objeto de uso común).",
                      "Ejemplo: 'Cristiano Ronaldo podría ir a la cárcel por marcar una casilla mal en su declaración de impuestos'.",
                    ],
                  },
                  {
                    title: "7. Ganchos Visuales y Objetos Incongruentes",
                    content: [
                      "Mecanismo: Utilizar el movimiento inesperado, objetos fuera de lugar o situaciones que desafían la lógica.",
                      "Efecto: El cerebro presta más atención al movimiento rápido o anómalo. Genera disonancia cognitiva.",
                    ],
                  },
                  {
                    title: "8. Gancho de Promesa Tangible (Medible)",
                    content: [
                      "Mecanismo: Prometer un resultado específico, medible y tangible al principio del video.",
                      "Ejemplo: 'Ganarás 100,000 seguidores y 10,000 euros al mes en 90 días'.",
                    ],
                  },
                  {
                    title: "9. Gancho Pregunta Incómoda",
                    content: [
                      "Mecanismo: Plantear una pregunta que suele ser tabú o incómoda en la sociedad.",
                      "Ejemplo: '¿Cuánto dinero ganas al mes?'",
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          id: "2-2",
          title: "Estructura Viral Copy",
          duration: "38:00",
          completed: false,
          topics: [
            "Estructura completa de un video viral",
            "Desarrollo del contenido: el cuerpo del video",
            "Valor comprimido y moraleja",
            "Cierre emocional y CTA suave",
            "Cómo mantener la retención durante todo el video",
          ],
          content: {
            sections: [
              {
                title: "Desarrollo (Cuerpo del Video)",
                content: [
                  "Después del gancho, necesitas mantener a la audiencia enganchada durante todo el video. El desarrollo es donde entregas el valor prometido, pero de forma estratégica.",
                ],
                subsections: [
                  {
                    title: "Mantener la Tensión",
                    content: [
                      "No puedes revelar todo de golpe. Debes ir soltando información poco a poco.",
                      "Usa el efecto 'Pero': introduce giros que mantengan la curiosidad.",
                      "Cada 10-15 segundos debes tener un nuevo punto de enganche.",
                    ],
                  },
                  {
                    title: "Estructura del Desarrollo",
                    content: [
                      "Contexto mínimo necesario para entender el valor.",
                      "Entrega de información en bloques digeribles.",
                      "Uso del 'delay' para alargar la respuesta del gancho hasta el final del video.",
                    ],
                  },
                ],
              },
              {
                title: "Valor comprimido / Moraleja",
                content: [
                  "Esta es la tercera parte de la estructura, y es donde transformas la atención en autoridad.",
                ],
                subsections: [
                  {
                    title: "La Diferencia Clave",
                    content: [
                      "La moraleja es la conclusión final que das, que te posiciona como experto y te diferencia de un mero informador.",
                    ],
                  },
                  {
                    title: "Compresión de Valor",
                    content: [
                      "La moraleja debe ser una enseñanza que el espectador pueda llevarse a casa y aplicar.",
                      "Ejemplo: En un video sobre crédito, la moraleja es: 'Para conseguir eso, necesitas tener buen crédito, y si no lo tienes, debes repararlo'.",
                    ],
                  },
                  {
                    title: "Refuerzo de Autoridad",
                    content: [
                      "Para asegurar la tasa de conversión, es vital que, al dar la moraleja, refuerces tus logros o los resultados que has conseguido.",
                    ],
                  },
                ],
              },
              {
                title: "Cierre emocional / CTA suave",
                content: [
                  "El objetivo final es encauzar los millones de visitas generados hacia tu embudo de ventas o de crecimiento.",
                ],
                subsections: [
                  {
                    title: "Llamada a la Acción (Call To Action - CTA)",
                    content: [
                      "Esta es la última parte de la metodología Viral Copy. Se utiliza para redirigir la atención generada a un lugar de tu interés (seguir, dejar un comentario, entrar a un link, comprar un producto).",
                    ],
                  },
                  {
                    title: "La Regla del Beneficio",
                    content: [
                      "El CTA debe ser claro, conciso y debe explicar cuál es el beneficio que el cliente recibirá por tomar esa acción.",
                      "Nadie hará algo si no recibe algo a cambio.",
                      "Ejemplo: 'Deja la palabra cinco para aprender cómo perder 5 kg antes de verano siendo mujer'.",
                    ],
                  },
                  {
                    title: "CTA Nativo (El Cierre Suave)",
                    content: [
                      "El CTA debe ser nativo al contenido, fluyendo con la narrativa y la edición.",
                      "Error Fatal: Cortar abruptamente el video dinámico con una despedida aburrida y formal.",
                      "El CTA debe unirse con lo que ya estaba ocurriendo dentro del contenido.",
                    ],
                  },
                ],
                highlight:
                  "Activadores de Conversión: Un CTA muy efectivo es pedir a la audiencia que deje una palabra clave en los comentarios, lo que automáticamente te permite iniciar un embudo de ventas.",
              },
            ],
          },
        },
      ],
    },
    {
      id: 3,
      title: "Creación de Contenido de Alto Impacto",
      lessons: [
        {
          id: "3-1",
          title: "La importancia de la idea ganadora",
          duration: "42:00",
          completed: false,
          topics: [
            "El 99% de ideas son simples, solo el 1% son ganadoras",
            "Plantilla para storytelling corto efectivo",
            "Errores comunes: frases largas, exceso de contexto, falta de ejemplos",
            "Cómo validar una idea antes de grabar",
            "La diferencia entre valor técnico e idea ganadora",
          ],
          content: {
            sections: [
              {
                title: "La idea ganadora",
                content: [
                  "La idea ganadora es el concepto que envuelve el vídeo y es la única diferencia entre un contenido viral y uno que no lo es.",
                  "Da exactamente igual que tengas la mejor cámara, la mejor edición o el mejor gancho; si la idea es mala, el video nunca funcionará.",
                  "Un video con una idea ganadora grabada con un teléfono móvil en modo selfie puede conseguir 7 millones de visitas.",
                ],
              },
              {
                title: "Plantilla para storytelling corto",
                content: ["El storytelling efectivo sigue una estructura que mantiene la atención:"],
                list: [
                  "Gancho: Captura la atención en los primeros 0.6 segundos",
                  "Contexto: Mínimo necesario para entender la historia",
                  "Conflicto/Tensión: Introduce el problema o desafío",
                  "Desarrollo: Entrega valor mientras mantienes el interés",
                  "Resolución/Moraleja: Cierra con una enseñanza aplicable",
                  "CTA: Redirige a tu embudo",
                ],
              },
              {
                title: "Errores comunes",
                content: [],
                subsections: [
                  {
                    title: "Frases largas",
                    content: [
                      "Las frases largas y complejas hacen que la audiencia pierda el hilo.",
                      "Usa frases cortas y directas que sean fáciles de seguir.",
                    ],
                  },
                  {
                    title: "Exceso de contexto",
                    content: [
                      "Dar demasiado contexto al principio aburre a la audiencia.",
                      "Solo da el contexto mínimo necesario para entender el valor.",
                    ],
                  },
                  {
                    title: "Falta de ejemplos",
                    content: [
                      "Los conceptos abstractos no conectan emocionalmente.",
                      "Siempre acompaña tus ideas con ejemplos concretos y visuales.",
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          id: "3-2",
          title: "Formatos de contenido que siempre funcionan",
          duration: "48:00",
          completed: false,
          topics: [
            "Formato Entrevista: estructura y mecanismo de viralidad",
            "Vlog / Estilo Blog Dinámico",
            "POV (Point of View)",
            "Hablando a Cámara: cuándo y cómo usarlo",
          ],
          content: {
            sections: [
              {
                title: "Por qué usar formatos distintos",
                content: [
                  "Científicamente, usar formatos distintos aumenta las posibilidades de viralidad, ya que activan procesos cognitivos diferentes en el cerebro y capturan distintos perfiles psicológicos de la audiencia.",
                  "La variación de formatos permite una mayor retención al romper el patrón visual y narrativo.",
                  "Si un video siempre luce igual (mismo tono, fondo, formato), el cerebro del espectador lo descarta automáticamente, aunque el contenido sea nuevo.",
                ],
              },
              {
                title: "1. Formato Entrevista",
                content: [
                  "Este formato es altamente efectivo porque simula una conversación o un debate sobre una temática que se sabe que es viral.",
                ],
                subsections: [
                  {
                    title: "Estructura",
                    content: [
                      "Se utiliza una persona que pregunta y otra que responde, o un guion que se debate entre dos personas.",
                    ],
                  },
                  {
                    title: "Mecanismo de Viralidad",
                    content: [
                      "Este formato permite hacer preguntas más profundas o incómodas que no se harían en un formato 'hablando a cámara'.",
                      "Esto genera una sensación de naturalidad, como si fuera una conversación casual.",
                    ],
                  },
                  {
                    title: "Gancho y Retención",
                    content: [
                      "Ideal para el Gancho Hoyo (Delay). Se utiliza una pregunta que actúa como gancho, y la respuesta se retrasa hasta el final.",
                    ],
                  },
                ],
              },
              {
                title: "2. Vlog / Estilo Blog Dinámico",
                content: [
                  "Este formato se caracteriza por ser dinámico y espacioso, atrayendo la atención por el entorno y la acción.",
                ],
                subsections: [
                  {
                    title: "Estructura",
                    content: [
                      "Requiere que una persona grabe al creador mientras este camina, realiza una acción, o se mueve en un entorno.",
                    ],
                  },
                  {
                    title: "Ventajas",
                    content: [
                      "Permite cambiar mucho los planos, lo que lo hace muy dinámico.",
                      "Ideal para mezclar el guion con acción.",
                      "Útil para mostrar elementos llamativos que refuercen la autoridad (coche caro, casa bonita).",
                    ],
                  },
                ],
              },
              {
                title: "3. POV (Point of View)",
                content: [
                  "El formato POV es altamente efectivo para generar una conexión íntima y un factor de 'juego' con el espectador.",
                ],
                subsections: [
                  {
                    title: "Mecanismo",
                    content: [
                      "Se graba con un angular (ej., 0.5x en iPhone). La cámara simula la visión de una persona interactuando con el creador.",
                    ],
                  },
                  {
                    title: "Interacción",
                    content: [
                      "La gracia de este formato es la interacción con la persona que graba. Esto crea un efecto de inmersión más informal y natural.",
                    ],
                  },
                ],
              },
              {
                title: "4. Hablando a Cámara",
                content: [
                  "Este es el formato más básico y más común, pero aún así puede ser viral si se ejecuta con una idea ganadora clara.",
                ],
                subsections: [
                  {
                    title: "Riesgo",
                    content: [
                      "Es el que menos dopamina genera debido a la falta de estímulo y movimiento.",
                      "Si el guion no es increíble y la oratoria no es fantástica, es más difícil que se haga viral.",
                    ],
                  },
                  {
                    title: "Cuándo Funciona",
                    content: [
                      "Requiere una idea contraintuitiva o una Promesa Tangible muy fuerte al principio para compensar la falta de dinamismo visual.",
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          id: "3-3",
          title: "Storytelling para principiantes",
          duration: "45:00",
          completed: false,
          topics: [
            "Qué es el storytelling y por qué es crucial",
            "Los 5 elementos esenciales para un storytelling inmersivo",
            "Errores comunes al contar historias",
            "Los tres planos de narración",
          ],
          content: {
            sections: [
              {
                title: "Qué es el storytelling",
                content: [
                  "El storytelling va mucho más allá de simplemente contar historias. Es la estructura correcta que se aplica para cualquier contenido que busque cautivar a la audiencia.",
                  "Todas las películas famosas y cualquier contenido viral en Instagram o TikTok utilizan una buena estructura de storytelling.",
                  "Una vez que tienes la estructura correcta, es muy sencillo replicarla para cada uno de tus videos.",
                ],
                highlight:
                  "Foco en la Estructura: No necesitas una historia grandísima para que la gente te escuche. Lo que realmente necesitas es una estructura paso a paso para que cualquier cosa que cuentes, la gente quiera escucharla.",
              },
              {
                title: "Elementos Esenciales para un Storytelling Inmersivo",
                content: [
                  "Los guiones más memorables no son solo datos, cuentan historias. Debes usar estos cinco elementos:",
                ],
                subsections: [
                  {
                    title: "1. Ubicación",
                    content: [
                      "Cada historia necesita un punto de partida claro.",
                      "Debes darle un contexto visual a tu audiencia para que entiendan dónde te encuentras. No solo a nivel visual, sino también a nivel sentimental.",
                      "Si logras que la gente vea lo que tú viste en ese momento, conectarán con tu historia.",
                    ],
                  },
                  {
                    title: "2. Acciones",
                    content: [
                      "Comunica las acciones específicas que están ocurriendo dentro de la historia.",
                      "En lugar de decir 'estaba nervioso por la presentación', debes decir: 'Miré mis manos y estaban temblando, estaba sudando a chorros y las palabras no me salían.'",
                    ],
                  },
                  {
                    title: "3. Pensamientos y Diálogos",
                    content: [
                      "Las mejores historias no solo cuentan lo que pasa, sino lo que el protagonista está pensando mientras las cosas ocurren.",
                      "Esto crea una conexión directa con la audiencia.",
                    ],
                  },
                  {
                    title: "4. Emociones",
                    content: [
                      "Lo que el personaje está sintiendo. El cerebro recuerda siempre las emociones de cada momento.",
                    ],
                  },
                  {
                    title: "5. Diálogo",
                    content: ["El diálogo que ocurre entre los personajes."],
                  },
                ],
              },
              {
                title: "Errores comunes al contar historias",
                content: [],
                subsections: [
                  {
                    title: "1. Hablar con el Resumen (Falta de Detalle)",
                    content: [
                      "El error más común es hablar con el resumen, pensando que cuanto menos información des, mejor.",
                      "Es justamente lo contrario: cuanta más información das sobre las acciones, más se mete la persona dentro de tu 'película'.",
                    ],
                  },
                  {
                    title: "2. Ser Predecible (Falta de Tensión)",
                    content: [
                      "Un storytelling aburrido es predecible y carece de tensión.",
                      "La clave para retener a alguien es el efecto 'Pero': debes introducir tensión o un quiebre.",
                    ],
                  },
                  {
                    title: "3. No Jugar con los Planos de Narración",
                    content: [
                      "En toda historia hay tres planos: Plano Material (lo que ocurre), Plano del Narrador (quien cuenta desde fuera), Plano del Pensamiento (lo que se siente).",
                      "Si cuentas todo desde un solo plano, la historia no conecta.",
                    ],
                  },
                  {
                    title: "4. Ser un Mero Informador",
                    content: [
                      "Quedarse en el plano de la información y no dar una moraleja.",
                      "La diferencia entre un informador y un experto es la moraleja que tú aportas al final.",
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      id: 4,
      title: "Grabación, Iluminación y Edición",
      lessons: [
        {
          id: "4-1",
          title: "Cómo grabar como un profesional usando solo el móvil",
          duration: "55:00",
          completed: false,
          topics: [
            "La iluminación es la clave: esquema de tres puntos",
            "Foco principal a 45 grados para tridimensionalidad",
            "Luz de contra y luz de relleno",
            "Ajustes de color y tono",
            "Consejos prácticos para grabar con el móvil",
            "Configuración de calidad en Instagram",
          ],
          content: {
            sections: [
              {
                title: "La Iluminación es la Clave",
                content: [
                  "Una buena iluminación es lo más básico en el mundo audiovisual y en la creación de contenido. No necesitas mucho dinero para conseguir una buena iluminación.",
                ],
              },
              {
                title: "El Esquema de Iluminación Básico (La Iluminación de Tres Puntos)",
                content: ["Al iluminar, siempre buscamos dos cosas principales:"],
                list: [
                  "Transmitir Tridimensionalidad: Si no, el video se vería plano (en 2D).",
                  "Transmitir una Emoción: Cada esquema de iluminación está creado para transmitir una emoción u otra.",
                ],
                subsections: [
                  {
                    title: "1. Foco Principal (Luz Principal)",
                    content: [
                      "La luz principal es la más importante. Se coloca para iluminar aproximadamente tres cuartas partes del rostro de la persona.",
                      "Posición y Ángulo: La luz principal siempre se coloca a 45 grados sobre la cara de la persona. No debe estar justo de frente.",
                      "Distancia: El foco de luz debe estar lo más cerca de la persona posible. Esto ayuda a separar al sujeto del fondo.",
                      "Puedes usar un softbox (caja de luz) para difuminar la luz en la cara.",
                    ],
                  },
                  {
                    title: "2. Luz de Contra (o Backlight)",
                    content: [
                      "Ayuda a separar al sujeto del fondo, especialmente si el fondo es oscuro.",
                      "Crea el contorno o la silueta sobre la persona.",
                      "Puedes aprovechar la luz natural del día o usar lámparas de decoración.",
                    ],
                  },
                  {
                    title: "3. Luz de Relleno o Decoración (Practical Light)",
                    content: [
                      "Lámparas de decoración son muy útiles para decorar el plano.",
                      "Una luz en la zona del pelo puede ayudar a aumentar el volumen y dar sensación de contorno.",
                    ],
                  },
                ],
              },
              {
                title: "Ajustes de Color y Tono",
                content: [],
                subsections: [
                  {
                    title: "Tonalidad (Cálido vs. Frío)",
                    content: [
                      "Los focos profesionales permiten cambiar la luz entre tonos cálidos (anaranjados) y fríos (azulados).",
                      "La elección del tono debe alinearse con los colores de tu marca y la emoción que quieres transmitir.",
                    ],
                  },
                ],
              },
              {
                title: "Consejos Prácticos para Grabar con el Móvil",
                content: [],
                subsections: [
                  {
                    title: "Calidad de Grabación",
                    content: [
                      "Graba tus videos en 4K. Los teléfonos posteriores a 2018 o 2019 suelen grabar mínimo a 1080p.",
                      "Graba a 60 frames per second (FPS) para Stories y contenido dinámico.",
                      "Instagram siempre comprimirá tus Reels a 1080p. Graba en 4K, pero exporta a 1080p para que la compresión sea controlada por ti.",
                    ],
                  },
                  {
                    title: "Ubicación del Móvil (El Plano)",
                    content: [
                      "El móvil debe estar colocado a la altura de los ojos del creador.",
                      "Utiliza la Ley de la Mirada o la Ley de los Tercios. Activa la cuadrícula en la pantalla.",
                    ],
                  },
                  {
                    title: "Dispositivos",
                    content: [
                      "Se recomienda usar un iPhone, ya que la aplicación de Instagram para iOS está mejor optimizada.",
                      "Para subir contenido en máxima calidad, se recomienda que el teléfono sea del 2022 en adelante.",
                    ],
                  },
                ],
              },
              {
                title: "Configuración de Calidad en Instagram",
                content: [
                  "Aunque la iluminación sea buena, si tu configuración de Instagram es incorrecta, se verá mal.",
                ],
                highlight:
                  "Desactiva la Compresión Baja: Instagram, por defecto, sube el contenido con baja calidad. Ve a Configuración > Actividad > Uso de datos y activa la opción de subir en máxima calidad. Esto reduce la compresión de Instagram de hasta cinco veces a solo una.",
              },
            ],
          },
        },
        {
          id: "4-2",
          title: "Cómo editar de forma profesional sin gastar en programas caros",
          duration: "50:00",
          completed: false,
          topics: [
            "Edita con intención: cada decisión debe aportar al video",
            "Software Simple y Económico: CapCut",
            "Priorización del Tiempo de Edición (Regla 80/20)",
            "Ritmo y Estructura: cortes quirúrgicos",
            "Música y sound design estratégico",
          ],
          content: {
            sections: [
              {
                title: "Edita con intención",
                content: [
                  "La edición de vídeo es una parte imprescindible para que el contenido funcione. Sin embargo, el objetivo principal al editar no es que el video se vea bonito, sino que funcione y cumpla el objetivo de hacerse viral.",
                  "Tu enfoque debe ser en la conciencia al editar. Cada decisión que tomes debe responder a una simple pregunta: ¿Esto que voy a hacer (un corte, un efecto, una música) aporta al video o estorba al video?",
                ],
              },
              {
                title: "1. Software Simple y Económico",
                content: [
                  "No necesitas hardware de la NASA ni programas complejos para lograr un video viral y de buena calidad.",
                ],
                subsections: [
                  {
                    title: "CapCut",
                    content: [
                      "Es la aplicación más recomendada para principiantes. Funciona increíblemente bien con un celular y es totalmente gratis.",
                      "La versión Pro, si la necesitas, es muy económica.",
                    ],
                  },
                  {
                    title: "Otros Programas",
                    content: [
                      "DaVinci Resolve o Premiere Pro se utilizan para tareas más avanzadas (color grading o animaciones complejas).",
                      "CapCut es más que suficiente para empezar con buena calidad.",
                    ],
                  },
                ],
              },
              {
                title: "2. Priorización del Tiempo de Edición (Regla 80/20)",
                content: [
                  "La mayoría del tiempo de edición no debe dedicarse a animaciones complejas, sino a asegurar que el espectador se quede al principio.",
                ],
                list: [
                  "80% del tiempo se centra en los primeros 5 segundos del video (el gancho).",
                  "60% del tiempo total se va a los primeros 2 segundos del video.",
                  "Solo el 20% restante del tiempo se dedica al resto del video.",
                  "Si dedicas 1 hora a editar un video, 48 minutos deberían ir a los primeros 5 segundos.",
                ],
                highlight:
                  "La Decisión Rápida: La gente tarda en decidir si un video les gusta de media 0.6 segundos. Si no consigues que se detengan al principio, el resto de la edición es invisible.",
              },
              {
                title: "3. Ritmo y Estructura (Cortes Quirúrgicos)",
                content: [
                  "El ritmo es uno de los factores más importantes para mantener la retención, incluso más que las animaciones.",
                ],
                subsections: [
                  {
                    title: "Cortes Quirúrgicos",
                    content: ["No debes dejar espacios en silencio o tiempo muerto. Los cortes deben ser precisos."],
                  },
                  {
                    title: "Montaña Rusa de Emociones",
                    content: [
                      "Tienes que generar un ritmo que se sienta como una 'montaña rusa de emociones'.",
                      "Juega con las subidas (más tensión, más movimiento) y bajadas (momentos de pausa para asimilar).",
                    ],
                  },
                ],
              },
              {
                title: "4. Música y Sound Design",
                content: [],
                subsections: [
                  {
                    title: "Selección de Música",
                    content: [
                      "La música tiene que ser coherente con lo que está sintiendo la persona que comunica.",
                      "Un buen editor no pega la misma música en todos los videos.",
                      "Se recomienda usar alrededor de dos a cuatro canciones distintas en todo el Reel.",
                    ],
                  },
                  {
                    title: "El Uso Estratégico del Diseño Sonoro (SFX)",
                    content: [
                      "Transiciones de Sonido: Usa wushes o risers para pasar de una escena a otra sin un corte seco.",
                      "Impactos (Hits): Refuerza momentos clave como palabras, cambios de tema o revelaciones.",
                      "Subbajos (Basedrops): Añaden intensidad y momentos dramáticos.",
                      "Sonidos Diegéticos: Son los sonidos que provienen del propio video (pasos, coches). Añaden naturalidad e inmersión.",
                    ],
                  },
                  {
                    title: "Herramientas para la Selección de Música",
                    content: [
                      "Plataformas profesionales como Epidemic Sound y Artlist te permiten encontrar canciones según el mood.",
                      "Puedes inspirarte en videos de referencia y usar Shazam.",
                      "Adam Mosseri recomienda usar el audio oficial de la plataforma (Instagram).",
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      id: 5,
      title: "Estrategias de Crecimiento Acelerado",
      lessons: [
        {
          id: "5-1",
          title: "Los carruseles como herramienta para conectar con tu comunidad",
          duration: "35:00",
          completed: false,
          topics: [
            "Los carruseles NO son para viralizar, son para fidelizar",
            "Función principal: creación de comunidad",
            "Contenido íntimo y personal para fortalecer vínculos",
            "Ventajas tácticas del carrusel",
            "Estrategia general: Reels vs Carruseles vs Stories",
          ],
          content: {
            sections: [
              {
                title: "Propósito y Función del Carrusel",
                content: [
                  "Los carruseles (o publicaciones de varias fotos/videos en una misma post) son un formato esencial en tu estrategia de contenido, pero deben ser utilizados con la intención correcta.",
                ],
                subsections: [
                  {
                    title: "No son para Viralizar",
                    content: [
                      "Es un error común pensar que los carruseles son la nueva forma de hacerse viral.",
                      "El potencial de viralidad de un carrusel es infinitamente menor que el potencial de viralidad de un Reel.",
                    ],
                  },
                  {
                    title: "Función Principal: Fidelización",
                    content: [
                      "Los carruseles están pensados para llegar a tu audiencia y para ser vistos por personas que ya te siguen dentro de tu comunidad.",
                    ],
                  },
                  {
                    title: "Creación de Comunidad",
                    content: [
                      "Los posts de Instagram, incluidos los carruseles, están diseñados para generar mucha más comunidad y fidelidad con la audiencia que ya te sigue.",
                    ],
                  },
                ],
              },
              {
                title: "Contenido y Temática de los Carruseles",
                content: [
                  "El contenido de tus carruseles debe ser de carácter íntimo y personal, diseñado para fortalecer el vínculo con tus seguidores.",
                ],
                list: [
                  "Estilo de Vida y Proceso: Muestra tu estilo de vida, tu proceso y el día a día detrás de la marca personal.",
                  "Detalles Personales: Comparte momentos de tu día a día, como cuando haces un viaje, cuando sales con amigos, cuando ves a tu familia.",
                  "Contexto Necesario: Si subes una foto con tu madre, y la vieran personas que no te siguen, no tendría sentido. Por eso, este contenido es para quienes ya te conocen.",
                ],
              },
              {
                title: "Ventajas Tácticas del Carrusel",
                content: ["El algoritmo de Instagram ofrece una 'segunda oportunidad' a este formato."],
                subsections: [
                  {
                    title: "Segunda Oportunidad",
                    content: [
                      "Si una persona ve tu carrusel pero no desliza, Instagram a menudo le da una segunda oportunidad moviéndolo automáticamente a la segunda pieza de contenido.",
                      "Esto significa más interacciones y más alcance en promedio.",
                    ],
                  },
                ],
              },
              {
                title: "Estrategia General",
                content: ["Debes priorizar dónde subes cada tipo de contenido para maximizar los resultados:"],
                list: [
                  "Reels: Contenido para llegar a más audiencia y atraerlos a tu comunidad.",
                  "Carruseles: Contenido para fidelizar a la audiencia que ya tienes y mostrar tu estilo de vida.",
                  "Historias (Stories): La mejor herramienta para vender.",
                ],
              },
            ],
          },
        },
        {
          id: "5-2",
          title: "Qué incluir en tus Historias Destacadas",
          duration: "32:00",
          completed: false,
          topics: [
            "Testimonios reales de clientes",
            "Refuerzo de autoridad y conversión a venta",
            "Validación de resultados propios",
            "Promesa Principal de Marca (PPM)",
            "Detrás de cámaras y proceso",
          ],
          content: {
            sections: [
              {
                title: "La importancia de las Historias Destacadas",
                content: [
                  "Las Historias Destacadas (Highlights) son esenciales porque la audiencia más comprometida y 'caliente' (la que te ve en Stories, aproximadamente del 5% al 20% de tus seguidores) las revisará antes de tomar una decisión de compra o de solicitar una llamada de ventas.",
                ],
              },
              {
                title: "Testimonios reales de clientes",
                content: [
                  "La inclusión de testimonios reales es fundamental para transformar a un seguidor que acaba de descubrirte en un cliente convencido.",
                ],
                subsections: [
                  {
                    title: "Refuerzo de la Autoridad",
                    content: [
                      "Los testimonios son la prueba de que tus promesas y tus enseñanzas son veraces y lícitas.",
                      "La gente compra el resultado que tú representas, no el método o la información.",
                      "Los testimonios son la prueba social de que ese resultado es alcanzable.",
                    ],
                  },
                  {
                    title: "Irrefutabilidad",
                    content: [
                      "Debes mostrar casos de éxito que sean irrefutables.",
                      "Presenta los resultados que has conseguido con tus clientes para que la audiencia te vea como una autoridad.",
                    ],
                  },
                  {
                    title: "Conversión a Venta",
                    content: [
                      "Mostrar resultados y casos de éxito eleva la tasa de conversión global para cualquiera de tus llamados a la acción (CTA).",
                      "El objetivo final del embudo es que el cliente sepa que tú eres la mejor persona y que tu producto es la mejor solución.",
                    ],
                  },
                ],
              },
              {
                title: "Otros elementos clave para incluir",
                content: [],
                list: [
                  "Validación de Resultados: Muestra tus propios logros, no solo los de tus clientes.",
                  "Promesa Principal de Marca (PPM): Explica qué has conseguido y cómo vas a hacer que esa persona mejore su vida.",
                  "Detrás de Cámaras / Proceso: Muestra cómo ensayas, cómo practicas o cómo es la gestión interna de tu negocio.",
                  "Contenido de Sector: Contenido que atraiga a personas en Nivel de Conciencia Cero y Uno.",
                ],
              },
            ],
          },
        },
        {
          id: "5-3",
          title: "Trucos para aumentar significativamente tus vistas",
          duration: "30:00",
          completed: false,
          topics: [
            "Publicar a la misma hora: ¿mito o realidad?",
            "No usar hashtags (y por qué)",
            "El gran secreto: la idea ganadora",
            "Consistencia sobre horario",
          ],
          content: {
            sections: [
              {
                title: "Publicar a la misma hora",
                content: [
                  "Este es el primer mito que tenemos que abordar. La creencia popular es que existe una 'hora mágica' para publicar, pero te aseguro que la hora de publicación es absolutamente irrelevante si el contenido que publicas es genuinamente bueno.",
                ],
                subsections: [
                  {
                    title: "El Principio de la Calidad sobre el Tiempo",
                    content: [
                      "Si el vídeo tiene una idea ganadora y supera el Estímulo Mínimo Necesario (EMN), se hará viral.",
                      "Da exactamente igual que lo publiques a las 4 de la mañana o a las 2 de la madrugada; si el contenido es bueno, el algoritmo lo empujará.",
                      "He tenido vídeos míos y de clientes publicados a las 2 de la mañana que al día siguiente ya tenían un millón de visitas.",
                    ],
                  },
                  {
                    title: "La Única Importancia de la Hora (Consistencia)",
                    content: [
                      "La consistencia en el horario sí es importante para tu audiencia actual.",
                      "La audiencia que reacciona correctamente a tus publicaciones siempre lo hará a la misma hora debido a sus propios horarios.",
                      "Es recomendable publicar siempre a la misma hora para generar una rutina con tu comunidad.",
                    ],
                  },
                ],
                highlight:
                  "Optimización: Si quieres optimizar al máximo, publica entre una hora y una hora y media antes de tu hora pico. Generalmente, publicar entre las 12 del mediodía y las 8 o 9 de la noche es un buen rango.",
              },
              {
                title: "No usar hashtags (y por qué)",
                content: [
                  "Este es otro factor que distrae a la mayoría de los creadores del verdadero trabajo. Los hashtags son irrelevantes para que tu contenido se haga viral.",
                ],
                subsections: [
                  {
                    title: "La Razón Algorítmica",
                    content: [
                      "Métrica Clave: La única métrica en la que Instagram se basa para mostrar tu contenido o no es el Ratio de Interés (RI).",
                      "Distracción: Centrarse en hashtags o en el texto de la descripción es una pérdida de tiempo.",
                      "Respuesta Directa: Cuando se me pregunta si usar hashtags, mi respuesta es: 'Da exactamente igual'.",
                    ],
                  },
                ],
                highlight:
                  "Conclusión: El gran secreto para aumentar tus vistas no reside en trucos externos, sino en que el 80% de tu esfuerzo se dedique a crear contenido con una idea ganadora.",
              },
            ],
          },
        },
      ],
    },
    {
      id: 6,
      title: "Construcción de una Marca Inolvidable",
      lessons: [
        {
          id: "6-1",
          title: "Elementos de una marca sólida",
          duration: "45:00",
          completed: false,
          topics: [
            "El personaje de marca y la congruencia visual",
            "Principio de congruencia: sé el resultado que vendes",
            "Paleta de colores y estética del video",
            "Branding visual en la edición (tipografía y minimalismo)",
          ],
          content: {
            sections: [
              {
                title: "1. El Personaje de Marca y la Congruencia Visual",
                content: [
                  "El Branding Visual comienza con tu Personaje de Marca, que es la proyección que tú tienes dentro de redes sociales.",
                  "Las personas estadísticamente prefieren comprarle a otras personas que a una empresa con un logotipo.",
                ],
                subsections: [
                  {
                    title: "Principio de Congruencia",
                    content: [
                      "Tienes que ser el resultado que vendes para después enseñar.",
                      "Si vendes éxito financiero, debes demostrarlo. Si vendes cómo vestir mejor, tu imagen debe ser elegante.",
                      "La psicología humana asume que si alguien tiene un resultado, debe saber cómo conseguirlo.",
                    ],
                  },
                  {
                    title: "Elementos Congruentes",
                    content: [
                      "La congruencia aplica a tu vestimenta, tu look, tus frases clave y el uso de objetos representativos de tu marca.",
                      "Por ejemplo, usar puros en los videos funciona porque la gente lo recuerda y te hace único.",
                    ],
                  },
                ],
                highlight:
                  "Evita Logos y Marcas de Agua: Es un error usar ropa con logos gigantes de marcas o colocar tu propio logo como marca de agua en los Reels. El alcance puede bajar si la gente percibe que les estás intentando vender algo.",
              },
              {
                title: "2. Paleta de Colores y Estética del Video",
                content: [
                  "La paleta de colores de tu marca debe ser consistente y aplicarse desde la iluminación hasta la edición de los textos.",
                ],
                subsections: [
                  {
                    title: "Iluminación y Tonalidad",
                    content: [
                      "La luz es crucial para transmitir emociones.",
                      "La elección entre tonos cálidos (anaranjados) y fríos (azulados) debe ser congruente con los colores de tu marca.",
                    ],
                  },
                  {
                    title: "Color Grading",
                    content: [
                      "No hay una fórmula general para el color grading; depende del video y la iluminación.",
                      "Puedes jugar con el contraste para darle un tono dark o de alto contraste.",
                      "Si usas programas profesionales, puedes crear un loot (filtro) personalizado.",
                    ],
                  },
                ],
                highlight:
                  "Estilo de Instagram: Instagram es una plataforma más 'elegante' que TikTok, por lo que favorece un contenido bien editado, con buena música y que se vea más producido y estético.",
              },
              {
                title: "3. Branding Visual en la Edición (Tipografía y Minimalismo)",
                content: [
                  "El diseño de tu video debe ser lógico y representativo, siempre priorizando la claridad del mensaje sobre los efectos complejos.",
                ],
                subsections: [
                  {
                    title: "Tipografía (Subtítulos)",
                    content: [
                      "La fuente que uses debe ser elegante y minimalista. Es un error usar fuentes infantiles.",
                      "Tipografías como SF Pro o Montserrat son recomendadas por su elegancia.",
                      "El tamaño debe ser pequeño, pero perfectamente legible.",
                    ],
                  },
                  {
                    title: "Minimalismo Visual",
                    content: [
                      "Opta siempre por el minimalismo.",
                      "Creer que mientras más efectos visuales tenga un video, más viral será, es un error fatal.",
                    ],
                  },
                  {
                    title: "Colores de Resalte",
                    content: [
                      "Los colores que uses en tus animaciones (para destacar palabras clave) deben ser limitados (ej., negro, blanco, amarillo, rojo).",
                    ],
                  },
                  {
                    title: "Lógica Representativa",
                    content: [
                      "Utiliza animaciones e iconos de manera lógica y representativa.",
                      "La edición debe tener la intención de que el mensaje sea más claro y más llamativo, no solo de verse bonito.",
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          id: "6-2",
          title: "Cómo crear una comunidad fuerte",
          duration: "40:00",
          completed: false,
          topics: [
            "Utiliza las Stories para la conexión íntima",
            "Fomenta la interacción humana",
            "Los carruseles para fidelizar",
            "La oratoria y la autenticidad",
            "La congruencia y la autoridad irrefutable",
          ],
          content: {
            sections: [
              {
                title: "Conexión Directa y Emocional",
                content: [
                  "La construcción de una comunidad fuerte se basa en establecer una relación de confianza y autenticidad con tu audiencia, utilizando las herramientas que la plataforma prioriza para la interacción humana.",
                ],
              },
              {
                title: "1. Utiliza las Stories para la Conexión Íntima (El Filtro Caliente)",
                content: [
                  "Las historias de Instagram son la herramienta más importante para la venta y para la conexión directa.",
                ],
                subsections: [
                  {
                    title: "Público Filtrado",
                    content: [
                      "Las Stories son la forma más cercana, rápida y filtrada de hablar con la audiencia que está más preparada para comprarte.",
                      "Solo un pequeño porcentaje de tus seguidores (alrededor del 10%) ve tus historias, y ese es tu público 'caliente'.",
                    ],
                  },
                  {
                    title: "Detrás de Cámaras",
                    content: [
                      "Lo que la gente espera ver en tus historias es la parte del detrás de cámaras de la marca personal.",
                      "Muestra cómo ensayas, cómo te preparas, cómo son tus clases internas.",
                    ],
                  },
                ],
              },
              {
                title: "2. Fomenta la Interacción Humana (Prioridad Algorítmica)",
                content: [
                  "Instagram prioriza las interacciones humanas entre personas. Si consigues que la gente se comunique mucho contigo, tu cuenta se recomienda mucho más.",
                ],
                subsections: [
                  {
                    title: "Comentarios y Conversación",
                    content: [
                      "La interacción con comentarios y mensajes directos es fundamental.",
                      "Una persona que te comenta un vídeo y a la que le respondes personalmente, seguramente comente en el siguiente vídeo.",
                    ],
                  },
                  {
                    title: "Pregunta con Intención",
                    content: [
                      "Utiliza las Stories para generar interacción preguntando directamente a la audiencia qué opinan.",
                      "Esto te permite conocer a tu audiencia y poder ayudarles mejor.",
                    ],
                  },
                ],
              },
              {
                title: "3. Los Carruseles para Fidelizar y Mostrar el Proceso",
                content: [
                  "Mientras que los Reels son para atraer audiencia nueva, los carruseles son para fortalecer la comunidad que ya tienes.",
                ],
                list: [
                  "Sube en los carruseles contenido enfocado en tu comunidad.",
                  "Muestra tu estilo de vida, inspiración y tu proceso hacia el objetivo de la marca.",
                  "Publica cosas que, si las viera alguien que no te sigue, no tendrían sentido.",
                ],
              },
              {
                title: "4. La Oratoria y la Autenticidad (Conexión Emocional en Reels)",
                content: [
                  "La forma en que te comunicas y te presentas es lo que te hace memorable y genera conexión emocional.",
                ],
                list: [
                  "Alta Energía y Picos Emocionales: Hablar alto, luego bajito, rápido, luego lento, provoca picos emocionales.",
                  "Lenguaje Genuino: No utilices un lenguaje técnico corporativo. Sé auténtico en tu forma de hablar.",
                  "La Moraleja: Te posiciona como experto y genera una enseñanza que la persona puede llevarse a casa.",
                ],
              },
              {
                title: "5. La Congruencia y la Autoridad Irrefutable",
                content: [
                  "La gente te escucha y confía en ti si tienes el resultado que ellos desean para su vida. La credibilidad es el pilar de la conexión.",
                ],
                list: [
                  "Ser antes que Enseñar: Tienes que ser el resultado que vendes para luego enseñar.",
                  "Muestra Resultados: Refuerza todo lo que dices con casos de éxito y pruebas irrefutables.",
                ],
              },
            ],
          },
        },
      ],
    },
    {
      id: 7,
      title: "Monetización Inteligente del Contenido",
      lessons: [
        {
          id: "7-1",
          title: "Cómo optimizar tu cuenta para analizar tu contenido",
          duration: "38:00",
          completed: false,
          topics: [
            "Cambiar a Perfil de Creador",
            "Lo que no se puede medir, no se puede mejorar",
            "Acceso a estadísticas y panel de profesionales",
            "Optimización para SEO: nombre de cuenta estratégico",
          ],
          content: {
            sections: [
              {
                title: "Cambiar a Perfil de Creador",
                content: [
                  "Tu cuenta de Instagram debe estar configurada para que te brinde la máxima cantidad de información posible sobre tu audiencia y tu contenido.",
                  "El primer paso es cambiar tu perfil personal a un Perfil de Creador. Esto te da acceso a estadísticas detalladas que no están disponibles en cuentas personales.",
                ],
              },
              {
                title: "Lo que no se puede medir, no se puede mejorar",
                content: [
                  "Esta es una regla fundamental en la creación de contenido. Si no tienes datos sobre cómo está funcionando tu contenido, no puedes tomar decisiones informadas para mejorarlo.",
                  "Las métricas te permiten identificar qué funciona y qué no, para poder replicar el éxito y descartar lo que no funciona.",
                ],
              },
              {
                title: "Acceso a estadísticas y panel de profesionales",
                content: ["Con un Perfil de Creador, tendrás acceso al panel de profesionales que incluye:"],
                list: [
                  "Métricas de alcance e impresiones de cada publicación",
                  "Datos de retención: cuánto tiempo la gente ve tus videos",
                  "Información demográfica de tu audiencia (edad, género, ubicación)",
                  "Horarios de mayor actividad de tus seguidores",
                  "Métricas de engagement: likes, comentarios, guardados, compartidos",
                ],
              },
              {
                title: "Optimización para SEO: nombre de cuenta estratégico",
                content: [
                  "Tu nombre de cuenta y tu nombre de usuario son elementos clave para ser descubierto en Instagram.",
                ],
                list: [
                  "Incluye palabras clave relevantes a tu nicho en tu nombre de cuenta",
                  "Mantén tu nombre de usuario simple y memorable",
                  "Tu biografía debe incluir tu Promesa Principal de Marca (PPM)",
                  "Usa palabras que tu audiencia buscaría para encontrar contenido como el tuyo",
                ],
              },
            ],
          },
        },
        {
          id: "7-2",
          title: "Cómo vender en Stories",
          duration: "52:00",
          completed: false,
          topics: [
            "El público filtrado de las Stories",
            "Contenido esperado en Stories",
            "La estructura de venta secuencial",
            "Maximiza la interacción",
            "Formatos distintos para mantener retención",
          ],
          content: {
            sections: [
              {
                title: "El Público Filtrado y la Importancia de las Stories",
                content: [
                  "Las Stories funcionan como el filtro hacia la parte más cercana y más comprometida de tu audiencia.",
                ],
                subsections: [
                  {
                    title: "El Público Filtrado",
                    content: [
                      "Las historias son la mejor herramienta para vender, ya que tienes delante a las personas que más te escuchan y más conectadas están con tu marca.",
                      "La gente que ve tus historias es un porcentaje pequeño (5-15% de tus seguidores), pero es el público más 'caliente'.",
                    ],
                  },
                ],
              },
              {
                title: "Contenido esperado en Stories",
                content: [
                  "El contenido que debes subir a Stories debe ser diferente al de Reels y Carruseles. Debe enfocarse en la parte íntima de tu marca personal.",
                ],
                list: [
                  "Contenido Esperado: La gente que te sigue quiere ver la parte del detrás de cámaras de la marca personal.",
                  "Muestra el Proceso: Si vendes clases de baile, muestra cómo ensayas, cómo practicas, cómo consigues alumnos.",
                  "Autenticidad: Comparte cosas que, si fueran vistas por alguien que no te sigue, no tendrían sentido.",
                ],
              },
              {
                title: "La Estructura de Venta Secuencial (Secuencia de Calentamiento)",
                content: [
                  "Para vender, debes diseñar una secuencia de historias que siga un objetivo claro y que eleve el nivel de conciencia del cliente:",
                ],
                subsections: [
                  {
                    title: "Historia 1: Gancho Visual Impactante",
                    content: [
                      "Intención: Capturar la atención de inmediato, ya que es la historia con más visitas.",
                      "Contenido: Suele ser de lifestyle o cualquier cosa que toque el deseo principal de la audiencia.",
                    ],
                  },
                  {
                    title: "Historia 2: El Filtro (Cliente Ideal / Intriga)",
                    content: [
                      "Intención: Plantear una situación o describir a tu cliente ideal para que solo presten atención las personas que necesitas.",
                    ],
                  },
                  {
                    title: "Historia 3: Explicación del Problema",
                    content: ["Intención: Explicar por qué la persona ideal aún no ha solucionado su problema."],
                  },
                  {
                    title: "Historia 4: Muestra un Resultado / Autoridad",
                    content: [
                      "Intención: Mostrar un resultado de una persona que ya lo consiguió. Los testimonios encajan perfectamente aquí.",
                    ],
                  },
                  {
                    title: "Historia 5: El Paso a Paso Superficial (El Proceso)",
                    content: [
                      "Intención: Mostrar el proceso que siguió la persona para resolver el problema.",
                      "No entrar en la parte técnica (el cómo), sino en el flujo superficial (el qué).",
                    ],
                  },
                  {
                    title: "Historia 6: Llamada a la Acción (CTA de Filtrado)",
                    content: [
                      "Intención: Redirigir a la audiencia más 'caliente' hacia tu embudo de ventas.",
                      "CTA Funcional: Pide a la audiencia que responda con una palabra clave.",
                    ],
                  },
                ],
              },
              {
                title: "La Importancia de la Interacción y el Formato",
                content: [
                  "Para que tus Stories funcionen bien, Instagram prioriza la interacción por encima del tiempo de visualización.",
                ],
                list: [
                  "Maximiza la Interacción: Mete una llamada a la acción al principio, al final o en el medio.",
                  "Evita el Formato Selfie Continuo: Es el error que más reduce la interacción y las visitas.",
                  "Utiliza Formatos Distintos: La mejor forma de mantener la retención es cambiando constantemente el formato.",
                  "Diseño Visual: Evita llenar la pantalla con mucho texto.",
                ],
              },
            ],
          },
        },
        {
          id: "7-3",
          title: "Cómo crear 'regalos' estratégicos para tus CTA",
          duration: "40:00",
          completed: false,
          topics: [
            "Qué es un Regalo Estratégico (Lead Magnet)",
            "El objetivo estratégico: elevar el nivel de conciencia",
            "Cómo integrar el regalo en la llamada a la acción (CTA)",
            "La Regla C.C.B.: Claro, Concreto y Beneficio",
          ],
          content: {
            sections: [
              {
                title: "1. ¿Qué es un Regalo Estratégico (Lead Magnet)?",
                content: [
                  "El objetivo principal de un regalo estratégico es elevar el nivel de conciencia de la audiencia que atraes con tu contenido viral, para que dejen de ser simples seguidores y se conviertan en potenciales clientes cualificados.",
                ],
                subsections: [
                  {
                    title: "Definición",
                    content: [
                      "Un regalo estratégico es un recurso valioso que ofreces gratuitamente a cambio de una acción de la audiencia (normalmente, un comentario o un clic).",
                    ],
                  },
                  {
                    title: "Vehículo de Solución",
                    content: [
                      "Tienes que enviar a las personas a un vehículo con el que puedan resolver su problema o cumplir el deseo que tienen.",
                    ],
                  },
                ],
                list: [
                  "Una clase privada o masterclass",
                  "Un video de YouTube o una clase específica",
                  "Un PDF o una guía descargable",
                  "Un reto o un evento online",
                ],
              },
              {
                title: "2. El Objetivo Estratégico: Elevar el Nivel de Conciencia",
                content: [
                  "La mayoría de la gente que ve tu contenido viral está en un Nivel de Conciencia Cero o Uno (no saben que tienen un problema o lo saben, pero no saben cómo solucionarlo).",
                ],
                subsections: [
                  {
                    title: "La Tarea del Lead Magnet",
                    content: [
                      "Tu regalo debe encargarse de educar a esa audiencia, elevándola a un nivel de conciencia superior.",
                      "Haciéndolos conscientes de su problema y de que tú eres la mejor solución.",
                    ],
                  },
                  {
                    title: "El Error a Evitar",
                    content: [
                      "No intentes vender un producto de alto valor (ej., 1000 €, 2000 €) a una persona que te conoce hace solo cinco minutos por un Reel.",
                      "El Lead Magnet es el paso intermedio crucial.",
                    ],
                  },
                ],
                highlight:
                  "Ejemplo Práctico: Si el video viral es sobre cómo ganar dinero, el CTA puede ser: 'Deja la palabra yo en comentarios y te envío una clase gratuita donde te explico paso a paso cómo conseguir esto'. Esa clase gratuita es el Lead Magnet.",
              },
              {
                title: "3. Cómo Integrar el Regalo en la Llamada a la Acción (CTA)",
                content: [
                  "El CTA es la parte final de tu estructura viral y debe ser el punto de redirección de toda la atención generada.",
                ],
                subsections: [
                  {
                    title: "La Regla C.C.B.",
                    content: [
                      "El CTA debe ser Claro, Concreto y con un Beneficio para el cliente.",
                      "Claro: Se debe entender a la primera y sin esfuerzo.",
                      "Concreto: Debe ser específico para un tipo de persona o problema.",
                      "Beneficio: La persona solo tomará la acción si va a recibir algo a cambio.",
                    ],
                  },
                  {
                    title: "CTA de Filtrado (Palabra Clave)",
                    content: [
                      "Una forma muy efectiva de ofrecer tu regalo estratégico es pidiendo una palabra clave en los comentarios.",
                      "Esto permite iniciar un embudo de ventas o una conversación automatizada para entregar el regalo.",
                    ],
                  },
                ],
                list: [
                  "'Comenta 86 en comentarios y te la mando (la clase que explica cómo hicimos $86,000)'",
                  "'Escribe la palabra crédito en los comentarios [si quieres que te arreglemos tu crédito]'",
                  "'Comenta viral en este video y voy a enviarles una clase privada'",
                ],
              },
            ],
          },
        },
      ],
    },
    {
      id: 8,
      title: "Planificación de Contenido",
      lessons: [
        {
          id: "8-1",
          title: "Cómo crear ideas ganadoras para todo el mes",
          duration: "48:00",
          completed: false,
          topics: [
            "La idea ganadora: el pilar fundamental",
            "Tres formas de crear ideas ganadoras",
            "La planificación mensual (La Estrategia 80/20)",
            "Validación de la idea con el IVM",
          ],
          content: {
            sections: [
              {
                title: "1. ¿Qué es una Idea Ganadora? (El Pilar Fundamental)",
                content: [
                  "La clave para que tu cuenta sea una cuenta ascendente (crecimiento constante) y no una cuenta volátil (crecimiento por suerte) es basar tu estrategia en ideas probadas y no en lo que crees que va a funcionar.",
                ],
                subsections: [
                  {
                    title: "Definición",
                    content: [
                      "La idea ganadora es el concepto que envuelve el vídeo y es la única diferencia entre un contenido viral y uno que no lo es.",
                      "Es el conjunto completo del vídeo, incluyendo la estructura, el gancho, el formato, el copy y el objetivo.",
                    ],
                  },
                  {
                    title: "La Producción es Secundaria",
                    content: [
                      "Da exactamente igual que tengas la mejor cámara, la mejor edición o el mejor gancho; si la idea es mala, el video nunca funcionará.",
                      "Un video con una idea ganadora grabada con un teléfono móvil en modo selfie puede conseguir 7 millones de visitas.",
                    ],
                  },
                ],
                highlight:
                  "El Foco de la Audiencia: Para que una idea sea ganadora, debe resonar con el 90% de la audiencia que se encuentra en los niveles de conciencia cero y uno.",
              },
              {
                title: "2. Tres Formas de Crear Ideas Ganadoras (La Metodología)",
                content: ["Existen tres formas validadas para generar ideas que funcionen de forma predecible:"],
                subsections: [
                  {
                    title: "1. Referencias de Otros Sectores (Reframe)",
                    content: [
                      "La forma más sencilla. Consiste en buscar ideas ganadoras que ya son virales en nichos o sectores completamente distintos al tuyo y adaptar el concepto a tu propio nicho.",
                      "No es Copiar: Nunca debes copiar directamente el contenido de tu mismo sector. Se trata de agarrar la idea de otro sector y transformarla.",
                    ],
                  },
                  {
                    title: "2. Referencias de Tu Mismo Sector",
                    content: [
                      "Buscas ideas ganadoras dentro de tu propio nicho.",
                      "Recomendación: buscar referencias de tu sector en otros idiomas (inglés, árabe, chino) para evitar copiar directamente.",
                    ],
                  },
                  {
                    title: "3. Ideas 100% Originales",
                    content: [
                      "Creas ideas completamente nuevas basándote en el principio de los niveles de conciencia y los deseos básicos (SSDD).",
                      "Esta es la forma más compleja y solo se recomienda dedicarle un pequeño porcentaje de tu tiempo.",
                    ],
                  },
                ],
              },
              {
                title: "3. La Planificación Mensual (La Estrategia 80/20)",
                content: [
                  "Para asegurar un crecimiento constante, tu plan de contenido debe estar dividido estratégicamente:",
                ],
                subsections: [
                  {
                    title: "80% Contenido de Escalabilidad",
                    content: [
                      "Este 80% (o 16 de cada 20 videos) debe basarse en ideas ganadoras que ya validaste que funcionan en tu cuenta o en ideas que has adaptado de otros nichos.",
                      "Reframe de Formatos: Si una idea ya funcionó (la idea 'madre'), la repites haciendo un reframe en diferentes formatos (POV, estilo blog, hablando a cámara, voice over).",
                    ],
                  },
                  {
                    title: "20% Contenido de Testeo",
                    content: [
                      "Este 20% (o 4 de cada 20 videos) debe dedicarse a probar ideas completamente nuevas.",
                      "El objetivo no es la viralidad inmediata, sino sacar información y validar qué ideas resuenan con tu audiencia.",
                    ],
                  },
                ],
              },
              {
                title: "4. Validación de la Idea (Análisis con el IVM)",
                content: [
                  "Para saber si una idea es ganadora, tienes que dejar de adivinar y empezar a usar métricas.",
                ],
                subsections: [
                  {
                    title: "Índice de Viralidad Media (IVM)",
                    content: [
                      "Debes calcular las visitas medias de todo el contenido que publicaste en un periodo determinado.",
                    ],
                  },
                  {
                    title: "La Regla de Validación",
                    content: [
                      "Si un video tiene una cantidad de visitas mayor que las visitas medias (IVM) de tu cuenta, es una Idea Ganadora validada.",
                      "Si está por debajo, no es una buena idea ganadora, y debes descartarla o reformularla.",
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          id: "8-2",
          title: "Cómo vencer el bloqueo creativo",
          duration: "42:00",
          completed: false,
          topics: [
            "Bloqueo Técnico vs. Bloqueo Creativo",
            "Estrategias para romper el bloqueo de ideas",
            "Implementa rutinas y entrena a tu cerebro",
            "Carga de inputs y documentación",
            "El Mayor Bloqueo: El Miedo y el Autosabotaje",
          ],
          content: {
            sections: [
              {
                title: "Tipos de bloqueos",
                content: [
                  "Lo primero para vencer un bloqueo es entender qué tipo de bloqueo estás sufriendo. Un bloqueo creativo es una barrera que aparece cuando intentamos generar o ejecutar ideas y nos quedamos estancados.",
                ],
              },
              {
                title: "1. Bloqueo Técnico (La Barrera de la Ejecución)",
                content: [
                  "El bloqueo técnico aparece cuando tienes una idea clara, pero no sabes exactamente cómo llevarla a cabo o ejecutarla. Esto es el resultado directo de una falta de conocimiento o de control sobre una técnica específica.",
                ],
                subsections: [
                  {
                    title: "La Solución Lógica y Directa",
                    content: [
                      "1. Aprende la Técnica: Dedícale tiempo a mejorar esa técnica o software que te está limitando.",
                      "2. Sé Estratégico y Simplifica: Escoge aquella idea que sepas al 100% que puedes llevar a cabo con tus habilidades actuales.",
                      "3. Delega (El Camino del Experto): Si el proyecto requiere una técnica que no dominas, delega esa tarea.",
                    ],
                  },
                ],
              },
              {
                title: "2. Bloqueo Creativo (La Barrera del Motor)",
                content: [
                  "Ocurre cuando tu mente está en blanco y no puedes generar ideas frescas, bocetos, o guiones. Este bloqueo ocurre porque el motor de ideas necesita ser alimentado y entrenado.",
                ],
              },
              {
                title: "Estrategias para Romper el Bloqueo de Ideas",
                content: [],
                subsections: [
                  {
                    title: "A. Implementa Rutinas (Entrena a tu Cerebro)",
                    content: [
                      "La falta de horario y rutina hace que tu cerebro no sepa cuándo debe estar listo para la acción.",
                      "Define tu Horario: Fija una hora para empezar y terminar de trabajar.",
                      "Descansa Sin Negociar: Un buen descanso es fundamental para tener aptitudes creativas.",
                      "Rompe el Patrón de Forma Intencional: Sal a tomar un café, escucha música, o desarrolla otro proyecto.",
                    ],
                  },
                  {
                    title: "B. Carga de Inputs y Documentación (El Tanque de Ideas)",
                    content: [
                      "Lee Intensamente: Lee al menos un libro cada dos meses.",
                      "Busca Estímulos: Aliméntate de inputs de series, películas, conciertos, exposiciones de arte o viajes.",
                      "Experimenta y Equivócate: Si quieres ser creativo, necesitas tiempo para experimentar.",
                      "Captura las Ideas Fugaces: Siempre lleva contigo una libreta o dispositivo para anotar inmediatamente.",
                    ],
                  },
                ],
              },
              {
                title: "3. El Mayor Bloqueo: El Miedo y el Autosabotaje (La Mentalidad)",
                content: [
                  "A menudo, el bloqueo creativo es solo un síntoma de un miedo más profundo que te impide tomar la acción correcta.",
                ],
                list: [
                  "Miedo al Fracaso vs. Miedo al Éxito: El autosabotaje viene del miedo a intentarlo y que no funcione.",
                  "La Incongruencia: Eres la persona que dice que quiere algo, pero no estás dispuesto a dar lo que tienes que dar para conseguirlo.",
                  "La Mentalidad 'Todo o Nada': La única forma de avanzar es tomando la acción más lógica, a pesar de que sientas miedo.",
                ],
                highlight:
                  "Lo peor que puede pasar si subes un vídeo es que no funcione; no es algo que vaya a arruinar tu vida.",
              },
            ],
          },
        },
        {
          id: "8-3",
          title: "Cómo analizar las estadísticas de tus Reels",
          duration: "45:00",
          completed: false,
          topics: [
            "El Diagnóstico Previo: La Salud de tu Cuenta",
            "La Métrica Reina: El Ratio de Interés (RI)",
            "Métricas de Toxicidad (Autodiagnóstico)",
            "Análisis para replicar el éxito",
          ],
          content: {
            sections: [
              {
                title: "1. El Diagnóstico Previo: La Salud de tu Cuenta",
                content: [
                  "Antes de analizar un Reel individual, debes saber si tu cuenta está sana. Si tu cuenta está 'intoxicada', ningún Reel se hará viral, por muy buena que sea la idea.",
                ],
                subsections: [
                  {
                    title: "Visualizaciones en Reels (RR)",
                    content: [
                      "Una cuenta saludable no debe bajar del 30% de visualizaciones en sus Reels en relación con sus seguidores.",
                      "Si tienes 10,000 seguidores, deberías tener al menos 3,000 views en tus videos de media.",
                      "Si estás por debajo de ese 30%, tu cuenta está comprometida.",
                    ],
                  },
                  {
                    title: "Visualizaciones en Historias (RH)",
                    content: [
                      "Una cuenta sana debe tener entre un 5% a un 15% de visitas en historias con respecto a sus seguidores.",
                      "Si tienes menos del 5%, es una señal clara de que tus seguidores no están comprometidos y tu cuenta está muy intoxicada.",
                    ],
                  },
                ],
              },
              {
                title: "2. La Métrica Reina: El Ratio de Interés (RI)",
                content: [
                  "Si quieres que Instagram recomiende tu contenido, solo tienes que obsesionarte con una métrica: el Ratio de Interés (RI).",
                ],
                subsections: [
                  {
                    title: "Definición del RI",
                    content: [
                      "El RI es la relación entre la cantidad de personas a las que se les muestra el contenido y la cantidad de personas que reaccionan correctamente a ese contenido.",
                    ],
                  },
                  {
                    title: "La Decisión Algorítmica",
                    content: [
                      "El algoritmo solo recomendará un contenido si es el más rentable, es decir, el que tiene el RI más alto en comparación con otros Reels que compiten en ese mismo momento.",
                      "El algoritmo busca videos que eviten que la gente se salga de la plataforma.",
                    ],
                  },
                ],
              },
              {
                title: "3. Métricas de Toxicidad (Autodiagnóstico)",
                content: [],
                list: [
                  "Menos del 5% de views en historias = cuenta muy intoxicada",
                  "Menos del 30% de views en Reels respecto a seguidores = cuenta comprometida",
                  "Si ambas métricas están bajas, considera un reinicio estratégico con cuenta nueva",
                ],
              },
              {
                title: "4. Análisis para replicar el éxito",
                content: [
                  "Una vez que tienes un video exitoso, debes analizar qué lo hizo funcionar para poder replicarlo:",
                ],
                list: [
                  "Identifica el gancho que usaste y cómo capturó la atención",
                  "Analiza la estructura del video y cómo mantuviste la retención",
                  "Observa qué tipo de interacciones generó (comentarios, compartidos)",
                  "Determina si la idea puede reformatearse (POV, entrevista, vlog)",
                  "Usa el IVM para validar si la idea es genuinamente ganadora",
                ],
              },
            ],
          },
        },
      ],
    },
  ],
}

export function getLessonById(lessonId: string): Lesson | undefined {
  for (const module of courseData.modules) {
    const lesson = module.lessons.find((l) => l.id === lessonId)
    if (lesson) return lesson
  }
  return undefined
}

export function getModuleByLessonId(lessonId: string): Module | undefined {
  for (const module of courseData.modules) {
    const lesson = module.lessons.find((l) => l.id === lessonId)
    if (lesson) return module
  }
  return undefined
}

export function getAdjacentLessons(lessonId: string): { prev: Lesson | null; next: Lesson | null } {
  const allLessons = courseData.modules.flatMap((m) => m.lessons)
  const currentIndex = allLessons.findIndex((l) => l.id === lessonId)

  return {
    prev: currentIndex > 0 ? allLessons[currentIndex - 1] : null,
    next: currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null,
  }
}
