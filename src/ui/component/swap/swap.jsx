import { useContext, useState } from "react";
import { AppContext } from "../../../core/context/context.jsx";
import serviceP from "../../../service/servicePool/serviceP.js"; // Вы все равно будете использовать это, если создаете новый экземпляр в компоненте

const Swap = ({ poolAddress }) => {
    const { wallet } = useContext(AppContext);
    const [fromAtoBToken, setFromAtoBToken] = useState(false); // Преобразовал из строки в булево значение
    const [amount, _setAmount] = useState("");

    const swap = async (e) => {
        e.preventDefault();
        const poolService = new serviceP(poolAddress);
        await poolService.swap(fromAtoBToken, amount, wallet);

    };

    if (wallet.length === 0) {
        return <div>Подключите кошелек для продолжения.</div>;
    }

    return (
        <div className="card mb-4">
            <div className="card-header">
                <h5>Swap Tokens</h5>
            </div>
            <div className="card-body">
                <form onSubmit={swap}>
                    <div className="form-group">
                        <label>
                            From A to B:
                            <input
                                type="checkbox"
                                checked={fromAtoBToken}
                                onChange={() => setFromAtoBToken(!fromAtoBToken)}
                            />
                        </label>
                    </div>
                    <div>
                        <input
                            placeholder="Сумма"
                            type="number"
                            className="form-control"
                            value={amount}
                            onChange={(e) => _setAmount(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Swap</button>
                </form>
            </div>
        </div>
    );
};

export default Swap;
