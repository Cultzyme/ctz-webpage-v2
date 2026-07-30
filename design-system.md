# Sistema de diseño — Cultzyme Stealth

## Recursos visuales

| Recurso | Uso principal | URL persistente |
| --- | --- | --- |
| Hero loop | Pieza biomolecular que invade la placa hero | `/manus-storage/cultzyme-hero-loop_1ef588a0.png` |
| System geometry | Declaración central y arquitectura modular | `/manus-storage/cultzyme-system-geometry_ff636f6d.png` |
| Closed-loop core | Visual científico de la sección “One loop” | `/manus-storage/cultzyme-closed-loop-core_b4f0f1a8.png` |
| Brand mark | Favicon y símbolo compacto | `/manus-storage/cultzyme-logo-mark_1e94780d.png` |
| Wordmark | Cabecera y pie de página | `/manus-storage/cultzyme-wordmark-clean_4d5b29a1.png` |

## Tokens cromáticos

| Token | Valor | Función |
| --- | --- | --- |
| `--mineral` | `oklch(0.988 0.005 160)` | Base cálida casi blanca |
| `--paper` | `oklch(1 0 0)` | Secciones editoriales |
| `--mist-mint` | `oklch(0.965 0.035 155)` | Campo científico superior |
| `--mist-cyan` | `oklch(0.955 0.035 215)` | Campo científico inferior |
| `--graphite` | `oklch(0.19 0.014 210)` | Texto y trazos principales |
| `--line` | `oklch(0.42 0.015 210 / 0.48)` | Bordes finos |
| `--signal` | `oklch(0.88 0.19 145)` | Verde propio de actividad |
| `--electric-blue` | `oklch(0.7 0.16 235)` | Datos/sensado |
| `--reason-violet` | `oklch(0.68 0.14 300)` | Modelado/razonamiento |

## Tipografía

La familia principal será **Manrope** en pesos 300, 400 y 500. La familia auxiliar será **IBM Plex Mono** en pesos 400 y 500. El wordmark se mostrará siempre como imagen, respetando la geometría original.

| Rol | Escala fluida | Peso | Interlineado |
| --- | --- | --- | --- |
| Hero | `clamp(3.4rem, 7vw, 7.6rem)` | 300 | 0.88 |
| Display | `clamp(2.7rem, 5.5vw, 6.2rem)` | 300 | 0.91 |
| Section heading | `clamp(2rem, 3.4vw, 4rem)` | 300 | 0.98 |
| Card heading | `clamp(1.7rem, 2.3vw, 2.8rem)` | 350 | 1.03 |
| Body lead | `clamp(1.15rem, 1.5vw, 1.45rem)` | 400 | 1.46 |
| Micro label | `0.69rem` | 500 | 1.2 |

## Espaciado y retícula

La anchura de contenido será `min(100% - 32px, 1440px)` en escritorio, con un máximo editorial más estrecho de 1240 px para placas centrales. La base de espaciado será 8 px, con saltos principales de 24, 40, 64, 96, 144 y 192 px. En móvil, el margen será 16 px y las pausas principales se reducirán a 64–96 px.

El hero empleará dos columnas en escritorio y una única columna en móvil. Las tres tarjetas de sistema se mantendrán unidas por bordes compartidos en escritorio y se apilarán sin hueco en móvil. La sección “One loop” usará una división 5/7 y se apilará con texto primero en pantallas estrechas.

## Geometría

Los bordes serán de 1 px. El radio de placas principales será 22–28 px y el de controles 7–10 px. No se utilizarán sombras de tarjeta. La profundidad procederá de transparencias, gradientes atmosféricos y recursos 3D.

## Movimiento

Se usarán transiciones de 140–220 ms para controles y 600–900 ms para apariciones de sección. Solo se animarán `opacity` y `transform`. El hero tendrá una deriva vertical menor a 8 px y el bucle conceptual activará sus nodos de forma secuencial. Toda animación no esencial quedará deshabilitada con `prefers-reduced-motion`.

## Accesibilidad

Los controles tendrán foco visible de 2 px, navegación completa por teclado y áreas táctiles mínimas de 44 px. El texto mantendrá contraste alto sobre fondos claros. Los recursos visuales decorativos usarán `alt=""`; las ilustraciones que explican el sistema tendrán descripciones breves y útiles.
