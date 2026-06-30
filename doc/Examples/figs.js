/*
// =============================================================================
// File Name     : figs.js
// Date Created  : 2026-06-30 09:05 UTC +02:00
// description   : Academic and Scientific Figures
// -----------------------------------------------------------------------------
// Author        : Amit Manohar Manthanwar
// Mailer        : manthanwar@hotmail.com
// WebURL        : https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright     : (c) 2026 Amit Manohar Manthanwar
// License       : LICENSE.md
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 30-Jun-2026   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================
*/

import * as mySvg from "./svg.min.js";
import dataTemplate from "./demo-data-template.js";
import { Utils } from "./Utils.js";

window.onload = (event) => {
  document.title = "Figures";
  dataTemplate.renderBody("figs.html");
  document.getElementById("page").innerHTML = "Artwork for Publications";

  const main = document.getElementsByTagName("main")[0];
  const article = document.createElement("article");
  main.appendChild(article);

  article.innerHTML = `

<h3 id="figs">Academic and Scientific Figures</h3>

<ul>
<li>Fuel Cell </li>
<ul>
${Utils.createListItem("fig-fc-h2-economy.pdf", "Hydrogen Economy")}
${Utils.createListItem("fig-fc-multiscale.pdf", "Fuel Cell Multi-Scale")}
${Utils.createListItem("fig-fc-h2-network.pdf", "Hydrogen Supply Chain")}

${Utils.createListItem("fig-fc-map-temp-array-50cm2.pdf", "Unit Cell Map - Temperature Array")}
${Utils.createListItem("fig-fc-system-pfd.pdf", "Fuel Cell Plant PFD")}
</ul>

<li>Fuel Cell Automotive Application</li>
<ul>
${Utils.createListItem("fig-fc-car-architecture.pdf", "Fuel Cell Car Architecture")}
${Utils.createListItem("fig-fc-car-kinematics.pdf", "Car Kinematics")}
${Utils.createListItem("fig-fc-car-body.pdf", "Car Body")}
${Utils.createListItem("fig-motor-dc.pdf", "DC Motor")}
</ul>

<li>Automation and Control</li>
<ul>
${Utils.createListItem("fig-smart-automation-framework.pdf", "Smart Automation Framework")}
${Utils.createListItem("fig-control-levels.pdf", "Control Levels")}
${Utils.createListItem("fig-control-pyramid.pdf ", "Control Hierarchy")}
${Utils.createListItem("fig-control-backoff-birdhouse.pdf", "Control Backed-off Operating Point - Birdhouse")}
</ul>

</ul>


`;
};

// https://delhimetrorail.com/network_map
