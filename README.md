# Dex Two

Difficulty 4/10

This level will ask you to break DexTwo, a subtlely modified Dex contract from the previous level, in a different way.

You need to drain all balances of token1 and token2 from the DexTwo contract to succeed in this level.

You will still start with 10 tokens of token1 and 10 of token2. The DEX contract still starts with 100 of each token.

Things that might help:

How has the swap method been modified?
Could you use a custom token contract in your attack?

# Solution

Create another token, add liquidity to dex and swap token1 and token2 againt new created token.
