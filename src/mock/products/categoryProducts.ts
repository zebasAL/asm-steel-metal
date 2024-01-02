export type CategoryProduct = {
  categoryName: string;
  categoryDescription: string;
  image: string;
  products: Product[];
};

export type Product = {
  name: string;
  image: string;
  description: string;
  data_sheet: string;
  characteristics: string[] | [];
  applications: string[] | [];
  chemical_composition: null | {
    [clave: string]: string;
  }[]
};

export type CategoryProducts = {
  es: CategoryProduct[];
  en: CategoryProduct[];
};

const categoryProducts = {
  es: [
    {
      categoryName: "Acero Grado Herramienta",
      categoryDescription: "Descubre la versatilidad de los Aceros Grado Herramienta: aleaciones potentes que ofrecen resistencia excepcional al desgaste y al impacto, ideales para la fabricación de piezas robustas y duraderas.",
      image: "/images/L6.png",
      products: [
        {
          name: "A2",
          image: "/images/A2.png",
          data_sheet: "/pdf/A2.pdf",
          characteristics: [
            "Acero con buena combinación entre resistencia al desgaste y tenacidad, de buena resistencia a la compresión; aplicable en herramientas de corte y conformado",
            "Se emplea en la fabricación de componentes o insertos de corte y conformado en herramentales de estampado en frío",
            "Al ofrecer la combinación de buena tenacidad así como moderada resistencia al desgaste, se ha usado ampliamente por muchos años en una variedad de aplicaciones de trabajo en frío que requieren buena resistencia a la abrasión",
            "Es de fácil maquinado",
            "Una excelente elección para herramientas de configuración complicada"
          ],
          applications: [
            "Estampado y Formado Matrices y Punzones",
            "Troquelado y Perforado Troquelado Fino",
            "Dados para Acuñado",
            "Herramientas de Roscado",
            "Herramientas para Rebabear",
            "Insertos para Moldes",
            "Partes de Desgaste",
            "Dados de Laminación"
          ],
          chemical_composition: [{
            '%C': '0.95 - 1.05',
            '%Mn': '0.45 - 0.75',
            '%Si': '0.20 - 0.40',
            '%Cr': '4.75 - 5.50',
            '%Mo': '0.90 - 1.40',
            '%V': '0.40',
          }],
          description: "Acero al cromo-molibdeno-vanadio de uso universal con una gran resistencia al desgaste en combinación con una buena tenacidad apto para herramientales para trabajo en frío. Templable al aceite y al aire."
        },
        {
          name: "D2",
          image: "/images/D2.png",
          data_sheet: "/pdf/D2.pdf",
          characteristics: [
            "Un acero grado herramienta para trabajo en frío de alto cromo con aleación de molibdeno y vanadio, y es el más ampliamente usado en operaciones de estampado y conformado.",
            "Alta resistencia al desgaste.",
            "Alta resistencia a la compresión y templabilidad.",
            "Buena estabilidad dimensional durante su tratamiento térmico.",
            "Buena resistencia al revenido.",
            "De baja tenacidad"
          ],
          applications: [
            "Dados para acuñar.",
            "Estampado y formado.",
            "Cizallas.",
            "Dados de embutido.",
            "Herramientas de roscado.",
            "Matrices.",
            "Cuchillas para slitters.",
            "Cuchillas para molinos de plástico.",
            "Rodillos formadores de tubo."
          ],
          chemical_composition: [{
            '%C': '1.40 - 1.60',
            '%Mn': '0.30 - 0.60',
            '%Si': '0.30 - 0.50',
            '%Cr': '11.00 - 13.00',
            '%Mo': '0.70 - 1.20',
            '%V': '0.80',
          }],
          description: "Acero con alto contenido de carbono y cromo junto con vanadio y apto para la fabricación de herramientales para trabajo en frío que demanden una alta resistencia el desgaste junto con una moderada tenacidad. Templable al aceite y al aire."
        },
        {
          name: "H13",
          image: "/images/H13.png",
          data_sheet: "/pdf/H13.pdf",
          characteristics: [
            "Acero con adecuada resistencia al desgaste en caliente, debido a su resistencia a la fatiga térmica, es adecuado para su uso en moldes fundición refrigerados, dados extrusores para Aluminio y Latón, cuchillas, dados forjadores, etc.",
            "Es el acero de uso más común para la manufactura de herramentales en operaciones de trabajo en caliente y moldeo de plástico.",
            "Buena resistencia en caliente y fatiga térmica.",
            "Alta tenacidad y ductilidad.",
            "Buena resistencia al revenido.",
            "Buena resistencia al desgaste por abrasión, tanto en operaciones de alta y baja temperatura."
          ],
          applications: [
            "Herramientas para extrusión de aluminio, latón y magnesio.",
            "Dados para forjar en caliente.",
            "Moldes para fundición a presión de aluminio.",
            "Insertos para inyección de plástico.",
            "Rodillos de laminación en caliente."
          ],
          chemical_composition: [{
            '%C': '0.30 - 0.40',
            '%Mn': '0.20 - 0.40',
            '%Si': '0.80 - 1.20',
            '%Cr': '4.75 - 5.50',
            '%Mo': '1.25 - 1.75',
            '%V': '0.80 - 1.20',
          }],
          description: "Acero al cromo-molibdeno-vanadio apto para la fabricación de herramientales para trabajo en caliente con muy buena  resistencia mecánica a altas temperaturas así como a los choques y fatiga térmica junto con una buena tenacidad. Templable al aceite y al aire."
        },
        {
          name: "L6",
          image: "/images/L6.png",
          data_sheet: "/pdf/L6.pdf",
          characteristics: [
            "Acero grado herramienta para temple al aceite, de uso general para herramientas de trabajo en frío, así como para piezas de maquinaria que requieren alta dureza y alta tenacidad. Por su contenido de níquel ofrece mayor tenacidad comparado con otros aceros de temple al aceite.",
            "Acero adecuado para inyección de plástico, de fácil soldabilidad, empleado en la industria refractaria, dados cortadores, discos cortadores, dados formadores, sierras de corte de madera, punzones, etc."
          ],
          applications: [
            "Dados para forjar en caliente.",
            "Punzones.",
            "Cuchillas para corte de chatarra.",
            "Cinceles y martillos.",
            "Dados de formado.",
            "Rodillos para formado."
          ],
          chemical_composition: [{
            '%C': '0.65 - 0.75',
            '%Mn': '0.55 - 0.85',
            '%Si': '0.20 - 0.40',
            '%Cr': '0.65 - 0.85',
            '%Mo': '0.25',
            '%V': '1.25 - 1.75',
          }],
          description: "Acero al cromo-níquel-molibdeno con una excelente combinación de tenacidad y resistencia al desgaste apto para la fabricación de herramientales tanto para trabajo en frío como para trabajo en caliente. Templable al aceite y al aire."
        },
        {
          name: "M2",
          image: "/images/M2.png",
          data_sheet: "/pdf/M2.pdf",
          characteristics: [
            "Un acero de alta velocidad de medio carbono, con tungsteno y molibdeno; el de más amplio uso de todos los pertenecientes a esta clasificación.",
            "Excelente tenacidad, buenas características de corte, de ahí su empleo como herramienta de corte.",
            "Buena resistencia al revenido.",
            "Particularmente satisfactorio para herramientas de corte en las que se requiere mantenimiento de filo y gran tenacidad con buena resistencia al desgaste y mantenimiento de dureza."
          ],
          applications: [
            "Buriles, Machuelos y Brocas.",
            "Punzones y Matrices.",
            "Fresas, Brochas y peines de roscar.",
            "Herramientas de corte"
          ],
          chemical_composition: [{
            '%C': '0.78 - 0.88',
            '%Si': '0.20 - 0.40',
            '%Mn': '0.20 - 0.40',
            '%Cr': '3.75 - 4.50',
            '%W': '5.50 - 6.75',
            '%Mo': '4.50 - 5.50',
            '%V': '1.60 - 2.20',
          }],
          description: "Acero alta velocidad al molibdeno-tungsteno, posee una buena  combinación de resistencia al desgaste junto con  buena tenacidad apto para la fabricación de herramientas de corte. Templable al aceite y al aire."
        },
        {
          name: "O1",
          image: "/images/O1.png",
          data_sheet: "/pdf/O1.pdf",
          characteristics: [
            "El acero AISI 01, corresponde a un acero grado herramienta para trabajo en frío al Mn – Cr -W, para endurecimiento por temple en aceite y de aplicaciones generales y se caracteriza por:",
            "Buena combinación entre dureza (resistencia al desgaste) y tenacidad después de su endurecimiento.",
            "Regular estabilidad dimensional después del temple y revenido.",
            "Buena maquinabilidad."
          ],
          applications: [
            "Matrices para trabajos en frío.",
            "Cortadores.",
            "Herramientas para roscar.",
            "Dados para embutir.",
            "Troqueles.",
            "Machuelos.",
            "Calibradores.",
            "Herramientas para estampado y formado en frío.",
            "Cuchillas para corte de papel.",
            "Herramientas para madera.",
            "Matrices y Punzones.",
            "Dados para rebabear."
          ],
          chemical_composition: [{
            '%C': '0.85 - 0.95',
            '%Mn': '1.00 - 1.30',
            '%Si': '0.20 - 0.40',
            '%Cr': '0.40 - 0.50',
            '%W': '0.40 - 0.50',
            '%V': '0.20',
          }],
          description: "Acero al cromo-tungsteno-manganeso con muy buena resistencia al desgaste en combinación con muy buena tenacidad lo que lo convierte en un acero muy versátil para la fabricación de herramientales para trabajo en frío. Templable más comúnmente al aceite."
        },
        {
          name: "P20",
          image: "/images/P20.png",
          data_sheet: "/pdf/P20.pdf",
          characteristics: [
            "Una menor variación de dureza de la superficie al centro, característica apreciable en dimensiones grandes.",
            "DUREZA: 28-32 HRc.",
            "Propiedades mecánicas más uniformes en todo su volumen.",
            "Buenas características de maquinado y mejor capacidad de pulido.",
            "Facilidad de aplicaciones para fotograbado.",
            "Puede ser endurecido superficialmente vía procesos de nitruración."
          ],
          applications: [
            "Por sus características mecánicas, puede ser empleado en placas de fijación o sujeción de troqueles de estampado en frío y portamoldes o componentes de moldes de fundición a presión de metales no ferrosos; de igual forma, por su uniformidad de dureza y al estar el rango superior de los aceros convencionales, denominados como tratados, puede ser usado con excelentes resultados en aplicaciones mecánicas (flechas o ejes, cigüeñales, elementos de fijación, etc.)."
          ],
          chemical_composition: [{
            '%C': '0.28 - 0.40',
            '%Mn': '0.60 - 1.00',
            '%P': '0.030  MAX',
            '%S': '0.030  MAX',
            '%Cr': '1.40 - 2.00',
            '%Mo': '0.30 - 0.55',
            '%Si': '0.20 - 0.80',
          }],
          description: "Acero al cromo-molibdeno bonificado (templado y revenido) con buena tenacidad así como excelentes propiedades para mecanizado, pulibilidad y texturizado apto para la fabricación de moldes para la industria del plástico."
        },
        {
          name: "P20 + Ni",
          image: "/images/P20.png",
          data_sheet: "/pdf/P20.pdf",
          characteristics: [
            "Una menor variación de dureza de la superficie al centro, característica apreciable en dimensiones grandes.",
            "DUREZA: 28-32 HRc.",
            "Propiedades mecánicas más uniformes en todo su volumen.",
            "Buenas características de maquinado y mejor capacidad de pulido.",
            "Facilidad de aplicaciones para fotograbado.",
            "Puede ser endurecido superficialmente vía procesos de nitruración."
          ],
          applications: [
            "Por sus características mecánicas, puede ser empleado en placas de fijación o sujeción de troqueles de estampado en frío y portamoldes o componentes de moldes de fundición a presión de metales no ferrosos; de igual forma, por su uniformidad de dureza y al estar el rango superior de los aceros convencionales, denominados como tratados, puede ser usado con excelentes resultados en aplicaciones mecánicas (flechas o ejes, cigüeñales, elementos de fijación, etc.)."
          ],
          chemical_composition: [{
            '%C': '0.28 - 0.40',
            '%Mn': '0.60 - 1.00',
            '%P': '0.030  MAX',
            '%S': '0.030  MAX',
            '%Cr': '1.40 - 2.00',
            '%Mo': '0.30 - 0.55',
            '%Si': '0.20 - 0.80',
            '%Ni': '0.68 - 1.00',
          }],
          description: "Acero al cromo-molibdeno bonificado (templado y revenido) con buena tenacidad así como excelentes propiedades para mecanizado, pulibilidad y texturizado apto para la fabricación de moldes para la industria del plástico."
        },
        {
          name: "S7",
          image: "/images/S7.png",
          data_sheet: "/pdf/S7.pdf",
          characteristics: [
            "Un acero con un balance adecuado entre tenacidad y resistencia al desgaste.",
            "Un acero grado herramienta para trabajo en frío, principalmente; es considerado dentro de la categoría de aceros resistentes al impacto.",
            "Cuenta con moderada resistencia al revenido.",
            "Por sus características puede tener aplicaciones en el ámbito de trabajo en caliente y moldeo de plástico.",
            "Buena maquinabilidad."
          ],
          applications: [
            "Estampado y Formado.",
            "Matrices y Punzones.",
            "Troquelado y Perforado.",
            "Troquelado Fino.",
            "Dados para Clavar Cinceles.",
            "Moldes para Fundición de Zinc a Presión.",
            "Punzones para Pastillas.",
            "Farmacéuticas.",
            "Cuchillas para Corte de Chatarra.",
            "Dados Cabeceadores en Frío y en Tibio.",
            "Moldes de Plástico."
          ],
          chemical_composition: [{
            '%C': '0.45 - 0.55',
            '%Si': '0.20 - 1.00',
            '%Mn': '0.20 - 0.90',
            '%P': '0.030  MAX',
            '%S': '0.030  MAX',
            '%Cr': '3.00 - 3.50',
            '%Mo': '1.30 - 1.80',
            '%V': '0.35',
          }],
          description: "Acero al cromo molibdeno con una alta tenacidad y resistencia al desgaste apto para la fabricación de herramientales de servicio pesado de cortado y formado tanto para trabajo en frío como para trabajo en caliente. Templable al aceite y al aire."
        }
      ]
    },
    {
      categoryName: "Acero Grado Maquinaria",
      categoryDescription: "Explora la resistencia mejorada a la corrosión y durabilidad excepcional de los Aceros Grado Maquinaria, diseñados con precisión para la construcción y reparación de maquinaria.",
      image: "/images/1518.png",
      products: [
        {
          name: "12L14",
          image: "/images/12L14.png",
          data_sheet: "/pdf/12L14.pdf",
          characteristics: [
            "Considerado como el acero de mayor maquinabilidad, según SAE J414a 193% mayor en comparación relativa a acero 1212 (100%).",
            "La maquinabilidad es debida a la combinación de azufre, manganeso y plomo; este último permite la posibilidad de cortes de mayor profundidad y velocidad, mejorando por mucho el acabado superficial de los componentes fabricados con este acero.",
            "De baja forjabilidad, tanto en frío como en caliente, además, de baja soldabilidad en comparación con otros aceros al carbono, tales como 1008, 1018, 1045, etc.",
            "La presentación comercial más común es como estirado en frío, por lo que su acabado es terso y de mejor uniformidad dimensional."
          ],
          applications: [
            "Para la fabricación de birlos, tuercas, tornillos, conexiones, partes automotrices, etc., donde los volúmenes de fabricación son elevados.",
            "Ideal para maquinado en tornos automáticos.",
            "Puede sustituir al acero AISI 1018, siempre y cuando no sea sometido a procesos de soldadura.",
            "Puede sustituir al acero AISI 1045 en aplicaciones de menor esfuerzo mecánico (carga, doblez, etc.), y donde no sea requerido endurecimiento total y procesos de soldadura."
          ],
          chemical_composition: [{
            '%C': '0.15 MAX',
            '%Mn': '0.85 - 1.15',
            '%P': '0.04 -.09',
            '%S': '0.26 - 0.35',
            '%Pb': '0.15 - 0.35',
          }],
          description: "Acero de bajo carbono, resulfurado con contenido de plomo y de fácil mecanización así como buenas propiedades de terminado apto para su uso en máquinas automáticas y para la fabricación en serie de piezas industriales varias como tornillos, tuercas, pernos entre otros."
        },
        {
          name: "1018",
          image: "/images/1018.png",
          data_sheet: "/pdf/1018.pdf",
          characteristics: [
            "Es un acero de bajo carbono de óptima forjabilidad en caliente, excelente formabilidad en frío y una muy buena soldabilidad.",
            "Su maquinabilidad es menor en comparación con los aceros de la serie 11 y 12; de acuerdo a SAE J414a, presenta una capacidad de maquinado del 70 % con respecto al acero 1212 AISI (referido como 100 %).",
            "Como acabado de laminado en caliente, sus propiedades mecánicas y dureza están por debajo de las anteriormente señaladas en caliente, salvo en una menor profundidad; referirse a la norma ASTM A108-13.",
            "Como pelado y enderezado, los defectos inherentes al proceso de laminación en caliente pueden haberse eliminado, sin que esto sea una garantía, salvo que, de esta manera haya sido expresado y acordado.",
            "El proceso de estirado en frío confiere un nivel de endurecimiento superficial, además de mejorar ligeramente su maquinabilidad."
          ],
          applications: [
            "En la fabricación de partes mecánicas para las industrias metalmecánica es utilizado, construcción, tornillería, automotriz, coples, elementos de sujeción (tensores para estructuras), flechas, bujes, etc.",
            "Con él se desarrolla una dureza superficial vía tratamiento termoquímico de cementación o carbonitruración, contando con un núcleo suave y tenaz.",
            "Empleado como horquilla de sujeción en la industria de autotransportes y como anclaje de sujeción en la industria de la construcción, debe tomarse en consideración que el proceso de doblado en frío se haga de forma lenta, uniforme y en un solo evento, colocando como mandril guía de doblez una barra que tenga al menos dos veces el diámetro de la barra a ser doblada.",
            "Puede sustituir al acero AISI 12L14, siempre y cuando no se requiera la producción de altos volúmenes de fabricación."
          ],
          chemical_composition: [{
            '%C': '0.15 - 0.20',
            '%Mn': '0.60 - 0.90',
            '%P': '0.040 MAX',
            '%S': '0.050 MAX',
          }],
          description: "Acero con bajo contenido de carbono con buenas propiedades de maquinado y soldabilidad así como de mayor uso en la industria para la construcción de maquinaria y partes industriales."
        },
        {
          name: "1026",
          image: "/images/1026.png",
          data_sheet: "/pdf/1026.pdf",
          characteristics: [
            "Bajo desgaste de la herramienta utilizada para el maquinado, pérdida mínima de peso por maquinado, óptima soldabilidad.",
            "Proporciona excelentes propiedades mecánicas de mecanización, resistencia y dureza.",
            "Se puede utilizar genéricamente para toda clase de bujes que no sean de alta resistencia, y en caso de requerir una mayor al desgaste, se pueden cementar superficialmente las mismas."
          ],
          applications: [
            "Utilizado para todo tipo de bujes para maquinaria industrial, maquinaria agrícola, maquinaria de construcción.",
            "También se puede aplicar en piezas que serán soldadas.",
            "Bujes cementados para aplicaciones con alta generación de fricción.",
            "Cilindros y Engranajes.",
            "Ejes.",
            "Rodillos.",
            "Bujes.",
            "Estructuras."
          ],
          chemical_composition: [{
            '%C': '0.2 - 0.28',
            '%Mn': '0.60 - 0.90',
            '%Si': '0.15 - 0.35',
            '%P': '0.040 MAX',
            '%S': '0.050 MAX',
          }],
          description: "Acero al carbono en barra hueca y de uso general en la construcción de maquinaria con muy buena maquinabilidad y soldabilidad susceptible de endurecimiento principalmente a través del proceso de cementación."
        },
        {
          name: "1045",
          image: "/images/1045.png",
          data_sheet: "/pdf/1045.pdf",
          characteristics: [
            "Tiene una óptima forjabilidad en caliente el acero de medio carbono.",
            "Excelente soldabilidad, tomando precauciones para evitar la fractura alrededor de la zona soldada.",
            "Su maquinabilidad es regular de acuerdo a SAE J414a, corresponde a 55 % con respecto al acero AISI 1212 (100 % como referencia).",
            "Reacciona fácilmente al endurecimiento por temple y revenido convencional, sea total o superficial (inducción o flama).",
            "Como acabado de laminado en caliente, sus propiedades mecánicas y dureza están por debajo de las anteriormente señaladas.",
            "Como acabado de estirado en frío (directo de la laminación en caliente), puede presentar los mismos defectos que como laminado en caliente, salvo en una menor profundidad; referirse a la norma ASTM A108-13."
          ],
          applications: [
            "Aplicaciones en la manufactura de partes y componentes para maquinaria, sector automotriz y agroindustrial.",
            "Las aplicaciones están designadas a la elaboración de partes de transmisión y aplicaciones mecánicas como, pernos, flechas, rótulas, impulsores, tornillería, flechas para pozo profundo, entre otros.",
            "Aplicaciones en la manufactura de partes y componentes para maquinaria, sector automotriz y agroindustrial.",
            "Se emplea como anclaje de sujeción en la industria de la construcción u horquilla de sujeción en la industria de autotransportes, debe tomarse en consideración que el proceso de doblado en frío se haga de forma lenta, uniforme y en un solo evento, colocando como mandril guía de doblez una barra que tenga al menos dos veces el diámetro de la barra a ser doblada.",
            "Puede ser sustituido por el acero AISI 1018, siempre y cuando, no sea sometido a procesos de soldadura, y de hacerlo, deben tomarse en consideración las recomendaciones de esta práctica."
          ],
          chemical_composition: [{
            '%C': '0.43 - 0.50',
            '%Mn': '0.60 - 0.90',
            '%P': '0.040 MAX',
            '%S': '0.050 MAX',
          }],
          description: "Acero con contenido de carbono medio y templable con buenas propiedades de maquinado y de uso en la industria para la construcción de maquinaria y partes industriales. Susceptible de soldabilidad bajo ciertos cuidados."
        },
        {
          name: "1060",
          image: "/images/1060.png",
          data_sheet: "/pdf/1060.pdf",
          characteristics: [
            "Acero para uso construcción de maquinaria. Resistencia al desgaste: discos de embrague, ejes de transmisión, portaherramientas, implementos agrícolas, etc.",
            "Considerado de alto carbono, presenta buena forjabilidad, no es recomendable para ser sometido a proceso de soldadura; en condición de temple presenta durezas cercanas a los 65 HRc.",
            "Cuando es endurecido de forma adecuada, la estructura consiste en martensita rica en carbono disponible libre de carburos."
          ],
          applications: [
            "Implementos agrícolas, porta herramientas, discos de embrague, ejes, flechas, cinceles.",
            "Las aplicaciones incluyen herramientas de mano tales como destornilladores, alicates y objetos similares.",
            "El producto forjado debe ser recocido antes de cualquier tratamiento de endurecimiento."
          ],
          chemical_composition: [{
            '%C': '0.55 - 0.65',
            '%Mn': '0.60 - 0.90',
            '%Si': '0.15 - 0.30',
            '%P': '0.040 MAX',
            '%S': '0.050 MAX',
          }],
          description: "Acero al alto carbono con una gran resistencia al desgaste apto para su uso en la fabricación de partes para equipo agrícola y automotriz así como en la fabricación de herramientas de mano."
        },
        {
          name: "1141",
          image: "/images/1141.png",
          data_sheet: "/pdf/1141.pdf",
          characteristics: [
            "Tiene una óptima forjabilidad en caliente el acero de medio carbono.",
            "Excelente soldabilidad, tomando precauciones para evitar la fractura alrededor de la zona soldada.",
            "Su maquinabilidad es regular de acuerdo a SAE J414a, corresponde a 55 % con respecto al acero AISI 1212 (100 % como referencia).",
            "Reacciona fácilmente al endurecimiento por temple y revenido convencional, sea total o superficial (inducción o flama).",
            "Como acabado de laminado en caliente, sus propiedades mecánicas y dureza están por debajo de las anteriormente señaladas.",
            "Como acabado de estirado en frío (directo de la laminación en caliente), puede presentar los mismos defectos que como laminado en caliente, salvo en una menor profundidad; referirse a la norma ASTM A108-13."
          ],
          applications: [
            "Aplicaciones en la manufactura de partes y componentes para maquinaria, sector automotriz y agroindustrial.",
            "Las aplicaciones están designadas a la elaboración de partes de transmisión y aplicaciones mecánicas como, pernos, flechas, rótulas, impulsores, tornillería, flechas para pozo profundo, entre otros.",
            "Aplicaciones en la manufactura de partes y componentes para maquinaria, sector automotriz y agroindustrial.",
            "Se emplea como anclaje de sujeción en la industria de la construcción u horquilla de sujeción en la industria de autotransportes. Debe tomarse en consideración que el proceso de doblado en frío se haga de forma lenta, uniforme y en un solo evento, colocando como mandril guía de doblez una barra que tenga al menos dos veces el diámetro de la barra a ser doblada. De lo contrario, se corre el riesgo de generar fisuras o fracturas en la parte exterior del doblez.",
            "Puede ser sustituido por el acero AISI 1018, siempre y cuando, no sea sometido a procesos de soldadura, y de hacerlo, deben tomarse en consideración las recomendaciones de esta práctica."
          ],
          chemical_composition: [{
            '%C': '0.37 - 0.45',
            '%Mn': '1.35 - 1.65',
            '%P': '0.040 MAX',
            '%S': '0.08 - 0.13',
          }],
          description: "Acero resulfurado y de fácil mecanización así como buenas propiedades mecánicas y apto para su uso en máquinas automáticas para la fabricación en serie de piezas industriales."
        },
        {
          name: "1144",
          image: "/images/1144.png",
          data_sheet: "/pdf/1144.pdf",
          characteristics: [
            "El acero 1144 es un tipo de acero al carbono resultante medio carbonizado que contiene manganeso y azufre, también conocido como acero resistente al estrés.",
            "Ofrece alta resistencia y dureza y se puede endurecer con flama para mejorar aún más las propiedades de la superficie.",
            "El acero sin corte se ha utilizado donde la resistencia a la deformación y el desgaste son esenciales, como husillos, engranajes y vástagos de pistón, etc.",
            "Se puede utilizar como un reemplazo económico para calidades de aleación templadas."
          ],
          applications: [
            "Partes que lleven mucho maquinado y que se requiera que tengan alta resistencia a la tensión y al desgaste.",
            "Maquinabilidad: 83% tomando a el 1212 como el 100%.",
            "Tiene altas propiedades mecánicas y está diseñado para aplicaciones donde se someta a grandes tensiones y esfuerzos, como por ejemplo flechas, pernos, espárragos, pernos de dirección, etc.",
            "Comúnmente mecanizado en tornos automáticos y multihusillos."
          ],
          chemical_composition: [{
            '%C': '0.40 - 0.48',
            '%Mn': '1.35 - 1.65',
            '%P': '0.040 MAX',
            '%S': '0.24 - 0.033 MAX',
          }],
          description: "Acero de bajo carbono, resulfurado y de fácil mecanización así como buenas propiedades mecánicas y de terminado apto para su uso en máquinas automáticas y para la fabricación en serie de piezas industriales."
        },
        {
          name: "1215",
          image: "/images/1215.png",
          data_sheet: "/pdf/1215.pdf",
          characteristics: [
            "Acero desulfurado y refosforado de alta maquinabilidad, la adición de fósforo aumenta la maquinabilidad y ayuda a la formación de virutas cortas.",
            "A diferencia del SAE/AISI 12L14 este no contiene Plomo, sin embargo esto no demerita su desempeño. Las aplicaciones de este grado de acero son aquellas donde se puedan sacrificar propiedades de resistencia por propiedades de maquinado, se pueden fabricar sujetadores, tuercas, pernos, etc.",
            "Excelentes propiedades de maquinado con magníficos acabados."
          ],
          applications: [
            "Utilizado en procesos de fabricación de tornillos donde se requiere una alta maquinabilidad, en la fabricación de pernos y tuercas para la industria automotriz.",
            "Aplicación para múltiples usos industriales que requieren mecanización de alta precisión.",
            "No es recomendable para aplicaciones que requieran soldadura.",
            "Incrementa la productividad de procesos de transformación, con excelentes acabados; en especial, recomendados para trabajo en tornos automáticos."
          ],
          chemical_composition: [{
            '%C': '0.090 MAX',
            '%Mn': '0.75 - 1.05',
            '%P': '0.04 - 0.09',
            '%S': '0.26 - 0.35',
          }],
          description: "Acero resulfurado y refosforado de fácil mecanización así como buenas propiedades mecánicas y de terminado apto para su uso en máquinas automáticas para la fabricación en serie de piezas industriales."
        },
        {
          name: "1518",
          image: "/images/1518.png",
          data_sheet: "/pdf/1518.pdf",
          characteristics: [
            "Un acero de alta resistencia a la cedencia, de estructura de grano fino y de baja aleación.",
            "Acero con alto contenido de manganeso.",
            "Barra hueca que, por su balance químico, presenta buena maquinabilidad y buena soldabilidad.",
            "Ideal para la fabricación de partes en altos volúmenes.",
            "Para fabricación de componentes de maquinaria que requieran alta resistencia.",
            "La forma de tubo le permite ahorro de material cuando requiera fabricar piezas que deben tener hueco en su centro."
          ],
          applications: [
            "Se pueden fabricar bujes, acoples, piñones y ejes de transmisión.",
            "La fabricación de engranes, coronas, sinfines, pistas de rodamientos, entre otras.",
            "Cilindros.",
            "Rodillos.",
            "Estructuras.",
            "Bujes.",
            "Se pueden fabricar tornillos."
          ],
          chemical_composition: [{
            '%C': '0.15 - 0.21',
            '%Mn': '1.10 - 1.40',
            '%P': '0.040 MAX',
            '%S': '0.050 MAX',
          }],
          description: "Acero al carbono en barra hueca y de uso general en la construcción de maquinaria con muy buena maquinabilidad y soldabilidad susceptible de endurecimiento principalmente a través del proceso de cementación."
        },
        {
          name: "4140",
          image: "/images/4140.png",
          data_sheet: "/pdf/4140.pdf",
          characteristics: [
            "Acero de templabilidad media; en condición de recocido puede ser sometido a endurecimiento por temple y revenido a valores de dureza alrededor de 50 HRC (ver recomendaciones generales de tratamiento térmico).",
            "En condición de pretemplado (tratado o bonificado), posee una buena combinación de tenacidad y resistencia que le permite su uso directo en aplicaciones de partes de maquinaria.",
            "Maquinabilidad aceptable, del orden de 61 % con respecto a un acero AISI 1112 (100 % como referencia de maquinabilidad en los aceros al carbono - Metals Handbook)."
          ],
          applications: [
            "Partes mecánicas de maquinaria en general, como elementos de sujeción o transmisión de movimiento (ejes, flechas, engranes de baja velocidad, sinfines, catarinas, pernos, tornillería de alta resistencia, cuerpos de máquina, barras de torsión, etc.).",
            "También empleado como portamolde o portatroquel, planchadores y piezas de sacrificio.",
            "Al ser empleado como anclaje de sujeción en la industria de la construcción u horquillas de sujeción en la industria de autotransportes.",
            "Sustituye a cualquier acero al carbono donde se requiere una mayor resistencia mecánica o dureza."
          ],
          chemical_composition: [{
            '%C': '0.38 - 0.43',
            '%Mn': '0.75 - 1.00',
            '%P': '0.035 MAX',
            '%S': '0.040 MAX',
            '%Si': '0.15 - 0.35',
            '%Cr': '0.80 - 1.10',
            '%Mo': '0.15 - 0.25',
          }],
          description: "Acero al cromo-molibdeno templable suministrado en condición de recocido así como también de tratado y de uso común en la industria para la construcción de maquinaria partes industriales con mayores exigencias mecánicas."
        },
        {
          name: "4340 QT",
          image: "/images/4340.png",
          data_sheet: "/pdf/4340.pdf",
          characteristics: [
            "Este acero 4340-QT es uno de los mejores aceros grado maquinaria por su alto contenido de aleación, posee una excelente y profunda templabilidad, buena tenacidad y ductilidad y por su elevada resistencia a la tensión puede usarse en piezas sujetas a severos esfuerzos.",
            "Aunque es difícil de soldar, si se pre-calientan las partes puede usarse cualquier método de soldadura.",
            "Maquinabilidad: 57% tomando a el Acero 1212 como el 100%."
          ],
          applications: [
            "En todo tipo de partes sujetas a severos esfuerzos tales como flecha de transmisión automotrices, ejes, dados, engranes, barrenadoras, partes de perforación, tijeras para corte en caliente, etc.",
            "Cigüeñales automotrices, marinos, de motores diésel y otros ejes de servicio pesado, semi-ejes, sustitutos, engranajes, piezas de perforación minera, herramientas para pozos petroleros, cuerpos de perforación, placas maestras, etc."
          ],
          chemical_composition: [{
            '%C': '0.38 - 0.43',
            '%Mn': '0.60 - 0.80',
            '%P': '0.035 MAX',
            '%S': '0.040 MAX',
            '%Si': '0.15 - 0.30',
            '%Cr': '0.80 - 1.00',
            '%Mo': '0.20 - 0.30',
          }],
          description: "Acero al cromo-níquel-molibdeno suministrado en condición de tratado con una muy buena resistencia a la tensión y tenacidad apto para la fabricación de piezas para diversas aplicaciones y sujetas a grandes esfuerzos mecánicos."
        },
        {
          name: "5160",
          image: "/images/5160.png",
          data_sheet: "/pdf/5160.pdf",
          characteristics: [
            "Acero al alto carbono aleado al Cromo – Manganeso, de gran durabilidad en trabajo de compresión y tracción.",
            "Buena templabilidad.",
            "Es también conocido como acero muelle.",
            "Forma de suministro: Redondos y soleras.",
            "Acero caracterizado por su gran tenacidad, resistencia a la fatiga y a la tracción, debido a sus componentes."
          ],
          applications: [
            "Las aplicaciones incluyen resortes, muelles, cuchillos, ballestas y resortes planos de cualquier espesor.",
            "Se emplea además en barras de torsión, resortes de suspensión de automóviles.",
            "Se usa ampliamente en la industria automotriz y agrícola."
          ],
          chemical_composition: [{
            '%C': '0.56 - 0.64',
            '%Mn': '0.75 - 1.00',
            '%Cr': '0.70 - 0.90',
            '%P': '0.035 MAX',
            '%S': '0.040 MAX',
            '%Si': '0.15 - 0.35',
          }],
          description: "Acero al carbono conocido como acero muelle con muy buena resistencia a la fatiga, una alta ductilidad al igual que flexibilidad."
        },
        {
          name: "8620",
          image: "/images/8620.png",
          data_sheet: "/pdf/8620.pdf",
          characteristics: [
            "Acero para cementación.",
            "Buena templabilidad.",
            "Acero con muy buenas características de forjabilidad en caliente.",
            "Buena soldabilidad.",
            "Buena maquinabilidad, del orden de 66% con respecto a un acero 1112.",
            "La excelente combinación de sus elementos de aleación le imparten gran tenacidad en el núcleo, alta dureza superficial y resistencia al desgaste."
          ],
          applications: [
            "Utilizado en piezas que requieran centro suave con una capa superficial muy dura.",
            "Algunas aplicaciones están destinadas a la fabricación de engranes, coronas, sinfines, bujes, pistas de rodamientos, entre otras.",
            "Las aplicaciones principales están destinadas a aquellas en donde es necesario conferir una dureza elevada en la superficie y contrarrestar el desgaste ocasionado por el contacto dinámico metal - metal."
          ],
          chemical_composition: [{
            '%C': '0.18 - 0.23',
            '%Mn': '0.70 - 0.90',
            '%P': '0.035 MAX',
            '%S': '0.040 MAX',
            '%Si': '0.15 - 0.35',
            '%Cr': '0.40 - 0.60',
            '%Mo': '0.15 - 0.25',
            '%Ni': '0.40 - 0.70',
          }],
          description: "Acero al cromo-níquel-molibdeno para cementación y de fácil maquinabilidad ampliamente utilizado para la fabricación de engranajes industriales y otras partes más que demanden una alta dureza superficial y un núcleo suave."
        },
        {
          name: "9840 RT",
          image: "/images/9840.png",
          data_sheet: "/pdf/9840.pdf",
          characteristics: [
            "En condición de pretemplado (tratado o bonificado), posee una muy buena combinación entre tenacidad y resistencia que le permite su uso directo en aplicaciones de partes de maquinaria.",
            "Maquinabilidad 59%.",
            "Mayor uniformidad de dureza de la superficie al núcleo.",
            "Mayor resistencia a la fatiga mecánica que el acero 4140.",
            "Acero grado maquinaria o de baja aleación de templabilidad mejora; en condición de recocido puede ser sometido a endurecimiento por temple y revenido a valores de dureza alrededor de 50 HRC (ver recomendaciones generales de tratamiento térmico)."
          ],
          applications: [
            "Sustituye a cualquier acero al carbono donde es requerida una mayor resistencia mecánica o dureza.",
            "Es una alternativa de sustitución de aceros como AISI 4140 y 4340.",
            "Partes mecánicas de maquinaria en general, como elementos de sujeción o transmisión de movimiento (ejes, flechas, engranes de baja velocidad, sinfines, catarinas, pernos, tornillería de alta resistencia, cuerpos de máquina, barras de torsión, etc.)."
          ],
          chemical_composition: [{
            '%C': '0.38 - 0.43',
            '%Mn': '0.70 - 0.90',
            '%Si': '0.20 - 0.53',
            '%Ni': '0.85 - 1.15',
            '%Cr': '0.70 - 0.90',
            '%Mo': '0.20 - 0.30',
          }],
          description: "Acero al cromo-níquel-molibdeno suministrado en condición de recocido así como de tratado con una buena resistencia a la mecánica y apto para la fabricación de piezas de maquinaria de uso general."
        },
        {
          name: "A36",
          image: "/images/A36.png",
          data_sheet: "/pdf/A36.pdf",
          characteristics: [
            "Es uno de los aceros estructurales de carbono más utilizados, ya que su contenido de carbono es de un máximo de 0.29%, lo que se considera acero suave.",
            "Tiene la capacidad de remacharse, apernarse o soldarse.",
            "Es un material rentable y reciclable fácil de pintar o perforar, debido a que no requiere de una fabricación laboriosa.",
            "Las placas se manejan por tamaños estándar en los centros de distribución, pero se pueden realizar en otros tamaños para pedidos especiales.",
            "Por lo regular, están disponibles con un espesor estándar y grueso, además el proceso para obtenerlas se realizan comúnmente al ser laminadas en caliente."
          ],
          applications: [
            "El acero A36 es un tipo de acero considerado como el más común del mundo, debido a la facilidad con la que se puede fabricar.",
            "Lo anterior se aprovecha en la manufactura de diferentes productos para construcción.",
            "Este material puede ser utilizado como parte de hojas laminadas de acero, así como elementos de gran tamaño en donde se emplean los aceros conformados.",
            "Se usan en la creación de estructuras de acero soldadas o que tienen que ser atornilladas, con fines industriales o para construcción civil y de obra pública."
          ],
          chemical_composition: [{
            '%C': '0.25 MAX',
            '%Mn': '0.80 - 1.20',
            '%P': '0.040 MAX',
            '%S': '0.050 MAX',
            '%Si': '0.040 MAX',
          }],
          description: "Acero comercial multiusos con buena resistencia y maquinabilidad, susceptible de soldabilidad."
        }
      ]
    },
    {
      categoryName: "Aluminio",
      categoryDescription: "Descubre las propiedades versátiles y livianas de nuestro aluminio de alta calidad.",
      image: "/images/5083.png",
      products: [
        {
          name: "5083",
          image: "/images/5083.png",
          data_sheet: "/pdf/5083.pdf",
          characteristics: [
            "Excelente resistencia a la corrosión.",
            "Buena soldabilidad.",
            "El aluminio 5083 es conocido por su excepcional comportamiento ante entornos agresivos.",
            "Su elevada resistencia a la corrosión lo hace ideal en aplicaciones para ambientes químicos o marinos.",
            "La mayor resistencia de las aleaciones no tratables térmicamente."
          ],
          applications: [
            "Moldes Termoplásticos",
            "Industria Aeronáutica, Automotriz y Textil",
            "Recipientes de Presión",
            "Industria Naval, Petrolera y del Plástico"
          ],
          chemical_composition: [{
            '%Si': '0.40 MAX',
            '%Fe': '0.40 MAX',
            '%Cu': '0.10 MAX',
            '%Mg': '4.00 - 4.90',
            '%Cr': '0.05 - 0.25',
            '%Zn': '0.25 MAX',
            '%Ti': '0.15 MAX',
            '%Mn': '0.40 - 1.00',
            '%Al': 'Balance',
          }],
          description: "Aleación de aluminio con una resistencia mecánica moderada y un excepcional comportamiento ante entornos agresivos, ya que posee una muy buena resistencia a la corrosión. Apto para la fabricación de partes para industrias del plástico, navales, aeronáuticas y automotrices, entre otras."
        },
        {
          name: "6061 T6",
          image: "/images/6061.png",
          data_sheet: "/pdf/6061.pdf",
          characteristics: [
            "Excelente Conductividad",
            "Dureza: 95 - 100 HB",
            "Posee Excelente Resistencia a la Corrosión",
            "Gran Resistencia a la Tensión / Se Puede Soldar Fácilmente",
            "Ideal para la Elaboración de Piezas Maquinadas con Calidad de Excelencia y para Trabajos que Requieran Buen Acabado Superficial",
            "Posee Excelente Resistencia a la Corrosión y Acabado Además de Facilidad de Soldadura y una Resistencia Parecida a la del Acero"
          ],
          applications: [
            "Moldes para la Fabricación de Botellas",
            "Partes para la Industria Aeronáutica y Automotriz",
            "Conexiones - Tornillos",
            "Fixture para la Industria Electrónica y Automotriz"
          ],
          chemical_composition: [{
            '%Si': '0.40 - 0.80',
            '%Fe': '0.79 MAX',
            '%Cu': '0.15 - 0.40',
            '%Mg': '0.80 - 1.20',
            '%Cr': '0.04 - 0.34',
            '%Zn': '0.25 MAX',
            '%Ti': '0.015 MAX',
            '%Mn': '0.15 MAX',
            '%Al': 'Balance',
          }],
          description: "Aleación de aluminio endurecido fácil de maquinar con buenas propiedades mecánicas, como resistencia a la abrasión y a la corrosión. Apto para la fabricación de moldes para la industria del plástico."
        },
        {
          name: "7075",
          image: "/images/7075.png",
          data_sheet: "/pdf/7075.pdf",
          characteristics: [
            "Adecuado para Piezas Sometidas a Grandes Fatigas",
            "Una Aleación de Aluminio de Alta Resistencia Mecánica y Buena Resistencia a la Fatiga en Comparación con Otras Aleaciones",
            "Alto Límite Elástico",
            "Buenas Características de Soldabilidad",
            "Susceptible a Tratamientos Electrolíticos"
          ],
          applications: [
            "Moldes de Soplado",
            "Blindajes / Robótica / Fuselajes",
            "Partes para la Industria Aeronáutica y Automotriz",
            "Partes para Maquinaria Industrial / Conexiones / Farmacéutica"
          ],
          chemical_composition: [{
            '%Si': '0.40 MAX',
            '%Fe': '0.50 MAX',
            '%Cu': '1.20 - 2.00',
            '%Mg': '2.10 - 2.90',
            '%Cr': '0.18 - 0.28',
            '%Zn': '5.10 - 6.10',
            '%Ti': '0.20 MAX',
            '%Mn': '0.30 MAX',
            '%Al': 'Balance',
          }],
          description: "Aleación de aluminio con buenas propiedades de maquinado y resistencia mecánica, alta durabilidad y buena resistencia a la fatiga. Apto para la fabricación de moldes para la industria del plástico y algunas otras aplicaciones industriales."
        }
      ]
    },
    {
      categoryName: "Hierro Colado",
      categoryDescription: "Sumérgete en la excelencia del Hierro Colado: calidad insuperable con eficiencia comprobada en colada continua, líder en el 90% de la producción mundial de acero.",
      image: "/images/HC_Gris_300.png",
      products: [
        {
          name: "HC Gris 300",
          image: "/images/HC_Gris_300.png",
          data_sheet: "/pdf/300.pdf",
          characteristics: [
            "Moldes de Soplado",
            "Blindajes / Robótica / Fuselajes",
            "Partes para la Industria Aeronáutica y Automotriz",
            "Partes para Maquinaria Industrial / Conexiones / Farmacéutica"
          ],
          applications: [
            "Partes de Maquinaria",
            "Industria Oil & Gas",
            "Industria Hidráulica y Neumática",
            "Industria Automotriz",
            "Automatización para Bombas y Compresores"
          ],
          chemical_composition: [{
            '%C': '2.95 - 3.45',
            '%Si': '2.10 - 2.50',
            '%Mn': '0.55 - 0.75',
            '%P': '0.10 - 0.20',
            '%S': '0.04 - 0.07',
            '%Fe': 'Balance',
          }],
          description: "Hierro gris templable con buena resistencia al desgaste, una óptima maquinabilidad junto con un excelente acabado con un grano más fino que la función convencional. Así como ausencia de inclusiones, apto para la fabricación de partes para la industria neumática e hidráulica."
        }
      ]
    },
    {
      categoryName: "Inoxidables",
      categoryDescription: "Explora nuestros aceros inoxidables resistentes y duraderos.",
      image: "/images/304.png",
      products: [
        {
          name: "17-4PH",
          image: "/images/17-4PH.png",
          data_sheet: "/pdf/17-4PH.pdf",
          characteristics: [
            "Acero Inoxidable Martensítico",
            "Endurecido por Precipitación",
            "Fabricación de Piezas con Alta Resistencia Mecánica",
            "Alta Resistencia a la Resiliencia",
            "Excelente Resistencia a la Fatiga",
            "Alta Resistencia y Dureza",
            "Excelente Resistencia a la Corrosión"
          ],
          applications: [
            "Construcción de Plantas en la Industria Química, Maderera, Naval, Ingeniería Mecánica, Petrolera y Metalúrgica",
            "Fabricación de Flechas del Motor de Bombas Sumergibles",
            "Componentes para Reactores Nucleares",
            "Engranes",
            "Equipos para la Industria del Papel",
            "Partes para Turbinas"
          ],
          chemical_composition: [{
            '%C': '0.70 MAX',
            '%Si': '0.75 MAX',
            '%Mn': '0.25 - 0.75',
            '%P': '0.040 MAX',
            '%S': '0.030 MAX',
            '%Cr': '16.00 - 16.75',
            '%Ni': '4.50 - 5.00',
            '%Cu': '3.00 - 5.00',
            '%Nb + Ta': '0.15 - 0.45',
          }],
          description: "Acero inoxidable al cromo con una buena resistencia a la corrosión y endurecible con una combinación de propiedades mecánicas como resistencia al desgaste y tenacidad. Apto para una variedad de aplicaciones."
        },
        {
          name: "303",
          image: "/images/303.png",
          data_sheet: "/pdf/303.pdf",
          characteristics: [
            "Dentro de toda la serie 300 este acero Inoxidable es el mejor en maquinibilidad.",
            "Es especialmente utilizado cuando se requiere fabricar piezas en serie.",
            "Tiene excelente resistencia a la corrosión en condiciones ligeramente corrosivas.",
            "Menor conductividad térmica que los aceros al carbono, de baja aleación o grado herramienta.",
            "Posee buena resistencia a la corrosión y oxidación."
          ],
          applications: [
            "Producción en serie de Tuercas y Tornillos.",
            "Empleado para altas producciones por maquinado de partes o componentes mecánicos.",
            "Bushings, cuñas.",
            "Partes de válvulas.",
            "Remaches.",
            "Ensambles y flechas."
          ],
          chemical_composition: [{
            '%C': '0.15',
            '%Si': '1.00',
            '%Mn': '2.00',
            '%P': '0.20',
            '%S': '0.15',
            '%Cr': '17.00 - 19.00',
            '%Ni': '8.00 - 10.00',
          }],
          description: "Acero inoxidable al cromo-níquel resistente a la corrosión con adición de azufre para facilitar el mecanizado. Apto para trabajos en máquinas automáticas y producciones en serie."
        },
        {
          name: "304",
          image: "/images/304.png",
          data_sheet: "/pdf/304.pdf",
          characteristics: [
            "Es un acero austenítico, muy resistente a la corrosión.",
            "Utilizado en la industria Alimenticia, Médica y Química.",
            "De muy buena resistencia a la oxidación y corrosión.",
            "Con buenas características de forjabilidad y soldabilidad; menos sensible a precipitación intensa de carburos.",
            "Menor conductividad térmica que los aceros al carbono, de baja aleación o grado herramienta."
          ],
          applications: [
            "Fabricación de utensilios de cocina, cubiertos, ollas y sartenes.",
            "Hornos de microondas, fregaderos.",
            "En la industria de la construcción, fachadas, escaleras y balcones.",
            "Industria de la joyería y relojes.",
            "En la manufactura de elementos de sujeción y transmisión (coples, flechas, tornillería, etc.)."
          ],
          chemical_composition: [{
            '%C': '0.08 / 304L 0.030',
            '%Si': '1.00',
            '%Mn': '2.00',
            '%P': '0.045',
            '%S': '0.030',
            '%Cr': '18.00 - 20.00',
            '%Ni': '8.00 - 10.50',
          }],
          description: "Acero inoxidable al cromo-níquel antimagnético con una muy buena resistencia a la corrosión y buenas propiedades mecánicas. Apto para la fabricación de enseres para uso doméstico e industrial."
        },
        {
          name: "310",
          image: "/images/310.png",
          data_sheet: "/pdf/310.pdf",
          characteristics: [
            "Inoxidable resistente a la corrosión hasta 2000 F.",
            "Resistente a altas temperaturas.",
            "Acero que reúne excelente resistencia a la oxidación y al calor.",
            "Acero Inoxidable austeníticos con los mayores contenidos de cromo y níquel."
          ],
          applications: [
            "Intercambiadores de calor.",
            "Partes para hornos, Calderas de vapor y Tubos radiantes.",
            "Equipos de procesos de alimentos.",
            "Cámaras de combustión o como material de aporte en soldaduras."
          ],
          chemical_composition: [{
            '%C': '0.25',
            '%Si': '1.50',
            '%Mn': '2.00',
            '%P': '0.045',
            '%S': '0.030',
            '%Cr': '25.00 - 26.00',
            '%Ni': '19.00 - 22.00',
          }],
          description: "Acero inoxidable refractario al cromo-níquel antimagnético con una muy alta resistencia a la temperatura y buenas propiedades mecánicas. Apto para la fabricación de partes expuestas a temperaturas de trabajo elevadas."
        },
        {
          name: "316",
          image: "/images/316.png",
          data_sheet: "/pdf/316.pdf",
          characteristics: [
            "El acero inoxidable Tipo 316 es un acero inoxidable de cromo níquel austenítico que contiene molibdeno.",
            "Esta adición aumenta la resistencia general a la corrosión sobre todos a los ácidos sulfúricos.",
            "Muy resistente a altas temperaturas.",
            "El acero tipo 316 L es una modificación de bajo carbono para minimizar la formación de carburos durante",
            "el proceso de soldadura."
          ],
          applications: [
            "Tanques y recipientes de productos químicos.",
            "Fabricación de válvulas y bombas.",
            "Equipos de pulpa y papel.",
            "Evaporadores.",
            "Industria química y petroquímica.",
            "Industria alimenticia.",
            "Arquitectónico."
          ],
          chemical_composition: [{
            '%C': '0.08 / 316 L0.030',
            '%Si': '1.00',
            '%Mn': '2.00',
            '%P': '0.045',
            '%S': '0.030',
            '%Cr': '16.00 - 18.00',
            '%Ni': '10.00 - 14.00',
            '%Mo': '2.00 - 3.00',
          }],
          description: "Acero inoxidable al cromo-níquel con adición de molibdeno, antimagnético con una muy buena resistencia a la corrosión y a altas temperaturas de trabajo. Apto para la fabricación de partes expuestas a la mayoría de ácidos."
        },
        {
          name: "410",
          image: "/images/410.png",
          data_sheet: "/pdf/410.pdf",
          characteristics: [
            "Acero inoxidable de una aleación martensítica que proporciona buena resistencia a la corrosión.",
            "Con una muy buena dureza.",
            "Este acero es ferromagnético.",
            "Este acero sí puede ser endurecido por tratamiento térmico."
          ],
          applications: [
            "Industria Automotriz.",
            "Muy usado en partes para válvula, cuchillería, maquinaria para la industria de comida, en partes de bombas de agua, flechas de bomba y equipo petroquímico.",
            "Fabricación de instrumentos dentales y quirúrgicos.",
            "Fabricación de resortes, tijeras y empaques para válvulas."
          ],
          chemical_composition: [{
            '%C': '0.15',
            '%Si': '1.00',
            '%Mn': '1.00',
            '%P': '0.040',
            '%S': '0.030',
            '%Cr': '11.50 - 13.50',
          }],
          description: "Acero inoxidable al cromo y templable con una muy buena combinación de dureza y resistencia al desgaste, así como a la corrosión de agentes como agua y vapor."
        },
        {
          name: "416",
          image: "/images/416.png",
          data_sheet: "/pdf/416.pdf",
          characteristics: [
            "Es un acero de una aleación martensítica, que se caracteriza por tener una buena resistencia a la corrosión y por tener excelentes propiedades mecánicas por medio de un tratamiento convencional.",
            "Se utiliza en piezas que requieren ciertas propiedades mecánicas y resistencia a la corrosión.",
            "Muy buena maquinabilidad.",
            "Pueden lograrse excelentes propiedades mecánicas por medio de tratamiento térmico convencional.",
            "Este acero es ferromagnético."
          ],
          applications: [
            "Se usa en piezas que requieran ciertas propiedades mecánicas y resistencia a la corrosión.",
            "Flechas para bombas de pozo profundo.",
            "Engranes, piñones, tornillería.",
            "Partes de válvulas y flechas de motores.",
            "En cualquier pieza que lleve mucho maquinado."
          ],
          chemical_composition: [{
            '%C': '0.15',
            '%Si': '1.00',
            '%Mn': '1.25',
            '%P': '0.060',
            '%S': '0.150',
            '%Cr': '12.00 - 14.00',
          }],
          description: "Acero inoxidable al cromo, templable con buenas propiedades mecánicas, resistente a la corrosión atmosférica y al agua. Posee una muy buena maquinabilidad como resultado de la adición de fósforo y azufre."
        },
        {
          name: "420",
          image: "/images/420.png",
          data_sheet: "/pdf/420.pdf",
          characteristics: [
            "Acero inoxidable martensítico, resistente a la corrosión atmosférica, agua dulce, agua de minas, vapor y otros medios corrosivos similares.",
            "Con el que se puede lograr mejor resistencia al desgaste y más elevadas durezas con un tratamiento térmico convencional.",
            "Es ferromagnético.",
            "Tiene una maquinabilidad media por el alto contenido de carbón."
          ],
          applications: [
            "Instrumentos quirúrgicos.",
            "Partes de bombas.",
            "Partes de maquinaria para la industria alimenticia.",
            "Cubiertos.",
            "Moldes para plástico.",
            "Partes de válvulas.",
            "Engranes y flechas."
          ],
          chemical_composition: [{
            '%C': '0.26 - 0.35',
            '%Si': '1.00 MAX',
            '%Mn': '1.00 MAX',
            '%P': '0.040 MAX',
            '%S': '0.030 MAX',
            '%Cr': '12.00 - 14.00',
          }],
          description: "Acero inoxidable al cromo y templable con alta resistencia mecánica, tenacidad y resistente a la corrosión ambiental y algunas soluciones químicas débiles."
        }
      ]
    },
    {
      categoryName: "Plásticos de Ingenieria",
      categoryDescription: "Soluciones de plásticos de ingeniería para aplicaciones especializadas.",
      image: "/images/nylaceromecanico.png",
      products: [
        {
          name: "NYLACERO MECANICO",
          image: "/images/nylaceromecanico.png",
          data_sheet: "/pdf/nylaceromecanico.pdf",
          characteristics: [
            `Nylon de alta calidad color hueso con un amplio campo de aplicaciones industriales resistente a condiciones severas de
desgaste, así como el ataque de ataques químicos y mejor que muchos materiales metálicos y algunos naturales como bronce,
latón, acero, aluminio, madera, hule entre otros más. Mantiene un alto modulo de elasticidad siendo además resistente a la
fragilización y al deterioro, tiene una temperatura alta de distorsión térmica y excelente resistencia a la vibración.
Material que por su ligereza y naturaleza plástica lo hacen un material con ventajas económicas, mecánicas y ecológicas porque
reduce cargas inerciales, estáticas y amortigua el ruido. Sus aditivos anti-impacto le imparten mayor resiliencia, superior resistencia
a la tensión y al impacto.`
          ],
          applications: ["Sus aplicaciones van desde las generales hasta las especializadas altamente, desde planchas para moldeo en el procesamiento de alimentos hasta asientos de válvulas de bola para industrias gasera y petrolera e insertos para excéntricos utilizados en la industria metalúrgica primaria."],
          chemical_composition: null,
          description: "Nylon de alta calidad color hueso y de aplicación común en partes de uso general y especializadas con buena resistencia al desgaste, elasticidad, tensión, impacto y al ataque químico de algunos ácidos, entre otros."
        },
        {
          name: "NYLALLOY",
          image: "/images/nylalloy.png",
          data_sheet: "/pdf/nylalloy.pdf",
          characteristics: [
            "Nylon de alta calidad aleado color negro con bisulfuro de molibdeno lo que resulta en una mayor resistencia al desgaste y a la abrasión.Las partículas minerales producen un material mas cristalino con una resistencia mayor a la compresión."
          ],
          applications: [
            "Algunas de sus principales aplicaciones son en patines, slippers, engranes, ruedas dentadas, bujes y chumaceras."
          ],
          chemical_composition: null,
          description: "Nylon de alta calidad color negro aleado con bisulfuro de molibdeno proporcionándole una mayor resistencia al desgaste y a la abrasión, así como una mayor resistencia a la compresión."
        },
        {
          name: "NYLACERO 2000",
          image: "/images/nylacero.png",
          data_sheet: "/pdf/nylacero2000.pdf",
          characteristics: [
            "Nylon de alta calidad color verde con lubricación de aceite intramolecular resultando un material que tiene aceite como parte integral en su estructura; que no puede ser drenado, que no gotea ni se seca aun en las condiciones más severas de trabajo. Mantiene una excelente resistencia al desgaste y a la abrasión debido a su naturaleza auto lubricante resultando en una vida útil hasta 5 veces mayor que las de otros plásticos."
          ],
          applications: [
            "Es un excelente material para la fabricación de bujes y chumaceras entre otros."
          ],
          chemical_composition: null,
          description: "Nylon autolubricante (color verde) con una excelente resistencia al desgaste y a la abrasión."
        },
        {
          name: "NYLACERO T",
          image: "/images/nylacero-t.png",
          data_sheet: "/pdf/nylaceroT.pdf",
          characteristics: [
            "Polímero de ingeniería color azul que añade a sus propiedades normales la valiosa característica de resistir mejor el efecto de la luz ultravioleta y del calor excesivo durante aumentos de temperatura. Sus aditivos antioxidantes y estabilizadores a la luz del sol previenen la formación de radicales libres incrementando sus propiedades de resistencia y duración. Los aditivos empleados permiten usarse en rangos de temperatura de trabajo más altos con relación a los demás productos convencionales de Nylacero."
          ],
          applications: [
            "Adecuado para aplicaciones donde este sujeto a radiación solar o intemperie tipo desértica por cortosperiodos de tiempo entre otros."
          ],
          chemical_composition: null,
          description: "Polímero de ingeniería color azul con aditivos antioxidantes y estabilizadores a la luz del sol, lo que le proporcionan una mayor resistencia al efecto de la luz ultravioleta y del calor excesivo durante aumentos de temperatura en su uso."
        },
        {
          name: "DUROPLAST ACETAL",
          image: "/images/duroplast_acetal.png",
          data_sheet: "/pdf/duraplast.pdf",
          characteristics: [
            "Polímero termoplástico colores blanco y negro caracterizado por su bajo coeficiente de fricción y sobresalientes propiedades contra el desgaste. Puede trabajar en ambientes muy húmedos sin que sean afectadas sus propiedades mecánicas ni sus dimensiones ya que la absorción de agua es prácticamente nula. Es resistente a una gran cantidad de solventes y productos químicos sobresaliendo los elementos alcalinos. Se caracteriza también por su alta resistencia mecánica y tenacidad, así como la facilidad y rapidez de maquinado. Esta libre de porosidades y su desgaste es muy bajo debido a sus propiedades antifricción. Puede trabajar en agua caliente y a temperaturas constantes sin que sean afectadas notablemente sus características."
          ],
          applications: [
            "Algunas de sus aplicaciones son soportes para montaje o fijación en líneas de producción o procesos de manufactura, maquinaria industrial en general, partes para maquinaria sobre todo si trabajan en condiciones húmedas, partes para transportadores incluyendo paletas, engranes, gusanos, pernos, tornillos, pistones, ejes, engranes, peines, bujes, rodillos, partes para la industria electrónica y electrónica, automotriz y de construcción entre otros."
          ],
          chemical_composition: null,
          description: "Polímero termoplástico tanto en color blanco como en color negro con una alta resistencia mecánica y tenacidad, así como alta facilidad de mecanizado. Resistente a una gran cantidad de solventes y productos químicos."
        }
      ]
    },
    {
      categoryName: "Aceros Resistentes a la Abrasión",
      categoryDescription: "Aceros resistentes a la abrasión: Dureza excepcional para piezas más duraderas y equipos más ligeros.",
      image: "/images/hardox450.png",
      products: [
        {
          name: "HARDOX 400",
          image: "/images/hardox400.png",
          data_sheet: "/pdf/hardox400.pdf",
          characteristics: [
            "El acero versátil que resiste el desgaste y la abrasión. Hardox 400 es un acero resistente a la abrasión con una dureza nominal de 400 HBW. Hardox 400 es un acero versátil resistente al desgaste.Gracias a su alta resistencia, así como a una óptima capacidad de plegado y soldabilidad; este acero también puede usarse en estructurassometidas a un desgaste moderado.",
            "Es un acero templado. La dureza mínima del núcleo es del 90 % respecto a la dureza de superficie mínima garantizada.",
          ],
          applications: [],
          chemical_composition: [{
            '%C': '0.32 MAX',
            '%Si': '0.70 MAX',
            '%Mn': '1.60 MAX',
            '%P': '0.025 MAX',
            '%S': '0.010 MAX',
            '%Cr': '1.40 MAX',
            '%Ni': '1.50 MAX',
            '%Mo': '0.60 MAX',
            '%B': '0.004 MAX',
          }],
          description: "Hardox 400 es un acero de confianza de la gama de chapas de acero antidesgaste Hardox, cuya dureza y resistencia a impactos se remontan a 1974, cuando se presentó Hardox como el primer acero antidesgaste del mundo con capacidad de plegado. Esto permitió ofrecer un rendimiento fiable tanto en el taller como en las aplicaciones."
        },
        {
          name: "HARDOX 450",
          image: "/images/hardox450.png",
          data_sheet: "/pdf/hardox450.pdf",
          characteristics: [
            "El acero Hardox® 450 lleva más de 30 años siendo el acero de calidad de referencia por una buena razón. Se ha labrado una sólida reputación como acero muy versátil resistente a la abrasión, que también posee propiedades estructurales. Con una dureza de 50 HBW, ofrece un mayor resistencia al desgaste lo que se traduce en una vida útil más larga con una resistencia a impactos."
          ],
          applications: [
            "Esto permite fabricar cucharas, cajas basculantes y otros equipos de alto rendimiento que duran más y son capaces de soportar fuerzas de impacto sin comprometer la integridad estructural."
          ],
          chemical_composition: [
            {
              '': 'Chapa CR',
              '%C': '0.19 MAX',
              '%Si': '0.30 MAX',
              '%Mn': '1.50 MAX',
              '%P': '0.020 MAX',
              '%S': '0.005 MAX',
              '%Cr': '0.10 MAX',
              '%Ni': '0.10 MAX',
            },
            {
              '': 'Chapa y Chapa',
              '%C': '0.26 MAX',
              '%Si': '0.70 MAX',
              '%Mn': '1.60 MAX',
              '%P': '0.025 MAX',
              '%S': '0.010 MAX',
              '%Cr': '1.40 MAX',
              '%Ni': '1.50 MAX',
            },
          ],
          description: "El acero Hardox 450 es probablemente el acero resistente al desgaste que goza de mayor reconocimiento en todo el mundo con tolerancias estrictas y propiedades estructurales excelentes. Con una dureza nominal de 450 HBW, el acero Hardox 450 combina unas capacidades de plegado y soldadura óptimas y excelentes, ofrece una mejor resistencia a las indentaciones y a la abrasión, así como una vida útil más larga."
        },
        {
          name: "HARDOX 500",
          image: "/images/hardox500.png",
          data_sheet: "/pdf/hardox500.pdf",
          characteristics: [
            "El acero plegable, soldable y muy resistente a la abrasión. Hardox 500 es un acero que se puede plegar y soldar, es resistente a la abrasión y posee una dureza nominal de 500 HBW. Apto para aplicaciones que requieren resistencia muy alta al desgaste. Hardox 500 aumenta la capacidad de carga y la vida útil, además de unas óptimas propiedades de procesabilidad y resistencia."
          ],
          applications: [],
          chemical_composition: [
            {
              '': 'Chapa',
              '%C': '0.30 MAX',
              '%Si': '0.70 MAX',
              '%Mn': '1.60 MAX',
              '%P': '0.020 MAX',
              '%S': '0.010 MAX',
              '%Cr': '1.50 MAX',
              '%Ni': '1.50 MAX',
              '%Mo': '0.60 MAX',
              '%B': '0.005 MAX',
            },
            {
              'Chapa gruesa': '',
              '%C': '0.30 MAX',
              '%Si': '0.70 MAX',
              '%Mn': '1.60 MAX',
              '%P': '0.025 MAX',
              '%S': '0.010 MAX',
              '%Cr': '1.40 MAX',
              '%Ni': '1.50 MAX',
              '%Mo': '0.60 MAX',
              '%B': '0.005 MAX',
            },
          ],
          description: "Acero Hardox 500, la calidad más reciente de la gama Hardox, ofrece una resistencia, dureza y resistencia a impactos excepcionales y garantizadas en una sola chapa. Ha demostrado su valor en todo el mundo en volquetes y cajas basculantes, contenedores, equipos para minería, maquinaria agrícola, revestimientos y piezas de desgaste, y cucharas de todo tipo."
        },
      ]
    },
  ],
  en: [
    {
      categoryName: "Tool Grade Steel",
      categoryDescription: "Explore the versatility of Tool Grade Steels: powerful alloys offering exceptional wear and impact resistance, ideal for manufacturing robust and durable components.",
      image: "/images/L6.png",
      products: [
        {
          "name": "A2",
          "image": "/images/A2.png",
          "data_sheet": "/pdf/A2.pdf",
          "characteristics": [
            "Steel with a good combination of wear resistance and toughness, and excellent compression strength; applicable in cutting and forming tools.",
            "Used in the production of cutting and forming components or inserts in cold stamping tools.",
            "Known for providing a combination of good toughness and moderate wear resistance, widely used for many years in various cold work applications requiring resistance to abrasion.",
            "Easy to machine.",
            "An excellent choice for complex configuration tools."
          ],
          "applications": [
            "Stamping and Forming: Dies and Punches",
            "Punching and Perforating: Fine Blanking",
            "Coining Dies",
            "Threading Tools",
            "Deburring Tools",
            "Mold Inserts",
            "Wear Parts",
            "Rolling Dies"
          ],
          "chemical_composition": [
            {
              "%C": "0.95 - 1.05",
              "%Mn": "0.45 - 0.75",
              "%Si": "0.20 - 0.40",
              "%Cr": "4.75 - 5.50",
              "%Mo": "0.90 - 1.40",
              "%V": "0.40"
            }
          ],
          "description": "Universal chromium-molybdenum-vanadium steel with great wear resistance combined with good toughness, suitable for cold work tools. Quenchable in oil and air."
        },
        {
          "name": "D2",
          "image": "/images/D2.png",
          "data_sheet": "/pdf/D2.pdf",
          "characteristics": [
            "A high-chromium tool steel for cold work with molybdenum and vanadium alloy, widely used in stamping and forming operations.",
            "High wear resistance.",
            "High compression strength and quenchability.",
            "Good dimensional stability during heat treatment.",
            "Good resistance to tempering.",
            "Low toughness."
          ],
          "applications": [
            "Coining dies.",
            "Stamping and forming.",
            "Shears.",
            "Embossing dies.",
            "Threading tools.",
            "Dies.",
            "Slitter blades.",
            "Blades for plastic mills.",
            "Tube forming rollers."
          ],
          "chemical_composition": [
            {
              "%C": "1.40 - 1.60",
              "%Mn": "0.30 - 0.60",
              "%Si": "0.30 - 0.50",
              "%Cr": "11.00 - 13.00",
              "%Mo": "0.70 - 1.20",
              "%V": "0.80"
            }
          ],
          "description": "High-carbon and chromium steel with molybdenum and vanadium, suitable for manufacturing cold work tools requiring high wear resistance and moderate toughness. Quenchable in oil and air."
        },
        {
          "name": "H13",
          "image": "/images/H13.png",
          "data_sheet": "/pdf/H13.pdf",
          "characteristics": [
            "Steel with adequate hot wear resistance, suitable for use in cooled casting molds, extrusion dies for Aluminum and Brass, blades, forging dies, etc.",
            "The most common steel for manufacturing tools in hot work operations and plastic molding.",
            "Good resistance to hot wear and thermal fatigue.",
            "High toughness and ductility.",
            "Good resistance to tempering.",
            "Good resistance to abrasion wear, both in high and low-temperature operations."
          ],
          "applications": [
            "Tools for aluminum, brass, and magnesium extrusion.",
            "Hot forging dies.",
            "Molds for aluminum pressure die casting.",
            "Inserts for plastic injection molding.",
            "Hot rolling rollers."
          ],
          "chemical_composition": [
            {
              "%C": "0.30 - 0.40",
              "%Mn": "0.20 - 0.40",
              "%Si": "0.80 - 1.20",
              "%Cr": "4.75 - 5.50",
              "%Mo": "1.25 - 1.75",
              "%V": "0.80 - 1.20"
            }
          ],
          "description": "Chromium-nickel-molybdenum steel with an excellent combination of toughness and wear resistance, suitable for the manufacturing of tools for both cold and hot work. Quenchable in oil and air."
        },
        {
          "name": "L6",
          "image": "/images/L6.png",
          "data_sheet": "/pdf/L6.pdf",
          "characteristics": [
            "Tool-grade steel for oil quenching, commonly used for cold work tools, as well as for machinery parts requiring high hardness and high toughness. Its nickel content provides greater toughness compared to other oil-quenching steels.",
            "Suitable for plastic injection, easy to weld, used in the refractory industry, cutting dies, cutting discs, forming dies, wood cutting saws, punches, etc."
          ],
          "applications": [
            "Hot forging dies.",
            "Punches.",
            "Scrap cutting blades.",
            "Chisels and hammers.",
            "Forming dies.",
            "Forming rollers."
          ],
          "chemical_composition": [
            {
              "%C": "0.65 - 0.75",
              "%Mn": "0.55 - 0.85",
              "%Si": "0.20 - 0.40",
              "%Cr": "0.65 - 0.85",
              "%Mo": "0.25",
              "%V": "1.25 - 1.75"
            }
          ],
          "description": "Chromium-nickel-molybdenum steel with an excellent combination of toughness and wear resistance, suitable for the manufacturing of tools for both cold and hot work. Quenchable in oil and air."
        },
        {
          "name": "M2",
          "image": "/images/M2.png",
          "data_sheet": "/pdf/M2.pdf",
          "characteristics": [
            "High-speed steel with medium carbon, tungsten, and molybdenum; the most widely used steel in this classification.",
            "Excellent toughness, good cutting characteristics, hence its use as a cutting tool.",
            "Good resistance to tempering.",
            "Particularly satisfactory for cutting tools where edge maintenance and high toughness with good wear resistance and hardness retention are required."
          ],
          "applications": [
            "Chisels, Taps, and Drills.",
            "Punches and Dies.",
            "Milling Cutters, Brushes, and Thread Rollers.",
            "Cutting Tools."
          ],
          "chemical_composition": [
            {
              "%C": "0.78 - 0.88",
              "%Si": "0.20 - 0.40",
              "%Mn": "0.20 - 0.40",
              "%Cr": "3.75 - 4.50",
              "%W": "5.50 - 6.75",
              "%Mo": "4.50 - 5.50",
              "%V": "1.60 - 2.20"
            }
          ],
          "description": "Molybdenum-tungsten high-speed steel, has a good combination of wear resistance and toughness suitable for the manufacture of cutting tools. Quenchable in oil and air."
        },
        {
          "name": "O1",
          "image": "/images/O1.png",
          "data_sheet": "/pdf/O1.pdf",
          "characteristics": [
            "AISI O1 steel, corresponds to a cold work tool steel of Mn-Cr-W type, for oil quenching and general applications, characterized by:",
            "Good combination of hardness (wear resistance) and toughness after hardening.",
            "Regular dimensional stability after quenching and tempering.",
            "Good machinability."
          ],
          "applications": [
            "Cold Work Dies.",
            "Cutters.",
            "Threading Tools.",
            "Embossing Dies.",
            "Dies for Forming.",
            "Taps.",
            "Gauges.",
            "Stamping and Forming Tools.",
            "Paper Cutting Blades.",
            "Woodworking Tools.",
            "Dies and Punches.",
            "Deburring Dies."
          ],
          "chemical_composition": [
            {
              "%C": "0.85 - 0.95",
              "%Mn": "1.00 - 1.30",
              "%Si": "0.20 - 0.40",
              "%Cr": "0.40 - 0.50",
              "%W": "0.40 - 0.50",
              "%V": "0.20"
            }
          ],
          "description": "Chromium-tungsten-manganese steel with very good wear resistance combined with very good toughness, making it a very versatile steel for the manufacture of cold work tools. Most commonly quenched in oil."
        },
        {
          "name": "P20",
          "image": "/images/P20.png",
          "data_sheet": "/pdf/P20.pdf",
          "characteristics": [
            "Less variation in surface hardness to the core, an appreciable feature in large dimensions.",
            "HARDNESS: 28-32 HRC.",
            "More uniform mechanical properties throughout its volume.",
            "Good machining characteristics and better polishing ability.",
            "Ease of application for photogravure.",
            "Can be surface-hardened via nitriding processes."
          ],
          "applications": [
            "Due to its mechanical characteristics, it can be used in plates for fixing or holding cold stamping dies and molds or components for molds for non-ferrous metal die-casting; likewise, due to its hardness uniformity and being at the upper range of conventional steels, called treated, it can be used with excellent results in mechanical applications (shafts or axles, crankshafts, fixing elements, etc.)."
          ],
          "chemical_composition": [
            {
              "%C": "0.28 - 0.40",
              "%Mn": "0.60 - 1.00",
              "%P": "0.030 MAX",
              "%S": "0.030 MAX",
              "%Cr": "1.40 - 2.00",
              "%Mo": "0.30 - 0.55",
              "%Si": "0.20 - 0.80"
            }
          ],
          "description": "Quenched and tempered chromium-molybdenum steel with good toughness as well as excellent properties for machining, polishing, and texturing suitable for the manufacture of molds for the plastics industry."
        },
        {
          "name": "P20 + Ni",
          "image": "/images/P20.png",
          "data_sheet": "/pdf/P20.pdf",
          "characteristics": [
            "Less variation in surface hardness to the core, an appreciable feature in large dimensions.",
            "HARDNESS: 28-32 HRC.",
            "More uniform mechanical properties throughout its volume.",
            "Good machining characteristics and better polishing ability.",
            "Ease of application for photogravure.",
            "Can be surface-hardened via nitriding processes."
          ],
          "applications": [
            "Due to its mechanical characteristics, it can be used in plates for fixing or holding cold stamping dies and molds or components for molds for non-ferrous metal die-casting; likewise, due to its hardness uniformity and being at the upper range of conventional steels, called treated, it can be used with excellent results in mechanical applications (shafts or axles, crankshafts, fixing elements, etc.)."
          ],
          "chemical_composition": [
            {
              "%C": "0.28 - 0.40",
              "%Mn": "0.60 - 1.00",
              "%P": "0.030  MAX",
              "%S": "0.030  MAX",
              "%Cr": "1.40 - 2.00",
              "%Mo": "0.30 - 0.55",
              "%Si": "0.20 - 0.80",
              "%Ni": "0.68 - 1.00"
            }
          ],
          "description": "Quenched and tempered chromium-molybdenum steel with good toughness as well as excellent properties for machining, polishing, and texturing suitable for the manufacture of molds for the plastics industry."
        },
        {
          "name": "S7",
          "image": "/images/S7.png",
          "data_sheet": "/pdf/S7.pdf",
          "characteristics": [
            "Steel with a suitable balance between toughness and wear resistance.",
            "A cold work tool steel, primarily; considered within the category of impact-resistant steels.",
            "Moderate resistance to tempering.",
            "Due to its characteristics, it can have applications in the field of hot work and plastic molding.",
            "Good machinability."
          ],
          "applications": [
            "Stamping and Forming.",
            "Dies and Punches.",
            "Punching and Perforating.",
            "Fine Blanking.",
            "Chiseling Dies.",
            "Zinc Die Casting Molds.",
            "Tablet Punches.",
            "Pharmaceuticals.",
            "Scrap Cutting Blades.",
            "Cold and Warm Heading Dies.",
            "Plastic Molds."
          ],
          "chemical_composition": [
            {
              "%C": "0.45 - 0.55",
              "%Si": "0.20 - 1.00",
              "%Mn": "0.20 - 0.90",
              "%P": "0.030  MAX",
              "%S": "0.030  MAX",
              "%Cr": "3.00 - 3.50",
              "%Mo": "1.30 - 1.80",
              "%V": "0.35"
            }
          ],
          "description": "Chromium-molybdenum steel with high toughness and wear resistance suitable for the manufacture of heavy-duty cutting and forming tools for both cold and hot work. Quenchable in oil and air."
        }
      ]
    },
    {
      "categoryName": "Machinery Grade Steel",
      "categoryDescription": "Explore the enhanced corrosion resistance and exceptional durability of Machinery Grade Steels, precisely designed for the construction and repair of machinery.",
      "image": "/images/1518.png",
      "products": [
        {
          "name": "12L14",
          "image": "/images/12L14.png",
          "data_sheet": "/pdf/12L14.pdf",
          "characteristics": [
            "Considered the most machinable steel, according to SAE J414a, 193% more machinable relative to steel 1212 (100%).",
            "Machinability is attributed to the combination of sulfur, manganese, and lead; the latter allows for cuts of greater depth and speed, significantly improving the surface finish of components made with this steel.",
            "Low forgeability, both in cold and hot conditions, and low weldability compared to other carbon steels such as 1008, 1018, 1045, etc.",
            "The most common commercial presentation is as cold-drawn, providing a smooth finish and better dimensional uniformity."
          ],
          "applications": [
            "For the manufacture of bolts, nuts, screws, connections, automotive parts, etc., where production volumes are high.",
            "Ideal for machining in automatic lathes.",
            "Can replace AISI 1018 steel, as long as it is not subjected to welding processes.",
            "Can substitute for AISI 1045 steel in applications with lower mechanical stress (load, bending, etc.), where total hardening and welding processes are not required."
          ],
          "chemical_composition": {
            "%C": "0.15 MAX",
            "%Mn": "0.85 - 1.15",
            "%P": "0.04 - 0.09",
            "%S": "0.26 - 0.35",
            "%Pb": "0.15 - 0.35"
          },
          "description": "Low carbon steel, resulfurized with lead content and easy machinability, as well as good finishing properties suitable for use in automatic machines and for mass production of various industrial parts such as screws, nuts, bolts, among others."
        },
        {
          "name": "1018",
          "image": "/images/1018.png",
          "data_sheet": "/pdf/1018.pdf",
          "characteristics": [
            "Low carbon steel with optimal forgeability when hot, excellent cold formability, and very good weldability.",
            "Its machinability is lower compared to steels in the 11 and 12 series; according to SAE J414a, it has a machining capacity of 70% compared to AISI 1212 steel (100%).",
            "As a hot-rolled finish, its mechanical properties and hardness are below those mentioned above, except to a lesser depth; refer to ASTM A108-13.",
            "As peeled and straightened, defects inherent in the hot-rolling process may have been eliminated, without guarantee unless expressly agreed upon.",
            "The cold-drawn process provides a level of surface hardening, as well as a slight improvement in machinability."
          ],
          "applications": [
            "Used in the manufacture of mechanical parts for the metal-mechanical, construction, screw, automotive, couplings, fasteners (tensioners for structures), shafts, bushes, etc., industries.",
            "Develops surface hardness through thermochemical treatment of carburizing or carbonitriding, with a soft and tough core.",
            "Used as a clamping fork in the transport industry and as a clamping anchor in the construction industry; cold bending should be done slowly, uniformly, and in a single event, using a bending guide mandrel with a diameter at least twice that of the bar to be bent.",
            "Can replace AISI 12L14 steel, as long as high-volume production is not required."
          ],
          "chemical_composition": {
            "%C": "0.15 - 0.20",
            "%Mn": "0.60 - 0.90",
            "%P": "0.040 MAX",
            "%S": "0.050 MAX"
          },
          "description": "Low carbon steel with good machining and weldability properties, widely used in the machinery construction and industrial parts manufacturing."
        },
        {
          "name": "1026",
          "image": "/images/1026.png",
          "data_sheet": "/pdf/1026.pdf",
          "characteristics": [
            "Low tool wear during machining, minimal weight loss during machining, optimal weldability.",
            "Provides excellent mechanical properties of machining, strength, and hardness.",
            "Can be used universally for all kinds of bushings that are not high strength, and if higher wear resistance is required, they can be surface carburized."
          ],
          "applications": [
            "Used for all types of bushings for industrial machinery, agricultural machinery, construction machinery.",
            "Can also be applied to pieces that will be welded.",
            "Carburized bushings for applications with high friction generation.",
            "Cylinders and Gears.",
            "Shafts.",
            "Rollers.",
            "Bushings.",
            "Structures."
          ],
          "chemical_composition": {
            "%C": "0.2 - 0.28",
            "%Mn": "0.60 - 0.90",
            "%Si": "0.15 - 0.35",
            "%P": "0.040 MAX",
            "%S": "0.050 MAX"
          },
          "description": "Carbon steel in hollow bar form, generally used in machinery construction with very good machinability and weldability, susceptible to hardening mainly through the carburizing process."
        },
        {
          "name": "1045",
          "image": "/images/1045.png",
          "data_sheet": "/pdf/1045.pdf",
          "characteristics": [
            "Medium carbon steel with optimal forgeability when hot.",
            "Excellent weldability, taking precautions to avoid fracturing around the welded area.",
            "Machinability is moderate according to SAE J414a, corresponding to 55% compared to AISI 1212 steel (100% as reference).",
            "Readily reacts to conventional total or surface hardening by quenching and tempering (induction or flame).",
            "As a hot-rolled finish, its mechanical properties and hardness are below those mentioned earlier.",
            "As a cold-drawn finish (directly from hot rolling), it may exhibit the same defects as hot-rolled, except to a lesser depth; refer to ASTM A108-13."
          ],
          "applications": [
            "Applications in the manufacture of parts and components for machinery, automotive, and agro-industrial sectors.",
            "Applications are designated for the production of transmission parts and mechanical applications such as bolts, shafts, joints, impellers, screws, shafts for deep wells, among others.",
            "Used as a clamping anchor in the construction industry or clamping fork in the transport industry; cold bending should be done slowly, uniformly, and in a single event, using a bending guide mandrel with a diameter at least twice that of the bar to be bent.",
            "Can be replaced by AISI 1018 steel, as long as it is not subjected to welding processes, and if so, recommendations of this practice must be considered."
          ],
          "chemical_composition": {
            "%C": "0.43 - 0.50",
            "%Mn": "0.60 - 0.90",
            "%P": "0.040 MAX",
            "%S": "0.050 MAX"
          },
          "description": "Medium carbon and hardenable steel with good machining properties, used in the machinery construction and industrial parts. Susceptible to weldability under certain precautions."
        },
        {
          "name": "1060",
          "image": "/images/1060.png",
          "data_sheet": "/pdf/1060.pdf",
          "characteristics": [
            "Construction machinery steel. Wear resistance: clutch discs, transmission shafts, tool holders, agricultural implements, etc.",
            "Considered high carbon, it exhibits good forgeability, not recommended for welding processes; when in a tempered condition, it reaches hardness close to 65 HRc.",
            "When properly hardened, the structure consists of carbon-rich martensite free of carbides."
          ],
          "applications": [
            "Agricultural implements, tool holders, clutch discs, shafts, arrows, chisels.",
            "Applications include hand tools such as screwdrivers, pliers, and similar objects.",
            "Forged product should be annealed before any hardening treatment."
          ],
          "chemical_composition": {
            "%C": "0.55 - 0.65",
            "%Mn": "0.60 - 0.90",
            "%Si": "0.15 - 0.30",
            "%P": "0.040 MAX",
            "%S": "0.050 MAX"
          },
          "description": "High carbon steel with high wear resistance suitable for use in the manufacture of parts for agricultural and automotive equipment, as well as for the production of hand tools."
        },
        {
          "name": "1141",
          "image": "/images/1141.png",
          "data_sheet": "/pdf/1141.pdf",
          "characteristics": [
            "Medium carbon steel with optimal hot forgeability.",
            "Excellent weldability, taking precautions to avoid fracture around the welded area.",
            "Machinability is moderate according to SAE J414a, corresponding to 55% compared to AISI 1212 (100% as reference).",
            "Easily reacts to conventional total or surface hardening by quenching and tempering (induction or flame).",
            "As a hot-rolled finish, its mechanical properties and hardness are below those mentioned earlier.",
            "As a cold-drawn finish (directly from hot rolling), it may exhibit the same defects as hot-rolled, except to a lesser depth; refer to ASTM A108-13."
          ],
          "applications": [
            "Applications in the manufacture of parts and components for machinery, automotive, and agro-industrial sectors.",
            "Applications are designated for the production of transmission parts and mechanical applications such as bolts, shafts, joints, impellers, screws, shafts for deep wells, among others.",
            "Used as a clamping anchor in the construction industry or clamping fork in the transport industry; cold bending should be done slowly, uniformly, and in a single event, using a bending guide mandrel with a diameter at least twice that of the bar to be bent.",
            "Can be replaced by AISI 1018 steel, as long as it is not subjected to welding processes, and if so, recommendations of this practice must be considered."
          ],
          "chemical_composition": {
            "%C": "0.37 - 0.45",
            "%Mn": "1.35 - 1.65",
            "%P": "0.040 MAX",
            "%S": "0.08 - 0.13"
          },
          "description": "Resulfurized and easily machinable medium carbon steel with good mechanical properties, suitable for use in automatic machines for the mass production of industrial parts."
        },
        {
          "name": "1144",
          "image": "/images/1144.png",
          "data_sheet": "/pdf/1144.pdf",
          "characteristics": [
            "Medium carbon resulfurized steel with manganese and sulfur, also known as stress-resistant steel.",
            "Offers high strength and hardness and can be flame hardened to further improve surface properties.",
            "Untreated steel has been used where deformation and wear resistance are essential, such as spindles, gears, and piston rods, etc.",
            "Can be used as an economical replacement for tempered alloy grades."
          ],
          "applications": [
            "Parts requiring extensive machining and requiring high tensile and wear resistance.",
            "Machinability: 83% compared to 1212 as 100%.",
            "Has high mechanical properties and is designed for applications subjected to high stresses, such as shafts, bolts, studs, steering bolts, etc.",
            "Commonly machined in automatic lathes and multi-spindle machines."
          ],
          "chemical_composition": {
            "%C": "0.40 - 0.48",
            "%Mn": "1.35 - 1.65",
            "%P": "0.040 MAX",
            "%S": "0.24 - 0.033 MAX"
          },
          "description": "Low carbon, resulfurized, and easily machinable steel with good mechanical properties and finishing suitable for use in automatic machines for the mass production of industrial parts."
        },
        {
          "name": "1215",
          "image": "/images/1215.png",
          "data_sheet": "/pdf/1215.pdf",
          "characteristics": [
            "Desulfurized and rephosphorized steel with high machinability, the addition of phosphorus increases machinability and helps form short chips.",
            "Unlike SAE/AISI 12L14, it does not contain Lead, but this does not detract from its performance. Applications for this grade of steel are those where strength properties can be sacrificed for machining properties, fasteners, nuts, bolts, etc.",
            "Excellent machining properties with splendid finishes."
          ],
          "applications": [
            "Used in the manufacturing processes of screws where high machinability is required, in the manufacture of bolts and nuts for the automotive industry.",
            "Application for multiple industrial uses that require high precision machining.",
            "Not recommended for applications requiring welding.",
            "Increases the productivity of transformation processes, with excellent finishes; especially recommended for work on automatic lathes."
          ],
          "chemical_composition": {
            "%C": "0.090 MAX",
            "%Mn": "0.75 - 1.05",
            "%P": "0.04 - 0.09",
            "%S": "0.26 - 0.35"
          },
          "description": "Resulfurized and rephosphorized easily machinable steel with good mechanical properties and finishing suitable for use in automatic machines for the mass production of industrial parts."
        },
        {
          "name": "1518",
          "image": "/images/1518.png",
          "data_sheet": "/pdf/1518.pdf",
          "characteristics": [
            "High yield strength steel with fine-grained structure and low alloy content.",
            "High manganese content steel.",
            "Hollow bar that, due to its chemical balance, exhibits good machinability and weldability.",
            "Ideal for manufacturing parts in high volumes.",
            "For the manufacture of machinery components requiring high strength.",
            "The tube shape allows material savings when making parts that need a hollow center."
          ],
          "applications": [
            "Bushings, couplings, pinions, and transmission shafts can be manufactured.",
            "The manufacture of gears, crowns, worms, bearing tracks, among others.",
            "Cylinders.",
            "Rollers.",
            "Structures.",
            "Bushings.",
            "Screws can be manufactured."
          ],
          "chemical_composition": {
            "%C": "0.15 - 0.21",
            "%Mn": "1.10 - 1.40",
            "%P": "0.040 MAX",
            "%S": "0.050 MAX"
          },
          "description": "Hollow bar carbon steel of general use in machinery construction with very good machinability and weldability susceptible to hardening mainly through the carburizing process."
        },
        {
          "name": "4140",
          "image": "/images/4140.png",
          "data_sheet": "/pdf/4140.pdf",
          "characteristics": [
            "Medium hardenability steel; in the annealed condition, it can be subjected to hardening by quenching and tempering to hardness values around 50 HRC (see general heat treatment recommendations).",
            "In the prehardened condition (treated or quenched), it has a good combination of toughness and strength that allows its direct use in machinery part applications.",
            "Acceptable machinability, around 61% compared to AISI 1112 (100% as machinability reference in carbon steels - Metals Handbook)."
          ],
          "applications": [
            "General machinery mechanical parts, such as clamping or motion transmission elements (shafts, arrows, low-speed gears, worm gears, sprockets, bolts, high-strength screws, machine bodies, torsion bars, etc.).",
            "Also used as a mold or die holder, platen and sacrificial parts.",
            "When used as a clamping anchor in the construction industry or clamping forks in the transport industry.",
            "It replaces any carbon steel where higher mechanical strength or hardness is required."
          ],
          "chemical_composition": {
            "%C": "0.38 - 0.43",
            "%Mn": "0.75 - 1.00",
            "%P": "0.035 MAX",
            "%S": "0.040 MAX",
            "%Si": "0.15 - 0.35",
            "%Cr": "0.80 - 1.10",
            "%Mo": "0.15 - 0.25"
          },
          "description": "Chromium-molybdenum hardenable steel supplied in the annealed condition as well as treated and commonly used in the industry for the construction of machinery and industrial parts with higher mechanical requirements."
        },
        {
          "name": "4340 QT",
          "image": "/images/4340.png",
          "data_sheet": "/pdf/4340.pdf",
          "characteristics": [
            "This 4340-QT steel is one of the best machinery grade alloy steels due to its high alloy content, excellent and deep hardenability, good toughness and ductility, and its high tensile strength allows its use in parts subject to severe stresses.",
            "Although it is difficult to weld, if parts are preheated, any welding method can be used.",
            "Machinability: 57% taking 1212 Steel as 100%."
          ],
          "applications": [
            "In all types of parts subject to severe stresses such as automotive transmission shafts, axles, dies, gears, drilling parts, hot cutting shears, etc.",
            "Automotive, marine, diesel engine crankshafts and other heavy-duty shafts, half-shafts, substitutes, gears, mining drilling parts, tools for oil wells, drilling bodies, master plates, etc."
          ],
          "chemical_composition": {
            "%C": "0.38 - 0.43",
            "%Mn": "0.60 - 0.80",
            "%P": "0.035 MAX",
            "%S": "0.040 MAX",
            "%Si": "0.15 - 0.30",
            "%Cr": "0.80 - 1.00",
            "%Mo": "0.20 - 0.30"
          },
          "description": "Chromium-nickel-molybdenum steel supplied in the treated condition with very good tensile strength and toughness suitable for the manufacture of parts for various applications subject to high mechanical stresses."
        },
        {
          "name": "5160",
          "image": "/images/5160.png",
          "data_sheet": "/pdf/5160.pdf",
          "characteristics": [
            "High carbon Chromium-Manganese alloy steel, highly durable in compression and traction work.",
            "Good hardenability.",
            "Also known as spring steel.",
            "Supply form: Rounds and flats.",
            "Steel characterized by its high toughness, fatigue resistance, and traction resistance due to its components."
          ],
          "applications": [
            "Applications include springs, blades, knives, springs and flat springs of any thickness.",
            "It is also used in torsion bars, automotive suspension springs.",
            "Widely used in the automotive and agricultural industries."
          ],
          "chemical_composition": {
            "%C": "0.56 - 0.64",
            "%Mn": "0.75 - 1.00",
            "%Cr": "0.70 - 0.90",
            "%P": "0.035 MAX",
            "%S": "0.040 MAX",
            "%Si": "0.15 - 0.35"
          },
          "description": "Carbon steel known as spring steel with very good fatigue resistance, high ductility, and flexibility."
        },
        {
          "name": "8620",
          "image": "/images/8620.png",
          "data_sheet": "/pdf/8620.pdf",
          "characteristics": [
            "Steel for carburizing.",
            "Good hardenability.",
            "Steel with very good hot forgeability characteristics.",
            "Good weldability.",
            "Good machinability, approximately 66% compared to AISI 1112 steel.",
            "The excellent combination of its alloying elements provides high toughness in the core, high surface hardness, and wear resistance."
          ],
          "applications": [
            "Used in parts that require a soft core with a very hard surface layer.",
            "Some applications are intended for the manufacture of gears, crowns, worms, bushings, bearing tracks, among others.",
            "Main applications are intended for those where it is necessary to impart high hardness on the surface and counteract wear caused by dynamic metal-to-metal contact."
          ],
          "chemical_composition": [
            {
              "%C": "0.18 - 0.23",
              "%Mn": "0.70 - 0.90",
              "%P": "0.035 MAX",
              "%S": "0.040 MAX",
              "%Si": "0.15 - 0.35",
              "%Cr": "0.40 - 0.60",
              "%Mo": "0.15 - 0.25",
              "%Ni": "0.40 - 0.70",
            }
          ],
          "description": "Chromium-nickel-molybdenum steel for carburizing and easy machinability, widely used in the manufacture of industrial gears and other parts that require high surface hardness and a soft core."
        },
        {
          "name": "9840 RT",
          "image": "/images/9840.png",
          "data_sheet": "/pdf/9840.pdf",
          "characteristics": [
            "In the prehardened condition (treated or quenched), it has a very good combination of toughness and strength that allows its direct use in machinery parts applications.",
            "Machinability 59%.",
            "Greater uniformity of hardness from surface to core.",
            "Greater resistance to mechanical fatigue than 4140 steel.",
            "Machinery grade or low-alloy steel with improved hardenability; in the annealed condition, it can be subjected to hardening by quenching and tempering to hardness values around 50 HRC (see general heat treatment recommendations)."
          ],
          "applications": [
            "Replaces any carbon steel where higher mechanical strength or hardness is required.",
            "It is an alternative to replace steels such as AISI 4140 and 4340.",
            "Mechanical parts of machinery in general, such as elements for clamping or transmission of movement (shafts, axles, low-speed gears, worms, sprockets, high-strength bolts, machine bodies, torsion bars, etc.)."
          ],
          "chemical_composition": [
            {
              "%C": "0.38 - 0.43",
              "%Mn": "0.70 - 0.90",
              "%Si": "0.20 - 0.53",
              "%Ni": "0.85 - 1.15",
              "%Cr": "0.70 - 0.90",
              "%Mo": "0.20 - 0.30",
            }
          ],
          "description": "Chromium-nickel-molybdenum steel supplied in the annealed condition as well as treated with good resistance to mechanical stress and suitable for the manufacture of general machinery parts."
        },
        {
          "name": "A36",
          "image": "/images/A36.png",
          "data_sheet": "/pdf/A36.pdf",
          "characteristics": [
            "It is one of the most commonly used carbon structural steels, as its carbon content is a maximum of 0.29%, which is considered mild steel.",
            "It has the ability to be riveted, bolted, or welded.",
            "It is a cost-effective and recyclable material, easy to paint or drill, as it does not require laborious manufacturing.",
            "Plates are handled in standard sizes at distribution centers, but can be made in other sizes for special orders.",
            "They are usually available with standard and thick thickness, and the process to obtain them is commonly done by hot rolling."
          ],
          "applications": [
            "A36 steel is a type of steel considered the most common in the world, due to the ease with which it can be manufactured.",
            "This is used in the manufacture of various construction products.",
            "This material can be used as part of steel sheets, as well as large elements where formed steels are used.",
            "They are used in the creation of welded or bolted steel structures, for industrial purposes or for civil and public construction."
          ],
          "chemical_composition": [
            {
              "%C": "0.25 MAX",
              "%Mn": "0.80 - 1.20",
              "%P": "0.040 MAX",
              "%S": "0.050 MAX",
              "%Si": "0.040 MAX",
            }
          ],
          "description": "Multipurpose commercial steel with good strength and machinability, weldable."
        }
      ]
    },
    {
      "categoryName": "Aluminum",
      "categoryDescription": "Discover the versatile and lightweight properties of our high-quality aluminum.",
      "image": "/images/5083.png",
      "products": [
        {
          "name": "5083",
          "image": "/images/5083.png",
          "data_sheet": "/pdf/5083.pdf",
          "characteristics": [
            "Excellent corrosion resistance.",
            "Good weldability.",
            "5083 aluminum is known for its exceptional behavior in aggressive environments.",
            "High corrosion resistance, making it ideal for applications in chemical or marine environments.",
            "Higher strength than non-heat-treatable alloys."
          ],
          "applications": [
            "Thermoplastic Molds",
            "Aerospace, Automotive, and Textile Industry",
            "Pressure Vessels",
            "Naval, Petroleum, and Plastic Industry"
          ],
          "chemical_composition": [
            {
              "%Si": "0.40 MAX",
              "%Fe": "0.40 MAX",
              "%Cu": "0.10 MAX",
              "%Mg": "4.00 - 4.90",
              "%Cr": "0.05 - 0.25",
              "%Zn": "0.25 MAX",
              "%Ti": "0.15 MAX",
              "%Mn": "0.40 - 1.00",
              "%Al": "Balance",
            }
          ],
          "description": "Aluminum alloy with moderate mechanical strength and exceptional behavior in aggressive environments, as it has very good corrosion resistance. Suitable for the manufacture of parts for the plastic, naval, aerospace, and automotive industries, among others."
        },
        {
          "name": "6061 T6",
          "image": "/images/6061.png",
          "data_sheet": "/pdf/6061.pdf",
          "characteristics": [
            "Excellent conductivity.",
            "Hardness: 95 - 100 HB",
            "Excellent corrosion resistance.",
            "High tensile strength / Easily weldable.",
            "Ideal for machining parts with excellent quality and for jobs requiring a good surface finish.",
            "Excellent corrosion resistance and finish, as well as ease of welding and strength similar to steel."
          ],
          "applications": [
            "Molds for Bottle Manufacturing",
            "Parts for the Aerospace and Automotive Industry",
            "Connections - Screws",
            "Fixtures for the Electronics and Automotive Industry"
          ],
          "chemical_composition": [
            {
              "%Si": "0.40 - 0.80",
              "%Fe": "0.79 MAX",
              "%Cu": "0.15 - 0.40",
              "%Mg": "0.80 - 1.20",
              "%Cr": "0.04 - 0.34",
              "%Zn": "0.25 MAX",
              "%Ti": "0.015 MAX",
              "%Mn": "0.15 MAX",
              "%Al": "Balance",
            }
          ],
          "description": "Easy-to-machine hardened aluminum alloy with good mechanical properties, such as abrasion and corrosion resistance. Suitable for the manufacture of molds for the plastic industry."
        },
        {
          "name": "7075",
          "image": "/images/7075.png",
          "data_sheet": "/pdf/7075.pdf",
          "characteristics": [
            "Suitable for parts subjected to high fatigue.",
            "High-strength aluminum alloy with good fatigue resistance compared to other alloys.",
            "High yield strength.",
            "Good weldability.",
            "Susceptible to electrolytic treatments."
          ],
          "applications": [
            "Blow Molds",
            "Shields / Robotics / Fuselages",
            "Parts for the Aerospace and Automotive Industry",
            "Parts for Industrial Machinery / Connections / Pharmaceutical"
          ],
          "chemical_composition": [
            {
              "%Si": "0.40 MAX",
              "%Fe": "0.50 MAX",
              "%Cu": "1.20 - 2.00",
              "%Mg": "2.10 - 2.90",
              "%Cr": "0.18 - 0.28",
              "%Zn": "5.10 - 6.10",
              "%Ti": "0.20 MAX",
              "%Mn": "0.30 MAX",
              "%Al": "Balance"
            }
          ],
          "description": "Aluminum alloy with good machining properties and mechanical strength, high durability, and good fatigue resistance. Suitable for the manufacture of molds for the plastic industry and some other industrial applications."
        }
      ]
    },
    {
      "categoryName": "Cast Iron",
      "categoryDescription": "Immerse yourself in the excellence of Cast Iron: unparalleled quality with proven efficiency in continuous casting, a leader in 90% of the world's steel production.",
      "image": "/images/HC_Gris_300.png",
      "products": [
        {
          "name": "HC Gris 300",
          "image": "/images/HC_Gris_300.png",
          "data_sheet": "/pdf/300.pdf",
          "characteristics": [
            "Blow Molds",
            "Shields / Robotics / Fuselages",
            "Parts for the Aeronautical and Automotive Industry",
            "Parts for Industrial Machinery / Connections / Pharmaceutical"
          ],
          "applications": [
            "Machinery Parts",
            "Oil & Gas Industry",
            "Hydraulic and Pneumatic Industry",
            "Automotive Industry",
            "Automation for Pumps and Compressors"
          ],
          "chemical_composition": [
            {
              "%C": "2.95 - 3.45",
              "%Si": "2.10 - 2.50",
              "%Mn": "0.55 - 0.75",
              "%P": "0.10 - 0.20",
              "%S": "0.04 - 0.07",
              "%Fe": "Balance"
            }
          ],
          "description": "Temperable gray iron with good wear resistance, optimal machinability along with an excellent finish with a finer grain than conventional cast iron. Also, it is free from inclusions, suitable for the manufacture of parts for the pneumatic and hydraulic industry."
        }
      ]
    },
    {
      "categoryName": "Stainless Steels",
      "categoryDescription": "Explore our resistant and durable stainless steels.",
      "image": "/images/304.png",
      "products": [
        {
          "name": "17-4PH",
          "image": "/images/17-4PH.png",
          "data_sheet": "/pdf/17-4PH.pdf",
          "characteristics": [
            "Martensitic Stainless Steel",
            "Precipitation Hardened",
            "Manufacture of Parts with High Mechanical Strength",
            "High Resilience",
            "Excellent Fatigue Resistance",
            "High Strength and Hardness",
            "Excellent Corrosion Resistance"
          ],
          "applications": [
            "Construction of Plants in the Chemical, Wood, Naval, Mechanical Engineering, Petroleum, and Metallurgical Industry",
            "Manufacture of Shafts for Submersible Pump Motors",
            "Components for Nuclear Reactors",
            "Gears",
            "Equipment for the Paper Industry",
            "Parts for Turbines"
          ],
          "chemical_composition": [
            {
              "%C": "0.70 MAX",
              "%Si": "0.75 MAX",
              "%Mn": "0.25 - 0.75",
              "%P": "0.040 MAX",
              "%S": "0.030 MAX",
              "%Cr": "16.00 - 16.75",
              "%Ni": "4.50 - 5.00",
              "%Cu": "3.00 - 5.00",
              "%Nb + Ta": "0.15 - 0.45"
            }
          ],
          "description": "Chromium stainless steel with good corrosion resistance and hardenable with a combination of mechanical properties such as wear resistance and toughness. Suitable for a variety of applications."
        },
        {
          "name": "303",
          "image": "/images/303.png",
          "data_sheet": "/pdf/303.pdf",
          "characteristics": [
            "Within the entire 300 series, this stainless steel is the best in machinability.",
            "It is especially used when it is required to manufacture parts in series.",
            "It has excellent corrosion resistance in slightly corrosive conditions.",
            "Lower thermal conductivity than carbon steels, low-alloy steels, or tool-grade steels.",
            "It has good resistance to corrosion and oxidation."
          ],
          "applications": [
            "Mass Production of Nuts and Bolts.",
            "Used for high production by machining parts or mechanical components.",
            "Bushings, wedges.",
            "Valve parts.",
            "Rivets.",
            "Assemblies and shafts."
          ],
          "chemical_composition": [
            {
              "%C": "0.15",
              "%Si": "1.00",
              "%Mn": "2.00",
              "%P": "0.20",
              "%S": "0.15",
              "%Cr": "17.00 - 19.00",
              "%Ni": "8.00 - 10.00"
            }
          ],
          "description": "Chromium-nickel stainless steel resistant to corrosion with the addition of sulfur to facilitate machining. Suitable for work in automatic machines and mass production."
        },
        {
          "name": "304",
          "image": "/images/304.png",
          "data_sheet": "/pdf/304.pdf",
          "characteristics": [
            "It is an austenitic steel, highly resistant to corrosion.",
            "Used in the Food, Medical, and Chemical industry.",
            "Very good resistance to oxidation and corrosion.",
            "With good forging and welding characteristics; less sensitive to intense carbide precipitation.",
            "Lower thermal conductivity than carbon steels, low-alloy steels, or tool-grade steels."
          ],
          "applications": [
            "Manufacture of kitchen utensils, cutlery, pots, and pans.",
            "Microwave ovens, sinks.",
            "In the construction industry, facades, stairs, and balconies.",
            "Jewelry and watch industry.",
            "In the manufacture of fasteners and transmission elements (couplings, shafts, screws, etc.)."
          ],
          "chemical_composition": [
            {
              "%C": "0.08 / 304L 0.030",
              "%Si": "1.00",
              "%Mn": "2.00",
              "%P": "0.045",
              "%S": "0.030",
              "%Cr": "18.00 - 20.00",
              "%Ni": "8.00 - 10.50"
            }
          ],
          "description": "Chromium-nickel antimagnetic stainless steel with very good corrosion resistance and good mechanical properties. Suitable for the manufacture of articles for domestic and industrial use."
        },
        {
          "name": "310",
          "image": "/images/310.png",
          "data_sheet": "/pdf/310.pdf",
          "characteristics": [
            "Corrosion-resistant stainless steel up to 2000 F.",
            "Resistant to high temperatures.",
            "Steel with excellent resistance to oxidation and heat.",
            "Austenitic stainless steel with the highest chromium and nickel content."
          ],
          "applications": [
            "Heat exchangers.",
            "Parts for furnaces, steam boilers, and radiant tubes.",
            "Food processing equipment.",
            "Combustion chambers or as filler material in welding."
          ],
          "chemical_composition": [
            {
              "%C": "0.25",
              "%Si": "1.50",
              "%Mn": "2.00",
              "%P": "0.045",
              "%S": "0.030",
              "%Cr": "25.00 - 26.00",
              "%Ni": "19.00 - 22.00"
            }
          ],
          "description": "Antimagnetic chromium-nickel refractory stainless steel with very high temperature resistance and good mechanical properties. Suitable for the manufacture of parts exposed to high working temperatures."
        },
        {
          "name": "316",
          "image": "/images/316.png",
          "data_sheet": "/pdf/316.pdf",
          "characteristics": [
            "Type 316 stainless steel is an austenitic chromium-nickel stainless steel containing molybdenum.",
            "This addition increases overall corrosion resistance, especially to sulfuric acids.",
            "Very resistant to high temperatures.",
            "Type 316 L stainless steel is a low-carbon modification to minimize carbide formation during",
            "the welding process."
          ],
          "applications": [
            "Tanks and containers for chemicals.",
            "Manufacture of valves and pumps.",
            "Pulp and paper industry equipment.",
            "Evaporators.",
            "Chemical and petrochemical industry.",
            "Food industry.",
            "Architectural applications."
          ],
          "chemical_composition": [
            {
              "%C": "0.08 / 316 L0.030",
              "%Si": "1.00",
              "%Mn": "2.00",
              "%P": "0.045",
              "%S": "0.030",
              "%Cr": "16.00 - 18.00",
              "%Ni": "10.00 - 14.00",
              "%Mo": "2.00 - 3.00"
            }
          ],
          "description": "Chromium-nickel stainless steel with molybdenum addition, antimagnetic with very good corrosion resistance and resistance to high temperatures. Suitable for the manufacture of parts exposed to most acids."
        },
        {
          "name": "410",
          "image": "/images/410.png",
          "data_sheet": "/pdf/410.pdf",
          "characteristics": [
            "Martensitic alloy stainless steel that provides good corrosion resistance.",
            "With very good hardness.",
            "This steel is ferromagnetic.",
            "This steel can be hardened by heat treatment."
          ],
          "applications": [
            "Automotive Industry.",
            "Widely used in parts for valves, cutlery, machinery for the food industry, parts of water pumps, pump shafts, and petrochemical equipment.",
            "Manufacture of dental and surgical instruments.",
            "Manufacture of springs, scissors, and valve seals."
          ],
          "chemical_composition": [
            {
              "%C": "0.15",
              "%Si": "1.00",
              "%Mn": "1.00",
              "%P": "0.040",
              "%S": "0.030",
              "%Cr": "11.50 - 13.50"
            }
          ],
          "description": "Chromium and hardenable stainless steel with a very good combination of hardness and wear resistance, as well as resistance to corrosion from water and steam."
        },
        {
          "name": "416",
          "image": "/images/416.png",
          "data_sheet": "/pdf/416.pdf",
          "characteristics": [
            "Martensitic alloy steel, characterized by good corrosion resistance and excellent mechanical properties through conventional treatment.",
            "Used in parts requiring certain mechanical properties and corrosion resistance.",
            "Very good machinability.",
            "Excellent mechanical properties can be achieved through conventional heat treatment.",
            "This steel is ferromagnetic."
          ],
          "applications": [
            "Used in parts requiring certain mechanical properties and corrosion resistance.",
            "Shafts for deep well pumps.",
            "Gears, pinions, screws.",
            "Valve parts and motor shafts.",
            "In any part that requires extensive machining."
          ],
          "chemical_composition": [
            {
              "%C": "0.15",
              "%Si": "1.00",
              "%Mn": "1.25",
              "%P": "0.060",
              "%S": "0.150",
              "%Cr": "12.00 - 14.00"
            }
          ],
          "description": "Chromium stainless steel, hardenable with good mechanical properties, resistant to atmospheric corrosion and water. It has very good machinability due to the addition of phosphorus and sulfur."
        },
        {
          "name": "420",
          "image": "/images/420.png",
          "data_sheet": "/pdf/420.pdf",
          "characteristics": [
            "Martensitic stainless steel, resistant to atmospheric corrosion, fresh water, mine water, steam, and other similar corrosive media.",
            "With which better wear resistance and higher hardness can be achieved with conventional heat treatment.",
            "It is ferromagnetic.",
            "It has medium machinability due to the high carbon content."
          ],
          "applications": [
            "Surgical instruments.",
            "Parts of pumps.",
            "Machinery parts for the food industry.",
            "Cutlery.",
            "Plastic molds.",
            "Valve parts.",
            "Gears and shafts."
          ],
          "chemical_composition": [
            {
              "%C": "0.26 - 0.35",
              "%Si": "1.00 MAX",
              "%Mn": "1.00 MAX",
              "%P": "0.040 MAX",
              "%S": "0.030 MAX",
              "%Cr": "12.00 - 14.00"
            }
          ],
          "description": "Chromium and hardenable stainless steel with high mechanical strength, toughness, and resistance to environmental corrosion and some weak chemical solutions."
        }
      ]
    },
    {
      "categoryName": "Engineering Plastics",
      "categoryDescription": "Engineering plastic solutions for specialized applications.",
      "image": "/images/nylaceromecanico.png",
      "products": [
        {
          "name": "NYLACERO MECANICO",
          "image": "/images/nylaceromecanico.png",
          "data_sheet": "/pdf/nylaceromecanico.pdf",
          "characteristics": [
            "High-quality bone-colored nylon with a wide range of industrial applications.",
            "Resistant to severe wear conditions and chemical attacks.",
            "Outperforms many metallic and natural materials such as bronze, brass, steel, aluminum, wood, and rubber.",
            "Maintains a high modulus of elasticity, resistant to embrittlement and deterioration.",
            "High thermal distortion temperature and excellent vibration resistance.",
            "Lightweight and environmentally friendly, reducing inertial and static loads, and dampening noise.",
            "Impact-resistant with superior tensile strength."
          ],
          "applications": [
            "General and highly specialized applications.",
            "Used in food processing for molding plates, ball valve seats for gas and oil industries, and inserts for eccentrics used in primary metallurgical industry."
          ],
          "chemical_composition": null,
          "description": "High-quality bone-colored nylon commonly used in general and specialized applications. It exhibits good resistance to wear, elasticity, tension, impact, and chemical attack from certain acids."
        },
        {
          "name": "NYLALLOY",
          "image": "/images/nylalloy.png",
          "data_sheet": "/pdf/nylalloy.pdf",
          "characteristics": [
            "High-quality black nylon alloyed with molybdenum bisulfide for increased wear and abrasion resistance.",
            "The mineral particles produce a more crystalline material with higher compressive strength."
          ],
          "applications": [
            "Main applications include skates, slippers, gears, sprockets, bushings, and bearings."
          ],
          "chemical_composition": null,
          "description": "High-quality black nylon alloyed with molybdenum bisulfide, providing increased wear and abrasion resistance, as well as higher compressive strength."
        },
        {
          "name": "NYLACERO 2000",
          "image": "/images/nylacero.png",
          "data_sheet": "/pdf/nylacero2000.pdf",
          "characteristics": [
            "High-quality green nylon with intramolecular oil lubrication.",
            "Self-lubricating material with integral oil in its structure.",
            "Excellent wear and abrasion resistance, resulting in a lifespan up to 5 times longer than other plastics."
          ],
          "applications": [
            "Excellent material for the manufacture of bushings and bearings, among other applications."
          ],
          "chemical_composition": null,
          "description": "Self-lubricating green nylon with excellent wear and abrasion resistance due to its intramolecular oil lubrication."
        },
        {
          "name": "NYLACERO T",
          "image": "/images/nylacero-t.png",
          "data_sheet": "/pdf/nylaceroT.pdf",
          "characteristics": [
            "Blue engineering polymer with added resistance to ultraviolet light and excessive heat.",
            "Antioxidant and sun stabilizer additives for increased resistance and durability.",
            "Suitable for applications exposed to solar radiation or desert-like weather conditions for short periods."
          ],
          "applications": [
            "Suitable for applications exposed to solar radiation or desert-like weather conditions for short periods, among others."
          ],
          "chemical_composition": null,
          "description": "Blue engineering polymer with antioxidants and sun stabilizers, providing increased resistance to ultraviolet light and excessive heat during temperature increases in use."
        },
        {
          "name": "DUROPLAST ACETAL",
          "image": "/images/duroplast_acetal.png",
          "data_sheet": "/pdf/duraplast.pdf",
          "characteristics": [
            "Thermoplastic polymer in white and black with low friction coefficient and outstanding wear properties.",
            "Works in very humid environments without affecting mechanical properties or dimensions.",
            "Resistant to a wide range of solvents and chemicals, especially alkali elements.",
            "High mechanical strength, toughness, and easy machining."
          ],
          "applications": [
            "Used in various applications such as mounting supports, industrial machinery, parts for machinery working in wet conditions, conveyors including pallets, gears, worms, bolts, screws, pistons, shafts, combs, bushings, rollers, parts for the electronics, automotive, and construction industries, among others."
          ],
          "chemical_composition": null,
          "description": "Thermoplastic polymer in white and black with high mechanical strength, toughness, and easy machining. Resistant to a wide range of solvents and chemicals, making it suitable for various applications."
        }
      ]
    },
    {
      "categoryName": "Abrasion-Resistant Steels",
      "categoryDescription": "Exceptional hardness for more durable parts and lighter equipment.",
      "image": "/images/hardox400.png",
      "products": [
        {
          "name": "HARDOX 400",
          "image": "/images/hardox400.png",
          "data_sheet": "/pdf/hardox400.pdf",
          "characteristics": [
            "Versatile steel that resists wear and abrasion.",
            "Abrasion-resistant steel with a nominal hardness of 400 HBW.",
            "Suitable for structures subjected to moderate wear due to its high strength and optimal folding and welding capacity.",
            "Tempered steel with a minimum core hardness of 90% compared to the guaranteed minimum surface hardness."
          ],
          "applications": [],
          "chemical_composition": [
            {
              "%C": "0.32 MAX",
              "%Si": "0.70 MAX",
              "%Mn": "1.60 MAX",
              "%P": "0.025 MAX",
              "%S": "0.010 MAX",
              "%Cr": "1.40 MAX",
              "%Ni": "1.50 MAX",
              "%Mo": "0.60 MAX",
              "%B": "0.004 MAX"
            }
          ],
          "description": "Hardox 400 is a reliable steel from the range of Hardox wear-resistant steel sheets. Its hardness and impact resistance date back to 1974 when Hardox was introduced as the world's first wear-resistant steel with folding capacity. This allowed for reliable performance in both the workshop and applications."
        },
        {
          "name": "HARDOX 450",
          "image": "/images/hardox450.png",
          "data_sheet": "/pdf/hardox450.pdf",
          "characteristics": [
            "Hardox® 450 has been the quality reference steel for over 30 years.",
            "Versatile abrasion-resistant steel with structural properties.",
            "Hardness of 50 HBW for increased wear resistance and longer lifespan with impact resistance."
          ],
          "applications": [
            "Ideal for manufacturing high-performance equipment such as buckets and tipping boxes, providing durability and structural integrity."
          ],
          "chemical_composition": [
            {
              "": "Chapa CR",
              "%C": "0.19 MAX",
              "%Si": "0.30 MAX",
              "%Mn": "1.50 MAX",
              "%P": "0.020 MAX",
              "%S": "0.005 MAX",
              "%Cr": "0.10 MAX",
              "%Ni": "0.10 MAX"
            },
            {
              "": "Chapa y Chapa",
              "%C": "0.26 MAX",
              "%Si": "0.70 MAX",
              "%Mn": "1.60 MAX",
              "%P": "0.025 MAX",
              "%S": "0.010 MAX",
              "%Cr": "1.40 MAX",
              "%Ni": "1.50 MAX"
            }
          ],
          "description": "Hardox 450 is arguably the most recognized wear-resistant steel worldwide with strict tolerances and excellent structural properties. With a nominal hardness of 450 HBW, Hardox 450 combines optimal folding and welding capabilities, offering better resistance to indentations and abrasion, as well as a longer lifespan."
        },
        {
          "name": "HARDOX 500",
          "image": "/images/hardox500.png",
          "data_sheet": "/pdf/hardox500.pdf",
          "characteristics": [
            "Foldable, weldable, and highly abrasion-resistant steel.",
            "Can be folded and welded, resistant to abrasion with a nominal hardness of 500 HBW.",
            "Suitable for applications requiring very high wear resistance."
          ],
          "applications": [],
          "chemical_composition": [
            {
              "": "Chapa",
              "%C": "0.30 MAX",
              "%Si": "0.70 MAX",
              "%Mn": "1.60 MAX",
              "%P": "0.020 MAX",
              "%S": "0.010 MAX",
              "%Cr": "1.50 MAX",
              "%Ni": "1.50 MAX",
              "%Mo": "0.60 MAX",
              "%B": "0.005 MAX"
            },
            {
              "Chapa gruesa": "",
              "%C": "0.30 MAX",
              "%Si": "0.70 MAX",
              "%Mn": "1.60 MAX",
              "%P": "0.025 MAX",
              "%S": "0.010 MAX",
              "%Cr": "1.40 MAX",
              "%Ni": "1.50 MAX",
              "%Mo": "0.60 MAX",
              "%B": "0.005 MAX"
            }
          ],
          "description": "Hardox 500, the latest quality in the Hardox range, offers exceptional and guaranteed resistance, hardness, and impact resistance in a single sheet. It has proven its value worldwide in dump trucks, tipper boxes, containers, mining equipment, agricultural machinery, linings and wear parts, and various types of buckets."
        }
      ]
    }
  ]
} as CategoryProducts

export default categoryProducts