let dogNav = document.querySelector('#dog-nav');
let dogName = document.querySelector('#dog-display-name')
let dogImage = document.querySelector('#dog-display-image')
let dogLikes = document.querySelector('#dog-display-likes')
let newDog;

let form = document.querySelector('#new-dog-form')
let newName = document.querySelectorAll('input')[0]
let newImage = document.querySelectorAll('input')[1]


fetch('http://localhost:3000/dogs')
.then(res => res.json () )
.then(data => {
    data.forEach(dogs => renderDogs(dogs))
    dogDetails(data[0])
    console.log(data);
})

function renderDogs(dogs){
    let image = document.createElement('img')
    image.src = dogs.img_url
    dogNav.append(image)

    image.addEventListener('click', () => dogDetails(dogs) )
}

function dogDetails(dogs){
    dogName.textContent = dogs.name
    dogImage.src = dogs.img_url
    dogLikes.textContent = `${dogs.likes} likes`
    newDog = dogs
}

dogLikes.addEventListener('click', () => {
    newDog.likes ++
    dogLikes.textContent = `${newDog.likes} likes`
})

form.addEventListener('submit', e => {
    e.preventDefault()
    console.log(e)

    let newObject = {
        name: newName.value,
        img_url: newImage.value,
        likes: 0
    }

    renderDogs(newObject)
    dogDetails(newObject)


})

form.addEventListener('focus', e => {
    console.log(e.target)
    e.target.style.background = "lightblue"
},
true
)

form.addEventListener('blur', e => {
    e.target.style.background = ""
},
true
)