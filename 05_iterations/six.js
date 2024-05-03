// const arr = ["c","c++","java","python","Ruby"]

// const value = arr.forEach((item)=>{
//     console.log(item)

//     return item// explicit implict both ways for each function does not return anything undefined
// })

// console.log(value); //for each function does not return anything undefined


// const Mynumbs = [1,2,3,4,5,6,7,8,9,10]
// const values = Mynumbs.filter((num)=>(num>4))
// console.log(values);

// with the help of for each
// const Mynumbers = [1,2,3,4,5,6,7,8,9,10]
// const values = []
// Mynumbers.forEach((numbs)=>{
//     if(numbs>5)
//        values.push(numbs);
// })
// console.log(values);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  const userbook = books.filter((bk)=>(bk.publish>2000 || bk.genre==='History'))
  console.log(userbook);