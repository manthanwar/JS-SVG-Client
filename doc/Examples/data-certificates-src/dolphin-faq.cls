%===============================================================================
% File Name     : dolphin-proposal.cls
% Description   : LaTeX Class dolphin Proposal
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
\ProvidesClass{dolphin-proposal}[2025/09/27 Article Class (c) Amit Manohar Manthanwar]
%-------------------------------------------------------------------------------
\DeclareOption{letterpaper}{\OptionNotUsed}
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{article}}
\ProcessOptions\relax
\LoadClass[oneside,a4paper]{article}
%-------------------------------------------------------------------------------
% \RequirePackage{amm-fonts}
\RequirePackage{amsmath,amssymb,amsthm}
\RequirePackage{fp}
%\RequirePackage{xintexpr}
%\RequirePackage{fix-cm}
\RequirePackage{siunitx}
%\RequirePackage[ddmmyyyy]{datetime}
\RequirePackage{fancyhdr}                           % Header & Footer
%\RequirePackage{lastpage}
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
\RequirePackage{qrcode}

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
\RequirePackage{dolphin-fonts}
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
%===============================================================================


%===============================================================================
% region make title
\makeatletter
\renewcommand*{\maketitle}{%
\begin{center}%
% \huge\textsc{\@title}\\[6mm]%
\huge{\@title}\par\vspace*{-0.5\parskip}%
% \LARGE{\@title}\\[8mm]%
% \normalsize{\@author}\\[2mm]%
\small{\@author}\par\vspace*{-0.5\parskip}%
% \scriptsize{\number\day\ \monthName\ \number\year}%
% \pdfAuthor{\@author}%
\pdfAuthor{Amit Manohar Manthawar}%
\pdfTitle{\@title}%
\end{center}}%
%-------------------------------------------------------------------------------
% endregion make title
%===============================================================================
\makeatother
\renewcommand{\abstractname}{\vspace{-4mm}}

% \begin{titlepage}%
% \end{titlepage}%
%-------------------------------------------------------------------------------
\hypersetup{
pdfproducer={Amit M. Manthanwar using LaTeX},
pdfcreator={Amit M. Manthanwar using pdflatex},
colorlinks=true, % Enables colored links
urlcolor=teal!80!blue    % Sets the color of URLs to blue
}
%-------------------------------------------------------------------------------
%===============================================================================
%\definecolor{teal}{rgb}{0.0, 0.5, 0.5}
%\definecolor{ICBlueLight}{rgb}{0.402, 0.603, 0.787}
%\definecolor{ICBlueDark}{rgb}{0, 0.273, 0.498}
%===============================================================================
% region Page Layout
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
\footskip       = 10mm       %% Separation between footer and main text
\textwidth      = 170mm     %% 432pt = 6in = 152.4mm
\textheight     = 255mm     %% 10in
% \textheight     = 262mm     %% 10in
%% Letter Paper = 8.5 x 11'' = 612 x 792 pt
%% A4 Paper     = 8.27 x 11.69'' = 597 x 845 pt = 210 x 297 mm
%% 72pt = 1in = 25.4mm
\pdfpagewidth  = \paperwidth  %% Width of the PDF page to create
\pdfpageheight = \paperheight %% Height of the PDF page to create
%-------------------------------------------------------------------------------
\setlength{\parindent}{0pt}
\setlength{\parskip}{0mm}
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
% endregion Page Layout
%===============================================================================
%===============================================================================


%===============================================================================
% region page styles
% region pagestyle plain
\fancypagestyle{plain}{\fancyhf{}
\renewcommand{\headrulewidth}{0pt}\renewcommand{\footrulewidth}{0pt}}
% endregion plain
%-------------------------------------------------------------------------------
% region page style title
\fancypagestyle{title}{\fancyhf{}%
\renewcommand{\headrulewidth}{0pt}\renewcommand{\footrulewidth}{0pt}%
% \psset{unit=1mm}%
% \lfoot{\rput[lb](-20,-7){Amit}}
%-------------------------------------------------------------------------------
% \psset{unit=1mm,fillstyle=none,linestyle=solid,linecolor=gray,linewidth=0.14,linecap=1}%
%-------------------------------------------------------------------------------
%-------------------------------------------------------------------------------
}% end \fancypagestyle
% endregion title
%-------------------------------------------------------------------------------
% region pagestyle main
\fancypagestyle{main}{\fancyhf{}%
\renewcommand{\headrulewidth}{0pt}\renewcommand{\footrulewidth}{0pt}%
\lfoot{\scriptsize{\textcopyright \the\year\ Dolphin}}%
\cfoot{\scriptsize{\fontNunitoL{Design Intelligence}}}%
% \psset{boxsep=false,framesep=2mm,fillstyle=none,,linestyle=solid,linecolor=teal!80!blue}%
\lfoot{\scriptsize{\textcopyright \the\year\ Dolphin}}%
\cfoot{\scriptsize{Frequently Asked Questions}}%
\rfoot{\scriptsize{\thepage}}%
%
}% end \fancypagestyle
% endregion pagestyle main
%-------------------------------------------------------------------------------
% region pagestyle fancy
\fancypagestyle{fancy}{\fancyhf{}%
\renewcommand{\headrulewidth}{0pt}\renewcommand{\footrulewidth}{0pt}%
\renewcommand{\headrulewidth}{0pt}\renewcommand{\footrulewidth}{0pt}%
\lfoot{\scriptsize{\textcopyright \the\year\ Dolphin}}%
\cfoot{\scriptsize{\fontNunitoL{Design Intelligence}}}%
% \psset{boxsep=false,framesep=2mm,fillstyle=none,,linestyle=solid,linecolor=teal!80!blue}%
% \rfoot{\pscirclebox{\scriptsize{\color{white}{\thepage}}}}%
% \rfoot{\psframebox{\scriptsize{\color{white}{\thepage}}}}%
%
}% end \fancypagestyle
% endregion pagestyle fancy
%-------------------------------------------------------------------------------
% endregion pagestyles
%===============================================================================

%===============================================================================
% region \makeCoverPage
\newcommand{\makeCoverPage}{%
\thispagestyle{empty}%
\begin{figure}[!h]
\centering%
\resizebox{\textwidth}{!}{%
\sffamily\tiny%\scriptsize\tiny%
%\psset{unit=10mm}
\begin{pspicture}(0,0)(17,27)%[saveNodeCoors]
% \psgrid[subgriddiv=5, gridcolor=gray!50, subgridcolor=gray!20, gridlabels=8pt, gridlabelcolor=red, gridwidth=0.1mm,subgridwidth=0.1mm] % griddots=4, subgriddots=10,
%-------------------------------------------------------------------------------
% \psset{unit=1mm,fillstyle=none,linestyle=solid,linecolor=gray!40,linewidth=0.4,linecap=1,linejoin=1}%
%-------------------------------------------------------------------------------
%-------------------------------------------------------------------------------
%-------------------------------------------------------------------------------
%-------------------------------------------------------------------------------
\end{pspicture}%
}%\resizebox
% \caption{Pattern six and four fold combined tile with open endings}
\end{figure}
%-------------------------------------------------------------------------------
\clearpage
% \thispagestyle{title}
\thispagestyle{main}
\maketitle
\setcounter{page}{1}
\pagestyle{fancy}
}% end \makeCoverPage
% endregion \makeCoverPage
%===============================================================================

% %===============================================================================
% region section spacing
% % \@startsection{<type>}{<level>}{<indent>}{<beforeskip>}{<afterskip>}{<style>}
\makeatletter
% \renewcommand{\section}[1]{\@startsection{section}{1}{0pt}
% {\parskip}{1pt}{\Large\fontNunitoB}{\vspace*{-0.5\parskip}#1}}
% %
% % \renewcommand{\section*}[1]{\@startsection{section}{1}{0pt}
% % {\parskip}{1pt}{\Large\fontNunitoB}{\vspace*{-0.5\parskip}#1}}
% %
% \renewcommand{\section}[1]{\@startsection{section}{1}{0pt}
% {\parskip}{1pt}{\Large{\fontNunitoSb{\vspace*{-0.5\parskip}#1}}}}%
% \renewcommand{\thesection}{\fontPhv{\arabic{section}}}
% %
% % \renewcommand{\subsection}[1]{\@startsection{subsection}{2}{0pt}
% % {0.5\parskip}{1pt}{\large\fontNunitoB}{\vspace*{-0.5\parskip}#1}}
% %
% % \renewcommand{\subsubsection}[1]{\@startsection{subsubsection}{3}{0pt}
% % {0pt}{1pt}{\fontNunitoSb}{\vspace*{-0.5\parskip}#1}}
% %
% \renewcommand{\paragraph}[1]{\@startsection{paragraph}{4}{0pt}
% {0pt}{0.1\parskip}{\normalfont}{#1}}
% %
% \renewcommand{\subparagraph}[1]{\@startsection{subparagraph}{4}{0pt}
% {0pt}{0.1\parskip}{\normalfont}{#1}}
% %
% % \setlength{\parskip}{10mm}%
% %
% % %
% % \let\oldsection\section % Save the original \section command
% % % Define your custom starred section command
% % \newcommand{\mycustomstarredsection}[1]{%
% % \vspace*{1.4\parskip}%
% % \Large{\fontNunitoB{#1}}%
% % % \Large\fontNunitoB{#1}
% % % \fontNunitoL
% % \vspace*{-0.5\parskip}\normalsize
% % }
% % % Redefine \section to check for a star and call the appropriate command
% % \renewcommand{\section}{\@ifstar{\mycustomstarredsection}{\oldsection}}
% %
\makeatother
% endregion section spacing
% %===============================================================================

% \usepackage{titlesec}
% \titleformat{\section}
% {\normalfont\Large\bfseries} % Format for the whole title (including number)
% %{\normalfont\Large\bfseries\itshape\thesection} % Format for the number
% {1em} % Space between number and title text
% {} % Format for the title text (empty, so it inherits from the first argument)
% % {\Large\fontNunitoB}



%===============================================================================
% region titlesec
%-------------------------------------------------------------------------------
\usepackage{titlesec}
%-------------------------------------------------------------------------------
% \titleformat{\section}
% {\normalfont\Large\bfseries} % Format for the whole title (including number)
% {\normalfont\Large\bfseries\itshape\thesection} % Format for the number part
% {1em} % Space between number and title text
% {} % Format for the title text (empty, so it inherits from the first argument)
%-------------------------------------------------------------------------------
% \titlespacing{<command>}{<left>}{<before-sep>}{<after-sep>}
% \titlespacing{\section}{0pt}{12pt plus 4pt minus 2pt}{6pt}
% \titlespacing{\subsection}{0pt}{8pt plus 4pt minus 2pt}{4pt}
% \titlespacing{\subsubsection}{0pt}{6pt plus 4pt minus 2pt}{3pt}
%-------------------------------------------------------------------------------
\titleformat{\section}{\normalfont\Large\fontNunitoB}{\thesection}{1em}{}
\titleformat{\subsection}{\normalfont\large\fontNunitoMb}{\thesubsection}{1em}{}
\titleformat{\subsubsection}{\normalfont\fontNunitoMb}{\thesubsubsection}{1em}{}
%-------------------------------------------------------------------------------
\titlespacing{\section}{0pt}{0.8\parskip plus 4pt minus 2pt}{-0.5\parskip}
\titlespacing{\subsection}{0pt}{-0.5\parskip plus 4pt minus 2pt}{-0.5\parskip}
\titlespacing{\subsubsection}{0pt}{-0.6\parskip plus 4pt minus 2pt}{-0.5\parskip}
%-------------------------------------------------------------------------------
% \titlespacing{\section}{0pt}{\parskip}{-0.5\parskip}
% \titlespacing{\subsection}{0pt}{-0.5\parskip}{-0.5\parskip}
% \titlespacing{\subsubsection}{0pt}{-0.5\parskip}{-0.5\parskip}
% endregion titlesec
%===============================================================================

%===============================================================================
% region enumitem
\setlist[itemize]{nosep,itemsep=2pt,topsep=-4pt}
\setlist[itemize,1]{label=$\bullet$,leftmargin=16mm}
\setlist[itemize,2]{label=$\circ$}
%
\setlist[enumerate]{nosep,itemsep=2pt,topsep=-4pt}
\setlist[enumerate,1]{label=\arabic*.}

% endregion enumitem
%===============================================================================
%===============================================================================
%===============================================================================
\raggedbottom

