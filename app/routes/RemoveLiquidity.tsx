import { useState } from "react";
import {
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { toast } from "react-toastify";
import {
  routerAddress,
  wethAddress,
  usdtAddress,
  usdtAbi,
  wethAbi,
  routerAbi,
  factoryAddress,
  FactoryAbi,
  ERC20Abi,
  EngineAbi,
  //@ts-ignore
} from "constants/contract.js";
import { parseUnits } from "viem";

export default function RemoveLiquidity() {
  const [lpAmount, setLpAmount] = useState("");
  const [tokenA, setTokenA] = useState(wethAddress);
  const [tokenB, setTokenB] = useState(usdtAddress);

  const { address: userAddress } = useAccount();

  const { writeContractAsync, data: hash } = useWriteContract();
  const { isLoading, isSuccess, isError } = useWaitForTransactionReceipt({
    hash,
  });

  const handleRemove = async () => {
    if (!lpAmount || !tokenA || !tokenB) {
      toast.error("Please provide tokens and amount.");
      return;
    }

    try {
      const liquidity = parseUnits(lpAmount, 18);
      await writeContractAsync({
        address: "0x856e4424f806D16E8CBC702B3c0F2ede5468eae5",
        abi: ERC20Abi,
        functionName: "approve",
        args: [routerAddress, liquidity],
      });
      await writeContractAsync({
        address: routerAddress,
        abi: routerAbi,
        functionName: "removeLiquidity",
        args: [tokenA, tokenB, liquidity],
      });

      toast.info("Removing liquidity...");
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  if (isSuccess) toast.success("Liquidity removed!");
  if (isError) toast.error("Remove liquidity failed!");

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl mb-4 font-bold">Remove Liquidity</h1>

      <input
        type="text"
        placeholder="Token A Address"
        value={tokenA}
        onChange={(e) => setTokenA(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Token B Address"
        value={tokenB}
        onChange={(e) => setTokenB(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="LP Amount"
        value={lpAmount}
        onChange={(e) => setLpAmount(e.target.value)}
        className="border p-2 mb-2 w-full"
      />

      <button
        onClick={handleRemove}
        className="bg-red-600 text-white px-4 py-2 rounded w-full"
        disabled={isLoading}
      >
        {isLoading ? "Removing..." : "Remove Liquidity"}
      </button>
    </div>
  );
}
