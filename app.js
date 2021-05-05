//https://icanhazdadjoke.com/

const getDadJoke = async () => {
    try{
        const config = { 
            headers: 
            { Accept: 'application/json' } 
        }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        const dadJoke = (res.data.joke);
        return dadJoke;
    } catch(e){
        console.log('Sorry, no jokes today :-(', e)
    }

}

const addNewJoke = async () => {
    const jokeContent = await getDadJoke();
    const jokeList = document.querySelector('#jokeList');
    const newLi = document.createElement('li');
    newLi.append(jokeContent);
    jokeList.appendChild(newLi);
}



const dadJokeButton = document.querySelector('#dadJokeButton');

dadJokeButton.addEventListener('click', addNewJoke);



