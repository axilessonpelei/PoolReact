import {createContext, useEffect, useState} from "react";
import serviceF from "../../service/serviceFactory/serviceF.js";
const AppContext = createContext({});
const AppProvider = ({ children }) => {
    const [wallet, setWallet] = useState([]); // Теперь wallet всегда строка
    const[getBalance, setGetBalance] = useState([]);

    const fetchBalance = async () => {
        const info = await serviceF.getBalance(wallet); // Получаем информацию
        setGetBalance(info);
    }

    useEffect(() => {
        fetchBalance();
    }, [wallet]);

    const login = async () => {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            const walletAddress = accounts[0];
            setWallet(walletAddress);
            console.log("Wallet connected:", walletAddress);
    };

    const logout = () => {
        setWallet("");
        console.log("Wallet disconnected");
    };

    const contextValues = {
        fetchBalance,
        login,
        logout,
        wallet,
        getBalance,
        setGetBalance
    };

    return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};
export { AppProvider, AppContext };