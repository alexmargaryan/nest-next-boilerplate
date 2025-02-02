/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Nest-Next
 * Nest-Next Application Rest Api
 * OpenAPI spec version: 0.0.1
 */
import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import { axiosInstance } from "../../config/axios.config";
import type { CreateUserDto, UpdateUserDto, UserDto } from "./";

export const appControllerGetHello = (signal?: AbortSignal) => {
  return axiosInstance<void>({ url: `/`, method: "GET", signal });
};

export const getAppControllerGetHelloQueryKey = () => {
  return [`/`] as const;
};

export const getAppControllerGetHelloQueryOptions = <
  TData = Awaited<ReturnType<typeof appControllerGetHello>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof appControllerGetHello>>,
      TError,
      TData
    >
  >;
}) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getAppControllerGetHelloQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof appControllerGetHello>>
  > = ({ signal }) => appControllerGetHello(signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof appControllerGetHello>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData> };
};

export type AppControllerGetHelloQueryResult = NonNullable<
  Awaited<ReturnType<typeof appControllerGetHello>>
>;
export type AppControllerGetHelloQueryError = unknown;

export function useAppControllerGetHello<
  TData = Awaited<ReturnType<typeof appControllerGetHello>>,
  TError = unknown,
>(options: {
  query: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof appControllerGetHello>>,
      TError,
      TData
    >
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof appControllerGetHello>>,
        TError,
        TData
      >,
      "initialData"
    >;
}): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>;
};
export function useAppControllerGetHello<
  TData = Awaited<ReturnType<typeof appControllerGetHello>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof appControllerGetHello>>,
      TError,
      TData
    >
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof appControllerGetHello>>,
        TError,
        TData
      >,
      "initialData"
    >;
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useAppControllerGetHello<
  TData = Awaited<ReturnType<typeof appControllerGetHello>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof appControllerGetHello>>,
      TError,
      TData
    >
  >;
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

export function useAppControllerGetHello<
  TData = Awaited<ReturnType<typeof appControllerGetHello>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof appControllerGetHello>>,
      TError,
      TData
    >
  >;
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
  const queryOptions = getAppControllerGetHelloQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const usersControllerCreate = (
  createUserDto: CreateUserDto,
  signal?: AbortSignal
) => {
  return axiosInstance<UserDto>({
    url: `/users`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: createUserDto,
    signal,
  });
};

export const getUsersControllerCreateMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersControllerCreate>>,
    TError,
    { data: CreateUserDto },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof usersControllerCreate>>,
  TError,
  { data: CreateUserDto },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof usersControllerCreate>>,
    { data: CreateUserDto }
  > = (props) => {
    const { data } = props ?? {};

    return usersControllerCreate(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type UsersControllerCreateMutationResult = NonNullable<
  Awaited<ReturnType<typeof usersControllerCreate>>
>;
export type UsersControllerCreateMutationBody = CreateUserDto;
export type UsersControllerCreateMutationError = unknown;

export const useUsersControllerCreate = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersControllerCreate>>,
    TError,
    { data: CreateUserDto },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof usersControllerCreate>>,
  TError,
  { data: CreateUserDto },
  TContext
> => {
  const mutationOptions = getUsersControllerCreateMutationOptions(options);

  return useMutation(mutationOptions);
};

export const usersControllerFindAll = (signal?: AbortSignal) => {
  return axiosInstance<UserDto[]>({ url: `/users`, method: "GET", signal });
};

export const getUsersControllerFindAllQueryKey = () => {
  return [`/users`] as const;
};

export const getUsersControllerFindAllQueryOptions = <
  TData = Awaited<ReturnType<typeof usersControllerFindAll>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof usersControllerFindAll>>,
      TError,
      TData
    >
  >;
}) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getUsersControllerFindAllQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof usersControllerFindAll>>
  > = ({ signal }) => usersControllerFindAll(signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof usersControllerFindAll>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData> };
};

export type UsersControllerFindAllQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersControllerFindAll>>
>;
export type UsersControllerFindAllQueryError = unknown;

export function useUsersControllerFindAll<
  TData = Awaited<ReturnType<typeof usersControllerFindAll>>,
  TError = unknown,
>(options: {
  query: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof usersControllerFindAll>>,
      TError,
      TData
    >
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof usersControllerFindAll>>,
        TError,
        TData
      >,
      "initialData"
    >;
}): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>;
};
export function useUsersControllerFindAll<
  TData = Awaited<ReturnType<typeof usersControllerFindAll>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof usersControllerFindAll>>,
      TError,
      TData
    >
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof usersControllerFindAll>>,
        TError,
        TData
      >,
      "initialData"
    >;
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useUsersControllerFindAll<
  TData = Awaited<ReturnType<typeof usersControllerFindAll>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof usersControllerFindAll>>,
      TError,
      TData
    >
  >;
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

export function useUsersControllerFindAll<
  TData = Awaited<ReturnType<typeof usersControllerFindAll>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof usersControllerFindAll>>,
      TError,
      TData
    >
  >;
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
  const queryOptions = getUsersControllerFindAllQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const usersControllerFindOne = (id: string, signal?: AbortSignal) => {
  return axiosInstance<UserDto>({ url: `/users/${id}`, method: "GET", signal });
};

export const getUsersControllerFindOneQueryKey = (id: string) => {
  return [`/users/${id}`] as const;
};

export const getUsersControllerFindOneQueryOptions = <
  TData = Awaited<ReturnType<typeof usersControllerFindOne>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof usersControllerFindOne>>,
        TError,
        TData
      >
    >;
  }
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getUsersControllerFindOneQueryKey(id);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof usersControllerFindOne>>
  > = ({ signal }) => usersControllerFindOne(id, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof usersControllerFindOne>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData> };
};

export type UsersControllerFindOneQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersControllerFindOne>>
>;
export type UsersControllerFindOneQueryError = unknown;

export function useUsersControllerFindOne<
  TData = Awaited<ReturnType<typeof usersControllerFindOne>>,
  TError = unknown,
>(
  id: string,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof usersControllerFindOne>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof usersControllerFindOne>>,
          TError,
          TData
        >,
        "initialData"
      >;
  }
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>;
};
export function useUsersControllerFindOne<
  TData = Awaited<ReturnType<typeof usersControllerFindOne>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof usersControllerFindOne>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof usersControllerFindOne>>,
          TError,
          TData
        >,
        "initialData"
      >;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useUsersControllerFindOne<
  TData = Awaited<ReturnType<typeof usersControllerFindOne>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof usersControllerFindOne>>,
        TError,
        TData
      >
    >;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

export function useUsersControllerFindOne<
  TData = Awaited<ReturnType<typeof usersControllerFindOne>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof usersControllerFindOne>>,
        TError,
        TData
      >
    >;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
  const queryOptions = getUsersControllerFindOneQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const usersControllerUpdate = (
  id: string,
  updateUserDto: UpdateUserDto
) => {
  return axiosInstance<void>({
    url: `/users/${id}`,
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    data: updateUserDto,
  });
};

export const getUsersControllerUpdateMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersControllerUpdate>>,
    TError,
    { id: string; data: UpdateUserDto },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof usersControllerUpdate>>,
  TError,
  { id: string; data: UpdateUserDto },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof usersControllerUpdate>>,
    { id: string; data: UpdateUserDto }
  > = (props) => {
    const { id, data } = props ?? {};

    return usersControllerUpdate(id, data);
  };

  return { mutationFn, ...mutationOptions };
};

export type UsersControllerUpdateMutationResult = NonNullable<
  Awaited<ReturnType<typeof usersControllerUpdate>>
>;
export type UsersControllerUpdateMutationBody = UpdateUserDto;
export type UsersControllerUpdateMutationError = unknown;

export const useUsersControllerUpdate = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersControllerUpdate>>,
    TError,
    { id: string; data: UpdateUserDto },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof usersControllerUpdate>>,
  TError,
  { id: string; data: UpdateUserDto },
  TContext
> => {
  const mutationOptions = getUsersControllerUpdateMutationOptions(options);

  return useMutation(mutationOptions);
};

export const usersControllerRemove = (id: string) => {
  return axiosInstance<void>({ url: `/users/${id}`, method: "DELETE" });
};

export const getUsersControllerRemoveMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersControllerRemove>>,
    TError,
    { id: string },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof usersControllerRemove>>,
  TError,
  { id: string },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof usersControllerRemove>>,
    { id: string }
  > = (props) => {
    const { id } = props ?? {};

    return usersControllerRemove(id);
  };

  return { mutationFn, ...mutationOptions };
};

export type UsersControllerRemoveMutationResult = NonNullable<
  Awaited<ReturnType<typeof usersControllerRemove>>
>;

export type UsersControllerRemoveMutationError = unknown;

export const useUsersControllerRemove = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersControllerRemove>>,
    TError,
    { id: string },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof usersControllerRemove>>,
  TError,
  { id: string },
  TContext
> => {
  const mutationOptions = getUsersControllerRemoveMutationOptions(options);

  return useMutation(mutationOptions);
};
