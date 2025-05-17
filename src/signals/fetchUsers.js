import {clicked} from "./clicked.js";
import {name} from "./name.js";
import {content} from "./content.js";

export async function fetchUsers() {
    const data = await fetch("https://dummyjson.com/users")
    /**
     * @type import("./users.d.ts").Users
     */
    const json = await data.json()
    console.log(json)
    let firstUser = json.users[0];
    name.set(firstUser.firstName)
    clicked.set(clicked.get() + 1)
    content.set(JSON.stringify(firstUser, null, 2))
}

// setTimeout(async () => {
//     await fetchUsers()
// }, 3000)
