%===============================================================================
% File Name     : amm-pst-invoice.cls
% Description   : LaTeX Class File for creating Invoices
%-------------------------------------------------------------------------------
% Author        : Amit Manohar Manthanwar
% Office        : Pune, Maharashtra, India
% WebURL        : https://github.com/manthanwar
%-------------------------------------------------------------------------------
% Copyright     : �2025 Amit Manohar Manthanwar
% License       : Restricted Copyleft
%===============================================================================
%---------------+---------+----------------------------------------------------
% Revision Log  | Author  | Description
%---------------+---------+----------------------------------------------------
% 02-Aug-2025   | AMM     | Initial Version
%---------------+---------+----------------------------------------------------
% 26-Oct-2025   | AMM     | Invoice created
%---------------+---------+----------------------------------------------------
%---------------+---------+----------------------------------------------------
%===============================================================================
%%%% DEFINE CLASS
%\ProvidePreamble
\def\filename{amm-pst-invoice}
\def\fileVersion{v1.0}
\def\fileDate{2025/08/02}   %should be given in the form `yyyy/mm/dd'
%-------------------------------------------------------------------------------
\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{amm-pst-invoice}[\fileDate\space\fileVersion\space LaTeX class]
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{article}}
\ProcessOptions\relax
\LoadClass[oneside,11pt,a4paper,landscape]{article}
%-------------------------------------------------------------------------------
%===============================================================================
% \listfiles% To check the versions of files used
%===============================================================================
%===============================================================================
\usepackage{../src-tex/pst-art-logo}% psLogoJapanLady
\renewcommand{\familydefault}{\sfdefault}
%===============================================================================
%===============================================================================
\RequirePackage{enumitem}
\RequirePackage{amsmath,amsthm,amssymb,amsfonts}
\RequirePackage{fp,xfp} %floating point arithmatic
\RequirePackage{textcomp}               % Copyleft Symbol
\RequirePackage{fix-cm}             % Huge font size
\RequirePackage[svgnames,dvipsnames]{xcolor}
\RequirePackage{colortbl}               % for color table
\RequirePackage[dvips,ps2pdf]{hyperref} % Click and Go hyperlings
\RequirePackage{bookmark}
% \RequirePackage{epsfig}                             % for figure
\RequirePackage{graphicx}
\RequirePackage{psfrag}                             % Text over graphics
\RequirePackage{pst-all,pst-grad,pst-blur,pst-light3d,pst-3d}
\RequirePackage{ifthen}                 %
\RequirePackage{qrcode}
%\RequirePackage{devanagari}
%===============================================================================
%-------------------------------------------------------------------------------
\hypersetup{%backref,
% bookmarks=true,
% bookmarksnumbered=true,
% bookmarksopen=true,
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
pdftitle = {Invoice},
pdfauthor = {Amit Manohar Manthanwar},
pdfsubject = {Document Automation using LaTeX, PostScript, JavaScript, Python},
pdfkeywords = {Vector Art, Design Intelligence, Document Automation, LaTeX, PostScript, JavaScript, Python},
pdfproducer={Amit M. Manthanwar using LaTeX},
pdfcreator={Amit M. Manthanwar using latex + dvips + ps2pdf}
% pdfcreator = {LaTeX with hyperref package},
% pdfproducer = {dvips + ps2pdf}
}
%===============================================================================
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
%% Letter Paper = 8.5 x 11'' = 612 x 792 pt = 216 x 279 mm
%% A4 Paper     = 8.27 x 11.69'' = 597 x 845 pt = 210 x 297 mm
%% 72pt = 1in = 25.4mm
%\pdfpagewidth  = \paperwidth  %% Width of the PDF page to create
%\pdfpageheight = \paperheight %% Height of the PDF page to create
%-------------------------------------------------------------------------------
\newcommand{\testPageSize}{%
\psline[unit=1mm,linecolor=black,linewidth=4pt,origin={-20,10}](0,0)(20,0)%
\psline[unit=1mm,linecolor=black,linewidth=4pt,origin={170,10}](0,0)(20,0)%
\psline[unit=1mm,linecolor=blue,linewidth=4pt,origin={0,0}](0,0)(170,0)%
\psline[unit=1mm,linecolor=red,linewidth=4pt,origin={0,0}](0,0)(0,-20)%
\psline[unit=1mm,linecolor=teal,linewidth=4pt,origin={0,0}](0,0)(0,260)%
\psline[unit=1mm,linecolor=blue,linewidth=4pt,origin={10,260}](0,0)(0,20)%
}
%===============================================================================
\setlength{\parindent}{0pt}
\setlength{\parskip}{0pt}
\thispagestyle{empty}
\pagestyle{empty}
%-------------------------------------------------------------------------------
\raggedbottom
%===============================================================================
\newcolumntype{L}[1]{>{\raggedright\let\newline\\\arraybackslash\hspace{0pt}}p{#1}}
\newcolumntype{C}[1]{>{\centering\let\newline\\\arraybackslash\hspace{0pt}}p{#1}}
\newcolumntype{R}[1]{>{\raggedleft\let\newline\\\arraybackslash\hspace{0pt}}p{#1}}

% \newcolumntype{E}{@{}m{0pt}@{}}
% \newcolumntype{M}[1]{>{\centering\arraybackslash}m{#1}}
% \newcolumntype{L}[1]{>{\raggedright\arraybackslash}p{#1}}
% \newcolumntype{R}[1]{>{\raggedleft\arraybackslash}p{#1}}
% % \newcolumntype{N}[1]{>{\raggedleft\arraybackslash}p{#1}}
% \newcolumntype{N}[2]{S[table-column-width=#1,table-format=#2]} % S column with fixed width
% \newcolumntype{?}[2]{!{\color{#1}{\vrule width #2}}}

%-------------------------------------------------------------------------------
%===============================================================================
\def\monthName{\ifcase\month\or January\or February\or March\or April\or May\or June\or July\or August\or September\or October\or November\or December\fi}%
%===============================================================================


%-------------------------------------------------------------------------------
%===============================================================================
%===============================================================================
%===============================================================================
%-------------------------------------------------------------------------------
%-------------------------------------------------------------------------------
%-------------------------------------------------------------------------------
%===============================================================================
%===============================================================================
%===============================================================================
%-------------------------------------------------------------------------------
%===============================================================================
%-------------------------------------------------------------------------------
\makeatletter
\makeatother
%========================================================================
%-------------------------------------------------------------------------------
%========================================================================
%===============================================================================
%===============================================================================
%===============================================================================
%===============================================================================
%===============================================================================
%===============================================================================
%===============================================================================
%===============================================================================
%===============================================================================
%===============================================================================
%===============================================================================
%===============================================================================
%===============================================================================
%===============================================================================
%===============================================================================

