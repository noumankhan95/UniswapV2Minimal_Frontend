export const routerAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
export const wethAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
export const usdtAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
export const factoryAddress = "0xdc64a140aa3e981100a9beca4e685f962f0cf6c9";
export const usdtAbi = [
    { "type": "constructor", "inputs": [], "stateMutability": "nonpayable" },
    {
        "type": "function",
        "name": "allowance",
        "inputs": [
            { "name": "owner", "type": "address", "internalType": "address" },
            { "name": "spender", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "approve",
        "inputs": [
            { "name": "spender", "type": "address", "internalType": "address" },
            { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "balanceOf",
        "inputs": [
            { "name": "account", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "burn",
        "inputs": [
            { "name": "account", "type": "address", "internalType": "address" },
            { "name": "amount", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "decimals",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint8", "internalType": "uint8" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "mint",
        "inputs": [
            { "name": "account", "type": "address", "internalType": "address" },
            { "name": "amount", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "name",
        "inputs": [],
        "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "symbol",
        "inputs": [],
        "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "totalSupply",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "transfer",
        "inputs": [
            { "name": "to", "type": "address", "internalType": "address" },
            { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "transferFrom",
        "inputs": [
            { "name": "from", "type": "address", "internalType": "address" },
            { "name": "to", "type": "address", "internalType": "address" },
            { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "Approval",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "spender",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "value",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Transfer",
        "inputs": [
            {
                "name": "from",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "to",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "value",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "ERC20InsufficientAllowance",
        "inputs": [
            { "name": "spender", "type": "address", "internalType": "address" },
            { "name": "allowance", "type": "uint256", "internalType": "uint256" },
            { "name": "needed", "type": "uint256", "internalType": "uint256" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InsufficientBalance",
        "inputs": [
            { "name": "sender", "type": "address", "internalType": "address" },
            { "name": "balance", "type": "uint256", "internalType": "uint256" },
            { "name": "needed", "type": "uint256", "internalType": "uint256" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InvalidApprover",
        "inputs": [
            { "name": "approver", "type": "address", "internalType": "address" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InvalidReceiver",
        "inputs": [
            { "name": "receiver", "type": "address", "internalType": "address" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InvalidSender",
        "inputs": [
            { "name": "sender", "type": "address", "internalType": "address" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InvalidSpender",
        "inputs": [
            { "name": "spender", "type": "address", "internalType": "address" }
        ]
    }
]
export const wethAbi = [
    { "type": "constructor", "inputs": [], "stateMutability": "nonpayable" },
    {
        "type": "function",
        "name": "allowance",
        "inputs": [
            { "name": "owner", "type": "address", "internalType": "address" },
            { "name": "spender", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "approve",
        "inputs": [
            { "name": "spender", "type": "address", "internalType": "address" },
            { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "balanceOf",
        "inputs": [
            { "name": "account", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "burn",
        "inputs": [
            { "name": "account", "type": "address", "internalType": "address" },
            { "name": "amount", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "decimals",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint8", "internalType": "uint8" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "mint",
        "inputs": [
            { "name": "account", "type": "address", "internalType": "address" },
            { "name": "amount", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "name",
        "inputs": [],
        "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "symbol",
        "inputs": [],
        "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "totalSupply",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "transfer",
        "inputs": [
            { "name": "to", "type": "address", "internalType": "address" },
            { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "transferFrom",
        "inputs": [
            { "name": "from", "type": "address", "internalType": "address" },
            { "name": "to", "type": "address", "internalType": "address" },
            { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "Approval",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "spender",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "value",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Transfer",
        "inputs": [
            {
                "name": "from",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "to",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "value",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "ERC20InsufficientAllowance",
        "inputs": [
            { "name": "spender", "type": "address", "internalType": "address" },
            { "name": "allowance", "type": "uint256", "internalType": "uint256" },
            { "name": "needed", "type": "uint256", "internalType": "uint256" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InsufficientBalance",
        "inputs": [
            { "name": "sender", "type": "address", "internalType": "address" },
            { "name": "balance", "type": "uint256", "internalType": "uint256" },
            { "name": "needed", "type": "uint256", "internalType": "uint256" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InvalidApprover",
        "inputs": [
            { "name": "approver", "type": "address", "internalType": "address" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InvalidReceiver",
        "inputs": [
            { "name": "receiver", "type": "address", "internalType": "address" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InvalidSender",
        "inputs": [
            { "name": "sender", "type": "address", "internalType": "address" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InvalidSpender",
        "inputs": [
            { "name": "spender", "type": "address", "internalType": "address" }
        ]
    }
]

export const routerAbi = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_factory",
                "type": "address",
                "internalType": "contract Factory"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "AddLiquidity",
        "inputs": [
            { "name": "_tokenA", "type": "address", "internalType": "address" },
            { "name": "_tokenB", "type": "address", "internalType": "address" },
            { "name": "_reserveA", "type": "uint256", "internalType": "uint256" },
            { "name": "_reserveB", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "factory",
        "inputs": [],
        "outputs": [
            { "name": "", "type": "address", "internalType": "contract Factory" }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getAmountOut",
        "inputs": [
            { "name": "amountIn", "type": "uint256", "internalType": "uint256" },
            { "name": "reserveIn", "type": "uint256", "internalType": "uint256" },
            { "name": "reserveOut", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [
            { "name": "amountOut", "type": "uint256", "internalType": "uint256" }
        ],
        "stateMutability": "pure"
    },
    {
        "type": "function",
        "name": "removeLiquidity",
        "inputs": [
            { "name": "_tokenA", "type": "address", "internalType": "address" },
            { "name": "_tokenB", "type": "address", "internalType": "address" },
            { "name": "liquidity", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "sortTokens",
        "inputs": [
            { "name": "tokenA", "type": "address", "internalType": "address" },
            { "name": "tokenB", "type": "address", "internalType": "address" }
        ],
        "outputs": [
            { "name": "token0", "type": "address", "internalType": "address" },
            { "name": "token1", "type": "address", "internalType": "address" }
        ],
        "stateMutability": "pure"
    },
    {
        "type": "function",
        "name": "swapExactTokens",
        "inputs": [
            { "name": "_tokenIn", "type": "address", "internalType": "address" },
            { "name": "_tokenOut", "type": "address", "internalType": "address" },
            { "name": "_amountIn", "type": "uint256", "internalType": "uint256" },
            {
                "name": "_amountOutmin",
                "type": "uint256",
                "internalType": "uint256"
            },
            { "name": "_to", "type": "address", "internalType": "address" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    }
]

export const ERC20Abi = [
    {
        "type": "function",
        "name": "allowance",
        "inputs": [
            { "name": "owner", "type": "address", "internalType": "address" },
            { "name": "spender", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "approve",
        "inputs": [
            { "name": "spender", "type": "address", "internalType": "address" },
            { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "balanceOf",
        "inputs": [
            { "name": "account", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "decimals",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint8", "internalType": "uint8" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "name",
        "inputs": [],
        "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "symbol",
        "inputs": [],
        "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "totalSupply",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "transfer",
        "inputs": [
            { "name": "to", "type": "address", "internalType": "address" },
            { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "transferFrom",
        "inputs": [
            { "name": "from", "type": "address", "internalType": "address" },
            { "name": "to", "type": "address", "internalType": "address" },
            { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "Approval",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "spender",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "value",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Transfer",
        "inputs": [
            {
                "name": "from",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "to",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "value",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "ERC20InsufficientAllowance",
        "inputs": [
            { "name": "spender", "type": "address", "internalType": "address" },
            { "name": "allowance", "type": "uint256", "internalType": "uint256" },
            { "name": "needed", "type": "uint256", "internalType": "uint256" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InsufficientBalance",
        "inputs": [
            { "name": "sender", "type": "address", "internalType": "address" },
            { "name": "balance", "type": "uint256", "internalType": "uint256" },
            { "name": "needed", "type": "uint256", "internalType": "uint256" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InvalidApprover",
        "inputs": [
            { "name": "approver", "type": "address", "internalType": "address" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InvalidReceiver",
        "inputs": [
            { "name": "receiver", "type": "address", "internalType": "address" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InvalidSender",
        "inputs": [
            { "name": "sender", "type": "address", "internalType": "address" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InvalidSpender",
        "inputs": [
            { "name": "spender", "type": "address", "internalType": "address" }
        ]
    }
]

export const FactoryAbi = [
    {
        "type": "function",
        "name": "createPair",
        "inputs": [
            { "name": "_tokenA", "type": "address", "internalType": "address" },
            { "name": "_tokenB", "type": "address", "internalType": "address" },
            { "name": "_reserveA", "type": "uint256", "internalType": "uint256" },
            { "name": "_reserveB", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "getPair",
        "inputs": [
            { "name": "_tokenA", "type": "address", "internalType": "address" },
            { "name": "_tokenB", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "s_AllPairs",
        "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "s_contract_pair",
        "inputs": [
            { "name": "", "type": "address", "internalType": "address" },
            { "name": "", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "stateMutability": "view"
    },
    {
        "type": "event",
        "name": "PairCreated",
        "inputs": [
            {
                "name": "_tokenA",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "_tokenB",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    { "type": "error", "name": "Factory__Address0", "inputs": [] },
    { "type": "error", "name": "Factory__PairExists", "inputs": [] },
    { "type": "error", "name": "Factory__TokensIdentical", "inputs": [] }
]

export const EngineAbi = [
    {
        "type": "constructor",
        "inputs": [
            { "name": "_token0", "type": "address", "internalType": "address" },
            { "name": "_token1", "type": "address", "internalType": "address" }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "MINIMUM_LIQUIDITY",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "allowance",
        "inputs": [
            { "name": "owner", "type": "address", "internalType": "address" },
            { "name": "spender", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "approve",
        "inputs": [
            { "name": "spender", "type": "address", "internalType": "address" },
            { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "balanceOf",
        "inputs": [
            { "name": "account", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "burn",
        "inputs": [
            { "name": "to", "type": "address", "internalType": "address" }
        ],
        "outputs": [
            { "name": "amount0", "type": "uint256", "internalType": "uint256" },
            { "name": "amount1", "type": "uint256", "internalType": "uint256" }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "decimals",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint8", "internalType": "uint8" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getReserves",
        "inputs": [],
        "outputs": [
            { "name": "", "type": "uint112", "internalType": "uint112" },
            { "name": "", "type": "uint112", "internalType": "uint112" }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "mint",
        "inputs": [
            { "name": "to", "type": "address", "internalType": "address" }
        ],
        "outputs": [
            { "name": "liquidity", "type": "uint256", "internalType": "uint256" }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "name",
        "inputs": [],
        "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "swap",
        "inputs": [
            { "name": "amount0Out", "type": "uint256", "internalType": "uint256" },
            { "name": "amount1Out", "type": "uint256", "internalType": "uint256" },
            { "name": "to", "type": "address", "internalType": "address" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "symbol",
        "inputs": [],
        "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "token0",
        "inputs": [],
        "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "token1",
        "inputs": [],
        "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "totalSupply",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "transfer",
        "inputs": [
            { "name": "to", "type": "address", "internalType": "address" },
            { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "transferFrom",
        "inputs": [
            { "name": "from", "type": "address", "internalType": "address" },
            { "name": "to", "type": "address", "internalType": "address" },
            { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "Approval",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "spender",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "value",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Transfer",
        "inputs": [
            {
                "name": "from",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "to",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "value",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "ERC20InsufficientAllowance",
        "inputs": [
            { "name": "spender", "type": "address", "internalType": "address" },
            { "name": "allowance", "type": "uint256", "internalType": "uint256" },
            { "name": "needed", "type": "uint256", "internalType": "uint256" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InsufficientBalance",
        "inputs": [
            { "name": "sender", "type": "address", "internalType": "address" },
            { "name": "balance", "type": "uint256", "internalType": "uint256" },
            { "name": "needed", "type": "uint256", "internalType": "uint256" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InvalidApprover",
        "inputs": [
            { "name": "approver", "type": "address", "internalType": "address" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InvalidReceiver",
        "inputs": [
            { "name": "receiver", "type": "address", "internalType": "address" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InvalidSender",
        "inputs": [
            { "name": "sender", "type": "address", "internalType": "address" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InvalidSpender",
        "inputs": [
            { "name": "spender", "type": "address", "internalType": "address" }
        ]
    }
]