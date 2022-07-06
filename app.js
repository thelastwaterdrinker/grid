let data = [
    {
        name: 'David',
        age: '33'
    },
    {
        name: 'Tugba',
        age: '34'
    },
    {
        name: 'Sristhi',
        age: '27'
    },
    {
        name: 'Warren',
        age: '35'
    },
    {
        name: 'Burhan',
        age: '42'
    },
    {
        name: 'Kamil',
        age: '24'
    },
];

const info = document.querySelector('#info')

/* burada map in icine function attim. icine de item yazildi bu 
demek oluyor ki item.name yazarsam isimleri yazdiracak. item.age
yazarsam yaslari yazdiracak.*/

let details = data.map(function(item){
    return(
        '<div>' + item.name + ' ' 'is' + ' ' + item.age + ' ' + 'years old' + '</div>'
    )
})

info.innerHTML = details.join('\n')