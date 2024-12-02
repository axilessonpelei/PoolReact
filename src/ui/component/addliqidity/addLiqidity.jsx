import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../core/context/context.jsx";
import ServicePool from "../../../service/servicePool/serviceP.js";  // Исправим импорт

const AddLiquidity = ({ poolAddress }) => {
    const { wallet } = useContext(AppContext);

    const [_amount, setAmount] = useState("");
    const [_transferA, setTransferA] = useState(true); // Изначально добавляем токен A

    // Инициализация экземпляра ServicePool
    const [service, setService] = useState(null);

    useEffect(() => {
        if (poolAddress) {
            const poolService = new ServicePool(poolAddress); // Создаем новый экземпляр сервиса
            setService(poolService); // Сохраняем его в состоянии
        }
    }, [poolAddress]); // Экземпляр будет пересоздан, если poolAddress изменится

    const addLiquidity = async (e) => {
        e.preventDefault();
        await service.addLiquidity(_amount, _transferA, wallet);

    };

    if (wallet.length === 0) {
        return <div>Подключите кошелек для продолжения.</div>;
    }

    return (
        <div className="card mb-4">
            <div className="card-header">
                <h5>Добавить ликвидность</h5>
            </div>
            <div className="card-body">
                <form onSubmit={addLiquidity}>
                    <div className="form-group">
                        <label>Reserve A:</label>
                        <input
                            type="number"
                            value={_amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Перевести токен A?</label>
                        <input
                            type="checkbox"
                            checked={_transferA}
                            onChange={() => setTransferA(!_transferA)} // Меняем флаг
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Добавить ликвидность</button>
                </form>
            </div>
        </div>
    );
};

export default AddLiquidity;
