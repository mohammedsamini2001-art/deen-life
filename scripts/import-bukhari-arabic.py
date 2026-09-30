import json
from pathlib import Path

SOURCE = Path.home() / "bukhari-arabic-source.json"
OUTPUT = Path("src/features/islamic-learning/hadith/source/sahih-bukhari-arabic-source.json")

with SOURCE.open("r", encoding="utf-8") as f:
    payload = json.load(f)

data = payload["data"]
items = data["items"]

books = {}
skipped_book_zero = 0
skipped_empty_text = 0

for item in items:
    book = item.get("book")
    text = item.get("text", "")

    if not isinstance(book, int):
        continue

    if book == 0:
        skipped_book_zero += 1
        continue

    if not text:
        skipped_empty_text += 1
        continue

    books.setdefault(book, []).append({
        "hadithNumber": item["number"],
        "arabicNumber": item["arabic_number"],
        "text": text,
    })

output = {
    "source": {
        "collection": data["collection"],
        "language": data["lang"],
        "attribution": data["attribution"],
        "license": data["license"],
        "licenseUrl": data["license_url"],
        "sourceId": data["source_id"],
        "sourceUrl": data["source_url"],
    },
    "books": [
        {
            "bookNumber": book_number,
            "hadiths": books[book_number],
        }
        for book_number in sorted(books)
        if 1 <= book_number <= 97
    ],
}

OUTPUT.write_text(
    json.dumps(output, ensure_ascii=False, indent=2) + "\n",
    encoding="utf-8",
)

print(f"Imported books: {len(output['books'])}")
print(f"Imported hadiths: {sum(len(book['hadiths']) for book in output['books'])}")
print(f"Skipped Book 0 records: {skipped_book_zero}")
print(f"Skipped empty-text records: {skipped_empty_text}")
print(f"Output: {OUTPUT}")
