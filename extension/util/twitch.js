// @author: Cma
// @see: https://github.com/cma2819/gunma-rta-layouts/blob/master/src/extension/twitch.ts
import axios from 'axios';
export const twitch = ({ clientId, bearer }) => {
    const axiosInstance = axios.create({
        baseURL: 'https://api.twitch.tv/helix/',
        headers: {
            'Authorization': `Bearer ${bearer}`,
            'Client-Id': clientId
        }
    });
    return {
        checkMarkers: async (user_id, description) => {
            const response = await axiosInstance.post('streams/markers', {
                user_id: user_id,
                description: description ?? ''
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            return response.data.data?.[0];
        }
    };
};
