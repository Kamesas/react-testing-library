import { useEffect, useState } from 'react'
import { iUser } from './interface';

export const useGetUsers = () => {
  const [data, setData] = useState<Array<iUser> | null>(null);
  const [loading, setLoading] = useState(true);

  const getData = (): Promise<any> => {
    return fetch("https://jsonplaceholder.typicode.com/users");
  };

  useEffect(() => {
    const func = async () => {
      const data = await getData();
      const value = await data.json();
      setData(value);
      setLoading(false);
    };
    func();
  }, []);

  return {data, loading};
}