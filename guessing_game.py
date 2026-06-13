import random

def play_game():
    number = random.randint(1, 100)
    attempts = 0
    print("Guess a number between 1 and 100")

    while True:
        guess = int(input("Your guess: "))
        attempts += 1

        if guess < number:
            print("Too low!")
        elif guess > number:
            print("Too high!")
        else:
            print(f"Correct! You took {attempts} attempts.")
            break

def main():
    play_game()
    again = input("Play again? (y/n): ")
    if again.lower() == "y":
        play_game()

if __name__ == "__main__":
    main()
