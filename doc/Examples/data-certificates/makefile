#===============================================================================
# File Name     : <makefile>
# Description   : GNU makefile
#-------------------------------------------------------------------------------
# Author        : Amit Manohar Manthanwar
# Mailer        : manthanwar@hotmail.com
# GitHub        : https://manthanwar.github.io/
#-------------------------------------------------------------------------------
# Copyright     : ©2024 Amit Manohar Manthanwar
# License       : LaTeX Project Public License
#===============================================================================
# GNU make also has -s, --silent, --quiet options to quieten globally
#===============================================================================
#---------------+---------+-----------------------------------------------------
# Revision Log  | Author  | Description
#---------------+---------+-----------------------------------------------------
# 27-Jun-2024   | AMM     | Initial Version
#---------------+---------+-----------------------------------------------------
#---------------+---------+-----------------------------------------------------
#---------------+---------+-----------------------------------------------------
#-------------------------------------------------------------------------------
# Usage: make runlatex file=texfilebasename -f $makefile
#===============================================================================

# file := pst-icons-water

# pass file as command line arguments
# make latex file=pst-fonts



makefile := /d/GitHub/Publications/TeXMF/scripts/makefile
dirpath  := $(shell pwd)
dirname  := $(shell basename ${dirpath})
diraux   := $(shell dirname ${file})/build
dirout   := $(shell dirname ${file})

# @date +"%Y-%m-%d %H:%M:%S"

timeStarted := $(shell date "+%s%3N")

timeElapsed:
	@stopped=$$((`date '+%s%3N'`)); \
	elapsed=$$((stopped - $(timeStarted))); \
	printf "time elapsed: %04d ms for total\n" $$elapsed

TIMES = @date '+%s%3N' > $@_time

TIMEE = @read started < $@_time ; \
stopped=$$((`date '+%s%3N'`)); \
elapsed=$$((stopped - started));\
printf "time elapsed: %04d ms for %s\n" $$elapsed "$@"; \
rm $@_time;

# TIMEE = @read started < $@_time ; stopped=$$((`date '+%s%3N'`));\
# python -c "print('time elapsed = \033[1;31m',\
# '{:6.2f}'.format(($$((stopped))-$$((started)))/1000,2)\
# ,'s \033[0m for $@')";\
# rm $@_time


.PHONY: clean cleanall

all: clean dvi ps pdf run

.PHONY: help
help: ## Display this help message.
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_0-9-]+:.*? ##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

makeFilePath: ## Display path of this makefile
	@echo $(MAKEFILE_LIST)

print: ## print variables
	@clear
	@echo dir path  = ${dirpath}
	@echo dir name  = ${dirname}
	@echo dir aux   = ${diraux}
	@echo dir out   = ${dirout}
	@echo file name = ${file}
	@echo makefile  = ${makefile}
	@echo makefileN = ${MAKEFILE_LIST}
	@echo -e unicode char '\uE0B0'

etime:
	$(TIMES)
	@# @pdflatex ${file}.tex -synctex=-1 -time-statistics
	$(TIMEE)
	@rm $@_time
	@ls

dvi: ${file}.tex ## make -f $makefile dvi file=name diraux=auxiliary-directory
	mkdir -p ${diraux}
	latex -time-statistics -output-directory=. -aux-directory=${diraux} -synctex=-1 -job-name=${file} ${file}.tex

ps: ${file}.dvi ## make -f $makefile ps file=filename-without-extension
	$(TIMES)
	@dvips -q ${file}.dvi -o ${file}.ps
	$(TIMEE)

pdf: ${file}.ps ## make -f $makefile pdf file=filename-without-extension
	$(TIMES)
	@ps2pdf -dNOSAFER -dALLOWPSTRANSPARENCY ${file}.ps ${file}.pdf
	@rm -f ${file}.ps ${file}.dvi
	$(TIMEE)

latex: ${file}.tex ## make -f $makefile latex file=filename-without-extension
	$(TIMES)
	@latex -output-directory=. -synctex=-1 -time-statistics --shell-escape ${file}.tex
	$(TIMEE)

latexDirout: ${file}.tex ## make -f $makefile latexDirout file=name dirout=name
	$(TIMES)
	@latex -output-directory=${dirout} -synctex=-1 -time-statistics --shell-escape ${file}.tex
	$(TIMEE)

bibtex: ${file} ## make -f $makefile bibtex file=filename-without-extension
	$(TIMES)
	@bibtex -terse ${file}
	$(TIMEE)

biber: ${file}.bcf ## make -f $makefile biber file=filename-without-extension
	$(TIMES)
	@biber --quiet ${file}
	$(TIMEE)

pdflatex: ${file}.tex ## make -f $makefile pdflatex file=filename
	@pdflatex ${file}.tex -synctex=-1 -interaction=batchmode -time-statistics

.PHONY: build
build:	dvi ps pdf

ls:
	@echo
	@ls --color=auto --group-directories-first -sh

clear:
	@clear

clean-latex:
	@rm -f ${file}.aux ${file}.out ${file}.log ${file}.dvi ${file}.out.ps ${file}.ps ${file}.fls ${file}.fdb_latexmk ${file}.gz ${file}.tmp ${file}.bak ${file}.nlo ${file}.nls ${file}.ilg ${file}.glg ${file}.glo ${file}.gls ${file}.glsdefs ${file}.ist ${file}.lof ${file}.lot ${file}.toc ${file}.idx ${file}.ind

clean-pdflatex: ## clean pdflatex created files
	@rm -f ${file}.aux ${file}.bcf ${file}.blg ${file}.bbl ${file}.brf ${file}.log ${file}.out ${file}.xml ${file}.xdv

cleanLatexAll:
	@rm -f *.aux *.out *.log *.dvi *.ps *.fls *.fdb_latexmk *.gz *.tmp *.bak *.nlo *.nls *.ilg *.glg *.glo *.gls *.glsdefs *.ist *.lof *.lot *.toc *.idx *.ind

cleanPdflatexAll: ## clean pdflatex created files
	@rm -f *.aux *.bcf *.blg *.bbl *.brf *.log *.out *.xml *.xdv

clean-build: clean-latex clean-pdflatex ## clean build files of latex pdflatex
	@rm -rf build ${file}.synctex

clean: clean-latex clean-pdflatex ls ## make -f $makefile clean file=filename

cleanall: clean-build ls ## make -f $makefile cleanall file=filename

nodecleanall: clean-latex ## make -f $makefile cleanall file=filename

cleanallp: clean-build ## make -f $makefile cleanall file=filename
	@rm -rf ${file}.pdf
	@ls -sh

viewpdf: ${file}.pdf ## make -f $makefile viewpdf file=filename
	@start sumatrapdf -reuse-instance ${file}.pdf &

latexbibtex: ${file}.tex ## make -f $makefile latexbibtex file=filename-no-ext
	$(TIMES)
	@rm -f ${file}.pdf
	@echo -e '\nrunning latex..'
	@latex -time-statistics -output-directory=. -quiet -synctex=-1 ${file}.tex
	@bibtex -quiet ${file}
	@echo -e '\nrunning latex 2nd time...'
	@latex -time-statistics -output-directory=. -quiet -synctex=-1 ${file}.tex
	@bibtex -quiet ${file}
	@echo -e '\nrunning latex 3rd time...'
	@latex -time-statistics -output-directory=. -quiet -synctex=-1 ${file}.tex
	$(TIMEE)

latexbiber: ${file}.tex ## make -f $makefile latexbiber file=filename
	$(TIMES)
	@rm -f ${file}.pdf
	@echo -e '\nrunning latex...'
	@latex -time-statistics -output-directory=. -quiet -synctex=-1 ${file}.tex
	@echo -e '\nrunning biber...'
	@biber ${file} -q
	@echo -e '\nrunning latex 2nd time...'
	@latex -time-statistics -output-directory=. -quiet -synctex=-1 ${file}.tex
	@echo -e '\nrunning latex 3rd time...'
	@latex -time-statistics -output-directory=. -quiet -synctex=-1 ${file}.tex
	$(TIMEE)

# makeindex: ${file}.nlo ## make -f $makefile makeindex file=filename-without-extension
# 	@makeindex ${file}.nlo -s nomencl.ist -o ${file}.nls

latexIndex: ${file}.tex ## make -f $makefile latexIndex file=filename
	$(TIMES)
	@rm -f ${file}.pdf
	@echo 'running latex...'
	@latex -time-statistics -output-directory=. -quiet -synctex=-1 ${file}.tex
	@echo 'making index...'
	@makeindex ${file}.nlo -s nomencl.ist -o ${file}.nls
	@echo 'running latex 2nd time...'
	@latex -time-statistics -output-directory=. -quiet -synctex=-1 ${file}.tex
	@echo 'running latex 3rd time...'
	@latex -time-statistics -output-directory=. -quiet -synctex=-1 ${file}.tex
	@echo 'running dvips...'
	@dvips -q ${file}.dvi -o ${file}.ps
	@echo 'running ps2pdf...'
	@ps2pdf -dNOSAFER ${file}.ps ${file}.pdf
	@echo 'starting pdf...'
	@start sumatrapdf -reuse-instance ${file}.pdf &
	$(TIMEE)


	# @echo 'making glossaries...'
	# @makeglossaries ${file}

latexIndexBiber: ${file}.tex ## make -f $makefile latexIndexBiber file=filename
	$(TIMES)
	@rm -f ${file}.pdf
	@echo 'running latex...'
	@latex -time-statistics -output-directory=. -quiet -synctex=-1 ${file}.tex
	@echo 'running makeindex...'
	@makeindex ${file}.nlo -s nomencl.ist -o ${file}.nls
	@echo 'running biber...'
	@biber ${file} -q
	@echo 'running latex 2nd time...'
	@latex -time-statistics -output-directory=. -quiet -synctex=-1 ${file}.tex
	@echo 'running latex 3rd time...'
	@latex -time-statistics -output-directory=. -quiet -synctex=-1 ${file}.tex
	$(TIMEE)

pdflatexbiber: ${file}.tex ## make -f $makefile pdflatexbiber file=filename-without-extension
	rm ${file}.pdf
	$(TIMES)
	@pdflatex ${file}.tex -synctex=-1 -quiet -time-statistics
	@biber ${file} -quiet
	@pdflatex ${file}.tex -synctex=-1 -quiet -time-statistics
	@rm ${file}.aux ${file}.bbl ${file}.bcf ${file}.blg \
	${file}.log ${file}.out ${file}.run.xml
	@code -r ${file}.pdf
	@ls
	@#@start sumatrapdf -reuse-instance ${file}.pdf &
	$(TIMEE)

n ?= 1 # number of times to run the loop

nodeNx: ${file}.tex ## run latex n times
	$(TIMES)
	@for i in $$(seq 1 ${n}); do \
		latex -interaction=batchmode -output-directory=${dirout} ${file}.tex > ${file}.log;\
	done
	$(TIMEE)

latexNx: ${file}.tex ## run latex n times
	$(TIMES)
	@for i in $$(seq 1 ${n}); do \
		echo -e "\nrunning latex $$i ...";\
		latex -time-statistics -output-directory=${dirout} -interaction=batchmode -synctex=-1 ${file}.tex;\
	done
	@echo " "
	$(TIMEE)


xelatexNx: ${file}.tex ## run xelatex n times
	@clear
	$(TIMES)
	@for i in $$(seq 1 ${n}); do \
		echo -e "\nrunning xelatex $$i time...";\
		xelatex -halt-on-error -output-directory=. -interaction=nonstopmode -synctex=-1 -time-statistics -shell-escape -output-driver="xdvipdfmx -i dvipdfmx-unsafe.cfg -q -E" ${file}.tex;\
	done
	$(TIMEE)


nodeLatexText:
	@echo "Testing..."
	@echo "file = ${file}"
	@echo "n = ${n}"


nodeLatex: nodeNx ps pdf nodecleanall timeElapsed ## make -f $makefile file=name runlatex n=2

runlatexc: cleanall ## make -f $makefile file=filename runlatexc

runlatex: latexNx ps pdf clean viewpdf ## make -f $makefile file=name runlatex n=2

runlatexx: xelatexNx clean viewpdf ## make -f $makefile file=name runlatexx n=2

runlatexb: latexbibtex ps pdf cleanall viewpdf ## latex + bibtex

runlatexbb: latexbiber ps pdf clean viewpdf ## latex + biber

# latexindex: latex makeindex latex2pdf clean viewpdf

devnag: ${file}.dn ## run devnag
	@echo "running devnag..."
	$(TIMES)
	@devnag ${file}.dn
	$(TIMEE)

runlatexdn: clear devnag runlatex

# Linux
pdfMergeX: ## make -f $makefile pdfMerge out=out.pdf file="letter.pdf cv.pdf"
	@gs -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -sOutputFile=${out} ${file}

pdfSplitX: ## make -f $makefile pfSplitX file=file out=file first=page last=page
	@gs -dNOPAUSE -dQUIET -dBATCH -sDEVICE=pdfwrite -sOutputFile=${out}.pdf -dFirstPage=${first} -dLastPage=${last} ${file}.pdf

# Windows
# Usage: make -f $makefile pdfMerge out=out.pdf file="fileA.pdf fileB.pdf"
pdfMerge: ## make -f $makefile pdfMerge out=out.pdf file="letter.pdf cv.pdf"
	@gswin64 -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -sOutputFile=${out} ${file}

pdfSplit: ## make -f $makefile pdfSplit file=file out=file first=page last=page
	@gswin64 -dNOPAUSE -dQUIET -dBATCH -sDEVICE=pdfwrite -sOutputFile=${out}.pdf -dFirstPage=${first} -dLastPage=${last} ${file}.pdf

# Short split with arguments passed as string array
pdfSplitS: ## make -f $makefile pdfSplitS file="file firstPage lastPage out"
	@gswin64 -dNOPAUSE -dQUIET -dBATCH -sDEVICE=pdfwrite -sOutputFile=$(word 4,$(file)).pdf -dFirstPage=$(word 2,$(file)) -dLastPage=$(word 3,$(file)) $(word 1,$(file)).pdf



#  ETIMEN = @read timestarteded < $@_timeNano ; \
# timestopped=$$((`date '+%s%3N'`));\
# timeelapsed=$$(($$timestopped - $$timestarteded)) ;\
# echo "started  = " $$((timestarteded));\
# echo "stopped  = " $$((timestopped));\
# echo "elapsed  = " $$((timeelapsed));\
# python -c "print('startedp =',$$((timestarteded)))";\
# python -c "print('stoppedp =',$$((timestopped)))";\
# python -c "print('elapsedp =',($$((timestopped))-$$((timestarteded)))/1000,'s')"
