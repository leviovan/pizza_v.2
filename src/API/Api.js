import axios from "axios";


async function getPizzas() {
    try {
        const { data } = await axios.get('https://62a7698997b6156bff8e050f.mockapi.io/pizzas');
        console.log(data);
        return data
    } catch (e) {
        console.error(e);
    }
}

export default getPizzas