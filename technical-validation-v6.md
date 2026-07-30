# Validación técnica V6 — Sensing, Models y Automate

## Conclusión

La combinación de **datos históricos del cliente y datos en tiempo real** es técnicamente coherente en bioprocesos. Los digital twins se construyen precisamente conectando el proceso físico con una representación virtual alimentada por datos actuales, históricos, de desarrollo y de fabricación. Los modelos pueden ejecutarse en tiempo real o por lotes, simular variaciones y apoyar control adaptativo.[1]

## Formulaciones recomendadas

| Tema | Formulación pública recomendada | Motivo |
| --- | --- | --- |
| Frecuencia de datos | “Move from sparse daily samples to process data at operational cadence — minutes, not days.” | Las medidas off-line implican retraso y menor frecuencia; la monitorización in-line/on-line permite datos continuos o en tiempo real.[2][3] |
| Detección directa | “Direct analyte measurement — not inferred from a soft sensor.” | Es más preciso que afirmar “no usamos modelos” en sentido absoluto; cualquier sensor requiere calibración y procesamiento, pero el valor puede proceder de la detección directa del analito. |
| Agnostic hardware | “Ready-to-use and bioreactor-agnostic by design.” | Evita una garantía universal; la compatibilidad real depende de puertos, condiciones, conectividad, esterilización y validación. |
| Modelos | “Bring historical customer data, live process data and a curated state-of-the-art knowledge layer into one modeling workspace.” | Los digital twins e híbridos se benefician de datos históricos y live; los modelos híbridos son relevantes cuando los datasets son pequeños, heterogéneos o caros de generar.[1][4] |
| Agentic | “Prompt the system to orchestrate reports, compare runs and propose advanced control strategies.” | Los agentes pueden coordinar análisis, herramientas, interpretación y reporting; democratizan acceso, pero las salidas deben ser trazables y revisables.[5] |
| Physical AI | “After the models reason, Omnix executes approved actions across compatible equipment.” | En bioprocesos, el camino práctico cercano combina decisión de IA con supervisión humana, límites de control, validación y trazabilidad.[6] |

## Decisiones narrativas

La web eliminará **Raman** por completo. Sensing se centrará en sensores directos ready-to-use y en el salto de mediciones escasas a puntos de datos en minutos. Models mostrará tres fuentes: datos históricos del cliente, datos live y un repositorio curado del estado del arte. La interfaz agentic se presentará como una capa de orquestación por prompt para reportes, comparativas y estrategias de control; no como una orden sin control que acciona directamente el proceso.

Automate se describirá como **Physical AI**: una vez que los modelos razonan y una acción queda aprobada dentro de límites definidos, Omnix la ejecuta sobre equipamiento compatible mediante interfaces de control. La promesa se mantendrá orientada a robustez, yield, velocidad y escalabilidad, evitando garantías absolutas de “cualquier equipo” o “un solo intento”.

## Referencias

[1]: https://www.sartorius.com/en/digital-twins-offer-a-data-based-approach-to-more-effective-biopharma-process-control-507100 "Digital Twins Offer a Data-Based Approach to More Effective Biopharma Process Control"
[2]: https://www.hamiltoncompany.com/knowledge-base/article/bioprocess-monitoring-and-control "Bioprocess Monitoring and Control"
[3]: https://pmc.ncbi.nlm.nih.gov/articles/PMC12528235/ "Application of process analytical technology for real-time monitoring of synthetic co-culture bioprocesses"
[4]: https://www.mdpi.com/2311-5637/11/7/411 "Leveraging Historical Process Data for Recombinant P. pastoris Fermentation Hybrid Deep Modeling and Model Predictive Control Development"
[5]: https://pmc.ncbi.nlm.nih.gov/articles/PMC12476841/ "Streamline automated biomedical discoveries with agentic bioinformatics"
[6]: https://www.sciencedirect.com/science/article/pii/S0958166925001363 "Perspectives for artificial intelligence in bioprocess automation"
