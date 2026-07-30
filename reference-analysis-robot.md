# Referencia del robot interactivo

La URL compartida abre el catálogo de componentes de 21st.dev y no carga de forma estable la vista previa incrustada en el primer render. El patrón solicitado se interpreta como un **personaje 3D reactivo que acompaña al formulario**, no como un elemento decorativo separado.

Para Cultzyme, la adaptación debe cumplir estas reglas: el robot ocupa un panel lateral del contacto; viste un uniforme técnico negro/azul con el wordmark segmentado; su cabeza y ojos siguen suavemente el puntero o el foco del formulario; y cambia de estado cuando el usuario escribe o envía. No se copiarán el modelo, la geometría ni el código de la referencia.

El formulario debe mantener la estética Orbital Bioprocess Control, usar campos accesibles y abrir un correo precompletado a Cultzyme en un proyecto estático. El robot funcionará con HTML/CSS/React y transformaciones ligeras, sin cargar un motor 3D pesado.

La ficha directa confirma que la referencia original utiliza una escena de Spline con el robot “Whobee”. Para evitar una dependencia pesada y una copia visual, Cultzyme utilizará un **mascota robótica propia construida con capas CSS**: cabeza tipo casco, visor azul, torso con uniforme técnico, insignia segmentada y articulaciones sencillas. La mirada seguirá el puntero dentro del panel; al enfocar un campo, el robot se orientará hacia ese campo; al preparar el mensaje, mostrará un estado de transmisión.
