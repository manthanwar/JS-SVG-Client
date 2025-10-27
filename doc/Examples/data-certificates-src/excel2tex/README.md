# Python Package _pyexcel3tex_

## Table of Content

1. [Introduction](#Introduction)
1. [Introduction](#subsubheading-2)
1. [Introduction](#subheading-3)
1. [Introduction](#subheading-4)


## Introduction

THis is a Python package pyExcel2Tex that converts Excel file and worksheets
into a LaTeX tables.

[a relative link](other_file.md)



### LaTeX Special Characters

The following characters play a special role in LaTeX and are called special
printing characters, or simply special characters.

`# $ % & { } _ \ ~ ^`

Whenever you put one of these special characters into your file, you are doing
something special, as described below.

If you simply want the character to be printed just as any other letter, include
a `\` in front of the character. For example, `\$` will produce $ in your
output. Exceptions to this rule:

- \\ has its own special meaning. Use `$\backslash$`.
- \~ and \^ produce accents. Use `\verb{~}` or `\~{}` of `$\tilde$` and
  `\verb{^}` or `\^{}` instead.

Use `\textsubscript{a}` and `\textsuperscript{a}` for subscript and superscript

#### Table of Character Replacements

| Character        | Replace with                       |
| :--------------- | :--------------------------------- |
| #                | `\#`                               |
| $                | `\$`                               |
| %                | `\%`                               |
| &                | `\&`                               |
| {                | `\{`                               |
| }                | `\}`                               |
| \_               | `\_`                               |
| \                | `$\backslash$`                     |
| ~                | `\verb{~}` or `\~{}` of `$\tilde$` |
| ^                | `\verb{^}` or `\^{}`               |
| ⓐ                | `\textcircled{a}`                  |
| ©                | `\copyright`                       |
| ®                | `\textregistered`                  |
| ™                | `\texttrademark`                   |
| £                | `\pounds`                          |
| §                | `\S`                               |
| ¶                | `\P`                               |
| †                | `\dag`                             |
| ‡                | `\ddag`                            |
| subscript_text   | `\textsubscript{text}`             |
| superscript^text | `\textsuperscript{text}`           |

#### Table of SI base units

| Unit     | Command   | Symbol |
| :------- | :-------- | :----- |
| ampere   | \ampere   | A      |
| candela  | \candela  | cd     |
| kelvin   | \kelvin   | K      |
| kilogram | \kilogram | kg     |
| metre    | \metre    | m      |
| mole     | \mole     | mol    |
| second   | \second   | s      |

#### Derived units in the SI with special names and symbols

| Unit           | Command        | Symbol |
| :------------- | :------------- | :----- |
| becquerel      | \becquerel     | Bq     |
| degree Celsius | \degreeCelsius | °C     |
| coulomb        | \coulomb       | C      |
| farad          | \farad         | F      |
| gray           | \gray          | Gy     |
| hertz          | \hertz         | Hz     |
| henry          | \henry         | H      |
| joule          | \joule         | J      |
| lumen          | \lumen         | lm     |
| katal          | \katal         | kat    |
| lux            | \lux           | lx     |
| newton         | \newton        | N      |
| ohm            | \ohm           | Ω      |
| pascal         | \pascal        | Pa     |
| radian         | \radian        | rad    |
| siemens        | \siemens       | S      |
| sievert        | \sievert       | Sv     |
| steradian      | \steradian     | sr     |
| tesla          | \tesla         | T      |
| volt           | \volt          | V      |
| watt           | \watt          | W      |
| weber          | \weber         | Wb     |

#### Non-SI units accepted for use

| Unit                 | Command           | Symbol |
| :------------------- | :---------------- | :----- |
| astronomical unit    | \astronomicalunit | au     |
| bel                  | \bel              | B      |
| dalton               | \dalton           | Da     |
| day                  | \day              | d      |
| decibel              | \decibel          | dB     |
| degree               | \degree           | °      |
| electronvolt         | \electronvolt     | eV     |
| hectare              | \hectare          | ha     |
| hour                 | \hour             | h      |
| litre                | \litre or \liter  | L      |
| minute (plane angle) | \arcminute        | ′      |
| minute (time)        | \minute           | min    |
| second (plane angle) | \arcsecond        | ″      |
| neper                | \neper            | Np     |
| tonne                | \tonne            | t      |

#### SI prefixes

| Prefix | Command | Symbol | Power |
| :----- | :------ | :----- | :---- |
| quecto | \quecto | q      | −30   |
| ronto  | \ronto  | r      | −27   |
| yocto  | \yocto  | y      | −24   |
| zepto  | \zepto  | z      | −21   |
| atto   | \atto   | a      | −18   |
| femto  | \femto  | f      | −15   |
| pico   | \pico   | p      | −12   |
| nano   | \nano   | n      | −9    |
| micro  | \micro  | μ      | −6    |
| milli  | \milli  | m      | −3    |
| centi  | \centi  | c      | −2    |
| deci   | \deci   | d      | −1    |
| deca   | \deca   | da     | 1     |
| hecto  | \hecto  | h      | 2     |
| kilo   | \kilo   | k      | 3     |
| mega   | \mega   | M      | 6     |
| giga   | \giga   | G      | 9     |
| tera   | \tera   | T      | 12    |
| peta   | \peta   | P      | 15    |
| exa    | \exa    | E      | 18    |
| zetta  | \zetta  | Z      | 21    |
| yotta  | \yotta  | Y      | 24    |
| ronna  | \ronna  | R      | 27    |
| quetta | \quetta | Q      | 30    |

#### SI prefixes

| Prefix | Command | Symbol | Power | Prefix | Command | Symbol | Power |
| :----- | :------ | :----- | :---- | :----- | :------ | :----- | :---- |
| quecto | \quecto | q      | −30   | deca   | \deca   | da     | 1     |
| ronto  | \ronto  | r      | −27   | hecto  | \hecto  | h      | 2     |
| yocto  | \yocto  | y      | −24   | kilo   | \kilo   | k      | 3     |
| zepto  | \zepto  | z      | −21   | mega   | \mega   | M      | 6     |
| atto   | \atto   | a      | −18   | giga   | \giga   | G      | 9     |
| femto  | \femto  | f      | −15   | tera   | \tera   | T      | 12    |
| pico   | \pico   | p      | −12   | peta   | \peta   | P      | 15    |
| nano   | \nano   | n      | −9    | exa    | \exa    | E      | 18    |
| micro  | \micro  | μ      | −6    | zetta  | \zetta  | Z      | 21    |
| milli  | \milli  | m      | −3    | yotta  | \yotta  | Y      | 24    |
| centi  | \centi  | c      | −2    | ronna  | \ronna  | R      | 27    |
| deci   | \deci   | d      | −1    | quetta | \quetta | Q      | 30    |

#### Examples of SI Units

| Unit   | Command                   |
| :----- | :------------------------ |
| 30°    | `\ang{30}`                |
| °      | `\si{\degree}`            |
| °C     | `\si{\degreeCelsius}`     |
| 20°C   | `\SI{20}{\degreeCelsius}` |
| 1°2′3″ | `\ang{1;2;3}`             |

For more details refer to [SI Units](https://ctan.org/pkg/siunitx?lang=en)
Package and its
[User Manual](https://3.mirrors.in.sahilister.net/ctan/macros/latex/contrib/siunitx/siunitx.pdf)

### Excel File `tables.xlsx`

The excel file contains the following 30 worksheets:

- Main
- Call
- Abstract
- Excellence
- Consortium
- Biography
- Tasks
- WPs
- Efforts
- Assignments
- Workloads
- Payscale
- StaffRates
- StaffEfforts
- Budget
- Classification
- DeliverableTypes
- Deliverables
- Milestones
- Risks
- Gantt
- Needs
- Results
- Dissemination
- Communication
- Exploitation
- Target
- Outcomes
- Impact
- References

#### Worksheet `Main`

This worksheet contains links to all other worksheets

| Type       | Sheet Name | Sheet Link |
| :--------- | :--------: | :--------- |
| Abstract   |  Abstract  |            |
| Excellence | Excellence |            |
| Impact     |   Needs    |            |

<!-- #### HTML Table -->

<!-- <script type="text/javascript" src="js/date.js"></script> -->
<!-- <span id="dtField"></span> -->

<!-- <script type="text/javascript" src="js/table-sort.js"></script> -->
<!-- <table id="myTable">
<tr>
<th onclick="sortTable('myTable', 0)">Type</th>
<th onclick="sortTable('myTable', 1)">Sheet Name</th>
<th onclick="sortTable('myTable', 2)">Sheet Link</th>
</tr>
<tr>
<td>Abstract</td>
<td>Abstract</td>
<td></td>
</tr>
<tr>
<td>Excellence</td>
<td>Excellence</td>
<td></td>
</tr>
</table> -->

#### Biography

The individual participants of the consortium are described in a separate
section under Part A. There is no need to repeat that information here.

- Describe the expertise of the consortium. Explain how it provides all the
  necessary knowledge, how it supports the proposed interdisciplinary approach,
  and how it matches the project’s objectives and tasks. Explain the role of
  each consortium member and its complementary contribution. If appropriate,
  show how this includes expertise in social sciences and humanities, open
  science practices, and gender aspects of R&I.
- Demonstrate that the partners will have access to critical infrastructure
  needed to carry out the project’s activities.
- Other countries and international organisations: If one or more of the
  participants requesting EU funding is based in a country or is an
  international organisation that is not automatically eligible for such funding
  (entities from Member States of the EU, from Associated Countries and from one
  of the countries in the exhaustive list included in Annex 3 of the EIC Work
  Programme are automatically eligible for EU funding), explain why the
  participation of the entity in question is essential to successfully carry out
  the project.

## Tables

### List of Tables

- Table 3.1a: List of work packages
- Table 3.1b: Work package description
- Table 3.1c: List of Deliverables
- Table 3.1d: List of milestones
- Table 3.1e: Critical risks for implementation
- Table 3.1f: Summary of staff effort
- Table 3.1g: Subcontracting costs
- Table 3.1h: Purchase costs
- Table 3.1i: Other costs categories
- Table 3.1j: In-kind contributions provided by third parties

#### Table 3.1h: ‘Purchase costs’ items

includes (travel and subsistence, equipment and other goods, works and services)

#### Amazon Web Services Costs of Elastic Compute Cloud

| Traffic | USD | EC2        | vCPUs | RAM |
| :------ | :-- | :--------- | :---- | :-- |
| x Small | 5   | t2.micro   | 1     | 1   |
| Small   | 9   | t2.small   | 1     | 2   |
| Medium  | 10  | m6g.medium | 1     | 4   |
| Large   | 15  | r7g.medium | 1     | 8   |
| x Large | 25  | r6g.large  | 2     | 16  |

#### Table 3.1i: ‘Other costs categories’ items

includes (e.g. internally invoiced goods and services)

#### Table 3.1j: ‘In-kind contributions’ provided by third parties

## Package Structure

```
main.py
my_package/
├── __init__.py
├── module1.py
├── subpackage/
│   ├── __init__.py
│   └── submodule1.py
│   └── class_name.py
```

### my_package/`__init__.py`

```python
from .my_package import subpackage
```

### my_package/subpackage/`__init__.py`

```python
from .subpackage import class_name
```

### main.py

```python
from my_package import class_name
instance = class_name("name")

or

import my_package
instance = my_package.class_name("name")
```
