import * as mySvg from "../svg.min.js";
import { Utils } from "../Utils.js";
import dataTemplate from "../demo-data-template.js";
window.onload = (event) => {
  document.title = "Publications";
  dataTemplate.renderBody("pub.html");
  document.getElementById("page").innerHTML = "Publications";

  const main = document.getElementsByTagName("main")[0];
  const article = document.createElement("article");
  main.appendChild(article);

  article.innerHTML = `

<h3>Articles</h3>

<ul>
<li>Fuel Cell Fundamentals</li>
<ul>
${Utils.createListItem("", "Literature Review - <i>Under Preparation</i>")}
${Utils.createListItem("PEMFC_Functional_Map_Part_1_Technique_v1.10.pdf", "Experimental Map: 1. Temperature Profiles")}
${Utils.createListItem("PEMFC_Map_P02_v3.pdf", "Experimental Map: 2. Temperature Profiles with Uncertainty")}
${Utils.createListItem("Spatially_resolved_oxygen_reaction_water.pdf", "Experimental Map: 3. Reactants, Water, and Temperature Profiles")}
</ul>

<li>Fuel Cell Strategies</li>
<ul>
${Utils.createListItem("PEM1kW_Model_Heat_Management_v2.pdf", "Operational Strategy: 1. Dynamic Model of Fuel Cell Energy System")}
${Utils.createListItem("Smart_H2Energy_v02_review_submitted.pdf", "Operational Strategy: 2. Smart Operational Strategies for Fuel Cell Energy System")}
${Utils.createListItem("ESCAPE25_PSE2015_Imperial_MKP_Paper_v2.pdf", "Operational Strategy: 3. Explicit Control of Mini Fuel Cell Vehicle")}
${Utils.createListItem("IEEEtran_VehicularTech_Fuel_Cell_Car_v1.pdf", "Operational Strategy: 4. Integrated Control Strategy for Fuel Cell Vehicle")}
</ul>

<li>Control Theory</li>
<ul>
${Utils.createListItem("Robust-Control-Polytopic.pdf", "Robust Control: 1. Polytopically Systems")}
${Utils.createListItem("Robust-Control-Hybrid.pdf", "Robust Control: 2. Hybrid  Systems")}
${Utils.createListItem("Robust-Control-Hybrid-ESCAPE.pdf", "Robust Control: 3. Hybrid Uncertain Systems")}
</ul>
</ul>

<h3>Technical Reports</h3>
<ul>
${Utils.createListItem("PEMFC-Lab-Manual.pdf", "Fuel Cell Lab Manual")}
</ul>

<h3>Theses</h3>
<ul>
${Utils.createListItem("PhD_Thesis_Amit_M_Manthanwar_e2_submitted.pdf", "Thesis Version 1")}
${Utils.createListItem("", "Thesis Version 2 - <i>Under Preparation</i>")}
</ul>

<h3>Figures</h3>
<ul>
${Utils.createListItem("fig-fc-h2-economy.pdf", "Hydrogen Economy")}
${Utils.createListItem("fig-fc-multiscale.pdf", "Fuel Cell Multi-Scale")}
${Utils.createListItem("fig-fc-h2-network.pdf", "Hydrogen Supply Chain")}

${Utils.createListItem("fig-fc-map-temp-array-50cm2.pdf", "Fuel Cell Map - Temperature Array")}
${Utils.createListItem("fig-fc-system-pfd.pdf", "Fuel Cell System PFD")}

${Utils.createListItem("fig-smart-automation-framework.pdf", "Smart Automation Framework")}

${Utils.createListItem("fig-fc-car-architecture.pdf", "Fuel Cell Car Architecture")}
${Utils.createListItem("fig-fc-car-kinematics.pdf", "Car Kinematics")}
${Utils.createListItem("fig-fc-car-body.pdf", "Car Body")}
${Utils.createListItem("fig-motor-dc.pdf", "DC Motor")}

</ul>








`;
};

// ${Utils.createListItem("", "")}
// ${Utils.createListItem("", "")}
// ${Utils.createListItem("", "")}

// ${Utils.createListItem("", " - <i>Under Preparation</i>")}
