import axios from 'axios';
import { useEffect, useState } from 'react'
import { iUser } from './interface';

export const useGetUsersWithAxios = () => {
  const [data, setData] = useState<Array<iUser> | null>(null);
  const [loading, setLoading] = useState(true);

  const getData = (): Promise<any> => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  };

  useEffect(() => {
    const func = async () => {
      const {data} = await getData();
      setData(data);
      setLoading(false);
    };
    func();
  }, []);

  return {data, loading};
}