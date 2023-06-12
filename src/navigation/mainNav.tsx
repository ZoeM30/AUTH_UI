import React, { FunctionComponent, useState } from "react";
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from "./authstack";
import AppStack from "./appstack";

const MainNav: FunctionComponent = () => {
    const [user, setUser] = useState(null);


    return (
        <NavigationContainer>
            {user !== null ? <AppStack /> : <AuthStack />}

        </NavigationContainer>
    )
}

export default MainNav

