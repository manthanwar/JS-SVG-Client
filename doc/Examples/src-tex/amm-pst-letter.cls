%===============================================================================
% File Name     : <lamm-pst-letter.cls
% Description   : LaTeX Class File of Letter
%-------------------------------------------------------------------------------
% Author        : Amit Manohar Manthanwar
% Indian        : Warje, Pune, Maharashtra, India
% WebURL        : https://manthanwar.github.io
%-------------------------------------------------------------------------------
% Copyright     : ©2022 Amit Manohar Manthanwar
% License       : Restricted
%===============================================================================
%---------------+---------+----------------------------------------------------
% Revision Log  | Author  | Description
%---------------+---------+----------------------------------------------------
% 30-Apr-2022   | AMM     | Initial Version of the Template
%---------------+---------+----------------------------------------------------
% 11-Sep-2022   | AMM     | Initial Version of the Class
%---------------+---------+----------------------------------------------------
%---------------+---------+----------------------------------------------------
%---------------+---------+----------------------------------------------------
%===============================================================================
\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{amm-pst-letter}[2022/09/11 Letter]
\LoadClass[oneside,11pt,a4paper]{article}
%-------------------------------------------------------------------------------
\RequirePackage{enumitem}
\RequirePackage{fancyhdr}                           % Header & Footer
\RequirePackage[dvipsnames]{xcolor}
\RequirePackage{colortbl}
\RequirePackage{lastpage}
\RequirePackage{amsmath,amssymb,mathrsfs}
\RequirePackage{pstricks}
\RequirePackage{hyperref}
%\RequirePackage{eurosym}
%\RequirePackage{fontspec}
%\RequirePackage{frcursive}
%\RequirePackage{calligra}
%\RequirePackage[T1]{fontenc}
%\RequirePackage{bickham}
%\RequirePackage{dutchcal}
%\RequirePackage{miama}
%\RequirePackage{wela}
%\RequirePackage{graphicx}
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
    pdftitle    ={Letter},
    pdfsubject  ={Materials and Technologies Research Innovation Company},
    pdfkeywords ={Food, Water, Energy, Environment, Health},
    pdfproducer ={Amit M. Manthanwar using LaTeX},
    pdfcreator  ={Amit M. Manthanwar using pdflatex},
    colorlinks  = true,
    linkcolor   = black,
    anchorcolor = pink,
    citecolor   = ICBlueDark,
    urlcolor    = ICBlueDark,
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
\fancypagestyle{plain}{
    \fancyhf{}
    \renewcommand{\headrulewidth}{0pt}
    \renewcommand{\footrulewidth}{0pt}
}
%-------------------------------------------------------------------------------
\fancypagestyle{titlePage}{
\fancyhf{}
    \lhead{\scriptsize{\textsf{}}}
    %\chead{\vspace{20mm}\includegraphics[width=30mm]{logo}}
    \rhead{}
    \lfoot{}
    \cfoot{\scriptsize{}}
    \rfoot{\scriptsize{\textsf{}}}
    \renewcommand{\headrulewidth}{0pt}
    \renewcommand{\footrulewidth}{0pt}
}
%-------------------------------------------------------------------------------
%\newcommand{\letterDate}[1]{\vspace*{14mm}{#1}\vspace*{9mm}}
\newcommand{\letterDate}{11 September 20222}
\newcommand{\letterLogo}{Logo}
\newcommand{\letterHead}{MATERICH}
\newcommand{\letterFoot}{Material \textrm{\emph{\&}} Technology Research Innovation}
\newcommand{\concerning}{Subject}
%-------------------------------------------------------------------------------
\newcommand{\fromName}{Amit M Manthanwar}
\newcommand{\fromRank}{PhD MBA}
\newcommand{\fromDuty}{Chief Executive Officer}
\newcommand{\fromDept}{Global Research Center}
\newcommand{\fromMail}{amit@materich.com}
\newcommand{\fromFone}{+49.123.234.2343}
\newcommand{\fromSite}{materich.herokuapp.com}
\newcommand{\fromPost}{3 Sterling Apt\\Warje Pune\\India 111}
\newcommand{\fromSize}{40mm}
%-------------------------------------------------------------------------------
\newcommand{\toName}{Amit M Manthanwar}
\newcommand{\toMail}{amit@materich.com}
\newcommand{\toFone}{+49.123.234.2343}
\newcommand{\toSite}{materich.herokuapp.com}
\newcommand{\toPost}{3 Sterling Apt\\Warje Pune\\India 111}
\newcommand{\toDuty}{Chief Executive Officer}
\newcommand{\toRank}{PhD MBA}
\newcommand{\toDept}{Global Research Center}
%-------------------------------------------------------------------------------
\newcommand{\printAddress}{\vspace*{12mm}
    \letterDate\\[12mm]
    \textbf{\toName}\\[2mm]
    \footnotesize{\toDuty}\\\\
    \toDept\\[2mm]
    \toPost\\[10mm]
    %\toFone$\;\;\bullet\;\;$\toMail
    \textbf{Re: }\textsc{\concerning}\\
}
%-------------------------------------------------------------------------------
\fancypagestyle{letterhead}{
    \renewcommand{\headrulewidth}{0pt}
    \renewcommand{\footrulewidth}{0pt}

    \fancyhf{}
    \lhead{{\letterLogo} \huge{\textcolor{teal}{\textbf{\letterHead}}}}
    \lfoot{\color{teal}{\textsf{\letterFoot}}}

    \rhead{
        %\vspace*{1mm}
        \begin{flushright}
        \begin{minipage}[t]{\fromSize}
        \fontsize{9}{11pt}\usefont{OT1}{cmss}{m}{n}{
        \fromDept\\\\
        \fromPost\\\\
        %\fromAuthorPhone\\
        \fromMail\\
        \fromSite\\\\}
%-------------------------------------------------------------------------------
        \fontsize{11}{11pt}\usefont{OT1}{cmss}{m}{n}{\textbf{\fromName}\\}
        \fontsize{7}{11pt}\usefont{OT1}{cmss}{m}{n}{\fromRank\\[2mm]}
        \fontsize{9}{11pt}\usefont{OT1}{cmss}{m}{n}{\fromDuty\\}
        \end{minipage}
        \end{flushright}
        \vspace*{-50mm}
    }
}
%-------------------------------------------------------------------------------
% Redefine plain page style
\fancypagestyle{fancy}{
    \fancyhf{}
    \lhead{\scriptsize{\textsf{}}}
    \lfoot{\scriptsize{}}
    \cfoot{\scriptsize{\textsf{}}}
    \rfoot{\scriptsize{\textsf{{\thepage} of \pageref{LastPage}}}}
    \renewcommand{\headrulewidth}{0pt}
    \renewcommand{\footrulewidth}{0pt}
}
%-------------------------------------------------------------------------------
% Redefine plain page style
\newcommand{\psCopyright}[1]{%
\pscircle[unit=1pt,linewidth=0.6pt,linecolor=black]
(3,2.8){4} \scriptsize{C} #1 }

\fancypagestyle{ammArt}{
\fancyhf{}
\lfoot{\textcolor{black}{textPhv {\footnotesize{\psCopyright{2022}  MATERICH}}}}
\rfoot{\footnotesize{\thepage}}
\cfoot{\tiny{Confidential}}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}}
%-------------------------------------------------------------------------------
%==============================================================================
