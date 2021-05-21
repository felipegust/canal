# dizer se um número é primo ou não

def ehPrimo(numero):
    for n in range(2, numero):
        if numero % n == 0:
            print(numero, "não é primo")
            return
    print(numero, "é primo")

ehPrimo(10)
ehPrimo(7)
ehPrimo(23)
ehPrimo(30)
ehPrimo(29)