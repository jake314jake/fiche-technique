// app.js

// Fonction pour récupérer les données du formulaire
function getFicheData() {
  const fiche = {};

  // Identification
  fiche.nom = document.getElementById("nom").value || "";
  fiche.prenom = document.getElementById("prenom").value || "";
  fiche.sexe = document.querySelector('input[name="sexe"]:checked')?.value || "";
  fiche.date_naissance = document.getElementById("date_naissance").value || "";

  // Examen clinique
  fiche.poids_kg = document.getElementById("poids_kg").value || "";
  fiche.taille_cm = document.getElementById("taille_cm").value || "";
  fiche.pc_cm = document.getElementById("pc_cm").value || "";
  fiche.glasgow = document.getElementById("glasgow").value || "";
  fiche.examen_neuro = document.getElementById("examen_neuro").value || "";

  // Imagerie
  fiche.indice_evans = document.getElementById("indice_evans").value || "";

  // Biologie
  fiche.glycemie = document.getElementById("glycemie").value || "";
  fiche.proteinorachie = document.getElementById("proteinorachie").value || "";
  fiche.glycorachie = document.getElementById("glycorachie").value || "";
  fiche.cytologie_lcr = document.getElementById("cytologie_lcr").value || "";
  fiche.culture_lcr = document.getElementById("culture_lcr").value || "";

  // Intervention & évolution
  fiche.date_intervention = document.getElementById("date_intervention").value || "";
  fiche.type_valve = document.getElementById("type_valve").value || "";
  fiche.date_derniere_consultation = document.getElementById("date_derniere_consultation").value || "";

  // Checkbox multiples
  fiche.antPediat = {
    prematurite: document.getElementById("prematurite").checked,
    hemorragie_iv: document.getElementById("hemorragie_iv").checked,
    spina_bifida: document.getElementById("spina_bifida").checked,
    meningite: document.getElementById("meningite").checked,
  };
  fiche.antAdultes = {
    tc: document.getElementById("tc").checked,
    avc: document.getElementById("avc").checked,
    tumeur: document.getElementById("tumeur").checked,
    chirurgie_anterieure: document.getElementById("chirurgie_anterieure").checked,
  };
  fiche.circonstances = {
    macrocranie: document.getElementById("macrocranie").checked,
    cephalees: document.getElementById("cephalees").checked,
    troubles_marche: document.getElementById("troubles_marche").checked,
    incontinence: document.getElementById("incontinence").checked,
    regard_soleil: document.getElementById("regard_soleil").checked,
    fontanelle_tendue: document.getElementById("fontanelle_tendue").checked,
    troubles_memoire: document.getElementById("troubles_memoire").checked,
  };
  fiche.imagerie = {
    scanner: document.getElementById("scanner").checked,
    irm: document.getElementById("irm").checked,
    echographie: document.getElementById("echographie").checked,
  };
  fiche.intervention = {
    dvp: document.getElementById("dvp").checked,
    dva: document.getElementById("dva").checked,
    vcs: document.getElementById("vcs").checked,
  };
  fiche.evolution = {
    favorable: document.getElementById("evo_favorable").checked,
    stable: document.getElementById("evo_stable").checked,
    defavorable: document.getElementById("evo_defavorable").checked,
  };

  return fiche;
}

// Fonction pour transformer en Markdown
function generateMarkdown(fiche) {
  function checkboxMark(checked) {
    return checked ? "[x]" : "[ ]";
  }

  return `# FICHE TECHNIQUE : HYDROCÉPHALIE

## IDENTIFICATION DU PATIENT
* Nom : ${fiche.nom}
* Prénom : ${fiche.prenom}
* Sexe : ${fiche.sexe}
* Date de naissance : ${fiche.date_naissance}

---

## ANTÉCÉDENTS

### Pédiatriques / Néonataux
* ${checkboxMark(fiche.antPediat.prematurite)} Prématurité
* ${checkboxMark(fiche.antPediat.hemorragie_iv)} Hémorragie intraventriculaire
* ${checkboxMark(fiche.antPediat.spina_bifida)} Spina bifida
* ${checkboxMark(fiche.antPediat.meningite)} Méningite

### Adultes
* ${checkboxMark(fiche.antAdultes.tc)} TC (Trauma Crânien)
* ${checkboxMark(fiche.antAdultes.avc)} AVC / Hémorragie méningée
* ${checkboxMark(fiche.antAdultes.tumeur)} Tumeur
* ${checkboxMark(fiche.antAdultes.chirurgie_anterieure)} Chirurgie antérieure

---

## CIRCONSTANCES DE DÉCOUVERTE
* ${checkboxMark(fiche.circonstances.macrocranie)} Macrocrânie (Nourrisson)
* ${checkboxMark(fiche.circonstances.cephalees)} Céphalées / Vomissements
* ${checkboxMark(fiche.circonstances.troubles_marche)} Troubles de la marche
* ${checkboxMark(fiche.circonstances.incontinence)} Incontinence
* ${checkboxMark(fiche.circonstances.regard_soleil)} Regard en coucher de soleil
* ${checkboxMark(fiche.circonstances.fontanelle_tendue)} Fontanelle tendue
* ${checkboxMark(fiche.circonstances.troubles_memoire)} Troubles cognitifs / Mémoire

---

## EXAMEN CLINIQUE
* Poids : ${fiche.poids_kg} kg
* Taille : ${fiche.taille_cm} cm
* Périmètre Crânien (PC) : ${fiche.pc_cm} cm
* Score de Glasgow : ${fiche.glasgow} / 15
* Examen Neurologique : ${fiche.examen_neuro}

---

## IMAGERIE
* ${checkboxMark(fiche.imagerie.scanner)} Scanner cérébral (TDM)
* ${checkboxMark(fiche.imagerie.irm)} IRM cérébrale
* ${checkboxMark(fiche.imagerie.echographie)} Échographie (ETF)
* Commentaires / Indice d'Evans : ${fiche.indice_evans}

---

## BIOLOGIE
* Glycémie : ${fiche.glycemie}
* LCR - Protéinorachie : ${fiche.proteinorachie} g/L
* LCR - Glycorachie : ${fiche.glycorachie} mmol/L
* LCR - Cytologie : ${fiche.cytologie_lcr}
* LCR - Culture : ${fiche.culture_lcr}

---

## PRISE EN CHARGE ET ÉVOLUTION
* Intervention : ${checkboxMark(fiche.intervention.dvp)} DVP  ${checkboxMark(fiche.intervention.dva)} DVA  ${checkboxMark(fiche.intervention.vcs)} VCS (Endoscopie)
* Date d'intervention : ${fiche.date_intervention}
* Type de valve : ${fiche.type_valve}
* Évolution : ${checkboxMark(fiche.evolution.favorable)} Favorable  ${checkboxMark(fiche.evolution.stable)} Stable  ${checkboxMark(fiche.evolution.defavorable)} Défavorable
* Date dernière consultation : ${fiche.date_derniere_consultation}
`;
}

// Fonction pour télécharger un fichier Markdown
function downloadMD(filename, content) {
  const blob = new Blob([content], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// Événement du bouton
document.getElementById("generateFiche").addEventListener("click", () => {
  const fiche = getFicheData();
  const mdContent = generateMarkdown(fiche);
  const filename = `fiche_${fiche.nom || "patient"}_${Date.now()}.md`;
  downloadMD(filename, mdContent);
});
