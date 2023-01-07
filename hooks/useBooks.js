import axios from 'axios';
import {API_BASE_PATH} from '@env';
import { useQuery, useMutation } from 'react-query';

const fetchBooks = async () => {
    const data = await axios.get(`${API_BASE_PATH}?collection=books`);
    return data.data;
}

const postBooks = async (data) => {
    const request = await axios.post(API_BASE_PATH, data);
    return request.data;
};

export const useFetchBooks = () => useQuery(["books"], fetchBooks, {
    refetchOnWindowFocus: true
});

export const usePostBooks = () => {
    return useMutation(postBooks)
}