%===============================================================================
% File Name     : <amm-pst-report.cls
% Description   : LaTeX Class File for Report by Amit M. Manthanwar
%-------------------------------------------------------------------------------
% Author        : Amit Manohar Manthanwar
% Locale        : Pune, Maharashtra, India
% Mailer        : manthanwar@hotmail.com
% WebURL        : https://manthanwar.github.io
%-------------------------------------------------------------------------------
% Copyright     : ©2024 Amit Manohar Manthanwar
% License       : LaTeX Project Public License
%-------------------------------------------------------------------------------
% This program can be redistributed and/or modified under the terms
% of the LaTeX Project Public License Distributed from CTAN archives
% in directory macros/latex/base/lppl.txt.
%===============================================================================
%---------------+---------+----------------------------------------------------
% Revision Log  | Author  | Description
%---------------+---------+----------------------------------------------------
% 02-Dec-2024   | AMM     | Initial Version of the Class
%---------------+---------+----------------------------------------------------
%---------------+---------+----------------------------------------------------
%---------------+---------+----------------------------------------------------
%===============================================================================
\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{amm-pst-report}[2024/12/02 Report by Amit M. Manthanwar]
\LoadClass[oneside,11pt,a4paper]{article}
%-------------------------------------------------------------------------------
\RequirePackage[dvipsnames]{xcolor}
\RequirePackage{colortbl}
\RequirePackage{lastpage}
\RequirePackage{fancyhdr}                           % Header & Footer
\RequirePackage{hyperref}
\RequirePackage{amsmath,amssymb,mathrsfs}
\RequirePackage{enumitem}
\RequirePackage{pstricks}
\RequirePackage{graphicx}
%\RequirePackage{eurosym}
%\RequirePackage{fontspec}
%\RequirePackage{frcursive}
%\RequirePackage{calligra}
%\RequirePackage[T1]{fontenc}
%\RequirePackage{bickham}
%\RequirePackage{dutchcal}
%\RequirePackage{miama}
%\RequirePackage{wela}
%\RequirePackage{epsfig}                             % for figure
%\RequirePackage{array}
%\RequirePackage{array,multirow}
%\RequirePackage{booktabs}
%\RequirePackage{hhline}
%\RequirePackage{cmbright}
%\RequirePackage{wedn}
%\RequirePackage{pst-all,pst-grad,pst-blur,pst-light3d,pst-3d,pst-math}
%\RequirePackage{pst-slpe}
%\RequirePackage{pgfgantt}
%\RequirePackage[ddmmyyyy]{datetime}
%\renewcommand{\dateseparator}{--}
%-------------------------------------------------------------------------------
%===============================================================================
\definecolor{teal}{rgb}{0.0, 0.5, 0.5}
\definecolor{ICBlueLight}{rgb}{0.402, 0.603, 0.787}
\definecolor{ICBlueDark}{rgb}{0, 0.273, 0.498}
\definecolor{slcolor}{HTML}{882B21}
%-------------------------------------------------------------------------------
%===============================================================================
\hypersetup{
    pdfauthor   ={Amit M. Manthanwar},
    pdftitle    ={Report},
    pdfsubject  ={Materials and Technologies Research Innovation Company},
    pdfkeywords ={Food, Water, Energy, Environment, Health, Manufacturing},
    pdfproducer ={Amit M. Manthanwar using LaTeX},
    pdfcreator  ={Amit M. Manthanwar using pdflatex},
    colorlinks  = true,
    anchorcolor = pink,
    citecolor   = ICBlueDark,
    filecolor   = black,
    linkcolor   = black,
    urlcolor    = ICBlueDark,
    % frenchlinks = true
}
%-------------------------------------------------------------------------------
\newcommand{\urlColor}[1]{\hypersetup{urlcolor=#1}}
%===============================================================================
\newenvironment{ppl}{\fontfamily{ppl}\selectfont}{\par}
%\newenvironment{wedn}{\fontfamily{wedn}\selectfont}{\par}
\newcommand{\textPhv}[1]{\fontfamily{phv}\selectfont{#1}}
%\renewcommand{\familydefault}{\sfdefault}
%\renewcommand{\familydefault}{phv}
%\renewcommand{\familydefault}{pag}
%\newcommand*{\myfont}{\fontfamily{<familyname>}\selectfont}
%\newcommand*{\fontRoman}{\fontfamily{cmr}\selectfont}
%\renewcommand{\familydefault}{cmr}
%\renewcommand{\sfdefault}{phv}
%\fontRoman
%===============================================================================
%-------------------------------------------------------------------------------
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
\paperwidth     = 210mm         %% 597pt     %% = 8.5in
\paperheight    = 297mm         %% 845pt     %% = 11in
\oddsidemargin  = 0mm           %% Real leftmargin = 1.0 in
\evensidemargin = 0mm           %% Real leftmargin = 1.0 in
\topmargin      = 0mm           %% Real topmargin = (140 - 68) / 144 = 0.5in
\hoffset        = -5.4mm        %% offset for printer's left margin
\voffset        = -25.4mm       %% offset for printer's top margin
\headheight     = 5mm           %% Height of the header
\headsep        = 7mm           %% Separation between header and main text
\footskip       = 10mm          %% Separation between footer and main text
\textwidth      = 170mm         %% 432pt = 6in = 152.4mm
\textheight     = 265mm         %% 10in
\pdfpagewidth   = \paperwidth   %% Width of the PDF page to create
\pdfpageheight  = \paperheight  %% Height of the PDF page to create
%-------------------------------------------------------------------------------
%% Letter Paper = 8.5 x 11'' = 612 x 792 pt
%% A4 Paper     = 8.27 x 11.69'' = 597 x 845 pt = 210 x 297 mm
%% 72pt = 1in = 25.4mm
%-------------------------------------------------------------------------------
\setlength{\parindent}{0pt}
\setlength{\parskip}{10pt}
%\setlength{\baselineskip}{30pt}
\setlist{noitemsep,topsep=0pt,itemindent=1em}
%\setlist{nosep,noitemsep,topsep=0pt}
%[noitemsep,topsep=0pt]
%-------------------------------------------------------------------------------
%\raggedbottom
%===============================================================================
% Redefine plain page style
\fancypagestyle{plain}{\fancyhf{}
\renewcommand{\headrulewidth}{0pt}\renewcommand{\footrulewidth}{0pt}}
%-------------------------------------------------------------------------------
\fancypagestyle{title}{\fancyhf{}
\renewcommand{\headrulewidth}{0pt}\renewcommand{\footrulewidth}{0pt}}
%-------------------------------------------------------------------------------
\fancypagestyle{fancy}{\fancyhf{}
\lhead{\scriptsize{\textsf{}}}
\lfoot{\scriptsize{}}
\cfoot{\scriptsize{\textsf{}}}
\rfoot{\scriptsize{\textsf{{\thepage} of \pageref{LastPage}}}}
\renewcommand{\headrulewidth}{0pt}\renewcommand{\footrulewidth}{0pt}}
%-------------------------------------------------------------------------------
%-------------------------------------------------------------------------------
%==============================================================================