import { useEffect, useState } from "react";
import ServicesP from "../../../service/servicePool/serviceP.js";

const TokenInfo = ({ poolAddress }) => {
    const [poolInfo, setPoolInfo] = useState(null);

    useEffect(() => {
        const getTokenInfo = async () => {
                const service = new ServicesP(poolAddress);  // Создаем экземпляр с адресом пула
                const info = await service.getTokenInfo();   // Вызываем метод
                setPoolInfo(info);

        };
        getTokenInfo();
    }, [poolAddress]);

    if (!poolInfo) {
        return <p>Загрузка...</p>;
    }

    return (
        <div>
            <p>TokenA: {poolInfo.nameA}</p>
            <p>TokenB: {poolInfo.nameB}</p>
            <p>Цена TokenA: {poolInfo.priceA .toString()} </p>
            <p>Цена TokenB: {poolInfo.priceB.toString()}</p>
            <p>Баланс TokenA: {poolInfo.amountA.toString()}</p>
            <p>Баланс TokenB: {poolInfo.amountB.toString()}</p>
        </div>
    );
};

export default TokenInfo;
