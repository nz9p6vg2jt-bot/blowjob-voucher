from pathlib import Path
import sys

from reportlab.graphics import renderSVG
from reportlab.graphics.barcode.qr import QrCodeWidget
from reportlab.graphics.shapes import Drawing


def main() -> int:
    if len(sys.argv) != 3:
        print("Usage: python tools/generate_qr.py <url> <output.svg>")
        return 1

    url = sys.argv[1]
    output = Path(sys.argv[2])
    qr = QrCodeWidget(url)
    bounds = qr.getBounds()
    width = bounds[2] - bounds[0]
    height = bounds[3] - bounds[1]
    size = 240

    drawing = Drawing(size, size, transform=[size / width, 0, 0, size / height, 0, 0])
    drawing.add(qr)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(renderSVG.drawToString(drawing), encoding="utf-8")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
