def count_words(text):
    return len(text.split())

def count_chars(text):
    return len(text)

def count_lines(text):
    return len(text.splitlines())

def most_common_word(text):
    words = text.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return max(counts, key=counts.get) if counts else None

def main():
    text = input("Enter some text: ")
    print("Words:", count_words(text))
    print("Characters:", count_chars(text))
    print("Lines:", count_lines(text))
    print("Most common word:", most_common_word(text))

if __name__ == "__main__":
    main()
