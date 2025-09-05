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

export default function Swap() {
  const [amountIn, setAmountIn] = useState("");
  const [tokenIn, setTokenIn] = useState(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  );
  const [tokenOut, setTokenOut] = useState(
    "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
  );

  const { address: userAddress } = useAccount();

  const { writeContractAsync, data: hash } = useWriteContract();
  const { isLoading, isSuccess, isError } = useWaitForTransactionReceipt({
    hash,
  });

  const handleSwap = async () => {
    if (!amountIn || !tokenIn || !tokenOut || !userAddress) {
      toast.error("Please fill all fields.");
      return;
    }

    try {
      const amount = parseUnits(amountIn, 18);

      // 1. Approve router to spend tokenIn
      await writeContractAsync({
        address: tokenIn,
        abi: ERC20Abi,
        functionName: "approve",
        args: [routerAddress, amount],
      });
      toast.info("Approval sent...");

      // 2. Call swapExactTokens
      await writeContractAsync({
        address: routerAddress,
        abi: routerAbi,
        functionName: "swapExactTokens",
        args: [
          tokenIn, // token user is giving
          tokenOut, // token user wants
          amount, // amountIn
          0n, // min amountOut (slippage control, 0 = accept anything)
          userAddress, // recipient
        ],
      });

      toast.info("Swap transaction sent...");
    } catch (e: any) {
      toast.error(e.message || "Transaction failed");
    }
  };

  if (isSuccess) toast.success("✅ Swap successful!");
  if (isError) toast.error("❌ Swap failed!");

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl mb-4 font-bold">Swap</h1>
      <p>
        Assume First input Field is the Token In and The second input field is
        the token Out address
      </p>
      <input
        type="text"
        placeholder="Token In address"
        value={tokenIn}
        onChange={(e) => setTokenIn(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Token Out address"
        value={tokenOut}
        onChange={(e) => setTokenOut(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Amount In"
        value={amountIn}
        onChange={(e) => setAmountIn(e.target.value)}
        className="border p-2 mb-2 w-full"
      />

      <button
        onClick={handleSwap}
        className="bg-indigo-600 text-white px-4 py-2 rounded w-full"
        disabled={isLoading}
      >
        {isLoading ? "Swapping..." : "Swap"}
      </button>
    </div>
  );
}
