export type CategoryProduct = {
  categoryName: string;
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
  }
};

export type CategoryProducts = {
  es: CategoryProduct[];
  en: CategoryProduct[];
};

const categoryProducts = {
  es: [
    {
      categoryName: "Acero Grado Herramienta",
      products: [
        {
          name: "A2",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/A2.png",
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
          chemical_composition: {
            '%C': '0.95 - 1.05',
            '%Mn': '0.45 - 0.75',
            '%Si': '0.20 - 0.40',
            '%Cr': '4.75 - 5.50',
            '%Mo': '0.90 - 1.40',
            '%V': '0.40',
          },
          description: "Acero al cromo-molibdeno-vanadio de uso universal con una gran resistencia al desgaste en combinación con una buena tenacidad apto para herramientales para trabajo en frío. Templable al aceite y al aire."
        },
        {
          name: "D2",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/D2.png",
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
          chemical_composition: {
            '%C': '1.40 - 1.60',
            '%Mn': '0.30 - 0.60',
            '%Si': '0.30 - 0.50',
            '%Cr': '11.00 - 13.00',
            '%Mo': '0.70 - 1.20',
            '%V': '0.80',
          },
          description: "Acero con alto contenido de carbono y cromo junto con vanadio y apto para la fabricación de herramientales para trabajo en frío que demanden una alta resistencia el desgaste junto con una moderada tenacidad. Templable al aceite y al aire."
        },
        {
          name: "H13",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/H13.png",
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
          chemical_composition: {
            '%C': '0.30 - 0.40',
            '%Mn': '0.20 - 0.40',
            '%Si': '0.80 - 1.20',
            '%Cr': '4.75 - 5.50',
            '%Mo': '1.25 - 1.75',
            '%V': '0.80 - 1.20',
          },
          description: "Acero al cromo-molibdeno-vanadio apto para la fabricación de herramientales para trabajo en caliente con muy buena  resistencia mecánica a altas temperaturas así como a los choques y fatiga térmica junto con una buena tenacidad. Templable al aceite y al aire."
        },
        {
          name: "L6",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/L6.png",
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
          chemical_composition: {
            '%C': '0.65 - 0.75',
            '%Mn': '0.55 - 0.85',
            '%Si': '0.20 - 0.40',
            '%Cr': '0.65 - 0.85',
            '%Mo': '0.25',
            '%V': '1.25 - 1.75',
          },
          description: "Acero al cromo-níquel-molibdeno con una excelente combinación de tenacidad y resistencia al desgaste apto para la fabricación de herramientales tanto para trabajo en frío como para trabajo en caliente. Templable al aceite y al aire."
        },
        {
          name: "M2",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/M2.png",
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
          chemical_composition: {
            '%C': '0.78 - 0.88',
            '%Si': '0.20 - 0.40',
            '%Mn': '0.20 - 0.40',
            '%Cr': '3.75 - 4.50',
            '%W': '5.50 - 6.75',
            '%Mo': '4.50 - 5.50',
            '%V': '1.60 - 2.20',
          },
          description: "Acero alta velocidad al molibdeno-tungsteno, posee una buena  combinación de resistencia al desgaste junto con  buena tenacidad apto para la fabricación de herramientas de corte. Templable al aceite y al aire."
        },
        {
          name: "O1",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/O1.png",
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
          chemical_composition: {
            '%C': '0.85 - 0.95',
            '%Mn': '1.00 - 1.30',
            '%Si': '0.20 - 0.40',
            '%Cr': '0.40 - 0.50',
            '%W': '0.40 - 0.50',
            '%V': '0.20',
          },
          description: "Acero al cromo-tungsteno-manganeso con muy buena resistencia al desgaste en combinación con muy buena tenacidad lo que lo convierte en un acero muy versátil para la fabricación de herramientales para trabajo en frío. Templable más comúnmente al aceite."
        },
        {
          name: "P20",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/P20.png",
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
          chemical_composition: {
            '%C': '0.28 - 0.40',
            '%Mn': '0.60 - 1.00',
            '%P': '0.030 MAX',
            '%S': '0.030 MAX',
            '%Cr': '1.40 - 2.00',
            '%Mo': '0.30 - 0.55',
            '%Si': '0.20 - 0.80',
          },
          description: "Acero al cromo-molibdeno bonificado (templado y revenido) con buena tenacidad así como excelentes propiedades para mecanizado, pulibilidad y texturizado apto para la fabricación de moldes para la industria del plástico."
        },
        {
          name: "P20 + Ni",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/P20.png",
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
          chemical_composition: {
            '%C': '0.28 - 0.40',
            '%Mn': '0.60 - 1.00',
            '%P': '0.030 MAX',
            '%S': '0.030 MAX',
            '%Cr': '1.40 - 2.00',
            '%Mo': '0.30 - 0.55',
            '%Si': '0.20 - 0.80',
            '%Ni': '0.68 - 1.00',
          },
          description: "Acero al cromo-molibdeno bonificado (templado y revenido) con buena tenacidad así como excelentes propiedades para mecanizado, pulibilidad y texturizado apto para la fabricación de moldes para la industria del plástico."
        },
        {
          name: "S7",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/S7.png",
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
          chemical_composition: {
            '%C': '0.45 - 0.55',
            '%Si': '0.20 - 1.00',
            '%Mn': '0.20 - 0.90',
            '%P': '0.030 MAX',
            '%S': '0.030 MAX',
            '%Cr': '3.00 - 3.50',
            '%Mo': '1.30 - 1.80',
            '%V': '0.35',
          },
          description: "Acero al cromo molibdeno con una alta tenacidad y resistencia al desgaste apto para la fabricación de herramientales de servicio pesado de cortado y formado tanto para trabajo en frío como para trabajo en caliente. Templable al aceite y al aire."
        }
      ]
    },
    {
      categoryName: "Acero Grado Maquinaria",
      products: [
        {
          name: "12L14",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/12L14.png",
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
          chemical_composition: {
            '%C': '0.15MAX',
            '%Mn': '0.85 - 1.15',
            '%P': '0.04 -.09',
            '%S': '0.26 - 0.35',
            '%Pb': '0.15 - 0.35',
          },
          description: "Acero de bajo carbono, resulfurado con contenido de plomo y de fácil mecanización así como buenas propiedades de terminado apto para su uso en máquinas automáticas y para la fabricación en serie de piezas industriales varias como tornillos, tuercas, pernos entre otros."
        },
        {
          name: "1018",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/1018.png",
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
          chemical_composition: {
            '%C': '0.15 - 0.20',
            '%Mn': '0.60 - 0.90',
            '%P': '0.040MAX',
            '%S': '0.050MAX',
          },
          description: "Acero con bajo contenido de carbono con buenas propiedades de maquinado y soldabilidad así como de mayor uso en la industria para la construcción de maquinaria y partes industriales."
        },
        {
          name: "1026",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/1026.png",
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
          chemical_composition: {
            '%C': '0.2 - 0.28',
            '%Mn': '0.60 - 0.90',
            '%Si': '0.15 - 0.35',
            '%P': '0.040MAX',
            '%S': '0.050MAX',
          },
          description: "Acero al carbono en barra hueca y de uso general en la construcción de maquinaria con muy buena maquinabilidad y soldabilidad susceptible de endurecimiento principalmente a través del proceso de cementación."
        },
        {
          name: "1045",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/1045.png",
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
          chemical_composition: {
            '%C': '0.43 - 0.50',
            '%Mn': '0.60 - 0.90',
            '%P': '0.040MAX',
            '%S': '0.050MAX',
          },
          description: "Acero con contenido de carbono medio y templable con buenas propiedades de maquinado y de uso en la industria para la construcción de maquinaria y partes industriales. Susceptible de soldabilidad bajo ciertos cuidados."
        },
        {
          name: "1060",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/1060.png",
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
          chemical_composition: {
            '%C': '0.55 - 0.65',
            '%Mn': '0.60 - 0.90',
            '%Si': '0.15 - 0.30',
            '%P': '0.040MAX',
            '%S': '0.050MAX',
          },
          description: "Acero al alto carbono con una gran resistencia al desgaste apto para su uso en la fabricación de partes para equipo agrícola y automotriz así como en la fabricación de herramientas de mano."
        },
        {
          name: "1141",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/1141.png",
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
          chemical_composition: {
            '%C': '0.37 - 0.45',
            '%Mn': '1.35 - 1.65',
            '%P': '0.040MAX',
            '%S': '0.08 - 0.13',
          },
          description: "Acero resulfurado y de fácil mecanización así como buenas propiedades mecánicas y apto para su uso en máquinas automáticas para la fabricación en serie de piezas industriales."
        },
        {
          name: "1144",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/1144.png",
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
          chemical_composition: {
            '%C': '0.40 - 0.48',
            '%Mn': '1.35 - 1.65',
            '%P': '0.040MAX',
            '%S': '0.24 - 0.033MAX',
          },
          description: "Acero de bajo carbono, resulfurado y de fácil mecanización así como buenas propiedades mecánicas y de terminado apto para su uso en máquinas automáticas y para la fabricación en serie de piezas industriales."
        },
        {
          name: "1215",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/1215.png",
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
          chemical_composition: {
            '%C': '0.090MAX',
            '%Mn': '0.75 - 1.05',
            '%P': '0.04 - 0.09',
            '%S': '0.26 - 0.35',
          },
          description: "Acero resulfurado y refosforado de fácil mecanización así como buenas propiedades mecánicas y de terminado apto para su uso en máquinas automáticas para la fabricación en serie de piezas industriales."
        },
        {
          name: "1518",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/1518.png",
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
          chemical_composition: {
            '%C': '0.15 - 0.21',
            '%Mn': '1.10 - 1.40',
            '%P': '0.040MAX',
            '%S': '0.050MAX',
          },
          description: "Acero al carbono en barra hueca y de uso general en la construcción de maquinaria con muy buena maquinabilidad y soldabilidad susceptible de endurecimiento principalmente a través del proceso de cementación."
        },
        {
          name: "4140",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/4140.png",
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
          chemical_composition: {
            '%C': '0.38 - 0.43',
            '%Mn': '0.75 - 1.00',
            '%P': '0.035MAX',
            '%S': '0.040MAX',
            '%Si': '0.15 - 0.35',
            '%Cr': '0.80 - 1.10',
            '%Mo': '0.15 - 0.25',
          },
          description: "Acero al cromo-molibdeno templable suministrado en condición de recocido así como también de tratado y de uso común en la industria para la construcción de maquinaria partes industriales con mayores exigencias mecánicas."
        },
        {
          name: "4340 QT",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/4340.png",
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
          chemical_composition: {
            '%C': '0.38 - 0.43',
            '%Mn': '0.60 - 0.80',
            '%P': '0.035MAX',
            '%S': '0.040MAX',
            '%Si': '0.15 - 0.30',
            '%Cr': '0.80 - 1.00',
            '%Mo': '0.20 - 0.30',
          },
          description: "Acero al cromo-níquel-molibdeno suministrado en condición de tratado con una muy buena resistencia a la tensión y tenacidad apto para la fabricación de piezas para diversas aplicaciones y sujetas a grandes esfuerzos mecánicos."
        },
        {
          name: "5160",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/5160.png",
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
          chemical_composition: {
            '%C': '0.56 - 0.64',
            '%Mn': '0.75 - 1.00',
            '%Cr': '0.70 - 0.90',
            '%P': '0.035MAX',
            '%S': '0.040MAX',
            '%Si': '0.15 - 0.35',
          },
          description: "Acero al carbono conocido como acero muelle con muy buena resistencia a la fatiga, una alta ductilidad al igual que flexibilidad."
        },
        {
          name: "8620",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/8620.png",
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
          chemical_composition: {
            '%C': '0.18 - 0.23',
            '%Mn': '0.70 - 0.90',
            '%P': '0.035MAX',
            '%S': '0.040MAX',
            '%Si': '0.15 - 0.35',
            '%Cr': '0.40 - 0.60',
            '%Mo': '0.15 - 0.25',
            '%Ni': '0.40 - 0.70',
          },
          description: "Acero al cromo-níquel-molibdeno para cementación y de fácil maquinabilidad ampliamente utilizado para la fabricación de engranajes industriales y otras partes más que demanden una alta dureza superficial y un núcleo suave."
        },
        {
          name: "9840 RT",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/9840.png",
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
          chemical_composition: {
            '%C': '0.38 - 0.43',
            '%Mn': '0.70 - 0.90',
            '%Si': '0.20 - 0.53',
            '%Ni': '0.85 - 1.15',
            '%Cr': '0.70 - 0.90',
            '%Mo': '0.20 - 0.30',
          },
          description: "Acero al cromo-níquel-molibdeno suministrado en condición de recocido así como de tratado con una buena resistencia a la mecánica y apto para la fabricación de piezas de maquinaria de uso general."
        },
        {
          name: "A36",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/A36.png",
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
          chemical_composition: {
            '%C': '0.25MAX',
            '%Mn': '0.80 - 1.20',
            '%P': '0.040MAX',
            '%S': '0.050MAX',
            '%Si': '0.040MAX',
          },
          description: "Acero comercial multiusos con buena resistencia y maquinabilidad, susceptible de soldabilidad."
        }
      ]
    },
    {
      categoryName: "Aluminio",
      products: [
        {
          name: "5083",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/5083.png",
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
          chemical_composition: {
            '%Si': '0.40MAX',
            '%Fe': '0.40MAX',
            '%Cu': '0.10MAX',
            '%Mg': '4.00 - 4.90',
            '%Cr': '0.05 - 0.25',
            '%Zn': '0.25MAX',
            '%Ti': '0.15MAX',
            '%Mn': '0.40 - 1.00',
            '%Al': 'Balance',
          },
          description: "Aleación de aluminio con una resistencia mecánica moderada y un excepcional comportamiento ante entornos agresivos, ya que posee una muy buena resistencia a la corrosión. Apto para la fabricación de partes para industrias del plástico, navales, aeronáuticas y automotrices, entre otras."
        },
        {
          name: "6061 T6",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/6061.png",
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
          chemical_composition: {
            '%Si': '0.40 - 0.80',
            '%Fe': '0.79MAX',
            '%Cu': '0.15 - 0.40',
            '%Mg': '0.80 - 1.20',
            '%Cr': '0.04 - 0.34',
            '%Zn': '0.25MAX',
            '%Ti': '0.015MAX',
            '%Mn': '0.15MAX',
            '%Al': 'Balance',
          },
          description: "Aleación de aluminio endurecido fácil de maquinar con buenas propiedades mecánicas, como resistencia a la abrasión y a la corrosión. Apto para la fabricación de moldes para la industria del plástico."
        },
        {
          name: "7075",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/7075.png",
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
          chemical_composition: {
            '%Si': '0.40MAX',
            '%Fe': '0.50MAX',
            '%Cu': '1.20 - 2.00',
            '%Mg': '2.10 - 2.90',
            '%Cr': '0.18 - 0.28',
            '%Zn': '5.10 - 6.10',
            '%Ti': '0.20MAX',
            '%Mn': '0.30MAX',
            '%Al': 'Balance',
          },
          description: "Aleación de aluminio con buenas propiedades de maquinado y resistencia mecánica, alta durabilidad y buena resistencia a la fatiga. Apto para la fabricación de moldes para la industria del plástico y algunas otras aplicaciones industriales."
        }
      ]
    },
    {
      categoryName: "Hierro Colado",
      products: [
        {
          name: "HC Gris 300",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/HC_Gris_300.png",
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
          chemical_composition: {
            '%C': '2.95 - 3.45',
            '%Si': '2.10 - 2.50',
            '%Mn': '0.55 - 0.75',
            '%P': '0.10 - 0.20',
            '%S': '0.04 - 0.07',
            '%Fe': 'Balance',
          },
          description: "Hierro gris templable con buena resistencia al desgaste, una óptima maquinabilidad junto con un excelente acabado con un grano más fino que la función convencional. Así como ausencia de inclusiones, apto para la fabricación de partes para la industria neumática e hidráulica."
        }
      ]
    },
    {
      categoryName: "Inoxidables",
      products: [
        {
          name: "17-4PH",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/17-4PH.png",
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
          chemical_composition: {
            '%C': '0.70MAX',
            '%Si': '0.75MAX',
            '%Mn': '0.25 - 0.75',
            '%P': '0.040MAX',
            '%S': '0.030MAX',
            '%Cr': '16.00 - 16.75',
            '%Ni': '4.50 - 5.00',
            '%Cu': '3.00 - 5.00',
            '%Nb + Ta': '0.15 - 0.45',
          },
          description: "Acero inoxidable al cromo con una buena resistencia a la corrosión y endurecible con una combinación de propiedades mecánicas como resistencia al desgaste y tenacidad. Apto para una variedad de aplicaciones."
        },
        {
          name: "303",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/303.png",
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
          chemical_composition: {
            '%C': '0.15',
            '%Si': '1.00',
            '%Mn': '2.00',
            '%P': '0.20',
            '%S': '0.15',
            '%Cr': '17.00 - 19.00',
            '%Ni': '8.00 - 10.00',
          },
          description: "Acero inoxidable al cromo-níquel resistente a la corrosión con adición de azufre para facilitar el mecanizado. Apto para trabajos en máquinas automáticas y producciones en serie."
        },
        {
          name: "304",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/304.png",
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
          chemical_composition: {
            '%C': '0.08 / 304L 0.030',
            '%Si': '1.00',
            '%Mn': '2.00',
            '%P': '0.045',
            '%S': '0.030',
            '%Cr': '18.00 - 20.00',
            '%Ni': '8.00 - 10.50',
          },
          description: "Acero inoxidable al cromo-níquel antimagnético con una muy buena resistencia a la corrosión y buenas propiedades mecánicas. Apto para la fabricación de enseres para uso doméstico e industrial."
        },
        {
          name: "310",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/310.png",
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
          chemical_composition: {
            '%C': '0.25',
            '%Si': '1.50',
            '%Mn': '2.00',
            '%P': '0.045',
            '%S': '0.030',
            '%Cr': '25.00 - 26.00',
            '%Ni': '19.00 - 22.00',
          },
          description: "Acero inoxidable refractario al cromo-níquel antimagnético con una muy alta resistencia a la temperatura y buenas propiedades mecánicas. Apto para la fabricación de partes expuestas a temperaturas de trabajo elevadas."
        },
        {
          name: "316",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/316.png",
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
          chemical_composition: {
            '%C': '0.08 / 316 L0.030',
            '%Si': '1.00',
            '%Mn': '2.00',
            '%P': '0.045',
            '%S': '0.030',
            '%Cr': '16.00 - 18.00',
            '%Ni': '10.00 - 14.00',
            '%Mo': '2.00 - 3.00',
          },
          description: "Acero inoxidable al cromo-níquel con adición de molibdeno, antimagnético con una muy buena resistencia a la corrosión y a altas temperaturas de trabajo. Apto para la fabricación de partes expuestas a la mayoría de ácidos."
        },
        {
          name: "410",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/410.png",
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
          chemical_composition: {
            '%C': '0.15',
            '%Si': '1.00',
            '%Mn': '1.00',
            '%P': '0.040',
            '%S': '0.030',
            '%Cr': '11.50 - 13.50',
          },
          description: "Acero inoxidable al cromo y templable con una muy buena combinación de dureza y resistencia al desgaste, así como a la corrosión de agentes como agua y vapor."
        },
        {
          name: "416",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/416.png",
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
          chemical_composition: {
            '%C': '0.15',
            '%Si': '1.00',
            '%Mn': '1.25',
            '%P': '0.060',
            '%S': '0.150',
            '%Cr': '12.00 - 14.00',
          },
          description: "Acero inoxidable al cromo, templable con buenas propiedades mecánicas, resistente a la corrosión atmosférica y al agua. Posee una muy buena maquinabilidad como resultado de la adición de fósforo y azufre."
        },
        {
          name: "420",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/420.png",
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
          chemical_composition: {
            '%C': '0.26 - 0.35',
            '%Si': '1.00MAX',
            '%Mn': '1.00MAX',
            '%P': '0.040MAX',
            '%S': '0.030MAX',
            '%Cr': '12.00 - 14.00',
          },
          description: "Acero inoxidable al cromo y templable con alta resistencia mecánica, tenacidad y resistente a la corrosión ambiental y algunas soluciones químicas débiles."
        }
      ]
    },
    {
      categoryName: "Plásticos de Ingenieria",
      products: [
        {
          name: "NYLACERO MECANICO",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/nylacero.png",
          data_sheet: "",
          characteristics: [],
          applications: [],
          chemical_composition: null,
          description: "Nylon de alta calidad color hueso y de aplicación común en partes de uso general y especializadas con buena resistencia al desgaste, elasticidad, tensión, impacto y al ataque químico de algunos ácidos, entre otros."
        },
        {
          name: "NYLALLOY",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/nylalloy.png",
          data_sheet: "",
          characteristics: [],
          applications: [],
          chemical_composition: null,
          description: "Nylon de alta calidad color negro aleado con bisulfuro de molibdeno proporcionándole una mayor resistencia al desgaste y a la abrasión, así como una mayor resistencia a la compresión."
        },
        {
          name: "NYLACERO 2000",
          data_sheet: "",
          characteristics: [],
          applications: [],
          chemical_composition: null,
          description: "Nylon autolubricante (color verde) con una excelente resistencia al desgaste y a la abrasión."
        },
        {
          name: "NYLACERO T",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/nylacero-t.png",
          data_sheet: "",
          characteristics: [],
          applications: [],
          chemical_composition: null,
          description: "Polímero de ingeniería color azul con aditivos antioxidantes y estabilizadores a la luz del sol, lo que le proporcionan una mayor resistencia al efecto de la luz ultravioleta y del calor excesivo durante aumentos de temperatura en su uso."
        },
        {
          name: "DUROPLAST ACETAL",
          image: "https://zys2nicxwzkmnh5p.public.blob.vercel-storage.com/duroplast_acetal.png",
          data_sheet: "",
          characteristics: [],
          applications: [],
          chemical_composition: null,
          description: "Polímero termoplástico tanto en color blanco como en color negro con una alta resistencia mecánica y tenacidad, así como alta facilidad de mecanizado. Resistente a una gran cantidad de solventes y productos químicos."
        }
      ]
    }
  ],
  en: [
    {
      categoryName: "Tool Steel Grade",
      products: [
        {
          name: "A2",
          description: "Universal use chrome-molybdenum-vanadium steel with great wear resistance combined with good toughness suitable for tooling for cold work. Quenchable in oil and air."
        },
        {
          name: "D2",
          description: "High carbon and chromium steel along with vanadium, suitable for the manufacture of tooling for cold work that demands high wear resistance along with moderate toughness. Quenchable in oil and air."
        },
        {
          name: "H13",
          description: "Chrome-molybdenum-vanadium steel suitable for the manufacture of tooling for hot work with very good mechanical resistance at high temperatures as well as to shocks and thermal fatigue along with good toughness. Quenchable in oil and air."
        },
        {
          name: "L6",
          description: "Chrome-nickel-molybdenum steel with an excellent combination of toughness and wear resistance suitable for the manufacture of tooling for both cold and hot work. Quenchable in oil and air."
        },
        {
          name: "M2",
          description: "High-speed molybdenum-tungsten steel, with a good combination of wear resistance and toughness suitable for the manufacture of cutting tools. Quenchable in oil and air."
        },
        {
          name: "O1",
          description: "Chrome-tungsten-manganese steel with very good wear resistance combined with very good toughness, making it a very versatile steel for the manufacture of tooling for cold work. Typically quenched in oil."
        },
        {
          name: "P20",
          description: "Bonified chrome-molybdenum steel (quenched and tempered) with good toughness as well as excellent properties for machining, polishability, and texturing suitable for the manufacture of molds for the plastics industry."
        },
        {
          name: "S7",
          description: "Chrome-molybdenum steel with high toughness and wear resistance suitable for the manufacture of heavy-duty cutting and forming tools for both cold and hot work. Quenchable in oil and air."
        }
      ]
    },
    {
      categoryName: "Machinery Grade Steel",
      products: [
        {
          name: "12L14",
          description: "Low carbon steel, resulfurized with lead content and easy machinability as well as good finishing properties suitable for use in automatic machines and for the mass production of various industrial parts such as screws, nuts, bolts, among others."
        },
        {
          name: "1018",
          description: "Low carbon steel with good machining and weldability properties as well as commonly used in the industry for the construction of machinery and industrial parts."
        },
        {
          name: "1026",
          description: "Carbon steel in hollow bar form and of general use in machinery construction with very good machinability and weldability susceptible to hardening mainly through the cementation process."
        },
        {
          name: "1045",
          description: "Medium carbon and quenchable steel with good machining properties and used in the industry for the construction of machinery and industrial parts. Susceptible to weldability under certain precautions."
        },
        {
          name: "1060",
          description: "High carbon steel with great wear resistance suitable for use in the manufacturing of parts for agricultural and automotive equipment as well as in the manufacture of hand tools."
        },
        {
          name: "1141",
          description: "Resulfurized steel with easy machinability as well as good mechanical properties and suitable for use in automatic machines for mass production of industrial parts."
        },
        {
          name: "1144",
          description: "Low carbon steel, resulfurized and easy to machine as well as good mechanical properties and finishing suitable for use in automatic machines and for mass production of industrial parts."
        },
        {
          name: "1215",
          description: "Resulfurized and rephosphorized steel with easy machinability as well as good mechanical properties and finishing suitable for use in automatic machines for mass production of industrial parts."
        },
        {
          name: "1518",
          description: "Carbon steel in hollow bar form and of general use in machinery construction with very good machinability and weldability susceptible to hardening mainly through the cementation process."
        },
        {
          name: "4140",
          description: "Quenchable chrome-molybdenum steel supplied in annealed condition as well as treated and commonly used in the industry for the construction of machinery and industrial parts with higher mechanical demands."
        },
        {
          name: "4340 QT",
          description: "Quenchable chrome-nickel-molybdenum steel supplied in treated condition with very good tensile strength and toughness suitable for the manufacture of parts for various applications subject to high mechanical stresses."
        },
        {
          name: "5160",
          description: "Carbon steel known as spring steel with very good fatigue resistance, high ductility, and flexibility."
        },
        {
          name: "8620",
          description: "Chrome-nickel-molybdenum steel for cementation and easy machinability widely used for the manufacture of industrial gears and other parts that require high surface hardness and a soft core."
        },
        {
          name: "9840 RT",
          description: "Quenchable chrome-nickel-molybdenum steel supplied in annealed condition as well as treated with good mechanical resistance suitable for the manufacture of parts for general machinery use."
        },
        {
          name: "A36",
          description: "Multipurpose commercial steel with good resistance and machinability, susceptible to weldability."
        }
      ]
    },
    {
      categoryName: "Aluminum",
      products: [
        {
          name: "5083",
          description: "Aluminum alloy with moderate mechanical strength and exceptional performance in aggressive environments, as it has very good corrosion resistance. Suitable for the manufacture of parts for plastic, naval, aeronautical, and automotive industries, among others."
        },
        {
          name: "6061 T6",
          description: "Hardened aluminum alloy easy to machine with good mechanical properties, such as resistance to abrasion and corrosion. Suitable for the manufacture of molds for the plastic industry."
        },
        {
          name: "7075",
          description: "Aluminum alloy with good machining properties and mechanical resistance, high durability, and good fatigue resistance. Suitable for the manufacture of molds for the plastic industry and some other industrial applications."
        }
      ]
    },
    {
      categoryName: "Cast Iron",
      products: [
        {
          name: "HC Gris 300",
          description: "Temperable gray iron with good wear resistance, optimal machinability, and excellent finish with a finer grain than the conventional function. Also, absence of inclusions, suitable for the manufacture of parts for the pneumatic and hydraulic industry."
        }
      ]
    },
    {
      categoryName: "Stainless Steel",
      products: [
        {
          name: "17-4PH",
          description: "Chromium stainless steel with good corrosion resistance and hardenable with a combination of mechanical properties such as wear resistance and toughness. Suitable for a variety of applications."
        },
        {
          name: "303",
          description: "Chromium-nickel stainless steel resistant to corrosion with the addition of sulfur for easy machining. Suitable for work in automatic machines and mass production."
        },
        {
          name: "304",
          description: "Antimagnetic chromium-nickel stainless steel with very good corrosion resistance and good mechanical properties. Suitable for the manufacture of utensils for domestic and industrial use."
        },
        {
          name: "310",
          description: "Refractory chromium-nickel stainless steel antimagnetic with very high resistance to temperature and good mechanical properties. Suitable for the manufacture of parts exposed to elevated working temperatures."
        },
        {
          name: "316",
          description: "Chromium-nickel stainless steel with the addition of molybdenum, antimagnetic with very good corrosion resistance and high-temperature resistance. Suitable for the manufacture of parts exposed to most acids."
        },
        {
          name: "410",
          description: "Chromium stainless steel, temperable with a very good combination of hardness and wear resistance, as well as corrosion resistance to agents such as water and steam."
        },
        {
          name: "416",
          description: "Chromium stainless steel, temperable with good mechanical properties, resistant to atmospheric corrosion and water. It has very good machinability as a result of the addition of phosphorus and sulfur."
        },
        {
          name: "420",
          description: "Chromium stainless steel, temperable with high mechanical strength, toughness, and resistant to environmental corrosion and some weak chemical solutions."
        }
      ]
    },
    {
      categoryName: "Engineering Plastics",
      products: [
        {
          name: "NYLACERO MECANICO",
          description: "High-quality nylon in bone color, commonly used in general and specialized parts with good resistance to wear, elasticity, tension, impact, and chemical attack from certain acids, among others."
        },
        {
          name: "NYLALLOY",
          description: "High-quality nylon in black color alloyed with molybdenum disulfide, providing increased wear and abrasion resistance, as well as higher compression resistance."
        },
        {
          name: "NYLACERO 2000",
          description: "Self-lubricating nylon (green color) with excellent wear and abrasion resistance."
        },
        {
          name: "NYLACERO T",
          description: "Engineering polymer in blue color with antioxidant additives and stabilizers for sunlight, providing higher resistance to ultraviolet light and excessive heat during temperature increases in use."
        },
        {
          name: "DUROPLAST ACETAL",
          description: "Thermoplastic polymer available in both white and black colors, with high mechanical strength, toughness, and easy machinability. Resistant to a wide range of solvents and chemicals."
        }
      ]
    },
  ]
} as CategoryProducts

export default categoryProducts