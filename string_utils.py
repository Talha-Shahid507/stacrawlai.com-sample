def reverse_string(s):
    return s[::-1]

def is_palindrome(s):
    s = s.lower().replace(" ", "")
    return s == reverse_string(s)

def sort_words(text):
    return sorted(text.split())

def capitalize_words(text):
    return " ".join(w.capitalize() for w in text.split())

def main():
    text = input("Enter a sentence: ")
    print("Reversed:", reverse_string(text))
    print("Is palindrome:", is_palindrome(text))
    print("Sorted words:", sort_words(text))
    print("Capitalized:", capitalize_words(text))

if __name__ == "__main__":
    main()
