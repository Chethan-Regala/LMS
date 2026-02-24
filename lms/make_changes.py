import json
import re

with open('d:/hackathaon/LMS/lms/app/pages/ls/units/unit1-modules/Module1_1.tsx', 'r', encoding='utf-8') as f:
    orig_code = f.read()

with open('d:/hackathaon/LMS/lms/parsed_output.txt', 'r', encoding='utf-8') as f:
    parsed_html = f.read()

parsed_html = re.sub(
    r'<div className=\"mermaid\">MERMAID_TEXT_PLACEHOLDER: (.*?)</div>',
    lambda m: f'<div className=\"mermaid\">\n{{`' + m.group(1).replace(r'\n', '\n') + '`}}\n</div>',
    parsed_html
)


part1 = orig_code.split('<section className=\"content-section\">')[0]

new_code = part1 + '<section className=\"content-section\">\n' + parsed_html + '</section>\n' + '<Quiz title=\"Module 1.1 Quiz: Overview of Linguistics and its Sub-fields\" questions={module1Quiz} subject=\"LS\" unitId={1} moduleId={1} />\n</div>\n);\n};\nexport default Module1_1;\n'

with open('d:/hackathaon/LMS/lms/app/pages/ls/units/unit1-modules/Module1_1.tsx', 'w', encoding='utf-8') as f:
    f.write(new_code)
