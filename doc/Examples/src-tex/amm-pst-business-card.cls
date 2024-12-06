%===============================================================================
% File Name     : <amm-pst-business-card.cls>
% Description   : LaTeX Class File for Buiness Card
%-------------------------------------------------------------------------------
% Author        : Amit Manohar Manthanwar (AMM)
% Locale        : Pune, Maharashtra, India
% Mailer        : manthanwar@hotmail.com
% Caller        : Skype: mnthanwar@hotmail.com
% Mobile        : +91.853.081.3398
% WebURL        : https://manthanwar.github.io
%-------------------------------------------------------------------------------
% Copyright     : ©2024 Amit Manohar Manthanwar
% License       : Restricted
%===============================================================================
%---------------+---------+----------------------------------------------------
% Revision Log  | Author  | Description
%---------------+---------+----------------------------------------------------
% 06-Dec-2024   | AMM     | Initial Version of the Class
%---------------+---------+----------------------------------------------------
%---------------+---------+----------------------------------------------------
%---------------+---------+----------------------------------------------------
%===============================================================================
\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{amm-pst-business-card}[2024/01/06 Business Card (c) Amit Manohar Manthanwar]
\LoadClass[oneside,11pt]{article}
%-------------------------------------------------------------------------------
\RequirePackage[dvipsnames,svgnames]{xcolor}
\RequirePackage{pstricks}
\RequirePackage{pstricks-add}
\RequirePackage{pst-all,pst-grad,pst-blur,pst-light3d,pst-3d,pst-math}
\RequirePackage{pst-slpe}
\RequirePackage{pst-hsb}
\RequirePackage{qrcode}
\RequirePackage{pst-flags}
% \RequirePackage{pst-art-logo}
%-------------------------------------------------------------------------------
\RequirePackage{hyperref}
\hypersetup{
  pdfauthor   ={Amit Manohar Manthanwar},
  pdftitle    ={Amit Talk},
  pdfsubject  ={Materials and Technologies Research Innovation Company},
  pdfkeywords ={Systems Engineering, Food, Water, Energy, Environment, Health},
  pdfproducer ={Amit Mahohar Manthanwar using LaTeX},
  pdfcreator  ={Amit Manohar Manthanwar using LaTeX},
  colorlinks  = true,
  linkcolor   = black,
  anchorcolor = pink,
  citecolor   = black,
  urlcolor    = black,
  pdfpagemode = FullScreen
}
\hypersetup{pdfstartview={XYZ null null 1.00}} % PDF opens to 100% zoom
%-------------------------------------------------------------------------------
%-------------------------------------------------------------------------------
%===============================================================================
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%|<--- \paperwidth \paperheight  --->|%
%|<->| \hoffset                      |%
%|   | \voffset                      |%
%|___|____________________________ __|%
%|   |<->| 1in + \oddsidemargin   |  |%
%|   |<->| 1in + \evensidemargin  |  |%
%|   |   |------------------------|  |%
%|   |   | 1in + \topmargin       |  |%
%|   |   |------------------------|  |%
%|   |   | HEADER \headheight     |  |%
%|   |   |------------------------|  |%
%|   |   | \headsep               |  |%
%|   |   |========================|  |%
%|   |   | TEXT  \topskip         |  |%
%|   |   |       \textheight      |  |%
%|   |   |<---   \textwidth   --->|  |%
%|   |   |                        |  |%
%|<-1->| | \marginparwidth        |  |%
%|   | |2| \marginparsep          |  |%
%|   |   |                        |  |%
%|   |   |========================|  |%
%|   |   | \footskip              |  |%
%|   |   |------------------------|  |%
%|   |   | FOOTER \footheight     |  |%
%|   |   |------------------------|  |%
%|___|____________________________|__|%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%-------------------------------------------------------------------------------
\paperwidth     = 3.5in     %% 252pt     % 3.5in % = 89mm
\paperheight    = 2in       %% 144pt     % 2.0in % = 51mm
\oddsidemargin  = 0in       %% Real leftmargin = 1.0 in
\evensidemargin = 0in       %% Real leftmargin = 1.0 in
\topmargin      = 0in       %% Real topmargin = (140 - 68) / 144 = 0.5in
\hoffset        = -1.24in   %% offset for printer's left margin
\voffset        = -1.15in   %% offset for printer's top margin
\headheight     = 0in       %% Height of the header
\headsep        = 0in       %% Separation between header and main text
\footskip       = 0in       %% Separation between footer and main text
\textwidth      = 3.5in     %% 252pt     % 3.5in     %% 432pt = 6in = 152.4mm
\textheight     = 2in       %% 144pt     %2.0in     %% 10in
%-------------------------------------------------------------------------------
\pdfpagewidth  = \paperwidth  %% Width of the PDF page to create
\pdfpageheight = \paperheight %% Height of the PDF page to create
%-------------------------------------------------------------------------------
%% Letter Paper = 8.5 x 11'' = 612 x 792 pt
%% A4 Paper     = 8.27 x 11.69'' = 597 x 845 pt = 210 x 297 mm
%% 72pt = 1in = 25.4mm
%===============================================================================
\definecolor{teal}{rgb}{0.0, 0.5, 0.5}
\definecolor{slcolor}{HTML}{882B21}
%===============================================================================
%-------------------------------------------------------------------------------
%===============================================================================
%-------------------------------------------------------------------------------
\newcommand{\urlColor}[1]{\hypersetup{urlcolor=#1}}
%===============================================================================
% \newenvironment{ppl}{\fontfamily{ppl}\selectfont}{\par}
%\newenvironment{wedn}{\fontfamily{wedn}\selectfont}{\par}
% \newcommand{\textPhv}[1]{\fontfamily{phv}\selectfont{#1}}
%\renewcommand{\familydefault}{\sfdefault}
%\renewcommand{\familydefault}{phv}
%\renewcommand{\familydefault}{pag}
%\newcommand*{\myfont}{\fontfamily{<familyname>}\selectfont}
%\newcommand*{\fontRoman}{\fontfamily{cmr}\selectfont}
%\renewcommand{\familydefault}{cmr}
%\renewcommand{\sfdefault}{phv}
%\fontRoman
% \renewcommand{\familydefault}{\sfdefault}
%\renewcommand{\familydefault}{phv}
%\renewcommand{\familydefault}{pag}
%\newcommand*{\myfont}{\fontfamily{<familyname>}\selectfont}
%\newcommand*{\fontRoman}{\fontfamily{cmr}\selectfont}
%\renewcommand{\familydefault}{cmr}
%\renewcommand{\sfdefault}{cmr}
%\fontRoman
%-------------------------------------------------------------------------------
%-------------------------------------------------------------------------------
%==============================================================================
% \rput(0.3,-4.4){\psLogoJapanLady[iconWidth=20]}%
% % \rput(4,-0.4){\psframe[fillcolor=red,opacity=0.5](0,0)(4.5,-4.3)}%
% \rput[lt](4.6,-0.8){\begin{minipage}{47mm}%
% \textbf{Samudra Manthan}\\[2mm]
% \tiny{Chief Technology Officer}\\[6mm]
% +91.123.123.1234\\[2mm]
% cto@dolphin.com\\[2mm]
% www.dolphin.com\\[5mm]
% Star Enclave, Sun Road\\[1mm]
% Earth, Great State 110011\\[0mm]
% % \textsc{India}
% \end{minipage}}%
%-------------------------------------------------------------------------------
\newcommand{\cardName}{First Middle Last}
\newcommand{\cardRank}{Chief Executive Officer}
\newcommand{\cardFone}{+91.123.123.1234}
\newcommand{\cardMail}{user@email.com}
\newcommand{\cardSite}{www.dolphin.com}
\newcommand{\cardAddA}{Address Line 1}
\newcommand{\cardAddB}{Address Line 2}
%-------------------------------------------------------------------------------
\newcommand{\makeBusinessCard}{%
\psset{fillstyle=solid,linestyle=solid,linewidth=1mm,dimen=outer}%
% \rput(0,0){\psframe[fillcolor=red](0,0)(8.9,-1)}%
% \rput(0,0){\psframe[fillcolor=lime](0,0)(1,-5.1)}%
\rput(0,0){\psframe[fillcolor=white,opacity=0.5,linecolor=gray!40](0,0)(8.9,-5.1)}%
\rput(0.3,-4.4){\psLogoJapanLady[iconWidth=20]}%
% \rput(4,-0.4){\psframe[fillcolor=red,opacity=0.5](0,0)(4.5,-4.3)}%
\rput[lt](4.6,-0.8){\begin{minipage}{47mm}%
\small{\textbf{\cardName}}\\[2mm]
\tiny{\cardRank}\\[6mm]
\cardFone\\[2mm]
\cardMail\\[2mm]
\cardSite\\[5mm]
\cardAddA\\[1mm]
\cardAddB\\[0mm]
% \textsc{India}
\end{minipage}}%
}
%-------------------------------------------------------------------------------
\newcommand{\makeCard}[7]{%
\psset{fillstyle=solid,linestyle=solid,linewidth=1mm,dimen=outer}%
% \rput(0,0){\psframe[fillcolor=red](0,0)(8.9,-1)}%
% \rput(0,0){\psframe[fillcolor=lime](0,0)(1,-5.1)}%
\rput(0,0){\psframe[fillcolor=white,opacity=0.5,linecolor=gray!40](0,0)(8.9,-5.1)}%
\rput(0.3,-4.4){\psLogoJapanLady[iconWidth=20]}%
% \rput(4,-0.4){\psframe[fillcolor=red,opacity=0.5](0,0)(4.5,-4.3)}%
\rput[lt](4.6,-0.8){\begin{minipage}{47mm}%
\small{\textbf{#1}}\\[2mm]
\tiny{#2}\\[6mm]
#3\\[2mm]
#4\\[2mm]
#5\\[5mm]
#6\\[1mm]
#7\\[0mm]
% \textsc{India}
\end{minipage}}%
}
%==============================================================================
%==============================================================================
%==============================================================================
%==============================================================================
%-------------------------------------------------------------------------------
%==============================================================================
