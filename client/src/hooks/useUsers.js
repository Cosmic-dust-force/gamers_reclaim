import { useState } from "react";
import * as usersController from "../axios-services/users";

function useUsers() {
    const [usersError, setUsersError] = useState('');

    async function login(email, password){
        try {
            const data = await usersController.login(email, password);
            console.log("quah!", data.user);
          } catch (error) {
            setUsersError(error.message);
          }
    }

    return {login, usersError};
}

export default useUsers;