%===============================================================================
% File Name     : amm-pst=dpr-article.cls
% File Created  : 2025-10-08 15:45 UTC +02:00
% Description   : Article: Detailed Project Report by Amit Manohar Manthanwar
%-------------------------------------------------------------------------------
% Author        : Amit Manohar Manthanwar
% Address       : Pune, Maharashtra, India
% Website       : https://manthanwar.github.io
%-------------------------------------------------------------------------------
% Copyright     : ©2025 Amit Manohar Manthanwar
% License       : Restricted
% License       : LaTeX Project Public License
%-------------------------------------------------------------------------------
% This program can be redistributed and/or modified under the terms
% of the LaTeX Project Public License Distributed from CTAN archives
% in directory macros/latex/base/lppl.txt.
%---------------+---------+-----------------------------------------------------
% Revision Log  | Author  | Description
%---------------+---------+-----------------------------------------------------
% 08-Oct-2025   | AMM     | Initial Version
%---------------+---------+-----------------------------------------------------
% 26-Oct-2025   | AMM     | Added Detailed Project Report Features
%---------------+---------+-----------------------------------------------------
%===============================================================================

%===============================================================================
\NeedsTeXFormat{LaTeX2e}[2023-11-01]
\ProvidesClass{amm-pst=dpr-article}[2025/10/08 Project Report Article Class (c) Amit Manohar Manthanwar]
% \DeclareOption{onecolumn}{\OptionNotUsed}
% \DeclareOption{12pt}{12pt}
% \makeatletter
% \DeclareOption{10pt}{\renewcommand\@ptsize{0}}
% \DeclareOption{11pt}{\renewcommand\@ptsize{1}}
% \DeclareOption{12pt}{\renewcommand\@ptsize{2}}
% \makeatother
% \ExecuteOptions{12pt} % Sets 10pt as the default if no other size is chosen
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{article}}
\ProcessOptions\relax
\LoadClass{article}
%===============================================================================
%===============================================================================
\RequirePackage{lettrine}% make first word 3 lines
\RequirePackage{fp}
%\RequirePackage{xintexpr}
%\RequirePackage{fix-cm}
\RequirePackage{siunitx}
%\RequirePackage[ddmmyyyy]{datetime}
\RequirePackage{fancyhdr}                           % Header & Footer
% \RequirePackage{lastpage}
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
\RequirePackage[pagebackref,colorlinks=false]{hyperref}
\RequirePackage{bookmark}
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

% \makeatletter
% \renewcommand*{\maketitle}{%
% \begin{center}%
% \huge\textsc{\@title}\\[4mm]
% \normalsize{\@author}\\[2mm]
% \scriptsize{\number\day\ \monthName\ \number\year}%
% \pdfAuthor{\@author}%
% \pdfTitle{\@title}%
% \end{center}}%
% \makeatother

% \begin{titlepage}%
% \end{titlepage}%
%-------------------------------------------------------------------------------
% \hypersetup{
% pdfproducer={Amit M. Manthanwar using LaTeX},
% pdfcreator={Amit M. Manthanwar using pdflatex}
% }
%===============================================================================
%-------------------------------------------------------------------------------
\hypersetup{%backref,
bookmarks=false,
bookmarksnumbered=true,
bookmarksopen=false,
% bookmarksopenlevel=1,
breaklinks=true,
colorlinks=true,
linkcolor=blue,
urlcolor=blue,
citecolor=blue,
menucolor=red,
anchorcolor=black,
filecolor=magenta,
hypertexnames=false,
% hyperindex=true,
% hyperfigures=true,
% hyperfootnotes=true,
pdfstartview={Fit},
%pdfpagemode=FullScreen,
pdftitle = {Project Report},
pdfauthor = {Amit Manohar Manthanwar},
pdfsubject = {Document Automation using LaTeX, PostScript, JavaScript, Python},
pdfkeywords = {Vector Art, Design Intelligence, Document Automation, LaTeX, PostScript, JavaScript, Python},
pdfproducer={Amit M. Manthanwar using LaTeX},
pdfcreator={Amit M. Manthanwar using latex + dvips + ps2pdf}
% pdfcreator = {LaTeX with hyperref package},
% pdfproducer = {dvips + ps2pdf}
}
%===============================================================================
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
\hoffset        = -5.4mm    %% offset for printer's left margin
\voffset        = -25.4mm   %% offset for printer's top margin
\oddsidemargin  = 0mm       %% Real leftmargin = 1.0 in
\evensidemargin = 0mm       %% Real leftmargin = 1.0 in
\topmargin      = 0mm       %% Real topmargin = (140 - 68) / 144 = 0.5in
\headheight     = 15mm      %% Height of the header
\headsep        = 5mm       %% Separation between header and main text
\footskip       = 5mm       %% Separation between footer and main text
\textwidth      = 170mm     %% 432pt = 6in = 152.4mm
\textheight     = 262mm     %% 10in
%% Letter Paper = 8.5 x 11'' = 612 x 792 pt
%% A4 Paper     = 8.27 x 11.69'' = 597 x 845 pt = 210 x 297 mm
%% 72pt = 1in = 25.4mm
\pdfpagewidth  = \paperwidth  %% Width of the PDF page to create
\pdfpageheight = \paperheight %% Height of the PDF page to create
%-------------------------------------------------------------------------------
\setlength{\parskip}{10pt}
\setlength{\parindent}{0pt}
% \renewcommand{\baselinestretch}{1}
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

%===============================================================================
% region header footer
\fancypagestyle{empty}{\fancyhf{}
\renewcommand{\headrulewidth}{0pt}\renewcommand{\footrulewidth}{0pt}}
%-------------------------------------------------------------------------------
\fancypagestyle{plain}{\fancyhf{}
\renewcommand{\headrulewidth}{0pt}\renewcommand{\footrulewidth}{0pt}}
%-------------------------------------------------------------------------------
\fancypagestyle{title}{\fancyhf{}
\renewcommand{\headrulewidth}{0pt}\renewcommand{\footrulewidth}{0pt}
}
%-------------------------------------------------------------------------------
\fancypagestyle{frontmatter}{\fancyhf{}
\cfoot{\scriptsize{\thepage}}
\renewcommand{\headrulewidth}{0pt}\renewcommand{\footrulewidth}{0pt}}
%-------------------------------------------------------------------------------
\fancypagestyle{chapter}{\fancyhf{}
% \cfoot{\scriptsize{\thepage}}
\renewcommand{\headrulewidth}{0pt}\renewcommand{\footrulewidth}{0pt}}
%-------------------------------------------------------------------------------
% \makeatletter
% \renewcommand{\sectionmark}[1]{%
% \markboth{\ifnum \c@secnumdepth>\z@\thesection\hskip 1em\relax\fi #1}{}}
% \makeatother
%-------------------------------------------------------------------------------
\renewcommand{\sectionmark}[1]{\markright{\thesection~~#1}}
% \renewcommand{\chaptermark}[1]{\markboth{\if@mainmatter\chaptername\ \thechapter~~\fi#1}{}}
%-------------------------------------------------------------------------------
\newcommand{\authorCopyright}[1]{\def\authorCopyrightA{#1}}
\newcommand{\titleShort}[1]{\def\titleShortA{#1}}
\authorCopyright{Manthanwar}
\titleShort{Book by Manthanwar}
%-------------------------------------------------------------------------------
\fancypagestyle{fancy}{\fancyhf{}
\renewcommand{\headrulewidth}{0pt}\renewcommand{\footrulewidth}{0pt}
% \fancyhead[RO,LE]{\scriptsize{\emph{\leftmark}}}
% \fancyhead[RE,LO]{\scriptsize{\emph{\rightmark}}}
% \rhead{\scriptsize{\emph{\leftmark}}}
\rhead{\scriptsize{\emph{\rightmark}}}
\lfoot{\scriptsize{\textcopyright \the\year\ \authorCopyrightA}}
% \cfoot{\scriptsize{\@title}}
% \cfoot{\scriptsize{\titleShort}}
% \cfoot{\scriptsize{\leftmark \rightmark}}
% \rfoot{\scriptsize{Page \thepage\ of \pageref{LastPage}}}
% \rfoot{\scriptsize{\thepage}}
\rfoot{\scriptsize{\titleShortA\ $|$ \thepage}}
}
% endregion header footer
%===============================================================================

%===============================================================================
\newcommand*{\getFirstChar}[1]{%
  \StrChar{#1}{1}[\FirstChar]%
  \FirstChar%
}
% Usage: The first character of hello is: \getFirstChar{hello}
%-------------------------------------------------------------------------------
\makeatletter
\def\GetTail#1{%
  \ifx#1\empty% Base case: if the string is empty, do nothing.
    \expandafter\@gobble%
  \else% Recursive case: remove the first character and call GetTail again.
    \expandafter\@firstofone%
  \fi%
  {\@GetTailAux#1}%
}
\def\@GetTailAux#1#2\relax{#2} % #1 is the first char, #2 is the rest.
%-------------------------------------------------------------------------------
\newcommand{\getRestChars}[1]{%
  \expandafter\GetTail\expandafter{#1}\relax%
}
\makeatother
% Usage: The word without the first character is: \getRestChars{Example}
%-------------------------------------------------------------------------------
%===============================================================================

%===============================================================================
\newcommand{\firstWord}[2]{\lettrine[findent=2pt,nindent=0pt]{%
\resizebox{!}{20pt}{\textbf{#1}}}{#2}}%
%===============================================================================

%===============================================================================
\newcolumntype{E}{@{}m{0pt}@{}}
\newcolumntype{M}[1]{>{\centering\arraybackslash}m{#1}}
\newcolumntype{L}[1]{>{\raggedright\arraybackslash}p{#1}}
\newcolumntype{R}[1]{>{\raggedleft\arraybackslash}p{#1}}
% \newcolumntype{N}[1]{>{\raggedleft\arraybackslash}p{#1}}
\newcolumntype{N}[2]{S[table-column-width=#1,table-format=#2]} % S column with fixed width
\newcolumntype{?}[2]{!{\color{#1}{\vrule width #2}}}
%===============================================================================

%===============================================================================
\setlist{itemsep=0pt, parsep=0pt}
\setlist{itemsep=0pt, parsep=0pt}

% \setlist[enumerate]{label=\arabic*., font=\bfseries}
% \setlist[enumerate,2]{label=(\alph*)}

%===============================================================================


%===============================================================================
%-------------------------------------------------------------------------------
%===============================================================================




