import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ImGrin2 } from 'react-icons/im';

i18n
.use(initReactI18next)
.init({
        lng: localStorage.getItem("lang") || "es",
        fallbackLng: 'en',
        interpolation:{
            escapeValue: false
        },
        resources: {
                en: {
                    translation: {
                    title: 'Famox SA',
                    gases:{
                        a:'AIR',
                        b:'CO2',
                        c:'N2',
                        d:'N2O',
                        e:'OXYGEN',
                        f:'OXYGEN/AIR',
                        g:'VACUUM',
                    },
                    carrusel: {
                        img1: {
                            title: 'Air/Oxygen Blender',
                            sub: ''
                        },
                        img2: {
                            title: 'Medical Supply Units',
                            sub: ''
                        },
                        img3: {
                            title: 'dosing Containers',
                            sub: ''
                        },
                        img4: {
                            title: 'Flowmeters',
                            sub: ''
                        },
                        img5: {
                            title: 'New Vacuum Regulators',
                            sub: ''
                        },
                        img6: {
                            title: 'Nurse Call System',
                            sub: ''
                        },
                        img7: {
                            title: 'Low-Pressure Regulator with Flowmeter',
                            sub: ''
                        },
                        img8: {
                            title: '',
                            sub: ''
                        },
                        img9: {
                            title: '',
                            sub: ''
                        },
                    },
                    menu: {
                        link1: 'Famox',
                        link2: 'Catalog',
                        link3: 'Ecommerce',
                        link4: 'About Us',
                        link5: 'Products',
                        link6: 'Certifications',
                        link7: 'Projects',
                        link8: 'Contact',
                    },
                    home: {
                        categorias: {
                            a: 'Medical Supply Units',
                            b: 'Gas Therapy',
                            c: 'Accessories',
                            d: 'Digital Equipment' 
                        },
                        descripcionCategorias: {
                            a: {
                                title: 'Medical Supply Units',
                                descrip: 'We design and manufacture Medical Supply Units whose main concept is to meet the needs of healthcare professionals in any type of facility, through equipment such as Bed Head Units, Neonatal Islands, Operating Room Columns, and Ceiling-Mounted Systems for Critical Care Areas.'
                            },
                            b: {
                                title: 'Gas Therapy',
                                descrip: 'Equipment intended for the control and regulation of medical gases at connection points. Includes pressure regulators, pressure reducers, gas mixers, and flow regulators, among others.'
                            },
                            c: {
                                title: 'Quality',
                                descrip: 'We apply continuous improvement and provide ongoing training to our staff to ensure their full commitment and participation in our Quality Management System.'
                            },
                            d: {
                                title: 'Installations',
                                descrip: 'We design and carry out medical gas pipeline installations in compliance with current standards. Our designs focus on the practical needs and applications of healthcare institutions, ensuring reliability even under the most demanding and critical conditions.'
                            }
                        },
                        carruselMini: 'Discover Us',
                    },
                    footer: {
                        left:{
                            title: 'Famox SA',
                            sub1: 'About Us',
                            sub2: 'FAQ',
                            sub3: 'Our Products',
                            sub4: 'Catalog'
                        },
                        right:{
                            title: 'Contact Us',
                            sub1: '+54 9 11 6073-6020 // +54 9 11 6967-4273',
                            sub2: 'info@famox.com.ar',
                            sub3: 'atencion.cliente@famox.com.ar',
                        }
                    },
                    ecomm: {
                        title: 'Our Ecommerce',
                        menu: {
                            val1: 'Search',
                            val2: 'Reset Search'
                        },
                        notes: {
                            note1: 'Choose the model',
                            note2: 'Please select the gas type, connection, and range first.',
                            note3: 'Please select the gas type and connection first.',
                            note4: 'Please select the gas type, connection, and model first.',
                            note5: 'Select the gas type',
                            note6: 'Select characteristics and length',
                            note7: 'Select connections',
                            note8: 'Select the type of connector',
                        },
                        categorias: {
                            a: 'Conectors',
                            b: 'Models',
                            c: 'Gases',
                            d: 'Ranges',
                            e: 'Medium Voltage',
                            f: 'Low Voltage',
                            g: 'Lighting',
                            h: 'Panel Length',
                            i: 'Connection'
                        },
                        steps:{
                            a:'Quantity:',
                            b: 'Your selection',
                            c: 'Purchase',
                            d: {
                                title: 'choose unit of measure',
                                val1: 'mm',
                                val2: 'cm',
                                val3: 'm'
                            },
                            e: 'Selected item',
                            f: 'Purchase',
                            g: 'Length',
                            h: 'Connections',
                            l: 'Conector:',
                            j: 'Range:',
                            m: 'Gas:',
                            n: 'Quantity:',
                            o: 'Confirm',
                            p: 'Selected Model',
                        },
                        options:{
                            low:{
                                a: 'NURSE CALL',
                                b: 'CARDIAC ARREST - PUNCH BUTTON',
                                c: 'DIGITAL CARDIAC ARREST',
                                d: 'DIGITAL CARDIAC ARREST + PUNCH BUTTON',
                                e: 'DATA RJ45 CAT6',
                                f: 'TELEPHONY RJ11',
                            },
                            med:{
                            a: 'DOUBLE IRAM',
                            b: 'SINGLE IRAM',
                            c: 'DOUBLE IRAM STABILIZED',
                            d: 'SINGLE IRAM STABILIZED',
                            e: 'DOUBLE DIN',
                            f: 'DOUBLE IRAM-DIN',
                            g: 'DOUBLE DIN STABILIZED',
                            h: 'DOUBLE IRAM-DIN STABILIZED',
                            i: 'SINGLE DIN',
                            j: 'SINGLE DIN STABILIZED',
                            k: 'THERMOMAGNETIC BREAKER',
                            l: 'THERMAL + CIRCUIT BREAKER',
                            m: 'RESERVE 2M',
                            },
                            ilum:{
                                a:'PATIENT LIGHT LED 5W',
                                b:'PATIENT LIGHT LED 9W',
                                c:'AMBIENT LIGHT LED 18W',
                                d:'NIGHT OR COURTESY LIGHT LED RGB',
                                e:'NIGHT LIGHT Bi-Pin WHITE LED 6W',
                            }
                        }

                    },
                    nosotros:{
                        title: 'Welcome to Famox',
                        txt1: 'We are a modern and innovative company committed to supporting the growth and development of the healthcare sector. We work closely with medical centers, clinics, and hospitals — both public and private — providing personalized service, and expertise in analysis, design, and execution of all the required solutions. With over ten years of experience in the market, we are dedicated to offering innovative and high-quality solutions for our clients. Our team firmly believes that our products and services must adapt to our clients’ needs, emphasizing personalized attention as a core value.',
                        title2: 'About Us',
                        txt2: 'Although Famox is a young company, it has positioned itself in the local and South American markets as a manufacturer of Gas Therapy Equipment and Medical Supply Units. Our products are designed and tested under international standards. We manufacture and develop locally under the guidelines established by A.N.M.A.T., the regulatory authority, ensuring reliable, high-quality, and safe medical devices. We offer our structure and know-how for project development, design, and innovation of new products to our clients and the market.',
                        title3: 'Our Mission',
                        txt3: 'Throughout the years, Famox has continuously pursued improvement in its equipment with the clear goal of providing products that healthcare organizations can fully trust for daily use — enabling patient care at the highest level of excellence.',
                        title4: 'Quality Policy',
                        txt4: 'The main objective of Famox S.A. is the manufacturing and commercialization of medical gas regulators, vacuum regulators, and complementary accessories — medical devices used in respiratory therapy and medical supply units. We ensure customer satisfaction by meeting their requirements, guaranteeing the quality, safety, and efficacy of our products, and complying with all applicable legal and regulatory requirements. Our entire team ensures that each product performs as designed, covering both functional and aesthetic aspects. We achieve this through our philosophy of continuous improvement and maintenance of an effective management system. Currently, we are fully committed to complying with Good Manufacturing Practices (GMP) established by A.N.M.A.T. and achieving excellence and recognition for our medical products both nationally and internationally, while maintaining high standards of service and dedication to our clients. This is accomplished through the participation and training of our staff, our suppliers, and all stakeholders involved in our quality processes, without neglecting the necessary profitability that sustains our company.'
                    },
                    productos: {
                        title: 'Our Products',
                        detalle: {
                            op1: 'Conectores',
                            op2: 'Available gases',
                            op3: 'Intended Use',
                            op4: 'Operating Range',
                            op5: 'Considered a Medical Device by ANMAT',
                            op6: "Modules",
                            op7: 'Range'
                        }
                    },
                    certif: {
                        title: 'Certifications',
                        c1:{
                            title: 'ISO 9001:2015 Certification',
                            txt: 'We maintain a quality management system certified under ISO 9001:2015 guidelines. This international standard specifies requirements for a quality management system applicable for internal use, certification, or contractual purposes. It focuses on the effectiveness of the quality management system in meeting customer requirements.'
                        },
                        c2: {
                            title: 'ISO 13485:2016 Certification',
                            txt: 'We maintain a quality management system certified under ISO 13485:2016 guidelines. This standard specifies the requirements for a quality management system where an organization needs to demonstrate its ability to provide medical devices and related services that consistently meet customer and regulatory requirements.'
                        },
                        c3: {
                            title: 'A.N.M.A.T. Certification',
                            txt: 'Famox S.A. holds the corresponding certifications accrediting it as a “Manufacturer of Medical Devices” and for compliance with “Good Manufacturing Practices” (GMP). GMP establishes the requirements applicable to the manufacturing of medical devices, covering design, procurement, manufacturing, packaging, labeling, storage, installation, and technical support to ensure products are safe and effective.'
                        }
                    },
                    contacto: {
                        title: 'Contact Us!',
                        form: {
                            title: 'Tell us what you need, and we will get in touch with you.',
                            lbl1: 'Name*',
                            lbl2: 'Company/Hospital*',
                            lbl3: 'Country',
                            lbl4: 'Email*',
                            lbl5: 'Subject*',
                            lbl6: 'Message*',
                            btn: 'Send'
                        },
                        info: {
                            t1: {
                                title: 'Phone',
                                sub1: '+54 9 11 6073-6020',
                                sub2: '+54 9 11 6967-4273'
                            },
                            t2: {
                                title: 'Sales',
                                sub1: 'ventas@famox.com.ar'
                            },
                            t3: {
                                title: 'Customer Service',
                                sub1: 'atencion.cliente@famox.com.ar'
                            },
                            t4: {
                                title: 'Administration',
                                sub1: 'info@famox.com.ar'
                            }
                        }
                    },
                    cart: {
                        title: 'Cart',
                        t1: 'Your cart is empty ...',
                        t2: 'Go to the E-commerce section to select the products of your interest and request a quotation.',
                        tabla: {
                            t1: 'Item',
                            t2: 'Details',
                            t3: 'Code',
                            t4: 'Quantity',
                            t5: 'Delete',
                            t6: 'Gas:',
                            t7: 'Connector:',
                            t8: 'Range:',
                            t9: 'Low Voltage',
                            t10: 'Medium Voltage',
                            t11: 'Lighting',
                            t12: 'Connections',
                            t13: 'Length',
                        },
                        form: {
                            title: 'Place your order',
                            lbl1: 'Name',
                            lbl2: 'Company / Hospital',
                            lbl3: 'Email',
                            btn1: 'Request Quotation',
                            btn2: 'Continue Shopping',
                            btn3: ''
                        }
                    },
                    misc: {
                        a: 'Download manual', // Detalle
                        b: 'Date:', // Obras
                        c: 'Installation', // Obras
                        d: 'Selected model' //Ecomm notif
                    },
                    checkout: {
                        title: 'Quotation Request Confirmed!',
                        txt: 'We will get back to you shortly. Please remember to check your spam folder if you do not find our email.'
                    },
                    pregfrec: {
                        title: 'Frequently Asked Questions',
                        q1: {
                            q: 'How does our ecommerce work?',
                            a1: 'Purchases of our products cannot be made directly through the website. Our ecommerce platform allows you to configure the products you need and generates a quotation request. Once the quotation is generated, we will continue the communication via email.',
                            a2: '1°: Browse our products: Explore our catalog and look for what best suits your needs. You can refine your search using product filters.',
                            a3: '2°: Add the products you need to the cart: Select the desired products and add them to your cart. You must choose the corresponding characteristics for each product in order to add it.*',
                            a4: '3°: Complete your request: Once all your products are added, proceed to checkout from the cart at the top of the page. Complete the form with your personal information.'
                        },
                        q2: {
                            q: 'Can I select the same products but with different features?',
                            a: 'Yes, you can. Each selected product has its own code (for Gas Therapy products) or different configuration options (for Supply Units). You may add product X to the cart and then return to configure the same item with other specifications.'
                        },
                        q3: {
                            q: 'Do you ship internationally?',
                            a: 'Yes, we ship internationally. Shipping costs and customs duties will be coordinated for each order.'
                        },
                        q4: {
                            q: 'What are your customer service hours?',
                            a: 'Our Customer Service hours are Monday to Friday from 8 AM to 5 PM.'
                        },
                        q5: {
                            q: 'How can I contact you?',
                            a: 'You can contact us by email at ventas@famox.com.ar or atencion.cliente@famox.com.ar, or via WhatsApp at +54 9 11 3427-6306.'
                        },
                        q6: {
                            q: 'Accepted payment methods?',
                            a: 'We accept payments via bank transfer or check.'
                        }
                        }
                    }
                },
                es: {
                    translation: {
                    title: 'Famox SA',
                    gases:{
                        a:'AIRE',
                        b:'CO2',
                        c:'N2',
                        d:'N2O',
                        e:'OXIGENO',
                        f:'OXIGENO/AIRE',
                        g:'VACIO',
                    },
                    carrusel: {
                        img1: {
                            title: 'Mezclador de Aire/Oxígeno',
                            sub: ''
                        },
                        img2: {
                            title: 'Unidades de Suministro',
                            sub: ''
                        },
                        img3: {
                            title: 'Frascos Dosificadores',
                            sub: ''
                        },
                        img4: {
                            title: 'Caudalímetros',
                            sub: ''
                        },
                        img5: {
                            title: 'Nuevas Llaves de Vacio',
                            sub: ''
                        },
                        img6: {
                            title: 'Llamadores de Enfermera',
                            sub: ''
                        },
                        img7: {
                            title: 'Regulador de baja con Caudalímetro',
                            sub: ''
                        },
                        img8: {
                            title: '',
                            sub: ''
                        },
                        img9: {
                            title: '',
                            sub: ''
                        },
                    },
                    menu: {
                        link1: 'Famox',
                        link2: 'Catálogo',
                        link3: 'Ecommerce',
                        link4: 'Nosotros',
                        link5: 'Productos',
                        link6: 'Certificaciones',
                        link7: 'Obras',
                        link8: 'Contacto',
                    },
                    home: {
                        categorias: {
                            a: 'Unidades de Suministro',
                            b: 'Gasoterapia',
                            c: 'Accesorios',
                            d: 'Equipos Digitales' 
                        },
                        descripcionCategorias: {
                            a: {
                                title: 'Unidades de Suministro',
                                descrip: 'Proyectamos, diseñamos y fabricamos Unidades de Suministro cuyo concepto principal es satisfacer las necesidades del profesional de la salud en cualquier tipo de servicio, mediante equipos tales como Paneles de Cabecera, Islas de Neonatología, Columnas de quirófano y Brazos suspendidos para Áreas Críticas.'
                            },
                            b: {
                                title: 'Gasoterapia',
                                descrip: 'Son equipos destinados al control y regulación de los gases medicinales en puntos de conexión. Reguladores de presión, reductores de presión, mezclador de gases, reguladores de caudal, etc.'
                            },
                            c: {
                                title: 'Calidad',
                                descrip: 'Aplicamos la mejora continua y capacitación a nuestro personal, para lograr a través de su participación, su compromiso con el Sistema de Gestión de Calidad.'
                            },
                            d: {
                                title: 'Instalaciones',
                                descrip: 'Diseñamos y ejecutamos tendidos para gases médicos bajo las normativas vigentes y pensando en su uso y aplicación,  consideramos esencial un diseño que alcance las necesidades de las instituciones de la salud antes las más severas y críticas condiciones de requerimiento.'
                            }
                        },
                        carruselMini: 'Conocenos',
                    },
                    footer: {
                        left:{
                            title: 'Famox SA',
                            sub1: '¿Quiénes somos?',
                            sub2: 'Preguntas frecuentes',
                            sub3: 'Nuestros productos',
                            sub4: 'Catálogo'
                        },
                        right:{
                            title: 'Contáctanos',
                            sub1: '11 6073-6020 // 11 6967-4273',
                            sub2: 'info@famox.com.ar',
                            sub3: 'atencion.cliente@famox.com.ar',
                        }
                    },
                    ecomm: {
                        title: 'Nuestro Ecommerce',
                        menu: {
                            val1: 'Buscar',
                            val2: 'Resetear Búsqueda'
                        },
                        notes: {
                            note1: 'Elige el modelo',
                            note2: 'Primero debes seleccionar el tipo de gas y su conexión y rango',
                            note3: 'Primero debes seleccionar el tipo de gas y su conexión',
                            note4: 'Primero debes seleccionar el tipo de gas,su conexión y el modelo',
                            note5: 'Selecciona el tipo de gas',
                            note6: 'Seleccionar características y longitud',
                            note7: 'Seleccionar conexiones',
                            note8: 'Selecciona el tipo de conector'
                        },
                        categorias: {
                            a: 'Conectores',
                            b: 'Modelos',
                            c: 'Gases',
                            d: 'Rangos',
                            e: 'Media Tensión',
                            f: 'Baja Tensión',
                            g: 'Iluminación',
                            h: 'Longitud de Panel',
                            i: 'Conexión'
                        },
                        steps:{
                            a:'Cantidad:',
                            b: 'Tu selección',
                            c: 'Comprar',
                            d: {
                                title: 'Elegir unidad de medida',
                                val1: 'mm',
                                val2: 'cm',
                                val3: 'mts'
                            },
                            e: 'Item seleccionado',
                            f: 'Comprar',
                            g: 'Longitud',
                            h: 'Conexiones',
                            l: 'Conector:',
                            j: 'Rango:',
                            m: 'Gas:',
                            n: 'Cantidad:',
                            o: 'Confirmar',
                            p: 'Modelo seleccionado',
                        },
                        options:{
                            low:{
                                a: 'LLAMADO DE ENFERMERA',
                                b: 'PARO CARDÍACO - GOLPE DE PUÑO',
                                c: 'PARO CARDÍACO DIGITAL',
                                d: 'PARO CARDÍACO DIGITAL+GOLPE DE PUÑO',
                                e: 'DATOS RJ45 CAT6',
                                f: 'TELEFONIA RJ11',
                            },
                            med:{
                                a:'DOBLE IRAM',
                                b:'SIMPLE IRAM',
                                c:'DOBLE IRAM ESTABILIZADO',
                                d:'SIMPLE IRAM ESTABILIZADO',
                                e:'DOBLE DIN',
                                f:'DOBLE IRAM-DIN',
                                g:'DOBLE DIN ESTABILIZADO',
                                h:'DOBLE IRAM-DIN ESTABILIZADO',
                                i:'SIMPLE DIN',
                                j:'SIMPLE DIN ESTABILIZADO',
                                k:'TERMOMAGNÉTICA',
                                l:'TERMO + DISYUNTOR',
                                m:'RESERVA 2M',
                            },
                            ilum:{
                                a:'LUZ PACIENTE LED 5W',
                                b:'LUZ PACIENTE LED 9W',
                                c:'LUZ AMBIENTE LED 18W',
                                d:'LUZ NOCTURNA O CORTESIA LED RGB',
                                e:'LUZ NOCTURNA Bi-Pin LED Bca 6W'
                            },
                        }
                    },
                    nosotros:{
                        title: 'Bienvenido a Famox',
                        txt1: 'Somos una empresa moderna, innovadora y que intenta todos los días acompañar en el desarrollo y crecimiento del ámbito hospitalario a todos los Centros de Atención, Sanatorios, Clínicas u Hospitales Privados y Públicos con el mayor de los compromisos ya sea desde la atención personalizada o en el análisis, diseño y ejecución de todos aquellos cambios y necesidades que a dichas instituciones le son planteadas. De forma creativa y con más de diez años en el mercado, nos hallamos abocados a ofrecer soluciones de innovación y excelencia para nuestros clientes. Conformada por un gran equipo de trabajo, creemos firmemente que nuestros productos y servicios deben adaptarse a sus necesidades, siendo especial para nuestra filosofía la atención personalizada.',
                        title2: 'Sobre nosotros',
                        txt2: 'Famox a pesar de ser una joven empresa, se ha posicionado en el mercado local y en Sud América como fabricante de Equipos de Gasoterapia y Unidades de Suministro, sus productos son diseñados y testeados bajo normas internacionales. Localmente fabrica y desarrolla sus productos bajo las disposiciones que establece A.N.M.A.T., organismo regulador y habilitante, obteniendo como resultado equipos confiables, de óptima calidad y altamente seguros en el uso previsto. Ofrecemos a nuestros clientes y al mercado en general nuestra estructura y know-how en proyectos, diseños y desarrollos para nuevos productos.',
                        title3: 'Nuestra misión',
                        txt3: 'Cada día y durante el transcurso de los años, Famox ha buscado y busca, la mejora continua de sus equipos con el claro objetivo de proveer a sus clientes, productos sobre los cuales los distintos organismos de Salud depositan su total confianza en el uso cotidiano, para que de esa manera la atención y cuidado a sus pacientes sea de un nivel de excelencia.',
                        title4: 'Política de Calidad',
                        txt4: 'El principal objetivo de Famox S.A. es la Fabricación y comercialización de reguladores de gases medicinales, de vacío y accesorios complementarios, productos médicos para uso en terapias respiratorias y unidades de suministros médicos, logrando la satisfacción de sus clientes, cumpliendo con sus requisitos, garantizando los niveles de calidad, seguridad y eficacia de los productos suministrados y el cumplimiento de los requisitos legales y reglamentarios aplicables. Es la vocación de todos los integrantes de la empresa aseguramos constantemente que nuestros productos dan la prestación para la cual han sido diseñados. Dicho diseño abarca aspectos funcionales y estéticos del producto. Logramos todo esto aplicando nuestra filosofía de la mejora continua y el mantenimiento de la efectividad de nuestro sistema de gestión. Actualmente tenemos el compromiso asumido de cumplir con las Buenas Prácticas de Fabricación de la A.N.M.A.T y alcanzar la excelencia y reconocimiento por nuestros productos médicos tanto dentro del país como del exterior, prestando a nuestros clientes un alto nivel de servicio y dedicación. Esto lo llevamos adelante con la participación de quienes conforman nuestra organización, brindándoles la formación y asistencia necesarias, como así también de nuestros proveedores, vitales para asegurar nuestro cumplimiento, y de todas las partes interesadas en la calidad de los procesos, sin perder de vista la rentabilidad necesaria que hace sustentable la empresa.'
                    },
                    productos: {
                        title: 'Nuestros Productos',
                        detalle: {
                            op1: 'Conectores',
                            op2: 'Gases Disponibles',
                            op3: 'Uso Previsto',
                            op4: 'Rango de uso',
                            op5: 'Considerado Producto Médico por ANMAT',
                            op6: "Módulos",
                            op7: "Rango",
                        }
                    },
                    certif: {
                        title: 'Certificaciones',
                        c1:{
                            title: 'Certificado ISO 9001:2015',
                            txt: 'Contamos con un sistema de gestión de calidad certificado bajo los línemientos de ISO 9001:2015. Esta norma internacional especifica los requisitos para un sistema de gestión de la calidad que puedan utilizarse para su aplicación interna por las organizaciones, para certificación o con fines contractuales. Se centra en la eficacia del sistema de gestión de la calidad para dar cumplimiento a los requisitos del cliente.'
                        },
                        c2: {
                            title: 'Certificado ISO 13485:2016',
                            txt: 'Contamos con un sistema de gestión de calidad certificado bajo los líneamientos de ISO 13485:2016. Esta norma internacional especifica los requisitos de un sistema de gestión de la calidad cuando una organización precisa demostrar su capacidad de proporcionar productos sanitarios y servicios relacionados que cumplen de forma coherente requisitos del cliente y requisitos reglamentarios aplicables a los productos sanitarios y a los servicios relacionados.'
                        },
                        c3: {
                            title: 'Certificado A.N.M.A.T.',
                            txt: 'Famox S.A. cuenta con sus correspondientes certificados que la acreditan como “Empresa fabricante de Productos Médicos” y de cumplimiento de “Buenas Prácticas de Fabricación” (BPF). Las BPF establecen los requisitos aplicables a la fabricación de productos médicos. Estos requisitos describen las buenas prácticas de fabricación para métodos y controles utilizados en el diseño, compra fabricación, embalado, rotulado, almacenamiento, instalación y asistencia técnica de todos los productos médicos. Los requisitos de esta norma están dirigidos a asegurar que los productos sean seguros y eficaces.'
                        }
                    },
                    contacto: {
                        title: '¡Contáctanos!',
                        form: {
                            title: 'Díganos lo que necesita y nos pondremos en contacto con usted.',
                            lbl1: 'Nombre*',
                            lbl2: 'Empresa/Hospital*',
                            lbl3: 'País',
                            lbl4: 'Correo Electrónico*',
                            lbl5: 'Asunto*',
                            lbl6: 'Mensaje*',
                            btn: 'Enviar'
                        },
                        info: {
                            t1: {
                                title: 'Teléfono',
                                sub1: '+54 9 11 6073-6020',
                                sub2: '+54 9 11 6967-4273'
                            },
                            t2: {
                                title: 'Ventas',
                                sub1: 'ventas@famox.com.ar'
                            },
                            t3: {
                                title: 'Atención al Cliente',
                                sub1: 'atencion.cliente@famox.com.ar'
                            },
                            t4: {
                                title: 'Administración',
                                sub1: 'info@famox.com.ar'
                            }
                        }
                    },
                    cart: {
                        title: 'Carrito',
                        t1: 'Tu carrito esta vacio ...',
                        t2: 'Dirígete al Ecommerce para poder seleccionar los productos de tu interés y poder pedir una cotización',
                        tabla: {
                            t1: 'Artículo',
                            t2: 'Detalles',
                            t3: 'Código',
                            t4: 'Cantidad',
                            t5: 'Borrar',
                            t6: 'Gas:',
                            t7: 'Conector:',
                            t8: 'Rango:',
                            t9: 'Baja Tensión',
                            t10: 'Media Tensión',
                            t11: 'Iluminación',
                            t12: 'Conexiones',
                            t13: 'Longitud',
                        },
                        form: {
                            title: 'Realiza tu Pedido',
                            lbl1: 'Nombre',
                            lbl2: 'Empresa / Hospital',
                            lbl3: 'Mail',
                            btn1: 'Pedir cotización',
                            btn2: 'Seguir comprando',
                            btn3: ''
                        }
                    },
                    misc: {
                        a: 'Descargar manual', // Detalle
                        b: 'Fecha:', // Obras
                        c: 'Instalación', // Obras
                        d: 'Modelo seleccionado' //Ecomm notif
                    },
                    checkout: {
                        title: '¡Pedido de Cotización confirmado!',
                        txt: 'Te estaremos respondiendo a la brevedad. Recuerda revisar tu casilla de spam si no encuentras nuestro email.'
                    },
                    pregfrec: {
                        title: 'Preguntas Frecuentes',
                        q1: {
                            q:'¿Como funciona nuestro ecommerce?',
                            a1: 'Las compras de nuestros productos no se pueden realizar de forma directa desde la página, nuestro ecommerce es el encargado de llevar a cabo la gestión de lo que el cliente necesita y poder generarle una cotización. Una vez generada esta cotización, la comunicación se traslada al correo electrónico',
                            a2: '1°:  Mirá nuestros productos: Navegá el catálogo y buscá lo que más te gusta, podes refinar tu búsqueda con nuestros filtros de productos.',
                            a3: '2°: Agregá al carrito lo que más te guste: Seleccioná tus productos deseados y agregalos al carrito. Deberás elegir las características correspondientes para cada uno para poder agregarlos*',
                            a4: '3°: Finaliza tu pedido: Una vez que hayas agregado tus productos avanzá al checkout ubicado en el carrito en la parte superior de la página. Completá el formulario con tus datos personales.'
                        },
                        q2: {
                            q: '¿Puedo seleccionar mismos productos pero con diferentes características?',
                            a: 'Sí se puede, cada producto seleccionado cuenta con un código (si es del área Gasoterapia) o con distintas posibilidades de armado (si es una Unidad de Suministro). Usted puede agregar al carrito el producto X y luego volver para armar el mismo producto pero con distintas cualidades'
                        },
                        q3: {
                            q: '¿Hacen envíos al exterior?',
                            a: 'Realizamos envíos al exterior, debemos coordinar los gastos de envío y de aranceles aduaneros para cada pedido.'
                        },
                        q4: {
                            q: '¿Cuál es el horario de atención al cliente?',
                            a: 'El horario de Atención al Cliente es de Lunes a Viernes de 8 a 17 hs.'
                        },
                        q5: {
                            q: '¿Cómo hago para contactarme?',
                            a: 'Nos puedes contactar a través del correo ventas@famox.com.ar, atencion.cliente@famox.com.ar o por whatsapp al +54 9 11 3427-6306 .'
                        },
                        q6: {
                            q: '¿Medios de pago?',
                            a: 'Nos manejamos con pagos con cheques o transferencia'
                        }

                    }
                    }
                },
                pt:{
                    translation: {
                        title: 'Famox SA',
                        gases:{
                            a:'AR',
                            b:'CO2',
                            c:'N2',
                            d:'N2O',
                            e:'OXIGÊNIO',
                            f:'OXIGÊNIO/AR',
                            g:'VÁCUO',
                        },
                        carrusel: {
                            img1: {
                                title: 'Misturador Ar/Oxigênio',
                                sub: ''
                            },
                            img2: {
                                title: 'Unidades de Suprimento Médico',
                                sub: ''
                            },
                            img3: {
                                title: 'Frascos de Dosagem',
                                sub: ''
                            },
                            img4: {
                                title: 'Fluxômetros',
                                sub: ''
                            },
                            img5: {
                                title: 'Novo Válvulas de Vácuo',
                                sub: ''
                            },
                            img6: {
                                title: 'Sistema de Chamada de Enfermagem',
                                sub: ''
                            },
                            img7: {
                                title: 'Regulador de Baixa Pressão com Fluxômetro',
                                sub: ''
                            },
                            img8: {
                                title: '',
                                sub: ''
                            },
                            img9: {
                                title: '',
                                sub: ''
                            },
                        },
                        menu: {
                            link1: 'Famox',
                            link2: 'Catálogo',
                            link3: 'E-commerce',
                            link4: 'Sobre nós',
                            link5: 'Produtos',
                            link6: 'Certificações',
                            link7: 'Obras',
                            link8: 'Contato',
                        },
                        home: {
                            categorias: {
                                a: 'Unidades de Suprimento Médico',
                                b: 'Gasoterapia',
                                c: 'Acessórios',
                                d: 'Equipamentos Digitais' 
                            },
                            descripcionCategorias: {
                                a: {
                                    title: 'Unidades de Suprimento Médico',
                                    descrip: 'Projetamos e fabricamos Unidades de Suprimento Médico cujo conceito principal é atender às necessidades dos profissionais da saúde em qualquer tipo de serviço, através de equipamentos como Painéis de Leito, Ilhas de Neonatologia, Colunas Cirúrgicas e Braços Suspensos para Áreas Críticas.'
                                },
                                b: {
                                    title: 'Gasoterapia',
                                    descrip: 'Equipamentos destinados ao controle e à regulação dos gases medicinais nos pontos de conexão. Inclui reguladores de pressão, redutores de pressão, misturadores de gases e reguladores de fluxo, entre outros.'
                                },
                                c: {
                                    title: 'Qualidade',
                                    descrip: 'Aplicamos a melhoria contínua e a capacitação constante de nossa equipe para garantir seu total comprometimento e participação no Sistema de Gestão da Qualidade.'
                                },
                                d: {
                                    title: 'Instalações',
                                    descrip: 'Projetamos e executamos instalações de gases medicinais conforme as normas vigentes. Nosso foco é oferecer soluções seguras e eficientes que atendam às necessidades das instituições de saúde, mesmo nas condições mais críticas.'
                                }
                            },
                            carruselMini: 'Conheça-nos',
                        },
                        footer: {
                            left:{
                                title: 'Famox SA',
                                sub1: 'Quem somos',
                                sub2: 'Perguntas frequentes',
                                sub3: 'Nossos produtos',
                                sub4: 'Catálogo'
                            },
                            right:{
                                title: 'Fale conosco',
                                sub1: '+54 11 6073-6020 // +54 11 6967-4273',
                                sub2: 'info@famox.com.ar',
                                sub3: 'atencion.cliente@famox.com.ar',
                            }
                        },
                        ecomm: {
                            title: 'Nosso E-commerce',
                            menu: {
                                val1: 'Buscar',
                                val2: 'Redefinir busca'
                            },
                            notes: {
                                note1: 'Escolha o modelo',
                                note2: 'Primeiro selecione o tipo de gás, a conexão e o intervalo.',
                                note3: 'Primeiro selecione o tipo de gás e a conexão.',
                                note4: 'Primeiro selecione o tipo de gás, a conexão e o modelo.',
                                note5: 'Selecione o tipo de gás',
                                note6: 'Selecione as características e o comprimento',
                                note7: 'Selecione as conexões',
                                note8: 'Selecione o tipo de conector'
                            },
                            categorias: {
                            a: 'Conectores',
                            b: 'Modelos',
                            c: 'Gases',
                            d: 'Fogões',
                            e: 'Média Tensão',
                            f: 'Baixa Tensão',
                            g: 'Iluminação',
                            h: 'Comprimento do Painel',
                            i: 'Conexão'
                        },
                            steps:{
                                a:'Quantidade:',
                                b: 'Sua seleção',
                                c: 'Comprar',
                                d: {
                                    title: 'Escolha a unidade de medida',
                                    val1: 'mm',
                                    val2: 'cm',
                                    val3: 'mts'
                                },
                                e: 'Item selecionado',
                                f: 'Comprar',
                                g: 'Comprimento',
                                h: 'Conexões',
                                l: 'Conector:',
                                j: 'Faixa:',
                                m: 'Gás:',
                                n: 'Quantidade:',
                                o: 'Confirmar',
                                p: 'Modelo selecionado',
                            }

                        },
                        nosotros:{
                            title: 'Bem-vindo à Famox',
                            txt1: 'Somos uma empresa moderna e inovadora, comprometida em apoiar o crescimento e o desenvolvimento do setor de saúde. Trabalhamos em conjunto com centros médicos, clínicas e hospitais — públicos e privados — oferecendo atendimento personalizado, além de experiência em análise, design e execução de soluções. Com mais de dez anos de mercado, dedicamo-nos a oferecer soluções de inovação e excelência para nossos clientes. Nossa equipe acredita firmemente que nossos produtos e serviços devem se adaptar às necessidades de cada cliente, valorizando o atendimento personalizado como parte essencial da nossa filosofia.',
                            title2: 'Sobre nós',
                            txt2: 'Apesar de ser uma empresa jovem, a Famox se posicionou no mercado local e na América do Sul como fabricante de Equipamentos de Gasoterapia e Unidades de Suprimento Médico. Nossos produtos são projetados e testados conforme normas internacionais. Produzimos localmente sob as diretrizes estabelecidas pela A.N.M.A.T., órgão regulador e habilitador, garantindo produtos confiáveis, de alta qualidade e seguros. Oferecemos ao mercado e a nossos clientes nossa estrutura e know-how em projetos, design e desenvolvimento de novos produtos.',
                            title3: 'Nossa missão',
                            txt3: 'Ao longo dos anos, a Famox tem buscado continuamente o aprimoramento de seus equipamentos, com o objetivo de fornecer produtos nos quais as instituições de saúde possam confiar plenamente, garantindo um nível de excelência no atendimento e cuidado aos pacientes.',
                            title4: 'Política de Qualidade',
                            txt4: 'O principal objetivo da Famox S.A. é a fabricação e comercialização de reguladores de gases medicinais, reguladores de vácuo e acessórios complementares — produtos médicos utilizados em terapias respiratórias e unidades de suprimento médico. Buscamos a satisfação de nossos clientes, atendendo seus requisitos e garantindo os níveis de qualidade, segurança e eficácia dos produtos fornecidos, bem como o cumprimento dos requisitos legais e regulamentares aplicáveis. Toda a nossa equipe assegura que cada produto cumpra sua função conforme o projeto, contemplando aspectos funcionais e estéticos. Alcançamos isso por meio da filosofia de melhoria contínua e da manutenção da eficácia do nosso sistema de gestão. Atualmente, temos o compromisso de cumprir as Boas Práticas de Fabricação (BPF) da A.N.M.A.T., alcançando excelência e reconhecimento por nossos produtos médicos tanto no país quanto no exterior, oferecendo alto nível de serviço e dedicação. Isso é possível graças à participação de nossa equipe, ao trabalho conjunto com nossos fornecedores e a todas as partes interessadas na qualidade dos processos, sem perder de vista a rentabilidade necessária para a sustentabilidade da empresa.'
                        },
                        productos: {
                            title: 'Nossos Produtos',
                            detalle: {
                                op1: 'Conectores',
                                op2: 'Gases Nossos Produtos',
                                op3: 'Uso Previsto',
                                op4: 'Faixa de Operação',
                                op5: 'Considerado Produto Médico pela ANMAT',
                                op6: 'Módulos',
                                op7: 'Faixa'
                            }
                        },
                        certif: {
                            title: 'Certificações',
                            c1:{
                                title: 'Certificação  ISO 9001:2015',
                                txt: 'Mantemos um sistema de gestão da qualidade certificado sob as diretrizes da norma ISO 9001:2015. Esta norma internacional define os requisitos de um sistema de gestão da qualidade aplicável para uso interno, certificação ou fins contratuais, com foco na eficácia do sistema em atender aos requisitos dos clientes.'
                            },
                            c2: {
                                title: 'Certificação  ISO 13485:2016',
                                txt: 'Mantemos um sistema de gestão da qualidade certificado sob as diretrizes da norma ISO 13485:2016. Esta norma estabelece os requisitos de um sistema de gestão da qualidade para organizações que necessitam demonstrar sua capacidade de fornecer dispositivos médicos e serviços correlatos que atendam consistentemente aos requisitos regulamentares e dos clientes.'
                            },
                            c3: {
                                title: 'Certificação  A.N.M.A.T.',
                                txt: 'A Famox S.A. possui as certificações que a acreditam como “Fabricante de Produtos Médicos” e comprovam o cumprimento das “Boas Práticas de Fabricação” (BPF). As BPF estabelecem os requisitos aplicáveis à fabricação de dispositivos médicos, abrangendo o design, aquisição, produção, embalagem, rotulagem, armazenamento, instalação e assistência técnica, assegurando que os produtos sejam seguros e eficazes.'
                            }
                        },
                        contacto: {
                            title: 'Entre em contato!',
                            form: {
                                title: 'Diga-nos o que você precisa e entraremos em contato.',
                                lbl1: 'Nome*',
                                lbl2: 'Empresa/Hospital*',
                                lbl3: 'País',
                                lbl4: 'E-Mail*',
                                lbl5: 'Assunto*',
                                lbl6: 'Mensagem*',
                                btn: 'Enviar'
                            },
                            info: {
                                t1: {
                                    title: 'Telefone',
                                    sub1: '+54 9 11 6073-6020',
                                    sub2: '+54 9 11 6967-4273'
                                },
                                t2: {
                                    title: 'Vendas',
                                    sub1: 'ventas@famox.com.ar'
                                },
                                t3: {
                                    title: 'Atendimento ao Cliente',
                                    sub1: 'atencion.cliente@famox.com.ar'
                                },
                                t4: {
                                    title: 'Administração',
                                    sub1: 'info@famox.com.ar'
                                }
                            }
                        },
                        cart: {
                            title: 'Carrinho',
                            t1: 'Seu carrinho está vazio...',
                            t2: 'Acesse o E-commerce para selecionar os produtos de seu interesse e solicitar um orçamento.',
                            tabla: {
                                t1: 'Item',
                                t2: 'Detalhes',
                                t3: 'Código',
                                t4: 'Quantidade',
                                t5: 'Excluir',        
                                t6: 'Gás:',
                                t7: 'Conector:',
                                t8: 'Faixa:',
                                t9: 'Baixa Tensão',
                                t10: 'Média Tensão',
                                t11: 'Iluminação',
                                t12: 'Conexões',
                                t13: 'Comprimento',
                            },
                            form: {
                                title: 'Faça seu pedido',
                                lbl1: 'Nome',
                                lbl2: 'Empresa / Hospital',
                                lbl3: 'E-Mail',
                                btn1: 'Solicitar orçamento',
                                btn2: 'Continuar comprando',
                                btn3: ''
                            }
                        },
                        misc: {
                            a: 'Baixar manual', // Detalle
                            b: 'Data:', // Obras
                            c: 'Instalação', // Obras
                            d: 'Modelo selecionado' //Ecomm notif
                        },
                        checkout: {
                            title: 'Solicitação de orçamento confirmada!',
                            txt: 'Responderemos o mais breve possível. Lembre-se de verificar sua pasta de spam caso não encontre nosso e-mail.'
                        },
                        pregfrec: {
                            title: 'Perguntas Frequentes',
                            q1: {
                                q: 'Como funciona o nosso ecommerce?',
                                a1: 'A compra dos nossos produtos não pode ser realizada diretamente pelo site. Nossa plataforma permite que você configure os produtos necessários e gere uma solicitação de cotação. Após gerar a cotação, a comunicação continua por e-mail.',
                                a2: '1°: Explore nossos produtos: Navegue pelo catálogo e encontre o que melhor atende às suas necessidades. Você pode refinar sua busca utilizando os filtros de produtos.',
                                a3: '2°: Adicione os produtos ao carrinho: Selecione os produtos desejados e adicione-os ao carrinho. Você deve escolher as características correspondentes de cada produto para adicioná-lo.*',
                                a4: '3°: Finalize sua solicitação: Depois de adicionar todos os produtos, avance para o checkout no carrinho localizado na parte superior da página. Preencha o formulário com seus dados pessoais.'
                            },
                            q2: {
                                q: 'Posso selecionar os mesmos produtos, mas com características diferentes?',
                                a: 'Sim. Cada produto possui seu próprio código (para produtos de Gasoterapia) ou diferentes opções de configuração (para Unidades de Suministro). Você pode adicionar o produto X ao carrinho e depois voltar para configurá-lo novamente com outras especificações.'
                            },
                            q3: {
                                q: 'Vocês realizam envios internacionais?',
                                a: 'Sim, realizamos envios internacionais. Os custos de envio e tarifas alfandegárias serão coordenados para cada pedido.'
                            },
                            q4: {
                                q: 'Qual é o horário de atendimento ao cliente?',
                                a: 'Nosso atendimento ao cliente funciona de segunda a sexta, das 8h às 17h.'
                            },
                            q5: {
                                q: 'Como posso entrar em contato?',
                                a: 'Você pode nos contatar pelo e-mail ventas@famox.com.ar ou atencion.cliente@famox.com.ar, ou via WhatsApp no número +54 9 11 3427-6306.'
                            },
                            q6: {
                                q: 'Formas de pagamento?',
                                a: 'Aceitamos pagamentos por transferência bancária ou cheque.'
                            }
                            }

                    }
                },
        }
    });

export default i18n;