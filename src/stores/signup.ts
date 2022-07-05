import produce from "immer";
import create from "zustand";

type StateProps = {
  states: {
    name: string;
    email: string;
    password: string;
  };
  actions: {
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
  };
};

const useSignup = create<StateProps>((set) => {
  const setState = (fn: (state: StateProps) => void) => set(produce(fn));

  return {
    states: {
      name: "",
      email: "",
      password: "",
    },
    actions: {
      setName: (name: string) => {
        setState(({ states }: StateProps) => {
          states.name = name;
        });
      },
      setEmail: (email: string) => {
        setState(({ states }: StateProps) => {
          states.email = email;
        });
      },
      setPassword: (password: string) => {
        setState(({ states }: StateProps) => {
          states.password = password;
        });
      },
    },
  };
});

export default useSignup;
