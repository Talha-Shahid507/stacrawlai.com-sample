def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

def primes_up_to(n):
    return [x for x in range(2, n + 1) if is_prime(x)]

def main():
    n = int(input("Enter a number: "))
    if is_prime(n):
        print(f"{n} is prime")
    else:
        print(f"{n} is not prime")

    limit = int(input("Show primes up to: "))
    print("Primes:", primes_up_to(limit))

if __name__ == "__main__":
    main()
