import Header from "../../component/header/Header.jsx";
import {useContext} from "react";
import {AppContext} from "../../../core/context/context.jsx";

const Registr = () => {
    const {login, getBalance, wallet, fetchBalance} = useContext(AppContext);


    if (wallet.length == 0) {
        return (
            <div>
                <Header/>
                <div className="container">
                    <button onClick={login} className="btn btn-primary"> авторизоваться</button>
                </div>
            </div>
        )
    }
    return (
        <div>
            <Header/>
            <h3>Ваш баланс</h3>
            <div className="container">
                <p><strong>gerda :</strong> {getBalance.gerdaBalance.toString()}</p>
                <p><strong>krendel:</strong> {getBalance.krendelBalance.toString()}</p>
                <p><strong>rtk:</strong> {getBalance.rtkBalance.toString()}</p>
                <p><strong>profi :</strong> {getBalance.lpBalance.toString()}</p>
            </div>
        </div>
    )
}
export default Registr;