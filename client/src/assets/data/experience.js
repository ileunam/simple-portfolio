import haulmerLogo from '@/assets/logos/haulmer-logo.png'
import hpiLogo from '@/assets/logos/hpi-logo.png'
import surfrutLogo from '@/assets/logos/surfrut-logo.png'
import tbkLogo from '@/assets/logos/tbk-logo.png'
export const experience = [
  {
    title: 'Haulmer',
    subtitle: 'Ingeniero de Software',
    year: '2023 - Presente',
    description: ['Mis primeros pasos en Haulmer fueron en la optimización y modularización del <strong>flujo de creación de nóminas de pago</strong>. Debido al éxito que tuvo esta refactorización, ' +
    'realicé la misma operación con otros procesos, como por ejemplo el de <strong>envío de comprobantes de pago al SII</strong> y el de <strong>cobro de créditos R2 Capital (TUU Crédito).</strong> ' +
    'Logré una reducción de más de la mitad del tiempo de ejecución original y una reducción importante en el uso de recursos de la base de datos transaccional de la compañia. ',

      'Diseñé e implementé el <strong>Sistema de Ajustes</strong>, encargado de realizar retenciones y devoluciones de dinero a los comercios desde el monto de sus nóminas. El sistema además se conecta con ' +
      'la plataforma WHMCS para obtener todas las cuotas pendientes de los clientes que realizan las compras de terminales POS y así cobrarlas de forma automática y de forma diaria. El trabajo de cobros y retenciones se ' +
      'estaba realizando desde una planilla de Google Sheets automatizada y el sistema de ajustes surgió como una solución más robusta y completa a esta forma de cobro.',

      'Aporté en la integración de Haulmer con el nuevo adquirente <strong>Kushki</strong> que generó un aumento considerable en las transacciones diarias de la compañía. Implementé cambios en los flujos post-transaccionales ' +
      'para los tipos de clientes <strong>PaaS Kushki</strong>.'
    ],
    dotColor: 'blue',
    dotLogo: haulmerLogo,
    size: 'small'
  },
  {
    title: 'Applying SpA - HPI International',
    subtitle: 'Full-Stack Web Developer',
    year: '2022 - 2023',
    description: ['Trabajé en el desarrollo de la plataforma <strong><a href="https://app.hrxtalent.com/" target="_blank">HRX Talent</a></strong> utilizando las prestaciones ' +
    'de Laravel, React, MySQL y Google Cloud Platform para su despliegue.',

      'Contribuí a la <strong>refactorización y optimización de microservicios</strong> implementados en Node.js encargados de la generación de reportes en formato PDF, para resumir los resultados ' +
      'obtenidos en los <strong>test DISC, Inteligencia Emocional y Competencias Laborales.</strong> ',

      'Me encargué del diseño y desarrollo del<strong> prototipo de un Chatbot</strong> orientado al reclutamiento de prospectos para las instituciones universitarias. Esta herramienta fue implementada ' +
      'con React y Node.js, utilizando <strong>Dialogflow</strong> para la recolección de información y la conexión con <strong>OpenAI GPT-3.5</strong> para la generación de texto.'
    ],
    dotColor: 'red',
    dotLogo: hpiLogo,
    size: 'small',
  },
  {
    title: 'Surfrut',
    subtitle: 'Práctica Desarrollador Web y Móvil',
    year: '2023 - Presente',
    description: ['Diseñé el ciclo de vida completo de un software, incluyendo el documento de especificación de software con ' +
    'historias de usuarios, diagramas de flujo y vistas de interfaz de usuario. Trabajé en conjunto con el cliente del software con reuniones de seguimiento semanales.',

      'Desarrollé una aplicación móvil offline-first para reportar anomalías dentro de los turnos de trabajo de la compañía. También\n' +
      'desarrollé una aplicación web para la gestión y validación de estos reportes.'],
    dotColor: 'green',
    dotLogo: surfrutLogo,
    size: 'small',

  },
  {
    title: 'Transbank',
    subtitle: 'Práctica Desarrollador Web Full-Stack',
    year: '2022',
    description: ['Junto mi área, el <strong>Laboratorio de Innovación</strong>, participé en el desarrollo de una aplicación web orientada a la venta de máquinas POS a los clientes de ' +
    'Transbank. Me encargué de la modificación de la estructura de la base de datos y de la implementación de mejoras al backend, el cual utilizaba una arquitectura de microservicios implementada ' +
    'en Spring Boot.'],
    dotColor: 'red',
    dotLogo: tbkLogo,
    size: 'small',
  }]
