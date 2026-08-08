%===============================================================================
% region header
%-------------------------------------------------------------------------------
% File Name     : prescription.cls
% File Created  : 2026-08-06 17:17 UTC +05:30
% Description   : LaTeX Class for Medical Prescription Pad by Amit M. Manthanwar
%-------------------------------------------------------------------------------
% Author        : Amit Manohar Manthanwar
% Address       : Pune, Maharashtra, India
% Email         : manthanwar@hotmail.com
% Website       : https://manthanwar.github.io
%-------------------------------------------------------------------------------
% Copyright     : ©2026 Amit Manohar Manthanwar
% License       : Restricted
% License       : LaTeX Project Public License
%-------------------------------------------------------------------------------
% This program can be redistributed and/or modified under the terms
% of the LaTeX Project Public License Distributed from CTAN archives
% in directory macros/latex/base/lppl.txt.
%---------------+---------+-----------------------------------------------------
% Revision Log  | Author  | Description
%---------------+---------+-----------------------------------------------------
% 06-Aug-2026   | AMM     | Initial Version
%---------------+---------+-----------------------------------------------------
% endregion header
%===============================================================================

%===============================================================================
% region Provide Class
%-------------------------------------------------------------------------------
\def\fileA{Amit Manohar Manthanwar}% author
\def\fileN{prescription.cls}% name
\def\fileC{prescription}% class
\def\fileV{v1.0.0}% version
\def\fileD{2026/08/06}% date: yyyy/mm/dd or yyyy-mm-dd'
%-------------------------------------------------------------------------------
\NeedsTeXFormat{LaTeX2e}[2023/11/01]
\ProvidesClass{\fileC}[\fileD \fileV (c) \fileA]

\RequirePackage{xfp}
\RequirePackage{kvoptions}
\SetupKeyvalOptions{
  family=prescription,
  prefix=prescription@,
}
% 2. Declare the key-value option (with a default fallback value)
\DeclareStringOption[10]{margin}
\ProcessKeyvalOptions*

\def\pageMarginVal{\prescription@margin}%

% 1. Define specific custom options
\DeclareOption{a4}{\PassOptionsToClass{a4paper}{article}% 210 x 297 mm
\setlength{\hoffset}{\fpeval{-25.4-15+\pageMarginVal}mm}%
\setlength{\voffset}{\fpeval{-28.4-20+\pageMarginVal}mm}}% \DeclareOption{a4}
% a5 paper
\DeclareOption{a5}{\PassOptionsToClass{a5paper}{article}% 148 x 210 mm
\setlength{\hoffset}{\fpeval{-25.4+\pageMarginVal}mm}%
\setlength{\voffset}{\fpeval{-28.4-20+\pageMarginVal}mm}
}% \DeclareOption{a5}{%
%

% 2. Handle unknown/unsupported options safely
% \DeclareOption*{%
% \PassOptionsToClass{\CurrentOption}{article}%
% OR issue a friendly warning instead of a fatal error
%\PackageWarning{\fileC}{Unknown option '\CurrentOption' ignored.}
% }
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{article}}

% 3. Set default option prior to \ProcessOptions to establish fallback behaviors
\ExecuteOptions{11pt,a4paper,a4margin}

% 4. Process the options
\ProcessOptions\relax

% 5. Load the base class
\LoadClass{article}
%-------------------------------------------------------------------------------
% endregion Provide Class
%===============================================================================

%===============================================================================
% region Packages
%-------------------------------------------------------------------------------
\RequirePackage[dvipsnames,svgnames]{xcolor}
\RequirePackage{enumitem}
\RequirePackage{array}
\RequirePackage{fancyhdr}
\RequirePackage{hyperref}
\RequirePackage{jsonparse}
%-------------------------------------------------------------------------------
% endregion Packages
%===============================================================================

%===============================================================================
% region Date
%-------------------------------------------------------------------------------
\makeatletter
\newcommand{\twodigitmonth}{\two@digits{\month}}
\newcommand{\twodigitday}{\two@digits{\day}}
\newcommand{\medReqDate}{\twodigitday/\twodigitmonth/\the\year}
\makeatother
%-------------------------------------------------------------------------------
% endregion Date
%===============================================================================

%===============================================================================
% region Colors
%-------------------------------------------------------------------------------
\definecolor{IndianRed}{HTML}{FF9933}
\definecolor{IndianGreen}{HTML}{138808}
\definecolor{IndianBlue}{HTML}{06038D}
%-------------------------------------------------------------------------------
% endregion Colors
%===============================================================================

%===============================================================================
% region Typography
%-------------------------------------------------------------------------------
\renewcommand{\familydefault}{\sfdefault}
%-------------------------------------------------------------------------------
% endregion Typography
%===============================================================================


%===============================================================================
% region Lengths
%-------------------------------------------------------------------------------
\makeatletter
\newcommand{\ptSize}{\@ptsize}%
\makeatother
%-------------------------------------------------------------------------------
\setlength{\oddsidemargin} {0mm}%
\setlength{\evensidemargin}{0mm}%
\setlength{\topmargin}     {0mm}%
\setlength{\headheight}    {\fpeval{\pageMarginVal}mm}%
\setlength{\headsep}       {5mm}%
\setlength{\footskip}      {5mm}%
\setlength{\textwidth}     {\fpeval{0.35146\paperwidth-2*\pageMarginVal}mm}%
\setlength{\textheight}    {\fpeval{0.35146\paperheight-2*\pageMarginVal}mm}%
\setlength{\pdfpagewidth}  {\paperwidth}%
\setlength{\pdfpageheight} {\paperheight}%
%-------------------------------------------------------------------------------
\setlength{\parindent}{0pt}%
\setlength{\parskip}{2mm}%
%-------------------------------------------------------------------------------
% endregion Lengths
%===============================================================================

%===============================================================================
% region \testPage
%-------------------------------------------------------------------------------
\RequirePackage{pstricks}%
\def\testPage{\psset{unit=1mm}%
\rput[l](0,-10){\psline[linewidth=4mm,linecolor=cyan](0,0)(-\pageMarginVal,0)}%
\rput[l](0,-12){\psline[linewidth=4mm,linecolor=teal](0,0)(\fpeval{0.35146\paperwidth-2*\pageMarginVal},0)}%
\rput[l](0,-14){\psline[linewidth=4mm,linecolor=blue](\fpeval{0.35146\paperwidth-2*\pageMarginVal},0)(\fpeval{0.35146\paperwidth-\pageMarginVal},0)}%
\rput[l](10,0){\psline[linewidth=4mm,linecolor=cyan](0,0)(0,\pageMarginVal)}%
\rput[l](12,0){\psline[linewidth=4mm,linecolor=teal](0,0)(0,\fpeval{-0.35146\paperheight+2*\pageMarginVal})}%
\rput[l](10,0){\psline[linewidth=4mm,linecolor=blue](0,\fpeval{-0.35146\paperheight+2*\pageMarginVal})(0,\fpeval{-0.35146\paperheight+\pageMarginVal})}%
%
\rput[l](0,-20){point size = \ptSize\ and The paper width is \the\paperwidth.}%
}% \testPage
%-------------------------------------------------------------------------------
% endregion \testPage
%===============================================================================

%===============================================================================
% region header footer
%-------------------------------------------------------------------------------
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
% \makeatletter
% \renewcommand{\sectionmark}[1]{%
% \markboth{\ifnum \c@secnumdepth>\z@\thesection\hskip 1em\relax\fi #1}{}}
% \makeatother
%-------------------------------------------------------------------------------
\fancypagestyle{fancy}{\fancyhf{}
\renewcommand{\headrulewidth}{0pt}\renewcommand{\footrulewidth}{0pt}
% \lfoot{\scriptsize{\textcopyright \the\year\ \authorCopyrightA}}
\cfoot{\footnotesize{Footer Text}}
% \rfoot{\scriptsize{\thepage}}
}
%-------------------------------------------------------------------------------
% endregion header footer
%===============================================================================

%===============================================================================
% region section spacing
% \if{0}
% \@startsection{<type>}{<level>}{<indent>}{<beforeskip>}{<afterskip>}{<style>}
\makeatletter
\renewcommand{\section}[1]{\@startsection{section}{1}{0pt}
{\parskip}{1pt}{\Large\bfseries}{\vspace*{-0.5\parskip}#1}}
%
% \renewcommand\thesection{\fontPhv{\arabic{section}}}
%
\renewcommand{\subsection}[1]{\@startsection{subsection}{2}{0pt}
{0.5\parskip}{1pt}{\large\bfseries}{\vspace*{-0.5\parskip}#1}}
%
\renewcommand{\subsubsection}[1]{\@startsection{subsubsection}{3}{0pt}
{0pt}{1pt}{\normalsize\bfseries}{\vspace*{-0.5\parskip}#1}}
%
\renewcommand{\paragraph}[1]{\@startsection{paragraph}{4}{0pt}
{0pt}{0.1\parskip}{\normalfont}{#1}}
%
\renewcommand{\subparagraph}[1]{\@startsection{subparagraph}{4}{0pt}
{0pt}{0.1\parskip}{\normalfont}{#1}}
%
% \setlength{\parskip}{10mm}%
%
%
\let\oldsection\section % Save the original \section command
\let\oldsubsection\subsection % Save the original \section command
% Define your custom starred section command
\newcommand{\mycustomstarredsection}[1]{%
\vspace*{1.4\parskip}%
\Large{{#1}}%
% \Large{#1}
% \fontNunitoL
\par%
\vspace*{0.1\parskip}\normalsize
}
%
\newcommand{\mycustomstarredsubsection}[1]{%
\vspace*{4mm}%
\Large{#1}%
% \Large{#1}
% \fontNunitoL
\par%
% \vspace*{-2mm}
\normalsize%
}


% Redefine \section to check for a star and call the appropriate command
\renewcommand{\section}{\@ifstar{\mycustomstarredsection}{\oldsection}}
\renewcommand{\subsection}{\@ifstar{\mycustomstarredsubsection}{\oldsubsection}}

%
\makeatother
% \fi
% endregion section spacing
%===============================================================================


