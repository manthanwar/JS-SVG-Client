#! /c/Users/amit/AppData/Local/Programs/Python/Python312/python
#! /usr/bin/env python3
# ==============================================================================
# File Name     : <CreateTexFromExcel.py>
# Description   : Convert excel file into latexFile tables for EU proposal
# ------------------------------------------------------------------------------
# Author        : Amit Manohar Manthanwar
# Mailer        : manthanwar@hotmail.com
# GitHub        : https://manthanwar.github.io/
# ------------------------------------------------------------------------------
# Copyright     : ©2025 Amit Manohar Manthanwar
# License       : Ristricted
# ==============================================================================
# Revision Log | Author  | Description
# -------------+---------+------------------------------------------------------
# 25-Apr-2022  | AMM     | Initial Version
# -------------+---------+------------------------------------------------------
# 27-JUl-2025  | AMM     | Added excel2latex package with this class module
# -------------+---------+------------------------------------------------------
# 30-JUl-2025  | AMM     | Completed all tables of EU RIA Proposal
# -------------+---------+------------------------------------------------------
# -------------+---------+------------------------------------------------------
# -------------+---------+------------------------------------------------------
# -------------+---------+------------------------------------------------------
# ------------------------------------------------------------------------------
# List of Tables for EU Research Innovation Action Proposal
# Table 3.1a: List of work packages
# Table 3.1b: Work package description
# Table 3.1c: List of Deliverables
# Table 3.1d: List of milestones
# Table 3.1e: Critical risks for implementation
# Table 3.1f: Summary of staff effort
# Table 3.1g: Subcontracting costs
# Table 3.1h: Purchase costs
# Table 3.1i: Other costs categories
# Table 3.1j: In-kind contributions
# ==============================================================================

import os
import sys
import subprocess
import pandas as pd

# code = open in vscode editor with command: code filename


class CreateTexFromExcel:
    def __init__(self, excelFile='Tables/tables.xlsx', outFolder='Tables'):
        self.packageName = "excel2tex"
        self.moduleName = "excel2tex"
        self.className = "CreateTexFromExcel"
        self.version = "1.0.0"
        self.excelFile = excelFile
        self.outFolder = outFolder
        self.sheetNames = pd.ExcelFile(excelFile).sheet_names
        self.sheetCount = len(self.sheetNames)

    def greet(self):
        return print(f"Hello, {self.className}!")

    def printSheets(self):
        return print(*self.sheetNames, sep='\n')

    def code(self, latex='Tables/table-call.tex'):
        cmd = 'code ' + latex
        result_shell = subprocess.run(
            cmd, shell=True, capture_output=True, text=True)
        print("STDOUT (shell):", result_shell.stdout)

    def latexFile(self, sheet):
        return self.outFolder + 'table-' + sheet.lower() + '.tex'

    def printSuccess(self, latex, code):
        print(r'Created \input{' + latex + '}')
        self.code(latex) if code >= 1 else ""

    def writeFile(self, latex, texLines, code):
        f = open(latex, 'w', encoding='utf-8')
        print(texLines, file=f)
        f.close()
        self.printSuccess(latex, code)

    def call(self, sheet='Call', code=0):
        latex = self.outFolder + '/table-' + sheet.lower() + '.tex'
        df = pd.read_excel(io=self.excelFile, sheet_name=sheet)
        agency = df.iloc[0, 1]
        callLink = df.iloc[1, 1]
        topicTitle = df.iloc[2, 1]
        topicID = df.iloc[3, 1]
        deadline = df.iloc[4, 1]
        projectID = df.iloc[5, 1]
        acronym = df.iloc[6, 1]
        title = df.iloc[7, 1]
        subtitle = df.iloc[8, 1]

        # print('agency     = ' + agency)
        # print('callLink   = ' + callLink)
        # print('topicTitle = ' + topicTitle)
        # print('topicID    = ' + topicID)
        # print('deadline   = ' + deadline)
        # print('projectID  = ' + projectID)
        # print('acronym    = ' + acronym)
        # print('title      = ' + title)
        # print('subtitle   = ' + subtitle)

        texCallRef = r'\renewcommand{\callRef}{\href{' + \
            callLink + r'}{\textcolor{black}{' + str(topicID) + '}}}'
        texPropIdn = r'\renewcommand{\propIdn}{' + str(projectID) + '}'
        texAcronym = r'\renewcommand{\acronym}{' + str(acronym) + '}'
        texProject = r'\renewcommand{\project}{\Large{' + str(title) + \
            r'}\\[2mm] \large{\textrm{' + str(subtitle) + r'}}\\[2mm]}'
        texLines = texCallRef + '\n' + texPropIdn + \
            '\n' + texAcronym + '\n' + texProject

        # f = open(latex, 'w', encoding='utf-8')
        # print(texLines, file=f)
        # f.close()
        self.writeFile(latex, texLines, code)

    def participants(self, sheet='Participants', code=0):
        latex = self.outFolder + '/table-' + sheet.lower() + '.tex'
        df = pd.read_excel(io=self.excelFile, sheet_name=sheet)
        texLines = '\\tableParticipants{%\n'
        for i in df.index:
            texLines += str(df.iloc[i, 0]) + ' & ' + df.iloc[i, 1] + ' & ' + \
                df.iloc[i, 2] + ' & ' + df.iloc[i, 3] + ' & ' + df.iloc[i, 4]
            if i < len(df)-1:
                texLines += '\\\\\n'

        texLines += '\n}'
        self.writeFile(latex, texLines, code)

    def biography(self, sheet='Biography', code=0):
        latex = self.outFolder + '/sec-' + sheet.lower() + '.tex'
        df = pd.read_excel(io=self.excelFile, sheet_name=sheet)
        texLines = ''
        for i in df.index:
            texLines += '\\item \\textbf{' + \
                df.iloc[i, 0] + ':} ' + df.iloc[i, 1] + '\n'
        self.writeFile(latex, texLines, code)

    def abstract(self, sheet='Abstract', code=0):
        latex = self.outFolder + '/sec-' + sheet.lower() + '.tex'
        df = pd.read_excel(io=self.excelFile, sheet_name=sheet)
        abstract = df.iloc[0, 0]
        texLines = r'\section{Executive Summary}' + '\n' + abstract
        self.writeFile(latex, texLines, code)

    def impactSummary(self, sheet='Needs', code=0):
        latex = self.outFolder + '/sec-impact-summary-' + sheet.lower() + '.tex'
        df = pd.read_excel(io=self.excelFile, sheet_name=sheet)
        texLines = ''
        for i in df.index:
            texLines += '\\item ' + df.iloc[i, 1] + '\n'
        self.writeFile(latex, texLines, code)

    def wp_List(self, sheet='WPs', code=0):
        latex = self.outFolder + '/tab-' + sheet.lower() + '.tex'
        df = pd.read_excel(io=self.excelFile, sheet_name=sheet)
        texLines = '\\tableListOfWPs{%\n'
        for i in df.index:
            texLines += 'WP' + \
                str(df.iloc[i]['WP']) + ' & ' + \
                str(df.iloc[i]['Title']) + ' & ' + \
                str(df.iloc[i]['Lead Participant No']) + ' & ' + \
                str(df.iloc[i]['Lead Participant Short Name']) + ' & ' + \
                str(df.iloc[i]['Person Months']) + ' & ' + \
                str(df.iloc[i]['Start Month']) + ' & ' + \
                str(df.iloc[i]['End Month'])
            if i < len(df)-1:
                texLines += '\n\\\\\\hline\n'
            else:
                texLines += '\n\\\\\n'
        texLines += '}{' + str(int(df.iloc[0, 8])) + '}'
        self.writeFile(latex, texLines, code)

    def wp_Table(self, noTeams, noWPs, code=0):
        df = pd.read_excel(io=self.excelFile, sheet_name='Efforts')
        df2 = pd.read_excel(io=self.excelFile, sheet_name='WPs')

        for wpn in range(1, noWPs+1):
            wp = 'WP' + str(wpn)
            wpTitle = df2.iloc[wpn-1]['Title']
            wpLead = df.iloc[noTeams+2][wp]
            efforts = df.iloc[noTeams+3][wp]
            startMon = df.iloc[noTeams+4][wp]
            finalMon = df.iloc[noTeams+5][wp]

            teamNam = []
            teamNum = []
            teamMon = []

            for i in range(6):
                teamNum.append('')
                teamNam.append('')
                teamMon.append('')

            n = 0
            for i in range(noTeams):
                if not pd.isna(df.iloc[i][wp]):
                    teamNum[n] = int(df.iloc[i]['No'])
                    teamNam[n] = df.iloc[i]['Acronym']
                    teamMon[n] = int(df.iloc[i][wp])
                    n = n + 1

            texLines = '\\tableWorkPackage[%' + '\n' + \
                'wpTitle=' + wpTitle + ',%' + '\n' + \
                'wpTeamLead=' + wpLead + ',%' + '\n' + \
                'wpTeamAnum=' + str(teamNum[0]) + ',%' + '\n' + \
                'wpTeamBnum=' + str(teamNum[1]) + ',%' + '\n' + \
                'wpTeamCnum=' + str(teamNum[2]) + ',%' + '\n' + \
                'wpTeamDnum=' + str(teamNum[3]) + ',%' + '\n' + \
                'wpTeamEnum=' + str(teamNum[4]) + ',%' + '\n' + \
                'wpTeamFnum=' + str(teamNum[5]) + ',%' + '\n' + \
                'wpTeamAnam=' + teamNam[0] + ',%' + '\n' + \
                'wpTeamBnam=' + teamNam[1] + ',%' + '\n' + \
                'wpTeamCnam=' + teamNam[2] + ',%' + '\n' + \
                'wpTeamDnam=' + teamNam[3] + ',%' + '\n' + \
                'wpTeamEnam=' + teamNam[4] + ',%' + '\n' + \
                'wpTeamFnam=' + teamNam[5] + ',%' + '\n' + \
                'wpTeamAMon=' + str(teamMon[0]) + ',%' + '\n' + \
                'wpTeamBMon=' + str(teamMon[1]) + ',%' + '\n' + \
                'wpTeamCMon=' + str(teamMon[2]) + ',%' + '\n' + \
                'wpTeamDMon=' + str(teamMon[3]) + ',%' + '\n' + \
                'wpTeamEMon=' + str(teamMon[4]) + ',%' + '\n' + \
                'wpTeamFMon=' + str(teamMon[5]) + ',%' + '\n' + \
                'wpStartMon=' + str(startMon) + ',%' + '\n' + \
                'wpFinalMon=' + str(finalMon) + '%\n]'

            latex = self.outFolder + '/tab-wp-' + str(wpn) + '.tex'
            self.writeFile(latex, texLines, code)

    def rm_Objectives(self):
        for i in range(1, 7):
            fn = self.outFolder + '/wp' + str(i) + '-objectives.tex'
            if os.path.exists(fn):
                os.remove(fn)

    def wp_Objectives(self, sheet='WPs', code=0):
        df = pd.read_excel(io=self.excelFile, sheet_name=sheet)
        df = df.fillna('')
        df = df.sort_values(by=['WP'])
        for i in df.index:
            fn = self.outFolder + '/sec-wp-' + str(i+1) + '-objectives.tex'
            fw = open(fn, 'w', encoding='utf-8')
            texLines = '\\textbf{Objectives}\\\\\n'
            texLines += str(df.iloc[i]['Objectives'])
            texLines += '\n\\par\n'
            print(texLines, file=fw)
            fw.close()
            print(r'Created \input{' + fn + '}')
            self.code(latex=fn) if code == 1 else ''

    def wp_Tasks(self, sheet='Tasks', code=0):
        df = pd.read_excel(io=self.excelFile, sheet_name=sheet)
        df = df.fillna('')
        df = df.sort_values(by=['Task'])

        for j in range(1, max(df[:]['WP'])+1):
            fn = self.outFolder + '/sec-wp-' + str(j) + '-tasks.tex'
            fw = open(fn, 'w', encoding='utf-8')
            texLines = '\\textbf{Description of work}\\\\\n'
            for i in df.index:
                if df.iloc[i]['WP'] == j:
                    deliverables = ''
                    for n in range(1, int(df.iloc[i]['Deliverables']) + 1):
                        if n == int(df.iloc[i]['Deliverables']):
                            deliverables += 'D' + str(n)
                        else:
                            deliverables += 'D' + str(n) + ', '

                    milestones = ''
                    for m in range(1, int(df.iloc[i]['Milestones']) + 1):
                        if m == int(df.iloc[i]['Milestones']):
                            milestones += 'M' + str(m)
                        else:
                            milestones += 'M' + str(m) + ', '

                    texLines += '\\task{' + \
                        str(df.iloc[i]['Task']) + '}{' + \
                        deliverables + '}{' + \
                        milestones + '}{' + \
                        str(df.iloc[i]['Title']) + '}{' + \
                        str(df.iloc[i]['Lead']) + '}{' + \
                        str(df.iloc[i]['Collaborators']) + '}{' + \
                        str(df.iloc[i]['Start']) + '}{' + \
                        str(df.iloc[i]['End']) + '}\\\\' + '\n'
                    texLines += df.iloc[i]['Description'] + '\n\n'

            print(texLines, file=fw)
            fw.close()
            print(r'Created \input{' + fn + '}')
            self.code(latex=fn) if code == 1 else ''

    def wp_Description(self, noWPs=5, code=0):
        texLines = r'\addtocounter{subsubsection}{-1}' + '\n'
        texLines += r'\subsubsection{List of Work Packages}' + '\n'
        texLines += '% Table 3-2-a List of work packages' + '\n\n'
        texLines += r'\input{Tables/tab-wps.tex}' + '\n\n'
        texLines += '% Table 3-2-b Description of Work packages' + '\n'
        for wpn in range(1, noWPs+1):
            texLines += r'\input{Tables/tab-wp-' + str(wpn) + '.tex}\n'
            texLines += r'\input{Tables/sec-wp-' + \
                str(wpn) + '-objectives.tex}\n'
            texLines += r'\input{Tables/sec-wp-' + str(wpn) + '-tasks.tex}\n'
            texLines += r'\input{Tables/sec-wp-' + \
                str(wpn) + '-deliverables.tex}\n'
            texLines += r'\input{Tables/sec-wp-' + \
                str(wpn) + '-milestones.tex}\n'
            texLines += '\n'

        texLines += '% Table 3-2-c List of deliverables' + '\n'
        texLines += r'\input{Tables/tab-list-of-deliverables.tex}' + '\n\n'
        texLines += '% Table 3-2-d List of Milestones' + '\n'
        texLines += r'\input{Tables/tab-list-of-milestones.tex}' + '\n\n'
        texLines += '% Table 3-2-e List of Risks' + '\n'
        texLines += r'\input{Tables/tab-list-of-risks.tex}' + '\n\n'
        texLines += '% Table 3-2-f Person Months' + '\n'
        texLines += r'\input{Tables/tab-efforts.tex}' + '\n\n'
        texLines += '% Table 3-2-f-b Justification of Efforts' + '\n'
        texLines += r'\input{Tables/tab-efforts-justification.tex}' + '\n'

        latex = self.outFolder + '/sec-wp-description.tex'
        self.writeFile(latex, texLines, code)

    def wp_Deliverables(self, sheet='Deliverables', code=0):
        df = pd.read_excel(io=self.excelFile, sheet_name=sheet)
        df = df.fillna('')
        df = df.sort_values(by=['Task'])

        for j in range(1, max(df[:]['WP'])+1):
            latex = self.outFolder + '/sec-wp-' + str(j) + '-deliverables.tex'
            texLines = '\\textbf{\\underline{Deliverables}}\\\\\n'
            for i in df.index:
                if df.iloc[i]['WP'] == j:
                    texLines += '\\deliverable{' + \
                        str(df.iloc[i]['Task']) + ' D' + \
                        str(df.iloc[i]['Deliverable']) + '}{' + \
                        str(df.iloc[i]['Lead']) + '}{' + \
                        str(df.iloc[i]['Contributors']) + '}{' + \
                        str(df.iloc[i]['Month']) + '}{' + \
                        str(df.iloc[i]['Title']) + ' Verification: ' + \
                        str(df.iloc[i]['Verification']) + '}\\\\' + '\n\n'

            self.writeFile(latex, texLines, code)

    def wp_Milestones(self, sheet='Milestones', code=0):
        df = pd.read_excel(io=self.excelFile, sheet_name=sheet)
        df = df.fillna('')
        df = df.sort_values(by=['Task'])

        for j in range(1, max(df[:]['WP'])+1):
            latex = self.outFolder + '/sec-wp-' + str(j) + '-milestones.tex'
            texLines = '\\textbf{\\underline{Milestones}}\\\\\n'
            for i in df.index:
                if df.iloc[i]['WP'] == j:
                    texLines += '\\milestone{' + \
                        str(df.iloc[i]['Task']) + ' M' + \
                        str(df.iloc[i]['Milestone']) + '}{' + \
                        str(df.iloc[i]['Lead']) + '}{' + \
                        str(df.iloc[i]['Contributors']) + '}{' + \
                        str(df.iloc[i]['Month']) + '}{' + \
                        str(df.iloc[i]['Title']) + ' Verification: ' + \
                        str(df.iloc[i]['Verification']) + '}\\\\' + '\n\n'

            self.writeFile(latex, texLines, code)

    def table_Deliverables(self, sheet='Deliverables', code=0):
        df = pd.read_excel(io=self.excelFile, sheet_name=sheet)
        df = df.fillna('')
        # df['Month_Int'] = df['Month'].astype(int)
        df = df.sort_values(by='Month', ascending=True)
        # df = df.sort_values(by='Month', ascending=False)
        # df = df.sort_values(by='Month_Int')
        latex = self.outFolder + '/tab-list-of-deliverables.tex'
        texLines = '\\tableListOfDeliverables{\n'
        # for i in df.index:
        for i in range(len(df)):
            texLines += \
                str(df.iloc[i]['Task']) + ' D' + \
                str(df.iloc[i]['Deliverable']) + ' & ' + \
                str(df.iloc[i]['Title']) + ' & WP' + \
                str(df.iloc[i]['WP']) + ' & ' + \
                str(df.iloc[i]['Lead']) + ' & ' + \
                str(df.iloc[i]['Type']) + ' & ' + \
                str(df.iloc[i]['Level']) + ' & ' + \
                str(df.iloc[i]['Month']) + '\\\\\\hline' + '\n'

        texLines += '}\n'
        self.writeFile(latex, texLines, code)

    def table_Milestones(self, sheet='Milestones', code=0):
        df = pd.read_excel(io=self.excelFile, sheet_name=sheet)
        df = df.fillna('')
        df = df.sort_values(by='Month')
        # df = df.sort_values(by='Month', ascending=False)
        latex = self.outFolder + '/tab-list-of-milestones.tex'
        texLines = '\\tableListOfMilestones{\n'
        # for i in df.index:
        for i in range(len(df)):
            texLines += \
                str(df.iloc[i]['Task']) + ' M' + \
                str(df.iloc[i]['Milestone']) + ' & ' + \
                str(df.iloc[i]['Title']) + ' & WP' + \
                str(df.iloc[i]['WP']) + ' & ' + \
                str(df.iloc[i]['Month']) + ' & ' + \
                str(df.iloc[i]['Verification']) + '\\\\\\hline' + '\n'

        texLines += '}\n'
        self.writeFile(latex, texLines, code)

    def table_Risks(self, sheet='Risks', code=0):
        df = pd.read_excel(io=self.excelFile, sheet_name=sheet)
        df = df.fillna('')
        latex = self.outFolder + '/tab-list-of-risks.tex'
        texLines = '\\tableListOfRisks{\n'
        for i in df.index:
            texLines += \
                str(df.iloc[i]['Risk Description']) + ' & ' + \
                str(df.iloc[i]['Likelihood/Severity']) + ' & ' + \
                str(df.iloc[i]['Related WPs']) + ' & ' + \
                str(df.iloc[i]['Proposed risk-mitigation measures']) + \
                '\\\\\\hline' + '\n'

        texLines += '}\n'
        self.writeFile(latex, texLines, code)

    def table_Efforts(self, sheet='Efforts', noTeams=2, noWPs=6, code=0):
        df = pd.read_excel(io=self.excelFile, sheet_name=sheet)
        df = df.fillna('')
        latex = self.outFolder + '/tab-efforts.tex'
        texLines = '\\tableStaffEffortsSummary{\n'
        for i in range(noTeams):
            texLines += str(int(df.iloc[i]['No'])).zfill(2) + \
                '. ' + str(df.iloc[i]['Acronym']) + ' & '
            for j in range(1, noWPs+1):
                texLines += str(df.iloc[i]['WP'+str(j)]) + ' & '

            texLines += str(int(df.iloc[i]['Months'])) + ' \\\\\\hline' + '\n'

        texLines += '}{'
        for j in range(1, noWPs+1):
            if j == noWPs:
                texLines += str(df.iloc[noTeams+3]['WP'+str(j)])
            else:
                texLines += str(df.iloc[noTeams+3]['WP'+str(j)]) + ' & '

        texLines += '\n}{' + str(int(df.iloc[noTeams+3]['Months'])) + '}'

        self.writeFile(latex, texLines, code)

    def table_Efforts_Justification(self, noTeams=2, code=0):
        # dft = pd.read_excel(r'Figures/tables.xlsx', sheet_name='WP-Tasks')
        # dfe = pd.read_excel(r'Figures/tables.xlsx', sheet_name='WP-Efforts')
        dft = pd.read_excel(io=self.excelFile, sheet_name='Tasks')
        dfe = pd.read_excel(io=self.excelFile, sheet_name='Efforts')
        dft = dft.fillna('')
        dfe = dfe.fillna('')
        dft = dft.sort_values(by=['Task'])
        # dfe = dfe.iloc[0:noTeams,:].sort_values(by=['No'])

        texLines = '\\tableStaffEffortsJustification{\n'
        personMonths = 0
        for e in range(noTeams):
            team = dfe.iloc[e]['Acronym']
            effortLines = str(int(dfe.iloc[e]['No'])).zfill(
                2) + '. ' + team + ' & '
            assignTasks = ''
            totalMonths = 0
            for t in dft.index:
                lead = dft.iloc[t]['Lead']
                if team == lead:
                    assignTasks += str(dft.iloc[t]['Task']) + \
                        '/' + str(int(dft.iloc[t]['Months'])) + ', '
                    totalMonths += int(dft.iloc[t]['Months'])

            personMonths += totalMonths
            effortLines += assignTasks[:-2] + ' & ' + \
                str(totalMonths) + '\\\\\\hline\n'
            texLines += effortLines

        texLines += '}{' + str(personMonths) + '}'
        latex = self.outFolder + '/tab-efforts-justification.tex'
        self.writeFile(latex, texLines, code)

    def table_Cost_Subcontracting(self, sheet='Subcontracting', code=0):
        dft = pd.read_excel(io=self.excelFile, sheet_name='Participants')
        dfp = pd.read_excel(io=self.excelFile, sheet_name=sheet)
        dft = dft.fillna('')
        dfp = dfp.fillna('')
        unique_participants = dfp['Participant'].drop_duplicates()
        unique_participants = unique_participants.sort_values()
        unique_participants = unique_participants.values.tolist()
        unique_participants.remove('DEV')
        unique_participants.insert(0, 'DEV')
        texCost = r'% Table 3-2-g Subcontracting Costs' + '\n'
        for item in unique_participants:
            teamNo = dft.set_index('Acronym').No[item]  # Team number
            teamNN = str(teamNo) + '/' + item  # team number name #1
            sumCosts = 0
            rows = ''  # 2 rows
            texLines = '% Table 3-2-g Subcontracting Costs of ' + teamNN + '\n'
            texLines += r'\tableCostSubcontract{' + teamNN + '}{'
            for e in range(len(dfp)):
                teamSn = dfp.iloc[e]['Participant']  # Team short name
                if item.lower() == teamSn.lower():
                    costs = int(dfp.loc[e, 'Cost'])
                    sumCosts += costs
                    justCostOther = dfp.loc[e, 'Justification']
                    costCategory = dfp.loc[e, 'Category']
                    rows += r'\small{' + costCategory + '} & '
                    rows += r'\multicolumn{1}{|R{18mm}|}{' + str(costs)
                    rows += '} & '
                    rows += r'\small{' + justCostOther
                    rows += '}\n' + r'\\\hline' + '\n'

            texLines += rows + '}{' + str(sumCosts) + '}\n\n'
            filename = '/tab-budget-subcontracting-costs-' + item + '.tex'
            latex = self.outFolder + filename
            texCost += r'\input{' + latex + '}' + '\n'
            self.writeFile(latex, texLines, code)

        latex = self.outFolder + '/tab-budget-subcontracting-costs.tex'
        self.writeFile(latex, texCost, code)

    def table_Cost_Purchase(self, sheet='Purchase', noTeams=4, code=0):
        dft = pd.read_excel(io=self.excelFile, sheet_name='Participants')
        dfp = pd.read_excel(io=self.excelFile, sheet_name=sheet)
        dft = dft.fillna('')
        dfp = dfp.fillna('')

        texLines = ''
        for e in range(noTeams):
            teamSn = dfp.iloc[e]['Participant']  # Team short name
            teamNo = dft.set_index('Acronym').No[teamSn]  # Team number
            teamNN = str(teamNo) + '/' + teamSn
            travel = int(dfp.iloc[e]['Travel'])
            equipC = int(dfp.iloc[e]['Equipment'])
            otherC = int(dfp.iloc[e]['Other'])
            remain = int(dfp.iloc[e]['Remaining'])
            totalC = travel + equipC + otherC + remain

            travel = str(travel) if travel > 0 else ''
            equipC = str(equipC) if equipC > 0 else ''
            otherC = str(otherC) if otherC > 0 else ''
            remain = str(remain) if remain > 0 else ''
            totalC = str(totalC) if totalC > 0 else ''

            just_travel = dfp.loc[e, 'Justification Travel and Subsistence']
            just_equipC = dfp.loc[e, 'Justification Equipment']
            just_otherC = dfp.loc[e, 'Justification Other']
            # just_remain = dfp.loc[e, 'Justification Remain']
            # just_remain = ''

            costPV = r'\tableCostPurchase{' + teamNN + '}{'
            costPV += r'\multicolumn{1}{|R{18mm}|}{' + travel + '}}{'
            costPV += r'\multicolumn{1}{|R{18mm}|}{' + equipC + '}}{'
            costPV += r'\multicolumn{1}{|R{18mm}|}{' + otherC + '}}{'
            costPV += r'\multicolumn{1}{|R{18mm}|}{' + remain + '}}{'
            costPV += totalC + '}'

            costJT = r'\tableCostPurchaseTravel{' + just_travel + '}'
            costJE = r'\tableCostPurchaseEquipt{' + just_equipC + '}'
            costJO = r'\tableCostPurchaseOthers{' + just_otherC + '}'
            # costJR = r'\tableCostPurchaseRemain{' + just_remain + '}'

            texLines += '% Purchase Cost of ' + teamNN + '\n'
            texLines += costJT + '\n' + costJE + '\n' + costJO + '\n'
            # texLines += costJR + '\n' + costPV + '\n\n'
            texLines += costPV + '\n\n'

        latex = self.outFolder + '/tab-budget-purchase-costs.tex'
        self.writeFile(latex, texLines, code)

        # print('-------------------')
        # print(teamSn, teamNo, teamNN, travel)
        # print(equipC, otherC, remain, totalC)
        # print(just_travel)
        # print(just_equipC)
        # print(just_otherC)
        # print(costPV)
        # print(costJT)
        # print(costJE)
        # print(costJO)
        # print(costJR)
        # print(texLines)
        # sys.exit(0)  # Exit with a success status code
        # print('-------------------')

    def table_Cost_Other(self, sheet='OtherCosts', code=0):
        dft = pd.read_excel(io=self.excelFile, sheet_name='Participants')
        dfp = pd.read_excel(io=self.excelFile, sheet_name=sheet)
        dft = dft.fillna('')
        dfp = dfp.fillna('')
        unique_participants = dfp['Participant'].drop_duplicates()
        unique_participants = unique_participants.sort_values()
        unique_participants = unique_participants.values.tolist()
        unique_participants.remove('DEV')
        unique_participants.insert(0, 'DEV')
        texCostOther = r'% Table 3-2-i Other Cost Categories' + '\n'
        texCostOther += r'% e.g. internally invoiced goods and services' + '\n'
        for item in unique_participants:
            teamNo = dft.set_index('Acronym').No[item]  # Team number
            teamNN = str(teamNo) + '/' + item  # team number name #1
            sumOtherCosts = 0
            rows = ''  # 2 rows
            texLines = '% Table 3-2-i Other Costs of ' + teamNN + '\n'
            texLines += r'\tableCostOther{' + teamNN + '}{'
            for e in range(len(dfp)):
                teamSn = dfp.iloc[e]['Participant']  # Team short name
                if item.lower() == teamSn.lower():
                    otherCosts = int(dfp.loc[e, 'Cost'])
                    sumOtherCosts += otherCosts
                    justCostOther = dfp.loc[e, 'Justification']
                    costCategory = dfp.loc[e, 'Category']
                    rows += r'\small{' + costCategory + '} & '
                    rows += r'\multicolumn{1}{|R{18mm}|}{' + str(otherCosts)
                    rows += '} & '
                    rows += r'\small{' + justCostOther
                    rows += '}\n' + r'\\\hline' + '\n'

            texLines += rows + '}{' + str(sumOtherCosts) + '}\n\n'
            filename = '/tab-budget-other-costs-' + item + '.tex'
            latex = self.outFolder + filename
            texCostOther += r'\input{' + latex + '}' + '\n'
            self.writeFile(latex, texLines, code)

        latex = self.outFolder + '/tab-budget-other-costs.tex'
        self.writeFile(latex, texCostOther, code)

    def table_Cost_InKind(self, sheet='InKind', code=0):
        dft = pd.read_excel(io=self.excelFile, sheet_name='Participants')
        dfp = pd.read_excel(io=self.excelFile, sheet_name=sheet)
        dft = dft.fillna('')
        dfp = dfp.fillna('')
        unique_participants = dfp['Participant'].drop_duplicates()
        unique_participants = unique_participants.sort_values()
        unique_participants = unique_participants.values.tolist()
        unique_participants.remove('DEV')
        unique_participants.insert(0, 'DEV')
        texInKind = '% Table In-kind Costs' + '\n'
        for item in unique_participants:
            teamNo = dft.set_index('Acronym').No[item]  # Team number
            teamNN = str(teamNo) + '/' + item  # team number name #1
            sumInKind = 0
            rows = ''  # 2 rows
            texLines = '% Table 3-2-j In-Kind Costs of ' + teamNN + '\n'
            texLines += r'\tableCostInKind{' + teamNN + '}{'
            for e in range(len(dfp)):
                teamSn = dfp.iloc[e]['Participant']  # Team short name
                if item.lower() == teamSn.lower():
                    ikCost = int(dfp.loc[e, 'Cost'])
                    sumInKind = sumInKind + ikCost
                    party_name = dfp.loc[e, 'Third Party Name']
                    ikCategory = dfp.loc[e, 'In-Kind Category']
                    justInKing = dfp.loc[e, 'Justification']
                    rows += r'\small{' + party_name + '} & '
                    rows += r'\small{' + ikCategory + '} & '
                    rows += r'\multicolumn{1}{|R{18mm}|}{' + str(ikCost)
                    rows += '} & ' + r'\small{' + justInKing
                    rows += '}\n' + r'\\\hline' + '\n'

            texLines += rows + '}{' + str(sumInKind) + '}\n\n'
            filename = '/tab-budget-in-kind-costs-' + item + '.tex'
            latex = self.outFolder + filename
            texInKind += r'\input{' + latex + '}' + '\n'
            self.writeFile(latex, texLines, code)

        latex = self.outFolder + '/tab-budget-in-kind-costs.tex'
        self.writeFile(latex, texInKind, code)
