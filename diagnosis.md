# Diagnóstico de visualización de la copia

## Incidencia

La landing conservaba toda su estructura V28 y el documento podía desplazarse desde el hero hasta el footer. La visualización era incompleta porque los recursos alojados en el almacenamiento del proyecto de origen no conservaron permisos dentro de esta copia.

## Evidencia

Las referencias antiguas al wordmark, al póster del hero, al vídeo del hero y al favicon devolvían HTTP 403 desde la URL de esta copia. La altura del documento y las posiciones de todas las secciones eran correctas, tanto en el DOM como en capturas completas de escritorio y móvil.

## Corrección

Se recuperaron los cuatro recursos originales, se cargaron en el almacenamiento propio de esta copia y se actualizaron las referencias en `Home.tsx`, `Team.tsx` e `index.html`. Las nuevas rutas devuelven HTTP 200 y mantienen intacta la composición V28.

## Validación

La comprobación de TypeScript y la compilación de producción finalizan sin errores. Las capturas completas de `/` y `/team` confirman recorrido íntegro, recursos visibles y adaptación a 1440 × 900 y 390 × 844.

La validación en navegador confirma que ambos wordmarks cargan completos a 2108 × 260 píxeles, el póster carga a 1920 × 1080 y el vídeo alcanza `readyState 4`, reproduce en bucle, permanece silenciado y no presenta error de red o decodificación. La altura completa del documento es de 11 664 píxeles en la vista de comprobación.
