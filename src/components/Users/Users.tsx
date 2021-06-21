import React, { FC } from "react";
import { useGetUsers } from "./useGetUsers";

interface iUsersProps {
  [key: string]: any;
}

export const Users: FC<iUsersProps> = () => {
  const {data, loading} = useGetUsers(); 

  if (loading) return <div data-testid="loader">Loading</div>;

  return (
    <div data-testid="users">
      <h1>Users</h1>

      {data?.length &&
        data.slice(0, 10).map((item) => (
          <div key={item.id} data-testid="user">
            {item.name}
          </div>
        ))}
    </div>
  );
};
