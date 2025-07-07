import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "./getEnv";

export const useStacks = () => {

  return useQuery({
    queryKey: ["stacks"],
    queryFn: () =>
      axios.get(`${API}/stacks`).then((res) => {
        console.log(res.data);
        return res.data.data;
      }),
  });
};
