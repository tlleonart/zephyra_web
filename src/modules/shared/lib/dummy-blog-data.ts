export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: string;
  content: string[];
};

export const dummyBlogPosts: BlogPost[] = [
  {
    slug: "estrategias-sostenibilidad-empresarial",
    title:
      "5 Estrategias Efectivas para Implementar la Sostenibilidad Empresarial",
    excerpt:
      "Descubre cómo las empresas líderes están integrando prácticas sostenibles en su modelo de negocio y generando impacto positivo.",
    coverImage: "/desarrollo_sostenible.webp",
    date: "2025-03-15",
    author: "Martina Fay",
    content: [
      "La sostenibilidad empresarial ha dejado de ser una opción para convertirse en una necesidad estratégica. Las organizaciones que integran prácticas sostenibles no solo contribuyen al bienestar del planeta y la sociedad, sino que también mejoran su competitividad y resiliencia en un mercado cada vez más consciente.",
      "En este artículo, exploramos cinco estrategias probadas que las empresas líderes están implementando para avanzar en su camino hacia la sostenibilidad, generando valor para todos sus grupos de interés.",
      "1. Integración de la sostenibilidad en la estrategia corporativa: Las empresas más exitosas en materia de sostenibilidad son aquellas que la incorporan como parte fundamental de su estrategia de negocio, no como una iniciativa aislada. Esto implica alinear los objetivos de sostenibilidad con la misión, visión y valores de la organización, y asegurar que la alta dirección lidere con el ejemplo.",
      "2. Economía circular y gestión eficiente de recursos: La transición hacia modelos de economía circular permite a las empresas reducir su huella ambiental mientras optimizan el uso de recursos. Esto incluye el rediseño de productos y procesos para minimizar residuos, la implementación de sistemas de recuperación y reciclaje, y la búsqueda de sinergias con otras organizaciones para crear ciclos cerrados de materiales.",
      "3. Cadena de suministro sostenible: Una parte significativa del impacto ambiental y social de muchas empresas se encuentra en su cadena de suministro. Establecer criterios de sostenibilidad para proveedores, colaborar con ellos para mejorar su desempeño y aumentar la transparencia en toda la cadena son acciones clave para reducir riesgos y mejorar el impacto global.",
      "4. Innovación orientada a la sostenibilidad: Las empresas que fomentan la innovación con criterios de sostenibilidad están mejor posicionadas para identificar nuevas oportunidades de negocio y adaptarse a un entorno cambiante. Esto puede incluir el desarrollo de nuevos productos y servicios con menor impacto ambiental, la adopción de tecnologías limpias o la exploración de modelos de negocio alternativos.",
      "5. Medición, reporte y comunicación del impacto: Lo que no se mide no se puede gestionar. Establecer indicadores claros, monitorear el progreso y comunicar de manera transparente los avances y desafíos en materia de sostenibilidad no solo mejora la gestión interna, sino que también fortalece la confianza de los grupos de interés y diferencia a la empresa en el mercado.",
      "La implementación efectiva de estas estrategias requiere un enfoque sistemático, compromiso a largo plazo y la participación de toda la organización. Sin embargo, las empresas que logran integrar la sostenibilidad en su ADN no solo contribuyen a un futuro más sostenible, sino que también se posicionan favorablemente en un contexto donde consumidores, inversores y reguladores valoran cada vez más el triple impacto: económico, social y ambiental.",
    ],
  },
  {
    slug: "certificacion-b-corp-guia",
    title: "Certificación B Corp: Guía Completa para Empresas Comprometidas",
    excerpt:
      "Todo lo que necesitas saber sobre el proceso de certificación B Corp, sus beneficios y cómo preparar a tu organización para obtenerla.",
    coverImage: "/b_corp.webp",
    date: "2025-02-20",
    author: "Natalia Bertinelli",
    content: [
      "La certificación B Corp se ha convertido en uno de los sellos más reconocidos a nivel mundial para empresas que buscan demostrar su compromiso con el triple impacto. Otorgada por B Lab, esta certificación evalúa el desempeño social y ambiental de una empresa, su transparencia pública y su responsabilidad legal.",
      "En este artículo, ofrecemos una guía completa sobre qué es la certificación B Corp, por qué es relevante para las empresas comprometidas con la sostenibilidad, y los pasos clave para obtenerla.",
      "¿Qué es la certificación B Corp?",
      "La certificación B Corp (o Empresa B) reconoce a las empresas que utilizan el poder de los negocios para resolver problemas sociales y ambientales. A diferencia de otras certificaciones que evalúan productos o prácticas específicas, B Corp evalúa el impacto de toda la empresa en sus trabajadores, clientes, comunidad, medio ambiente y gobernanza.",
      "Para obtener la certificación, una empresa debe:",
      "- Completar la Evaluación de Impacto B y obtener una puntuación mínima de 80 puntos sobre 200",
      "- Cumplir con los requisitos legales, que pueden incluir modificaciones en los estatutos de la empresa",
      "- Firmar la Declaración de Interdependencia B Corp",
      "- Pagar una tarifa anual basada en los ingresos de la empresa",
      "Beneficios de ser una Empresa B Certificada",
      "Las empresas que obtienen la certificación B Corp experimentan múltiples beneficios:",
      "1. Diferenciación en el mercado: La certificación demuestra a clientes, inversores y otros grupos de interés el compromiso genuino de la empresa con la sostenibilidad.",
      "2. Atracción y retención de talento: Los profesionales, especialmente las nuevas generaciones, prefieren trabajar en empresas con propósito y valores alineados con los suyos.",
      "3. Mejora continua: El proceso de certificación y recertificación impulsa a las empresas a mejorar constantemente sus prácticas.",
      "4. Acceso a una comunidad global: Las Empresas B forman parte de una comunidad internacional de organizaciones con valores similares, facilitando colaboraciones y aprendizaje mutuo.",
      "5. Resiliencia y adaptación: Las prácticas que evalúa B Corp contribuyen a crear empresas más resilientes ante crisis y cambios en el entorno.",
      "El camino hacia la certificación B Corp puede ser exigente, pero representa una oportunidad invaluable para las empresas que buscan liderar el cambio hacia una economía más inclusiva, equitativa y regenerativa. Más allá del sello, se trata de un compromiso con una forma de hacer negocios que beneficia a todos: accionistas, trabajadores, comunidades y planeta.",
    ],
  },
  {
    slug: "huella-carbono-empresarial",
    title:
      "Cálculo de Huella de Carbono Empresarial: Metodologías y Mejores Prácticas",
    excerpt:
      "Aprende cómo medir, gestionar y reducir las emisiones de gases de efecto invernadero de tu organización de manera efectiva.",
    coverImage: "/huella_carbono.webp",
    date: "2025-01-10",
    author: "Natalia Bertinelli",
    content: [
      "En un contexto de creciente preocupación por el cambio climático, el cálculo y la gestión de la huella de carbono se han convertido en elementos fundamentales de la estrategia de sostenibilidad de cualquier organización. Más allá de una exigencia regulatoria en muchos países, medir las emisiones de gases de efecto invernadero (GEI) representa una oportunidad para identificar ineficiencias, reducir costos y responder a las expectativas de consumidores e inversores cada vez más conscientes.",
      "Este artículo presenta las principales metodologías para el cálculo de la huella de carbono empresarial y las mejores prácticas para su gestión y reducción.",
      "Metodologías para el cálculo de la huella de carbono",
      "Existen varios estándares internacionalmente reconocidos para el cálculo de la huella de carbono organizacional, siendo los más utilizados:",
      "1. Protocolo de Gases de Efecto Invernadero (GHG Protocol): Desarrollado por el World Resources Institute (WRI) y el World Business Council for Sustainable Development (WBCSD), es el estándar más ampliamente utilizado. Clasifica las emisiones en tres alcances:",
      "   - Alcance 1: Emisiones directas provenientes de fuentes que son propiedad o están controladas por la organización.",
      "   - Alcance 2: Emisiones indirectas asociadas a la generación de electricidad, vapor, calefacción o refrigeración adquiridos para consumo propio.",
      "   - Alcance 3: Otras emisiones indirectas que ocurren en la cadena de valor de la empresa, tanto aguas arriba como aguas abajo.",
      "2. ISO 14064: Esta norma internacional proporciona un marco para la cuantificación y el informe de emisiones y remociones de GEI a nivel de organización.",
      "3. Bilan Carbone: Metodología desarrollada por la Agencia Francesa del Medio Ambiente y Gestión de la Energía (ADEME), especialmente popular en países francófonos.",
      "Mejores prácticas para la gestión y reducción de la huella de carbono",
      "Una vez calculada la huella de carbono, las organizaciones pueden implementar diversas estrategias para su gestión y reducción:",
      "1. Establecer objetivos ambiciosos pero realistas: Definir metas de reducción de emisiones basadas en la ciencia (Science-Based Targets) alineadas con el Acuerdo de París.",
      "2. Priorizar acciones según su potencial de reducción y costo: Identificar las fuentes más significativas de emisiones y las medidas más costo-efectivas para abordarlas.",
      "3. Implementar medidas de eficiencia energética: Optimizar el consumo energético en instalaciones, procesos y transporte suele ser la primera línea de acción con retornos económicos positivos.",
      "4. Transitar hacia energías renovables: Sustituir fuentes de energía fósiles por renovables, ya sea mediante instalaciones propias o contratos de compra de energía verde.",
      "5. Innovar en productos y servicios: Rediseñar la oferta para reducir su impacto climático a lo largo de todo su ciclo de vida.",
      "6. Involucrar a la cadena de suministro: Colaborar con proveedores para reducir las emisiones de Alcance 3, que suelen representar la mayor parte de la huella de carbono en muchos sectores.",
      "7. Compensar emisiones residuales: Como último recurso, después de haber implementado medidas de reducción, compensar las emisiones inevitables mediante proyectos certificados de captura o reducción de carbono.",
      "El cálculo y la gestión de la huella de carbono no deben verse como un ejercicio puntual, sino como un proceso continuo de mejora que forma parte integral de la estrategia empresarial. Las organizaciones que abordan este desafío de manera proactiva no solo contribuyen a la lucha contra el cambio climático, sino que también se posicionan favorablemente en un mundo que avanza inexorablemente hacia una economía baja en carbono.",
    ],
  },
];
