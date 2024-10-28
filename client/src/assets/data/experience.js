import haulmerLogo from '@/assets/logos/haulmer-logo.png'
import hpiLogo from '@/assets/logos/hpi-logo.png'
import surfrutLogo from '@/assets/logos/surfrut-logo.png'
import tbkLogo from '@/assets/logos/tbk-logo.png'
export const experience = [
  {
    title: 'Haulmer',
    subtitle: 'Ingeniero de Software',
    year: '2023 - Presente',
    description: ['Mis primeros pasos en Haulmer fueron en la optimización y modularización del <span  class="text-secondary">flujo de creación de nóminas</span>. Debido al éxito que tuvo esta refactorización, ' +
    'realicé la misma operación con otros procesos como el de <span class="text-secondary">envío de comprobantes de pago al SII</span> y el de <span class="text-secondary">cobro de TUU Crédito.</span> ' +
    'Logré una reducción de más de la mitad del tiempo de ejecución original y una reducción importante en el uso de recursos de la base de datos transaccional de la compañia. ',

      'Diseñé e implementé el <span class="text-secondary">Sistema de Ajustes</span>, encargado de realizar retenciones y devoluciones de dinero a los comercios desde el monto de sus nóminas. El sistema se conecta con ' +
      'la <span class="text-secondary">plataforma WHMCS</span> para hacer los cobros automáticos de las cuotas pendientes de los clientes.',

      'Aporté en la integración de Haulmer con el nuevo adquirente <span class="text-secondary">Kushki</span> que generó un aumento considerable en las transacciones diarias de la compañía. Implementé cambios en los flujos post-transaccionales ' +
      'para los tipos de clientes <span class="text-secondary">PaaS Kushki</span>.'
    ],
    dotColor: 'blue',
    dotLogo: haulmerLogo,
    size: 'small'
  },
  {
    title: 'Applying SpA - HPI International',
    subtitle: 'Full-Stack Web Developer',
    year: '2022 - 2023',
    description: ['Trabajé en el desarrollo de la plataforma <span class="text-secondary"><a href="https://app.hrxtalent.com/" target="_blank">HRX Talent</a></span> orientada a la creación y evaluación de test psicológicos. ',

      'Contribuí a la <span class="text-secondary">refactorización y optimización de microservicios</span> implementados en Node.js encargados de la <span class="text-secondary">generación de reportes en formato PDF</span>, para resumir los resultados ' +
      'obtenidos en los <span class="text-secondary">test DISC, Inteligencia Emocional y Competencias Laborales.</span> ',

      'Me encargué del diseño y desarrollo del <span class="text-secondary">prototipo de un Chatbot</span> orientado al reclutamiento de prospectos para las instituciones universitarias. Esta herramienta fue implementada ' +
      'utilizando <span class="text-secondary">tecnologías de procesamiento de lenguaje natural:</span> <span>Dialogflow</span> para la recolección de información y la conexión con <span>OpenAI GPT-3.5</span> para la generación de texto.'
    ],
    dotColor: 'red',
    dotLogo: hpiLogo,
    size: 'small',
  },
  {
    title: 'Surfrut',
    subtitle: 'Práctica Desarrollador Web y Móvil',
    year: '2023 (2 meses)',
    description: ['Diseñé el ciclo de vida completo de un software, incluyendo el documento de especificación de software con ' +
    'historias de usuarios, diagramas de flujo y vistas de interfaz de usuario. Trabajé en conjunto con el cliente del software con reuniones de seguimiento semanales.',

      'Desarrollé una aplicación móvil <span class="text-secondary">Offline-First</span> llamada <span class="text-secondary">Tarjetas de Anomalías</span> para reportar fallos de seguridad dentro de los turnos de trabajo de la compañía. También\n' +
      'desarrollé una aplicación web para la gestión y validación de estos reportes.'],
    dotColor: 'green',
    dotLogo: surfrutLogo,
    size: 'small',

  },
  {
    title: 'Transbank',
    subtitle: 'Práctica Desarrollador Web Full-Stack',
    year: '2022 (2 meses)',
    description: ['Junto mi área, el <span class="text-secondary">Laboratorio de Innovación</span>, participé en el desarrollo de una aplicación web orientada a la venta de máquinas POS a los clientes de ' +
    'Transbank. Me encargué de la modificación de la estructura de la base de datos y de la implementación de mejoras al backend, el cual utilizaba una arquitectura de microservicios implementada ' +
    'en Spring Boot.'],
    dotColor: 'red',
    dotLogo: tbkLogo,
    size: 'small',
  }]
