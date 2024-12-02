%===============================================================================
% File Name     : <ammTalk.cls>
% Description   : LaTeX Class File for Presentations
%-------------------------------------------------------------------------------
% Author        : Amit Manohar Manthanwar (AMM)
% Locale        : Pune, Maharashtra, India
% Mailer        : manthanwar@hotmail.com
% Caller        : Skype: mnthanwar@hotmail.com
% Mobile        : +91.853.081.3398
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
% 14-Sep-2022   | AMM     | Initial Version of the Class
%---------------+---------+----------------------------------------------------
%---------------+---------+----------------------------------------------------
%---------------+---------+----------------------------------------------------
%===============================================================================
\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{ammTalk}[2022/04/20 Amit Manohar Manthanwar Talk]
\LoadClass[oneside,12pt]{article}
%-------------------------------------------------------------------------------
\RequirePackage{siunitx}
\RequirePackage{fancyhdr}                           % Header & Footer
\RequirePackage[dvipsnames,svgnames]{xcolor}
\RequirePackage{colortbl}
\RequirePackage{fp,xfp}
\RequirePackage{fix-cm}
\RequirePackage{amsmath,amssymb,mathrsfs,mathtools}
\RequirePackage{pstricks}
\RequirePackage{pstricks-add}
\RequirePackage{pst-all,pst-grad,pst-blur,pst-light3d,pst-3d,pst-math}
\RequirePackage{pst-slpe}
\RequirePackage{pst-hsb}
\RequirePackage{enumitem}
\RequirePackage{hyperref}
\RequirePackage{lastpage}
\RequirePackage{graphicx}
\RequirePackage{psfrag}
%\RequirePackage{epsfig}                             % for figure
%\RequirePackage{array}
%\RequirePackage{array,multirow}
%\RequirePackage{booktabs}
%\RequirePackage{hhline}
\RequirePackage{pgfmath,pgffor,pgfgantt}
\RequirePackage{qrcode}
\RequirePackage{pst-flags}
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
%-------------------------------------------------------------------------------
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
%\paperwidth     = 210mm     %% 597pt     %% = 8.5in
%\paperheight    = 297mm     %% 845pt     %% = 11in
%\oddsidemargin  = 0mm       %% Real leftmargin = 1.0 in
%\evensidemargin = 0mm       %% Real leftmargin = 1.0 in
%\topmargin      = 0mm       %% Real topmargin = (140 - 68) / 144 = 0.5in
%\hoffset        = -5.4mm    %% offset for printer's left margin
%\voffset        = -25.4mm   %% offset for printer's top margin
%\headheight     = 5mm      %% Height of the header
%\headsep        = 7mm       %% Separation between header and main text
%\footskip       = 10mm      %% Separation between footer and main text
%\textwidth      = 170mm     %% 432pt = 6in = 152.4mm
%\textheight     = 265mm     %% 10in
%-------------------------------------------------------------------------------
%\paperwidth     = 297mm     %% 597pt     %% = 8.5in
\paperwidth     = 374mm     %% 597pt     %% = 8.5in
\paperheight    = 210mm     %% 845pt     %% = 11in
\oddsidemargin  = 0mm       %% Real leftmargin = 1.0 in
\evensidemargin = 0mm       %% Real leftmargin = 1.0 in
\topmargin      = 10mm       %% Real topmargin = (140 - 68) / 144 = 0.5in
\hoffset        = -5.4mm    %% offset for printer's left margin
\voffset        = -27.4mm   %% offset for printer's top margin
\headheight     = 5mm      %% Height of the header
\headsep        = 15mm       %% Separation between header and main text
\footskip       = 10mm      %% Separation between footer and main text
%\textwidth      = 257mm     %% 432pt = 6in = 152.4mm
\textwidth      = 334mm     %% 432pt = 6in = 152.4mm
\textheight     = 166mm     %% 10in
%-------------------------------------------------------------------------------
\pdfpagewidth  = \paperwidth  %% Width of the PDF page to create
\pdfpageheight = \paperheight %% Height of the PDF page to create
%-------------------------------------------------------------------------------
%% Letter Paper = 8.5 x 11'' = 612 x 792 pt
%% A4 Paper     = 8.27 x 11.69'' = 597 x 845 pt = 210 x 297 mm
%% 72pt = 1in = 25.4mm
%===============================================================================
\definecolor{teal}{rgb}{0.0, 0.5, 0.5}
\definecolor{TealLight}{rgb}{0.0, 0.5, 0.5}
\definecolor{ICBlueLight}{rgb}{0.402, 0.603, 0.787}
\definecolor{ICBlueDark}{rgb}{0, 0.273, 0.498}
\definecolor{AOrange}{rgb}{1,0.5,0.1}
\definecolor{Brown}{cmyk}{0, 0.8, 1, 0.6}
\definecolor{ABrown}{rgb}{0.7, 0.6, 0.5}
%\definecolor{ABrownDark}{rgb}{0.6, 0.4, 0.2}
\definecolor{ABrownDark}{rgb}{0.5, 0.4, 0.2}
%\definecolor{ABrownDark}{rgb}{0.4, 0.3, 0.2}
\definecolor{slcolor}{HTML}{882B21}
%===============================================================================
%-------------------------------------------------------------------------------
%===============================================================================
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
  citecolor   = ICBlueDark,
  urlcolor    = ICBlueDark,
  pdfpagemode = FullScreen
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
\renewcommand{\familydefault}{\sfdefault}
%\renewcommand{\familydefault}{phv}
%\renewcommand{\familydefault}{pag}
%\newcommand*{\myfont}{\fontfamily{<familyname>}\selectfont}
%\newcommand*{\fontRoman}{\fontfamily{cmr}\selectfont}
%\renewcommand{\familydefault}{cmr}
%\renewcommand{\sfdefault}{cmr}
%\fontRoman
%-------------------------------------------------------------------------------
\makeatletter
\newcommand\HUGE{\@setfontsize\Huge{50}{60}}
%\newcommand\sTitle{\@setfontsize\Huge{25}{30}}
\newcommand\titleSize{\@setfontsize\Huge{27}{30}}
\makeatother
%-------------------------------------------------------------------------------
%\fontsize{61}{160}\usefont{OT1}{cmss}{m}{n}{Amit M. Manthanwar}
%\fontsize{61}{160}\usefont{OT1}{cmr}{m}{n}{Amit M. Manthanwar}
%===============================================================================
\newcommand{\psCopyright}[1]{%
  \pscircle[unit=1pt,linewidth=0.6pt,linecolor=teal]
  (3.4,2.8){4} \scriptsize{C} #1}
%-------------------------------------------------------------------------------
\newcommand{\slideBox}{
  \psset{unit=1mm,linestyle=none,fillstyle=gradient,gradmidpoint=0.5}
  \psset{gradbegin=gray!16,gradend=white}
  \pscustom{
    \psframe(0.4,-4)(333.4,11)
    \pswedge(1,-3.9){14.9}{90}{180}
    \pswedge(333,-3.9){14.9}{0}{90}}
  \pscustom{
    \psframe(-8.2,-192)(341.2,-184.96)
    \pswedge(-8,-185.1){6.9}{180}{270}
    \pswedge(341,-185.1){6.9}{270}{0}}
}
%-------------------------------------------------------------------------------
\newcommand{\slideTitleA}[1]{\clearpage\lhead{\slideBox
    \bfseries{\textcolor{teal}{\titleSize{#1}}}}}
%-------------------------------------------------------------------------------
\newcommand{\slideTitle}[1]{\clearpage\lhead{\bfseries{\textcolor{teal}{\titleSize{#1}}}}}
%-------------------------------------------------------------------------------
\newcommand{\confidential}[1]{\cfoot{\textcolor{black!80}{\footnotesize{#1}}}}
\newcommand{\copyAuth}{Manthanwar}
\newcommand{\copyYear}{\the\year}
\newcommand{\copyrightSymbol}{\textcopyright}
%-------------------------------------------------------------------------------
% Redefine plain page style
\fancypagestyle{slideDesign}{
  \fancyhf{}
  \slideTitle{Talk Title}
  \chead{
    %\psline[unit=1mm,linecolor=ABrown,linewidth=2mm,origin={-150,15}](0,0)(300,0)
  }
  \rhead{\rput(-2.8,-1.3){\psLogoJapanLady[iconWidth=14]}}
  % \lfoot{\textcolor{teal}{\psCopyright{\copyYear} \textsf{\copyAuth}}}
  % \rfoot{\large{\thepage}}
  \lfoot{\psframe[fillstyle=solid,fillcolor=teal,linestyle=none](-2,-1)(37,0.3)%
    \textcolor{white}{\\[-2mm]\textbf{\textcopyright\copyYear\ \textsf{\copyAuth}}}}
  \rfoot{\textcolor{white}{\\[-2mm]\textbf{\thepage}}}
  \confidential{Confidential}
  \renewcommand{\headrulewidth}{0pt}
  \renewcommand{\footrulewidth}{0pt}}
%-------------------------------------------------------------------------------
% Redefine plain page style
\fancypagestyle{contact}{\fancyhf{}
  \lfoot{\psframe[fillstyle=solid,fillcolor=teal,linestyle=none](-2,-1)(37,0.3)}
  \renewcommand{\headrulewidth}{0pt}
  \renewcommand{\footrulewidth}{0pt}}
%-------------------------------------------------------------------------------
% Redefine plain page style
\fancypagestyle{plain}{\fancyhf{}
  \renewcommand{\headrulewidth}{0pt}
  \renewcommand{\footrulewidth}{0pt}}



%-------------------------------------------------------------------------------
% Redefine plain page style
\fancypagestyle{fancy}{
  \fancyhf{}
  \lhead{}
  \chead{}
  \rhead{}
  \lfoot{}
  \cfoot{}
  \rfoot{\bfseries{\textcolor{red}{\thepage}}}
  \renewcommand{\headrulewidth}{0pt}
  \renewcommand{\footrulewidth}{0pt}
}
%===============================================================================
\setlength{\parindent}{0pt}
\setlength{\parskip}{10pt}
%\setlength{\baselineskip}{30pt}
%-------------------------------------------------------------------------------
%\raggedbottom
%===============================================================================
\newcommand{\talkPart}{A \LaTeX{} Presentation Template}
\newcommand{\talkHead}{Manthanwar Science and Technology Research}
\newcommand{\talkName}{Sub Heading}
\newcommand{\talkHost}{Imperial College London}
\newcommand{\talkDate}{26 June 2022}
\newcommand{\talkNote}{Virtual meeting with Princeton University}
\newcommand{\talkLine}{111mm}
%===============================================================================
\title{\rput(-2,0.5){\psLogoJapanLady[iconWidth=20]}\\[0mm]\Huge{\textcolor{teal}{\textbf{\textcolor{ICBlueDark}\talkPart\\[0mm]
{\textcolor{ABrown}{\rule[2mm]{\talkLine}{0.1mm}}}
{\textcolor{ABrown}{$\star$}}
{\textcolor{ABrown}{$\star$}}
{\textcolor{ABrown}{$\star$}}
{\textcolor{ABrown}{\rule[2mm]{\talkLine}{0.1mm}}}\\[4mm]
\fontsize{40}{33}\usefont{OT1}{pbk}{m}{n}{\textbf{\talkHead}}}}}\\[20mm]}

\date{\textcolor{Black}{\\[10mm]%
    \textcolor{teal}{\Large{\talkName}}\\[2mm]%
    \textcolor{ICBlueDark}{\talkHost}}\\[2mm]%
  \textcolor{black!80}{\small{\talkNote}}\\[2mm]%
  \textcolor{black!80}{\small{\talkDate}}%
}
%===============================================================================
\setlist[itemize,1]{label={\psBall(-0.2,0.2){teal}{0.16}},
  leftmargin=15mm,itemindent=0mm,labelsep=5mm,before=\LARGE}
\setlist[itemize,2]{label={\psBall(-0.2,0.2){ABrown}{0.14}},
  leftmargin=8mm,itemindent=0mm,labelsep=5mm,before=\Large\normalfont}%
\setlist[enumerate,1]{label=\arabic*}%,labelsep=4mm}%,itemindent=4mm}%,font=\Large\sffamily\bfseries}
\setlist[enumerate,2]{label=\arabic*,
  labelsep=34mm,itemindent=4mm,font=\Large\sffamily\bfseries}

%-------------------------------------------------------------------------------
%\renewcommand{\labelitemi}{$\circ$}
\renewcommand{\labelitemi}{\pscircle[unit=1mm,origin={-1.6,1.6},
    linestyle=none,fillstyle=ccslope,
    slopebegin=red!10,slopeend=ABrown](0,0){1.6}}
%-------------------------------------------------------------------------------
\renewcommand{\labelitemii}{$\circ$}
%\renewcommand{\labelitemiii}{$\diamond$}
%-------------------------------------------------------------------------------
\renewcommand{\labelitemiii}{\raisebox{2pt}{\tiny$\blacksquare$}}
%\renewcommand{\labelitemiv}{$\circ$}
%\item[\textcolor{red}{\raisebox{2pt}{\tiny$\blacksquare$}}] Article
%===============================================================================
% Compact list (assuming paragraph indent is 1.25cm)
\newenvironment{listI}{
  \begin{LARGE}
    \begin{list}{{\psBall(-0.2,0.2){teal}{1.6mm}}}{
        \setlength{\partopsep}{0pt}
        \setlength{\parskip}{0pt}
        \setlength{\parsep}{0pt}
        \setlength{\topsep}{0pt}
        \setlength{\itemsep}{10pt}
        \setlength{\labelsep}{5mm} % horizontal space from bullet to text (as needed)
        \setlength{\itemindent}{15mm} % summary indentation: par 1.25cm + bullet 0.63 + magic number picked empirically (0.25cm)
        \setlength{\leftmargin}{0pt} % reset margin so that only first line of list item indented
      }
      }{
    \end{list}
  \end{LARGE}
}
%-------------------------------------------------------------------------------
\newenvironment{listII}{
  \begin{Large}
    \begin{list}{{\psBall(-0.2,0.2){ABrown}{1.4mm}}}{
        \setlength{\partopsep}{0pt}
        \setlength{\parskip}{0pt}
        \setlength{\parsep}{0pt}
        \setlength{\topsep}{5pt}
        \setlength{\itemsep}{5pt}
        \setlength{\labelsep}{4mm} % horizontal space from bullet to text (as needed)
        \setlength{\itemindent}{24mm}
        % summary indentation: par 1.25cm + bullet 0.63 + magic number picked empirically (0.25cm)
        \setlength{\leftmargin}{0pt} % reset margin so that only first line of list item indented
      }
      }{
    \end{list}
  \end{Large}
}
%-------------------------------------------------------------------------------
\newenvironment{listNI}{
  \begin{LARGE}
    \begin{enumerate}
      \setlength{\partopsep}{0pt}
      \setlength{\parskip}{0pt}
      \setlength{\parsep}{0pt}
      \setlength{\topsep}{0pt}
      \setlength{\itemsep}{10pt}
      \setlength{\labelsep}{5mm}
      \setlength{\itemindent}{4.5mm}
      \setlength{\leftmargin}{0pt}
      }{
    \end{enumerate}
  \end{LARGE}
}
%-------------------------------------------------------------------------------
\newenvironment{listNII}{
  \begin{Large}
    \begin{enumerate}[label=\alph*.]
      \setlength{\partopsep}{0pt}
      \setlength{\parskip}{0pt}
      \setlength{\parsep}{0pt}
      \setlength{\topsep}{10pt}
      \setlength{\itemsep}{5pt}
      \setlength{\labelsep}{4mm}
      \setlength{\itemindent}{4.5mm}
      \setlength{\leftmargin}{0pt}
      }{
    \end{enumerate}
  \end{Large}
}
%===============================================================================
% Case Statements
\makeatletter
\newcommand\defcase[1]{\@namedef{mycase@\the\numexpr#1\relax}}
\newcommand\myswitch[1]{\@nameuse{mycase@\the\numexpr#1\relax}}
\makeatother
% % Define cases:
% \defcase{0}{code for case 0}
% \defcase{1}{code for case 1}
% \defcase{2}{code for case 2}
% \defcase{3}{...}

% \begin{document}
% % Usage
% \myswitch{1}
% % \myswitch{some integer expression}


%-------------------------------------------------------------------------------
%==============================================================================


% Slide Height
% \rput(0,1.5){\psline[linewidth=2mm](0,0)(0,-18.5)}
% \rput(2,0){\psline[linewidth=2mm](0,0)(0,-15.5)}
