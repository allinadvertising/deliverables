#!/usr/bin/env python
"""Dump every sheet of an .xlsx file as `col:value` rows, using only the
Python standard library (xlsx is a zip of XML). Handy when openpyxl/pandas
are not installed. Usage: python xlsx_dump.py <path-to-file.xlsx>
"""
import re
import sys
import zipfile
from xml.etree import ElementTree as ET

# xlsx text is UTF-8 (curly quotes, arrows, en-dashes are common). Windows
# consoles default to cp1252 and would crash on those, so force UTF-8 output.
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except AttributeError:
    pass

NS = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"
REL_NS = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}"


def main(path: str) -> None:
    z = zipfile.ZipFile(path)

    shared = []
    if "xl/sharedStrings.xml" in z.namelist():
        root = ET.fromstring(z.read("xl/sharedStrings.xml"))
        for si in root.findall(f"{NS}si"):
            shared.append("".join(t.text or "" for t in si.iter(f"{NS}t")))

    wb = ET.fromstring(z.read("xl/workbook.xml"))
    sheets = [
        (s.get("name"), s.get(f"{REL_NS}id"))
        for s in wb.find(f"{NS}sheets")
    ]

    rels = {}
    relroot = ET.fromstring(z.read("xl/_rels/workbook.xml.rels"))
    for r in relroot:
        rels[r.get("Id")] = r.get("Target")

    def cell_val(c):
        t = c.get("t")
        v = c.find(f"{NS}v")
        if t == "s":
            return shared[int(v.text)] if v is not None else ""
        if t == "inlineStr":
            is_ = c.find(f"{NS}is")
            return "".join(x.text or "" for x in is_.iter(f"{NS}t")) if is_ is not None else ""
        return v.text if v is not None else ""

    for name, rid in sheets:
        target = rels.get(rid, "")
        if not target.startswith("xl/"):
            target = "xl/" + target
        print("=" * 80)
        print(f"SHEET: {name}")
        print("=" * 80)
        sroot = ET.fromstring(z.read(target))
        data = sroot.find(f"{NS}sheetData")
        for row in data.findall(f"{NS}row"):
            cells = {}
            for c in row.findall(f"{NS}c"):
                col = re.match(r"[A-Z]+", c.get("r")).group(0)
                cells[col] = cell_val(c)
            if cells:
                order = sorted(cells, key=lambda x: (len(x), x))
                print(" | ".join(f"{col}:{cells[col]}" for col in order))


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python xlsx_dump.py <path-to-file.xlsx>", file=sys.stderr)
        sys.exit(2)
    main(sys.argv[1])
