# A Sign in Space — decode exhibit

A build-less, standalone-HTML exhibit that walks through a blind decode of a simulated
first-contact message: a reversible Margolus block cellular automaton whose seed
(`binaire.bin`) condenses, at generation 6625, into five amino-acid constitution graphs
plus six assembly-instruction points.

Everything is re-derived live from `binaire.bin` in the browser — CA round-trip,
component census, header/footer self-signalling, and the pixel → molecule reconstruction.

## Viewing

Open `index.html` in any modern browser, or visit the published GitHub Pages site.
No build step, no server, no dependencies beyond a CDN copy of three.js.

## Pages

- `index.html` — narrative hub + 3D molecular stage
- `asis-analysis.html` — space-time cone, blind clock, noise curves, live proofs
- `asis-kit-3d.html` — the five-monomer kit, assembly, chirality
- `asis-assembly-lab.html` — kit ⇌ peptide census, Ozma × assembly
- `asis-apid.html` — decode of the ESA/TGO telemetry session
- `asis-designer.html` — inverse anti-cryptography studio
- `asis-frontiers.html` — information ladder
- `asis-zero-water.html` — the zero-water fixed-point figure
- `margolus-3d-binaire-6625.html` — the real space-time volume (binaire.bin → image at t=6625)
- `margolus-2d-t-extrusion-3d.html` — block-automaton sandbox

## Data

- `binaire.bin` — the 8 192-byte message (ground truth)
- `apid_viz_data.json` — TGO telemetry decode
- `image_decodee_t6625.png` — the resolved bit-plane

Citations render from `asis-refs.js` (ChEMBL + PubMed, DOI links).
