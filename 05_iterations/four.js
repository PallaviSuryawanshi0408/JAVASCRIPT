const Myobj = {
    "name" : "pallavi",
    "age" : 23
}
for (const key in Myobj) {
    console.log(`${key} :-> ${Myobj[key]}`);
}

const Myarr =[1,2,3,4,5]
for (const key in Myarr) {
    console.log(`${key} :-> ${Myarr[key]}`);
}

// for...in iterates over keys (or indexes for arrays) and is typically used with objects.
// for...of iterates over values and is used with iterables like arrays, maps, and sets, but not plain objects.
