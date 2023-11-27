import {
  UseContractEventConfig,
  UseContractReadConfig,
  UseContractWriteConfig,
  UsePrepareContractWriteConfig,
  useContractEvent,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi"
import {
  PrepareWriteContractResult,
  ReadContractResult,
  WriteContractMode,
} from "wagmi/actions"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20ABI = [
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "string" }],
  },
  {
    constant: false,
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "_spender", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "success", type: "bool" }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    constant: false,
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "_from", type: "address" },
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "success", type: "bool" }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "", type: "address" }],
    name: "balances",
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "", type: "address" },
      { name: "", type: "address" },
    ],
    name: "allowed",
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
  },
  {
    constant: false,
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "success", type: "bool" }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "_owner", type: "address" },
      { name: "_spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "remaining", type: "uint256" }],
  },
  {
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [
      { name: "_initialAmount", type: "uint256" },
      { name: "_tokenName", type: "string" },
      { name: "_decimalUnits", type: "uint8" },
      { name: "_tokenSymbol", type: "string" },
    ],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_from", type: "address", indexed: true },
      { name: "_to", type: "address", indexed: true },
      { name: "_value", type: "uint256", indexed: false },
    ],
    name: "Transfer",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_owner", type: "address", indexed: true },
      { name: "_spender", type: "address", indexed: true },
      { name: "_value", type: "uint256", indexed: false },
    ],
    name: "Approval",
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc20Mintable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20MintableABI = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [
      { name: "name", internalType: "string", type: "string" },
      { name: "symbol", internalType: "string", type: "string" },
    ],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Transfer",
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "subtractedValue", internalType: "uint256", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "addedValue", internalType: "uint256", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "mint",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    "abi"
  > = {} as any
) {
  return useContractRead({ abi: erc20ABI, ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"name"`.
 */
export function useErc20Name<
  TFunctionName extends "name",
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: "name",
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useErc20TotalSupply<
  TFunctionName extends "totalSupply",
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: "totalSupply",
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"balances"`.
 */
export function useErc20Balances<
  TFunctionName extends "balances",
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: "balances",
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decimals"`.
 */
export function useErc20Decimals<
  TFunctionName extends "decimals",
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: "decimals",
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"allowed"`.
 */
export function useErc20Allowed<
  TFunctionName extends "allowed",
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: "allowed",
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc20BalanceOf<
  TFunctionName extends "balanceOf",
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: "balanceOf",
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc20Symbol<
  TFunctionName extends "symbol",
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: "symbol",
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"allowance"`.
 */
export function useErc20Allowance<
  TFunctionName extends "allowance",
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: "allowance",
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc20ABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof erc20ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any
) {
  return useContractWrite<typeof erc20ABI, TFunctionName, TMode>({
    abi: erc20ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function useErc20Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          "approve"
        >["request"]["abi"],
        "approve",
        TMode
      > & { functionName?: "approve" }
    : UseContractWriteConfig<typeof erc20ABI, "approve", TMode> & {
        abi?: never
        functionName?: "approve"
      } = {} as any
) {
  return useContractWrite<typeof erc20ABI, "approve", TMode>({
    abi: erc20ABI,
    functionName: "approve",
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc20TransferFrom<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          "transferFrom"
        >["request"]["abi"],
        "transferFrom",
        TMode
      > & { functionName?: "transferFrom" }
    : UseContractWriteConfig<typeof erc20ABI, "transferFrom", TMode> & {
        abi?: never
        functionName?: "transferFrom"
      } = {} as any
) {
  return useContractWrite<typeof erc20ABI, "transferFrom", TMode>({
    abi: erc20ABI,
    functionName: "transferFrom",
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function useErc20Transfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          "transfer"
        >["request"]["abi"],
        "transfer",
        TMode
      > & { functionName?: "transfer" }
    : UseContractWriteConfig<typeof erc20ABI, "transfer", TMode> & {
        abi?: never
        functionName?: "transfer"
      } = {} as any
) {
  return useContractWrite<typeof erc20ABI, "transfer", TMode>({
    abi: erc20ABI,
    functionName: "transfer",
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function usePrepareErc20Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, TFunctionName>,
    "abi"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc20Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, "approve">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: "approve",
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, "approve">)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc20TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, "transferFrom">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: "transferFrom",
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, "transferFrom">)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareErc20Transfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, "transfer">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: "transfer",
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, "transfer">)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, TEventName>,
    "abi"
  > = {} as any
) {
  return useContractEvent({
    abi: erc20ABI,
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc20TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, "Transfer">,
    "abi" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: erc20ABI,
    eventName: "Transfer",
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, "Transfer">)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc20ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, "Approval">,
    "abi" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: erc20ABI,
    eventName: "Approval",
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, "Approval">)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20MintableABI}__.
 */
export function useErc20MintableRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc20MintableABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20MintableABI, TFunctionName, TSelectData>,
    "abi"
  > = {} as any
) {
  return useContractRead({
    abi: erc20MintableABI,
    ...config,
  } as UseContractReadConfig<typeof erc20MintableABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20MintableABI}__ and `functionName` set to `"allowance"`.
 */
export function useErc20MintableAllowance<
  TFunctionName extends "allowance",
  TSelectData = ReadContractResult<typeof erc20MintableABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20MintableABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: erc20MintableABI,
    functionName: "allowance",
    ...config,
  } as UseContractReadConfig<typeof erc20MintableABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20MintableABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc20MintableBalanceOf<
  TFunctionName extends "balanceOf",
  TSelectData = ReadContractResult<typeof erc20MintableABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20MintableABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: erc20MintableABI,
    functionName: "balanceOf",
    ...config,
  } as UseContractReadConfig<typeof erc20MintableABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20MintableABI}__ and `functionName` set to `"decimals"`.
 */
export function useErc20MintableDecimals<
  TFunctionName extends "decimals",
  TSelectData = ReadContractResult<typeof erc20MintableABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20MintableABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: erc20MintableABI,
    functionName: "decimals",
    ...config,
  } as UseContractReadConfig<typeof erc20MintableABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20MintableABI}__ and `functionName` set to `"name"`.
 */
export function useErc20MintableName<
  TFunctionName extends "name",
  TSelectData = ReadContractResult<typeof erc20MintableABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20MintableABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: erc20MintableABI,
    functionName: "name",
    ...config,
  } as UseContractReadConfig<typeof erc20MintableABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20MintableABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc20MintableSymbol<
  TFunctionName extends "symbol",
  TSelectData = ReadContractResult<typeof erc20MintableABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20MintableABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: erc20MintableABI,
    functionName: "symbol",
    ...config,
  } as UseContractReadConfig<typeof erc20MintableABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20MintableABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useErc20MintableTotalSupply<
  TFunctionName extends "totalSupply",
  TSelectData = ReadContractResult<typeof erc20MintableABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20MintableABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: erc20MintableABI,
    functionName: "totalSupply",
    ...config,
  } as UseContractReadConfig<typeof erc20MintableABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20MintableABI}__.
 */
export function useErc20MintableWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20MintableABI,
          string
        >["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof erc20MintableABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any
) {
  return useContractWrite<typeof erc20MintableABI, TFunctionName, TMode>({
    abi: erc20MintableABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20MintableABI}__ and `functionName` set to `"approve"`.
 */
export function useErc20MintableApprove<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20MintableABI,
          "approve"
        >["request"]["abi"],
        "approve",
        TMode
      > & { functionName?: "approve" }
    : UseContractWriteConfig<typeof erc20MintableABI, "approve", TMode> & {
        abi?: never
        functionName?: "approve"
      } = {} as any
) {
  return useContractWrite<typeof erc20MintableABI, "approve", TMode>({
    abi: erc20MintableABI,
    functionName: "approve",
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20MintableABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function useErc20MintableDecreaseAllowance<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20MintableABI,
          "decreaseAllowance"
        >["request"]["abi"],
        "decreaseAllowance",
        TMode
      > & { functionName?: "decreaseAllowance" }
    : UseContractWriteConfig<
        typeof erc20MintableABI,
        "decreaseAllowance",
        TMode
      > & {
        abi?: never
        functionName?: "decreaseAllowance"
      } = {} as any
) {
  return useContractWrite<typeof erc20MintableABI, "decreaseAllowance", TMode>({
    abi: erc20MintableABI,
    functionName: "decreaseAllowance",
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20MintableABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function useErc20MintableIncreaseAllowance<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20MintableABI,
          "increaseAllowance"
        >["request"]["abi"],
        "increaseAllowance",
        TMode
      > & { functionName?: "increaseAllowance" }
    : UseContractWriteConfig<
        typeof erc20MintableABI,
        "increaseAllowance",
        TMode
      > & {
        abi?: never
        functionName?: "increaseAllowance"
      } = {} as any
) {
  return useContractWrite<typeof erc20MintableABI, "increaseAllowance", TMode>({
    abi: erc20MintableABI,
    functionName: "increaseAllowance",
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20MintableABI}__ and `functionName` set to `"mint"`.
 */
export function useErc20MintableMint<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20MintableABI,
          "mint"
        >["request"]["abi"],
        "mint",
        TMode
      > & { functionName?: "mint" }
    : UseContractWriteConfig<typeof erc20MintableABI, "mint", TMode> & {
        abi?: never
        functionName?: "mint"
      } = {} as any
) {
  return useContractWrite<typeof erc20MintableABI, "mint", TMode>({
    abi: erc20MintableABI,
    functionName: "mint",
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20MintableABI}__ and `functionName` set to `"transfer"`.
 */
export function useErc20MintableTransfer<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20MintableABI,
          "transfer"
        >["request"]["abi"],
        "transfer",
        TMode
      > & { functionName?: "transfer" }
    : UseContractWriteConfig<typeof erc20MintableABI, "transfer", TMode> & {
        abi?: never
        functionName?: "transfer"
      } = {} as any
) {
  return useContractWrite<typeof erc20MintableABI, "transfer", TMode>({
    abi: erc20MintableABI,
    functionName: "transfer",
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20MintableABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc20MintableTransferFrom<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20MintableABI,
          "transferFrom"
        >["request"]["abi"],
        "transferFrom",
        TMode
      > & { functionName?: "transferFrom" }
    : UseContractWriteConfig<typeof erc20MintableABI, "transferFrom", TMode> & {
        abi?: never
        functionName?: "transferFrom"
      } = {} as any
) {
  return useContractWrite<typeof erc20MintableABI, "transferFrom", TMode>({
    abi: erc20MintableABI,
    functionName: "transferFrom",
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20MintableABI}__.
 */
export function usePrepareErc20MintableWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20MintableABI, TFunctionName>,
    "abi"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: erc20MintableABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20MintableABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20MintableABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc20MintableApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20MintableABI, "approve">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: erc20MintableABI,
    functionName: "approve",
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20MintableABI, "approve">)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20MintableABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function usePrepareErc20MintableDecreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20MintableABI, "decreaseAllowance">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: erc20MintableABI,
    functionName: "decreaseAllowance",
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20MintableABI, "decreaseAllowance">)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20MintableABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function usePrepareErc20MintableIncreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20MintableABI, "increaseAllowance">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: erc20MintableABI,
    functionName: "increaseAllowance",
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20MintableABI, "increaseAllowance">)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20MintableABI}__ and `functionName` set to `"mint"`.
 */
export function usePrepareErc20MintableMint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20MintableABI, "mint">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: erc20MintableABI,
    functionName: "mint",
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20MintableABI, "mint">)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20MintableABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareErc20MintableTransfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20MintableABI, "transfer">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: erc20MintableABI,
    functionName: "transfer",
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20MintableABI, "transfer">)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20MintableABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc20MintableTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20MintableABI, "transferFrom">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: erc20MintableABI,
    functionName: "transferFrom",
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20MintableABI, "transferFrom">)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20MintableABI}__.
 */
export function useErc20MintableEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc20MintableABI, TEventName>,
    "abi"
  > = {} as any
) {
  return useContractEvent({
    abi: erc20MintableABI,
    ...config,
  } as UseContractEventConfig<typeof erc20MintableABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20MintableABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc20MintableApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof erc20MintableABI, "Approval">,
    "abi" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: erc20MintableABI,
    eventName: "Approval",
    ...config,
  } as UseContractEventConfig<typeof erc20MintableABI, "Approval">)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20MintableABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc20MintableTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof erc20MintableABI, "Transfer">,
    "abi" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: erc20MintableABI,
    eventName: "Transfer",
    ...config,
  } as UseContractEventConfig<typeof erc20MintableABI, "Transfer">)
}