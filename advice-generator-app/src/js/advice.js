const baseURL = "https://api.adviceslip.com";
class Advice {
    async getRandomAdvice() {
        try {
            let response = await fetch(`${baseURL}/advice`);
            let randomAdvice = await response.json();
            return randomAdvice;
        } catch(err) {
            throw err;
        }
    }
}

export default Advice;