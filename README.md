# A Sign in Space — Decoding a First-Contact Message

An interactive, build-less web exhibit that reconstructs — step by step, with no key and
only a clock — the decode of a simulated extraterrestrial message. Every page is a
self-contained HTML instrument; every headline number is **re-derived live from the raw
transmitted bytes** (`binaire.bin`) in your browser, not hard-coded.

> **The story in one line:** a 65 536-bit transmission is not a bitmap but the seed of a
> reversible cellular automaton; run it exactly 6625 steps and the scrambled field condenses
> into five amino-acid constitution graphs plus six points — a molecular *kit* and its
> assembly topology — recovered by a receiver who only had to find the right generation.

*Etienne Lacoche · Researcher · etienne.lacoche@pm.me · https://www.asignin.space*

---

## Table of contents
1. [Scientific premise](#1-scientific-premise)
2. [Quick start](#2-quick-start)
3. [The pages (what each one does)](#3-the-pages)
4. [Shared engines & data assets](#4-shared-engines--data-assets)
5. [The verified science (ground truth)](#5-the-verified-science)
6. [Live re-derivation & provenance](#6-live-re-derivation--provenance)
7. [Design system](#7-design-system)
8. [Publishing (GitHub Pages)](#8-publishing)
9. [Repository layout](#9-repository-layout)

---

## 1. Scientific premise

"A Sign in Space" (Daniela de Paulis, SETI Institute artist-in-residence with ESA/INAF/GBO,
2023): on 24 May 2023 the ExoMars Trace Gas Orbiter transmitted a simulated ET message toward
Earth. This exhibit is a **blind-decoder** account — what a receiver with no key, only a
clock, can and cannot recover. The narrative arc, told across the pages:

1. **Framing is self-signalling.** 65 536 = 2¹⁶ has no semiprime factorisation → "not a direct
   bitmap" (unlike Arecibo's 1679 = 23 × 73). A 10-byte header is a *worked example of the
   rule* — four successive 4×4 Margolus states; the footer encodes the iteration count in
   run-lengths (5 · 5 · 5 · 53 = 6625).
2. **The blind clock.** A compression / minimum-description-length proxy has a global minimum
   at **generation 6625** — where the scrambled field is most structured.
3. **The image resolves.** 625 active pixels condense into five compact clusters + six points;
   a connected-component census gives a clean size alphabet **{1, 3, 6, 7, 8}**.
4. **Pixel → atom, forced by valence.** Blob sizes {6, 7, 8} → {C, N, O}; only one assignment
   satisfies the drawn bond degrees (C reaches degree 4, N degree 3, O degree 2).
5. **Five monomers, forced by the graph.** Abu, Nva, Nle (the +CH₂ methylene ladder), plus
   mAsp (branched, 2 × COOH) and Dab (2 × NH₂).
6. **A kit, not a chain.** Peptide bonds are condensations (−1 O, −2 H each). The decode keeps
   **12 O and 52 H intact** across five disjoint molecules → the free kit, the zero-water
   maximum-composition fixed point.
7. **Six points = assembly topology.** Isolated pixels sit near pairwise midpoints, tracing an
   undirected path Abu–Nva–mAsp–Dab–Nle.
8. **The Ozma problem.** A 2D constitution fixes the plane but not absolute chirality:
   6 stereocenters → 2⁶ = 64 stereoisomers, and a reflection-invariant graph has no channel to
   carry the handedness bits.
9. **Robustness & limits.** Noise curves, a decodability phase transition, the information ladder.

---

## 2. Quick start

No build step, no dependencies to install. Two ways to run:

**Locally**
```bash
# from the repository root
python3 -m http.server 8787
# then open http://localhost:8787/index.html
```
A local server is required (not `file://`) because pages read `binaire.bin` and
`apid_viz_data.json`, and browsers block `fetch`/XHR under the `file://` scheme.

**On the web** — the site is a static bundle; see [§8 Publishing](#8-publishing) for GitHub
Pages. Start at `index.html`; every tool opens from its "Explore every step in 3D" cards
(each opens in a **new tab**).

Browser: any modern Chromium/Firefox/Safari. Three.js r128 is loaded from a CDN. Pages honour
`prefers-reduced-motion`.

---

## 3. The pages

Ten standalone instruments. `index.html` is the hub; the rest are launched from it.

### `index.html` — the narrative hub
Scroll-driven story of the whole decode over a fixed 3D molecular stage (starfield + nebula),
with inline figures at each step and a live **Verified** panel.
- **3D stage:** the five decoded monomers rendered from real MMFF94 geometry — ball-and-stick
  with CPK colours, van-der-Waals-proportional radii, **all 52 hydrogens shown**, and **double
  bonds drawn as double rods** (the 6 carbonyls).
- **Inline figures:** blind-clock curve, census histogram, zero-water staircase, noise curves.
- **Verified panel:** six cards recomputed in your browser (conservation + SHA-256 round-trip,
  8-connected census, header rule, footer count) plus two Monte-Carlo results (blind-clock null,
  closed-loop 5/5 pixel→SMILES). See [§6](#6-live-re-derivation--provenance).
- **Launch cards** open each tool in a new tab.

### `asis-kit-3d.html` — the 5-monomer kit in 3D
A ten-step interactive walkthrough of the kit: census → element assignment → the five monomers
→ assembly animation → chirality (wedges/rings) → why a kit and not a peptide.
- **Controls:** ‹ Prev / Next › steps, Settings, **▶ Assemble** animation, **↔ View the
  enantiomer**, drag-orbit / wheel-zoom, ← → to step.
- **Exports:** PNG (high-DPI), **SDF/MOL** (3D coordinates + bonds), JSON — all signed with
  embedded provenance.

### `asis-assembly-lab.html` — the assembly laboratory
Atom-exact census across assembly states: **Kit (5 free monomers)**, **Linear pentapeptide**,
**Cyclic pentapeptide**, and partial fragments — each with its C/N/O/H/heavy counts, so you can
watch condensation move the composition off the kit.
- **Controls:** Kit / Linear / Cyclic toggles, Clear, an ostensive sandbox.
- **Exports:** PNG, **MOL/SDF**, **STL** (3D-printable mesh).

### `asis-designer.html` — the message design studio
Inverse anti-cryptography: **draw a target**, choose a rule/depth, and get a real transmittable
`.bin` that is self-signalling and **provably blindly decodable** (blind-clock minimum lands at
your chosen depth; cold reconstruction verified).
- **Controls:** drawing canvas, grid size (32–768), dithering (Bayer4/Bayer8/Floyd–Steinberg/
  Atkinson/Otsu), rule picker, **Encode & verify ▸**, condensation-timeline replay.
- **Exports:** `.bin` (transmittable), PNG, JSON (with provenance), animated **GIF**, **WebM**
  video, **ZIP** of frame `.bin`s. Hands off to a real-time viewer.

### `asis-analysis.html` — clock · cone · noise · proofs
Tabbed analysis dashboard.
- **Clock:** compressed-size curve over 20 000 generations with the minimum at 6625.
- **Cone:** the space-time cone of CA slices condensing to the amber t = 6625 floor.
- **Noise:** robustness curves (components / size-alphabet / heavy-atom mass vs bit-flip rate).
- **Proofs:** six live/Monte-Carlo verification cards (same set as the index).

### `asis-frontiers.html` — the information ladder
Static rigor-grade plots: the **bit budget** (positional channel capacity vs content recovered
vs chirality bits needed), the **decodability phase transition**, a **persistent-homology**
panel, and energetics.
- **Export:** PNG (all panels).

### `asis-zero-water.html` — the zero-water figure
The publication figure: the kit as the maximum-composition fixed point, every assembly ≥ 1
water away, drawn as a staircase.
- **Exports:** PNG and **SVG** (vector, with embedded provenance comment).

### `asis-apid.html` — decoding every APID
A data-visualisation of the full ESA/TGO telemetry session — ~13 494 packets across 26 APIDs
(application process IDs). Every claim is recomputed and adversarially re-verified against the
raw packet log.
- **Views:** packet timeline, memory-dump choreography (addresses climb 0 → 8212 =
  `binaire.bin`), telecommand acks, an interactive attitude/quaternion reconstruction (drag to
  orbit, sun-lit panels, boresight trail), and the memory map.
- **Exports:** `.bin`, CSV.

### `margolus-3d-binaire-6625.html` — the real space-time volume
A three.js point-cloud of the **real** `binaire.bin` evolving as a 2D + t volume, the 625
conserved particles condensing into the image at t = 6625.
- **Controls (FR):** Lecture/Pause, Un pas (single step), t = 0 reset, → t = 6625 jump,
  Réglages; orbit / zoom / scrub.

### `margolus-2d-t-extrusion-3d.html` — the automaton sandbox
A block-automaton explorer (selectable rule / grid / seed / sampling) shown as a 2D + t
extrusion point cloud. The original engine behind the decode. *(Not linked from the index hub,
but fully functional.)*
- **Controls (FR):** Pause, Un pas, Réinitialiser, Réglages.

---

## 4. Shared engines & data assets

Reused across pages — do not reinvent.

| File | Exposes | Purpose |
|---|---|---|
| `asis-sota.js` | `ASISSota.{enhance, environment, polish, composer, starfield, nebula}` | three.js r128 post-processing (bloom/FXAA), matte materials, starfield + nebula backdrop. **Colour-true grade:** tone-mapping off, no sRGB re-encode, bloom a whisper. |
| `asis-fx.js` | `ASISFx.{overlay, aurora, bloom}` | DOM aurora backdrop, vignette, SVG-noise grain, optional scanline; a 2D-canvas additive-bloom compositor. |
| `asis-refs.js` | `window.ASIS_REFS` — `monomers`, `refs`, `groups`, `abioticLabel`, `refLink()`, `monomerLine()`, `sectionHTML()`, `chemblURL()` | Single source of truth for chemistry (ChEMBL, EMBL-EBI) and literature (PubMed/DOI) citations. |
| `asis-proofs.js` | `window.ASISProofs` — `stepM()`, `census()`, `headerProof()`, `footerProof()`, `derive()` | Embeds `binaire.bin` as base64 + the exact CA stepper; recomputes the decode live in-browser. |

**Data assets**
- `binaire.bin` — 8212 bytes. The 8192 central bytes are the real 256×256 message (MSB-first);
  the 10-byte header + 10-byte footer are the self-signalling frame. **The ground truth.**
- `apid_viz_data.json` — the decoded TGO telemetry session for `asis-apid.html`.
- `image_decodee_t6625.png` — the decoded bit-plane image at generation 6625.
- `asis-references.json` — machine-readable citation export: 5 monomers, 19 references,
  6 groups, 3 provenance entries (generated from `asis-refs.js`).

---

## 5. The verified science

Every number below was independently re-derived from `binaire.bin` this project and is
recomputed live in-browser (see [§6](#6-live-re-derivation--provenance)).

**The cellular automaton**
- **Rule:** reversible Margolus block automaton, single-rotation clockwise; block offset flips
  each step (`off = generation & 1`); a 2×2 block rotates iff its active-pixel count is exactly 1.
- **Grid:** 256 × 256, toroidal. **Target generation:** 6625.
- **Conservation:** 625 active pixels, conserved at every generation.
- **Reversibility:** forward 6625 then backward 6625 returns the seed **bit-for-bit**
  (SHA-256 round-trip verified).

**The header & footer (self-signalling frame)**
- Header = `ff ff 06 90 28 41 44 88 44 88`: `ff ff` fiducial + four 16-bit words that are four
  successive 4×4 Margolus states — the message teaching its own rule.
- Footer = `f8 3e 00 00 00 00 00 00 0f ff`: run-lengths 5 · 5 · 5 · 53 = **6625**, the iteration
  count.

**The census at generation 6625** (8-connected components)
- **{1: 58, 3: 95, 6: 24, 7: 6, 8: 12}** = 195 components, 625 pixels; size alphabet {1,3,6,7,8}.
- 42 heavy atoms: size-6 → C (24), size-7 → N (6), size-8 → O (12) ⇒ aggregate **C₂₄N₆O₁₂**.
- 58 singletons = **52 hydrogens** + **6 assembly points**; the 95 size-3 components are the
  drawn bond segments.
- "Heavy mass 282" = the heavy-blob **pixel** count (24·6 + 6·7 + 12·8), not a molecular weight.

**The five monomers** (ChEMBL identities, MMFF94 geometries)

| Code | Name | Formula | Stereocenters | Abiotic pedigree |
|---|---|---|---|---|
| Abu | 2-aminobutyric acid | C₄H₉NO₂ | 1 | strong (meteoritic + spark) |
| Nva | norvaline | C₅H₁₁NO₂ | 1 | strong (meteoritic + spark) |
| Nle | norleucine | C₆H₁₃NO₂ | 1 | strong (meteoritic + spark) |
| mAsp | 3-methylaspartic acid | C₅H₉NO₄ | 2 | weak (glutamate-mutase metabolite) |
| Dab | 2,4-diaminobutyric acid | C₄H₁₀N₂O₂ | 1 | moderate (non-proteinogenic) |

Abu → Nva → Nle is the +CH₂ methylene ladder. **6 stereocenters total → 2⁶ = 64 stereoisomers
(32 enantiomeric pairs).**

**Closed-loop pixel → structure validation.** Reconstructing each monomer's bond graph from the
pixel field (37 heavy–heavy edges + 6 carbonyl second-strokes + 52 heteroatom-H bonds = 95
size-3 segments) yields graphs that are element-labelled **graph-isomorphic to the MMFF94
reference for 5/5 monomers**, and RDKit canonical SMILES match the reference **5/5**.

**The key claims, with their honest strength**
- **Kit vs chain** is settled by the census (12 O / 52 H intact vs 8 O / 44 H for a linear
  pentapeptide). The kit is the zero-water maximum-composition fixed point.
- **Assembly topology** Abu–Nva–mAsp–Dab–Nle is the best-of-60 Hamiltonian path (residual 40.3
  px vs 67.8 for the runner-up; six points near pairwise midpoints, p ≈ 0.0014). Best-*supported*,
  not proven certain.
- **Identity** is fixed by the *drawn bond graph*, not the census: the census alone is a coarse
  invariant — ≈ 50 784 five-monomer sets share C₂₄N₆O₁₂ / 52 H (~15.6 bits of ambiguity).
- **The Ozma limit is representational, not bandwidth.** The positional channel holds ~5087
  bits; a 2D constitution encodes ~21.5; chirality needs 6 bits but **0 are encodable** because a
  2D constitution graph is reflection-invariant (mirroring the field leaves the census identical).
- **The blind clock minimum at 6625 is real.** A gzip complexity dip ~19 % below baseline; across
  60 random 625-pixel seeds the deepest null dip is far shallower (Monte-Carlo P < 0.017).

---

## 6. Live re-derivation & provenance

The claims above are not asserted from a data file — they are **recomputed in your browser** by
`asis-proofs.js`, which embeds the raw bytes and the exact stepper. The **Verified** section on
`index.html` and the **Proofs** tab on `asis-analysis.html` show six cards:

- **LIVE** (recomputed on page load): conservation + SHA-256 round-trip; 8-connected census;
  header-rule check (four 4×4 states); footer run-length product = 6625.
- **MC** (saved Monte-Carlo results, method + counts stated): blind-clock null (P < 0.017);
  closed-loop pixel → SMILES validation (5/5).

Exports across the site embed provenance (author, ISO timestamp, source) into SDF/JSON/SVG so a
downloaded artifact carries its own attribution.

---

## 7. Design system

- **Palette:** `--bg #060913` · amber `#ffc857` · cyan `#52b6e8` · rose `#ff5db0` · violet
  `#c79bff` · green `#7bd88f`.
- **Fonts:** Michroma (display), IBM Plex Sans (body), IBM Plex Mono (data).
- **CPK atom colours:** C `#4a4f5c`, N `#4f74ff`, O `#ff4d4d`, H `#e6ecf7`.
- **Visual grade — fidelity first:** tone-mapping off, no sRGB re-encode, bloom gated to genuine
  highlights only, matte materials, perceptual colormaps with colorbars for continuous fields.
  More information per pixel, not more glow.
  
---

## 8. Repository layout

```
index.html                        Narrative hub + 3D molecular stage + Verified panel
asis-kit-3d.html                  10-step 3D kit walkthrough (PNG/SDF/JSON export)
asis-assembly-lab.html            Kit ⇌ peptide atom-exact census (PNG/MOL/STL)
asis-designer.html                Message design studio (.bin/PNG/JSON/GIF/WebM/ZIP)
asis-analysis.html                Clock · cone · noise · proofs (tabbed)
asis-frontiers.html               Information ladder plots (PNG)
asis-zero-water.html              Zero-water fixed-point figure (PNG/SVG)
asis-apid.html                    TGO telemetry: every APID decoded (.bin/CSV)
margolus-3d-binaire-6625.html     Real bit-plane space-time point cloud
margolus-2d-t-extrusion-3d.html   Block-automaton sandbox (2D+t extrusion)

asis-sota.js                      three.js post-processing + starfield/nebula engine
asis-fx.js                        DOM aurora / vignette / grain / 2D bloom
asis-refs.js                      Chemistry + literature citations (ChEMBL/PubMed)
asis-proofs.js                    Embedded bytes + exact CA stepper (live re-derivation)
asis-references.json             Machine-readable citation export

binaire.bin                       The transmitted message (8212 bytes) — ground truth
apid_viz_data.json               Decoded TGO telemetry session
image_decodee_t6625.png          The decoded image at generation 6625

```

---

*The reconstruction of the pixel pattern is exact and machine-verified (a SHA-256 round-trip).
Its reading as chemistry is inferred, and its resolution is bounded — the exhibit is careful
throughout to separate what is proven from what is best-supported.*
