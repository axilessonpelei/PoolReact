import { useState, useEffect, useContext } from "react";
import serviceS from "../../../service/serviceStaking/serviceS.js";
import Header from "../../component/header/Header.jsx";
import { AppContext } from "../../../core/context/context.jsx";

const Staking = () => {
    const { wallet, fetchBalance} = useContext(AppContext);
    const [stakingInfo, setStakingInfo] = useState({});
    const [amount, _setAmount] = useState("");


    const fetchStakingInfo = async () => {
            const info = await serviceS.getStaking(wallet); // Получаем информацию
            setStakingInfo(info);
    };

    useEffect(() => {
        fetchStakingInfo();
    }, [wallet]);

    const deposit = async (e) => {
        e.preventDefault();
        await serviceS.deposit(amount, wallet);
        await fetchStakingInfo();
        await fetchBalance();
    };

    const claimReward = async (e) => {
        e.preventDefault();
        await serviceS.claimReward(wallet);
        await fetchStakingInfo();
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
                <h2>Staking</h2>
                <form onSubmit={deposit}>
                    <label>Количество токенов для депозита:</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => _setAmount(e.target.value)}
                        className="form-control"
                        placeholder="Введите сумму"
                        required
                    />
                    <button type="submit" className="btn btn-primary">Deposit</button>
                </form>

                <form onSubmit={claimReward} className="mt-3">
                    <button type="submit" className="btn btn-secondary">Claim Reward</button>
                </form>

                <h3>Информация о стейкинге</h3>
                    <div className="staking-info">
                        <p><strong>Вложенные токены:</strong> {stakingInfo.stakedTokens?.toString() || 0}</p>
                        <p><strong>Последний депозит:</strong> {stakingInfo.lastDepositTime?.toString() || 0}</p>
                        <p><strong>Доступные награды:</strong> {stakingInfo.availableReward?.toString() || 0}</p>
                    </div>

            </div>
        </div>
    );
};

export default Staking;