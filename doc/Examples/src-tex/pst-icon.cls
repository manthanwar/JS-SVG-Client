%===============================================================================
% File Name     : <pst-icon.cls>
% Description   : LaTeX Class File for Package Postscript Icons using PSTricks
%-------------------------------------------------------------------------------
% Author        : Amit Manohar Manthanwar
% Indian        : Pune, Maharashtra, India
% Mailer        : manthanwar@hotmail.com
% WebURL        : https://manthanwar.github.io
%-------------------------------------------------------------------------------
% Copyright     : ©2022 Amit Manohar Manthanwar
% License       : Restricted
%===============================================================================
%---------------+---------+-----------------------------------------------------
% Revision Log  | Author  | Description
%---------------+---------+-----------------------------------------------------
% 30-Apr-2022   | AMM     | Initial Version
%---------------+---------+-----------------------------------------------------
%===============================================================================
\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{pst-icon}[2022/10/29 Article Class (c) Amit M. Manthanwar]
%-------------------------------------------------------------------------------
\DeclareOption{letterpaper}{\OptionNotUsed}
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{article}}
\ProcessOptions\relax
\LoadClass[oneside,a4paper]{article}
%-------------------------------------------------------------------------------
\RequirePackage{fp}
%\RequirePackage{xintexpr}
%\RequirePackage{fix-cm}
\RequirePackage{siunitx}
%\RequirePackage[ddmmyyyy]{datetime}
\RequirePackage{fancyhdr}                           % Header & Footer
\RequirePackage{lastpage}
\RequirePackage[dvipsnames,svgnames]{xcolor}
\RequirePackage{colortbl}
\RequirePackage{multirow}
\RequirePackage{enumitem}
\RequirePackage{graphicx}
%\RequirePackage{amsmath,amssymb}
%\RequirePackage{mathrsfs,mathtools}
%\RequirePackage{chemfig}
\RequirePackage{pstricks}
\RequirePackage{pst-all} %adds: pst-plot,pst-node,pst-tree,pst-grad,pst-coil,pst-text,pst-3d,pst-eps,pst-fill,pstricks-add,multido

\RequirePackage{pst-blur}
%\RequirePackage{pstricks-add}
%\RequirePackage{pst-all,pst-grad,pst-blur,pst-light3d,pst-3d,pst-math}
\RequirePackage{pst-slpe}
\RequirePackage{pst-hsb}
%\RequirePackage{tikz}
%\RequirePackage{pgfgantt}


\RequirePackage{longtable}
%\RequirePackage{cooltooltips}

%\RequirePackage[compact]{titlesec}
%\RequirePackage{titlesec}


%\RequirePackage{pstricks-add}
%\RequirePackage{pst-arrow}
%\RequirePackage{pst-bezier}


%\RequirePackage[OT4]{fontenc}
%\RequirePackage[T1]{fontenc}
%\RequirePackage{polski}
%\RequirePackage{bbding}
%\RequirePackage{epsfig}                             % for figure
%\RequirePackage{array}
%\RequirePackage{array,multirow}
%\RequirePackage{booktabs}
%\RequirePackage{hhline}
%\RequirePackage{pgfgantt}
%\RequirePackage[ddmmyyyy]{datetime}
%\renewcommand{\dateseparator}{--}
%-------------------------------------------------------------------------------
%\RequirePackage{eurosym}
%\RequirePackage{fontspec}
%\RequirePackage[T1]{fontenc}
%\RequirePackage{cmbright}
%\RequirePackage{wedn}
%\RequirePackage{helvet}
%\RequirePackage{avant}
%\RequirePackage{frcursive}
%\RequirePackage{calligra}
%\RequirePackage{bickham}
%\RequirePackage{dutchcal}
%\RequirePackage{miama}
%\RequirePackage{wela}
%\RequirePackage{cmbright}
%\RequirePackage[varqu,varl]{inconsolata} % sans serif typewriter
%-------------------------------------------------------------------------------
%===============================================================================

%\RequirePackage{epsfig}                             % for figure
%\RequirePackage{array}
%\RequirePackage{array,multirow}
%\RequirePackage{booktabs}


%\RequirePackage{cmbright}
%\RequirePackage{wedn}
%\RequirePackage{pstricks-add}
%\RequirePackage{pst-arrow}
%\RequirePackage{pst-bezier}%\renewcommand{\dateseparator}{--}
%-------------------------------------------------------------------------------
\RequirePackage[pagebackref,hidelinks]{hyperref}
% \hypersetup{
% colorlinks=true, % Ensures links are colored
% urlcolor=blue,   % Sets the color of URL links (adjust as desired)
% pdfborderstyle={/S/U/W 1} % Underlines links
% }
%-------------------------------------------------------------------------------
\renewcommand*{\backref}[1]{}
\renewcommand*{\backrefalt}[4]{%
\ifcase #1 %
(Not cited). % case: not cited
\or
(Cited on page~#2) % case: cited on exactly one page
\else
(Cited on pages~#2)  % case: cited on multiple pages
\fi}
%-------------------------------------------------------------------------------
\def\monthName{\ifcase\month\or January\or February\or March\or April\or May\or June\or July\or August\or September\or October\or November\or December\fi}%

\newcommand{\pdfAuthor}[1]{\hypersetup{pdfauthor={#1}}}
\newcommand{\pdfTitle}[1]{\hypersetup{pdftitle={#1}}}
\newcommand{\subject}[1]{\hypersetup{pdfsubject={#1}}}
\newcommand{\pdfKeywords}[1]{\hypersetup{pdfkeywords={#1}}}

\newcommand{\keywords}[1]{\par\vspace{\baselineskip}\noindent\small{\textbf{Keywords:} #1}\pdfKeywords{\expandafter #1}}%

\makeatletter
\renewcommand*{\maketitle}{%
\begin{center}%
\LARGE\textsc{\@title}\\[4mm]%
\normalsize{\@author}\\[2mm]%
\scriptsize{\number\day\ \monthName\ \number\year}%
\pdfAuthor{\@author}%
\pdfTitle{\@title}%
\end{center}}%
\makeatother

% \begin{titlepage}%
% \end{titlepage}%
%-------------------------------------------------------------------------------
\hypersetup{
pdfproducer={Amit M. Manthanwar using LaTeX},
pdfcreator={Amit M. Manthanwar using pdflatex}
}
%-------------------------------------------------------------------------------
%===============================================================================
%\definecolor{teal}{rgb}{0.0, 0.5, 0.5}
%\definecolor{ICBlueLight}{rgb}{0.402, 0.603, 0.787}
%\definecolor{ICBlueDark}{rgb}{0, 0.273, 0.498}
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
\paperwidth     = 210mm     %% 597pt     %% = 8.5in
\paperheight    = 297mm     %% 845pt     %% = 11in
\oddsidemargin  = 0mm       %% Real leftmargin = 1.0 in
\evensidemargin = 0mm       %% Real leftmargin = 1.0 in
\topmargin      = 0mm       %% Real topmargin = (140 - 68) / 144 = 0.5in
\hoffset        = -5.4mm    %% offset for printer's left margin
\voffset        = -25.4mm   %% offset for printer's top margin
\headheight     = 15mm      %% Height of the header
\headsep        = 5mm       %% Separation between header and main text
\footskip       = 7mm       %% Separation between footer and main text
\textwidth      = 170mm     %% 432pt = 6in = 152.4mm
\textheight     = 262mm     %% 10in
%% Letter Paper = 8.5 x 11'' = 612 x 792 pt
%% A4 Paper     = 8.27 x 11.69'' = 597 x 845 pt = 210 x 297 mm
%% 72pt = 1in = 25.4mm
\pdfpagewidth  = \paperwidth  %% Width of the PDF page to create
\pdfpageheight = \paperheight %% Height of the PDF page to create
%-------------------------------------------------------------------------------
\setlength{\parindent}{0pt}
\setlength{\parskip}{5mm}
%\setlength{\parindent}{12pt}
%\renewcommand{\baselinestretch}{1}
%\setlength{\baselineskip}{30pt}
%\setlength{\abovecaptionskip}{0pt}
%\titlespacing{\section}{0pt}{4mm}{0mm}
%\titlespacing{\subsection}{0pt}{4mm}{0mm}
%\titlespacing{\subsubsection}{0mm}{4mm}{0mm}
%\setlength{\textfloatsep}{2mm}
%\setlength{\floatsep}{2mm}
%\setlength{\intextsep}{2mm}
%\renewcommand{\arraystretch}{2}
%\setlength{\extrarowheight}{10mm} % Works only in the tabular
%\newcommand{\rowLineAfter}{6mm}
%\newcommand{\rowsepbefore}{1mm}
%\newcommand{\rowsepafter}{8mm}
%\setlength{\extrarowheight}{\rowsepbefore}

%-------------------------------------------------------------------------------
%\raggedbottom
%===============================================================================


\fancypagestyle{plain}{\fancyhf{}
\renewcommand{\headrulewidth}{0pt}\renewcommand{\footrulewidth}{0pt}}

\fancypagestyle{title}{\fancyhf{}
\renewcommand{\headrulewidth}{0pt}\renewcommand{\footrulewidth}{0pt}
}


%===============================================================================
%===============================================================================
%===============================================================================
%===============================================================================
%===============================================================================
%===============================================================================
%===============================================================================
