import random
import string

def generate_password(length=12):
    chars = string.ascii_letters + string.digits + string.punctuation
    password = "".join(random.choice(chars) for _ in range(length))
    return password

def check_strength(password):
    if len(password) < 8:
        return "Weak"
    elif len(password) < 12:
        return "Medium"
    else:
        return "Strong"

def main():
    length = int(input("Enter password length: "))
    pwd = generate_password(length)
    print("Generated password:", pwd)
    print("Strength:", check_strength(pwd))

if __name__ == "__main__":
    main()
