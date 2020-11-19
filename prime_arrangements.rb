# @param {Integer} n
# @return {Integer}
def num_prime_arrangements(n)
    return 1 if n == 1

    num_primes = 0
    curr = n
    while curr > 0
        if is_prime?(curr)
            num_primes += 1
        end
        curr -= 1
    end

    (factorial(num_primes) * factorial(n - num_primes)) % ((10 ** 9) + 7)
end

def factorial(n)
    res = n
    while n > 1
        n -= 1
        res *= n
    end
    res
end

def is_prime?(n)
    return false unless n > 1
    i = 2
    until i > (n / 2)
        if n % i == 0
            return false
        end
        i += 1
    end
    true
end

