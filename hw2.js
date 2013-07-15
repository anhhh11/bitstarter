#!/usr/bin/env node
var Prime = function() {
    // current prime number
    this.prime = 1;

    // return true if NUM is prime
    this.isPrime = function(num) {
        var result = true;
        if (num !== 2) {
            if (num % 2 == 0) {
                result = false;
            } else {
                for (x=3; x<=Math.sqrt(num); x+=2) {
                    if (num % x == 0) result = false;
                }
            }
        }
        return result;
    }

    // return next prime number
    this.nextPrime = function() {
        this.prime++;
        while (!this.isPrime(this.prime)) this.prime++;
        return this.prime;
    }
}

// prime
prime = new Prime();
prime_array = [];
while(prime_array.length < 100)
{
    prime_array.push(prime.nextPrime());
}
var fs = require('fs');
var file_out = 'hw2.txt';
var content = prime_array.join(','); 
fs.writeFileSync(file_out,content);

