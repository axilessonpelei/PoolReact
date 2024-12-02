import {useContext, useState} from "react";
import { AppContext } from "../../../core/context/context.jsx";
import Header from "../../component/header/Header.jsx";
import serviceR from "../../../service/serviceRouter/serviceR.js";

const Router = () => {
    const { wallet, fetchBalance} = useContext(AppContext);

    const [demand, setDemand] = useState("");
    const [demandToken, setDemandToken] = useState("");
    const [supplyToken, setSupplyToken] = useState("");

    const trade = async (e) => {
        e.preventDefault();
        await serviceR.trade(demand, demandToken, supplyToken, wallet);
        await fetchBalance();
    };

    if (wallet.length == 0) {
        return <div>
            <Header/>
            <h2>зайдите в акаунт</h2>
        </div>;
    }

    return (
        <div>
            <Header />
            <div className="container">
            <h2>trade</h2>
            <form onSubmit={trade}>
                <label>колличество вложенных токенов</label>
                <input
                    placeholder="колличество"
                    type="number"
                    className="form-control"
                    value={demand}
                    onChange={(e) => setDemand(e.target.value)}
                    required
                />
                <label>demandToken</label>
                <input
                    placeholder="отдоваемый токен"
                    type="text"
                    className="form-control"
                    value={demandToken}
                    onChange={(e) => setDemandToken(e.target.value)}
                    required
                />
                <label>supplyToken</label>
                <input
                    placeholder="получаемый токен"
                    type="text"
                    className="form-control"
                    value={supplyToken}
                    onChange={(e) => setSupplyToken(e.target.value)}
                    required
                />
                <button type="submit" className="btn btn-primary">swap</button>
            </form>
            </div>
        </div>
    )
}
export default Router;