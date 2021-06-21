import React, { FC } from "react";
import { useGetUsersWithAxios } from "./useGetUsersWithAxios";

interface iUsersProps {
  [key: string]: any;
}

export const UsersWithAxios: FC<iUsersProps> = () => {
  const {data, loading} = useGetUsersWithAxios(); 

  if (loading) return <div data-testid="user-with-axios-loader">Loading</div>;

  return (
    <div data-testid="users-with-axios">
      <h1>Users with axios</h1>

      {data?.length &&
        data.slice(0, 10).map((item) => (
          <div key={item.id} data-testid="users-with-axios-item">
            {item.name}
          </div>
        ))}
    </div>
  );
};
