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

export default function Swap() {
  const [amountIn, setAmountIn] = useState("");
  const [tokenIn, setTokenIn] = useState("0xTokenA");
  const [tokenOut, setTokenOut] = useState("0xTokenB");

  const { writeContractAsync, data: hash } = useWriteContract();
  const { isLoading, isSuccess, isError } = useWaitForTransactionReceipt({
    hash,
  });

  const handleSwap = async () => {
    try {
      await writeContractAsync({
        address: "0xYourRouterAddress",
        abi: routerAbi,
        functionName: "swapExactTokensForTokens",
        args: [
          amountIn,
          0, // min amountOut
          [tokenIn, tokenOut],
          "0xYourUserAddress",
          Math.floor(Date.now() / 1000) + 60 * 20, // deadline
        ],
      });
      toast.info("Transaction sent...");
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  if (isSuccess) toast.success("Swap successful!");
  if (isError) toast.error("Swap failed!");

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Swap</h1>
      <input
        type="text"
        placeholder="Amount In"
        value={amountIn}
        onChange={(e) => setAmountIn(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button
        onClick={handleSwap}
        className="bg-indigo-500 text-white px-4 py-2 rounded"
        disabled={isLoading}
      >
        {isLoading ? "Swapping..." : "Swap"}
      </button>
    </div>
  );
}
