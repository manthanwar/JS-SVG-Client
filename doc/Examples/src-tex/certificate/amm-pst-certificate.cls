%===============================================================================
% File Name     : <ammCertificate.cls>
% Description   : LaTeX Class File for creating Certificates
%-------------------------------------------------------------------------------
% Author        : Amit Manohar Manthanwar
% Office        : Pune, Maharashtra, India
% Mailer        : manthanwar@hotmail.com
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
%---------------+---------+----------------------------------------------------
%===============================================================================
%%%% DEFINE CLASS
%\ProvidePreamble
\def\filename{amm-pst-certificate}
\def\fileversion{v1.0}
\def\filedate{2025/08/02}   %should be given in the form `yyyy/mm/dd'
%-------------------------------------------------------------------------------
\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{amm-pst-certificate}[\filedate\space\fileversion\space LaTeX class]
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{article}}
\ProcessOptions\relax
\LoadClass[oneside,11pt,a4paper,landscape]{article}
%-------------------------------------------------------------------------------
% \DeclareOption*{...} in LaTeX is used within a document class or package to define how to handle options that have not been explicitly declared. Example - if a user specifies an option like 12pt in the document class, and 12pt isn't a declared option in your class, the \DeclareOption*{...} code will pass 12pt to the article class
%===============================================================================
% \listfiles% To check the versions of files used
%===============================================================================
\usepackage{amm-pst-art-university-pune}% Art Design of University of Pune
%===============================================================================
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
pdftitle = {Certificate},
pdfauthor = {Amit Manohar Manthanwar},
pdfsubject = {Document Automation using LaTeX, PostScript, JavaScript, Python},
pdfkeywords = {Vector Art, Design Intelligence, Document Automation, LaTeX, PostScript, JavaScript, Python},
pdfcreator = {LaTeX with hyperref package},
pdfproducer = {dvips + ps2pdf}}
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
% \paperwidth     = 210mm     %% 597pt     %% = 8.5in
% \paperheight    = 297mm     %% 845pt     %% = 11in
% \hoffset        = 4.6mm     %% offset for printer's left margin
% \voffset        = -5.4mm       %% offset for printer's top margin
% \oddsidemargin  = 0mm       %% Real leftmargin = 1.0 in
% \evensidemargin = 0mm       %% Real leftmargin = 1.0 in
% \topmargin      = -7mm       %% Real topmargin = (140 - 68) / 144 = 0.5in
% \headheight     = 5mm      %% Height of the header
% \headsep        = 5mm      %% Separation between header and main text
% \footskip       = 10mm      %% Separation between footer and main text
% \textheight     = 255mm     %% 9in
% \textwidth      = 160mm     %% 432pt = 6in = 152.4mm
%% Letter Paper = 8.5 x 11'' = 612 x 792 pt = 216 x 279 mm
%% A4 Paper     = 8.27 x 11.69'' = 597 x 845 pt = 210 x 297 mm
%% 72pt = 1in = 25.4mm
%\pdfpagewidth  = \paperwidth  %% Width of the PDF page to create
%\pdfpageheight = \paperheight %% Height of the PDF page to create
%-------------------------------------------------------------------------------
\paperwidth     = 297mm     %% 845pt     %% = 11in
\paperheight    = 210mm     %% 597pt     %% = 8.5in
\hoffset        = -15.4mm       %% offset for printer's left margin
\voffset        = -15.4mm       %% offset for printer's top margin
\oddsidemargin  = 0mm       %% Real leftmargin = 1.0 in
\evensidemargin = 0mm       %% Real leftmargin = 1.0 in
\topmargin      = 0mm       %% Real topmargin = (140 - 68) / 144 = 0.5in
\headheight     = 0mm      %% Height of the header
\headsep        = 0mm      %% Separation between header and main text
\footskip       = 0mm      %% Separation between footer and main text
\textwidth      = 277mm     %% 9in
\textheight     = 190mm     %% 432pt = 6in = 152.4mm
%-------------------------------------------------------------------------------
\newcommand{\testPageSize}{%
\psline[unit=1mm,linecolor=black,linewidth=4pt,origin={-20,5}](0,0)(20,0)%
\psline[unit=1mm,linecolor=blue,linewidth=4pt,origin={0,0}](0,0)(257,0)%
\psline[unit=1mm,linecolor=cyan,linewidth=4pt,origin={257,5}](0,0)(20,0)%
\psline[unit=1mm,linecolor=red,linewidth=4pt,origin={5,0}](0,0)(0,20)%
\psline[unit=1mm,linecolor=teal,linewidth=4pt,origin={0,0}](10,0)(10,-175)%
\psline[unit=1mm,linecolor=red,linewidth=4pt,origin={0,-175}](0,0)(0,-20)%
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
%-------------------------------------------------------------------------------
%===============================================================================
%===============================================================================
%-------------------------------------------------------------------------------
%===============================================================================
%-------------------------------------------------------------------------------
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

