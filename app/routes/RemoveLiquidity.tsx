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

export default function RemoveLiquidity() {
  const [lpAmount, setLpAmount] = useState("");

  const { writeContractAsync, data: hash } = useWriteContract();
  const { isLoading, isSuccess, isError } = useWaitForTransactionReceipt({
    hash,
  });

  const handleRemove = async () => {
    try {
      await writeContractAsync({
        address: "0xYourPairAddress",
        abi: routerAddress,
        functionName: "burn",
        args: ["0xYourUserAddress"],
      });
      toast.info("Burning LP...");
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  if (isSuccess) toast.success("Liquidity removed!");
  if (isError) toast.error("Burn failed!");

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Remove Liquidity</h1>
      <input
        type="text"
        placeholder="LP Amount"
        value={lpAmount}
        onChange={(e) => setLpAmount(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button
        onClick={handleRemove}
        className="bg-red-600 text-white px-4 py-2 rounded"
        disabled={isLoading}
      >
        {isLoading ? "Removing..." : "Remove Liquidity"}
      </button>
    </div>
  );
}
