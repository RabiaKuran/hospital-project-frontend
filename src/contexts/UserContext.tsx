import { Children, createContext, useState } from "react"

interface IUser {
    userName: string;
    role: string
}
type getUser = () => IUser;
type setUser = (user: IUser) => void;

export interface IUserContext {
    getUser: getUser;
    setUser: setUser;
}

export const UserContext = createContext<IUserContext | null>(null);

const UserContextProvider = (props: any) => {
    const user: IUser = {
        userName: "test",
        role: "Manager"
    }

    const [currentUser, setCurrentUser] = useState<IUser>(user);
    return <UserContext.Provider
        value={{
            getUser: () => { return currentUser },
            setUser: setCurrentUser
        }}>
        {props.children}
    </UserContext.Provider>

}

export default UserContextProvider;