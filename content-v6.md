# Cultzyme V6 — Product Truth / Live Draw / Contact

## Principio de producto

> **More process truth. Better models. Physical action.**

Cultzyme convierte un bioproceso con muestras escasas y decisiones tardías en un sistema que adquiere datos a cadencia operativa, razona con contexto y ejecuta acciones trazables. La promesa de resultado permanece: **Better quality. Faster.**

## Hero

**Categoría:** SELF-DRIVING BIOPROCESSING

**Arquitectura:** DIRECT SENSING → AGENTIC MODELS → PHYSICAL AI

**Body:**

> More data points. Better decisions. Automated action. Cultzyme connects ready-to-use direct-analyte sensors, agentic modeling and equipment-level execution from lab to plant.

## Tesis

**Headline:**

> From days to minutes.  
> From trial-and-error to control.

**Body:**

> High-frequency process data keeps the digital representation current. Models reason across what the customer already knows, what the process is doing now and what the field has learned. Physical AI carries approved decisions back to the equipment.

## 01 / SENSE — Xcale

**Label:** READY-TO-USE / DIRECT ANALYTE SENSING

**Headline:**

> More process truth.  
> More often.

**Body:**

> Xcale’s ready-to-use sensors are bioreactor-agnostic by design. They directly measure target analytes, increasing access from sparse daily samples to process data at an operational cadence measured in minutes — not days. The analyte is measured directly, not inferred by a model.

**Visual states:** `DIRECT ANALYTE`, `MINUTE-RANGE DATA`, `READY TO USE`, `BIOREACTOR-AGNOSTIC`.

## 02 / MODEL — Ereky

**Label:** CUSTOMER HISTORY + LIVE DATA + CURATED KNOWLEDGE

**Headline:**

> Ask the process.  
> Model what comes next.

**Body:**

> Ereky brings customer history, live process data and a curated state-of-the-art knowledge layer into one modeling workspace. From a prompt, agentic workflows orchestrate reports, compare runs, evaluate scale-up and propose advanced control strategies — with traceable inputs and outputs.

**Visual states:** `CUSTOMER HISTORY`, `LIVE PROCESS`, `STATE OF THE ART`, `PROMPT → ORCHESTRATE`, `REPORT / COMPARE / CONTROL`.

## 03 / AUTOMATE — Omnix

**Label:** PHYSICAL AI / EQUIPMENT-AGNOSTIC BY DESIGN

**Headline:**

> Reason. Approve.  
> Execute.

**Body:**

> After the models reason, Omnix translates approved actions into Physical AI across compatible equipment and existing control interfaces — within defined boundaries, with every action traceable.

**Visual states:** `MODEL REASONING`, `ACTION APPROVED`, `EQUIPMENT INTERFACE`, `EXECUTED / TRACEABLE`.

## Loop statement

**Headline:**

> More data. Better models.  
> Stronger runs.

| Signal | Meaning |
| --- | --- |
| FREQUENCY | Minutes, not days. |
| CONTEXT | Customer history + live process + curated knowledge. |
| ACTION | Reasoning translated into approved equipment action. |

## Scale

**Headline:**

> One control layer.  
> Every scale.

**Body:**

> Cultzyme carries process knowledge from development to manufacturing, reducing physical trial-and-error and working toward the most robust, high-yield process in the shortest practical time — ready to scale.

## Contact

**Label:** START WITH YOUR PROCESS

**Headline:**

> Show us what  
> you want to control.

**Body:**

> Tell us where data arrives too late, where scale-up creates uncertainty or where an approved action still depends on manual intervention. We’ll map a first SENSE–MODEL–AUTOMATE loop.

**Fields:** Name, work email, company, current challenge.  
**Action:** PREPARE EMAIL  
**Microcopy:** Opens a pre-filled email to Cultzyme. No data is stored on this website.

## Interaction and layout decisions

The fixed header retains the only visible wordmark in the opening viewport; the duplicate hero wordmark is removed. The header CTA and mobile navigation scroll to `#contact`.

The MODEL scene receives an SVG cell/digital-state drawing. Its organic contour, acquisition slices and data links are drawn sequentially using `stroke-dashoffset`, then fade into a low-opacity fill before the cycle restarts. With reduced motion, the complete visual is shown immediately.

The contact section replaces the conventional closing CTA. It uses a two-column composition: form on the left and a lightweight CSS robot on the right. The robot wears a black/titanium Cultzyme uniform with the original segmented wordmark, follows pointer movement inside its panel, turns toward focused fields and enters a transmitting state when the email draft is prepared.

All scene visuals use contained geometry and internal safe areas. Decorative layers may extend, but core diagrams, labels and copy must remain fully visible at desktop, tablet and mobile breakpoints. The hero image uses `object-fit: contain` and a bounded paneo so its biological and digital halves remain present throughout the movement.
