import { Web3 } from "web3";
import abi from "./abi";

class ServicesP {
    web3 = new Web3(window.ethereum);
    contractAddress;
    contract;

    constructor(_poolAddress) {
        this.contractAddress = _poolAddress;
        this.contract = new this.web3.eth.Contract(abi, this.contractAddress);
    }

    // Обмен токенов
    async swap(fromAtoBToken, _amount, wallet) {
        try {
            // Выполнение обмена токенов
            return await this.contract.methods
                .swap(fromAtoBToken, _amount)
                .send({ from: wallet });
        } catch (error) {
            console.error("Ошибка при обмене токенов:", error.message);
            throw error; // Выбрасываем ошибку для обработки выше
        }
    }

    // Добавление ликвидности
    async addLiquidity(_amount, _transferA, wallet) {
        try {
            // Добавление ликвидности в пул
            return await this.contract.methods
                .addLiquidity(_amount, _transferA)
                .send({ from: wallet });
        } catch (error) {
            console.error("Ошибка при добавлении ликвидности:", error.message);
            throw error;
        }
    }

    // Получение информации о токенах
    async getTokenInfo(wallet) {
        try {
            // Получение информации о токенах с контракта
            return await this.contract.methods
                .getTokenInfo()
                .call({ from: wallet });
        } catch (error) {
            console.error("Ошибка при получении информации о токенах:", error.message);
            throw error;
        }
    }
}

export default ServicesP;
