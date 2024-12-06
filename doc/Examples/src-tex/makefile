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
# Usage: make -f $makefile latexrun file=texfilebasename
#===============================================================================

# file := pst-icons-water

# pass file as command line arguments
# make latex file=pst-fonts

python   := python
makefile := /d/GitHub/Publications/TeXMF/scripts/makefile
dirpath  := $(shell pwd)
dirname  := $(shell basename ${dirpath})
diraux   := $(shell dirname ${file})/build
dirout   := $(shell dirname ${file})

all: clean dvi ps pdf run


TIMES = @date '+%s%3N' > $@_time
TIMEE = @read started < $@_time ; stopped=$$((`date '+%s%3N'`));\
${python} -c "print('time elapsed = \033[1;31m',\
'{:6.2f}'.format(($$((stopped))-$$((started)))/1000,2)\
,'s \033[0m for $@')";\
rm $@_time

print:
	@clear
	@echo dir path  = ${dirpath}
	@echo dir name  = ${dirname}
	@echo dir aux   = ${diraux}
	@echo dir out   = ${dirout}
	@echo file name = ${file}
	@echo makefile  = ${makefile}
	@echo -e unicode char '\uE0B0'

latex: ${file}.tex
	$(TIMES)
	@latex -output-directory=${dirout} -quiet -synctex=-1 -time-statistics --shell-escape ${file}.tex
	$(TIMEE)

latexv: ${file}.tex
	$(TIMES)
	@latex -time-statistics --shell-escape ${file}.tex
	$(TIMEE)

dvi: ${file}.tex
	mkdir -p ${diraux}
	latex -time-statistics -output-directory=. -aux-directory=${diraux} -quiet -synctex=-1 -job-name=${file} ${file}.tex

biber: ${file}.bcf
	$(TIMES)
	@biber ${file} -quiet
	$(TIMEE)

ps: ${file}.dvi
	$(TIMES)
	@dvips -q ${file}.dvi -o ${file}.ps
	$(TIMEE)

pdf: ${file}.ps
	$(TIMES)
	@ps2pdf -dNOSAFER -dALLOWPSTRANSPARENCY ${file}.ps ${file}.pdf
	@rm -f ${file}.ps ${file}.dvi
	$(TIMEE)

pdflatex: ${file}.tex
	@pdflatex ${file}.tex -synctex=-1 -quiet -time-statistics

etime:
	$(TIMES)
	@# @pdflatex ${file}.tex -synctex=-1 -quiet -time-statistics
	$(TIMEE)
	@rm $@_time
	@ls

latexbibtex: ${file}.tex
	$(TIMES)
	rm -f ${file}.pdf
	@make clean
	latex -time-statistics -output-directory=${dirout} -quiet -synctex=-1 ${file}.tex
	bibtex ${file}
	latex -time-statistics -output-directory=. -quiet -synctex=-1 ${file}.tex
	dvips -q ${file}.dvi -o ${file}.ps
	ps2pdf -dNOSAFER -dALLOWPSTRANSPARENCY ${file}.ps ${file}.pdf
	@make clean
	@make cleanall
	@start sumatrapdf ${file}.pdf &
	$(TIMEE)

latexbiber: ${file}.tex
	$(TIMES)
	@rm -f ${file}.pdf
	@echo 'running latex...'
	@latex -time-statistics -output-directory=. -quiet -synctex=-1 ${file}.tex
	@echo 'running biber...'
	@biber ${file} -q
	@echo 'running latex 2nd time...'
	@latex -time-statistics -output-directory=. -quiet -synctex=-1 ${file}.tex
	@echo 'running latex 3rd time...'
	@latex -time-statistics -output-directory=. -quiet -synctex=-1 ${file}.tex
	@echo 'running dvips...'
	@dvips -q ${file}.dvi -o ${file}.ps
	@echo 'running ps2pdf...'
	@ps2pdf -dNOSAFER -dALLOWPSTRANSPARENCY ${file}.ps ${file}.pdf
	$(TIMEE)

# @latex -time-statistics -output-directory=. -quiet -synctex=-1 --shell-escape ${file}.tex

latex2pdf: ${file}.tex
	@clear
	$(TIMES)
	@latex -time-statistics -output-directory=${dirout} -quiet -synctex=-1 ${file}.tex
	@dvips -q ${file}.dvi -o ${file}.ps
	@ps2pdf -dNOSAFER -dALLOWPSTRANSPARENCY ${file}.ps ${file}.pdf
	$(TIMEE)

latex2pdf2x: ${file}.tex
	@clear
	$(TIMES)
	@latex -time-statistics -output-directory=${dirout} -quiet -synctex=-1 ${file}.tex
	@latex -time-statistics -output-directory=${dirout} -quiet -synctex=-1 ${file}.tex
	@dvips -q ${file}.dvi -o ${file}.ps
	@ps2pdf -dNOSAFER -dALLOWPSTRANSPARENCY ${file}.ps ${file}.pdf
	$(TIMEE)

latexrun2x: latex2pdf2x clean viewpdf

latexrun: latex2pdf clean viewpdf

latexruns: latex2pdf cleanall

biberrun: latexbiber cleanall viewpdf

pdflatexbiber: ${file}.tex
	rm ${file}.pdf
	$(TIMES)
	@pdflatex ${file}.tex -synctex=-1 -quiet -time-statistics
	@biber ${file} -quiet
	@pdflatex ${file}.tex -synctex=-1 -quiet -time-statistics
	@rm ${file}.aux ${file}.bbl ${file}.bcf ${file}.blg \
	${file}.log ${file}.out ${file}.run.xml
	@code -r ${file}.pdf
	@ls
	@#@start sumatrapdf ${file}.pdf &
	$(TIMEE)

build:	dvi ps pdf

ls:
	@ls

clean-latex:
	@rm -f *.aux *.out *.log *.dvi *.ps *.fls *.fdb_latexmk *.gz *.tmp *.bak

clean-pdflatex:
	@rm -f *.aux *.bcf *.blg *.bbl *.log *.out *.xml

clean-build: clean-latex clean-pdflatex
	@rm -rf build *.synctex

clean: clean-latex clean-pdflatex ls

cleanall: clean-build ls

viewpdf: ${file}.pdf
	@start sumatrapdf ${file}.pdf &


# code -r ${file}.pdf

# dodo:
# 	@make pdflatex
# 	@make biber
# 	@make pdflatex
# 	@make cleanall
# 	@make run
# 	@# code ${file}.pdf
# 	@# @ls

#  ETIMEN = @read timestarted < $@_timeNano ; \
# timestopped=$$((`date '+%s%3N'`));\
# timeelapsed=$$(($$timestopped - $$timestarted)) ;\
# echo "started  = " $$((timestarted));\
# echo "stopped  = " $$((timestopped));\
# echo "elapsed  = " $$((timeelapsed));\
# python -c "print('startedp =',$$((timestarted)))";\
# python -c "print('stoppedp =',$$((timestopped)))";\
# python -c "print('elapsedp =',($$((timestopped))-$$((timestarted)))/1000,'s')"
