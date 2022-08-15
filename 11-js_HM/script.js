document.querySelector('.btn').addEventListener('click', function () {
    let user = document.querySelector('.input').value;
    if (user.length <= 3) {
        console.log('err')
    } else {
        fetchAssyncTodos(user)
    }
})

document.querySelector('.clear').addEventListener('click', function () {
    let item = document.querySelectorAll('.item');
    item.forEach(element => {
        element.remove()
    });
})

const url = "https://api.github.com/users";


async function fetchAssyncTodos(id) {
    try {
        const response = await fetch(`${url}/${id}`)
        const data = await response.json()
        if (response.ok === false) {
            return err
        }

        createElement(data.avatar_url, data.login, data.public_repos, data.html_url)
    } catch (e) {
        // console.error(e)
        createError('https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png')
    }
}

function createElement(foto, userLog, description, link) {
    let wraper = document.querySelector('.wraper')

    const item = document.createElement('div');
    item.className = 'item'


    const img = document.createElement('img');
    img.className = 'img'
    img.src = foto

    const descr = document.createElement('div');
    descr.className = 'descr'
    descr.innerHTML = `Repositories: ${description}`

    const login = document.createElement('div');
    login.className = 'login'
    login.innerHTML = userLog

    const profile = document.createElement('a');
    profile.className = 'profile'
    profile.innerHTML = 'Profile'
    profile.href = link

    const remove = document.createElement('button');
    remove.className = 'remove'
    remove.innerHTML = 'Remove'

    remove.addEventListener('click', function () {
        item.classList.remove('visible')
        setTimeout(() => {
            item.remove();
        }, 1000);
    })

    setTimeout(() => {
        item.classList.add('visible')
    }, 300);


    item.append(img, login, profile, descr, remove)
    wraper.append(item)
}

function createError(foto) {
    let wraper = document.querySelector('.wraper')

    const item = document.createElement('div');
    item.className = 'item'


    const img = document.createElement('img');
    img.className = 'img'
    img.src = foto



    const remove = document.createElement('button');
    remove.className = 'remove'
    remove.innerHTML = 'Remove'

    remove.addEventListener('click', function () {
        item.classList.remove('visible')
        setTimeout(() => {
            item.remove();
        }, 1000);
    })

    setTimeout(() => {
        item.classList.add('visible')
    }, 300);


    item.append(img, remove)
    wraper.append(item)
}