/**
 * Класс для работы с API
 */
export class APIManager {
    static baseURL = 'https://4fb558da2428.ngrok.io/rest-api';

    /**
     * @param {string} methodName - Имя метода
     * @param {object} params - Параметры метода
     * @returns {Promise<any>} 
     */
    static async callMethod(methodName, params = {}) {
        const response = await fetch(`${APIManager.baseURL}/${methodName}`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });

        return response.json();
    }
}