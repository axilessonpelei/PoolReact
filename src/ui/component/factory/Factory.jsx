import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../core/context/context.jsx";
import serviceF from "../../../service/serviceFactory/serviceF.js";
import PoolCard from "../poolCard/poolCard.jsx"; // Импортируем компонент для отображения пула

const Factory = () => {
    const { wallet, fetchBalance } = useContext(AppContext);
    const [pools, setPools] = useState([]); // Список пулов
    const [tokenA, setTokenA] = useState("");
    const [tokenB, setTokenB] = useState("");
    const [reserveA, setReserveA] = useState("");
    const [reserveB, setReserveB] = useState("");

    // Функция получения списка пулов
    const fetchPools = async () => {
            const poolAddresses = await serviceF.getPools();
            setPools(poolAddresses || []); // Если нет пулов, ставим пустой массив
    };
    // Загрузка списка пулов при первом рендере
    useEffect(() => {
        fetchPools();
    }, []);

    // Функция для создания пула
    const createPool = async (e) => {
        e.preventDefault();
        await serviceF.createPool(tokenA, tokenB, reserveA, reserveB, wallet);
        await fetchPools();
        await fetchBalance();
    };

    // Проверка на пустой кошелек
    if (wallet.length === 0) {
        return (
            <div>
                <h2>Список пулов</h2>
                <div className="pool-list">
                    {pools.length > 0 && pools.map((pool, index) => (
                        <PoolCard key={index} poolAddress={pool}/> // Рендерим каждый пул с помощью PoolCard
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="container">
                {wallet.length > 0 && (
                    <>
                        <h2>Создание Pool</h2>
                        <form onSubmit={createPool}>
                            <div>
                                <label>Token A</label>
                                <input
                                    placeholder="Token A"
                                    type="text"
                                    className="form-control"
                                    value={tokenA}
                                    onChange={(e) => setTokenA(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label>Token B</label>
                                <input
                                    placeholder="Token B"
                                    type="text"
                                    className="form-control"
                                    value={tokenB}
                                    onChange={(e) => setTokenB(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label>Reserve A</label>
                                <input
                                    placeholder="Reserve A"
                                    type="number"
                                    className="form-control"
                                    value={reserveA}
                                    onChange={(e) => setReserveA(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label>Reserve B</label>
                                <input
                                    placeholder="Reserve B"
                                    type="number"
                                    className="form-control"
                                    value={reserveB}
                                    onChange={(e) => setReserveB(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Создать Pool</button>
                        </form>
                    </>
                )}
            </div>

            <h2>Список пулов</h2>
            <div className="pool-list">
                {pools.length > 0 && pools.map((pool, index) => (
                    <PoolCard key={index} poolAddress={pool}/> // Рендерим каждый пул с помощью PoolCard
                ))}
            </div>
        </div>
    );
};

export default Factory;
