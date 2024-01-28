function solution(cacheSize, cities) {
    const cache = [];
    let total = 0;
    let n = 0;
    
    if (cacheSize === 0) {
        return cities.length * 5;
    }
    
    const lowerCaseCities = cities.map(city => city.toLowerCase());
    
    while (true) {
        if (n === lowerCaseCities.length) {
            break;
        }
        const city = lowerCaseCities[n];
        n++;
        if (cache.includes(city)) {
            total += 1;
            cache.splice(cache.indexOf(city), 1);
            cache.push(city)
            continue;
        }
        if (cache.length === cacheSize) {
            cache.shift();
        }
        total += 5;
        cache.push(city);
    }
    return total;
}