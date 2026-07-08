/* ============================================================================
   ASIS · references — single source of truth for the five decoded monomers.
   Chemical identity from ChEMBL (EMBL-EBI); literature from PubMed (pulled
   2026-07-08). Every page includes this file and renders from ASIS_REFS, so
   the citations live in exactly one place.

   Scientific honesty note baked into `abiotic`:
     strong   — genuinely meteoritic AND spark-discharge (Abu, Nva, Nle)
     moderate — non-proteinogenic, but best known biologically (Dab)
     weak     — not a classic abiotic product; a metabolite (mAsp)
   ========================================================================== */
(function (global) {
  'use strict';

  var REFS = {
    // ---- meteoritic (Murchison / Murray) ----
    kvenvolden1970:  { cite: 'Kvenvolden et al. 1970, Nature 228:923',                     doi: '10.1038/228923a0',                 pmid: '5482102'  },
    kvenvolden1971:  { cite: 'Kvenvolden, Lawless & Ponnamperuma 1971, PNAS 68:486',        doi: '10.1073/pnas.68.2.486',            pmid: '16591908' },
    pizzarello2000:  { cite: 'Pizzarello & Cronin 2000, Geochim. Cosmochim. Acta 64:329',   doi: '10.1016/s0016-7037(99)00280-x',    pmid: '11543420' },
    engel1997:       { cite: 'Engel & Macko 1997, Nature 389:265',                          doi: '10.1038/38460',                    pmid: '9305838'  },
    pizzarello1991:  { cite: 'Pizzarello et al. 1991, Geochim. Cosmochim. Acta 55:905',     doi: '10.1016/0016-7037(91)90350-e',     pmid: '11537202' },
    koga2017:        { cite: 'Koga & Naraoka 2017, Sci. Rep. 7:636',                        doi: '10.1038/s41598-017-00693-9',       pmid: '28377577' },
    elsila2016:      { cite: 'Elsila et al. 2016, ACS Cent. Sci. 2:370 (review)',           doi: '10.1021/acscentsci.6b00074',       pmid: '27413780' },
    // ---- spark-discharge (Miller–Urey) ----
    schlesinger1983: { cite: 'Schlesinger & Miller 1983, J. Mol. Evol. 19:376',             doi: '10.1007/BF02101642',               pmid: '6417344'  },
    miller1986:      { cite: 'Miller 1986, Chem. Scr. 26B:5 (review)',                      doi: null,                               pmid: '11542054' },
    parker2014:      { cite: 'Parker et al. 2014, JoVE (83):e51039',                        doi: '10.3791/51039',                    pmid: '24473135' },
    // ---- the +CH2 ladder (Abu -> Nva -> Nle) ----
    soini2008:       { cite: 'Soini et al. 2008, Microb. Cell Fact. 7:30',                  doi: '10.1186/1475-2859-7-30',           pmid: '18940002' },
    biermann2013:    { cite: 'Biermann et al. 2013, Microb. Cell Fact. 12:116',             doi: '10.1186/1475-2859-12-116',         pmid: '24261588' },
    apostol1997:     { cite: 'Apostol et al. 1997, J. Biol. Chem. 272:28980',               doi: '10.1074/jbc.272.46.28980',         pmid: '9360970'  },
    // ---- Dab · 2,4-diaminobutyric acid ----
    manolidi2019:    { cite: 'Manolidi et al. 2019, J. Hazard. Mater. 365:346',             doi: '10.1016/j.jhazmat.2018.10.084',    pmid: '30448548' },
    emmons2022:      { cite: 'Emmons et al. 2022, J. Chromatogr. A 1685:463636',            doi: '10.1016/j.chroma.2022.463636',     pmid: '36401913' },
    zhang2020:       { cite: 'Zhang et al. 2020, Bioorg. Med. Chem. 28:115780',             doi: '10.1016/j.bmc.2020.115780',        pmid: '33007560' },
    // ---- mAsp · 3-methylaspartate (metabolic, NOT classic abiotic) ----
    wetmore2001:     { cite: 'Wetmore et al. 2001, J. Am. Chem. Soc. 123:7963',             doi: '10.1021/ja004246f',                pmid: '11506551' },
    madhavapeddi2001:{ cite: 'Madhavapeddi & Marsh 2001, Chem. Biol. 8:1143',               doi: '10.1016/s1074-5521(01)00081-3',    pmid: '11755393' },
    // ---- review ----
    frenkelpinter2020:{ cite: 'Frenkel-Pinter et al. 2020, Chem. Rev. 120:4707 (review)',   doi: '10.1021/acs.chemrev.9b00664',      pmid: '32101414' }
  };

  var MONOMERS = {
    Abu:  { name: '2-aminobutyric acid',      formula: 'C4H9NO2',   mw: 103.12,
            chembl: { constitution: 'CHEMBL55242',  L: 'CHEMBL1230782', D: 'CHEMBL553426' },
            props: { alogp: -0.19, psa: 63.3, hbd: 2, hba: 2, rotb: 2, qed: 0.51 },
            abiotic: 'strong',
            status: 'Meteoritic (Murchison) + spark-discharge · C4 rung of the +CH₂ ladder',
            refs: ['kvenvolden1971', 'pizzarello2000', 'schlesinger1983'] },
    Nva:  { name: 'norvaline',                formula: 'C5H11NO2',  mw: 117.15,
            chembl: { constitution: 'CHEMBL55612',  L: 'CHEMBL55612',   D: 'CHEMBL1916081' },
            props: { alogp: 0.20, psa: 63.3, hbd: 2, hba: 2, rotb: 3, qed: 0.55 },
            abiotic: 'strong',
            status: 'Meteoritic (Murchison, tentative→confirmed) + spark-discharge · C5 rung',
            refs: ['kvenvolden1971', 'pizzarello2000', 'soini2008', 'apostol1997'] },
    Nle:  { name: 'norleucine',               formula: 'C6H13NO2',  mw: 131.18,
            chembl: { constitution: 'CHEMBL292439', L: 'CHEMBL292439', D: null },
            props: { alogp: 0.59, psa: 63.3, hbd: 2, hba: 2, rotb: 4, qed: 0.59 },
            abiotic: 'strong',
            status: 'α-methyl-norleucine in Murchison; branched-chain byproduct · C6 rung',
            refs: ['pizzarello2000', 'soini2008', 'biermann2013'] },
    mAsp: { name: '3-methylaspartic acid',    formula: 'C5H9NO4',   mw: 147.13,
            chembl: { constitution: 'CHEMBL76739',  L: 'CHEMBL76739',   D: 'CHEMBL77388' },
            props: { alogp: -0.88, psa: 100.6, hbd: 3, hba: 3, rotb: 3, qed: 0.48 },
            abiotic: 'weak',
            status: 'Not a classic Murchison/Miller product — the (2S,3S) glutamate-mutase metabolite',
            refs: ['wetmore2001', 'madhavapeddi2001'] },
    Dab:  { name: '2,4-diaminobutyric acid',  formula: 'C4H10N2O2', mw: 118.14,
            chembl: { constitution: 'CHEMBL307931', L: 'CHEMBL321357', D: 'CHEMBL102493' },
            props: { alogp: -1.25, psa: 89.3, hbd: 3, hba: 3, rotb: 3, qed: 0.43 },
            abiotic: 'moderate',
            status: 'Non-proteinogenic, but best known biologically (cyanobacterial, a BMAA isomer)',
            refs: ['manolidi2019', 'zhang2020'] }
  };

  var GROUPS = [
    { title: 'Extraterrestrial / meteoritic (Murchison, Murray)', ids: ['kvenvolden1970', 'kvenvolden1971', 'pizzarello2000', 'engel1997', 'pizzarello1991', 'koga2017', 'elsila2016'] },
    { title: 'Spark-discharge synthesis (Miller–Urey)',           ids: ['schlesinger1983', 'miller1986', 'parker2014'] },
    { title: 'The +CH₂ ladder — Abu → Nva → Nle',                 ids: ['soini2008', 'biermann2013', 'apostol1997'] },
    { title: 'Dab · 2,4-diaminobutyric acid (non-proteinogenic)', ids: ['manolidi2019', 'emmons2022', 'zhang2020'] },
    { title: 'mAsp · 3-methylaspartate (metabolic, not abiotic)', ids: ['wetmore2001', 'madhavapeddi2001'] },
    { title: 'Reviews',                                           ids: ['elsila2016', 'frenkelpinter2020'] }
  ];

  var ABIOTIC_LABEL = {
    strong:   { txt: 'abiotic ✓ meteoritic + spark-discharge', col: '#7bd88f' },
    moderate: { txt: 'non-proteinogenic · biological origin',  col: '#ffc857' },
    weak:     { txt: 'metabolite · not classic abiotic',       col: '#ff9db0' }
  };

  function doiURL(doi)   { return 'https://doi.org/' + doi; }
  function pmidURL(pmid) { return 'https://pubmed.ncbi.nlm.nih.gov/' + pmid + '/'; }
  function chemblURL(id) { return 'https://www.ebi.ac.uk/chembl/compound_report_card/' + id + '/'; }

  // one clickable citation "Author Year [DOI]"
  function refLink(id) {
    var r = REFS[id]; if (!r) return '';
    var target = r.doi ? doiURL(r.doi) : pmidURL(r.pmid);
    return '<a href="' + target + '" target="_blank" rel="noopener" style="color:#52b6e8;text-decoration:none">' +
           r.cite + '</a>';
  }

  // compact provenance line for a single monomer (ChEMBL + 2 refs), for cards
  function monomerLine(code) {
    var m = MONOMERS[code]; if (!m) return '';
    var lab = ABIOTIC_LABEL[m.abiotic];
    var chem = '<a href="' + chemblURL(m.chembl.constitution) + '" target="_blank" rel="noopener" ' +
               'style="color:#52b6e8;text-decoration:none">' + m.chembl.constitution + '</a>';
    var cites = m.refs.slice(0, 2).map(refLink).join(' · ');
    return '<div style="font-size:10.5px;line-height:1.5;margin-top:6px">' +
             '<span style="color:' + lab.col + '">● ' + lab.txt + '</span><br>' +
             '<span style="color:#8fa1c7">ChEMBL</span> ' + chem + '<br>' +
             '<span style="color:#8fa1c7">' + cites + '</span></div>';
  }

  // full grouped references block (HTML string)
  function sectionHTML(opts) {
    opts = opts || {};
    var out = '';
    if (opts.heading !== false)
      out += '<div style="font-family:\'Michroma\',sans-serif;font-size:12px;letter-spacing:.06em;color:#e6ecf7;margin:0 0 6px">REFERENCES</div>' +
             '<div style="font-size:11px;color:#8fa1c7;margin-bottom:10px">Chemical identity — ChEMBL (EMBL-EBI). Literature — PubMed. ' +
             'The five monomers split into a solidly-abiotic core and two that are non-proteinogenic on other grounds:</div>';
    GROUPS.forEach(function (g) {
      out += '<div style="font-family:\'IBM Plex Mono\',monospace;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:#52b6e8;margin:10px 0 4px">' + g.title + '</div>';
      out += '<ul style="margin:0 0 0 2px;padding:0;list-style:none">';
      g.ids.forEach(function (id) {
        out += '<li style="font-size:11.5px;color:#8fa1c7;line-height:1.6;padding-left:12px;text-indent:-12px">▸ ' + refLink(id) + '</li>';
      });
      out += '</ul>';
    });
    return out;
  }

  global.ASIS_REFS = {
    provenance: { chemistry: 'ChEMBL v34 (EMBL-EBI)', literature: 'PubMed', pulled: '2026-07-08' },
    refs: REFS, monomers: MONOMERS, groups: GROUPS, abioticLabel: ABIOTIC_LABEL,
    doiURL: doiURL, pmidURL: pmidURL, chemblURL: chemblURL,
    refLink: refLink, monomerLine: monomerLine, sectionHTML: sectionHTML
  };
})(typeof window !== 'undefined' ? window : this);
