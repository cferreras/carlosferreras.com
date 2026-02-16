---
title: 'Mi setup de desarrollo en 2026'
description: 'El setup que uso en 2026 para trabajar sin fricción: hardware, software, servicios e IA.'
pubDate: 2026-02-16
lang: es
author: 'Carlos Ferreras'
tags: ['productividad', 'setup', 'desarrollo', 'herramientas']
---

# Mi setup de desarrollo en 2026

No existe el setup perfecto. Lo que existe es un setup que te deja trabajar sin pelearte con tu entorno.

Después de años probando herramientas, esta es la configuración con la que estoy cómodo en 2026: rápida, simple y sin adornos.

## Hardware

### Desktop

Trabajo con un desktop montado con equilibrio entre rendimiento y presupuesto:

- **CPU**: AMD Ryzen 5
- **RAM**: 16GB DDR4
- **GPU**: Intel Arc con 12GB de VRAM

Sí, 16GB de RAM me sigue alcanzando para el tipo de desarrollo que hago.

### Monitores

Tengo **3+ monitores**. Puede sonar excesivo, pero en mi caso mejora mucho el foco.

Distribución típica:
- **Central**: código/editor
- **Izquierdo**: documentación y referencias
- **Derecho**: terminal, chat y música

La clave no es tener más pantallas, sino darles un propósito claro.

## Software

### Sistema Operativo: Windows 11

Después de probar Linux, me quedé en Windows. Hoy el ecosistema de desarrollo está lo bastante maduro como para trabajar muy cómodo.

No uso WSL. Trabajo nativo con PowerShell.

### Editor: Zed

Probablemente la decisión más polémica de mi setup.

Zed es rápido, estable y se mantiene fuera de mi camino. ¿Por qué Zed y no VS Code?

- Se abre en menos de un segundo
- Zero lag al escribir
- IA integrada sin ser intrusiva
- Sin plugins que ralenticen todo

VS Code sigue siendo excelente, pero la respuesta de Zed me resulta difícil de dejar.

### Terminal: Windows Terminal + PowerShell

Mi base es Windows Terminal + PowerShell:

- **Tema**: oscuro minimal
- **Transparencia sutil**: para mantener contexto visual
- **Perfil pulido**: aliases útiles y entorno limpio

PowerShell no es bash, pero con los aliases correctos y un perfil bien configurado, se siente natural.

### Navegadores: Zen y Helium

Uso ambos navegadores según el tipo de tarea.

- **Zen**: sesiones separadas y navegación más enfocada
- **Helium**: apoyo ligero para tareas concretas

Las DevTools del navegador me mantienen una experiencia consistente al desarrollar.

## Servicios

### Git Hosting

Uso ambos, con una separación simple:

- **GitHub** para repos públicos
- **GitLab** para repos privados

Me funciona bien para mantener visibilidad en lo público y privacidad sin coste en lo privado.

### Deploy

Mi regla actual:

- **Vercel** para proyectos pequeños o proyectos sin dominio personalizado
- **VPS en Oracle Cloud (free tier)** para proyectos más serios o con más control

En la VPS trabajo con **Docker + Dokploy** para desplegar y gestionar servicios.

Vercel me da velocidad de salida. La VPS me da flexibilidad total cuando la necesito.

### Dominios

Registro dominios en **Cloudflare Registrar**.

Motivo principal: venden a precio coste, sin markup.

### Correo y red

Para correo uso **ProtonMail**.

Para red y privacidad uso **AdGuard DNS** y **AdGuard VPN**.

## Herramientas CLI

### Git

Lo básico que no puede faltar. Mi configuración:

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```

Aliases simples que ahorran segundos todos los días.

### CLIs de IA

Uso **Codex** y otros CLIs de IA como apoyo, no como piloto automático.

Para mí, su valor está en:

- Generador de boilerplate
- Explicador de errores crípticos
- Documentador de funciones
- Rubber duck debugging más inteligente

La IA propone; tú decides.

## IA

### Modelos favoritos

Estos son los modelos que más uso ahora mismo:

- **gpt-codex-5.3**: mi favorito para coding
- **Sonnet 4.6**: lo prefiero para diseño, aunque es caro
- **glm-5**: alternativa económica cuando no necesito el mejor modelo

Los modelos cambian muchísimo en muy poco tiempo, así que cuando estés leyendo este post seguramente ya esté usando otros.

## Productividad

### 1Password

Sigue siendo mi herramienta central para seguridad personal y trabajo:

- Credenciales de todos los servicios
- API keys y tokens
- Notas seguras
- Documentos importantes

Con la integración en navegador y CLI, casi nunca tengo que pensar en contraseñas.

## Filosofía

### Tema oscuro minimal

Todo sigue la misma estética:

- Fondo oscuro pero no negro puro (#0a0a0a)
- Contraste suficiente sin fatigar la vista
- Sin distracciones visuales
- Consistencia entre aplicaciones

Minimalismo no es tener menos por moda. Es tener solo lo que suma.

### Menos es más

Mi setup evoluciona quitando, no añadiendo:

- Si no uso un plugin en dos semanas, lo elimino
- Si una app no aporta valor diario, la quito
- Si una herramienta me distrae más de lo que ayuda, fuera

## Lo que no uso

Para contexto, cosas que probé y descarté:

- **Obsidian/Notion**: 1Password cubre mis necesidades de notas
- **Tiling window managers**: Windows 11 snap es suficiente
- **Múltiples editores**: Zed para todo, sin excepciones

## Conclusión

Un setup no es una lista de herramientas. Es una forma de trabajar.

El mío se basa en cuatro ideas:

1. **Velocidad**: Cada milisegundo cuenta
2. **Simplicidad**: Menos herramientas, menos problemas
3. **Consistencia**: Misma experiencia en todas las apps
4. **Foco**: Eliminar distracciones, no añadirlas

Si tu setup es distinto, perfecto. Lo importante es que te ayude a producir mejor, no que se vea bien en una captura.
