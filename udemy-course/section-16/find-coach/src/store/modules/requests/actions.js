export default {
    async contactCoach(context, payload) {
        const newRequest = {
            // coachId: payload.coachId,
            userEmail: payload.email,
            message: payload.message,
        }

        const response = await fetch(`https://find-coach-f8856-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest)
        });
        const respData = await response.json();

        if (!response.ok) {
            const error = new Error(respData.message || 'failed to send request')
            throw error;
        }


        newRequest.id = respData.name;
        newRequest.coachId = payload.coachId;

        context.commit('addRequest', newRequest)
    },
    async fetchRequests(context) {
        const coachId = context.rootGetters.userId;
        const response = await fetch(`https://find-coach-f8856-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`)
        const respData = await response.json();

        if (!response.ok) {
            const error = new Error(respData.message || 'failed to send request')
            throw error;
        }

        const requests = [];

        for (const key in respData) {
            const request = {
                id: key,
                coachId: coachId,
                userEmail: respData[key].userEmail,
                message: respData[key].message,
            }
            requests.push(request)
        }

        context.commit('setRequests', requests)

    }
}