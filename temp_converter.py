def celsius_to_fahrenheit(c):
    return (c * 9/5) + 32

def fahrenheit_to_celsius(f):
    return (f - 32) * 5/9

def celsius_to_kelvin(c):
    return c + 273.15

def main():
    print("Temperature Converter")
    c = float(input("Enter temperature in Celsius: "))
    f = celsius_to_fahrenheit(c)
    k = celsius_to_kelvin(c)
    print(f"{c}C = {f}F")
    print(f"{c}C = {k}K")

    f2 = float(input("Enter temperature in Fahrenheit: "))
    c2 = fahrenheit_to_celsius(f2)
    print(f"{f2}F = {c2}C")

if __name__ == "__main__":
    main()
