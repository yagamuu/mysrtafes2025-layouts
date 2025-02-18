// @author: Cma
// @see: https://github.com/cma2819/gunma-rta-layouts/blob/master/src/extension/twitch.ts
import axios from 'axios';

type Response<T> = {
  data: T;
}

type MarkerResponse = {
  id: string;
  created_at: string;
  position_seconds: number;
  description: string;
}

export const twitch = ({ clientId, bearer }: { clientId: string, bearer: string }) => {
  const axiosInstance = axios.create({
    baseURL: 'https://api.twitch.tv/helix/',
    headers: {
      'Authorization': `Bearer ${bearer}`,
      'Client-Id': clientId
    }
  });

  return {
    checkMarkers: async (user_id: string, description: string) => {
      const response = await axiosInstance.post<Response<MarkerResponse[]>>('streams/markers', {
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