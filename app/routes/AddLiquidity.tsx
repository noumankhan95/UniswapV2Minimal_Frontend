import { useState } from "react";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { toast } from "react-toastify";
import {
  routerAddress,
  wethAddress,
  usdtAddress,
  usdtAbi,
  wethAbi,
  routerAbi,
  //@ts-ignore
} from "constants/contract.js";

export default function Liquidity() {
  const [tokenA, setTokenA] = useState("");
  const [tokenB, setTokenB] = useState("");
  const [amountA, setAmountA] = useState("");
  const [amountB, setAmountB] = useState("");

  const { writeContractAsync, data: hash } = useWriteContract();
  const { isLoading, isSuccess, isError } = useWaitForTransactionReceipt({
    hash,
  });

  const handleAdd = async () => {
    if (!tokenA || !tokenB || !amountA || !amountB) {
      toast.error("Please enter both tokens and amounts.");
      return;
    }

    try {
      await writeContractAsync({
        address: routerAddress,
        abi: routerAbi,
        functionName: "AddLiquidity", // your Router uses AddLiquidity (capital A)
        args: [
          tokenA,
          tokenB,
          BigInt(amountA), // amounts must be passed as uint
          BigInt(amountB),
        ],
      });
      toast.info("Adding liquidity...");
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  if (isSuccess) toast.success("Liquidity added!");
  if (isError) toast.error("Add failed!");

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl mb-4 font-bold">Add Liquidity</h1>

      <input
        type="text"
        placeholder="Token A address"
        value={tokenA}
        onChange={(e) => setTokenA(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Token B address"
        value={tokenB}
        onChange={(e) => setTokenB(e.target.value)}
        className="border p-2 mb-2 w-full"
      />

      <input
        type="text"
        placeholder="Amount Token A"
        value={amountA}
        onChange={(e) => setAmountA(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Amount Token B"
        value={amountB}
        onChange={(e) => setAmountB(e.target.value)}
        className="border p-2 mb-2 w-full"
      />

      <button
        onClick={handleAdd}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        disabled={isLoading}
      >
        {isLoading ? "Adding..." : "Add Liquidity"}
      </button>
    </div>
  );
}
